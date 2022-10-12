<script>
const STORAGE_KEY = 'nanshan-plaza-project-apply';
export default {
  name: 'App',
  data() {
    return {
      currentStep: 1,
      formValues: {},
      location: '',
      applyContent: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      contactPerson: '',
      constructionCompany: '',
      applyForm: '',
      attachFile: '',
    };
  },
  methods: {
    stepAdder() {
      if (this.currentStep === 3) return;
      this.currentStep++;
      this.setSessionStorage();
      window.scrollTo(0, 0);
    },
    stepMinus() {
      if (this.currentStep === 1) return;
      this.currentStep--;
      this.setSessionStorage();
    },
    // sessionStorage
    setSessionStorage() {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(this.currentStep));
    },
    getSessionStorage() {
      let storageStep = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '[]');
      console.log(storageStep);
      if (storageStep.length === 0) {
        this.currentStep = 1;
      } else {
        this.currentStep = storageStep;
      }
    },
    removeSessionStorage() {
      sessionStorage.removeItem(STORAGE_KEY);
    },
    // previewFiles(event) {
    //   console.log(event.target.files);
    // }
    //step2

    // 開始時間跟結束時間計算
    // 上傳表單
    // 全部填寫完畢 下一步-預覽內容 才會開啟
    //step3
    //
  },
  mounted: function () {
    this.getSessionStorage();
  },
};
</script>

