<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import tinkoff from "@tcb-web/create-credit";
import PaymentPopup from "@/components/PaymentPopup.vue";
const route = useRoute();
const plan = ref("installment_0_0_3_4");
const activePopup = ref(false);
const descriptionOrder = ref("");
const price = ref(0);

const optionsRadioButton = ref([
  { text: "3 мес.", price: 13330, value: "installment_0_0_3_4", number: 3 },
  { text: "6 мес.", price: 6665, value: "installment_0_0_6_6,5", number: 6 },
  {
    text: "12 мес.",
    price: 6665,
    value: "installment_0_0_12_11,5",
    number: 12,
  },
  { text: "18 мес.", price: 6665, value: "installment_0_0_18_16", number: 18 },
  {
    text: "24 мес.",
    price: 6665,
    value: "installment_0_0_24_20,5",
    number: 24,
  },
]);
const featuresArrayLowPrice = [
  "6 модулей и 80+ уроков",
  "7 уникальных проектов в портфолио",
  "Чат с технической поддержкой по вопросам курса",
  "Личный видео-разбор проектов для портфолио 1 раз в неделю",
  "Мастер-классы по созданию уникального портфолио",
  "Доступ к курсу на 1 год",
  "50+ шаблонов для реальных проектов после курса",
];
const featuresArrayHighPrice = [
  "Всё из основного тарифа",
  "Чат со мной, в котором сможешь задавать вопросы по всем д/з",
  "Личный видео-разбор всех домашних заданий 2 раза в неделю",
  "Мастер-классы по анимации интерфейсов в Principle, Protopie",
  "Доступ к курсу на 2 года",
  "Публичное освещение лучших работ в моём телеграм-канале",
  "Дополнительный проект в портфолио — Сервис на Desktop",
];

function createTinkoff() {
  let products = [];
  if (route.query.price === "79990") {
    products = [
      {
        name: "Обучение Resciencer: Тариф с наставником",
        price: 79990,
        quantity: 1,
      },
    ];
  } else {
    products = [
      {
        name: "Обучение Resciencer: Тариф основной",
        price: 49990,
        quantity: 1,
      },
    ];
  }
  tinkoff.create({
    shopId: "TEST",
    showcaseId: "TEST",
    demoFlow: "sms",
    promoCode: plan.value,
    items: products,
    sum: route.query.price,
  });
}
function createInvoice() {
  activePopup.value = true;
}
function closePopup() {
  activePopup.value = false;
}
onMounted(() => {
  const totalPrice = parseFloat(route.query.price);
  optionsRadioButton.value = optionsRadioButton.value.map((option) => {
    const pricePerValue = Math.floor(totalPrice / option.number);
    return { ...option, price: pricePerValue.toString() };
  });
  if (route.query.price === "79990") {
    descriptionOrder.value = "Обучение Resciencer: Тариф с наставником";
  } else {
    descriptionOrder.value = "Обучение Resciencer: Тариф основной";
  }
  price.value = parseFloat(route.query.price);
});
</script>

