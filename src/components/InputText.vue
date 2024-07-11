<template>
  <div class="flex flex-col gap-1">
    <input
      v-model="value"
      :type="type || 'text'"
      :placeholder="placeholder"
      class="h-[80px] bg-[#2C2C2D] rounded-[16px] text-white-default p-6 text-lg sm:text-2xl font-medium"
      :class="errorMessage ? 'ring-1 ring-[#EB362A]' : ''"
    />
    <span class="text-[#EB362A]">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";

const props = defineProps({
  name: String,
  type: String,
  placeholder: String,
});

const { value, errorMessage } = useField(() => props.name);
</script>
