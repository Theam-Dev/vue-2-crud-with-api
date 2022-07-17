<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <a class="navbar-brand" href="#">Vue Js Crud</a>
      <ul class="navbar-nav">
         <router-link :to="{name: 'post_index'}" class="nav-link"><i class="fa fa-plus-circle"></i><span>Post</span></router-link>
      </ul>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
