<template>
  <div class="admin">
    <div class="admin__container">
        <router-link to="/admin-item" class="admin__item">Товары</router-link>
        <router-link to="/admin-category" class="admin__item">Категории</router-link>
        <router-link to="/admin-fabricator" class="admin__item">Производители</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'webAdmin'
}
</script>

<style>
.admin {
    max-width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.admin__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
}
.admin__item {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: 500;
    border-radius: 10px;
    width: 300px;
    height: 40px;
    background-color: rgba(17,85,204);
    color: white;
}
.admin__item:not(:last-child) {
    margin: 0px 30px 0px 0px;
}
</style>