<script lang="ts" setup>
	//	imports
	import { RouterLink } from 'vue-router';

	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle,
	} from '@/components/ui/card'
	import { Button } from '@/components/ui/button';
	//	defineprops
	const props = defineProps({
		bodyPart: { type: String, required: true },

		equipment: { type: String, required: true },

		gifUrl: { type: String, required: true },

		id: { type: String, required: true },

		name: { type: String, required: true },

		target: { type: String, required: true },
	});
</script>

<template>
	<Card class='w-80'>
		<CardHeader>
			<CardTitle>{{ props.name }}</CardTitle>
			<CardDescription>{{ props.bodyPart }}</CardDescription>
			<CardDescription>{{ props.equipment }}</CardDescription>
			<CardDescription>{{ props.target }}</CardDescription>
		</CardHeader>
		<CardContent>
			<img :src="props.gifUrl" />
		</CardContent>
		<CardFooter>
			<RouterLink :to="props.id" class='text-primary underline-offset-4 hover:underline'>See more</RouterLink>
			<Button class='ml-8'>add to a list</Button>
		</CardFooter>
	</Card>
</template>

<style lang="scss" scoped></style>
