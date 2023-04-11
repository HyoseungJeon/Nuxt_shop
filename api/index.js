import axios from 'axios'
import { userStore } from '@/store/user'

let pendingRequestNum = 0

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        userId: 's1441'
    }
})

instance.interceptors.request.use(
    (config) => {
        pendingRequestNum++

        // store userId get
        // instance.headers.userId = store.getters.userId
        instance.headers.userId = userStore.userId || ''

        // spinner start
        
        return config
    },
    (error) => {
        console.log(`Request pending error, error : ${error}`)
        pendingRequestNum--
        return Promise.reject(error)
    }
)

const statusProcess = {
    '400': function() {
        window.alert('400 status, plz check your request')
        return Promise.reject(new Error('Bad Request'))
    }, 
    '401': () => {
        window.alert('401 status, plz check your auth')
        return Promise.reject(new Error('Unauthorized'))
    }, 
    '409': function(message) {
        window.alert(message)
        return Promise.reject(new Error('Conflict'))
    },
    '422': (message) => {
        window.alert(message)
        return Promise.reject(new Error('Unprocessable'))
    }
}

instance.interceptors.response.use(
    (response) => {
        pendingRequestNum--
        const data = response.data

        if(pendingRequestNum === 0) {
            // spinner stop
        }

        if(!data) return Promise.reject(new Error(`No Data`))

        return data
    },
    (error) => {
        pendingRequestNum--

        if(pendingRequestNum === 0) {
            // spinner stop
        }

        const { status, data } = error.response
        // const errUrl = error.config.url

        return statusProcess[status]?.(data.message) ?? Promise.reject(new Error(error))
    }
)

export default instance