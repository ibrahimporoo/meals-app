<template>
	<div class="mx-auto px-4">
		<div class="p-4 mx-auto bg-orange-400 w-full sm:w-10/12">
			<input type="search" placeholder="Search for a meal..."
				class="w-full rounded-md border-blue-300 border-2 outline-0 focus:outline-0 focus:border-2"
				v-model="keyword"
			/>
		</div>
		<div v-if="meals && meals.length > 0" class="mx-auto w-full sm:w-10/12 grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
			<template v-for="meal in meals" :key="meal.idMeal">
				<MealItem :meal="meal" />
			</template>
		</div>
		<div v-else class="mx-auto w-full sm:w-10/12 py-4">
			<h2 class="font-bold text-sn md:text-lg text-black">Type another keyword to get some of our delicious Meals</h2>
		</div>
	</div>
</template>

<script setup>
	import MealItem from '../components/MealItem.vue';
	import { useRoute } from 'vue-router'
	import { computed, onMounted, ref, watch } from 'vue'
	import store from '../store';

	const route = useRoute()

	const keyword = ref(store.state.keyword)
	const meals = computed(() => store.state.searchedMeals)

	watch(keyword, (newValue) => {
		store.dispatch('handleKeyword', newValue)
		if(newValue && newValue.length > 0) {
			store.dispatch('searchMeal', newValue)
		}
	})

	onMounted(() => {
		keyword.value = route.params.name || store.state.keyword
		store.dispatch('searchMeal', keyword.value)
	})


</script>
