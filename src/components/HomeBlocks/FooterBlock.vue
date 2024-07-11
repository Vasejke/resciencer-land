<script setup></script>
<template>
  <div
    class="h-auto bg-[#010101] py-10 sm:py-20 w-full flex justify-center px-4 sm:px-0"
  >
    <div
      class="container bg-[#161616] flex flex-col items-start justify-between w-full gap-10 px-6 py-6 rounded-[32px]"
    >
      <h1
        class="text-[28px] sm:text-[56px] sm:leading-[104%] font-extrabold text-white-default"
      >
        Контакты
      </h1>
      <div
        class="flex flex-col sm:flex-row justify-start items-center gap-10 sm:gap-20"
      >
        <div class="w-full sm:w-auto flex flex-col gap-4">
          <h1 class="text-gray text-lg sm:text-2xl">Соц-сети</h1>
          <div class="flex flex-row items-center justify-start gap-8 sm:gap-14">
            <a
              href="https://t.me/resciencer"
              class="cursor-pointer text-[24px] sm:text-[40px] font-bold text-white-default flex flex-col sm:flex-row gap-2 sm:gap-3"
            >
              <img src="@/assets/tg.svg" alt="" class="w-[56px]" />
              <span class="leading-[104%] sm:leading-normal">telegram</span>
            </a>
            <a
              href="https://youtube.com/@resciencer"
              class="cursor-pointer text-[24px] sm:text-[40px] font-bold text-white-default flex flex-col sm:flex-row gap-2 sm:gap-3"
            >
              <img
                src="@/assets/youtube.svg"
                alt=""
                class="w-[72px] sm:w-auto"
              />
              <span class="leading-[104%] sm:leading-normal">youtube</span>
            </a>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h1 class="text-gray text-lg sm:text-2xl">Почта</h1>
          <div class="flex flex-row items-center justify-between">
            <a
              href="mailto:hello@resciencer.ru"
              class="cursor-pointer text-[24px] sm:text-[40px] font-bold text-white-default flex flex-col sm:flex-row gap-2 sm:gap-3"
            >
              <img src="@/assets/email.svg" alt="" class="w-[56px]" />
              <span class="leading-[104%] sm:leading-normal"
                >hello@resciencer.ru</span
              >
            </a>
          </div>
        </div>
      </div>
      <div
        class="w-full flex flex-col sm:flex-row justify-between sm:items-center items-start gap-10 sm:gap-0 sm:mt-[64px]"
      >
        <span class="text-gray text-base cursor-default order-2 sm:order-1"
          >© Resciencer 2024</span
        >
        <div
          class="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-2 order-1 sm:order-2"
        >
          <a
            href="/documents/offer.pdf"
            class="text-gray text-base hover:underline duration-300 underline-offset-4"
            >Оферта</a
          >
          <div class="w-1 h-1 rounded-full bg-[#999999] hidden sm:block"></div>
          <a
            href="/documents/policy.pdf"
            class="text-gray text-base hover:underline duration-300 underline-offset-4"
            >Политика конфиденциальности</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
