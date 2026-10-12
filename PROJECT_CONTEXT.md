# Contexto do Projeto: Rep a Rep (Mobile MVP)

> **Documento Vivo de Contexto Rápido & Eficiência de Tokens**  
> *Consulte este arquivo para obter todo o alinhamento arquitetural, diretrizes de UI/UX e regras de negócio sem precisar reler arquivos longos.*

---

## 1. Visão Geral do Produto
O **Rep a Rep** é um aplicativo mobile de musculação com foco no público iniciante a intermediário (20–30 anos, até 2 anos de treino).  
**Slogan / Princípio Central:** *"Sua evolução, uma rep de cada vez."*  
Foco absoluto em autonomia, consistência e progresso pessoal contra si mesmo, eliminando comparações tóxicas, visual agressivo/hardcore, excesso de neon e clichês fitness.

---

## 2. Stack Tecnológica
* **Framework:** React Native com **Expo (SDK 52+)**, TypeScript.
* **Navegação:** **Expo Router v4** (file-based routing).
* **Estilização:** **NativeWind v4 (Tailwind CSS)** + `StyleSheet` complementar.
* **Tipografia:** Família `Manrope` (pesos 400 a 800) via `expo-font`.
* **Ícones:** `lucide-react-native` (traço moderno e clean, controle de strokeWidth).
* **Estado Global:** **Zustand** (leve, reativo, com stores especializadas).
* **Persistência Local:** `@react-native-async-storage/async-storage` (ou MMKV).
* **Compartilhamento & Stories:** `react-native-view-shot` + `expo-sharing` (cards 9:16 / 1080x1920).
* **Feedback Tátil & Multimídia:** `expo-haptics`.

---

## 3. Design System & Tokens Visuais
* **Base / Neutros:**
  * Dark Base / Ink: `#121318`
  * Card / Border Dark: `#20222A`
  * Light Canvas / Paper: `#F7F7F9` (fundo padrão da aplicação)
  * Surface White: `#FFFFFF`
  * Divider / Line: `#E6E7EC`
  * Muted / Text Secundário: `#6F7280`
* **Identidade & Destaques:**
  * Brand Blue: `#3759F9`
  * Brand Blue Dark: `#2543D8`
  * Brand Purple: `#7B4DF7` (gradientes discretos azul-roxo em conquistas)
  * Soft Violet: `#EEE9FF` (badges)
  * Success Green: `#20A575` (séries concluídas)
  * Danger / Alert: `#DC4D58`
* **Tipografia (Manrope):**
  * Eyebrow: 10px / Uppercase / tracking-widest
  * Body Small: 12–13px
  * Body Base: 14–15px
  * Card Title: 16–18px Bold
  * Hero Heading: 28–32px ExtraBold (`tracking-tight`)

---

## 4. Arquitetura de Navegação (Strict Rules)
1. **Apenas 2 Abas na Barra Inferior:**
   * `Treino` (`/(tabs)/(workout)/index`): Treino de hoje, rotina, histórico, consistência.
   * `Comunidade` (`/(tabs)/(community)/index`): Feed de conquistas, desafios coletivos.
2. **Acesso ao Perfil:**
   * Fixo no topo superior direito (`AppHeader` com avatar redondo).
   * Abre modal/stack `/profile` (Progresso, Personalização, Planos, Configurações).
   * **NUNCA** criar aba inferior para Perfil, Desafios ou Evolução.
3. **Modo Imersivo de Treino:**
   * `/workout/active` roda fora da bottom tab para maximizar foco e área de toque.
   * Modal de descanso (`/workout/rest-modal`) preserva 100% dos dados da sessão ativa.

---

## 5. Mapeamento das 20 Telas

| # | Nome | Rota Expo Router | Papel Principal |
|---|------|------------------|-----------------|
| 01 | Boas-vindas | `/(auth)/welcome` | Slogan, arte com anéis, CTAs (Conta / Login / Visitante) |
| 02 | Login / Cadastro | `/(auth)/login` | Toggle Login/Cadastro, Social mock, simulação de erro/sucesso |
| 03 | Onboarding | `/(auth)/onboarding` | 4 etapas (Nome, Idade, Sexo, Nível de experiência) |
| 04 | Preferências de Treino | `/(workout-setup)/preferences` | Objetivo, frequência semanal, tempo, local/equipamentos |
| 05 | Estrutura de Treino | `/(workout-setup)/structure` | Cards de divisão (Full Body, Upper/Lower, PPL) |
| 06 | Escolha de Exercícios | `/(workout-setup)/exercises` | Categorias de movimento e modal de substituição equivalente |
| 07 | Revisão de Treino | `/(workout-setup)/review` | Resumo semanal, aviso de edições livres (não gastam cota) |
| 08 | Treino do Dia (Home) | `/(tabs)/(workout)/index` | Saudação, banner do treino de hoje, dias de consistência |
| 09 | Execução do Treino | `/workout/active` | Mínima fricção, séries rápidas, comparação com sessão anterior |
| 10 | Descanso Ativo | `/workout/rest-modal` | Cronômetro circular animado, ajustes -15s/+15s, haptic feedback |
| 11 | Resumo Pós-Treino | `/workout/summary` | Confetes, marco REP (ex: REP 001), volume total e recordes |
| 12 | Card Compartilhável | `/workout/share-card` | Story vertical 9:16 em alta definição pronto para exportar |
| 13 | Evolução / Progresso | `/profile/progress` | Gráfico de frequência, curva de carga (supino) e marcos REP |
| 14 | Feed da Comunidade | `/(tabs)/(community)/index` | Desafio do mês, cards de conquistas, sem comentários |
| 15 | Detalhes do Desafio | `/(tabs)/(community)/challenge/[id]` | Progresso individual x coletivo, medalha comemorativa |
| 16 | Criar Desafio | `/(tabs)/(community)/create-challenge` | Templates, limite plano Free (1 desafio / até 10 amigos) |
| 17 | Perfil do Usuário | `/profile/index` | Capa com anéis concêntricos, marco REP, atalhos rápidos |
| 18 | Personalização | `/profile/customize` | Prévia em tempo real de avatar, molduras, cenários e itens |
| 19 | Planos e Limites | `/profile/plans` | Comparativo Free / Premium / Creator, uso mensal de montagens |
| 20 | Configurações & Termos | `/profile/settings` | Switches de notificação, termos e aviso de responsabilidade em saúde |

---

## 6. Regras de Negócio Críticas
1. **Modo Visitante ("Guest First"):**
   * Pode criar e executar o 1º treino sem cadastro.
   * Ao finalizar o primeiro treino, convidar para criar conta e salvar dados.
   * Comunidade bloqueada para visitantes (solicita cadastro).
2. **Limite de Montagens (Plano Free):**
   * Até 4 montagens completas de novos programas por mês.
   * Edições pontuais (troca de exercícios, ajustes de carga/repetição) **NÃO consomem** limite.
3. **Aviso Contextual de 2 Meses:**
   * Se o usuário tentar trocar a estrutura antes de 2 meses da montagem anterior, exibir modal explicativo sobre manter consistência por ~3 meses, permitindo continuar se confirmado.
4. **Marcos REP:**
   * O primeiro treino concluído gera o marco `REP 001`. Marcos subsequentes são calculados por consistência.
5. **Comunidade Positiva:**
   * Sem comentários no MVP (apenas curtidas e compartilhamento). Sem ranking competitivo global tóxico.
