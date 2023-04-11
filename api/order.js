import instance from './index.js'

export function getMember(id) {
    return instance.get(`members/${id}`)
}

export function getMemberList() {
    return instance.get(`members`)
}

export function registerMember(member) {
    return instance.post(`members`,
        member
    )
}

export function registerItem(item) {
    return instance.post(`items`, item)
}

export function getItemList() {
    return instance.get(`items`)
}

export function getItemDetail(itemId) {
    return instance.get(`items/${itemId}`)
}

export function modifyItem(itemId, item) {
    return instance.patch(`items/${itemId}`, item)
}

export function order(memberId, itemId, count) {
    return instance.post(`orders`, {
        memberId,
        itemId,
        count
    })
}

export function getOrderList(params) {
    return instance.get(`orders`, 
        {
            params
        }
    )
}

export function cancelOrder(orderId) {
    return instance.post(`orders/${orderId}/cancel`)
}