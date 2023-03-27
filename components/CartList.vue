<template>
  <ul>
    <li v-for="product in store.cartProducts" :key="product.id" class="item flex">
      <img class="product-image" :src="product.imageUrl" :alt="product.name" />
      <p>{{ product.name }}</p>
      <span>{{ product.price }}</span>
      <button type="button" @click="removeProductCart(product)">remove Cart</button>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>