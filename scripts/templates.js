
Vue.component('tableau-presentation', {
    props: ['cheval'],
    template: `<div class="main-tableau-ligne">
                    <div class="main-tableau-ligne-cellule main-tableau-ligne-cellule-nom">{{ cheval.nom }} </div> &nbsp
                    <div class="main-tableau-ligne-cellule main-tableau-ligne-cellule-origine">{{ cheval.origine }} </div> &nbsp
                    <div class="main-tableau-ligne-cellule main-tableau-ligne-cellule-taille">{{ cheval.taille }} </div> &nbsp
                    <div class="main-tableau-ligne-cellule main-tableau-ligne-cellule-masse">{{ cheval.masse }}</div>
                    </div>`
  });

Vue.component('details-presentation', {
    props: ['cheval'],
    template : `
        <div class="main-details">
            <div class="main-details-row"> Nom de la race : {{ cheval.nom }}</div>
            <div class="main-details-row"> Origine géographique : {{ cheval.origine }}</div>
            <div class="main-details-row"> Taille moyenne : {{ cheval.taille }} </div>
            <div class="main-details-row"> Masse moyenne : {{ cheval.masse }} </div>
            <div class="main-details-row-description"> {{cheval.description}} </div>
            <a class="main-details-wiki" v-bind:href=cheval.lien> page wikipédia </a>
        </div>
    `
})

