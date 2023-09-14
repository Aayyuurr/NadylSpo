<script setup lang="ts">
	//imports
	import {  RouterView } from 'vue-router';
	import { fetcherWrapper } from '@/lib/api';
	import { useBodyPartsStore } from '@/stores/counter';
	import { storeToRefs } from 'pinia';
	import { Button } from '@/components/ui/button';
	import { ref } from 'vue';


	//store
	const store = useBodyPartsStore();
	const { bodyParts, equipmentList, exercises } = storeToRefs(store);
	const { setBodyParts, setEquipmentList, resetExercises, setExercises } = store;
	let equipe= ref();
	let part= ref();

	async function checkBodyParts(bodyp: String[], equip: String[]) {
		if (bodyp.length == 0) {
			let data = await fetcherWrapper('bodyPartList');
			setBodyParts(data);
		}
		if (equip.length == 0) {
			let data = await fetcherWrapper('equipmentList');
			setEquipmentList(data);
		}
	}
	checkBodyParts(bodyParts.value, equipmentList.value);

	// Queries

	async function getExercisesByBodyPart(url: string) {
		let data = await fetcherWrapper(`bodyPart/${url}`);
		resetExercises();
		if(equipe.value!=undefined){
			let partialData = data.filter((el: any) => el.equipment == equipe.value);
			setExercises(partialData) ;
		}
		else{
			setExercises(data) ;
		}
		console.log(exercises.value)


	}
	async function getExercisesByEquipement(url: string) {
		let data = await fetcherWrapper(`equipment/${url}`);
		resetExercises();
		if(part.value!=undefined){

			let partialData = data.filter((el: any) => el.bodyPart == part.value);
			setExercises(partialData) ;
		}
		else{
			setExercises(data) ;
		}
		console.log(exercises.value)
	}

</script>

<template>
	<div class="flex flex-col  w-screen h-screen gap-2">
		<header class="basis-1/12">
			<nav class='gap-5 flex flex-col'>
				<div class="flex flex-wrap gap-1 justify-center">
					<Button
						v-for="(equipment, index) in equipmentList"
						:key="index"
						@click="getExercisesByEquipement(equipment); equipe=equipment"
						variant='secondary'
					>
						{{ equipment }}
					</Button>

				</div>
				<div class="flex flex-row gap-2 justify-center">
					<Button
						v-for="(bodyPart, index) in bodyParts"
						:key="index"
						@click="getExercisesByBodyPart(bodyPart); part=bodyPart"
					>
						{{ bodyPart }}
					</Button>
				</div>
				<div  class="flex flex-row gap-2 justify-center">
					<h2>equipement: {{ equipe }}</h2>
					<h2>bodyPart: {{ part }}</h2>
					<Button
						@click="equipe=undefined; part=undefined">
						Reset
					</Button>
				</div>
			</nav>
		</header>
		<main class="basis-11/12 flex  flex-wrap gap-2">

			<RouterView />
		</main>
	</div>
</template>