<template>
  <div class="project-form-apply">
    <h2 class="title">提交申請表單</h2>
    <div class="step-bar-group">
      <!-- 用:class做判定data step到哪一個step ，到了就給active從黑色變成藍色 -->
      <div :class="['step-1', { active: currentStep === 1 }]">
        <div class="current-step">Step 1.</div>
        <div class="step-name">申請說明</div>
      </div>
      <div :class="['step-2', { active: currentStep === 2 }]">
        <div class="current-step">Step 2.</div>
        <div class="step-name">填寫資料</div>
      </div>
      <div :class="['step-3', { active: currentStep === 3 }]">
        <div class="current-step">Step 3.</div>
        <div class="step-name">預覽內容</div>
      </div>
      <div class="step-4">
        <div class="current-step">Step 4.</div>
        <div class="step-name">提交完成</div>
      </div>
    </div>
    <div class="content">
      <!-- 分三個section 用v-if去判定step到哪個步驟，就顯示那個step -->
      <div class="step-1" v-if="currentStep === 1">
        <ul>
          <li>
            <h4>1. 下載申請表</h4>
            <p>
              隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。
            </p>
          </li>
          <li>
            <h4>2. 請公司內用印過</h4>
            <p>
              隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。
            </p>
          </li>
          <li>
            <h4>3. 請將用印過申請表掃瞄或拍照</h4>
            <p>
              隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。
            </p>
          </li>
        </ul>
      </div>
      <div class="step-2" v-if="currentStep === 2">
        <section class="section-1">
          <div class="title-group">
            <h3 class="title-group__title">專案申請資訊</h3>
            <div class="title-group__required">必填</div>
          </div>
          <div class="description">
            以下資訊請與紙本表單相符，以加速申請審核程序。
          </div>
          <div class="location-group">
            <label for="" class="location-group__title">地點</label>
            <input
              type="text"
              name="location"
              v-model="location"
              placeholder="請填寫地點"
              class="location-group__location"
            />
          </div>
          <div class="apply-content-group">
            <label for="" class="apply-content-group__title">申請內容</label>
            <input
              type="text"
              name="apply-content"
              v-model="applyContent"
              placeholder="請填寫申請內容"
              class="apply-content-group__content"
            />
          </div>
          <div class="start-date">
            <label class="start-date__title">開始日期與時間</label>
            <input class="start-date__date" type="date" v-model="startDate" />
            <input class="start-date__time" type="time" v-model="startTime" />
          </div>
          <div class="end-date">
            <label class="end-date__title">結束日期與時間</label>
            <input class="end-date__date" type="date" v-model="endDate" />
            <input class="end-date__time" type="time" v-model="endTime" />
          </div>
        </section>
        <section class="section-2">
          <div class="title-group">
            <h3 class="title-group__title">相關人員</h3>
            <div class="title-group__required">必填</div>
          </div>
          <div class="responsible-person">
            <label class="responsible-person__title">指定負責窗口</label>
            <div>
              <select class="responsible-person__select">
                <option value="" disabled selected hidden>
                  請選擇服務人員
                </option>
                <option>Annie Luan</option>
                <option>Saab</option>
                <option>Mercedes</option>
                <option>Audi</option>
              </select>
            </div>
            <div class="responsible-person__notes">
              所選服務人員為您本次申請之主要負責人。
            </div>
          </div>
          <div class="construction-company">
            <label class="construction-company__title">施工廠商</label>
            <div>
              <select class="responsible-person__select">
                <option value="" disabled selected hidden>
                  請選擇施工廠商
                </option>
                <option>小精靈室內裝潢</option>
                <option>Saab</option>
                <option>Mercedes</option>
                <option>Audi</option>
              </select>
            </div>
            <div class="responsible-person__notes">
              若您的施工廠商不在列表內，請聯絡管理中心進行建檔。
            </div>
          </div>
        </section>
        <section class="section-3">
          <div class="title-group">
            <h3 class="title-group__title">上傳表單</h3>
            <div class="title-group__required">必填</div>
          </div>
          <div class="description">
            請上傳填寫、用印完畢之紙本申請表單清晰影像檔。
          </div>
          <div class="apply-form">
            <label class="apply-form__title">申請表</label>
            <FormulateInput
              class="apply-form__file"
              type="file"
              name="file"
              validation="mime:image/jpeg,image/png|required"
              :validation-messages="{
                mime: '檔案必須是jpg png檔',
                required: '此為必填欄位',
              }"
            />
          </div>
          <div class="attach-file">
            <label class="attach-file__title">相關附件</label>
            <FormulateInput
              class="attach-file__file"
              type="file"
              name="file"
              validation=""
              add-label="上傳檔案"
              multiple
            />
          </div>
        </section>
      </div>
      <div class="step-3" v-if="currentStep === 3">
        <div class="location preview">
          <div>地點</div>
          <div>{{ location }}</div>
        </div>
        <div class="apply-content preview">
          <div>申請內容</div>
          <div>{{ applyContent }}</div>
        </div>
        <div class="start-date preview">
          <div>開始日期與時間</div>
          <div>{{ startDate }}</div>
          <div>{{ startTime }}</div>
        </div>
        <div class="end-date preview">
          <div>結束日期與時間</div>
          <div>{{ endDate }}</div>
          <div>{{ endTime }}</div>
        </div>
        <div class="contact-person preview">
          <div>指定負責窗口</div>
          <div>{{ contactPerson }}</div>
        </div>
        <div class="construction-company preview">
          <div>施工廠商</div>
          <div>{{ constructionCompany }}</div>
        </div>
        <div class="apply-form preview">
          <div>申請表</div>
          <div>{{ applyForm }}</div>
        </div>
        <div class="attach-file preview">
          <div>附加檔案</div>
          <div>{{ attachFile }}</div>
        </div>
      </div>
    </div>
    <!-- button group -->
    <div class="button-group">
      <div class="step-1" v-if="currentStep === 1">
        <button class="" @click.prevent="stepAdder()">下一步 - 填寫資料</button>
        <a href="/" @click="removeSessionStorage()">取消</a>
      </div>
      <div class="step-2" v-else-if="currentStep === 2">
        <!-- 表單填完之前不會亮燈 -->
        <button class="" @click.prevent="stepAdder()">下一步 - 預覽內容</button>
        <button class="" @click.prevent="stepMinus()">上一步 - 申請說明</button>
      </div>
      <div class="step-3" v-else-if="currentStep === 3">
        <button class="" @click.prevent="removeSessionStorage()">提交</button>
        <button class="" @click.prevent="stepMinus()">上一步 - 填寫資料</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../node_modules/@braid/vue-formulate/themes/snow/snow.scss';
