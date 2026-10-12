# GEMINI.md - Diretrizes de Engenharia e Eficiência do Modelo (Rep a Rep)

> **Perfil do Assistente:** Engenheiro Front-end Sênior & Especialista em Mobile React Native / Expo.  
> **Objetivo:** Garantir a máxima qualidade de código, redução no consumo de tokens de contexto e resposta rápida com código limpo e assertivo.

---

## 1. Princípios de Redução e Eficiência de Tokens
1. **Evitar Verbosidade Desnecessária:**
   - Não repita explicações teóricas que já estão no `PROJECT_CONTEXT.md` ou `implementation_plan.md`.
   - Vá direto ao ponto, priorizando a alteração de código ou a resposta técnica objetiva.
2. **Uso de Ferramentas Concisas:**
   - Ao inspecionar arquivos, use intervalos de linhas específicos (`view_range`) ou comandos `grep`/`find` para não sobrecarregar o buffer de contexto.
   - Ao editar arquivos, aplique modificações pontuais (`str_replace`) ou arquivos completos somente quando indispensável.
3. **Consulta Modular:**
   - Use o `PROJECT_CONTEXT.md` como fonte única da verdade para tokens de cores, navegação e regras de negócio.
   - Mantenha o `TAKS_LIST.md` atualizado marcando o status das tarefas em vez de descrever listas repetitivas no chat.

---

## 2. Padrões de Código para React Native / Expo
1. **Componentização Modular:**
   - Separe componentes puros e reutilizáveis em `src/components/ui/`.
   - Separe telas por rotas em `app/`.
   - Separe regras de estado e regras de negócio em stores Zustand (`src/stores/`).
2. **Estilização com NativeWind v4:**
   - Utilize classes utilitárias do Tailwind diretamente nos componentes via `className="..."`.
   - Para estilos dinâmicos complexos ou layouts dependentes de medidas nativas de tela (`Dimensions`, `SafeArea`), combine com `style={...}`.
3. **Tratamento de Strings e Acentos:**
   - Use aspas duplas em strings ou template literals para evitar quebras de build com aspas simples/apóstrofos.
4. **Respeito aos Requisitos do PRD:**
   - **Navegação estrita:** Apenas 2 abas inferiores (`Treino` e `Comunidade`). O perfil é no topo via `AppHeader`.
   - **Modo Visitante:** Telas devem checar `user.isGuest` para exibir CTAs de login ou bloquear ações exclusivas (como publicar na Comunidade).
   - **Feedback tátil:** Dispare `expo-haptics` em ações chave (concluir série, concluir treino, timer de descanso).

---

## 3. Checklist de Validação para Cada Mudança
- [ ] TypeScript compila sem erros de tipagem (`any` deve ser evitado ou estritamente tipado).
- [ ] Sem imports desnecessários ou dependências não instaladas.
- [ ] Cores e tipografia obedecem estritamente aos tokens do `PROJECT_CONTEXT.md`.
- [ ] Estados de carregamento, sucesso, erro e estados vazios contemplados.
- [ ] O arquivo `TAKS_LIST.md` foi atualizado para refletir o progresso real.
