<template>
  <div id="app">
    <!-- input type file test -->
    <!-- <FormulateInput
      type="file"
      name="file"
      label="Select your documents to upload"
      help="Select one or more PDFs to upload"
      validation="mime:application/pdf|required"
      :validation-messages="{
        mime: '檔案必須是pdf檔',
        required: '此為必填欄位',
      }"
      multiple
    /> -->
    <div class="date-group">
      <!-- <label for="startDate">startDate</label> -->
      <div class="day">{{ translateDays }}</div>
      <input type="date" name="startDate" class="date" v-model="date" />
    </div>

    <FormulateInput
      type="date"
      name="sample"
      label="Sample date input"
      placeholder="Sample date placeholder"
      help="Sample date help text"
      validation="required|after:2019-01-01"
      :min="min"
      max="2021-01-01"
      error-behavior="live"
    />

    <!-- <FormulateInput
      type="time"
      name="sample"
      label="Sample time input"
      placeholder="Sample time placeholder"
      help="Sample time help text"
      validation="required"
    /> -->
  </div>
</template>

<script>
export default {
  name: 'App',
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
