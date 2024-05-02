<template>
  <header class="h-16 bg-white shadow-md px-4">
    <div class="container h-full mx-auto flex items-center justify-between w-full sm:w-10/12">
      <router-link to="/">
        <img :src="logo" alt="logo" class="max-w-12 m-4">
      </router-link>
      <ul class="h-full menu-links flex items-center gap-2">
        <li class="h-full">
          <router-link class="h-full flex items-center p-2 hover:bg-orange-400 hover:text-white duration-200"
          :class="{ 'bg-orange-400 text-white': isByNameActive }"
          :to="{ name: 'byName' }">Search Meals</router-link>
        </li>
        <li class="h-full">
          <router-link class="h-full flex items-center p-2 hover:bg-orange-400 hover:text-white duration-200"
          :class="{ 'bg-orange-400 text-white': isByLetterActive }"
          :to="{ name: 'byLetter' }">Meals By Letter</router-link>
        </li>
        <li class="h-full">
          <router-link class="h-full flex items-center p-2 hover:bg-orange-400 hover:text-white duration-200"
          :class="{ 'bg-orange-400 text-white': isByIngredientActive }"
          :to="{ name: 'ingredients' }">Ingredients</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
  import { ref, watch } from 'vue';
  import logo from '../assets/logo-food.png'
  import { useRoute } from 'vue-router';

  const isByNameActive = ref(false)
  const isByLetterActive = ref(false)
  const isByIngredientActive = ref(false)

  const route = useRoute()

  watch(() => {
    isByNameActive.value = false
    isByLetterActive.value = false
    isByIngredientActive.value = false

    if(route.path.split("/").includes('by-name')) {
      isByNameActive.value = true
    } else if (route.path.split("/").includes('by-letter')) {
      isByLetterActive.value = true
    } else {
      isByIngredientActive.value = true
    }

  })

</script>
