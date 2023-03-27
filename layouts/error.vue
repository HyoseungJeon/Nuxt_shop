<template>
    <div class="container">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <h2>
        에러 페이지 입니다.
      </h2>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </template>
  
  <script>
  export default {
    layout: 'error', // you can set a custom layout for the error page
    props: ['error']
  }
  </script>