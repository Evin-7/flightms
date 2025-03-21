<template>
  <div class="flex flex-wrap justify-center flex-row">
    <div class="w-[96%] flex items-center space-x-2 pt-[10px]">
      <img
        @click="$router.back()"
        src="@/assets/icons/arrowRIghtBlack.png"
        alt="Back Icon"
        class="w-[20px] h-[20px]"
      />
      <span
        class="text-sm lg:text-xl text-left font-medium text-flightmsdarkpurple"
        >Add New Flight</span
      >
    </div>
  </div>

  <div class="flex flex-wrap justify-center pt-[20px] flex-row">
    <div class="w-[96%] bg-white rounded-xl flex items-center p-[5px]">
      <div class="flex flex-wrap justify-center flex-row w-full">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="flex-1 p-2 text-center pl-[20px] flex items-center gap-2"
        >
          <div
            :class="[
              index === activeStep
                ? 'bg-flightmspurple text-white'
                : 'bg-gray-300 text-flightmsdarkpurple opacity-50',
              'rounded-[5px] w-[30px] h-[30px] flex items-center justify-center text-sm font-medium',
            ]"
          >
            {{ step.number }}
          </div>
          <span
            :class="
              index === activeStep
                ? 'text-flightmspurple'
                : 'text-gray-400 opacity-50'
            "
            class="flex items-center gap-1"
          >
            {{ step.label }}
            <img
              v-if="index < steps.length - 1"
              src="@/assets/icons/rightDouble.png"
              alt="Next Icon"
              class="w-[20px] h-[20px] ml-8 relative"
            />
          </span>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-wrap justify-center pt-[20px] flex-row">
    <div class="w-[96%] bg-white rounded-xl p-5">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="flex flex-col" v-for="field in fields" :key="field.model">
          <label class="text-flightmsdarkpurple text-[14px] font-normal mb-1"
            >{{ field.label }} *</label
          >
          <input
            v-if="field.type === 'date'"
            type="date"
            class="border border-gray-300 rounded-md p-2 h-[55px] w-full focus:outline-flightmspurple"
            v-model="formValues[field.model]"
          />
          <input
            v-else-if="field.type === 'time'"
            type="time"
            class="border border-gray-300 rounded-md p-2 h-[55px] w-full focus:outline-flightmspurple"
            v-model="formValues[field.model]"
          />
          <select
            v-else-if="field.type === 'select'"
            class="border border-gray-300 rounded-md p-2 h-[55px] w-full focus:outline-flightmspurple"
            v-model="formValues[field.model]"
          >
            <option value="">Select {{ field.label }}</option>
            <option
              v-for="option in field.options"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
          <span v-if="errors[field.model]" class="text-red-500 text-sm">{{
            errors[field.model]
          }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Recurrence Section -->
  <div class="flex flex-wrap justify-center pt-[20px] flex-row">
    <div class="w-[96%] bg-white rounded-xl p-5">
      <div
        class="text-sm lg:text-xl text-left font-medium text-flightmsdarkpurple"
      >
        Recurrence
      </div>

      <div class="flex items-center justify-start mt-3 space-x-2">
        <!-- Repeat Every Number Selection -->
        <div class="flex flex-col w-[15%]">
          <label class="text-flightmsdarkpurple text-[14px] font-normal mb-1"
            >Repeat Every *</label
          >
          <select
            class="border border-gray-300 h-[55px] rounded-md p-2 w-full focus:outline-flightmspurple"
            v-model="formValues.repeatEvery"
          >
            <option value="">Select Number</option>
            <option v-for="num in 10" :key="num" :value="num">{{ num }}</option>
          </select>
          <span v-if="errors.repeatEvery" class="text-red-500 text-sm">{{
            errors.repeatEvery
          }}</span>
        </div>

        <!-- Time Unit Selection -->
        <div class="flex flex-col w-[15%] pt-[23px]">
          <select
            class="border border-gray-300 rounded-md p-2 h-[55px] w-full focus:outline-flightmspurple"
            v-model="formValues.timeUnit"
          >
            <option value="">Select Unit</option>
            <option
              v-for="unit in ['Day', 'Week', 'Month', 'Year']"
              :key="unit"
              :value="unit"
            >
              {{ unit }}
            </option>
          </select>
          <span v-if="errors.timeUnit" class="text-red-500 text-sm">{{
            errors.timeUnit
          }}</span>
        </div>

        <!-- Right-side White Space -->
        <div class="ml-auto w-[20%]"></div>
      </div>
      <div class="pt-[30px]">
        <span class="text-flightmsdarkpurple text-[14px] font-normal mb-1"
          >Repeat Every *</span
        >
      </div>
      <div class="flex flex-wrap flex-row justify-start">
        <div class="flex justify-between w-[60%] gap-2">
          <div
            v-for="(day, index) in weekDays"
            :key="index"
            :class="[
              'flex flex-col items-center justify-center rounded-md w-[120px] h-[60px] p-2',
              isToday(day.fullDate)
                ? 'bg-[#5E56C7] text-white'
                : 'bg-white border border-gray-300',
            ]"
          >
            <span class="text-sm font-light">{{ day.day }}</span>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-start mt-5 space-x-2">
        <!-- Ends On Selection -->
        <div class="flex flex-col w-[31%]">
          <label class="text-flightmsdarkpurple text-[14px] font-normal mb-1"
            >Ends On *</label
          >
          <select
            class="border border-gray-300 h-[55px] rounded-md p-2 w-full focus:outline-flightmspurple"
            v-model="formValues.endsOn"
          >
            <option value="">Select Option</option>
            <option value="never">Never</option>
            <option value="on_date">On a specific date</option>
            <option value="after_occurrences">
              After a number of occurrences
            </option>
          </select>
          <span v-if="errors.endsOn" class="text-red-500 text-sm">{{
            errors.endsOn
          }}</span>
        </div>

        <!-- Right-side White Space -->
        <div class="ml-auto w-[20%]"></div>
      </div>
    </div>
  </div>

  <div
    v-if="errorMessage"
    class="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white p-3 rounded-md shadow-lg transition-opacity duration-300"
    :class="{ 'opacity-0': !errorMessage }"
  >
    {{ errorMessage }}
  </div>

  <div class="flex flex-wrap pb-[40px] justify-center pt-[20px] flex-row">
    <div class="w-[96%] flex items-center p-[5px] justify-start space-x-4">
      <button
        class="bg-flightmsdarkpurple text-[13px] rounded-xl text-white px-4 py-2 w-[150px] h-[50px] font-medium hover:bg-flightmspurple"
        @click="validateAndSubmit('continue')"
      >
        Save & Continue
      </button>
      <button
        class="bg-white border text-[13px] rounded-xl border-flightmsdarkpurple w-[150px] h-[50px] text-flightmsdarkpurple px-4 py-2 font-medium hover:bg-gray-400"
        @click="validateAndSubmit('exit')"
      >
        Save & Exit
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  startOfWeek,
  addDays,
  format,
  isSameDay,
  subWeeks,
  addWeeks,
} from "date-fns";
import { useRouter } from "vue-router";
const router = useRouter();
const activeStep = ref(1);
const errorMessage = ref("");
const formValues = ref({
  departureDate: "",
  endsOn: "never",
  departureTime: "",
  departureTimezone: "",
  arrivalDate: "",
  arrivalTime: "",
  arrivalTimezone: "",
  repeatEvery: "",
  timeUnit: "",
});

