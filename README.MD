# Aube — un vieil iPad transformé en radio-réveil

## Pourquoi ce projet ?

J'avais un **iPad mini 2 de 2013** qui dormait dans un tiroir. Il est bloqué sur iOS 12 : la plupart des applications ne s'installent plus, mais l'écran, le son et le Wi-Fi fonctionnent encore très bien. C'était dommage de le jeter.

Je voulais aussi un vrai **réveil de table de nuit**, et aucun de ceux qu'on trouve dans le commerce ne réunissait tout ce que je cherchais :

- **Un affichage qui ne gêne pas la nuit.** Tout est en rouge sur fond noir, et un mode nuit assombrit encore l'écran. Le rouge est la couleur qui éblouit le moins dans le noir.
- **Se réveiller avec la radio belge de son choix** plutôt qu'avec une sonnerie : La Première, Classic 21, Studio Brussel, Qmusic… Une sonnerie de secours prend le relais si le Wi-Fi tombe.
- **Se réveiller avec la lumière, comme au lever du jour.** Avant ou pendant la sonnerie, l'écran s'illumine progressivement en tons chauds (braise, orange, ambre), sans jamais passer au blanc ni au bleu. Le réveil est plus doux qu'avec un son brutal dans le noir complet.
- **La météo d'un coup d'œil en se levant** : le temps qu'il fait, les prochaines heures et le risque de pluie.
- **Un bel objet**, au design épuré, plutôt qu'un écran d'iPad ordinaire posé sur la table de nuit.

## Comment ça marche

Aube est une simple **page web** : un seul fichier `index.html`, hébergé gratuitement sur GitHub Pages. Rien à installer depuis l'App Store, ce qui tombe bien puisque l'iPad n'y a plus accès. On l'ajoute à l'écran d'accueil depuis Safari, et elle s'ouvre en plein écran comme une vraie application.

Tout a été pensé pour cet iPad précis : un code compatible avec Safari 12, léger pour son processeur, et qui contourne les limites d'iOS 12 sur le son et l'écran.

Le projet est parti d'une première version plus simple, « Réveil », que je garde à côté. Aube l'a ensuite fait évoluer avec :
- le lever de soleil ;
- le choix de la police de l'heure ;
- de grandes cases SNOOZE / STOP ;
- les prévisions météo heure par heure.

## Pour l'installer

Toutes les étapes (publication, installation sur l'iPad, réglages indispensables, liste de tests) sont dans **[LISEZMOI.md](LISEZMOI.md)**.

## Ce qu'il faut savoir

- L'iPad doit rester **branché**, avec l'application **ouverte au premier plan** et le **verrouillage automatique sur « Jamais »**.
- Une page web ne peut pas régler la luminosité de l'iPad. Laissez le curseur de luminosité à mi-hauteur pour profiter du lever de soleil.
- Les premières nuits, gardez une alarme dans l'app Horloge d'iOS en filet de sécurité.

---

*Les données météo viennent d'[Open-Meteo](https://open-meteo.com) et l'annuaire des radios de [Radio Browser](https://www.radio-browser.info). Projet personnel, sans lien avec ces services ni avec l'IRM.*
