<template>
  <div>
    <input type="date" v-model="date" />
    <input type="time" v-model="time" />
    <div>{{ date | filtersDate }}</div>
    <div>{{ time | filtersTime }}</div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'App',
  data() {
    return {
      date: '',
      time: '',
    };
  },
  filters: {
    filtersDate(date) {
      return moment(date).format('dddd');
    },
    filtersTime(time) {
      let hours = time.slice(0, 2);
      let minus = time.slice(3, 5);
      if (!hours) {
        return;
      } else if (hours >= 12) {
        return `下午${hours}時${minus}分`;
      } else {
        return `上午${hours}時${minus}分`;
      }

      // return moment(time).format('a');
    },
  },
  //顯示禮拜幾用
  // computed: {
  //   translateDays() {
  //     let weekday = new Date(this.date).getDay();
  //     if (weekday === 1) {
  //       return '(一)';
  //     } else {
  //       return '(二)';
  //     }
  //   },
  //更新屬性min用
  // watch: {
  //   date(newValue) {
  //     this.min = newValue;
  //   },
  // },
};
</script>

<style lang="scss">
@import '../../node_modules/@braid/vue-formulate/themes/snow/snow.scss';
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
