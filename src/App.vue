<template>
  <div id="app">
    <p>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view></router-view>
    <!--<h1>Hello World</h1>-->
    <!--<Item></Item>-->
    <!--<-->
  </div>
</template>

<script>
//  import Navbar from './components/Navbar';
//  import Hello from './components/Hello'
// import Item from './views/Item';

export default {
  name: 'app',
  // components: { Item },
//    components: { Navbar, Hello },
};
</script>
