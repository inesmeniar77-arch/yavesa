const MONTHS_FR = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

function parseFrenchDate(str) {
  const [day, monthName, year] = str.toLowerCase().split(" ");
  const month = MONTHS_FR.indexOf(monthName);
  return new Date(parseInt(year, 10), month, parseInt(day, 10));
}

function formatFrenchDate(date, { withYear = true, capitalized = true } = {}) {
  const day = date.getDate();
  let month = MONTHS_FR[date.getMonth()];
  if (capitalized) month = month.charAt(0).toUpperCase() + month.slice(1);
  return withYear ? `${day} ${month} ${date.getFullYear()}` : `${day} ${month}`;
}

function addYears(date, years) {
  return new Date(date.getFullYear() + years, date.getMonth(), date.getDate());
}

function getAnniversary() {
  const today = new Date();
  const pastDate = new Date(today.getFullYear() - 50, today.getMonth(), today.getDate());
  return { pastDate, todayDate: today };
}

const ARTICLES = [
  {
    slug: "agatha-christie-deces",
    category: "culture",
    pastDate: "12 janvier 1976",
    title: "La romancière Agatha Christie s'éteint à 85 ans",
    chapo: "La \"reine du crime\", créatrice d'Hercule Poirot et de Miss Marple, s'est éteinte chez elle, dans l'Oxfordshire.",
    thumbLabel: "Agatha Christie",
    image: "assets/photos/agatha-christie.jpg",
    imageCredit: "Photo : Fotocollectie Anefo — CC0 (Nationaal Archief)",
    layout: "photo",
    body: [
      "Agatha Christie s'est éteinte paisiblement dans sa maison de Winterbrook, dans l'Oxfordshire, à l'âge de 85 ans. La nouvelle, annoncée ce matin, provoque une vague d'hommages dans le monde entier.",
      "En un peu plus de cinquante ans de carrière, elle aura publié soixante-six romans policiers et créé deux des détectives les plus célèbres de la littérature : le méticuleux Hercule Poirot et la redoutable Miss Marple. Sa pièce \"La Souricière\" tient l'affiche à Londres sans interruption depuis 1952.",
      "Traduite dans des dizaines de langues, elle est déjà considérée comme l'auteure de fiction la plus vendue de tous les temps — seules la Bible et les œuvres de Shakespeare font mieux qu'elle.",
      "Son existence n'aura pourtant pas été sans mystère. En décembre 1926, sa disparition soudaine pendant onze jours avait déclenché l'une des plus grandes chasses à l'homme jamais menées au Royaume-Uni, mobilisant des milliers de policiers et de volontaires. Retrouvée saine et sauve dans un hôtel du Yorkshire, sous un faux nom, elle n'en parlera plus jamais publiquement — un silence qui n'a fait qu'alimenter la légende.",
      "Mariée en secondes noces à l'archéologue Max Mallowan, elle avait puisé dans leurs fouilles au Moyen-Orient la matière de plusieurs de ses intrigues, dont \"Mort sur le Nil\". Faite Dame Commandeur de l'Empire britannique en 1971, elle restera, jusqu'à son dernier souffle, d'une discrétion presque totale sur sa vie privée."
    ],
    pullQuote: "« Le crime ne paie pas — mais il se lit, inlassablement, depuis un demi-siècle. »",
    future: {
      lead: "Ce que l'œuvre d'Agatha Christie est devenue",
      bullets: [
        "\"La Souricière\" tiendra l'affiche à Londres sans interruption jusqu'à aujourd'hui — la plus longue série théâtrale de l'histoire.",
        "Avec plus de deux milliards d'exemplaires vendus, elle demeure l'auteure de fiction la plus lue au monde.",
        "Poirot et Miss Marple continueront d'être adaptés au cinéma et à la télévision pendant des décennies, jusqu'à aujourd'hui."
      ],
      quote: "« Aucune autre écrivaine n'a autant façonné notre idée du roman policier. »"
    }
  },
  {
    slug: "borg-wimbledon-1976",
    category: "sport",
    pastDate: "3 juillet 1976",
    title: "Björn Borg remporte son premier Wimbledon",
    chapo: "À seulement 20 ans, le Suédois s'impose sur le gazon londonien et lance l'une des plus grandes success story du tennis.",
    thumbLabel: "Björn Borg",
    image: "assets/photos/bjorn-borg.jpg",
    imageCredit: "Photo : Rob Croes / Anefo — CC BY-SA 3.0 NL",
    layout: "brief",
    body: [
      "Björn Borg vient de remporter son premier titre à Wimbledon, dominant le Roumain Ilie Năstase en finale. À 20 ans, le Suédois devient l'un des plus jeunes champions du tournoi depuis le début du siècle.",
      "Sur le gazon londonien, son jeu détonne : revers à deux mains, frappes prises tôt depuis le fond du court, un sang-froid qui lui vaut déjà le surnom d'\"homme de glace\" auprès de la presse britannique.",
      "Le public, conquis, découvre un joueur d'un genre nouveau — et une ferveur, en particulier chez les jeunes spectatrices, que Wimbledon n'avait plus connue depuis longtemps.",
      "La finale elle-même aura tenu ses promesses : Borg s'impose en trois manches sèches, 6-4, 6-2, 9-7, imposant un rythme de fond de court auquel Năstase, pourtant maître incontesté de la variation, n'a jamais trouvé de parade. Le Suédois n'aura concédé qu'un seul break durant tout le match.",
      "Formé dès l'enfance à Stockholm dans un club où il tapait des heures durant contre un mur de garage, Borg incarne une nouvelle génération de joueurs scandinaves méthodiques, sortis de nulle part pour bousculer la hiérarchie du tennis mondial, jusque-là dominée par les Américains et les Australiens."
    ],
    pullQuote: "« Sur le gazon de Wimbledon, le Suédois glacial vient d'ouvrir une nouvelle ère. »",
    future: {
      lead: "Ce que Wimbledon 1976 annonçait",
      bullets: [
        "Borg enchaînera cinq titres consécutifs à Wimbledon, de 1976 à 1980 — un record pour l'ère moderne.",
        "Sa rivalité avec John McEnroe, encore inconnu en 1976, deviendra l'une des plus célèbres de l'histoire du tennis.",
        "Il se retirera du circuit dès 1983, à seulement 26 ans, laissant une partie de son record intact pendant des décennies."
      ],
      quote: "« Cinq Wimbledon d'affilée : personne ne fera mieux avant longtemps. »"
    }
  },
  {
    slug: "concorde-premier-vol",
    category: "science",
    pastDate: "19 juillet 1976",
    title: "Concorde effectue son premier vol commercial",
    chapo: "L'avion supersonique franco-britannique inaugure sa première liaison commerciale, ouvrant l'ère du transport aérien à Mach 2.",
    thumbLabel: "Concorde",
    image: "assets/photos/concorde.jpg",
    imageCredit: "Photo : Eduard Marmet — CC BY-SA 3.0",
    layout: "photo",
    body: [
      "Ce matin, l'avion supersonique franco-britannique quitte la piste pour rejoindre sa première destination commerciale, embarquant une poignée de passagers prêts à voler à plus de deux fois la vitesse du son.",
      "Fruit d'une coopération industrielle inédite entre la France et le Royaume-Uni, Concorde promet de diviser par plus de deux la durée des vols long-courriers. Son étrange nez articulé, qui s'abaisse au décollage et à l'atterrissage pour dégager la vue des pilotes, en fait déjà une silhouette reconnaissable entre toutes.",
      "Mais l'appareil divise. Son passage supersonique, générateur d'un bang retentissant, lui vaut déjà des restrictions de survol au-dessus des zones habitées. Les billets, hors de prix, réservent l'expérience à une clientèle d'affaires et de célébrités.",
      "À bord, les passagers découvrent une cabine étroite, presque exiguë comparée aux long-courriers classiques, mais un service au niveau du prix du billet : champagne, caviar et un compteur de vitesse affiché en cabine, qui affole les nouveaux venus lorsqu'il franchit Mach 2.",
      "Aux États-Unis, l'accueil est nettement plus frileux. New York refuse encore d'ouvrir l'aéroport JFK à l'appareil, sous la pression d'associations de riverains inquiètes du bruit, et Washington doit trancher dans les prochains mois entre autorisation d'atterrissage et maintien de l'interdiction."
    ],
    pullQuote: "« Voler à Mach 2 — deux fois la vitesse du son. »",
    future: {
      lead: "Ce que l'histoire retiendra de Concorde",
      bullets: [
        "Seuls 20 exemplaires seront jamais construits ; l'aventure commerciale s'arrêtera en 2003.",
        "Le crash du vol Air France 4590 en 2000 précipitera le déclin du programme.",
        "Concorde reste à ce jour le seul avion de ligne supersonique à avoir été exploité commercialement pendant près de trente ans."
      ],
      quote: "« Un exploit d'ingénierie que personne n'a encore réussi à égaler commercialement. »"
    }
  },
  {
    slug: "etat-urgence-pologne",
    category: "politique",
    pastDate: "20 juillet 1976",
    title: "L'état d'urgence est proclamé en Pologne",
    chapo: "Face aux tensions sociales grandissantes, le gouvernement polonais durcit le ton. La rue gronde.",
    thumbLabel: "Archive — Varsovie, 1976",
    layout: "brief",
    body: [
      "Il aura suffi de vingt-quatre heures pour que le gouvernement polonais fasse volte-face. La semaine dernière, l'annonce d'une hausse spectaculaire des prix alimentaires — le beurre en hausse de 33 %, la viande de 70 %, le sucre doublé — a mis les rues de Radom, d'Ursus et de Płock à feu et à sang. Dès le lendemain, Varsovie retirait sa décision.",
      "Mais le recul du gouvernement sur les prix ne s'accompagne d'aucune clémence envers les manifestants. Dans les usines, les arrestations se multiplient. Des centaines d'ouvriers auraient été rossés, certains contraints de traverser en courant des haies de policiers matraque à la main, avant d'être jugés en procès expéditifs.",
      "Dans les ateliers, on chuchote plus qu'on ne parle. La presse étrangère, censurée, peine à obtenir des informations fiables sur l'ampleur réelle de la répression qui s'abat sur les meneurs des grèves de juin.",
      "Selon plusieurs témoignages recueillis clandestinement, des ouvriers licenciés se retrouvent aussi privés de leurs droits sociaux, une double peine qui pousse certaines familles à la clandestinité. Des avocats commencent, discrètement, à organiser une défense collective des inculpés.",
      "La Pologne n'est pas un cas isolé : dans plusieurs pays du bloc de l'Est, la même équation impossible — subventionner indéfiniment les prix alimentaires ou risquer l'embrasement social — mine des économies déjà à bout de souffle."
    ],
    pullQuote: "« Les usines tournent, mais la peur s'est installée dans les ateliers. »",
    future: {
      lead: "Ce que Varsovie ignorait alors",
      bullets: [
        "La répression de l'été 1976 provoquera la création, dès septembre, du Comité de défense des ouvriers (KOR) — premier noyau d'opposition organisée en Pologne communiste.",
        "Ce mouvement posera les bases de ce qui deviendra, en 1980, le syndicat Solidarność, dirigé par Lech Wałęsa.",
        "Le gouvernement polonais ne réimposera jamais la hausse des prix retirée en juin 1976."
      ],
      quote: "« Les graines de la contestation plantées cet été-là germeront quatre ans plus tard. »"
    }
  },
  {
    slug: "jo-montreal-ouverture",
    category: "sport",
    pastDate: "21 juillet 1976",
    title: "Les JO de Montréal ouvrent leurs portes",
    chapo: "La XXIᵉ olympiade débute aujourd'hui au Canada. Plus de 6000 athlètes de 92 pays sont réunis pour célébrer le sport et l'amitié entre les peuples.",
    thumbLabel: "Défilé des délégations, Montréal 1976",
    image: "assets/photos/jo-montreal-1976.jpg",
    imageCredit: "Photo : Luciano Inostroza Budinich — CC BY-SA 4.0",
    featured: true,
    layout: "standard",
    body: [
      "Il est un peu plus de 15 heures lorsque la flamme olympique s'élève au-dessus du tout nouveau Stade olympique de Montréal. Sous les yeux de la reine Elizabeth II, chef de l'État canadien, plus de 70 000 spectateurs assistent à l'entrée des délégations.",
      "Ces Jeux, les premiers organisés au Canada, marquent aussi l'apparition de la première mascotte officielle des Jeux d'été, Amik le castor. Le budget pharaonique de l'événement — largement dépassé — fera l'objet de débats pendant des décennies.",
      "Vingt-neuf nations africaines, ainsi que l'Irak et le Guyana, annoncent leur boycott en raison de la tournée de rugby de la Nouvelle-Zélande en Afrique du Sud, alors sous apartheid. Un climat politique tendu plane sur la cérémonie.",
      "Malgré tout, la fête est au rendez-vous. Les organisateurs promettent des Jeux \"à visage humain\", loin du faste de Munich quatre ans plus tôt, marqués par la tragédie de la prise d'otages israéliens.",
      "Sous un ciel gris et menaçant, le défilé des délégations s'étire pendant près de deux heures. Le Canada, pays hôte, entre en dernier sous les acclamations, tandis que la petite délégation des Bermudes, en bermuda rose réglementaire, provoque l'un des seuls sourires généralisés de la cérémonie.",
      "Sur le plan sportif, tous les regards se tournent déjà vers la jeune gymnaste roumaine Nadia Comăneci, 14 ans, présentée comme une révélation, ainsi que vers le décathlonien canadien local et les nageurs est-allemands, portés par un programme sportif national à la performance déjà scrutée avec suspicion par leurs adversaires."
    ],
    pullQuote: "« Des Jeux à visage humain, loin du faste de Munich. »",
    future: {
      lead: "Que sait-on aujourd'hui de ces Jeux qui ne l'était pas alors ?",
      bullets: [
        "Le \"Stade\" ne sera définitivement payé qu'en 2006, trente ans après les Jeux — un record de dérive budgétaire.",
        "Nadia Comăneci, 14 ans, y décrochera la toute première note parfaite de 10 en gymnastique olympique.",
        "Le boycott africain préfigure les tensions géopolitiques qui culmineront avec les boycotts croisés de Moscou 1980 et Los Angeles 1984.",
        "La tour du Stade olympique, inachevée en 1976, ne sera terminée qu'en 1987."
      ],
      quote: "« On ne republie pas ces archives pour se moquer d'hier — on les relit avec ce que le temps nous a appris. »"
    }
  },
  {
    slug: "viking-1-mars",
    category: "science",
    pastDate: "21 juillet 1976",
    title: "La sonde Viking 1 atterrit sur Mars",
    chapo: "Après un voyage de près d'un an, la sonde américaine se pose avec succès sur la planète rouge et transmet ses premiers clichés.",
    thumbLabel: "Premier cliché pris sur Mars",
    image: "assets/photos/mars-viking1.jpg",
    imageCredit: "Photo : NASA / JPL — domaine public",
    layout: "brief",
    body: [
      "Après un peu moins d'un an de voyage depuis Cap Canaveral, la sonde américaine Viking 1 se pose ce matin sur la plaine de Chryse Planitia, sur Mars. Quelques minutes à peine après l'atterrissage, elle transmet le premier cliché jamais pris depuis la surface de la planète rouge : un simple coin de sol rocailleux et l'un des patins de l'appareil.",
      "L'image, granuleuse et en noir et blanc, met plusieurs minutes à nous parvenir. Elle marque pourtant un tournant : c'est la première fois qu'un engin humain envoie une photographie prise directement depuis le sol d'une autre planète.",
      "Viking 1 embarque également des instruments destinés à rechercher d'éventuelles traces de vie microbienne dans le sol martien. Les résultats de ces expériences, ambigus, alimenteront le débat scientifique pendant des décennies.",
      "La sonde n'est que la moitié du dispositif : restée en orbite, elle a d'abord dû repérer, depuis l'espace, un site d'atterrissage suffisamment plat et dégagé, retardant de plusieurs semaines la descente initialement prévue au moment du bicentenaire américain, le 4 juillet.",
      "Sa sonde jumelle, Viking 2, doit se poser à son tour sur Mars en septembre, sur un site distinct, afin de multiplier les chances de trouver des indices de vie passée ou présente. Dans les laboratoires de la NASA, l'attente est presque aussi vive que l'émotion du premier cliché."
    ],
    pullQuote: "« La première photographie jamais prise depuis le sol d'une autre planète. »",
    future: {
      lead: "Ce que la mission Viking a changé",
      bullets: [
        "Viking 1 restera opérationnelle sur Mars jusqu'en 1982, un record pour l'époque.",
        "Ses expériences biologiques, aux résultats ambigus, seront réexaminées par les missions martiennes suivantes pendant des décennies.",
        "Elle ouvre la voie à toutes les missions martiennes qui suivront, de Pathfinder à Perseverance."
      ],
      quote: "« Chaque rover envoyé depuis sur Mars marche dans les pas de Viking 1. »"
    }
  },
  {
    slug: "secheresse-sud-france",
    category: "monde",
    pastDate: "21 juillet 1976",
    title: "La sécheresse frappe le sud de la France",
    chapo: "Les nappes phréatiques atteignent des niveaux historiquement bas. Les agriculteurs craignent pour leurs récoltes.",
    thumbLabel: "Archive — Champs asséchés, 1976",
    layout: "standard",
    body: [
      "Depuis l'automne, il n'est presque pas tombé une goutte. Les rivières ont reculé dans leur lit, certaines sources se sont taries, et la canicule qui frappe le pays depuis juin achève d'assécher des sols déjà exsangues. De la Bretagne au Massif central, préfectures et mairies multiplient les arrêtés restreignant l'arrosage et le lavage des voitures.",
      "Dans les campagnes, l'inquiétude est à son comble. Faute de fourrage, des éleveurs commencent à vendre une partie de leur cheptel plus tôt que prévu. Les rendements céréaliers s'annoncent en net recul, et certains maraîchers évoquent déjà une récolte perdue.",
      "Le gouvernement étudierait des mesures de soutien exceptionnelles pour les exploitations les plus touchées, alors que les caisses de secours agricoles peinent à répondre à l'ampleur des demandes.",
      "Dans le Sud-Ouest, certains cours d'eau affichent des débits jamais mesurés depuis le début des relevés. Plusieurs communes rurales doivent déjà organiser un ravitaillement en eau potable par camion-citerne, une situation que beaucoup d'habitants comparent, la mine grave, aux pires étés d'avant-guerre.",
      "Les météorologues, prudents, se refusent à tout pronostic sur la suite de l'été, mais reconnaissent que le déficit de pluie accumulé depuis l'automne dernier n'a, à ce jour, aucun équivalent connu dans les archives climatiques du pays."
    ],
    pullQuote: "« La terre se fissure, les rivières reculent — rien de comparable dans les mémoires récentes. »",
    future: {
      lead: "Ce que l'histoire retiendra de l'été 1976",
      bullets: [
        "Cette sécheresse restera comme l'une des plus sévères du XXᵉ siècle en France, une référence à laquelle seront comparées celles de 2003 puis de 2022.",
        "Elle poussera le gouvernement à créer un impôt exceptionnel, la \"taxe sécheresse\", pour indemniser les agriculteurs les plus touchés.",
        "Elle marquera durablement les esprits, au point de devenir l'étalon auquel on compare depuis chaque nouvelle canicule."
      ],
      quote: "« Cinquante ans plus tard, l'été 1976 reste la référence à laquelle on compare toutes les sécheresses françaises. »"
    }
  },
  {
    slug: "mort-mao-zedong",
    category: "monde",
    pastDate: "9 septembre 1976",
    title: "Le président Mao Zedong s'éteint à Pékin",
    chapo: "Le fondateur de la Chine populaire meurt à 82 ans, laissant le pays face à une succession incertaine.",
    thumbLabel: "Mao Zedong, avril 1976",
    image: "assets/photos/mao-zedong-1976.jpg",
    imageCredit: "Photo : Archives New Zealand — CC BY 2.0",
    layout: "standard",
    body: [
      "Mao Zedong est mort cette nuit à Pékin, à l'âge de 82 ans, après une longue maladie. L'annonce, diffusée à la radio d'État en fin de matinée, plonge le pays dans un deuil national.",
      "Fondateur de la République populaire de Chine en 1949, artisan du Grand Bond en avant puis de la Révolution culturelle, Mao Zedong laisse une empreinte considérable — et profondément controversée — sur le pays qu'il a dirigé pendant près de trois décennies. Ses dernières apparitions publiques, de plus en plus rares, laissaient déjà deviner un homme affaibli.",
      "Sa disparition ouvre une période d'incertitude à Pékin. Aucun successeur n'a été formellement désigné, et plusieurs clans se disputent déjà l'héritage politique du \"Grand Timonier\".",
      "Devant les portraits géants dressés place Tiananmen, des files de plusieurs kilomètres se forment dès l'aube, certains pleurant ostensiblement, d'autres observant un silence prudent. Les haut-parleurs de la ville diffusent en boucle de la musique funèbre, et les commerces ferment un à un.",
      "La décennie qui vient de s'écouler, marquée par la Révolution culturelle, aura vu des millions de citoyens déplacés, persécutés ou envoyés de force à la campagne au nom de la lutte contre les \"éléments bourgeois\". Le bilan exact de cette période reste, à ce jour, impossible à établir avec certitude."
    ],
    pullQuote: "« La Chine s'arrête. Personne ne sait encore qui va la faire repartir. »",
    future: {
      lead: "Ce qui allait suivre la mort de Mao",
      bullets: [
        "La \"bande des Quatre\", dont sa veuve Jiang Qing, sera arrêtée dès le mois suivant, mettant fin à la Révolution culturelle.",
        "Deng Xiaoping s'imposera progressivement à partir de 1978 et lancera les réformes économiques qui feront de la Chine une puissance mondiale.",
        "Le bilan humain du maoïsme, famines et purges comprises, continuera d'être débattu par les historiens des décennies plus tard."
      ],
      quote: "« La Chine que Mao laisse derrière lui n'est pas celle qu'il aurait imaginée en 1976. »"
    }
  },
  {
    slug: "carter-elu-president",
    category: "politique",
    pastDate: "2 novembre 1976",
    title: "Jimmy Carter élu président des États-Unis",
    chapo: "L'ancien gouverneur de Géorgie, outsider inconnu deux ans plus tôt, bat de justesse le président sortant Gerald Ford.",
    thumbLabel: "Jimmy Carter",
    image: "assets/photos/jimmy-carter.jpg",
    imageCredit: "Photo officielle — domaine public",
    layout: "photo",
    body: [
      "Jimmy Carter a été élu 39ᵉ président des États-Unis, l'emportant de justesse sur le président sortant Gerald Ford. Ce scrutin est le premier depuis le scandale du Watergate, et la méfiance envers Washington a marqué toute la campagne.",
      "Fermier producteur de cacahuètes et ancien gouverneur de Géorgie, Carter était encore largement inconnu du grand public il y a deux ans. Sa promesse de campagne, martelée sans relâche — \"je ne vous mentirai jamais\" — aura suffi à convaincre une Amérique lasse des mensonges d'État.",
      "Le nouveau président devra composer avec une économie fragile, une crise de l'énergie persistante et des tensions internationales toujours vives avec l'URSS. Son investiture est prévue pour janvier.",
      "La campagne aura été marquée par le retour des débats télévisés, une première depuis l'affrontement historique entre Kennedy et Nixon en 1960. Carter, orateur moins rodé que le sortant, s'y est pourtant montré convaincant, insistant sur l'intégrité plutôt que sur l'expérience de son adversaire.",
      "À l'étranger, la nouvelle est accueillie avec une prudence mêlée de curiosité : les chancelleries européennes, comme Moscou, s'interrogent sur la ligne diplomatique que compte suivre cet inconnu jusqu'ici peu familier des dossiers internationaux."
    ],
    pullQuote: "« Je ne vous mentirai jamais » — la promesse qui a suffi à convaincre une Amérique méfiante.",
    future: {
      lead: "Ce que la présidence Carter allait affronter",
      bullets: [
        "Il négociera les accords de Camp David en 1978 entre Israël et l'Égypte, l'un des grands succès diplomatiques du siècle.",
        "La crise des otages américains en Iran, à partir de 1979, plombera la fin de son mandat et lui coûtera sa réélection.",
        "Après la Maison-Blanche, il recevra le prix Nobel de la paix en 2002 pour son travail humanitaire et diplomatique."
      ],
      quote: "« Un seul mandat, mais une carrière après la Maison-Blanche qui marquera davantage encore. »"
    }
  },
  {
    slug: "abba-tournee-europeenne",
    category: "musique",
    pastDate: "19 novembre 1976",
    title: "ABBA débarque pour sa tournée européenne",
    chapo: "Portés par le succès planétaire de \"Dancing Queen\", les Suédois entament leur première grande tournée hors de Scandinavie.",
    thumbLabel: "ABBA à l'aéroport de Schiphol",
    image: "assets/photos/abba-1976.jpg",
    imageCredit: "Photo : Fotocollectie Anefo — CC BY-SA 3.0 NL",
    layout: "standard",
    body: [
      "Fleurs à la main, le quatuor suédois a été accueilli en vedette à l'aéroport d'Amsterdam-Schiphol, où plusieurs dizaines de fans l'attendaient malgré le froid. ABBA entame ici sa première grande tournée hors de Scandinavie.",
      "Le groupe surfe sur le succès phénoménal de \"Dancing Queen\", numéro un dans une dizaine de pays cet été, et sur celui de son nouvel album \"Arrival\", sorti le mois dernier. Une réussite commerciale rare pour un groupe scandinave chantant en anglais.",
      "Une partie de la critique continue pourtant de regarder de haut ce pop suédois trop léché. Le public, lui, ne semble déjà plus s'en soucier.",
      "Formé de deux couples — Agnetha Fältskog et Björn Ulvaeus d'un côté, Anni-Frid Lyngstad et Benny Andersson de l'autre — le groupe s'est fait connaître en 1974 en remportant le Concours Eurovision de la chanson avec \"Waterloo\", un titre alors jugé anecdotique par une partie de la presse musicale.",
      "Deux ans plus tard, le scepticisme initial s'est largement dissipé : le groupe aligne les titres numéro un à travers l'Europe et commence même à percer aux États-Unis, un marché habituellement hermétique aux artistes chantant depuis la Scandinavie."
    ],
    pullQuote: "« Dancing Queen tourne en boucle sur toutes les radios d'Europe. »",
    future: {
      lead: "Ce qu'on ignorait alors du phénomène ABBA",
      bullets: [
        "\"Dancing Queen\" restera l'un des plus grands tubes de tous les temps, repris par des centaines d'artistes à travers le monde.",
        "ABBA vendra plus de 150 millions de disques, devenant l'un des groupes les plus vendus de l'histoire de la musique.",
        "Leur séparation en 1982 n'empêchera pas un retour inattendu près de quarante ans plus tard, avec la comédie musicale \"Mamma Mia!\" puis la tournée en hologrammes \"ABBA Voyage\"."
      ],
      quote: "« Le groupe que personne ne prenait au sérieux deviendra une industrie à lui seul. »"
    }
  }
];

const CATEGORIES = [
  { key: "politique", label: "Politique", desc: "Gouvernements, diplomatie et rapports de force d'hier, relus à la lumière d'aujourd'hui." },
  { key: "sport", label: "Sport", desc: "Records, exploits et compétitions qui ont marqué leur époque." },
  { key: "culture", label: "Culture", desc: "Cinéma, littérature, arts et société d'il y a cinquante ans." },
  { key: "science", label: "Science", desc: "Découvertes, exploration spatiale et innovations technologiques du passé." },
  { key: "musique", label: "Musique", desc: "Sorties d'albums, concerts et scènes musicales d'une autre époque." },
  { key: "monde", label: "Monde", desc: "Un tour du monde des événements qui faisaient l'actualité internationale." }
];

function getArticle(slug) {
  return ARTICLES.find(a => a.slug === slug);
}

function getFeatured() {
  const { pastDate } = getAnniversary();
  const todayMatch = ARTICLES.find(a => {
    const d = parseFrenchDate(a.pastDate);
    return d.getFullYear() === pastDate.getFullYear() && d.getMonth() === pastDate.getMonth() && d.getDate() === pastDate.getDate();
  });
  return todayMatch || ARTICLES.find(a => a.featured) || ARTICLES[0];
}
