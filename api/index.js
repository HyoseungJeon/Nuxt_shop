import axios from 'axios'
// import { userStore } from '@/store/user'

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
        // instance.headers.userId = userStore.userId || ''

        // spinner start

        console.log(config)
        
        return config
    },
    (error) => {
        console.log(`Request pending error, error : ${error}`)
        pendingRequestNum--
        return Promise.reject(error)
    }
)

const statusProcess = {
    400: function(message) {
        window.alert(message)
    }, 
    401: (message) => {
        window.alert(message)
    }, 
    404: (message) => {
        window.alert(message)
        throw new Error(message)
    },
    409: function(message) {
        window.alert(message)
    },
    422: (message) => {
        window.alert(message)
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
        statusProcess[status]?.(data.message)
    }
)

export default instance