<script setup>
import BlocksTemplate from "@/components/BlocksTemplate.vue";
import plusImage from "@/assets/icons/plus.svg";
import approveImage from "@/assets/icons/approve.svg";

const blockArray = [
  {
    title: "Дизайн процесс <br/>и фигма",
    subtitle1: "Дизайн-процесс",
    subtitle2: "Figma",
    description1:
      "Карьерный трек в дизайне<br/>" +
      "Работа на фрилансе<br/>" +
      "Процесс работы в студии<br/>" +
      "Процесс работы в продукте<br/>" +
      "Этапы создания дизайна",
    description2:
      "Интерфейс<br/>" +
      "Инструменты<br/>" +
      "Работа с текстом<br/>" +
      "Работа со слоями<br/>" +
      "Фреймы и группы<br/>" +
      "Заливка, изображения <br/>и маски<br/>" +
      "Стили<br/>" +
      "Компоненты<br/>" +
      "Автолейауты<br/>" +
      "Варианты",
    iconsArray: [],
    numberBlock: 1,
  },
  {
    title: "База дизайна<br/>и концепции",
    subtitle1: "Основы дизайна",
    subtitle2: "Креативное мышление",
    description1:
      "Типографика<br/>" + "Композиция<br/>" + "Сетка<br/>" + "Работа с цветом",
    description2:
      "Метод генерации идей<br/>" +
      "Референсы<br/>" +
      "Мудборд<br/>" +
      "Формирование концепта<br/>" +
      "Масштабирование концепта",
    iconsArray: [{ imgSrc: plusImage, text: "Плакат" }],
    numberBlock: 2,
  },
  {
    title: "Иллюстрации <br/>и лендинг",
    subtitle1: "Иллюстрации",
    subtitle2: "Лендинг",
    description1:
      "Стили иллюстраций<br/>Способы создания<br/>Сюжет и семантика<br/>Создание эскиза<br/>Работа с референсами",
    description2:
      "Конкурентный анализ<br/>" +
      "Киллерфичи<br/>" +
      "Копирайтинг<br/>" +
      "Сторителинг<br/>" +
      "Прототипирование",
    iconsArray: [
      { imgSrc: plusImage, text: "2D Иллюстрация" },
      { imgSrc: plusImage, text: "Лендинг" },
    ],
    numberBlock: 3,
  },
  {
    title: "Интернет магазин <br/>и сервисы",
    subtitle1: "Интернет магазин",
    subtitle2: "Сервис",
    description1:
      "Сценарии пользователя<br/>" +
      "Способы навигации<br/>" +
      "Оформление заказа<br/>" +
      "Карточка товара<br/>Сборка каталога<br/>" +
      "Способы проектирования",
    description2:
      "Типы сервисов<br/>" +
      "Требования и ограничения<br/>" +
      "Jobs To Be Done<br/>" +
      "Ценностное предложение<br/>" +
      "User flow<br/>" +
      "Виды исследований<br/>" +
      "Гайдлайны<br/>" +
      "Монетизация<br/>" +
      "Концепция сервиса",
    iconsArray: [
      { imgSrc: plusImage, text: "Интернет-магазин" },
      { imgSrc: plusImage, text: "Моб. приложение" },
    ],
    numberBlock: 4,
  },
  {
    title: "3D иллюстрации<br/>и проекты",
    subtitle1: "Cinema 4d",
    subtitle2: "3D в проектах",
    description1:
      "Интерфейс<br/>" +
      "Материалы<br/>Объекты и моделирование<br/>" +
      "Arnold render<br/>" +
      "Ноды<br/>Камера и освещение<br/>" +
      "Настройка рендера<br/>" +
      "Постпродакшн",
    description2:
      "Применение 3D в дизайне<br/>" +
      "Работа с концепциями<br/>" +
      "Подготовка изображений",
    iconsArray: [
      { imgSrc: plusImage, text: "Постер в 3D" },
      { imgSrc: plusImage, text: "Проект в 3D" },
    ],
    numberBlock: 5,
  },
  {
    title: "Портфолио <br/>и клиенты",
    subtitle1: "Портфолио",
    subtitle2: "Фриланс",
    subtitle3: "Трудоустройство",
    subtitle4: "Карьерный трек",
    description1:
      "Оформление кейсов<br/>" + "Behance<br/>" + "Notion<br/>" + "Шаблон CV",
    description2:
      "Оформление соц сетей<br/>" +
      "10 способов искать клиентов<br/>" +
      "Процесс работы<br/>" +
      "Отработка возражений",
    description3:
      "Резюме<br/>" +
      "Поиск вакансий<br/>" +
      "Как делать тестовые задания<br/>" +
      "Как пройти собеседование",
    description4:
      "Развитие в дизайне<br/>" + "Как расти в грейде<br/>" + "Зарплата",
    iconsArray: [
      { imgSrc: approveImage, text: "Портфолио" },
      { imgSrc: approveImage, text: "CV, первые клиенты" },
    ],
    numberBlock: 6,
  },
];
</script>
<template>
  <div class="h-auto bg-[#010101] py-10 sm:py-20 w-full flex justify-center">
    <div
      class="container flex flex-col justify-center items-center px-6 sm:px-0"
    >
      <h1
        class="text-[28px] sm:text-[56px] leading-[100%] tracking-[-4%] text-white-default font-extrabold text-center mb-6"
      >
        Программа курса
      </h1>
      <p
        class="sm:w-2/3 text-lg sm:text-2xl text-gray text-center mb-10 sm:mb-[56px]"
      >
        6 блоков, 14 модулей, 80+ уроков <br />и 7 уникальных проектов в твоё
        портфолио
      </p>
      <div class="w-full flex flex-wrap justify-around items-start gap-4">
        <BlocksTemplate
          v-for="block in blockArray"
          :key="block"
          :title="block.title"
          :subtitle1="block.subtitle1"
          :subtitle2="block.subtitle2"
          :subtitle3="block.subtitle3 ? block.subtitle3 : ''"
          :subtitle4="block.subtitle4 ? block.subtitle4 : ''"
          :description1="block.description1"
          :description2="block.description2"
          :description3="block.description3 ? block.description3 : ''"
          :description4="block.description4 ? block.description4 : ''"
          :number-block="block.numberBlock"
          :features-block="block.iconsArray"
        />
      </div>
    </div>
  </div>
</template>
