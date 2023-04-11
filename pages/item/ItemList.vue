<template>
    <div class="container">
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>가격</th>
                        <th>재고수량</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr 
                        v-for="(item, i) in itemList"
                        :key="i">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.stockQuantity }}</td>
                        <td>
                            <a 
                                class="btn btn-primary"
                                role="button"
                                @click="clickModifyBtn(item)">수정</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div> <!-- /container -->
</template>

<script>
import { getItemList } from '@/api/order'
export default {
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        let itemList = []

        await getItemList().then(data => {
            itemList = data
        })

        return {
            itemList
        }
    },
    methods: {
        clickModifyBtn({ id }) {
            this.$router.push(`/item/itemModify/${id}`)
        }
    }
}
</script>

<style>

</style>