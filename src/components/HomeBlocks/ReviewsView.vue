<script setup>
const linksArray = [
  "https://kinescope.io/embed/e43gyKaDCpfvawMRBVoNGd",
  "https://kinescope.io/hXKeZKu9LdqLKdWHHzf8dW",
  "https://kinescope.io/87i4ELZHxR6guitB46DenN",
  "https://kinescope.io/6fXNks1Jcc1MRrKAWr7mCc",
  "https://kinescope.io/jExrLQj6mxgpNwq6943yXr",
  "https://kinescope.io/a4g6Rdr7cBrcGWjDaNc2Ea",
  "https://kinescope.io/vpH9MWCgRLDfZnLueas3Q6",
  "https://kinescope.io/syUkj9WctWdo3ZoSaU3iRD",
  "https://kinescope.io/43rogGjS9EYVsPWUMeLxtw",
  "https://kinescope.io/4weQYbkMHzyvJc3U5nwa7u",
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
          <span class="text-color1"> Отзывы ребят<br /> </span>
          <span>из 60+ моих консультаций</span>
        </h1>
        <p
          class="sm:w-2/3 text-lg sm:text-2xl text-gray font-medium text-center sm:text-start"
        >
          Помогал дизайнерам разобрать их портфолио, понять чего сейчас не
          хватает в работах и куда расти дальше. Давал рекомендации по макетам,
          консультировал по трудоустройству, тестовым, карьере и вот, что они
          говорят
        </p>
      </div>
      <div class="w-full flex flex-row flex-wrap sm:gap-0">
        <div
          class="relative h-[160px] sm:h-[250px] w-1/2 sm:w-1/5 p-1 sm:p-1 mb-1"
          v-for="link in linksArray"
        >
          <iframe
            :src="link"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media;"
            frameborder="0"
            allowfullscreen
            style="
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
            "
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
