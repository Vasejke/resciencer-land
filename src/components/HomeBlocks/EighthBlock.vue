<script setup>
import CardTempalte from "@/components/CardTempalte.vue";
import image1 from "@/assets/features4/1.png";
import image2 from "@/assets/features4/2.png";
import image3 from "@/assets/features4/3.png";
import image_author from "@/assets/author_image.png";
import image_author_color from "@/assets/author_image_color.png";
import { ref } from "vue";

const cardsArray = [
  {
    title: "Больше 50-ти проектов",
    description:
      "Делал дизайн для Пятёрочки, Яндекса,Сбера, города Иннополис, авиакомпании S7 и для многих других",
    imageSrc: image1,
  },
  {
    title: "Развиваю комьюнити",
    description:
      "С удовольствием делюсь своими знаниями в ютубе и телеграм-канале, чтобы собрать сильное сообщество дизайнеров",
    imageSrc: image2,
  },
  {
    title: "Чек-лист для трудоустройства",
    description:
      "Более 1000-ти дизайнеров прошли гайд,который я собрал на основе своего опыта найма и трудоустройства в дизайне",
    imageSrc: image3,
  },
];

const image = ref(image_author);
function handleImage(param) {
  if (param === "color") {
    image.value = image_author_color;
  } else {
    image.value = image_author;
  }
}
</script>

<template>
  <div class="h-auto bg-[#010101] py-10 sm:py-20 w-full flex justify-center">
    <div
      class="container flex flex-col items-center w-full gap-4 sm:gap-14 px-6 sm:px-0"
    >
      <div
        class="w-full flex flex-row justify-center items-center gap-4 sm:gap-10"
      >
        <img
          :src="image"
          class="sm:w-[238px] w-[144px]"
          @mouseenter="handleImage('color')"
          @mouseleave="handleImage('black')"
          alt=""
        />
        <div
          class="w-[35%] sm:w-auto h-full flex flex-col justify-center sm:items-start items-center gap-3"
        >
          <div
            class="bg-[#2C2C2D] px-3 sm:px-4 py-2 rounded-[22px] text-white-default"
          >
            Автор курса
          </div>
          <h1
            class="text-white-default text-[28px] sm:text-[56px] font-extrabold text-center leading-[104%]"
          >
            Инсаф Ихсанов
          </h1>
          <p class="text-gray text-lg sm:text-2xl font-medium hidden sm:block">
            Старший продуктовый дизайнер, с опытом работы <br />
            более 5-ти лет. Люблю создавать удобные сервисы <br />и развиваю
            комьюнити сильных дизайнеров
          </p>
        </div>
      </div>
      <p
        class="text-gray text-lg sm:text-2xl font-medium block sm:hidden text-center"
      >
        Старший продуктовый дизайнер, с опытом работы более 5-ти лет. Люблю
        создавать удобные сервисы и развиваю комьюнити сильных дизайнеров
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-5 mt-6 sm:mt-0">
        <CardTempalte
          v-for="card in cardsArray"
          :key="card"
          :title="card.title"
          :description="card.description"
          :image-src="card.imageSrc"
          class="w-full min-h-[300px] sm:min-h-[420px]"
        />
      </div>
    </div>
  </div>
</template>
