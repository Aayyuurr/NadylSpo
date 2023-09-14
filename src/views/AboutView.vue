<script setup lang="ts">
	import { fetcherWrapper } from '@/lib/api';
// 	get params.id
	import { useRoute } from 'vue-router';
	const $route = useRoute();
	console.log($route.params.id);
// async function getExercise() {
// 	let data = await fetcherWrapper(`/exercise/${$route.params.id}`);
// 	console.log(data);
// }
// getExercise()
</script>


<template>
  <div class="about">
	<p>{{ $route.params.id }}</p>


  </div>
</template>

