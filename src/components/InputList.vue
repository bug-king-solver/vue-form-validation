<template>
    <div class="container w-[500px]">
        <div class="mt-[200px]">
            <form action="" @submit.prevent="submit">
                <div class="flex justify-end mb-7">
                    <button type="button"
                        class="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                        @click="add">
                        Add
                    </button>
                </div>
                <div v-for="(_, index) in fields.collection" :key="index">
                    <div class="flex justify-center mb-5">
                        <div class="flex rounded-md shadow-sm w-full">
                            <input v-model="v.collection.$model[index].fieldValue" type="text"
                            :class="{ 'border-2 border-rose-500': v.collection.$each.$response.$data[index].fieldValue.$error && v.$dirty, 'border-2 border-green-500': !v.collection.$each.$response.$data[index].fieldValue.$error }"
                            class="block w-full border-2 text-gray-900 focus:border-sky-500"
                            >
                            <button type="button"
                                class="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                                @click="remove(index)">
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between mt-7">
                    <button type="submit"
                        class="py-3 px-4 inline-flex w-full flex-shrink-0 justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { required, helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'


const fields = reactive({
    collection: [
        { fieldValue: "" }, { fieldValue: "" }
    ]
})

const rules = {
    collection: {
        $each: helpers.forEach({
            fieldValue: {
                required
            }
        })
    }
}

const v = useVuelidate(rules, fields);

const add = () => {
    fields.collection.push({ fieldValue: "" });
}

const remove = (index: number) => {
    fields.collection.splice(index, 1);
}

const submit = () => {
    v.value.$touch();
    if (!v.value.$invalid) {
        alert("Success");
    } else {
        alert("Form not valid");
    }
}
</script>
