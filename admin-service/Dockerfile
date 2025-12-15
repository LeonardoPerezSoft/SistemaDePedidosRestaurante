FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --only=production || npm install --only=production
COPY tsconfig.json ./
COPY src ./src
RUN npm run build
EXPOSE 4001
CMD ["npm", "start"]
