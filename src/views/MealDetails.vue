<template>
	<div class="mx-auto w-full sm:w-10/12 py-4">
		<h2 class="font-bold text-3xl text-black mb-3 md:text-4xl">{{ meal.strMeal }}</h2>
		<img class="w-full h-96 object-cover mb-3 rounded-t-md" :src="meal.strMealThumb" :alt="meal.strMeal">
		<div class="grid grid-cols-1 md:grid-cols-3 mb-3">
			<p v-if="meal.strCategory">Category: <strong>{{ meal.strCategory }}</strong></p>
			<p v-if="meal.strArea">From: <strong>{{ meal.strArea }}</strong></p>
			<p v-if="meal.strTags">Tags: <strong>{{ meal.strTags }}</strong></p>
		</div>
		<p class="mb-3">
			{{ meal.strInstructions }}
		</p>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
			<div>
				<h2 class="font-semibold text-2xl mb-3">Ingredients</h2>
				<ul>
					<template v-for="(el, idx) of new Array(20)" :key="idx">
						<li v-if="meal[`strIngredient${idx + 1}`]"> {{ idx + 1 }}. {{ meal[`strIngredient${idx + 1}`] }}</li>
					</template>
				</ul>
			</div>
			<div>
				<h2 class="font-semibold text-2xl mb-3">Measures</h2>
				<ul>
					<template v-for="(el, idx) of new Array(20)" :key="idx">
						<li v-if="meal[`strIngredient${idx + 1}`]"> {{ idx + 1 }}. {{ meal[`strIngredient${idx + 1}`] }}</li>
					</template>
				</ul>
			</div>
		</div>
	</div>

</template>

<script setup>

	import { onMounted, ref } from 'vue';
	import { useRoute } from 'vue-router';
	import axiosClient from '../axiosClient';

	const route = useRoute()
	const meal = ref({})

	const setMeal = async () => {
		const { data } = await axiosClient.get(`lookup.php?i=${route.params.id}`)
		console.log(data)
		meal.value = data.meals[0] || {}
	}

	onMounted(setMeal)


</script>