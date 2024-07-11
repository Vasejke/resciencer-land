<script setup>
import CardTempalte from "../CardTempalte.vue";
import imageFirst from "@/assets/features/first.png";
import imageSecond from "@/assets/features/second.png";
import imageThird from "@/assets/features/third.png";
import imageFour from "@/assets/features/4.png";

const cardsArray = [
  {
    title: "С полного нуля",
    description:
      "Ты получишь шаблоны, которые помогут тебе быстро собрать портфолио из проектов и начать откликаться на вакансии",
    imageSrc: imageFirst,
  },
  {
    title: "Начинающий дизайнер",
    description:
      "Усилишь базу и сделаешь крепкое портфолио, чтобы найти клиентов во время обучения ",
    imageSrc: imageSecond,
  },
  {
    title: "Опытный",
    description:
      "Освоишь востребованные навыки  и повысишь свой чек, за счёт сильного портфолио",
    imageSrc: imageThird,
  },
  {
    title: "Из смежной сферы",
    description:
      "Начнёшь понимать дизайнеров и сможешь самостоятельно закрывать задачи по дизайну",
    imageSrc: imageFour,
  },
];
</script>
<template>
  <div class="h-auto bg-[#010101] py-10 sm:py-20 w-full flex justify-center">
    <div
      class="container flex flex-col gap-4 sm:flex-row sm:gap-4 px-6 sm:px-0"
    >
      <div
        class="w-auto sm:min-w-[544px] flex flex-col items-start justify-start gap-4 border border-[#142F3A] rounded-[32px] px-6 pt-6 relative sm:h-full"
      >
        <img
          src="@/assets/icons/heart.svg"
          alt=""
          class="h-[56px] w-[56px] sm:h-auto sm:w-auto"
        />
        <h1
          class="text-[28px] sm:text-[48px] leading-[100%] tracking-[-1px] text-white-default font-extrabold"
        >
          <span>Прокачай навыки</span><br />
          <span class="text-color1"> с полного нуля</span>
        </h1>
        <p
          class="z-20 text-white-default max-w-[478px] pb-6 sm:pb-0 text-lg sm:text-2xl font-medium"
        >
          Я построил курс на основе своего реального опыта работы в студии и
          полного цикла работ в продукте. Ты пройдёшь все этапы создания дизайна
          от идеи до сборки своих уникальных проектов в кейсы на behance и в
          notion
        </p>
        <img
          src="@/assets/backgrounds/GradientFeatures.png"
          alt=""
          class="absolute bottom-0 right-0 w-full rounded-b-[32px] bg-cover z-10"
        />
      </div>
      <div class="w-auto flex flex-wrap justify-end gap-4">
        <CardTempalte
          v-for="(card, index) in cardsArray"
          :key="card"
          :title="card.title"
          :description="card.description"
          :image-src="card.imageSrc"
          class="w-[48%] h-[320px] sm:max-h-[328px]"
        />
      </div>
    </div>
  </div>
</template>
