<template>
    <div class="container w-[500px]">
        <div class="mt-[200px]">
            <form>
                <div class="flex justify-end mb-7">
                    <button type="button"
                        class="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm">
                        Add
                    </button>
                </div>
                <InputItem />
                <div class="flex justify-between mt-7">
                    <button type="button"
                        class="py-3 px-4 inline-flex w-full flex-shrink-0 justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup lang="ts">
import InputItem from './InputItem.vue';
</script>