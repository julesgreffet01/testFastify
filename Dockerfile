FROM node:22-alpine

WORKDIR /app

# Copie uniquement les fichiers de dépendances pour optimiser le cache
COPY package*.json ./

# Installe les dépendances
RUN npm install --production

# Copie le reste du code de l'application
COPY . .

# Expose le port sur lequel ton app écoute
EXPOSE 3000

# Commande de lancement
CMD ["node", "dist/server.js"]