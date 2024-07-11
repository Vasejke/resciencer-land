<script setup>
import plusImage from "@/assets/icons/plus.svg";
defineProps({
  title: {
    type: String,
    default: "Дизайн процесс  и фигма",
  },
  subtitle1: {
    type: String,
    default: "Дизайн-процесс",
  },
  subtitle2: {
    type: String,
    default: "Figma",
  },
  description1: {
    type: String,
    default:
      "Карьерный трек в дизайне<br>" +
      "Работа на фрилансе<br>" +
      "Процесс работы в студии<br>" +
      "Процесс работы в продукте<br>" +
      "Этапы создания дизайна",
  },
  description2: {
    type: String,
    default:
      "Интерфейс<br>Инструменты <br>Работа с текстом<br>Работа со слоями<br>Фреймы и группы<br>Заливка, изображения <br>и маски<br>Стили<br>Компоненты<br>Автолейауты<br>Варианты",
  },
  subtitle3: {
    type: String,
    default: "",
  },
  description3: {
    type: String,
    default: "",
  },
  subtitle4: {
    type: String,
    default: "",
  },
  description4: {
    type: String,
    default: "",
  },
  numberBlock: {
    type: Number,
    default: 1,
  },
  featuresBlock: {
    type: Array,
    default: [{ imgSrc: plusImage, text: "Плакат" }],
  },
});
</script>

<template>
  <div
    class="w-full sm:w-[49%] h-auto sm:min-h-[544px] p-6 flex flex-col items-start justify-between bg-[#161616] rounded-[32px] relative border-2 border-[#1F1F1F]"
  >
    <div
      class="px-4 sm:px-6 py-2 absolute right-6 sm:right-6 top-6 text-white-default rounded-[22px] bg-[#2C2C2D] text-sm sm:text-base"
    >
      Блок {{ numberBlock }}
    </div>
    <div class="w-full flex flex-col">
      <div class="sm:w-2/3 mb-8">
        <h1
          class="text-2xl sm:text-4xl text-white-default font-extrabold tracking-[-1px] leading-[104%]"
          v-html="title"
        ></h1>
      </div>
      <div
        class="w-full flex flex-col sm:flex-row flex-wrap justify-between items-start gap-4"
      >
        <div
          class="w-full sm:w-[45%] flex flex-col justify-start items-start gap-2 sm:gap-3"
        >
          <h2 class="text-xl sm:text-2xl font-bold text-white-default">
            {{ subtitle1 }}
          </h2>
          <p class="text-gray font-medium" v-html="description1"></p>
        </div>
        <div
          class="w-full sm:w-[45%] flex flex-col justify-start items-start gap-2 sm:gap-3"
        >
          <h2
            class="text-xl sm:text-2xl font-bold text-white-default leading-[104%]"
          >
            {{ subtitle2 }}
          </h2>
          <p class="text-gray font-medium" v-html="description2"></p>
        </div>
        <div
          class="w-full sm:w-[45%] flex flex-col justify-start items-start gap-2 sm:gap-3"
          v-if="subtitle3"
        >
          <h2 class="text-lg sm:text-2xl font-bold text-white-default">
            {{ subtitle3 }}
          </h2>
          <p class="text-gray font-medium" v-html="description3"></p>
        </div>
        <div
          class="w-full sm:w-[45%] flex flex-col justify-start items-start gap-2 sm:gap-3"
          v-if="subtitle4"
        >
          <h2 class="text-lg sm:text-2xl font-bold text-white-default">
            {{ subtitle4 }}
          </h2>
          <p class="text-gray font-medium" v-html="description4"></p>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-start gap-1 items-center mt-4">
      <div
        v-if="featuresBlock"
        v-for="features in featuresBlock"
        :key="features"
        class="border-2 border-[#02A4FE] bg-[#142F3A] rounded-[16px] font-bold text-lg sm:text-2xl pl-4 pr-5 text-white-default flex gap-2 items-center justify-center py-2"
      >
        <img :src="features.imgSrc" alt="" />
        {{ features.text }}
      </div>
    </div>
  </div>
</template>
