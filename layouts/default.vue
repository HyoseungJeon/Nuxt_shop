<template>
    <div>
        <app-header />
        <Nuxt />
        <div class="footer" th:fragment="footer">
            <p>&copy; Hello Shop V2</p>
        </div>
    </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
export default {
    components: { AppHeader },

}
</script>

<style>

</style>