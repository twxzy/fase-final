# Checklist de Correções e Melhorias - PremiumImóveis

Este documento lista todos os bugs, melhorias de UX e refatorações de código que foram identificadas e implementadas no projeto.

---

## Geral (Experiência do Usuário)

- [x] **Rolagem da Página:** Navegação entre seções da página era instantânea.
- [x] **Rolagem do Menu Mobile:** A página principal continuava rolando no fundo com o menu mobile aberto.

---

## Header

- [x] **Responsividade:** O menu de navegação principal desaparecia em telas pequenas sem uma alternativa.
- [x] **Alinhamento do Menu Mobile:** Os itens de navegação no menu hambúrguer estavam alinhados à esquerda.
- [x] **Funcionalidade do Menu Mobile:** O menu não fechava automaticamente ao clicar em um dos links.
- [ ] **Navegação por Âncora (Menu Mobile):** Links do menu (ex: "Contato") não rolam a página para a seção correspondente.
  - **Status:** Problema identificado. A causa provável é a falta de `id`s correspondentes nas seções de destino. A correção requer a revisão de múltiplos componentes para adicionar os `id`s necessários.

---

## Hero Section

- [x] **Layout (Header Fixo):** O conteúdo da seção "Hero" estava começando por baixo do cabeçalho fixo.
- [x] **Layout (Sobreposição):** O card de busca estava sobrepondo os textos de "Indicadores de Confiança".
- [x] **Animação de Scroll:** A animação de "pulo" do indicador de scroll era muito agressiva.

---

## Formulário de Busca (`PropertySearch`)

- [x] **Layout dos Botões (Responsividade):** O botão "Filtros Avançados" era cortado em telas pequenas.
- [x] **Layout dos Botões (Mobile):** O botão "Buscar Imóveis" ficava com largura pequena no celular.
- [x] **Acessibilidade:** As `labels` dos campos de busca não estavam conectadas aos `inputs`.
- [x] **Visual do Card (Desfoque):** O card de busca possuía um efeito de desfoque de fundo que foi verificado.

---

## Footer

- [x] **Layout (Alinhamento):** O conteúdo do rodapé estava "descentralizado" no celular.
