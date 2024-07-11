<script setup>
import CardTempalte from "../CardTempalte.vue";
import image1 from "@/assets/features2/1.png";
import image2 from "@/assets/features2/2.png";
import image3 from "@/assets/features2/3.png";
import image4 from "@/assets/features2/4.png";

const cardsArray = [
  {
    title: "Учёба и практика",
    description:
      "Проходишь короткие уроки по 10-15 минут, в конце каждого модуля — делаешь дипломный проект",
    imageSrc: image1,
  },
  {
    title: "Личный арт-дирекшн",
    description:
      "Каждый проект для портфолио проходит видео-разбор, я лично подключусь и помогу тебе исправить все недочёты",
    imageSrc: image2,
  },
  {
    title: "Сборка портфолио",
    description:
      "Ты получишь шаблоны, которые помогут быстро собрать проекты в портфолио и начать откликаться на вакансии",
    imageSrc: image3,
  },
  {
    title: "Работа и карьера",
    description:
      "Когда портфолио готово, у тебя откроется бонусный модуль. В нём будут собраны уроки по трудоустройству и поиску клиентов",
    imageSrc: image4,
  },
];
</script>

<template>
  <div class="h-auto bg-[#010101] py-10 sm:py-20 w-full flex justify-center">
    <div
      class="container w-full flex flex-col justify-start items-center gap-4 sm:gap-6 px-6 sm:px-0"
    >
      <h1
        class="text-[28px] sm:text-[56px] leading-[100%] tracking-[-4%] text-white-default font-extrabold text-center"
      >
        <span class="text-color1"> Ты будешь готов</span><br />
        <span>к реальной работе</span>
      </h1>
      <p
        class="sm:w-2/3 text-lg sm:text-2xl text-gray text-center mb-6 sm:mb-8"
      >
        Обучение сформирует у тебя понимание как создаются
        <br class="hidden sm:block" />проекты в студиях и агентствах. На каждом
        дипломном проекте я <br class="hidden sm:block" />
        буду подключаться к тебе и давать фидбек по твоим макетам
      </p>
      <div class="w-full flex flex-col sm:flex-row gap-4">
        <CardTempalte
          v-for="(card, index) in cardsArray"
          :bonus-active="index === 3"
          :key="card"
          :title="card.title"
          :description="card.description"
          :image-src="card.imageSrc"
          class="w-full h-[370px] sm:max-h-[370px]"
        />
      </div>
    </div>
  </div>
</template>
