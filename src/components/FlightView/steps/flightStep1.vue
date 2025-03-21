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
      >
        Add New Flight
      </span>
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
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col" v-for="field in fields" :key="field.model">
          <label class="text-flightmsdarkpurple text-[14px] font-normal mb-1"
            >{{ field.label }} *</label
          >
          <component
            :is="field.type === 'text' ? 'input' : 'select'"
            :placeholder="field.placeholder"
            class="border border-gray-300 rounded-md p-2 h-[55px] w-full focus:outline-flightmspurple"
            :value="formValues[field.model]"
            @input="(event) => (formValues[field.model] = event.target.value)"
          >
            <option v-if="field.type === 'select'" value="">
              {{ field.placeholder }}
            </option>
            <option
              v-for="option in field.options"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </component>
          <span v-if="errors[field.model]" class="text-red-500 text-sm">{{
            errors[field.model]
          }}</span>
        </div>
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

  <div class="flex flex-wrap justify-center pt-[20px] flex-row">
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

<script>
export default {
  data() {
    return {
      activeStep: 0,
      formValues: {
        flightNumber: "",
        flightType: "",
        departureAirport: "",
        destinationAirport: "",
        flightRoute: "",
        flightDestination: "",
      },
      errors: {},
      errorMessage: "",
      fields: [
        {
          model: "flightNumber",
          label: "Flight Number",
          type: "text",
          placeholder: "Enter Flight Number",
        },
        {
          model: "flightType",
          label: "Flight Type",
          type: "select",
          options: ["Commercial", "Cargo"],
          placeholder: "Select Flight Type",
        },
        {
          model: "departureAirport",
          label: "Departure Airport",
          type: "select",
          options: ["JFK", "LAX", "ORD"],
          placeholder: "Select Departure Airport",
        },
        {
          model: "destinationAirport",
          label: "Destination Airport",
          type: "select",
          options: ["LHR", "DXB", "SIN"],
          placeholder: "Select Destination Airport",
        },
        {
          model: "flightRoute",
          label: "Flight Route",
          type: "select",
          options: ["Direct", "One Stop", "Multi-Stop"],
          placeholder: "Select Flight Route",
        },
        {
          model: "flightDestination",
          label: "Flight Destination",
          type: "select",
          options: ["Europe", "Asia", "North America"],
          placeholder: "Select Flight Destination",
        },
      ],
      steps: [
        { number: 1, label: "Flight Details" },
        { number: 2, label: "Schedule" },
        { number: 3, label: "Aircraft Info" },
        { number: 4, label: "Pricing" },
        { number: 5, label: "Review" },
      ],
    };
  },
  methods: {
    validateAndSubmit(action) {
      this.errors = {};
      this.errorMessage = "";
      let isValid = true;

      this.fields.forEach((field) => {
        if (!this.formValues[field.model]) {
          this.errors[field.model] = `${field.label} is required.`;
          isValid = false;
        }
      });

      if (!isValid) {
        this.errorMessage =
          "Please fill all required fields before proceeding.";
        setTimeout(() => {
          this.errorMessage = "";
        }, 2000);
        return;
      }

      if (action === "continue") {
        this.$router.push("/add-flight/step-2");
      } else if (action === "exit") {
        this.$router.push("/");
      }
    },
  },
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
