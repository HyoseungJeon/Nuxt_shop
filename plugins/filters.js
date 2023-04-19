import Vue from 'vue'

Vue.filter('yyyyMMdd', val => {
    if (typeof val !== 'string' | !val | val === '') return '-'

    const date = new Date(val)

    return `${date.toISOString().substr(0,10)} ${date.toISOString().substr(11,8)}`
})

Vue.filter('number', val => {
    if (!(typeof val === 'number' | typeof val === 'string') | !val | val === '') return '-'
    const regexp = /\B(?=(\d{3})+(?!\d))/g

    return val.toString().replace(regexp, ',')
})