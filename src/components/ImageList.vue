<template>
    <div class="image-class" :style="imageUrl" @click="onClick(id)">

    </div>
</template>
<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
// const emit = defineEmits(['handleClick'])
const router = useRouter()
const props = defineProps({
    url: {
        type: String,
        default: null
    },
    title: {
        type: String,
        default: null
    },
    id: {
        type: Number,
        default: null
    }
})
    const imageUrl = computed(() =>{
        return `background: url(http://image.tmdb.org/t/p/w500${props.url}) top/contain no-repeat`
    })

    const onClick = (id) => {
        // emit('handleClick', title)
        router.push({ name:'moviepage', path: `/movies/${id}`, params: { id: id}})
    }
</script>

<style scoped>
.image-class{
    width: 300px;
    height: 500px;
    margin: 10px;
}
</style>
