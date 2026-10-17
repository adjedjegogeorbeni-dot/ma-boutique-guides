BOUTIQUE DE GUIDES NUMÉRIQUES — GUIDE DE DÉMARRAGE ANDROID

CONTENU
- index.html : page de vente
- styles.css : design responsive noir et or
- config.js : nom de marque, prix et URL d'achat
- script.js : affiche le nom et connecte le bouton d'achat
- privacy.html : modèle de page confidentialité à compléter
- terms.html : modèle de conditions de vente à compléter

ÉTAPE 1 — CRÉER LE PRODUIT ET LE PAIEMENT
1. Depuis Chrome sur Android, connecte-toi à https://chariow.com/fr
2. Crée/ouvre ton compte vendeur.
3. Crée un produit de type fichier numérique et fixe le prix à 955 FCFA.
4. Téléverse le PDF uniquement si ta licence autorise sa revente.
5. Configure les moyens de paiement et les informations de versement disponibles pour ton compte.
6. Configure la livraison automatique, puis récupère l'URL publique de la page produit/achat.
7. Teste le parcours d'achat avant de faire de la publicité.

ÉTAPE 2 — PERSONNALISER LE SITE
1. Ouvre config.js dans un éditeur de texte ou l'éditeur GitHub.
2. Remplace VOTRE MARQUE par ton nom de marque.
3. Remplace la valeur vide de CHECKOUT_URL par l'URL https://... de ton produit Chariow.
   Exemple :
   CHECKOUT_URL: "https://ton-url-de-produit"
   N'utilise pas cet exemple comme un vrai lien; copie l'URL depuis ton tableau de bord.
4. Vérifie que le prix du site correspond au prix du produit Chariow.
5. Complète privacy.html et terms.html avec tes informations réelles.
6. Dans index.html, remplace la description, le nom du guide, les caractéristiques et le contact pour qu'ils correspondent exactement au PDF vendu.

ÉTAPE 3 — PUBLIER GRATUITEMENT AVEC CLOUDFLARE PAGES
La méthode la plus simple depuis Android consiste à envoyer les fichiers dans un dépôt GitHub, puis à le connecter à Cloudflare Pages.
1. Crée un compte si nécessaire sur https://github.com
2. Crée un dépôt public nommé par exemple boutique-guides.
3. Ajoute les fichiers du dossier du site à la racine du dépôt (pas le fichier ZIP).
4. Crée/connecte-toi à https://dash.cloudflare.com
5. Ouvre Workers & Pages, puis crée une application Pages connectée au dépôt GitHub.
6. Pour un site HTML statique, choisis l'option de déploiement adaptée aux fichiers statiques. Si un champ de commande de build apparaît, laisse-le vide; indique le dossier racine comme répertoire de sortie si demandé.
7. Lance le déploiement et ouvre l'URL *.pages.dev fournie.

ÉTAPE 4 — TESTS OBLIGATOIRES
- Ouvre le site sur ton téléphone et vérifie les textes et le prix.
- Clique sur le bouton d'achat : il doit ouvrir la vraie page de paiement hébergée.
- Fais un achat test si le prestataire propose un mode test, ou une vraie petite transaction seulement si tu peux en supporter le coût.
- Vérifie que le paiement confirmé déclenche bien la livraison du PDF.
- Vérifie que le lien du fichier n'est pas affiché publiquement dans le code du site.
- Ne demande jamais aux clients d'envoyer leur code secret Mobile Money.
- Ne lance aucune publicité avant que le paiement et la livraison fonctionnent.

IMPORTANT
Ce site est une vitrine statique. Il ne traite pas lui-même les paiements et ne vérifie pas les transactions. Le lien d'achat renvoie vers le prestataire externe; c'est ce prestataire qui doit confirmer le paiement et livrer le fichier. La page de confirmation du site ne doit jamais servir de preuve de paiement.
Le domaine personnalisé est facultatif et généralement payant; commence avec l'URL gratuite de l'hébergeur.
