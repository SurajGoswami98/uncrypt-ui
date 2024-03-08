<script>
// const { RouterView } = require('vue-router')
</script>
<template>
  <header class="z-50 px-3 py-4 text-white bg-black drop-shadow-xl mb-3">
    <div class="flex w-full flex-row items-center justify-between">
      <a href="#" class="flex w-2/12 items-center text-lg uppercase font-bold">
        <img src="/images/logo.svg" alt="logo" />
        <span class="pl-2">Uncrypt</span>
      </a>
      <div class="flex w-4/12 justify-between px-3">
        <router-link to="/customer-login">Customer Login</router-link>
        <router-link to="/hacker-login">Hacker Login</router-link>
        <router-link to="#">Courses</router-link>
        <router-link to="#">Contact us</router-link>
      </div>
    </div>
  </header>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <router-view></router-view>
</template>
