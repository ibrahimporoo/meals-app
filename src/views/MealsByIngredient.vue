<template>
	<div class="px-4 mx-auto">
		<div v-if="meals && meals.length > 0" class="mx-auto w-full sm:w-10/12 grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
			<template v-for="meal in meals" :key="meal.idMeal">
				<MealItem :meal="meal" />
			</template>
		</div>
		<div v-else class="mx-auto w-full sm:w-10/12 py-4">
			<h2 v-if="ingredient.length > 0" class="font-bold text-sn md:text-lg text-black">Try another ingredient keyword, no such "Meal" with this keyword: <small class="underline">"{{ ingredient }}"</small> till now</h2>
			<h2 v-else class="font-bold text-sn md:text-lg text-black">Enter an ingredient keyword to get needed delicious meals</h2>
		</div>
	</div>
</template>

<script setup>
	import MealItem from '../components/MealItem.vue';
	import { computed, onMounted, ref, watch } from 'vue';
	import store from '../store';
	import { useRoute } from 'vue-router';

	const route = useRoute()
	const ingredient = ref('')

	const get_meals = () => {
		ingredient.value = route.params.ingredient || ''
		store.dispatch('searchMealsByIngredient', ingredient.value)
	}

	onMounted(get_meals)

	watch(route, get_meals)

	const meals = computed(() => store.state.mealsByIngredient)
</script>
