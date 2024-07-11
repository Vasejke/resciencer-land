<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  imageSrc: {
    type: String,
    default: "",
  },
  bonusActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="border border-[#142F3A] flex flex-col justify-between items-center relative flex-grow rounded-[32px]"
  >
    <span
      v-if="bonusActive"
      class="font-medium py-2 px-6 bg-[#02A4FE] absolute top-0 -right-3 sm:-right-6 rounded-[22px] text-white-default text-lg sm:text-2xl rotate-12"
      >Bonus</span
    >
    <div class="px-6 p-4 flex flex-col">
      <h1
        class="text-lg sm:text-2xl text-white-default font-bold mb-2 tracking-[-1px]"
        v-html="title"
      ></h1>
      <p class="text-gray text-base font-medium">{{ description }}</p>
    </div>
    <img
      :src="imageSrc"
      :alt="imageSrc"
      class="w-full h-auto bottom-0 rounded-b-[32px] -mt-4"
    />
  </div>
</template>
