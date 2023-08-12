<template>
    <div class="flex justify-center mb-5">
        <div class="flex rounded-md shadow-sm w-full">
            <input type="text" id="hs-trailing-button-add-on" name="hs-trailing-button-add-on"
                class="py-3 px-4 block w-full border-2 border-slate-900 rounded-l-md text-sm focus:z-10 focus:border-sky-500 focus:ring-blue-500">
            <button type="button"
                class="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                @click="remove(id)">
                Remove
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">

const { id, remove } = defineProps<{
    id: number,
    remove: (id: number) => void
}>()
</script>