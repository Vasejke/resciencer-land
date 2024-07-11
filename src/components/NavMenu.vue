<script setup>
function smoothScrollToId(id) {
  const element = document.getElementById(id);
  if (element) {
    const offsetTop = element.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}
</script>

<template>
  <div
    class="container flex justify-between items-center text-white-default py-10 px-6 sm:px-0"
  >
    <div>
      <img src="../assets/Logo.svg" alt="" />
    </div>
    <div class="hidden lg:block">
      <ul class="flex gap-10 text-[#999999]">
        <li
          @click="smoothScrollToId('plan')"
          class="cursor-pointer hover:text-white-default duration-300"
        >
          План обучения
        </li>
        <li
          class="cursor-pointer hover:text-white-default duration-300"
          @click="smoothScrollToId('tariffs')"
        >
          Стоимость
        </li>
        <li
          class="cursor-pointer hover:text-white-default duration-300"
          @click="smoothScrollToId('questions')"
        >
          Ответы на вопросы
        </li>
      </ul>
    </div>
    <div>
      <button
        type="button"
        @click="smoothScrollToId('tariffs')"
        class="hidden sm:block outline-0 hover:underline text-[#02A4FE] duration-300"
      >
        Записаться на обучение
      </button>
    </div>
  </div>
</template>
