# Documentação do Projeto Pokédex

**Aluno:** Diego de Oliveira Murari Guimarães  
**Número de Matrícula:** 24753

## 📖 Introdução
Este projeto tem como objetivo criar uma Pokédex interativa que exibe informações sobre Pokémon utilizando a PokéAPI. O site permite:

✅ Buscar Pokémon pelo nome  
✅ Filtrar Pokémon por tipo  
✅ Exibir informações detalhadas de cada Pokémon  
✅ Apresentar um design atraente, inspirado no universo Pokémon

---

## 🛠️ Tecnologias Utilizadas
- **React.js** para construção da interface
- **Tailwind CSS** para estilização
- **Express.js** para o backend
- **PokéAPI** para obtenção dos dados

---

## 📂 Estrutura do Projeto
```
/Pokedex
 ├── /node_modules
 ├── /public
 │   └── index.html
 ├── /src
 │   ├── index.js
 │   ├── index.css
 │   ├── PokemonApp.jsx
 │   └── pokemon_styles.css
 ├── /server
 │   └── index.js
 ├── .gitignore
 ├── package.json
 ├── tailwind.config.js
 ├── postcss.config.js
 └── README.md
```

---

## ⚙️ Instalação e Execução
### 1️⃣ **Instalar Dependências**
Execute o seguinte comando para instalar todas as dependências:
```bash
npm install
```

### 2️⃣ **Rodar o Backend**
```bash
npm run server
```

### 3️⃣ **Rodar o Frontend**
Abra uma nova aba no terminal e execute:
```bash
npm start
```

---

## 🚀 Funcionalidades
### 🔍 **Buscar Pokémon**
- Utilize o campo de busca para encontrar Pokémon pelo nome.

### 🏷️ **Filtrar Pokémon por Tipo**
- Utilize a lista suspensa para filtrar Pokémon por seu tipo (ex: Grass, Fire, Water, etc.).

### 💬 **Informações dos Pokémon**
- Cada card exibe:
  - Nome
  - ID
  - Imagem
  - Tipos

### ✨ **Efeitos Visuais**
- Os cards aumentam de tamanho e ganham uma sombra suave ao passar o mouse para dar destaque.

---

## 🐞 Possíveis Problemas e Soluções
1️⃣ **Erro no Tailwind CSS**  
➡️ Verifique se o arquivo `tailwind.config.js` está configurado corretamente.  

2️⃣ **Pokémon não aparecem**  
➡️ Certifique-se de que o backend está rodando corretamente.  

3️⃣ **Estilos não aplicados**  
➡️ Limpe o cache do navegador com `Ctrl + F5`.  

---

## 📋 Créditos
Este projeto foi desenvolvido por **Diego de Oliveira Murari Guimarães** como parte de suas atividades acadêmicas.  
**Número de Matrícula:** 24753

