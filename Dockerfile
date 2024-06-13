FROM node:22-slim
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build
WORKDIR /app/
ENV NODE_ENV production
ENV NEXT_SHARP_PATH=/app/node_modules/sharp
#COPY .next/standalone ./
#COPY .next/static ./.next/static
COPY public ./public
CMD ["npm", "run", "start"]
