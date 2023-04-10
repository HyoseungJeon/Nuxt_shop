<template>
    <div class="container">
        <form role="form" action="/order" method="post">
            <div class="form-group">
                <label for="member">주문회원</label>
                <select
                    v-model="selectedMemberId"
                    name="memberId" class="form-control"
                >
                    <option value="0">회원선택</option>
                    <option
                        v-for="(member, index) in memberList"
                        :key="index"
                        :value="member.id">
                    {{ member.name }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="item">상품명</label>
                <select
                    v-model="selectedItemId"
                    name="itemId" class="form-control"
                >
                    <option value="0">상품선택</option>
                    <option
                        v-for="(item, index) in itemList"
                        :key="index"
                        :value="item.id">
                    {{ item.name }}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="count">주문수량</label>
                <input
                    v-model="count"
                    type="number" name="count" class="form-control" placeholder="주문 수량을 입력하세요"
                >
            </div>
            <button
                type="submit" class="btn btn-primary"
                @click="clickOrderBtn"
            >Submit</button>
        </form>
        <br />
    </div> <!-- /container -->
</template>

<script>
import { getItemList, getMemberList, order } from '@/api'

export default {
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        let itemList = []
        let memberList = []

        await getItemList().then(response => {
            itemList = response.data
        })
        await getMemberList().then(response => {
            memberList = response.data
        })

        return {
            itemList,
            memberList
        }
    },
    data() {
        return {
            selectedItemId: 0,
            selectedMemberId: 0,
            count: 0
        }
    },
    methods: {
        async clickOrderBtn() {
            await order(this.selectedMemberId, this.selectedItemId, this.count)
            this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>