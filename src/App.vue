<template>
  <nav>
    <router-link to="/">Calculator</router-link> |
    <router-link to="/feedback">Feedback</router-link>
  </nav>
  <router-view/>
</template>

<style>

.spacing {
  background-size: 10px;
}

header {
  line-height: 1.5;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
