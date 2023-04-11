import { cancelOrder } from '@/api/order'

export class Order {
    constructor({ id, memberName, itemName, orderPrice, count, status, orderDate }) {
        this.id = id || 0       // 주문ID
        this.memberName = memberName || ''    // 고객명
        this.itemName = itemName || ''      // 상품명
        this.orderPrice = orderPrice || 0     // 총 주문 금액
        this.count = count || 0          // 주문상품 개수
        this.status = status || ''        // 주문상태
        this.orderDate = orderDate || ''     // 주문일자
    }

    /* 
        class 내 함수 선언 시 method가 각 객채내에 중복으로 선언 X
        js 내에서 전역변수 식으로 선언하여 사용됨
        -> 리소스 낭비 X
    */

    /**
     * 주문을 취소한다.
     */
    async cancelOrder() {
        if (this.id === 0 || !this.id || typeof this.id !== 'number') {
            console.log(`Now order class id is empty`)
            throw new Error(`Empty key value error`)
        }
        try {
            await cancelOrder(this.id)
        } catch (error) {
            console.log(`cancelOrder api failed. id : ${this.id}, error : ${error}`)
            throw error
        }
    }
}