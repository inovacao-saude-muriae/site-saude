# Estágio 1: Instalação de dependências
FROM node:24-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install

# Estágio 2: Build da aplicação
FROM node:24-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Desabilite a coleta de telemetria do Next.js durante o build
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Estágio 3: Runner (Imagem final leve)
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Criar usuário de sistema para não rodar como root por segurança
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar os arquivos necessários do estágio builder
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]