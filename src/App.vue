<template>
<div>导航栏 | <router-link to="/">liu1</router-link>
    | <router-link to="/xxx">liu2</router-link>
    <div>
        <hr />
        <router-view />
</template>

<script>
export default {
    name: "App",

};
</script>
