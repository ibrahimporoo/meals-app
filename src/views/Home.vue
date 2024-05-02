<template>
	
</template>

<script setup>

	import { onMounted } from 'vue'
	import axiosClient from '../axiosClient'

	onMounted(async () => {
		const response = await axiosClient.get('list.php?c=list')
		console.log(response)
	})

</script>
