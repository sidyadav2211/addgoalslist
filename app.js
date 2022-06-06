const app = Vue.createApp({
    data() {
      return { 
        enterValue:'',
        goalslist: [],
        show: true,
     };
    },
  
    methods:{
      addgoals(){
        this.goalslist.push(this.enterValue);
        this.enterValue = '';
      },
      removegoal(idx){
        this.goalslist.splice(idx,1)
      },
      toggleList(){
        this.show = !this.show;
    }
    },
    
  
  });
  
  app.mount('#assignment');