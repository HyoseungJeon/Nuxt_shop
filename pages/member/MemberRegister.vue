<template>
    <div class="container">
        <div class="form-group">
                <label th:for="name">이름</label>
                <input
                    v-model="name"
                    type="text" class="form-control" placeholder="이름을 입력하세요" th:class="${#fields.hasErrors('name')}? 'form-control 
   fieldError' : 'form-control'">
            </div>
            <div class="form-group">
                <label th:for="city">도시</label>
                <input v-model="city" type="text" class="form-control" placeholder="도시를 입력하세요">
            </div>
            <div class="form-group">
                <label th:for="street">거리</label>
                <input 
                    v-model="street"
                    type="text" class="form-control" placeholder="거리를 입력하세요">
            </div>
            <div class="form-group">
                <label th:for="zipcode">우편번호</label>
                <input 
                    v-model="zipcode"    
                    type="text" class="form-control" placeholder="우편번호를 입력하세요">
            </div>
            <button 
                type="submit" 
                class="btn btn-primary"
                @click="clickSubmitBtn">Submit</button>
        <br />
    </div> <!-- /container -->
</template>

<script>
import { registerMember } from '@/api/order'
export default {
    data() {
        return {
            name: '',
            city: '',
            street: '',
            zipcode: ''
        }
    },
    methods: {
        async clickSubmitBtn() {
            const member = {
                name: this.name,
                city: this.city,
                street: this.street,
                zipcode: this.zipcode
            }
            await registerMember(member)
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>