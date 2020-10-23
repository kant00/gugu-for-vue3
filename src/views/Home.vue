<template>
<div>
    <div class="topnav">
        <div class="logo"></div>
        <div class="menu"></div>
    </div>
    <div class="banner">
        <h1>咕咕UI</h1>
        <h2>一个厉害的 UI 框架</h2>
        <p class="actions">
            <a href="">Github</a>
            <a href="">开始</a>
        </p>
    </div>
</div>
</template>

<style lang="scss" scoped>
.topnar {
    border: 1px solid red;
}

.topnav {
    background: pink;
    display: flex;
    padding: 16px;

    >.logo {
        max-width: 6em;
        margin-right: auto;
    }

    >.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
        }
    }
}
</style>
