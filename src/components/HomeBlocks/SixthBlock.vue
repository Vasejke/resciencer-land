<script setup>
const utilitiesArray = [
  "Плакат",
  "Лендинг",
  "2D Иллюстрация",
  "Интернет-магазин",
  "Моб. приложение",
  "Постер в 3D",
  "Проект в 3D",
];
</script>

<template>
  <div
    class="h-auto min-h-screen bg-[#010101] py-10 sm:py-20 w-full flex justify-center"
  >
    <div
      class="container flex flex-col items-center w-full gap-10 sm:gap-[56px] px-6 sm:px-0"
    >
      <h1
        class="text-[28px] sm:text-[56px] leading-[100%] tracking-[-4%] text-white-default font-extrabold text-center sm:text-start"
      >
        <span class="text-color1">
          Твоё резюме <br class="block sm:hidden"
        /></span>
        <span>после курса</span>
      </h1>
      <div
        class="w-full flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <div class="flex flex-wrap w-full sm:w-2/3 gap-4">
          <div
            class="w-full sm:w-[49%] bg-[#161616] border-2 border-[#1F1F1F] p-6 flex flex-col gap-5 justify-between rounded-[32px]"
          >
            <img
              src="@/assets/photoPortfolio.png"
              class="w-[104px] sm:h-[156px] sm:w-[156px]"
              alt=""
            />
            <span
              class="text-2xl sm:text-4xl font-extrabold text-white-default tracking-[-1px]"
              >Дизайнер <br class="hidden sm:block" />сайтов, сервисов
              <br class="hidden sm:block" />и приложений</span
            >
          </div>
          <div
            class="w-full sm:w-[49%] bg-[#161616] p-6 flex flex-col gap-6 sm:gap-10 justify-start rounded-[32px] border-2 border-[#1F1F1F]"
          >
            <h1 class="text-[20px] sm:text-2xl font-bold text-white-default">
              Навыки
            </h1>
            <ul
              class="px-6 text-gray font-medium list-disc flex flex-col gap-3"
            >
              <li>JTBD, User flow, Value Proposition</li>
              <li>Глубинные интервью, UX-тесты</li>
              <li>3D и 2D иллюстрации</li>
              <li>Рисую сайты, сервисы и приложения</li>
              <li>UI-kit, Design System</li>
              <li>Умею планировать работу и слежу <br />за сроками</li>
              <li>Выстраиваю коммуникацию с командой разработки</li>
            </ul>
          </div>
          <div
            class="hidden w-full sm:flex flex-col justify-between items-start gap-5 bg-[#161616] rounded-[32px] p-6 border-2 border-[#1F1F1F]"
          >
            <h1 class="text-[20px] sm:text-2xl font-bold text-white-default">
              Зарплата
            </h1>
            <img
              class="pointer-events-none select-none w-full"
              src="@/assets/backgrounds/cost.png"
              alt=""
            />
          </div>
        </div>
        <div class="flex flex-col w-full sm:w-1/3 justify-between h-full gap-4">
          <div
            class="w-full border-2 border-[#1F1F1F] bg-[#161616] p-6 flex flex-col gap-5 justify-between rounded-[32px] relative sm:h-[250px]"
          >
            <h1 class="text-[20px] sm:text-2xl font-bold text-white-default">
              Софт
            </h1>

            <p class="text-gray font-medium absolute top-4 right-6 text-right">
              Figma <br />
              Cinema 4D <br />
              Notion
            </p>
            <div class="flex gap-4 items-center justify-start">
              <img
                src="@/assets/backgrounds/Figma.png"
                alt=""
                class="sm:h-[80px] sm:w-[80px] w-[42px] h-[42px]]"
              />
              <img
                src="@/assets/backgrounds/Cinema%204D.png"
                alt=""
                class="sm:h-[80px] sm:w-[80px] w-[42px] h-[42px]]"
              />
              <img
                src="@/assets/backgrounds/Notion.png"
                alt=""
                class="sm:h-[80px] sm:w-[80px] w-[42px] h-[42px]]"
              />
            </div>
          </div>
          <div
            class="w-full bg-[#161616] border-2 border-[#1F1F1F] p-6 flex flex-col gap-5 justify-between rounded-[32px] relative flex-grow"
          >
            <h1 class="text-[20px] sm:text-2xl font-bold text-white-default">
              Портфолио
            </h1>
            <span
              class="font-medium py-2 px-6 bg-[#02A4FE] absolute top-0 -right-3 rounded-[22px] text-white-default text-[20px] sm:text-2xl rotate-12"
              >7 проектов</span
            >
            <div class="w-full flex flex-wrap gap-2">
              <div
                v-for="feature in utilitiesArray"
                :key="feature"
                class="border-2 border-[#02A4FE] bg-[#142F3A] rounded-[16px] font-bold text-[20px] sm:text-2xl px-4 text-white-default flex gap-2 items-center justify-center py-2"
              >
                {{ feature }}
              </div>
            </div>
          </div>
          <div
            class="flex w-full sm:hidden flex-col justify-between items-start gap-5 bg-[#161616] border-2 border-[#1F1F1F] rounded-[32px] p-6"
          >
            <h1 class="text-[20px] sm:text-2xl font-bold text-white-default">
              Зарплата
            </h1>
            <img
              class="pointer-events-none w-full"
              src="@/assets/backgrounds/mobile_cost.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
