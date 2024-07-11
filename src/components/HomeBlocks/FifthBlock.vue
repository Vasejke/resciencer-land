<script setup>
import CardTempalte from "@/components/CardTempalte.vue";
import image1 from "@/assets/features3/1.png";
import image2 from "@/assets/features3/2.png";
import image3 from "@/assets/features3/3.png";
import image4 from "@/assets/features3/4.png";

const cardsArray = [
  {
    title: "50+ шаблонов для проектов",
    description:
      "Благодаря шаблонам ты сможешь делать проекты быстрее других дизайнеров и брать больше заказов",
    imageSrc: image1,
  },
  {
    title: "Чат со мной  и дизайнерами",
    description:
      "После выпуска я добавлю тебя в чат, в нём ты познакомишься  с дизайнерами и всегда сможешь задать мне вопрос",
    imageSrc: image2,
  },
  {
    title: "Публичное освещение работ",
    description:
      "Я выложу твоё портфолио в своём телеграм канале и его увидят сотни клиентов и работодателей",
    imageSrc: image3,
  },
  {
    title: "Доступ к обучению на целый год",
    description:
      "Ты сможешь возвращаться к материалам курса и применять их в работе после прохождения обучения",
    imageSrc: image4,
  },
];
</script>

<template>
  <div class="h-auto bg-[#010101] py-10 sm:py-20 w-full flex justify-center">
    <div
      class="container flex flex-col w-full gap-10 sm:gap-[56px] px-6 sm:px-0"
    >
      <div
        class="w-full flex flex-col sm:flex-row justify-center items-center sm:items-end gap-4"
      >
        <h1
          class="text-[28px] sm:text-[56px] leading-[100%] tracking-[-4%] text-white-default font-extrabold text-center sm:text-start"
        >
          <span class="text-color1">
            Получи сильный <br class="hidden sm:block" />буст
            <br class="block sm:hidden" />
          </span>
          <span>для работы дизайнером</span>
        </h1>
        <p
          class="sm:w-2/3 text-lg sm:text-2xl text-gray font-medium text-center sm:text-start leading-[24px]"
        >
          После прохождения курса <br class="block sm:hidden" />ты не останешься
          наедине <br class="hidden sm:block" />со своими первыми клиентами или
          первой работой. Дополнительные шаблоны, материалы курса и чат помогут
          держать темп, получать поддержку и ускорять твою работу
        </p>
      </div>
      <div class="w-full flex flex-col sm:flex-row gap-4">
        <CardTempalte
          v-for="card in cardsArray"
          :key="card"
          :title="card.title"
          :description="card.description"
          :image-src="card.imageSrc"
          class="w-full h-[350px] sm:min-h-[358px]"
        />
      </div>
    </div>
  </div>
</template>
