<template>
  <div id="app">
    <HelloWorldVue />
    <!-- <company /> -->
  </div>
</template>

<script>
import HelloWorldVue from './components/HelloWorld.vue';
// import company from './compoents/company.vue';
export default {
  name: 'App',
  components: {
    HelloWorldVue,
    // company,
  },
  data() {
    return {
      date: '',
      min: '',
    };
  },
  //顯示禮拜幾用
  computed: {
    translateDays() {
      let weekday = new Date(this.date).getDay();
      if (weekday === 1) {
        return '(一)';
      } else {
        return '(二)';
      }
    },
  },
  //更新屬性min用
  watch: {
    date(newValue) {
      this.min = newValue;
    },
  },
};
</script>

<style lang="scss">
@import '../node_modules/@braid/vue-formulate/themes/snow/snow.scss';
// .formulate-file-add {
//   background-color: red !important;
// }
// .formulate-input-upload-area {
//   background-color: yellow;
// }

.date-group {
  display: flex;
  flex-direction: column;
  position: relative;
  .date {
    width: 200px;
  }
  .day {
    left: 86px;
    position: absolute;
    pointer-events: none;
  }
}
</style>
