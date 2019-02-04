
const listChevaux = [
  {id: 0, lien:'https://fr.wikipedia.org/wiki/Akhal-Teke', nom: 'Akhal-Teke' , origine:'Turkménistan (Asie centrale)', taille:'160cm / 156cm', masse:'500kg', description : `
    Il est élevé aussi dans l'oasis d'Achgabat dans le désert du Turkménistan, une région au nord de l'Iran, par la tribu des Tekkés. Il est sélectionné sur ses aptitudes
    à la course. Bien que les Turkmènes l'aient sûrement un jour croisé avec des chevaux arabes et persans, l'Akhal-Teke a été préservé des influences étrangères grâce
    à l'isolement de sa terre natale. Dans le désert, les journées atrocement chaudes sont suivies de nuits très froides. La race Akhal-Teke est devenue mince et solide,
     adaptée à ces conditions très rudes. Cette conformation est compensée par des allures rapides, une très grande endurance et une robustesse illimitée due en grande
      partie au style de vie rigoureux qui lui été imposé pendant plusieurs siècles.
  `},
  {id: 1, lien:'https://fr.wikipedia.org/wiki/Pure_race_espagnole',nom: 'Pure race espagnole' , origine:'Andalousie (Espagne)', taille:'152cm / 150cm', masse:'450kg', description : `
  Le Pure race espagnole et le Lusitanien partagent la même origine génétique. La présence de chevaux dans la péninsule Ibérique est attestée dès la préhistoire, entre 
  autres par des peintures rupestres dans la grotte de La Pileta sur le territoire de Malaga. Pour l'historien portugais Ruy d'Andrade, des tribus espagnoles auraient
   utilisé les chevaux dès le IVe millénaire avant J-C. Une peinture rupestre découverte en Espagne et datant 15 000 ans avant notre ère présente ce qui semble être un 
   harnais peint sur un cheval. Cette découverte a été citée comme preuve de l’utilisation du cheval dans la péninsule ibérique bien avant la période communément admise, 
   mais cette hypothèse n'est pas reprise par la communauté scientifique. L’artiste aurait seulement voulu accentuer la démarcation de la bouche et les lignes latérales
    décrivant le côté du crane. Les recherches sur l'ADN ancien ont révélé des traces de domestication du cheval remontant à la fin du Néolithique et au début de l'âge
     du bronze sur la péninsule ibérique. 
  `},
  {id: 2, lien:'https://fr.wikipedia.org/wiki/Anglo-arabe',nom: 'Anglo-arabe' , origine:'Angleterre, Russie, France', taille:'race trop hétérogène', masse:'entre 450kg et 550kg', description : `
  L'hippologue et directeur de haras Eugène Gayot a longtemps été considéré comme l'inventeur de la raceet du nom d'« Anglo-arabe ». En 1850, il écrit que le
   haras de Pompadour a créé de toutes pièces le « pur-sang Anglo-arabe », qui s'appellera plus tard sans doute « pur-sang français », défini comme une race particulière,
    essentiellement répertoriée dans le Midi et le Limousin. S'il généralise le nom « d’Anglo-arabe », notamment dans ses ouvrages, et le rend générique, ce nom est employé
    antérieurement dans la région. Il figure notamment dans un bulletin en 1846. L'emploi du nom d'Anglo-arabe reste occasionnel dans les années 1850, puis est officialisé
    en 18611. La terminologie « pur-sang français » est abandonnée. De nos jours, l'Anglo-arabe est souvent appelé familièrement « l'anglo ». La race Anglo-arabe, parfois
    nommée à l'international french anglo-arab, est considérée comme d'origine française, mais des croisements entre chevaux Pur-sangs et Arabes ont été et sont toujours
    pratiqués dans bon nombre de pays, sous d'autres noms. L'Hispano-arabe (en Espagne), le cheval de Pleven (en Bulgarie) et le Trakehner allemand sont très proches
    de l'Anglo-arabe, dont ils partagent les qualités. En Sardaigne, l'Anglo-arabe sarde a été créé par le même type de croisements, tout comme en Russie le cheval
    Orlov-Rostopchin. 
  `},
  {id: 3, lien:'https://fr.wikipedia.org/wiki/Appaloosa',nom: 'Appaloosa' , origine:'nord-ouest des États-Unis (rivière Palouse)', taille:'145cm à 165cm', masse:'entre 400kg et 450kg', description : `
  Le cheval ayant disparu du continent américain depuis la fin de la dernière période glaciaire, les Européens amènent des chevaux dans les colonies. Dès la fin du XVIe 
  siècle les Apaches et Navajos ont parfaitement intégré le cheval. Leur goût pour ce qui est voyant les amène à préférer les animaux de couleurs. À la fin du XVIIIe 
  siècle, les chevaux tachetés ne sont plus à la mode en Europe, les éleveurs se débarrassent de ces chevaux qu'ils vendent vers le Nouveau Monde. Leur type est très proche
   de l'Appaloosa originel des Nez-Percés. Miller décrit en 1861 les caractéristiques de ces chevaux des Nez-Percés et les comparent au type andalou avec la finesse, les 
   allures et le profil facial arqué typique du « fameux cheval d'Espagne » du temps de Charles Quint. Autre caractéristique de ces chevaux de l'Oregon, une crinière et 
   une queue peu abondantes. On ne sait pas si ce trait génétique est apparu lors de croisements ou alors s'il est issu des chevaux dont les éleveurs et les Espagnols 
   ont voulu se débarrasser en y voyant un signe de faiblesse. 
  `},
  {id: 4, lien:'https://fr.wikipedia.org/wiki/Arabe_(cheval)',nom: 'Arabe' , origine:'Bédouins (Moyen-Orient)', taille:'140cm à 160cm', masse:'450kg', description : `
  Le cheval arabe et le pur-sang arabe (PSA), lignée pure élevée principalement par les Bédouins, forment une race chevaline de selle originaire du Moyen-Orient. Avec 
  sa tête très typée et son port de queue relevé, l'arabe fait partie des races les plus facilement identifiables. Il est souvent cité comme le « plus beau cheval du monde ».
   C'est aussi l'une des races les plus anciennes qui soient, des fouilles archéologiques ayant prouvé que des chevaux caspiens, très proches physiquement de l'arabe, 
   vivaient en Mésopotamie dès la plus haute antiquité. Au cours de l'histoire, les chevaux arabes ont quitté leur Moyen-Orient natal pour gagner d'autres régions à l'occasion
    de guerres ou d'échanges commerciaux. Ils sont utilisés en croisement pour apporter de la vitesse, de l'endurance, de l'élégance et des os solides aux autres races de 
    chevaux. On trouve désormais des arabes dans la plupart des élevages modernes de chevaux de selle. 
  `},
  {id: 5, lien:'https://fr.wikipedia.org/wiki/Breton_(cheval)',nom: 'Breton' , origine:'Bretagne', taille:'155cm à 163cm', masse:'750kg', description : `
  Le Breton est une race de chevaux de trait originaire de Bretagne. Issu de robustes petits chevaux locaux, son élevage s'organise dès la fin du XVIIe siècle sous l'influence
   de très nombreux croisements. Apprécié des militaires comme des paysans pour son amble confortable, sa capacité de traction et sa polyvalence, le Breton connaît un grand 
   succès à l'arrivée du XXe siècle. Il quitte par trains et bateaux entiers sa Bretagne natale depuis Landivisiau. Il sert d'améliorateur pour d'autres races de chevaux de
    trait. En 1912, le registre d'élevage de la race est officiellement créé pour rassembler ses deux types, le trait et le postier, avant d'être fermé aux apports de sang
     étrangers en 1951. S'il garde ses fonctions de cheval de trait plus longtemps que d'autres races françaises, les années 1970 marquent une forte réduction de l'élevage.
      La réorientation de celui-ci vers la production de viande à destination de l'Italie survient vers 1980. Avec l'essor de l'équitation de loisir dans les années 1990, 
      le Breton retrouve ses anciennes fonctions de cheval d'attelage. 
  `}
];


var app = new Vue({
    el: '#app',
    data: {
      textePresentation: `Cette page a pour unique objectif de présenter un petit site web fait avec vue.js.
      Ce framework est légé et facilement ajoutable à un projet déjà commencé. <br>
      Les lignes présentent dans le tableau à droite sont généré avec un template, ce qui permet de rendre le code plus modulable et réutilisable.`,
      listeChevaux: listChevaux,
      chevalSelect : {id: -1, nom: 'NR' , origine:'NR', taille:'NR', masse:'NR', description : ``},
      tableau : true
    },
    methods: {
      selectHorse: function(cheval){
        this.chevalSelect = cheval;
        this.tableau = false;
        //console.log(cheval);
      },
      retourTableau: function(){
        console.log('retour tableau');
        this.tableau = true;
      }
    }
  })