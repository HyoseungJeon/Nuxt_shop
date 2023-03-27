<template>
    <div class="container">
        <div t/>
        <div class="form-group">
                <label>상품명</label>
                <input
                    v-model="name"
                    type="text" class="form-control" placeholder="이름을 입력하세요"
                >
            </div>
            <div class="form-group">
                <label>가격</label>
                <input
                    v-model="price" 
                    type="number" class="form-control" placeholder="가격을 입력하세요"
                >
            </div>
            <div class="form-group">
                <label>수량</label>
                <input
                    v-model="stockQuantity" 
                    type="number" class="form-control" placeholder="수량을 입력하세요"
                >
            </div>
            <div class="form-group">
                <label>저자</label>
                <input
                    v-model="author"
                    type="text" class="form-control" placeholder="저자를 입력하세요"
                >
            </div>
            <div class="form-group">
                <label>ISBN</label>
                <input
                    v-model="isbn"
                    type="text" class="form-control" placeholder="ISBN을 입력하세요"
                >
            </div>
            <button 
                type="submit" 
                class="btn btn-primary"
                @click="clickSubmitBtn"
                >Submit
            </button>
        <br />
        <div th:replace="fragments/footer :: footer" />
    </div> <!-- /container -->
</template>

<script>
import { registerItem } from '@/api'
export default {
    data() {
        return {
            name: '',
            price: 0,
            stockQuantity: 0,
            author: '',
            isbn: ''
        }
    },
    methods: {
        async clickSubmitBtn() {
            const item = {
                name: this.name,
                price: this.price,
                stockQuantity: this.stockQuantity,
                author: this.author,
                isbn: this.isbn
            }
            await registerItem(item)
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>