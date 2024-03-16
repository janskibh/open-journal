# Définir l'image de base
FROM node:14

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier le reste des fichiers du projet dans le conteneur
COPY . .

# Exposer le port sur lequel votre application s'exécute
EXPOSE 3000

# Définir la commande pour démarrer votre application
CMD ["node", "index.js"]
