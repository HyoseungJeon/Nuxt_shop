<template>
    <div class="container">
        <div th:replace="fragments/bodyHeader :: bodyHeader" />
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>이름</th>
                        <th>도시</th>
                        <th>주소</th>
                        <th>우편번호</th>
                    </tr>
                </thead>
                <tbody>
                    <tr 
                        v-for="(member, i) in memberList"
                        :key="i">
                        <td>{{ member.id }}</td>
                        <td>{{ member.name }}</td>
                        <td>{{ member.address.city }}</td>
                        <td>{{ member.address.street }}</td>
                        <td>{{ member.address.zipcode }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div th:replace="fragments/footer :: footer" />
    </div> <!-- /container -->
</template>

<script>
import { getMemberList } from '@/api'
export default {
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        let memberList = []

        await getMemberList().then(response => {
            memberList = response.data
        })

        return {
            memberList
        }
    },
    methods: {
    }
}
</script>

<style>

</style>