const errors = ref({});
const today = new Date();
const currentDate = ref(
  today.toLocaleDateString("en-US", { year: "numeric", month: "long" }),
);

const startOfWeekDate = ref(startOfWeek(today, { weekStartsOn: 0 })); // Sunday start

const weekDays = computed(() => {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const day = addDays(startOfWeekDate.value, i);
    days.push({
      date: format(day, "dd"),
      day: format(day, "EEE").toUpperCase(),
      fullDate: day,
    });
  }
  return days;
});

function prevWeek() {
  startOfWeekDate.value = subWeeks(startOfWeekDate.value, 1);
}

function nextWeek() {
  startOfWeekDate.value = addWeeks(startOfWeekDate.value, 1);
}

function isToday(fullDate) {
  return isSameDay(fullDate, today);
}

const fields = [
  { model: "departureDate", label: "Departure Date", type: "date" },
  { model: "departureTime", label: "Departure Time", type: "time" },
  {
    model: "departureTimezone",
    label: "Departure Timezone",
    type: "select",
    options: ["UTC", "PST", "EST", "CST", "MST"],
  },
  { model: "arrivalDate", label: "Arrival Date", type: "date" },
  { model: "arrivalTime", label: "Arrival Time", type: "time" },
  {
    model: "arrivalTimezone",
    label: "Arrival Timezone",
    type: "select",
    options: ["UTC", "PST", "EST", "CST", "MST"],
  },
];

const steps = [
  { number: 1, label: "Flight Details" },
  { number: 2, label: "Schedule" },
  { number: 3, label: "Aircraft Info" },
  { number: 4, label: "Pricing" },
  { number: 5, label: "Review" },
];

const validateAndSubmit = (action) => {
  errors.value = {};
  let hasError = false;

  Object.keys(formValues.value).forEach((key) => {
    if (!formValues.value[key]) {
      errors.value[key] = "This field is required";
      hasError = true;
    }
  });

  if (hasError) {
    errorMessage.value = "Please fill all required fields.";
    setTimeout(() => {
      errorMessage.value = "";
    }, 3000);
    return;
  }

  console.log("Form Submitted", formValues.value);
  if (action === "continue") {
    activeStep.value++;
  } else {
    router.push("/");
  }
};
</script>

<style scoped>
select {
  appearance: none;
  background-image: url("@/assets/icons/downBlack.png");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  padding-right: 32px;
}
</style>
