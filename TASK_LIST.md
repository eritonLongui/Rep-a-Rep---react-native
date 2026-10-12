# Rep a Rep - Plano de Tarefas de Implementação (TAKS_LIST.md)

> **Status Geral do Projeto:** Pronto para Iniciar Fase 1  
> **Estratégia:** Execução modular progressiva com validação estrita a cada fase.

---

## Legenda de Status
- `[ ]` Não iniciado (Todo)
- `[/]` Em progresso (In Progress)
- `[x]` Concluído e validado (Done)

---

## Fase 1: Setup de Infraestrutura & Design System Base
- [ ] **1.1 Inicialização e Dependências**
  - [ ] Inicializar projeto Expo SDK 52 com TypeScript e Expo Router v4.
  - [ ] Configurar NativeWind v4 (Tailwind CSS) e presets.
  - [ ] Instalar `lucide-react-native`, `expo-font`, `@expo-google-fonts/manrope`, `zustand`, `@react-native-async-storage/async-storage`, `expo-haptics`, `react-native-view-shot`, `expo-sharing`.
- [ ] **1.2 Configuração de Fontes e Tema**
  - [ ] Carregar pesos Manrope (Regular, Medium, SemiBold, Bold, ExtraBold) no Root Layout.
  - [ ] Mapear cores do Design System no Tailwind/NativeWind (`ink`, `ink-2`, `paper`, `brand-blue`, `brand-purple`, etc.).
- [ ] **1.3 Componentes Atômicos de UI (UI Kit Base)**
  - [ ] `Button`: Variantes primary, secondary, ghost, danger com suporte a ícones e haptics.
  - [ ] `Chip`: Seletores tipo pill com estados ativo/inativo.
  - [ ] `ProgressBar`: Barra de progresso com gradiente azul/roxo.
  - [ ] `Avatar`: Componente customizável com tamanhos `sm` (34px), `md` (42px) e `lg` (86px) e moldura.
  - [ ] `AppHeader`: Cabeçalho padrão com botão Voltar/Logo, título e Avatar fixo no canto superior direito.
  - [ ] `NumberInput`: Campo de input numérico rápido para carga e repetições (+ / -).

---

## Fase 2: Entrada, Autenticação e Onboarding (Telas 01 a 03)
- [ ] **2.1 Tela 01 - Boas-vindas (`/(auth)/welcome`)**
  - [ ] Gráfico com anéis proprietários da marca e slogan "Sua evolução, uma rep de cada vez".
  - [ ] CTAs: "Criar conta", "Entrar" e "Experimentar sem conta" (Modo Visitante).
- [ ] **2.2 Tela 02 - Entrar / Criar Conta (`/(auth)/login`)**
  - [ ] Toggle entre Cadastro e Login.
  - [ ] Botões simulados de Apple e Google.
  - [ ] Validação visual simulada de erro/sucesso.
- [ ] **2.3 Tela 03 - Onboarding (`/(auth)/onboarding`)**
  - [ ] Stepper linear em 4 etapas (Nome, Idade, Identidade de Gênero, Nível de Experiência).
  - [ ] Integração com `useUserStore`.
  - [ ] CTA para iniciar montagem de treino ou pular para a Home.

---

## Fase 3: Montagem de Treino & Home do Usuário (Telas 04 a 08)
- [ ] **3.1 Tela 04 - Preferências de Treino (`/(workout-setup)/preferences`)**
  - [ ] 3 etapas: Objetivo principal, Frequência semanal c/ duração e Local/Equipamentos com chips multi-seleção.
- [ ] **3.2 Tela 05 - Escolha da Estrutura (`/(workout-setup)/structure`)**
  - [ ] Divisões: Full Body, Upper/Lower, Push-Pull-Legs.
  - [ ] Regra de negócio: aviso contextual de 2 meses ao trocar programa existente.
- [ ] **3.3 Tela 06 - Escolha de Exercícios (`/(workout-setup)/exercises`)**
  - [ ] Lista agrupada por padrão de movimento (Agachar, Empurrar, Puxar, etc.).
  - [ ] Modal para substituição por exercício compatível equivalente.
- [ ] **3.4 Tela 07 - Revisão do Treino (`/(workout-setup)/review`)**
  - [ ] Cronograma semanal (A/B), aviso claro de que pequenas edições não consomem cotas mensais.
  - [ ] Validação de limite mensal (4 montagens no plano Free).
- [ ] **3.5 Tela 08 - Treino do Dia (`/(tabs)/(workout)/index`)**
  - [ ] Saudação dinâmica e card de treino do dia (exercícios e tempo previsto).
  - [ ] Indicador semanal de consistência (dias da semana marcados).
  - [ ] Botão de início rápido de treino imersivo.

