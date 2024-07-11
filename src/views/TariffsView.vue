<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import InputText from "@/components/InputText.vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const route = useRoute();

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    firstName: yup.string().required("Введите фамилию и имя"),
    telegram: yup.string().required("Введите телеграм"),
    email: yup
      .string()
      .required("Введите почту")
      .email("Введите правильную почту"),
  }),
});

const onSubmit = handleSubmit((values) => {
  const botToken = "test-token";
  const chatId = "test-chat-id";
  const messageText = `Новая заявка:\nИмя: ${values.firstName}\nTelegram: ${values.telegram}\nE-mail: ${values.email}`;

  axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    chat_id: chatId,
    text: messageText,
  });
  router.push({
    name: "payment_view",
    query: {
      price: route.query.price,
      name: values.firstName,
      telegram: values.telegram,
      email: values.email,
    },
  });
});
</script>

<template>
  <div
    class="h-full sm:min-h-screen bg-main-block bg-cover bg-no-repeat flex flex-col justify-start items-center font-manrope"
  >
    <div
      class="container flex flex-col justify-around items-center gap-6 sm:gap-[32px] px-6 sm:px-0 py-10"
    >
      <router-link
        to="/"
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
        <h1
          class="text-white-default text-[40px] font-extrabold hidden sm:block"
        >
          Заполни данные о себе
        </h1>
        <h1 class="text-white-default text-2xl font-extrabold block sm:hidden">
          Твои данные
        </h1>
        <span class="text-gray sm:text-2xl">1 шаг из 2</span>
      </div>
      <div
        class="flex flex-col sm:flex-row items-start w-full h-full gap-8 sm:gap-10"
      >
        <div class="flex flex-col items-start sm:w-1/2 sm:h-full gap-5">
          <div
            class="bg-[#161616] rounded-[32px] min-h-[431px] w-full sm:h-full p-6"
          >
            <form
              @submit="onSubmit"
              class="flex flex-col h-full gap-4 relative justify-between"
            >
              <InputText name="firstName" placeholder="Фамилия, имя" />
              <InputText name="telegram" placeholder="Телеграм" />
              <InputText name="email" type="email" placeholder="Почта" />

              <button
                type="submit"
                class="sm:mt-[56px] w-full bg-gradient-to-r from-[#04C7FF] to-[#019FFE] text-white-default font-bold rounded-[22px] text-lg sm:text-2xl py-6 px-6 sm:p-[32px] border-2 border-[#1F1F1F]"
              >
                Выбрать способ оплаты
              </button>

              <p class="text-gray text-center">
                Продолжая, вы соглашаетесь <br class="block sm:hidden" />с
                <a href="/documents/offer.pdf" class="text-color1"
                  >договором оферты </a
                >и
                <a href="/documents/policy.pdf" class="text-color1"
                  >политикой конфиденциальности</a
                >
              </p>
            </form>
          </div>
        </div>
        <div class="sm:w-1/2 flex flex-col text-gray gap-5">
          <h1 class="text-white-default text-2xl sm:text-4xl font-extrabold">
            После оплаты с вами свяжется менеджер поддержки
          </h1>
          <p class="sm:text-2xl text-lg">Начать заниматься можно с 11 марта.</p>
          <p class="sm:text-2xl text-lg">
            Если проблемы с оплатой или любой другой
            <br class="hidden sm:block" />
            вопрос — можно написать в поддержку школы
            <br class="hidden sm:block" />
            <a href="https://t.me/resciencer_help" class="text-color1"
              >@resciencer_help</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
