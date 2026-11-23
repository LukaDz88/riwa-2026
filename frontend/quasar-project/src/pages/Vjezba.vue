<template>
  <q-page padding>
      <q-card class="my-card">
        <q-card-section>
          Joke: {{joke}}
        </q-card-section>
        <div class="q-pa-md q-gutter-sm">
          <q-btn color="primary" text-color="white" label="Joke" @click="loadJoke" />
        </div>
      </q-card>

  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';

const joke = ref('');

//let books = ref([])
onMounted(() => {
 loadJoke()
})
async function loadJoke() {
 await axios.get('https://dumbapis.com/joke')
 .then(result => {
    joke.value=result.data.joke
  })
  .catch(error => {
    console.error(error)
  })
}

</script>
