<script setup>
import AccordionContent from "@/components/AccordionContent.vue";
</script>

<template>
  <div
    class="h-auto bg-[#010101] sm:bg-last bg-cover bg-center bg-no-repeat py-10 sm:py-20 w-full flex justify-center"
  >
    <div class="container flex flex-col items-center w-full px-4 sm:px-0">
      <h1
        class="text-[28px] sm:text-[56px] leading-[100%] tracking-[-4%] text-white-default font-extrabold text-center"
      >
        <span>Ответы на вопросы</span>
      </h1>
      <p class="sm:w-2/3 text-lg sm:text-2xl text-gray text-center mt-4">
        Если что-то осталось не понятным — напиши в поддержку и мы ответим
      </p>
      <a
        href="https://t.me/resciencer_help"
        class="text-lg sm:text-2xl text-[#04C7FF] mt-2 mb-10"
        >Задать вопрос</a
      >
      <AccordionContent class="w-full" />
    </div>
  </div>
</template>
