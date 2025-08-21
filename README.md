# 🚗 Client (Front-end)

Aplicação em **React + Vite + TS** para consumir a API de Carros.

---

## 📂 Estrutura do Código
- **public/**
  - `assets/` → ícones e imagens públicas.
- **src/**
  - **api/** → funções de integração com a API.
  - **components/**
    - **layout/** → componentes de layout geral.
    - **ui/** → componentes reutilizáveis de interface (botões, listas, spinners etc).
  - **hooks/**  
    - `useCar.ts` → hook para buscar um carro.  
    - `useInfiniteCars.ts` → hook de listagem paginada/infinita.  
    - `useModels.ts` → hook para buscar modelos.  
    - `useRouteSync.ts` → sincronização de rotas com estado.  
  - **i18n/** → internacionalização.
  - **pages/**
    - `AnnouncePages.tsx` → página de anúncios.  
    - `CarDetails.tsx` → detalhes de um carro.  
    - `CarsByBrand.tsx` → listagem agrupada por marca.  
    - `CarsPages.tsx` → listagem geral de carros.  
    - `HomePage.tsx` → página inicial.  
    - `NotFoundPage.tsx` → página 404.  
  - **providers/**
    - `ReactQueryProvider.tsx` → configuração do React Query.  
  - **routes/**
    - `index.routes.tsx` → definição das rotas principais.  
    - `layout.routes.tsx` → rotas de layout.  
  - **schemas/**
    - `createCars.ts` → validação/esquema para criação de carros.  
  - **store/** → estado global (ex.: Zustand).  
  - **styles/**
    - `custom.css`, `global.css`, `scroll.css` → estilos globais.  
  - **types/**
    - `brands.ts`, `cars.ts`, `models.ts` → tipagens TypeScript das entidades.  
  - **utils/**
    - **generics/** → funções utilitárias genéricas:
      - `extractYoastDescription.ts`  
      - `formatDate.ts`  
      - `formatMoneyBr.ts`  
      - `modelImage.ts`  
      - `removeStyle.ts`  
    - `const/` e `data/` → constantes e dados auxiliares. 
  - **ETC...**
  
---

## ⚙️ Decisões de Implementação

- **React + Vite + TypeScript** build rápido, tipagem forte e HMR estável.
- **Tailwind** para estilização, produtividade e consistência visual sem CSS complexo.
- **Lazy + Suspense** carrega componentes sob demanda → melhora TTI em listas grandes.
- **React Router** para navegação.
- **React Query** cache, revalidação e estados de requisição previsíveis.
- **Husky + ESLint + Prettier** manter o código limpo antes do commit.
  
---

## 🧩 Explicação do componente de listagem de carros

### CarsList


Responsável por renderizar uma grade responsiva de veículos.  
Ele recebe como prop uma lista de objetos `Car[]` e para cada item renderiza um `CarCard`.

**Decisões de implementação:**
- Utiliza **lazy + Suspense** para carregar `CarCard` sob demanda, reduzindo o peso inicial da página.
- Exibe um **spinner** enquanto o card não é carregado, evitando layout quebrado.
- Organiza os cards em **grid responsiva** (`1 / 2 / 3 colunas` conforme o tamanho da tela).
- Prop principal é `items`, que deve sempre receber um array (mesmo que vazio).


```javascript
<CarsList items={cars} />
```

cars sendo uma lista de carros que possui a seguinte tipagem:

```javascript
Car {
  id: number;
  timestamp_cadastro: string;
  modelo_id: number;
  ano: number;
  combustivel: string;
  num_portas: number;
  cor: string;
  nome_modelo: string;
  nome_marca: string;
  valor: number;
}
```

### CarCard

Card individual de veículo.

```javascript
<CarCard
  id={1}
  name="SW4 Diamond"
  nameBrand="Toyota"
  year={2023}
  price={390000}
  image="/toyota-sw4.jpg"
  badge="DIESEL"
  to="/cars/1"
/>
```

## ▶️ Como executar

Antes de começar, instale:

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/)
- [NodeJS](https://nodejs.org/pt) _(apenas se quiser rodar fora do Docker)_

---

### 1. Clone o repositório

```bash
git clone https://github.com/GefersonLopes/WS-Work-WEB.git
cd WS-Work-WEB
docker compose up --build
```
