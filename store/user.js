import { defineStore } from "pinia";

export const userStore = defineStore("counter", {
  state: () => ({ userId: 's1441' }),
  actions: {
    setUserInfo({ userId }) {
      this.userId = userId
    }
  },
  getters: {
  }
});