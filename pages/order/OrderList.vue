<template>
    <div
        class="container"
        @keyup.enter="clickSearchBtn">
        <div>
            <div 
                class="form-inline">
                <div class="form-group mb-2">
                    <input 
                            v-model="orderSearch.memberName" 
                            type="text"  
                            class="form-control" 
                            placeholder="회원명" 
                    />
                </div>
                    <div class="form-group mx-sm-1 mb-2">
                        <select v-model="orderSearch.orderStatus" class="form-control">
                            <option value="">주문상태</option>
                            <option value="ORDER">주문</option>
                            <option value="CANCEL">취소</option>
                        </select>
                    </div>
                <button type="submit" class="btn btn-primary mb-2" @click="clickSearchBtn">검색</button>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>회원명</th>
                        <th>대표상품 이름</th>
                        <th>대표상품 주문가격</th>
                        <th>대표상품 주문수량</th>
                        <th>상태</th>
                        <th>일시</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(order, index) in orderList"
                        :key="index">
                        <td th:text="${item.id}">{{ order.id }}</td>
                        <td th:text="${item.member.name}">{{ order.memberName }}</td>
                        <td th:text="${item.orderItems[0].item.name}">{{ order.itemName }}</td>
                        <td th:text="${item.orderItems[0].orderPrice}">{{ order.orderPrice }}</td>
                        <td th:text="${item.orderItems[0].count}">{{ order.count }}</td>
                        <td th:text="${item.status}">{{ order.status }}</td>
                        <td th:text="${item.orderDate}">{{ order.orderDate | yyyyMMdd }}</td>
                        <td>
                            <a
                                v-show="order.status === 'ORDER'"
                                class="btn btn-danger"
                                @click="clickCancelBtn(index)"
                            >
                                CANCEL
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div> <!-- /container -->
</template>

<script>
import { getOrderList } from '@/api/order'
import { Order } from '@/model/order'
export default {
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        const orderList = []
        const orderSearch = {
            memberName: '',
            orderStatus: ''
        }
        
        await getOrderList().then(data => {
            data.forEach(order => {
                const tempOrder = new Order()
                Object.assign(tempOrder, order)
                orderList.push(tempOrder)
            })
        })

        return {
            orderList,
            orderSearch
        }
    },
    data() {
        return {}
    },
    methods: {
        async clickCancelBtn(index) {
            try {
                // cant find cancelOrder function, why? 
                await this.orderList[index].cancelOrder()

                this.orderList = []
                await getOrderList(this.orderSearch).then(data => {
                    data.forEach(order => {
                        const tempOrder = new Order()
                        Object.assign(tempOrder, order)
                        this.orderList.push(tempOrder)
                    })
                })
            } catch (error) {
                console.log(error)
                window.alert('취소 중 오류가 발생하였습니다. 잠시후 재시도 해주세요.')
            }
        },
        async clickSearchBtn() {
            this.orderList = []
            await getOrderList(this.orderSearch).then(data => {
                data.forEach(order => {
                    const tempOrder = new Order()
                    Object.assign(tempOrder, order)
                    this.orderList.push(tempOrder)
                })
            })
        }
    }
}
</script>

<style>

</style>