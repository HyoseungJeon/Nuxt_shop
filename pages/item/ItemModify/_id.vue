<template>
    <div class="container">
        <form th:object="${form}" method="post">
            <!-- id -->
            <input type="hidden" th:field="*{id}" />
            <div class="form-group">
                <label>상품명</label>
                <input
                    v-model="item.name"
                    type="text" th:field="*{name}" class="form-control" placeholder="이름을 입력하세요" />
            </div>
            <div class="form-group">
                <label>가격</label>
                <input
                    v-model="item.price" 
                    type="number" class="form-control" placeholder="가격을 입력하세요" />
            </div>
            <div class="form-group">
                <label>수량</label>
                <input 
                    v-model="item.stockQuantity"
                    type="number" class="form-control" placeholder="수량을 입력하세요" />
            </div>
            <div class="form-group">
                <label>저자</label>
                <input
                    v-model="item.author"
                    type="text" class="form-control" placeholder="저자를 입력하세요" />
            </div>
            <div class="form-group">
                <label th:for="isbn">ISBN</label>
                <input
                    v-model="item.isbn"
                    type="text" class="form-control" placeholder="ISBN을 입력하세요" />
            </div>
            <button
                type="submit" class="btn btn-primary"
                @click="clickModifyBtn">Submit</button>
        </form>
    </div> <!-- /container -->
</template>

<script>
import { getItemDetail, modifyItem } from '@/api/order'
export default {
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        const itemId = params.id
        let item = {}
        await getItemDetail(itemId).then(data => { item = data })
        return {
            itemId,
            item
        }
    },
    methods: {
        async clickModifyBtn() {
            await modifyItem(this.itemId, this.item)
            this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>