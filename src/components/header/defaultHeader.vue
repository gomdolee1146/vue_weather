<template>
  <header class="header">
    <div class="header__wrap">
      <div class="header__btn" @click="gotoBack">
        <button class="btn-circle">
          <i class="ico ico-chevron_w"></i>
        </button>
      </div>
      <div class="header__title">{{ titleContent }}</div>
      <div class="header__btn">
        <button class="btn-circle" @click="toggleModal" v-if="isShowSearch">
          <i class="ico ico-search_w"></i>
        </button>
      </div>
    </div>
  </header>
  <!--isShowModal , isShowInput -->
  <div class="modal" v-if="isShowModal">
    <div class="modal__bg" @click="toggleModal"></div>
    <transition name="slide-left" mode="out-in">
      <div class="header__search" v-if="isShowInput">
        <input
          type="text"
          placeholder="지역명을 검색하세요."
          v-model="addrInfo"
          @input="searchWeather($event)"
        />
        <button class="btn-circle" @click="removeContent">
          <i class="ico ico-xmark_w" v-if="addrInfo !== ''"></i>
        </button>
        <search-box
          :isErrorType="isErrorType"
          :cityNameList="cityNameList"
          v-if="isShowInput"
        ></search-box>
      </div>
    </transition>
  </div>
</template>

<script>
import searchBox from '../box/searchBox.vue';
import { localName } from '@/data';

export default {
  name: 'defaultHeader',
  components: { searchBox },
  props: {
    isShowSearch: { type: Boolean, default: true },
    titleContent: { type: String, default: '' },
  },
  data() {
    return {
      isShowModal: false,
      isShowInput: false,
      isErrorType: 0,
      cityNameList: [],
      addrInfo: '',
    };
  },
  methods: {
    searchWeather(event) {
      const chkEng = /^[a-zA-Z]+$/;
      const text = event.target.value;

      if (text === '') {
        this.isErrorType = 2;
        return;
      }
      if (chkEng.test(text) === true) {
        this.isErrorType = 0;
        // cityNameList 추출하기
        this.cityNameList = this.$_.chain(localName)
          .filter((name) => {
            return this.$_.includes(name, text);
          })
          .value();
      } else {
        this.isErrorType = 1;
        this.cityNameList = [];
      }
    },
    toggleModal() {
      this.isShowModal = !this.isShowModal;
      this.$nextTick(() => {
        this.isShowInput = this.isShowModal;
        this.addrInfo = '';
      });
      if (this.isShowModal === true ){
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'visible'
      }
    },
    removeContent() {
      if (this.addrInfo === '') return;
      if (this.addrInfo !== '') this.addrInfo = '';
    },
    gotoBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  position: fixed;
  left: 50%;
  top: -1px;
  width: 100%;
  height: 96px;
  padding: 30px 24px 0;
  transform: translateX(-50%);
  z-index: 100;
}

.header__wrap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}
.header__title {
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  text-align: center;
}

.header__search {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 36px;
  left: 50%;
  width: calc(100% - 48px);
  height: 48px;
  transform: translateX(-50%);
  box-sizing: border-box;
  z-index: 2;
}
.header__search input {
  flex: 1 1 auto;
  width: 100%;
  height: 48px;
  padding: 0 36px;
  border-radius: 24px 0 0 24px;
  background: var(--bg-secondary);
  box-sizing: border-box;
}
.header__search button {
  flex: 0 0 auto;
  border-radius: 0 24px 24px 0;
}
.btn-default {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 0 !important;
  background: var(--bg-secondary);
}
.search {
  position: fixed;
  top: 42px;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  z-index: 10;
}
</style>
