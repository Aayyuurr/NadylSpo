<script setup lang="ts">

	import { storeToRefs } from 'pinia';
	import CardData from '@/components/CardData.vue';
	import { useBodyPartsStore } from '@/stores/counter';


	const store = useBodyPartsStore();

	const {  exercises } = storeToRefs(store);
</script>

<template>
  <main>
 	 <div class="flex  flex-wrap gap-2">
			 <CardData
							 v-for="(cont, index) in exercises"
							 :id="cont.id"
							 :target="cont.target"
							 :name="cont.name"
							 :gif-url="cont.gifUrl"
							 :equipment="cont.equipment"
							 :body-part="cont.bodyPart"
		 />
		</div>
  </main>
</template>
