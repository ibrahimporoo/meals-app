<template>
	<router-link class="rounded-md bg-white p-2" :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }">
		<h2 class="font-bold text-lg mb-2">{{ ingredient.strIngredient }}</h2>
		<p>{{ ingredient.strDescription }}</p>
	</router-link>
</template>

<script setup>
	const props = defineProps({
		ingredient: {
			required: true,
			type: String,
		}
	})
</script>