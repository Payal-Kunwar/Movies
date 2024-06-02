<template>
    <nav></nav>
    <main class="main">
        <h1>Top Rated</h1>
        <section class="series d-flex">
            <div class="container d-flex" v-if="topRated.length">
                <ImageList v-for="series in topRated" 
                    :key="series.id" 
                    :title="series.title" 
                    :url="series.poster_path"
                    :id="series.id"
                    @handle-click = changeTitle
                />
                <!-- <p style="font-size: 10px;"> {{ .description }}</p> -->
            </div>
            <div v-else>Loading...</div>
        </section>
        <h1>Popular</h1>
        <section class="series d-flex">
            <div class="container d-flex" v-if="seriesWatch.length">
                <ImageList v-for="series in seriesWatch" 
                    :key="series.id" 
                    :title="series.title" 
                    :url="series.poster_path"
                    :id="series.id"
                    @handle-click = changeTitle
                />
                <!-- <p style="font-size: 10px;"> {{ .description }}</p> -->
            </div>
            <div v-else>Loading...</div>
        </section>

        <section class="movies">
            
        </section>
    </main>
</template>
<script setup>
    import { computed, onMounted, reactive, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import ImageList from './ImageList.vue';

    const titleContent = ref({})

    const changeTitle = e =>{
        console.log(e)
        titleContent.value = {
            title: e,
            show: true
        }
    }
    //data
    const router = useRouter()

    const recentWatch = reactive([
        {
            name: 'Frozen-II',
            description: 'This is a movie description. It is really good one. You will have all kind of emotional blast'
        },
        {
            name: 'Beauty and the Beast',
            description: 'This is a movie description. It is really good one. You will have all kind of emotional blast'
        },
        {
            name: 'Snow White',
            description: 'This is a movie description. It is really good one. You will have all kind of emotional blast'
        },
        {
            name: 'Santa Banta',
            img: '',
            description: 'This is a movie description. It is really good one. You will have all kind of emotional blast'
        }
    ]) 
    let seriesWatch = ref([])
    let topRated = ref([])
    let getSeries = computed(() => {
        console.log("Series data reactivity=>", seriesWatch.value)
    })

    //methods
    const showMovie = (name) => {
        router.push({path: `/movies/${name}`})
    }

    onMounted( async () => {
        try {
            const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
            // const options = {
            //   method: 'GET',
            //   headers: {
            //     accept: 'application/json',
            //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTVmNDNiMTgwNjg3MGZkY2IxMDNiYTZiNTZkZGU0NiIsInN1YiI6IjY2NTJjNmIzMmQwZDA2YmMwZTcxYTg2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bI3tSvJT92pp1QGED6IGQYEYhs4UmhfN832y9p4-Krs'
            //   }
            // };
            const options= {
                method: 'GET',
                heaser: {
                    accept: 'application/json',
                    Authorization: 'earer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTVmNDNiMTgwNjg3MGZkY2IxMDNiYTZiNTZkZGU0NiIsInN1YiI6IjY2NTJjNmIzMmQwZDA2YmMwZTcxYTg2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bI3tSvJT92pp1QGED6IGQYEYhs4UmhfN832y9p4-Krs'
                }
            }
            
            fetch(url, options)
              .then(res => res.json())
              .then(data => {
                console.log(data)
                seriesWatch.value = [...seriesWatch.value, ...data.results]
              })

              const options2 = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTVmNDNiMTgwNjg3MGZkY2IxMDNiYTZiNTZkZGU0NiIsInN1YiI6IjY2NTJjNmIzMmQwZDA2YmMwZTcxYTg2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bI3tSvJT92pp1QGED6IGQYEYhs4UmhfN832y9p4-Krs'
                }
              }
              fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options2)
              .then(res => res.json())
              .then(data => {
                console.log(data)
                topRated.value = [...topRated.value, ...data.results]
              })

        } catch(err) {
                    throw new Error(err)
                }
    })
</script>

<style scoped>
.main{
    background-color: rgb(0, 0, 0);
    overflow-x: auto;
}
.recents {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: rgb(0, 0, 0);
    padding: 1%;
    overflow-x: auto;
}
.recent-list {
    margin: 2%;
    padding: 2%;
}

.recent-list:hover {
    box-shadow: 0px 1px 9px 0 #828282;
    padding: 2%;
}
.recent-movie-img{
    background: url();
    border: 1px solid rgb(116, 116, 116);
    height: 70px;
    width: 100%;
}
.container {
    justify-content: space-around;
}
</style>