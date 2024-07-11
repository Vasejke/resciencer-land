<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  rateName: {
    type: String,
    default: "Тариф основной",
  },
  currentPrice: {
    type: String,
    default: "2 082",
  },
  price: {
    type: String,
    default: "49 990 ₽",
  },
  strokePrice: {
    type: String,
    default: "59 990 ₽",
  },
  featuresArray: {
    type: Array,
    default: [
      "6 модулей и 80+ уроков",
      "7 уникальных проектов в портфолио",
      "Чат с технической поддержкой по вопросам курса",
      "Личный видео-разбор проектов для портфолио 1 раз в неделю",
      "Мастер-классы по созданию уникального портфолио",
      "Доступ к курсу на 1 год",
      "50+ шаблонов для реальных проектов после курса",
    ],
  },
  buttonText: {
    type: String,
    default: "Записаться на обучение",
  },
  darkComponent: {
    type: Boolean,
    default: true,
  },
  placesNumber: {
    type: Number,
    default: 15,
  },
});

function pushToPrices() {
  router.push({
    name: "payment_view",
    query: { price: props.price.replace(/ /g, "").replace("₽", "") },
  });
}
</script>

<template>
  <div
    class="bg-[#161616] rounded-[32px] p-6 flex flex-col items-start gap-6 justify-between border-2 border-[#1F1F1F]"
  >
    <div class="flex flex-col gap-6 w-full">
      <div
        class="w-full flex flex-col sm:flex-row sm:items-end justify-between"
      >
        <div class="flex flex-col justify-start items-start">
          <div class="w-full flex flex-row gap-1">
            <div
              class="text-sm sm:text-base sm:w-auto bg-[#2C2C2D] px-4 py-2 rounded-[22px] text-white-default"
            >
              {{ rateName }}
            </div>
            <div
              class="text-sm sm:text-base sm:w-auto bg-[#142F3A] px-4 py-2 rounded-[22px] text-color1"
            >
              {{ placesNumber }} мест
            </div>
          </div>
          <span
            class="text-[28px] sm:text-[56px] font-extrabold text-[#02A4FE] tracking-[-2px] leading-[104%] mt-6 truncate"
            >от {{ currentPrice }} ₽/мес</span
          >
          <span class="text-base text-gray mt-1 sm:mt-2 mb-4 sm:mb-0"
            >Без %, при рассрочке на 24 мес</span
          >
        </div>
        <div
          class="flex flex-row flex-wrap sm:flex-col sm:justify-end items-end"
        >
          <span
            class="w-auto flex-grow sm:w-auto order-2 sm:order-1 text-[#E8EBEF] font-extrabold text-lg sm:text-2xl mb-0.5 sm:-mb-2 opacity-20 line-through"
            >{{ strokePrice }}</span
          >
          <span
            class="sm:w-auto text-[#E8EBEF] text-[28px] sm:text-[40px] font-extrabold opacity-60 order-1 tracking-[-2px] mr-2 sm:mr-0 leading-[104%]"
            >{{ price }}</span
          >
          <p
            class="text-base font-medium text-gray order-3 mt-1 sm:mt-2 truncate"
          >
            Стоимость до повышения
          </p>
        </div>
      </div>
      <ul class="text-sm sm:text-base flex flex-col items-start gap-3">
        <li
          v-for="(feature, index) in featuresArray"
          :key="feature"
          class="flex flex-row gap-2"
          :class="
            index === 0 && price === '63 992 ₽'
              ? 'text-white-default'
              : 'text-gray'
          "
        >
          <img
            class="max-h-[24px]"
            src="@/assets/icons/drk_approve_icon.png"
            alt=""
            v-if="darkComponent"
          />
          <img
            class="max-h-[24px]"
            src="@/assets/icons/light_approve_icon.png"
            alt=""
            v-else
          />
          {{ feature }}
        </li>
      </ul>
    </div>
    <button
      type="button"
      class="border-8 border-[#19191A] mt-2 bottom-6 w-full bg-gradient-to-r from-[#04C7FF] to-[#019FFE] text-white-default font-bold rounded-[28px] text-xl sm:text-2xl py-[14px] px-[32px] sm:p-[32px] tracking-[-1px] sm:tracking-normal"
      @click="pushToPrices"
      v-html="buttonText"
    ></button>
  </div>
</template>
