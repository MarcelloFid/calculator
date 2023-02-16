<template>
  <div id="grid-container">
    <div class="display"> {{display}} </div>

    <div class = "calc-row" v-for="row in calculatorButtons" >
      <button class = "calc-button" v-for="symbol in row" :key = "symbol"
              v-bind:style="style(symbol)" @click="buttonClick(symbol)">
        {{symbol}}
      </button>
    </div>
  </div>
</template>


<script>
export default {
  name: "Calculator",

  data() {
    return {
      display: "0",
      equationOne: "0",
      equationTwo: "0",
      operator: "",
      equalsPressed: true,
      calculatorButtons: [['DEL', 'AC', '%'],
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0','.', '=', '+']]
    }
  },

  methods: {
    style(symbol) {
      if (symbol === "="){
        return {
          backgroundColor: 'lightBlue'
        }
      }
      else if (!isNaN(symbol) || symbol === ".") {
        return {
          backgroundColor: 'white'
        }
      } else {
        return {
          backgroundColor: 'red'
        }
      }
    },

    buttonClick(symbol) {
      if(isNaN(symbol)){
        switch(symbol) {
          case "DEL":
            this.display = this.display.slice(0, -1);
            if (this.display === "") this.display = "0";
            break;
          case "AC":
            this.clearAllFields()
            break;
          case ".":
            this.display = this.display.concat(".");
            break;
          case "=":
            if(this.operator === "") {
              this.operator = "+";
            } if (!this.equalsPressed) {
            this.equationTwo = this.display;
          }
            let equation = this.equationOne + this.operator + this.equationTwo + ""
            let shipment = (this.equationOne + this.operator + this.equationTwo + " = " + eval(equation));
            this.display = eval(equation);
            this.$emit("addEquationToHistory", shipment);
            this.equationOne = this.display;
            this.equalsPressed = true;
            break;
          default:
            this.operator = symbol;
            this.equationOne = this.display;
            this.equationTwo = "0";
            this.display = this.equationTwo;
            break;
        }
      } else {
        if (this.equalsPressed || this.display === "0") {
          this.display = symbol;
          this.equalsPressed = false;
        } else {
          this.display = this.display.concat(symbol);
        }
      }
    },

    clearAllFields() {
      this.display = "0";
      this.operator = "";
    }
  }
}
</script>

<style scoped>

#grid-container{
  display: grid;
  color: seashell;
  grid-template-columns: 1fr;
}

.calc-button{
  padding: 15px 20px;
  background-size: 20px 20px;
  text-align: center;
}

.calc-row{
  width: max(60%, 300px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.display{
  background-color: white;
  width: min(200px, 70%);
  border-radius: 25px;
  color: black;
  padding-left: 10px;
}

</style>