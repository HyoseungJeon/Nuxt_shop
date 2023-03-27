import { defineStore } from "pinia";
// import { getCartProduct } from '@/api'

export const productStore = defineStore("product", {
  state: () => ({ 
    cartProducts: [],
  }),
  actions: {
    addProductCart(product) {
        // const newProduct = {
        //     ...product,
        //     imageUrl: `${product.imageUrl}?random=${Math.random()}`
        // }
        // registerCartProduct(newProduct)
        // console.log('addProductCart')
        // this.fetchCartProduct()
        this.cartProducts.push(product)
    },
    removeProductCart({ id }) {
        for(let i = 0 ; i < this.cartProducts.length; i++) {
            if(this.cartProducts[i].id === id) {
                this.cartProducts.splice(i,1)
                break
            }
        }
    },
    fetchCartProduct() {
      // const response = getCartProduct()
      // this.cartProducts = response.data
    }
  },
  getters: {
    getCartProducts() {
      return this.cartProducts
    }
  },
  persist: {
    enabled: true,
    strategies: [],
  }
});