<template>
  <div
    class="h-full sm:min-h-screen bg-main-block bg-cover bg-no-repeat flex flex-col justify-start items-center font-manrope"
  >
    <div
      class="container flex flex-col justify-start items-center gap-6 sm:gap-8 h-full px-4 sm:px-0 py-10"
    >
      <router-link
        to="/?tariffs=yes"
        class="w-full text-gray flex gap-2 items-center justify-start cursor-pointer hover:underline underline-offset-4 duration-300"
      >
        <svg
          width="18"
          height="15"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.676758 7.64551C0.676758 7.90918 0.791016 8.17285 0.993164 8.36621L6.79395 14.1582C7.00488 14.3604 7.2334 14.457 7.48828 14.457C8.04199 14.457 8.44629 14.0615 8.44629 13.5254C8.44629 13.2441 8.34082 13.0068 8.15625 12.8311L6.17871 10.8271L3.62988 8.49805L5.67773 8.62109H16.3301C16.9102 8.62109 17.3145 8.2168 17.3145 7.64551C17.3145 7.06543 16.9102 6.66113 16.3301 6.66113H5.67773L3.63867 6.78418L6.17871 4.45508L8.15625 2.45117C8.34082 2.27539 8.44629 2.03809 8.44629 1.75684C8.44629 1.2207 8.04199 0.825195 7.48828 0.825195C7.2334 0.825195 6.99609 0.921875 6.76758 1.1416L0.993164 6.91602C0.791016 7.10938 0.676758 7.37305 0.676758 7.64551Z"
            fill="#999999"
          /></svg
        >К тарифам
      </router-link>
      <div class="w-full flex items-center justify-between">
        <h1 class="text-white-default text-2xl sm:text-4xl font-extrabold">
          Способы оплаты
        </h1>
      </div>
      <div class="flex flex-col sm:flex-row items-start w-full h-full gap-4">
        <div
          class="flex flex-col items-start w-full sm:w-1/2 h-full sm:min-h-[600px]"
          v-if="route.query.price === '79990'"
        >
          <div
            class="flex-grow bg-[#161616] rounded-[32px] h-full p-6 w-full flex flex-col justify-between sm:min-h-[600px]"
          >
            <div
              class="bg-[#161616] rounded-[32px] flex flex-col items-start justify-between sm:gap-6"
            >
              <div class="flex flex-row gap-2 mb-4 sm:mb-0">
                <div
                  class="bg-[#2C2C2D] px-4 py-2 rounded-[22px] text-white-default"
                >
                  Тариф с наставником
                </div>
                <div class="bg-[#142F3A] px-4 py-2 rounded-[22px] text-color1">
                  5 мест
                </div>
              </div>
              <div
                class="w-full flex flex-row items-center justify-start gap-2 sm:justify-between mb-1 sm:mb-0"
              >
                <span
                  class="text-[28px] leading-[102%] sm:text-[56px] text-color1 font-extrabold"
                >
                  79 990 ₽
                </span>
                <div class="flex flex-col items-end justify-center">
                  <span
                    class="w-auto flex-grow text-[#E8EBEF] font-extrabold text-lg sm:text-2xl opacity-20 line-through"
                    >89 990 ₽</span
                  >
                  <p
                    class="text-base font-medium text-gray order-3 hidden sm:block"
                  >
                    Стоимость до повышения
                  </p>
                </div>
              </div>
              <p
                class="text-base font-medium text-gray block sm:hidden mb-4 sm:mb-0"
              >
                Стоимость до повышения
              </p>
              <ul
                class="flex flex-col items-start gap-2 mb-4 sm:mb-0 text-gray"
              >
                <li
                  v-for="(feature, index) in featuresArrayHighPrice"
                  :key="feature"
                  class="flex flex-row gap-2"
                  :class="index === 0 ? 'text-white-default' : 'text-gray'"
                >
                  <img
                    class="max-h-[24px]"
                    src="@/assets/icons/light_approve_icon.png"
                    alt=""
                  />
                  {{ feature }}
                </li>
              </ul>
            </div>
            <button
              type="button"
              @click="createInvoice"
              class="bottom-0 w-full bg-gradient-to-r from-[#04C7FF] to-[#019FFE] text-white-default font-bold rounded-[22px] text-lg sm:text-[24px] leading-[102%] py-6 px-5 sm:p-[32px] border-2 border-[#1F1F1F]"
            >
              Оплатить всю сумму
            </button>
          </div>
        </div>
        <div
          class="flex flex-grow flex-col items-start w-full sm:w-1/2 h-full justify-between sm:min-h-[600px]"
          v-else
        >
          <div
            class="bg-[#161616] rounded-[32px] h-full p-6 w-full flex flex-col justify-between sm:min-h-[600px]"
          >
            <div
              class="bg-[#161616] rounded-[32px] flex flex-col items-start justify-start sm:gap-6"
            >
              <div class="flex flex-row gap-2 mb-4 sm:mb-0">
                <div
                  class="bg-[#2C2C2D] px-4 py-2 rounded-[22px] text-white-default"
                >
                  Тариф основной
                </div>
                <div class="bg-[#142F3A] px-4 py-2 rounded-[22px] text-color1">
                  15 мест
                </div>
              </div>
              <div
                class="w-full flex flex-row items-center justify-start gap-2 sm:justify-between mb-1 sm:mb-0"
              >
                <span
                  class="text-[28px] leading-[102%] sm:text-[56px] text-color1 font-extrabold"
                >
                  49 990 ₽
                </span>
                <div class="flex flex-col items-end justify-center">
                  <span
                    class="w-auto flex-grow text-[#E8EBEF] font-extrabold text-lg sm:text-2xl opacity-20 line-through"
                    >59 990 ₽</span
                  >
                  <p
                    class="text-base font-medium text-gray order-3 hidden sm:block"
                  >
                    Стоимость до повышения
                  </p>
                </div>
              </div>
              <p
                class="text-base font-medium text-gray block sm:hidden mb-4 sm:mb-0"
              >
                Стоимость до повышения
              </p>
              <ul
                class="flex flex-col items-start gap-2 mb-4 sm:mb-0 text-gray"
              >
                <li
                  v-for="feature in featuresArrayLowPrice"
                  :key="feature"
                  class="flex flex-row gap-2 text-gray"
                >
                  <img
                    class="max-h-[24px]"
                    src="@/assets/icons/drk_approve_icon.png"
                    alt=""
                  />
                  {{ feature }}
                </li>
              </ul>
            </div>
            <button
              type="button"
              @click="createInvoice"
              class="w-full bg-gradient-to-r from-[#04C7FF] to-[#019FFE] text-white-default font-bold rounded-[22px] text-lg sm:text-[24px] leading-[102%] py-6 px-5 sm:p-[32px] border-2 border-[#1F1F1F]"
            >
              Оплатить всю сумму
            </button>
          </div>
        </div>
        <div
          class="flex flex-col items-start w-full sm:w-1/2 h-full justify-between"
        >
          <div
            class="bg-[#161616] rounded-[32px] h-full p-6 w-full flex flex-col gap-6"
          >
            <RadioGroup v-model="plan" class="flex flex-col gap-2">
              <RadioGroupLabel
                class="flex flex-col items-start font-medium text-base text-gray mb-4 gap-2"
              >
                <span
                  class="text-white-default text-[20px] leading-[104%] font-bold"
                  >Рассрочка Тинькофф</span
                >
                <span>Без процентов на любой удобный срок</span>
              </RadioGroupLabel>
              <RadioGroupOption
                v-for="option in optionsRadioButton"
                :key="option"
                v-slot="{ checked }"
                :value="option.value"
              >
                <div
                  class="w-full bg-[#2C2C2D] p-4 rounded-[16px] text-gray flex items-center justify-between"
                  :class="checked ? 'ring-1 ring-color1' : ''"
                >
                  <div class="flex gap-3 items-center">
                    <div
                      class="rounded-full p-1 h-[24px] w-[24px] bg-[#19191A]"
                      :class="checked ? 'ring-1 ring-color1' : ''"
                    >
                      <div
                        class="rounded-full h-full w-full"
                        :class="checked ? 'bg-color1' : ''"
                      ></div>
                    </div>
                    <p
                      class="text-lg sm:text-2xl text-white-default cursor-pointer"
                    >
                      {{ option.text }}
                    </p>
                  </div>
                  <p class="text-lg sm:text-2xl font-medium">
                    {{ option.price }} ₽/мес
                  </p>
                </div>
              </RadioGroupOption>
            </RadioGroup>
            <button
              type="button"
              class="bottom-0 w-full bg-gradient-to-r from-[#04C7FF] to-[#019FFE] text-white-default font-bold rounded-[22px] text-lg sm:text-[24px] leading-[102%] py-6 px-5 sm:p-[32px] border-2 border-[#1F1F1F]"
              @click="createTinkoff"
            >
              Оформить рассрочку
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <PaymentPopup
    :is-open="activePopup"
    @close="closePopup"
    :price="price"
    :description-order="descriptionOrder"
    class="font-manrope"
  />
</template>
