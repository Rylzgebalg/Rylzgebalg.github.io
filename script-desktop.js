
//Vue für Desktop

  
const appDesktop = Vue.createApp({
  data() {
    return {
      counter: 6,
      source: 'arrow.png',
      projects: [
        {id: 1, link:'HTML/main.html', htmlid: 'uniicon', title: 'HTML-Kurs WS 18/19', symbol: 'uni.jpg'},
        {id: 2, link: 'www/index.html', htmlid: 'dndicon', title: 'dnd-app', symbol: 'dndsymbol.png'}
      ]
      }
  }
})

appDesktop.component('desktop-symbol', {
  props: ['symboltitle', 'linksto', 'idtemp', 'bgimage'],
  template: `
  <figure class="figuree">
    <a :href="linksto">
      <div :id="idtemp" class="desksym">
        <img class ="arrow" src="arrow.png"> 
      </div>
    </a>
    <figcaption>{{symboltitle}}</figcaption>
  </figure>
`
  })


appDesktop.mount('#desktop')
