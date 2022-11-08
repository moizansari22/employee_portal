<template>
  <base-card>
    <h1 align="center">Employee Portal</h1>
    <h1 align="center">
      Current Time: {{ timerHours }} : {{ timerMinute }} : {{ timerCount }}
    </h1>
    <h1 align="center">
      Break Time: {{ btimerHours }} : {{ btimerMinute }} : {{ btimerCount }}
    </h1>
    <h1 align="center">Check-In: {{ starting }}</h1>
    <h1 align="center">Check-Out: {{ ending }}</h1>
    <section align="center">
      <base-button v-if="!inm == true" @click="startTimer"
        >Check-In</base-button
      >
      <base-button v-else @click="stopTimer">Check-Out</base-button>
      <base-button @click="breakIn">Break-Start</base-button>
      <base-button @click="breakOut">Break-End</base-button>
    </section>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      timerCount: 0,
      timerMinute: 0,
      timerHours: 0,
      btimerCount: 0,
      btimerMinute: 0,
      btimerHours: 0,
      inm: false,
      enm: false,
      starting: 0,
      ending: 0,
      interval: 0,
      binterval: 0,
    };
  },
  methods: {
    startTimer() {
      this.starting = this.currentTime = new Date().toLocaleString("en-US", {
        hour12: true,
      });
      this.inm = true;
      this.interval = setInterval(() => {
        if (this.inm === true) {
          this.currentTime = new Date().toLocaleString("en-US", {
            hour12: true,
          });
          this.timerCount++;
          if (this.timerCount == 60) {
            this.timerMinute++;
            this.timerCount = 0;
          }
          if (this.timerMinute == 60) {
            this.timerHours++;
            this.timerMinute = 0;
          }
        }
      }, 1000);
    },
    stopTimer() {
      this.inm = false;
      clearInterval(this.interval);
      this.ending = new Date().toLocaleString("en-US", { hour12: true });
    },
    breakIn() {
      this.enm = true;
      this.binterval = setInterval(() => {
        if (this.enm === true) {
          this.currentTime = new Date().toLocaleString("en-US", {
            hour12: true,
          });
          this.btimerCount++;
          if (this.btimerCount == 60) {
            this.btimerMinute++;
            this.btimerCount = 0;
          }
          if (this.btimerMinute == 60) {
            this.btimerHours++;
            this.btimerMinute = 0;
          }
        }
      }, 1000);
    },
    breakOut() {
      this.enm = false;
      clearInterval(this.binterval);
    },
  },
};
</script>
