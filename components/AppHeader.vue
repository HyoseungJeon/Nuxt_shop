<template>
  <div class="header" th:fragment="bodyHeader">
    <ul class="nav nav-pills pull-right">
      <li><a href="/">Home</a></li>
    </ul>
    <a href="/">
      <h3 class="text-muted">HELLO SHOP</h3>
    </a>
  </div>
</template>
  
<script>
export default {}
</script>
  
<style scoped>
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}

.logo {
  font-weight: 900;
}

.logo:visited {
  color: inherit;
}
</style>