
//Vue für Desktop
const Counter = {
    data() {
      return {
        counter: 6,
        source: 'arrow.png'
        }
    }
}
  
Vue.createApp(Counter).mount('#desktop')





//Vue für die Taskleiste  
const appTaskbar = Vue.createApp({
        data() {
          return {

            timer: ''
            }
        },
        created() {

            //Keeps clock up to date
            setInterval(function(){
                var timeNow = new Date()
                var hour = timeNow.getHours() > 9 ? timeNow.getHours().toString() : "0"+ timeNow.getHours().toString()  
                var minute = timeNow.getMinutes() > 9 ? timeNow.getMinutes().toString() : "0"+ timeNow.getMinutes().toString()  

                this.timer = hour+":"+minute
            }.bind(this), 1000);

        },


        methods: {

        },

        computed: {


        }
}).mount('#taskbar')


appTaskbar.component('taskbar-clock', {

})