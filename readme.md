# Overview do Projeto

## ✨ Principais Funcionalidades

- **Catálogo de Produtos:**  
  Página inicial exibe um grid de produtos ortopédicos. Cada produto possui imagem, nome, código e destaque para lançamentos.

- **Página Detalhada do Produto:**  
  Cada produto tem uma página exclusiva com:
  - Imagens em destaque e galeria
  - Descrição técnica detalhada
  - Indicações, especificações técnicas e informações
  - Carrossel de produtos relacionados

- **Internacionalização (i18n):**  
  Quase todo o conteúdo pode ser alternado entre português, inglês e espanhol, com textos centralizados em arquivos de tradução ao clicar no dropdown da nacionalidade.

- **Design Responsivo e Moderno:**  
  Interface adaptada para desktop e mobile, utilizando Tailwind CSS e DaisyUI para agilidade e visual consistente.

- **Componentização:**  
  O projeto é organizado em componentes reutilizáveis (Navbar, Footer, Hero, Carrossel, Cards, Filtros, etc.), facilitando manutenção e escalabilidade.

---

## 🛠️ Tecnologias Utilizadas

- **Next.js:**  
  Rotas dinâmicas, SSR e otimização de performance.

- **Tailwind CSS + DaisyUI:**  
  Criação rápida de layouts modernos e responsivos.

- **Zustand:**  
  Gerenciamento global do idioma de forma simples e eficiente.

---

## 📁 Estrutura do Projeto

- `src/_components/`: Componentes reutilizáveis (Footer, Navbar, Hero, Produtos, Carrossel, etc.)
- `src/app/`: Páginas principais e dinâmicas (`[id]` para página de produto)
- `src/store/`: Gerenciamento de estado global (idioma)
- `public/`: Imagens, ícones e assets estáticos

---

## 🧩 Detalhes de Implementação

- **Carrossel de Produtos:**  
  Navegação horizontal para explorar outros produtos da linha.

- **Tradução Centralizada:**  
  Todos os textos estão em arquivos de tradução, facilitando a manutenção e expansão para novos idiomas.

- **Atenção à Experiência do Usuário:**  
  Layout limpo, navegação fluida, feedback visual e informações organizadas.

- **Pronto para Escalar:**  
  Estrutura de pastas e componentes pensada para fácil adição de novos produtos, funcionalidades ou integrações futuras.
