<template>
  <div id="app">
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" :router="true">
      <router-link to="/">
        <el-menu-item index="1">Foo</el-menu-item>
      </router-link>
      <router-link to="/table">
        <el-menu-item index="2">Bar</el-menu-item>
      </router-link>
    </el-menu>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>