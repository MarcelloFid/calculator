<template>
  <div class="container">
    <Calculator @addEquationToHistory="sendEquationToHistory"/>
    <div class="spacing"></div>
    <CalculatorHistory :history="equationsArray"/>
  </div>
</template>

<script>
import Calculator from '../components/Calculator.vue';
import CalculatorHistory from '../components/CalculatorHistory.vue';
export default{
  name: "CalculatorView",
  components: {
    CalculatorHistory,
    Calculator
  },

  data() {
    return{
      equationsArray: []
    }
  },

  methods: {
    sendEquationToHistory(equation) {
      this.equationsArray.push(equation)
    }
  }
}
</script>


<style scoped>

</style>