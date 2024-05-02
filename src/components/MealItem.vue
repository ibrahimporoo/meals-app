<template>
	<div class="bg-white shadow-md rounded-md overflow-hidden">
		<img class="w-full h-48 object-cover" :src="meal.strMealThumb" :alt="meal.strMeal">
		<div class="p-4">
			<p class="mb-4 line-clamp-3">
				{{ meal.strInstructions }}
			</p>
			<div class="flex items-center gap-2 mt-4">
				<a class="bg-red-600 text-white rounded-md p-2 text-sm hover:scale-105 duration-200"
				:href="meal.strYoutube" target="_blank">Youtube</a>
				<router-link class="bg-purple-600 text-white rounded-md p-2 text-sm hover:scale-105 duration-200"
				:to="{ name: 'byMealDetails', params: { id: meal.idMeal } }">View</router-link>
			</div>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		meal: Object
	})
</script>