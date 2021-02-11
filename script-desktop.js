
//Vue für Desktop

  
const appDesktop = Vue.createApp({
  data() {
    return {
      textopen: false,
      infoTitle: '',
      textboxInfo: '',
      projects: [
        {id: 1, link:'HTML/main.html', htmlid: 'uniicon', title: 'HTML-Kurs', symbol: 'uni.png'},
        {id: 2, link: 'www/index.html', htmlid: 'dndicon', title: 'dnd-app', symbol: 'dndsymbol.png'},
        {id: 3, link:'HTML/main.html', htmlid: 'uniicon', title: 'HTML-Kurs', symbol: 'uni.png'},
        {id: 4, link: 'www/index.html', htmlid: 'dndicon', title: 'dnd-app', symbol: 'dndsymbol.png'},
        {id: 5, link:'HTML/main.html', htmlid: 'uniicon', title: 'HTML-Kurs', symbol: 'uni.png'},
        {id: 6, link: 'www/index.html', htmlid: 'dndicon', title: 'dnd-app', symbol: 'dndsymbol.png'},
        {id: 7, link:'HTML/main.html', htmlid: 'uniicon', title: 'HTML-Kurs', symbol: 'uni.png'},
        {id: 8, link: 'www/index.html', htmlid: 'dndicon', title: 'dnd-app', symbol: 'dndsymbol.png'}
      ]
      }
  },
  methods: {
    onOpenTextBox (title, id) {
      this.textopen = true
      this.infoTitle = title
      this.textboxInfo = projectDesc[parseInt(id) - 1] 
    }
  }
})




/*  Desktop symbol component, which show my projects
  Props:
    symboltitle: Name tag under the picture, name of the project
    linksto: Link to the github-relative location of the project. Makes it clickable to be redirected
    bgimage: Location of the picture used as the symbol

  Methods:
    greet: Testing purposes
*/ 

  appDesktop.component('desktop-symbol2', {
    props: ['symboltitle', 'linksto',  'bgimage', 'projectid'],
    methods:{
      greet(event) {
        alert('hi')
      }
    },
    template: `
    <figure class="col-1 col-s-3">
          <a class = "symbolBox" :href="linksto">
            <img :src="bgimage">
            
          </a> 
          <div class="symbolNameBox">
            <figcaption>{{symboltitle}}</figcaption>
            <a :href="linksto">
              <button > Visit</button>
            </a>
            <a>  
              <button @click="$emit('turn-textbox-on', symboltitle, projectid)">Learn</button>
            </a>          
          </div>
    </figure>
  `
})



/*   Textbox component which hold additional information about each project
    Will be its own component later. By putting its template into HTML directly and setting it invisible I can get the same results in an easier fashion since I only need one of them
*/

appDesktop.component('desktop-textbox', {
  data(){
    return {
      textopen: false
    }
  },
  template: `
  <div v-if="textopen" id="textWindow">
    moin
    <img id="textWindowX" src="nocross.png">
    <div id="textWindowInner">
      moien
    </div>
  </div>
`
})

appDesktop.mount('#desktop')