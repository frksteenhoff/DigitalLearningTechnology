Vue.component('friend-component', {
  props: ['friend'],
  filters: {
    fullName(value) {
      return `${value.first} ${value.last}`;
    }
  },
  template : `
    <div> 
        <h4>Name: {{friend | fullName}}</h4>
        <h5>Age: {{friend.age}}</h5>
    </div>
    `
});

  const app = new Vue({
  el: "#app",
  data: {
    friends: [ 
      {
        first: "Henriette",
        last: "Steenhoff",
        age: 26
      },
      {
        first: "Niels",
        last: "Beuschau",
        age: 28
      }
    ],
  },

  mounted() {
    //fetch()
      //.then(respone => response.json())
      //.then((data) => {
        //this.friends = data;
      //})
  },
  // It is important to keep the logic out of the template 
  // Looping through friends array
  template: `
    <div>
      <friend-component v-for="item in friends" v-bind:friend="item"/>
    </div>
  `
})