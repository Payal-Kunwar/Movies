<template>
    <v-btn to="/movies">Home</v-btn>
    <div class="container" v-if="movie?.id">
        <h1 style="text-align: center;">
            {{ movie.original_title }}
        </h1>
        <div class="image-class" :style="imageStyle"></div>
        <section>
            <p>Tagline: {{ movie.tagline }}</p>
            <p>Budget: Rs. {{ movie.budget }}</p>
            <p>Overview: {{ movie.overview }}</p>
        </section>
    </div>
    <div v-else><h1>Loading...</h1></div>
    
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const movie = ref()

const imageStyle = computed(() =>{
    console.log("Styling se seedhe",movie.value)
    return movie.value ? `background: url(http://image.tmdb.org/t/p/w500${movie.value.poster_path}) top/contain no-repeat` : ''
})

onMounted( async () => {
    try{
        const options = {
            method: 'GET',
            headers: {
                accept: 'Application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTVmNDNiMTgwNjg3MGZkY2IxMDNiYTZiNTZkZGU0NiIsInN1YiI6IjY2NTJjNmIzMmQwZDA2YmMwZTcxYTg2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bI3tSvJT92pp1QGED6IGQYEYhs4UmhfN832y9p4-Krs'
            }
        }
        const data = await fetch(`https://api.themoviedb.org/3/movie/${route.params.id}?language=en-US`, options)
        .then(res => res.json())
        movie.value = data
        console.log(data)
    } catch(err){
        throw new Error(err)
    }
})
</script>

<style scoped>
.image-class {
    height: 500px;
    width: 100%;
}
.container{
    color: white;
    background-color: black;
}
</style>