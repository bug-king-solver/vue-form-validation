<template>
    <div class="container w-[500px]">
        <div class="mt-[200px]">
            <form>
                <div class="flex justify-end mb-7">
                    <button type="button"
                        class="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                        @click="add">
                        Add
                    </button>
                </div>
                <div v-for="(_, index) in fields" :key="index">
                    <InputItem :id="index" />
                </div>
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
import { computed } from 'vue';
import { useStore } from '../store';
import { ActionType } from '../store/actions';
import { InputField } from '../store/state';
import InputItem from './InputItem.vue';
const store = useStore();
const fields = computed(() => store.state.fields);
const add = () => {
    const field: InputField = {
        value: ""
    };
    store.dispatch(ActionType.AddField, field);
}
</script>