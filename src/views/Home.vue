<script setup>
import MainBlock from "@/components/HomeBlocks/MainBlock.vue";
import SecondBlock from "@/components/HomeBlocks/SecondBlock.vue";
import ThirdBlock from "@/components/HomeBlocks/ThirdBlock.vue";
import FourthBlock from "@/components/HomeBlocks/FourthBlock.vue";
import FifthBlock from "@/components/HomeBlocks/FifthBlock.vue";
import SixthBlock from "@/components/HomeBlocks/SixthBlock.vue";
import SeventhBlock from "@/components/HomeBlocks/SeventhBlock.vue";
import EighthBlock from "@/components/HomeBlocks/EighthBlock.vue";
import NineBlock from "@/components/HomeBlocks/NineBlock.vue";
import FooterBlock from "@/components/HomeBlocks/FooterBlock.vue";
import ReviewsView from "@/components/HomeBlocks/ReviewsView.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
onMounted(() => {
  if (route.query.tariffs === "yes") {
    const element = document.getElementById("tariffs");
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "instant",
      });
    }
  }
});
</script>

<template>
  <MainBlock class="font-manrope" />
  <SecondBlock class="font-manrope" />
  <ThirdBlock class="font-manrope" />
  <FourthBlock class="font-manrope" id="plan" />
  <FifthBlock class="font-manrope" />
  <SixthBlock class="font-manrope" />
  <ReviewsView class="font-manrope" />
  <seventh-block class="font-manrope" id="tariffs" />
  <eighth-block class="font-manrope" />
  <nine-block class="font-manrope" id="questions" />
  <FooterBlock class="font-manrope" />
  <a
    href="https://t.me/resciencer_help"
    class="fixed bg-[#2C2C2D] py-3 px-4 bottom-8 right-6 rounded-[16px] flex items-center gap-3 cursor-pointer font-manrope"
  >
    <img src="@/assets/tg.svg" alt="" class="w-[40px] h-[40px]" />
    <div class="flex flex-col">
      <h1 class="font-bold text-lg text-white-default">Задать вопрос</h1>
      <p class="text-gray font-medium">По обучению и оплате</p>
    </div>
  </a>
</template>
