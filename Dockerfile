# --- Build stage: compile TS -> JS ------------------------------------------
FROM node:22-alpine AS builder
WORKDIR /app

# Meilleur cache: d'abord les manifests
COPY package*.json ./
# Installe toutes les deps (prod + dev, pour compiler)
RUN npm ci

# Copie du code
COPY tsconfig.json ./
COPY src ./src

# Compile
RUN npm run build
# Optionnel: enlève les types locaux si tu en génères ailleurs

# --- Runtime stage: image légère, deps prod uniquement ----------------------
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copie uniquement les manifests, puis installe deps prod
COPY package*.json ./
RUN npm ci --omit=dev

# Copie le build compilé
COPY --from=builder /app/dist ./dist

# (si tu as des assets statiques à runtime, copie-les ici)
# COPY public ./public

EXPOSE 3000
CMD ["node", "dist/server.js"]
