import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'



export const useBodyPartsStore = defineStore('bodyParts', () => {
  const bodyParts: Ref<string[]> = ref([])
  const equipmentList: Ref<string[]> = ref([])
  const exercises:Ref<ExerciseType[]> = ref([])

 function setBodyParts(items: Array<string>) {
    bodyParts.value = items
  }
  function setEquipmentList(items: Array<string>) {
    equipmentList.value = items
  }
  function setExercises(items: Array<ExerciseType>) {
    exercises.value = items
  }
  function resetExercises() {
    exercises.value = []
  }
  function destroy() {
    bodyParts.value = []
    equipmentList.value = []
  }
  return { bodyParts, setBodyParts, destroy, equipmentList, setEquipmentList, exercises, setExercises, resetExercises }
})

interface ExerciseType {
  bodyPart: string,

  equipment: string,

  gifUrl: string,

  id: string,

  name: string,

  target: string,
}
