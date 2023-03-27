import Vue from 'vue'

Vue.filter('yyyyMMdd', val => {
    if (typeof val !== 'string' | !val | val === '') return '-'

    return new Date(val).toISOString().substr(0,19)
})