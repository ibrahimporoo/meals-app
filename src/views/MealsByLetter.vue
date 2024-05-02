<template>
	<div class="px-4 mx-auto ">
		<div class="p-4 mx-auto bg-orange-400 w-full sm:w-10/12 text-white">
			<h4 class="text-center mt-2">Click to any letter to get all Meals that start with this letter</h4>
			<div class="flex justify-center gap-2 flex-wrap pt-4 px-1">
				<router-link v-for="(letter, index) in letters" :key="index"
					class="border-2 w-8 h-8 rounded-full flex justify-center items-center hover:scale-105"
					:class="{ 'scale-105 border-red-400': isActive}"
					@click="() => handleClick(letter)"
					:to="{ name: 'byLetter', params: { letter } }"
				>
					{{ letter }}
				</router-link>
			</div>
		</div>
		<div v-if="meals && meals.length > 0" class="mx-auto w-full sm:w-10/12 grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
			<template v-for="meal in meals" :key="meal.idMeal">
				<MealItem :meal="meal" />
			</template>
		</div>
		<div v-else class="mx-auto w-full sm:w-10/12 py-4">
			<h2 v-if="letter" class="font-bold text-sn md:text-lg text-black">Try another letter, no such "Meal" with this Letter: <small class="underline">"{{ letter }}"</small> till now</h2>
			<h2 v-else class="font-bold text-sn md:text-lg text-black">Click a letter to get some meals that start with</h2>
		</div>
	</div>
</template>

<script setup>
	import MealItem from '../components/MealItem.vue';
	import { computed, onMounted, ref } from 'vue'
	import store from '../store';
	import { useRoute } from 'vue-router';

	const letter = ref('a')
	const letters = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(",")
	const isActive = ref(false)
	const route = useRoute()

	const handleClick = (l) => {
		letter.value = l
		store.dispatch('searchMealByLetter', letter.value)
	}

	onMounted(() => {
		letter.value = route.params.letter || 'a'
		store.dispatch('searchMealByLetter', letter.value)
	})

	const meals = computed(() => store.state.mealsByLetter)
</script>
