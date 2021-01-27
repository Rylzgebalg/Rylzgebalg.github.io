//Vue für die Taskleiste  
const appTaskbar = Vue.createApp({
    data() {
      return {
        activeColor: 'red',
        timer: ''
        }
    },
    created() {
      var timeNow = new Date()
      var hour = timeNow.getHours() > 9 ? timeNow.getHours().toString() : "0"+ timeNow.getHours().toString()  
      var minute = timeNow.getMinutes() > 9 ? timeNow.getMinutes().toString() : "0"+ timeNow.getMinutes().toString()  

      this.timer = hour+":"+minute
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
})


appTaskbar.component('taskbar-clock', {
props: ['time'],
template: '<span>{{time}}</span>'
})

appTaskbar.mount('#taskbar')