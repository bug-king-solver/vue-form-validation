<script setup lang="ts">
import { onMounted } from 'vue';
import InputList from './components/InputList.vue';
import { store } from './store';
import { ActionType } from './store/actions';
onMounted(() => store.dispatch(ActionType.GetAllFields))
</script>

<template>
  <InputList />
</template>
