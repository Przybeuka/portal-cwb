# Portal CWB

Portal de notícias de Curitiba e região.

## Tecnologias Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- Jest para testes

## Pré-requisitos

- Node.js 18.17 ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/portal-cwb.git
cd portal-cwb
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
- Copie o arquivo `.env.local.example` para `.env.local`
- Preencha as variáveis necessárias

## Desenvolvimento

Para rodar o projeto em desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## Build e Produção

Para criar uma build de produção:

```bash
npm run build
npm start
# ou
yarn build
yarn start
```

## Testes

Para rodar os testes:

```bash
npm test
# ou
yarn test
```

## Deploy

Este projeto está configurado para deploy na Vercel. Cada push para a branch main irá gerar um deploy automático.

## Estrutura do Projeto

```
portal-cwb/
├── src/
│   ├── app/              # Páginas e layouts
│   ├── components/       # Componentes React
│   ├── lib/             # Bibliotecas e utilitários
│   ├── hooks/           # Custom hooks
│   ├── styles/          # Estilos globais
│   ├── types/           # Definições de tipos
│   ├── utils/           # Funções utilitárias
│   ├── services/        # Serviços e APIs
│   ├── store/           # Gerenciamento de estado
│   └── graphql/         # Queries e mutations
├── public/              # Arquivos estáticos
└── ...
```

## Configuração do Strapi

1. Instale o Strapi:
```bash
npx create-strapi-app@latest portal-cwb-backend --quickstart
```

2. Configure o banco de dados PostgreSQL no Strapi
3. Configure as permissões e roles no painel administrativo
4. Gere o token de API e configure no frontend

## Contribuição

1. Fork o projeto
2. Crie sua branch de feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença
