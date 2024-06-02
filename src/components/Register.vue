<template>
    <div class="container">
        <v-form class="form-container" @submit.prevent>
            <v-text-field v-model="name" required label="Name"></v-text-field>
            <v-text-field v-model="email" type="email" label="Email" aria-placeholder="john@gmail.com" ></v-text-field>
            <v-btn type="submit" text="Register" block :to ="`/weatherapp/${name}`"></v-btn>
            <!-- <div v-if="showMessage">Name is {{ name }} and email is {{ email }}</div> -->
        </v-form>
    </div>
</template>
<script setup>
import { ref } from "vue";
const name = ref(null)
const email = ref(null)
const showMessage = ref(false)

const toggleMessage = () => {
    showMessage.value = true
}
</script>

<style scoped>
.container{
    margin-top: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.form-container {
    flex-direction: column;
    display: flex;
    width: 50%;
    /* box-shadow: 2px 4px 5px 0px #00000070; */
    /* border: 1px solid grey; */
}
</style>