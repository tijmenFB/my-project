<template>
  <div>
    <div class="niet-done">
      <HelloWorld msg="To Do List"/>
    </div>

    <div class="gedaan">
      <HelloWorld msg="Done"/>
    </div>
  </div>
</template>

<script>

import HelloWorld from "@/components/HelloWorld";


export default {
  name: "lijst",
  components: {
    HelloWorld
  }

}
</script>

<style scoped>

</style>