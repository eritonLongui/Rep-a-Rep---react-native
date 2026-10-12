# AGENTS.md - Memória e Guia Operacional dos Agentes

Este arquivo serve como repositório de memória contínua para os agentes OpenHands e desenvolvedores trabalhando no projeto **Rep a Rep**.

---

## 1. Contexto Rápido & Arquitetura
- **Projeto:** Rep a Rep (Mobile MVP) - App de musculação focado em autonomia e evolução pessoal.
- **Stack:** React Native, Expo SDK 52+, Expo Router v4, TypeScript, NativeWind v4 (Tailwind CSS), Zustand, AsyncStorage/MMKV, Lucide Icons.
- **Fontes de Verdade:**
  - `PROJECT_CONTEXT.md`: Tokens visuais, design system, mapeamento das 20 telas e regras de negócio.
  - `TAKS_LIST.md`: Backlog e rastreador de status de implementação dividido em 7 fases.
  - `GEMINI.md`: Diretrizes de eficiência de contexto e melhores práticas de código para o modelo.
  - `implementation_plan.md`: Detalhamento técnico aprofundado original.
  - `references/`: Contém os PDFs do PRD, Mapa Visual e o protótipo web original React/Tailwind em `references/Develop 20 Screens`.

---

## 2. Regras Críticas Invioláveis de Arquitetura e UI
1. **Regra das 2 Abas:** A barra inferior (`BottomTabBar`) DEVE conter impreterivelmente apenas **2 abas**:
   - `Treino` (`/(tabs)/(workout)/index`)
   - `Comunidade` (`/(tabs)/(community)/index`)
   - O **Perfil** fica fixo no canto superior direito (`AppHeader`) abrindo a stack/modal `/profile`. Não crie aba de Perfil, Evolução ou Desafios no rodapé.
2. **Modo Visitante ("Guest First"):**
   - Usuário pode montar e executar o primeiro treino sem conta.
   - Comunidade requer conta. Ao finalizar o primeiro treino, apresentar modal de convite para cadastrar e salvar progresso.
3. **Limite de Montagens (Plano Free):**
   - Até 4 montagens de novos treinos por mês.
   - Pequenas edições e ajustes de cargas/repetições são livres e **não consomem** cota mensal.
4. **Alerta de 2 Meses:**
   - Avisar se o usuário tentar alterar a estrutura de treino antes de 2 meses, sugerindo manter o programa por 3 meses para melhor avaliação de evolução. Permitir confirmação consciente.
5. **Estética da Marca:**
   - Limpa, moderna, sem visual agressivo de academia hardcore, sem neons estridentes.
   - Cores primárias: Grafite (`#121318`), Branco/Paper (`#F7F7F9` / `#FFFFFF`), Azul (`#3759F9`), Roxo (`#7B4DF7`), Verde Sucesso (`#20A575`).

---

## 3. Diretrizes de Execução & Redução de Consumo de Tokens
- **Consulte antes de ler arquivos pesados:** Utilize o `PROJECT_CONTEXT.md` para relembrar rapidamente tokens de cores e parâmetros das telas. Não leia repetidamente os PDFs ou o `App.tsx` gigante do protótipo a menos que precise extrair um SVG ou dado específico.
- **Atualização de Progresso:** Atualize sempre o `TAKS_LIST.md` ao iniciar (`[/]`) ou concluir (`[x]`) qualquer sub-tarefa.
- **Edições Cirúrgicas:** Prefira ferramentas de edição como `str_replace` ou inserção direta, mantendo arquivos limpos e sem comentários redundantes.
- **Validação de Tipagem:** Sempre certifique-se de que novos componentes e stores estão estritamente tipados com TypeScript.