// @import './scss/_variables.scss';
.project-form-apply {
  margin-top: 4px;
  @include respond-to(1024) {
    margin-top: 20px;
  }
  .title {
    display: flex;
    justify-content: center;
  }
  .step-bar-group {
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
    .step-1,
    .step-2,
    .step-3,
    .step-4 {
      font-weight: 500;
      font-size: 14px;
      min-width: 78px;
      max-width: 156px;
      width: 100%;
      padding-bottom: 8px;
      @include respond-to(768) {
        font-weight: normal;
        font-size: 16px;
        padding-bottom: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .current-step,
      .step-name {
        text-align: center;
      }
      .step-name {
      }
      &.active {
        color: $brand1;
        border-bottom: 1px solid $brand1;
      }
    }
  }
  .content {
    margin-bottom: 48px;
    max-width: 768px;
    margin: 0 auto;
    .step-1 {
      padding: 16px 32px 0px 16px;
      border: 1px solid $gray-300;
      border-radius: 5px;
      ul {
        padding: 0;
        li {
          list-style: none;
        }
      }
    }
    .step-1 {
      height: 416px;
      overflow: scroll;
      position: relative;
      &::-webkit-scrollbar {
        width: 8px;
        position: absolute;
        top: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background: $gray-400;
        border-radius: 4px;
      }
    }
    .step-2 {
      //共有樣式
      .section-1,
      .section-2,
      .section-3 {
        margin-bottom: 48px;
        .title-group {
          display: flex;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid $gray-900;
          align-items: flex-end;
          margin-bottom: 24px;
          &__title {
            margin: 0;
          }
        }
        .description {
          margin-bottom: 24px;
        }
        label {
          margin-bottom: 16px;
          @include respond-to(768) {
            margin-bottom: 0px;
          }
        }
        select {
          width: 100%;
          margin-bottom: 16px;
          @include respond-to(768) {
            margin-bottom: 0px;
          }
        }
      }
      //section-1
      .section-1 {
        .location-group,
        .apply-content-group,
        .start-date,
        .end-date {
          display: flex;
          flex-direction: column;
          margin-bottom: 24px;
          input {
            height: 40px;
            padding: 8px 12px;
            border-radius: 3px;
            border: 1px solid $gray-400;
            &:hover {
              border: 1px solid $gray-600;
            }
            &:focus {
              box-shadow: none !important;
              border: 1px solid $brand1;
            }
          }
          @include respond-to(768) {
            flex-direction: row;
            align-items: center;
            gap: 32px;
            &__title {
              width: 128px;
            }
            &__location,
            &__content {
              width: 258px;
            }
            &__date,
            &__time {
              width: 168px;
            }
          }
          @include respond-to(1024) {
            &__location,
            &__content {
              width: 288px;
            }
            &__date,
            &__time {
              width: 208px;
            }
          }
        }
        .start-date,
        .end-date {
          &__date {
            margin-bottom: 16px;
            @include respond-to(768) {
              margin-bottom: 0;
            }
          }
        }
        .end-date {
          @include respond-to(768) {
            margin-bottom: 0;
          }
        }
      }
      //section-2
      .section-2 {
        .responsible-person,
        .construction-company {
          &__select {
            height: 40px;
            padding-left: 12px;
          }
          @include respond-to(768) {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 32px;
            &__title {
              width: 128px;
            }
            &__select {
              width: 258px;
            }
            &__notes {
              width: 238px;
            }
          }
          @include respond-to(1024) {
            &__select {
              width: 288px;
            }
            &__notes {
              width: 288px;
            }
          }
        }
        .responsible-person {
          margin-bottom: 24px;
        }
      }
      .section-3 {
        .apply-form {
          margin-bottom: 24px;
        }
        .apply-form,
        .attach-file {
          &__title {
            font-size: 14px;
            margin-bottom: 16px;
            @include respond-to(768) {
              width: 128px;
              margin: 0;
              padding-top: 8px;
              height: 40px;
            }
          }
          @include respond-to(768) {
            display: flex;
            align-items: flex-start;
            gap: 32px;
          }
        }
        .apply-form__file,
        .attach-file__file {
          width: 100px;
          cursor: pointer;
          .formulate-input-upload-area {
            padding: 0;
            min-height: 40px;
            min-width: 100px;
            .formulate-input-upload-area-mask {
              border: 1px solid $black-1;
              background-color: $brand1;
              border-radius: 3px;
              width: 100px;
              &:hover {
                background-color: #5e9bd3;
              }
              &:active {
                background-color: #1665ad;
              }
              &::before {
                content: '上傳檔案';
                background-color: transparent;
                -webkit-mask-image: none;
                color: $text-alt-primary;
                width: auto;
                font-size: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'Noto Sans TC';
              }
            }
            .formulate-files {
              display: grid;
              grid-gap: 16px;
              .formulate-file-add {
                margin: 0;
                border: 1px solid $black-1;
                background-color: $brand1;
                border-radius: 3px;
                width: 100px;
                color: $text-alt-primary;
                height: 40px;
                align-items: center;
                display: flex;
                justify-content: center;
              }
              .formulate-file {
                background-color: $gray-100;
                border: 0;
                border-radius: 3px;
              }
              .formulate-file-name {
                padding-left: 0;
                &::before {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
    .step-3 {
    }
  }
  .button-group {
    display: flex;
    justify-content: center;
    max-width: 768px;
    margin: 0 auto;
    margin-top: 48px;
    .step-1,
    .step-2,
    .step-3 {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      text-align: center;
      gap: 24px;
      width: 100%;
      button {
        width: 100%;
      }
      a {
        width: 100%;
      }
      @include respond-to(768) {
        flex-direction: row;
        gap: 32px;
      }
    }
  }
}
#file-upload-button {
  cursor: pointer;
  width: 100px;
}
</style>
