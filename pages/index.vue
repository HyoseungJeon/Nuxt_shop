<template>
  <div class="container">
    <div class="jumbotron">
      <h1>HELLO SHOP</h1>
      <p class="lead">회원 기능</p>
      <p>
        <nuxt-link class="btn btn-lg btn-secondary" to="member/memberRegister">회원 가입</nuxt-link>
        <nuxt-link id="sadcsadc" class="btn btn-lg btn-secondary" to="member/memberList">회원 목록</nuxt-link>
      </p>
      <p class="lead">상품 기능</p>
      <p>
        <nuxt-link class="btn btn-lg btn-dark" to="item/itemRegister">상품 등록</nuxt-link>
        <nuxt-link class="btn btn-lg btn-dark" to="item/itemList">상품 목록</nuxt-link>
      </p>
      <p class="lead">주문 기능</p>
      <p>
        <nuxt-link class="btn btn-lg btn-info" to="/order/Order">상품 주문</nuxt-link>
        <nuxt-link class="btn btn-lg btn-info" to="/order/OrderList">주문 내역</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from '../store/counter'
// import { getMember } from '@/api'

export default {
  components: {  },
  // async asyncData({ isDev, route, store, env, params, query, req, res, redirect, error, from }) {
  //   const response = await getMember(1)
  //   const member = response.data

  //   return { member }
  // },
  data() {
    return {
      store: useCounterStore(),
      searchKeyword: ''
    }
  },

  methods: {
  }
}
</script>

<style scoped>
.button_plus {
  position: absolute;
  width: 35px;
  height: 35px;
  background: #fff;
  cursor: pointer;
  border: 2px solid #095776;
}

.button_plus:after {
  content: '';
  position: absolute;
  transform: translate(-50%, -50%);
  height: 4px;
  width: 50%;
  background: #095776;
  top: 50%;
  left: 50%;
}

.button_plus:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #095776;
  height: 50%;
  width: 4px;
}

.button_plus:hover:before,
.button_plus:hover:after {
  background: #fff;
  transition: 0.2s;
}

.button_plus:hover {
  background-color: #095776;
  transition: 0.2s;
}

.flex {
  display: flex;
  justify-content: center;
}

.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}

.product-image {
  width: 400px;
  height: 250px;
}

.app {
  position: relative;
}

.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}

.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>