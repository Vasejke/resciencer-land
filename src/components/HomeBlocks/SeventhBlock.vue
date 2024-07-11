<script setup>
import CostDivTemplate from "@/components/CostDivTemplate.vue";
const featuresArray2 = [
  "Всё из основного тарифа",
  "Чат со мной, в котором сможешь задавать вопросы по всем д/з",
  "Личный видео-разбор всех домашних заданий 2 раза в неделю",
  "Мастер-классы по анимации интерфейсов в Principle, Protopie",
  "Доступ к курсу на 2 года",
  "Публичное освещение лучших работ в моём телеграм-канале",
  "Дополнительный проект в портфолио — Сервис на Desktop",
];
</script>
<template>
  <div class="h-auto bg-[#010101] py-10 sm:py-20 w-full flex justify-center">
    <div
      class="container flex flex-col items-center w-full gap-10 px-6 sm:px-0"
    >
      <h1
        class="text-[28px] sm:text-[56px] leading-[100%] tracking-[-4%] text-white-default font-extrabold sm:text-start text-center"
      >
        <span>Записаться на обучение</span>
      </h1>
      <div
        class="w-full flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <CostDivTemplate class="sm:w-1/2 h-full" />
        <CostDivTemplate
          class="sm:w-1/2 h-full"
          rate-name="Тариф с наставником"
          current-price="3 332"
          places-number="5"
          price="79 990 ₽"
          stroke-price="89 990 ₽"
          :dark-component="false"
          :features-array="featuresArray2"
        />
      </div>
    </div>
  </div>
</template>
