<template>
  <div class="cameras">
    <h3>Screens</h3>
    <ol>
      <li><h2>View 1</h2></li>
      <li><h2>View 2</h2></li>
      <li><h2>View 3</h2></li>
    </ol>
    <ol>
      <li>Lane 1, Camera</li>
      <li>Lane 2, Camera</li>
      <li>Lane 3, Timing</li>
    </ol>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-weight: normal;
  border-style: dashed;
  border-width: 2px;
  width: 100%;
  border-radius: 25px;
  color: #42b983;
  padding-top: 90px;
  padding-bottom: 90px;    
}

h3 {
  padding-top: 80px;
  color: #2e815b;
  margin: 0px;
}

ol {
  list-style-type: none;
  padding: 0  ;
}

li {
  display: inline-block;
  width: 30%;
  margin: 0 10px;
}

</style>