---

## Fase 4: Experiência Central de Treino (Telas 09 e 10)
- [ ] **4.1 Tela 09 - Execução do Treino (`/workout/active`)**
  - [ ] Foco em 1 exercício por vez com carrossel ou paginação de topo.
  - [ ] Tabela ultrarrápida de séries (Carga x Repetições) com inputs otimizados.
  - [ ] Indicador de série concluída com feedback tátil (`expo-haptics`).
  - [ ] Comparação evidente com a sessão anterior.
  - [ ] Botão de descanso ativo integrado.
- [ ] **4.2 Tela 10 - Descanso Ativo (`/workout/rest-modal`)**
  - [ ] Modal/bottom sheet com timer regressivo circular/SVG animado.
  - [ ] Botões rápidos de ajuste (-15s / +15s), pausar e avançar.
  - [ ] Preservação de dados da sessão sem risco de perda.

---

## Fase 5: Conclusão, Compartilhamento & Evolução (Telas 11 a 13)
- [ ] **5.1 Tela 11 - Resumo Pós-Treino (`/workout/summary`)**
  - [ ] Celebração com animação/confetes e marco REP (ex.: `REP 001`).
  - [ ] Cards de métricas: Volume total levantado, Duração e Recordes pessoais.
  - [ ] Convite para visitantes criarem conta para salvar histórico.
- [ ] **5.2 Tela 12 - Card Compartilhável Stories (`/workout/share-card`)**
  - [ ] Renderização visual 9:16 (1080x1920) em off-screen/view.
  - [ ] Disparo de captura via `react-native-view-shot` e compartilhamento com `expo-sharing`.
- [ ] **5.3 Tela 13 - Evolução do Usuário (`/profile/progress`)**
  - [ ] Gráficos de consistência semanal/mensal (barras).
  - [ ] Curva de carga do supino/exercício principal.
  - [ ] Histórico de marcos REP e volume acumulado.

---

## Fase 6: Comunidade e Desafios Colaborativos (Telas 14 a 16)
- [ ] **6.1 Tela 14 - Feed da Comunidade (`/(tabs)/(community)/index`)**
  - [ ] Banner do Desafio Oficial do mês.
  - [ ] Feed de treinos e marcos de amigos sem comentários (apenas curtidas e compartilhamento).
  - [ ] Filtros "Para você" e "Seguindo".
  - [ ] Bloqueio amigável para visitantes com convite ao cadastro.
- [ ] **6.2 Tela 15 - Detalhe de Desafio (`/(tabs)/(community)/challenge/[id]`)**
  - [ ] Progresso individual vs coletivo.
  - [ ] Lista de amigos participantes e medalha oficial do desafio.
- [ ] **6.3 Tela 16 - Criar Desafio (`/(tabs)/(community)/create-challenge`)**
  - [ ] Formulário com modelos prontos (ex.: 12 treinos em 30 dias).
  - [ ] Validação do limite do plano Free (1 desafio ativo, até 10 amigos).
  - [ ] Modal de sucesso com código de convite.

---

## Fase 7: Perfil, Personalização, Planos e Ajustes Finais (Telas 17 a 20)
- [ ] **7.1 Tela 17 - Perfil do Usuário (`/profile/index`)**
  - [ ] Header proprietário com anéis concêntricos e avatar.
  - [ ] Marco REP atual, estatísticas consolidadas e atalhos rápidos.
- [ ] **7.2 Tela 18 - Personalização de Perfil (`/profile/customize`)**
  - [ ] Catálogo com abas: Retratos, Molduras, Cenários e Itens.
  - [ ] Prévia em tempo real sobre o avatar do usuário.
  - [ ] Badges para itens Free vs itens Premium.
- [ ] **7.3 Tela 19 - Planos e Limites (`/profile/plans`)**
  - [ ] Comparativo dos planos Free, Premium e Creator Pro.
  - [ ] Indicador de cotas de montagem mensal utilizadas (ex: 3 de 4).
  - [ ] Paywall demonstrativo (sem checkout real).
- [ ] **7.4 Tela 20 - Configurações e Responsabilidade (`/profile/settings`)**
  - [ ] Configurações de notificação e preferências.
  - [ ] Termos de Uso e Política de Privacidade.
  - [ ] Destaque obrigatório do Aviso de Responsabilidade em Saúde.
- [ ] **7.5 Validação Final & Polimento**
  - [ ] Testes de navegação entre as 20 rotas.
  - [ ] Verificação de contraste, estados vazios e coerência dos dados mockados.
