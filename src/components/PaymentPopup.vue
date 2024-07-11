<script setup>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  RadioGroupOption,
  RadioGroup,
} from "@headlessui/vue";
import axios from "axios";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 39992,
  },
  descriptionOrder: {
    type: String,
    required: true,
    default: "Тариф с наставником",
  },
});
const emit = defineEmits(["close"]);

function payForm() {
  const data = {
    apikey: "api-test-key",
    login: "test-number",
    amount: props.price,
    customer_phone: null,
    customer_email: "mail@mail.ru",
    method: "internetAcquiring",
    description:
      props.price === 79990
        ? "Обучение Resciencer: Тариф с наставником"
        : "Обучение Resciencer: Тариф основной",
  };
  axios.post("https://test-bill.ru", data).then((response) => {
    window.location.replace(response.data?.data?.paymentUrl);
  });
}
function closeModal() {
  emit("close");
}
</script>
<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/80" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full bg-[#161616] max-w-xl transform overflow-hidden rounded-[32px] border border-[#2c2c2d] p-5 text-left align-middle shadow-xl transition-all flex flex-col"
            >
              <DialogTitle
                as="h3"
                class="text-2xl font-bold leading-6 text-white-default mb-6 flex justify-between"
              >
                Информация о заказе
                <img
                  src="@/assets/close.svg"
                  @click="closeModal"
                  class="cursor-pointer"
                  alt=""
                />
              </DialogTitle>
              <RadioGroup class="flex flex-col gap-2 mb-8">
                <RadioGroupOption>
                  <div
                    class="w-full bg-[#2C2C2D] p-4 rounded-[16px] text-gray flex items-center justify-between"
                  >
                    <div class="flex gap-3 items-center">
                      <div
                        class="rounded-full p-1 h-[24px] w-[24px] bg-[#19191A] ring-1 ring-color1"
                      >
                        <div class="rounded-full h-full w-full bg-color1"></div>
                      </div>
                      <p class="text-base text-gray cursor-pointer">
                        {{
                          price === 79990
                            ? "Тариф с наставником"
                            : "Тариф основной"
                        }}
                      </p>
                    </div>
                    <p class="text-base font-medium text-white-default">
                      {{ price === 79990 ? "79 990" : "49 990" }} ₽
                    </p>
                  </div>
                </RadioGroupOption>
              </RadioGroup>
              <div class="flex flex-col text-gray gap-2 mb-8">
                <h1 class="text-white-default text-2xl font-bold">
                  После оплаты напишем вам в течении дня
                </h1>
                <p class="text-base">
                  Начать заниматься можно с 11 марта. Если проблемы с оплатой
                  или любой другой вопрос — можно написать в поддержку школы
                  <a href="https://t.me/resciencer_help" class="text-color1"
                    >@resciencer_help</a
                  >
                </p>
              </div>

              <form
                class="flex flex-col w-full gap-4"
                name="payform-tinkoff"
                id="payform-tinkoff"
              >
                <h1 class="text-white-default text-2xl font-bold mb-2">
                  Ваши данные
                </h1>
                <input
                  class="h-auto bg-[#2C2C2D] rounded-[16px] text-white-default p-5 text-base font-medium"
                  type="hidden"
                  name="terminalkey"
                  value="1707995572192"
                />
                <input
                  class="h-auto bg-[#2C2C2D] rounded-[16px] text-white-default p-5 text-base font-medium"
                  type="hidden"
                  name="frame"
                  value="false"
                />
                <input
                  class="h-auto bg-[#2C2C2D] rounded-[16px] text-white-default p-5 text-base font-medium"
                  type="hidden"
                  name="language"
                  value="ru"
                />
                <input
                  class="h-auto bg-[#2C2C2D] rounded-[16px] text-white-default p-5 text-base font-medium"
                  type="hidden"
                  name="receipt"
                  value=""
                />
                <input
                  class="h-auto bg-[#2C2C2D] rounded-[16px] text-white-default p-5 text-base font-medium"
                  type="hidden"
                  placeholder="Сумма заказа"
                  name="amount"
                  :value="price"
                  required
                />
                <input
                  class="h-auto bg-[#2C2C2D] rounded-[16px] text-white-default p-5 text-base font-medium"
                  type="hidden"
                  placeholder="Номер заказа"
                  name="order"
                />
                <input
                  class="h-auto bg-[#2C2C2D] rounded-[16px] text-white-default p-5 text-base font-medium"
                  type="hidden"
                  placeholder="Описание заказа"
                  :value="descriptionOrder"
                  name="description"
                />
                <input
                  class="h-auto bg-[#2C2C2D] rounded-[16px] text-white-default p-5 text-base"
                  type="text"
                  placeholder="Фамилия, имя"
                />
                <input
                  class="h-auto bg-[#2C2C2D] rounded-[16px] text-white-default p-5 text-base font-medium"
                  type="text"
                  placeholder="Телеграм"
                />
                <input
                  class="h-auto bg-[#2C2C2D] rounded-[16px] text-white-default p-5 text-base font-medium"
                  type="text"
                  placeholder="Почта"
                />
                <input
                  class="h-auto bg-[#2C2C2D] rounded-[16px] text-white-default p-5 text-base font-medium"
                  type="hidden"
                  placeholder="Контактный телефон"
                  name="phone"
                />
                <input
                  class="h-auto bg-color1 rounded-[16px] text-white-default p-5 text-2xl font-bold mt-[48px] ring-8 ring-[#1F1F1F] cursor-pointer"
                  type="button"
                  value="Оплатить обучение"
                  @click="payForm"
                />
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<style></style>
