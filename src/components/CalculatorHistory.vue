<template>
  <div id="box">
    <div class="equationList" v-for="equation in history">
      <p>
        {{equation}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalculatorHistory",
  props: {
    history: {
      type: Array
    }
  }
}
</script>

<style scoped>

#box{
  background-color: white;
}
p{
  color:black;
}
</style>