<template>
  <div>
    <input type="number" id="getal1" class="tekstvakje" placeholder="Getal 1" v-model.number="inputGetal1">

    <input type="number" id="getal2" class="tekstvakje" placeholder="Getal 2" v-model.number="inputGetal2">

    <button type="button" @click="berekenen('plus')" class="button">+</button>
    <button type="button" @click="berekenen('min')" class="button">-</button>
    <button type="button" @click="berekenen('keer')" class="button">*</button>

    <p>

      {{ messages }}

    </p>
  <automatisch-rekenen></automatisch-rekenen>
  </div>

</template>

<script>
import AutomatischRekenen from "@/components/AutomatischRekenen";
export default {
  name: "reken",
  components: {AutomatischRekenen},
  data: () => {
    return {
      inputGetal1: undefined,
      inputGetal2: undefined,
      messages: 0,

    }
  },
  methods:{
    berekenen(operator){
      let getal1 = parseInt(this.inputGetal1)
      let getal2 = parseInt(this.inputGetal2)


      switch(operator){
        case 'plus':
          this.messages = getal1 + getal2
              break;
          case 'min':
            this.messages = getal1 - getal2
              break;
            case 'keer':
              this.messages = getal1 * getal2
              break;
      }



    }

  }
}
</script>

<style scoped>
.tekstvakje {
  float: bottom;
  width: 150px;
  right: 625px;
}

.button {

  width: 160px;
}
</style>