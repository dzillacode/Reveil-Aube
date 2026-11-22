# Aube — réveil avec lever de soleil (iPad mini 2)

Nouvelle version du réveil, à côté de l'appli « Réveil » qui reste inchangée (dossier `reveil/`).

Ce qui change par rapport à « Réveil » :
- l'heure et la date sont plus épaisses ;
- la météo est nettement plus grande ;
- **lever de soleil** : quand l'alarme sonne, le fond s'illumine progressivement en tons chauds (braise, orange, ambre, miel doré), jamais en blanc ni en bleu.

Fichiers : `index.html` (l'application) et `sw.js` (cache hors ligne).

## 1. Publier sur GitHub (nouveau dépôt)
1. Sur github.com, cliquez **+ › New repository**, nommez-le par exemple `Reveil-Aube`, en **Public**, puis **Create repository**.
2. Cliquez **uploading an existing file** et glissez `index.html` et `sw.js` depuis ce dossier `reveil-aube`. Puis **Commit changes**.
3. Allez dans **Settings › Pages** :
   - **Source** : *Deploy from a branch* ;
   - **Branch** : *main*, dossier */ (root)* ;
   - cliquez **Save**.
4. Après 1 à 3 minutes, l'adresse s'affiche : `https://<votre-pseudo>.github.io/Reveil-Aube/`

## 2. Installer sur l'iPad
1. Ouvrez l'adresse dans **Safari**. Vous devez voir **TOUCHER POUR ACTIVER** et **« Aube · version 1 »** en dessous.
2. Partager › **Sur l'écran d'accueil** › **Ajouter**. L'icône s'appelle « Aube » (heure rouge et soleil orange).
3. Lancez l'app depuis cette icône : elle s'ouvre en plein écran.
4. Touchez **TOUCHER POUR ACTIVER**. Il faut le refaire à chaque ouverture.

## Les deux applis coexistent
« Réveil » et « Aube » peuvent rester toutes les deux sur l'écran d'accueil. Elles ont chacune leurs alarmes, leurs réglages et leur cache : modifier l'une ne change rien à l'autre.

Attention : n'en laissez qu'**une seule** ouverte la nuit. iOS ne fait tourner que l'app au premier plan.

## 3. Le lever de soleil
Réglages › **Lever de soleil** :
- **Lumière de réveil** : active ou désactive l'effet.
- **Durée du lever de soleil** : 1, 3 (par défaut), 5 ou 10 minutes, quand la lumière démarre en même temps que la sonnerie.
- **Commencer la lumière avant la sonnerie** : Non, 5, 10 ou 15 minutes. Le jour se lève avant le son et atteint son maximum pile à l'heure de l'alarme.
- **Tester le lever de soleil (30 s)** : tout le cycle en accéléré, sans son. Touchez l'écran pour l'arrêter.

Pendant le réveil :
- **SNOOZE** : le fond revient au noir en 10 secondes. À la sonnerie suivante, la lumière remonte en 1 minute.
- **STOP** : le fond revient au noir en 15 secondes, puis l'affichage normal reprend.

Quand le fond devient clair, l'heure et les boutons passent en brun foncé pour rester lisibles.

### Luminosité de l'écran
Une page web **ne peut pas régler la luminosité de l'iPad**. L'effet dépend donc du curseur de luminosité :
- laissez-le **à mi-hauteur** (Centre de contrôle ou Réglages › Luminosité) ;
- désactivez la **luminosité automatique** (sur iOS 12 : Réglages › Général › Accessibilité › Adaptation de l'affichage).

La nuit, le mode nuit assombrit déjà l'affichage : l'écran reste discret même avec le curseur à mi-hauteur.

## 4. Réglages de l'iPad (indispensables)
- Réglages › Luminosité et affichage › **Verrouillage automatique › Jamais**.
- Réglages › Général › Accessibilité › **Accès guidé** activé (triple-clic pour verrouiller l'iPad dans l'app).
- Volume au maximum, mode silencieux désactivé, iPad toujours branché.

## 5. Checklist de test
- [ ] Réglages › « Tester le lever de soleil (30 s) » : la couleur passe du noir au miel doré sans blanc ni bleu, et l'heure reste lisible à chaque étape.
- [ ] Réglages › « Tester l'alarme dans 1 min », avec une station ★ choisie : la radio démarre et le fond s'illumine.
- [ ] SNOOZE ramène le noir ; à la reprise, la lumière remonte en 1 minute.
- [ ] STOP ramène le noir puis l'affichage normal.
- [ ] Option « avant la sonnerie » sur 5 min avec une alarme dans 7 min : la lumière démarre 5 min avant.
- [ ] Affichage correct en paysage et en portrait (heure, date et météo visibles en entier).
- [ ] Les alarmes de « Réveil » n'apparaissent pas dans « Aube », et inversement.
- [ ] Les premières nuits, gardez une alarme dans l'app Horloge d'iOS en filet de sécurité.
