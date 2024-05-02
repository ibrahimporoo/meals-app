<template>
	<div class="px-4 mx-auto">
		
		<div v-if="ingredients && ingredients.length > 0" class="mx-auto w-full sm:w-10/12 grid grid-cols-1 gap-2 py-4">
			<h2 class="font-bold text-2xl my-2">Ingredients</h2>
			<template v-for="ingredient in ingredients" :key="ingredient.idIngredient">
				<MealIngredient :ingredient="ingredient" />
			</template>
		</div>
		<h2 v-else class="font-bold text-sn md:text-lg text-black">There are no ingredients yet, try spaeter.</h2>
	</div>
</template>

<script setup>
	import MealIngredient from '../components/MealIngredient.vue';
	import { computed, onMounted } from 'vue'
	import store from '../store';

	onMounted(() => {
		store.state.ingredients.length > 0 || store.dispatch('searchedIngredients')
	})

	const ingredients = computed(() => store.state.ingredients)
</script>
