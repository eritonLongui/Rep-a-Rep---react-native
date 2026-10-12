import { useState, type ReactNode } from "react";

type Screen =
  | "welcome" | "auth" | "onboarding" | "preferences" | "structure"
  | "exercises" | "review" | "today" | "exercise" | "rest" | "summary"
  | "share" | "progress" | "community" | "challenge" | "createChallenge"
  | "profile" | "customize" | "plans" | "settings";

const screens: { id: Screen; label: string }[] = [
  { id: "welcome", label: "Boas-vindas" },
  { id: "auth", label: "Acesso" },
  { id: "onboarding", label: "Onboarding" },
  { id: "preferences", label: "Preferências" },
  { id: "structure", label: "Estrutura" },
  { id: "exercises", label: "Exercícios" },
  { id: "review", label: "Revisão" },
  { id: "today", label: "Treino do dia" },
  { id: "exercise", label: "Execução" },
  { id: "rest", label: "Descanso ativo" },
  { id: "summary", label: "Resumo" },
  { id: "share", label: "Card compartilhável" },
  { id: "progress", label: "Evolução" },
  { id: "community", label: "Comunidade" },
  { id: "challenge", label: "Detalhe do desafio" },
  { id: "createChallenge", label: "Criar desafio" },
  { id: "profile", label: "Perfil" },
  { id: "customize", label: "Personalização" },
  { id: "plans", label: "Planos e limites" },
  { id: "settings", label: "Configurações" },
];

type IconName =
  | "arrow" | "apple" | "bar" | "bell" | "bolt" | "calendar" | "check"
  | "chevron" | "clock" | "community" | "crown" | "edit" | "fire"
  | "gear" | "google" | "heart" | "home" | "lock" | "medal" | "pause"
  | "plus" | "repeat" | "share" | "spark" | "target" | "trend" | "user";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="m15 18-6-6 6-6" /></>,
    apple: <><path d="M12 20.5c-1.5 0-2.1-.9-3.4-.9-1.3 0-2 .9-3.3.9C2.8 20.5 1 16 1 12.5 1 8.7 3.4 6.7 5.8 6.7c1.4 0 2.7.9 3.5.9.8 0 2.3-1.1 3.9-.9.7 0 2.6.3 3.9 2.1-3.4 2-2.8 6.4.6 7.7-.7 1.6-1.5 3.1-2.8 4-1.2.1-1.8 0-2.9 0Z" /><path d="M12.8 3.3c.9-1 2.3-1.8 3.5-1.8.2 1.4-.4 2.8-1.2 3.7-.8.9-2.1 1.6-3.4 1.5-.1-1.3.4-2.5 1.1-3.4Z" /></>,
    bar: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M14 21h-4" /></>,
    bolt: <><path d="m13 2-9 12h8l-1 8 9-12h-8l1-8Z" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M8 3v4M16 3v4M3 10h18" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
    chevron: <><path d="m9 18 6-6-6-6" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    community: <><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M8.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM17 11l2 2 4-4" /></>,
    crown: <><path d="m3 7 4 4 5-7 5 7 4-4-2 12H5L3 7Z" /><path d="M5 19h14" /></>,
    edit: <><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" /></>,
    fire: <><path d="M12 22c4 0 7-3 7-7 0-3-1.5-5.5-4-8 .1 3-1.5 4-2.5 3C11 8.5 11.5 5 8 2c.3 4-3 6-3 11 0 5 3 9 7 9Z" /><path d="M9.5 18c0-2 1.5-3 2.5-5 1 2 2.5 3 2.5 5a2.5 2.5 0 0 1-5 0Z" /></>,
    gear: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" /></>,
    google: <><path d="M21.3 12.2c0-.7-.1-1.4-.2-2H12v3.7h5.2a4.5 4.5 0 0 1-2 2.9v2.4h3.2c1.9-1.7 2.9-4.1 2.9-7Z" /><path d="M12 21.5c2.6 0 4.9-.9 6.5-2.3l-3.2-2.4c-.9.6-2 1-3.3 1a5.7 5.7 0 0 1-5.4-3.9H3.3v2.5a9.8 9.8 0 0 0 8.7 5.1Z" /><path d="M6.6 13.9a5.8 5.8 0 0 1 0-3.7V7.6H3.3a9.8 9.8 0 0 0 0 8.8l3.3-2.5Z" /><path d="M12 6.2c1.5 0 2.8.5 3.8 1.5l2.8-2.8A9.4 9.4 0 0 0 3.3 7.6l3.3 2.6A5.7 5.7 0 0 1 12 6.2Z" /></>,
    heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" /></>,
    home: <><path d="m3 11 9-8 9 8v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /><path d="M9 22V12h6v10" /></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="3" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    medal: <><circle cx="12" cy="15" r="6" /><path d="M9 9 6 2h4l2 4 2-4h4l-3 7M12 12v6M9 15h6" /></>,
    pause: <><path d="M9 5v14M15 5v14" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    repeat: <><path d="m17 1 4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3" /></>,
    share: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4" /></>,
    spark: <><path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3ZM5 15l.7 2.3L8 18l-2.3.7L5 21l-.7-2.3L2 18l2.3-.7L5 15ZM19 14l.7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14Z" /></>,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
    trend: <><path d="M3 17 9 11l4 4 8-9" /><path d="M15 6h6v6" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Logo({ small = false }: { small?: boolean }) {
  return <div className={`logo ${small ? "logo-small" : ""}`}><span className="logo-mark"><i /><i /><i /></span><span>rep a rep</span></div>;
}

function Button({ children, onClick, variant = "primary", icon }: { children: ReactNode; onClick?: () => void; variant?: "primary" | "secondary" | "ghost" | "danger"; icon?: IconName }) {
  return <button className={`button button-${variant}`} onClick={onClick}>{icon && <Icon name={icon} size={18} />}<span>{children}</span></button>;
}

function Chip({ children, active = false, onClick }: { children: ReactNode; active?: boolean; onClick?: () => void }) {
  return <button className={`chip ${active ? "active" : ""}`} onClick={onClick}>{children}</button>;
}

function Progress({ value }: { value: number }) {
  return <div className="progress"><span style={{ width: `${value}%` }} /></div>;
}

function Avatar({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  return <div className={`avatar avatar-${size}`}><div className="avatar-head" /><div className="avatar-body" /></div>;
}

function Header({ title, back, go, dark = false }: { title?: string; back?: Screen; go: (s: Screen) => void; dark?: boolean }) {
  return <header className={`app-header ${dark ? "dark" : ""}`}>
    <div>{back ? <button className="icon-button" onClick={() => go(back)} aria-label="Voltar"><Icon name="arrow" /></button> : <Logo small />}</div>
    {title && <strong>{title}</strong>}
    <button className="avatar-button" onClick={() => go("profile")} aria-label="Abrir perfil"><Avatar size="sm" /></button>
  </header>;
}

function BottomNav({ current, go }: { current: Screen; go: (s: Screen) => void }) {
  const inCommunity = ["community", "challenge", "createChallenge"].includes(current);
  return <nav className="bottom-nav">
    <button className={!inCommunity ? "active" : ""} onClick={() => go("today")}><Icon name="home" /><span>Treino</span></button>
    <button className={inCommunity ? "active" : ""} onClick={() => go("community")}><Icon name="community" /><span>Comunidade</span></button>
  </nav>;
}

function Shell({ children, nav = false, current, go, className = "" }: { children: ReactNode; nav?: boolean; current: Screen; go: (s: Screen) => void; className?: string }) {
  return <div className={`phone-screen ${nav ? "with-nav" : ""} ${className}`}>{children}{nav && <BottomNav current={current} go={go} />}</div>;
}

function Welcome({ go }: { go: (s: Screen) => void }) {
  return <Shell current="welcome" go={go} className="welcome">
    <div className="welcome-art">
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      <div className="rep-stack"><b>1</b><b>2</b><b>3</b><span>REP</span></div>
    </div>
    <div className="welcome-content">
      <Logo />
      <h1>Sua evolução,<br /><em>uma rep de cada vez.</em></h1>
      <p>Treine com autonomia, acompanhe sua consistência e celebre cada conquista.</p>
      <div className="action-stack">
        <Button onClick={() => go("auth")}>Criar conta</Button>
        <Button variant="secondary" onClick={() => go("auth")}>Entrar</Button>
        <button className="text-link" onClick={() => go("preferences")}>Experimentar sem conta <Icon name="chevron" size={16} /></button>
      </div>
      <small>Ao continuar, você aceita os <u>Termos de uso</u> e o <u>Aviso de responsabilidade</u>.</small>
    </div>
  </Shell>;
}

function Auth({ go }: { go: (s: Screen) => void }) {
  const [signup, setSignup] = useState(true);
  const [error, setError] = useState(false);
  return <Shell current="auth" go={go}>
    <Header back="welcome" go={go} />
    <main className="page auth-page">
      <span className="eyebrow">COMECE AGORA</span>
      <h1>{signup ? "Crie sua conta" : "Bom ter você de volta"}</h1>
      <p className="muted">{signup ? "Guarde sua evolução e treine no seu ritmo." : "Continue de onde você parou."}</p>
      <div className="social-row">
        <button className="social"><Icon name="google" /> Google</button>
        <button className="social"><Icon name="apple" /> Apple</button>
      </div>
      <div className="divider"><span>ou continue com e-mail</span></div>
      <label className="field"><span>E-mail</span><input type="email" placeholder="voce@email.com" /></label>
      <label className={`field ${error ? "field-error" : ""}`}><span>Senha</span><input type="password" placeholder="Mínimo de 8 caracteres" />{error && <small>Revise sua senha e tente novamente.</small>}</label>
      <Button onClick={() => error ? go("onboarding") : setError(true)}>{signup ? "Criar minha conta" : "Entrar"}</Button>
      <p className="switch-auth">{signup ? "Já tem uma conta?" : "Ainda não tem conta?"} <button onClick={() => { setSignup(!signup); setError(false); }}>{signup ? "Entrar" : "Criar conta"}</button></p>
    </main>
  </Shell>;
}

function Onboarding({ go }: { go: (s: Screen) => void }) {
  const [step, setStep] = useState(1);
  return <Shell current="onboarding" go={go}>
    <Header back={step > 1 ? undefined : "auth"} go={go} />
    <main className="page onboarding">
      <div className="step-line"><span>Seu perfil</span><b>{step} de 4</b></div><Progress value={step * 25} />
      {step === 1 && <section className="question"><span className="question-number">01</span><h1>Como podemos<br />chamar você?</h1><p>Esse é o nome que vai aparecer no seu perfil.</p><label className="field big"><span>Seu nome</span><input autoFocus placeholder="Ex.: Marina" /></label></section>}
      {step === 2 && <section className="question"><span className="question-number">02</span><h1>Qual é a sua idade?</h1><p>Isso ajuda a personalizar sua experiência.</p><label className="field big"><span>Idade</span><input type="number" defaultValue="28" /></label></section>}
      {step === 3 && <section className="question"><span className="question-number">03</span><h1>Como você se identifica?</h1><p>Escolha a opção que fizer mais sentido.</p><div className="choice-list"><Chip active>Feminino</Chip><Chip>Masculino</Chip><Chip>Não binário</Chip><Chip>Prefiro não informar</Chip></div></section>}
      {step === 4 && <section className="question"><span className="question-number">04</span><h1>Você já treina?</h1><p>Não existe resposta certa. O treino começa no seu momento.</p><div className="choice-cards"><button className="choice-card active"><Icon name="spark" /><span><b>Estou começando</b><small>Quero aprender o básico</small></span><Icon name="check" /></button><button className="choice-card"><Icon name="trend" /><span><b>Já treino</b><small>Quero mais consistência</small></span><Icon name="chevron" /></button></div></section>}
      <div className="page-footer">
        <Button onClick={() => step < 4 ? setStep(step + 1) : go("preferences")}>{step < 4 ? "Continuar" : "Vamos montar seu treino"}</Button>
        {step === 4 && <Button variant="ghost" onClick={() => go("today")}>Pular por agora</Button>}
      </div>
    </main>
  </Shell>;
}

function Preferences({ go }: { go: (s: Screen) => void }) {
  const [stage, setStage] = useState(0);
  const content = [
    { title: "Qual é o seu objetivo?", sub: "Você pode mudar isso depois.", options: ["Ganhar força", "Criar consistência", "Ganhar massa", "Melhorar condicionamento"] },
    { title: "Como cabe na sua rotina?", sub: "Uma meta realista é uma meta sustentável.", options: ["2 dias por semana", "3 dias por semana", "4 dias por semana", "5+ dias por semana"] },
    { title: "Onde você vai treinar?", sub: "Vamos mostrar apenas exercícios possíveis.", options: ["Academia completa", "Academia do prédio", "Em casa", "Ao ar livre"] },
  ][stage];
  return <Shell current="preferences" go={go}>
    <Header back={stage ? undefined : "onboarding"} go={go} />
    <main className="page preference-page">
      <div className="step-line"><span>Preferências</span><b>{stage + 1} de 3</b></div><Progress value={(stage + 1) * 33.3} />
      <span className="eyebrow">SEU TREINO, SUAS REGRAS</span>
      <h1>{content.title}</h1><p className="muted">{content.sub}</p>
      <div className="option-grid">{content.options.map((o, i) => <button key={o} className={`option-card ${i === 0 ? "active" : ""}`}><span className="option-icon"><Icon name={["target", "calendar", "home"][stage] as IconName} /></span><b>{o}</b>{i === 0 && <Icon name="check" size={18} />}</button>)}</div>
      {stage === 1 && <div className="time-select"><span>Tempo por treino</span><div><Chip>30 min</Chip><Chip active>45 min</Chip><Chip>60 min</Chip></div></div>}
      {stage === 2 && <div className="equipment"><span>Equipamentos disponíveis</span><div><Chip active>Máquinas</Chip><Chip active>Halteres</Chip><Chip active>Banco</Chip><Chip>Barras</Chip></div></div>}
      <div className="page-footer"><Button onClick={() => stage < 2 ? setStage(stage + 1) : go("structure")}>Continuar</Button></div>
    </main>
  </Shell>;
}

function Structure({ go }: { go: (s: Screen) => void }) {
  return <Shell current="structure" go={go}>
    <Header title="Estrutura do treino" back="preferences" go={go} />
    <main className="page">
      <span className="eyebrow">ESCOLHA LIVRE</span><h1>Como você prefere dividir?</h1><p className="muted">As opções combinam com sua rotina de 3 dias.</p>
      <div className="structure-list">
        <button className="structure-card active"><span className="recommended">MAIS EQUILIBRADO</span><div><b>Corpo inteiro</b><small>Todos os grupos em cada sessão</small></div><div className="days"><i>SEG</i><i>QUA</i><i>SEX</i></div><span className="radio checked"><Icon name="check" size={14} /></span></button>
        <button className="structure-card"><div><b>Superior / Inferior</b><small>Alterna o foco a cada sessão</small></div><div className="days"><i>A</i><i>B</i><i>A</i></div><span className="radio" /></button>
        <button className="structure-card"><div><b>Empurrar / Puxar / Pernas</b><small>Um padrão por sessão</small></div><div className="days"><i>P</i><i>P</i><i>L</i></div><span className="radio" /></button>
      </div>
      <div className="info-note"><Icon name="spark" /><span><b>Você está no controle.</b> Nenhuma opção é obrigatória e tudo pode ser editado.</span></div>
      <div className="page-footer"><Button onClick={() => go("exercises")}>Continuar</Button></div>
    </main>
  </Shell>;
}

const workoutExercises = [
  { group: "AGACHAR", name: "Agachamento livre", detail: "Barra • 3 séries" },
  { group: "EMPURRAR", name: "Supino com halteres", detail: "Halteres • 3 séries" },
  { group: "PUXAR", name: "Remada sentada", detail: "Máquina • 3 séries" },
  { group: "QUADRIL", name: "Levantamento romeno", detail: "Halteres • 3 séries" },
];

function Exercises({ go }: { go: (s: Screen) => void }) {
  return <Shell current="exercises" go={go}>
    <Header title="Escolha os exercícios" back="structure" go={go} />
    <main className="page exercises-page">
      <div className="session-title"><div><span className="eyebrow">TREINO A</span><h1>Corpo inteiro</h1></div><span className="count-badge">4 exercícios</span></div>
      <p className="muted">Um movimento de cada vez. Toque para substituir.</p>
      <div className="exercise-list">{workoutExercises.map((ex, i) => <button className="exercise-row" key={ex.name}><span className="drag">⠿</span><span className="exercise-number">0{i + 1}</span><span className="exercise-copy"><small>{ex.group}</small><b>{ex.name}</b><em>{ex.detail}</em></span><Icon name="repeat" size={18} /></button>)}</div>
      <button className="add-row"><Icon name="plus" /> Adicionar exercício</button>
      <div className="page-footer"><Button onClick={() => go("review")}>Revisar treino</Button></div>
    </main>
  </Shell>;
}

function Review({ go }: { go: (s: Screen) => void }) {
  return <Shell current="review" go={go}>
    <Header title="Revisar treino" back="exercises" go={go} />
    <main className="page review-page">
      <div className="review-hero"><span className="eyebrow">SEU NOVO PROGRAMA</span><h1>Base & Consistência</h1><p>3 dias por semana • 45 min</p><div className="week"><b>SEG<span>A</span></b><b>TER<i /></b><b>QUA<span>B</span></b><b>QUI<i /></b><b>SEX<span>A</span></b></div></div>
      <div className="review-section"><div className="section-heading"><span><small>TREINO A</small><b>Corpo inteiro</b></span><button><Icon name="edit" size={17} /> Editar</button></div>{workoutExercises.slice(0, 3).map((e, i) => <div className="mini-exercise" key={e.name}><span>{i + 1}</span><div><b>{e.name}</b><small>{e.detail}</small></div></div>)}</div>
      <div className="edit-note"><Icon name="repeat" /><span><b>Ajuste quando precisar.</b> Trocar exercícios ou séries não consome uma nova montagem.</span></div>
      <div className="page-footer"><Button icon="check" onClick={() => go("today")}>Salvar meu treino</Button></div>
    </main>
  </Shell>;
}

function Today({ go }: { go: (s: Screen) => void }) {
  return <Shell current="today" go={go} nav>
    <Header go={go} />
    <main className="page today-page">
      <p className="hello">Bom dia, Marina</p><h1>Pronta para a<br /><em>próxima rep?</em></h1>
      <section className="today-card">
        <div className="today-art"><div className="art-line" /><span><Icon name="bolt" size={30} /></span><small>TERÇA • 14 MAI</small></div>
        <div className="today-details"><span className="eyebrow">TREINO DO DIA</span><h2>Corpo inteiro A</h2><p><Icon name="clock" size={16} /> 45 min <i /> 4 exercícios</p>
          <div className="exercise-preview">{workoutExercises.slice(0, 3).map((e, i) => <div key={e.name}><span>0{i + 1}</span><b>{e.name}</b><small>3 séries</small></div>)}</div>
          <Button icon="bolt" onClick={() => go("exercise")}>Começar treino</Button>
        </div>
      </section>
      <div className="consistency"><div><Icon name="fire" /><span><b>3 semanas</b><small>de consistência</small></span></div><div className="week-dots"><i className="done">S</i><i>T</i><i className="today">Q</i><i>Q</i><i>S</i></div></div>
    </main>
  </Shell>;
}

function Exercise({ go }: { go: (s: Screen) => void }) {
  const [sets, setSets] = useState([true, true, false]);
  const toggleSet = (index: number) => setSets(sets.map((v, i) => i === index ? !v : v));
  return <Shell current="exercise" go={go} className="exercise-screen">
    <header className="workout-header"><button className="icon-button" onClick={() => go("today")}><Icon name="arrow" /></button><div><span>TREINO A</span><b>2 de 4 exercícios</b></div><button className="more">•••</button></header>
    <Progress value={42} />
    <main className="page">
      <div className="exercise-title"><span className="movement-tag">EMPURRAR</span><h1>Supino com<br />halteres</h1><button className="swap"><Icon name="repeat" /> Substituir</button></div>
      <div className="comparison"><span><Icon name="trend" /></span><div><small>ÚLTIMO TREINO</small><b>20 kg × 10 reps</b></div><Icon name="chevron" /></div>
      <div className="set-table"><div className="set-head"><span>SÉRIE</span><span>CARGA (KG)</span><span>REPS</span><span /></div>{sets.map((done, i) => <div className={`set-row ${done ? "complete" : ""}`} key={i}><b>{i + 1}</b><label><input defaultValue={i < 2 ? "22" : "20"} inputMode="decimal" /></label><label><input defaultValue="10" inputMode="numeric" /></label><button onClick={() => toggleSet(i)} aria-label={`Concluir série ${i + 1}`}><Icon name="check" /></button></div>)}</div>
      <div className="today-compare"><Icon name="spark" /><span><b>Hoje: 22 kg × 10</b><small>2 kg a mais que no último treino</small></span></div>
      <Button variant="secondary" icon="clock" onClick={() => go("rest")}>Iniciar descanso</Button>
      <div className="workout-actions"><button><Icon name="pause" /> Pausar</button><button onClick={() => go("summary")}><Icon name="check" /> Finalizar</button></div>
    </main>
  </Shell>;
}

function Rest({ go }: { go: (s: Screen) => void }) {
  const [seconds, setSeconds] = useState(47);
  return <Shell current="rest" go={go} className="rest-screen">
    <div className="rest-backdrop"><div className="ghost-title">Supino com<br />halteres</div></div>
    <div className="rest-sheet">
      <div className="sheet-handle" /><span className="eyebrow">DESCANSO ATIVO</span><h1>00:{String(seconds).padStart(2, "0")}</h1>
      <div className="timer-ring"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="53" /><circle className="timer-value" cx="60" cy="60" r="53" /></svg><button onClick={() => setSeconds(seconds ? 0 : 47)}><Icon name={seconds ? "pause" : "bolt"} size={28} /></button></div>
      <p>Respire. Sua próxima série está pronta.</p>
      <div className="timer-add"><Chip onClick={() => setSeconds(Math.max(0, seconds - 15))}>− 15s</Chip><Chip onClick={() => setSeconds(seconds + 15)}>+ 15s</Chip></div>
      <Button onClick={() => go("exercise")}>Voltar ao exercício</Button><Button variant="ghost" onClick={() => go("exercise")}>Encerrar descanso</Button>
    </div>
  </Shell>;
}

function Summary({ go }: { go: (s: Screen) => void }) {
  return <Shell current="summary" go={go}>
    <main className="summary-page">
      <div className="summary-top"><div className="confetti c1" /><div className="confetti c2" /><div className="medal"><Icon name="medal" size={42} /></div><span className="eyebrow">TREINO CONCLUÍDO</span><h1>Mais uma rep<br />na sua história.</h1><p>Corpo inteiro A • 42 min</p></div>
      <div className="summary-content">
        <div className="rep-milestone"><span>REP</span><b>012</b><small>Seu 12º treino concluído</small></div>
        <div className="metric-grid"><div><span><Icon name="clock" /></span><b>42 min</b><small>Duração</small></div><div><span><Icon name="bar" /></span><b>3.240 kg</b><small>Volume</small></div><div className="highlight"><span><Icon name="trend" /></span><b>+8%</b><small>vs. sessão anterior</small></div></div>
        <div className="record"><span><Icon name="spark" /></span><div><small>NOVO RECORDE</small><b>Supino com halteres</b><p>22 kg × 10 repetições</p></div></div>
        <Button icon="share" onClick={() => go("share")}>Compartilhar conquista</Button><Button variant="secondary" onClick={() => go("progress")}>Ver minha evolução</Button><Button variant="ghost" onClick={() => go("today")}>Voltar ao início</Button>
      </div>
    </main>
  </Shell>;
}

function ShareCard({ go }: { go: (s: Screen) => void }) {
  const [saved, setSaved] = useState(false);
  return <Shell current="share" go={go} className="share-page">
    <Header title="Compartilhar" back="summary" go={go} dark />
    <main className="page">
      <div className="story-card">
        <div className="story-glow" /><Logo small />
        <span className="story-label">NOVO RECORDE PESSOAL</span><h1>22<span>kg</span></h1><h2>Supino com halteres</h2><p>10 REPETIÇÕES</p>
        <div className="story-divider" /><div className="story-meta"><span><b>REP 012</b><small>Treino concluído</small></span><span><b>42 MIN</b><small>Duração</small></span></div>
        <blockquote>“Consistência também<br />é uma forma de força.”</blockquote>
        <div className="story-signature">SUA EVOLUÇÃO, UMA REP DE CADA VEZ.</div>
      </div>
      {saved && <div className="toast"><Icon name="check" /> Imagem salva na galeria</div>}
      <Button icon="share" onClick={() => setSaved(true)}>Compartilhar</Button><Button variant="secondary" onClick={() => setSaved(true)}>Salvar imagem</Button>
    </main>
  </Shell>;
}

function ProgressScreen({ go }: { go: (s: Screen) => void }) {
  return <Shell current="progress" go={go} nav>
    <Header title="Sua evolução" back="profile" go={go} />
    <main className="page progress-page">
      <div className="period-chips"><Chip>4 sem</Chip><Chip active>3 meses</Chip><Chip>Este ano</Chip></div>
      <div className="progress-hero"><span className="eyebrow">CONSISTÊNCIA</span><h1>12 treinos</h1><p><Icon name="trend" /> 3 a mais que no período anterior</p><div className="bar-chart">{[35, 56, 42, 70, 64, 82, 95].map((h, i) => <i key={i} style={{ height: `${h}%` }} className={i === 6 ? "latest" : ""} />)}</div><div className="chart-labels"><span>FEV</span><span>MAR</span><span>ABR</span><span>MAI</span></div></div>
      <div className="metric-grid progress-metrics"><div><span><Icon name="fire" /></span><b>3 semanas</b><small>Maior sequência</small></div><div><span><Icon name="clock" /></span><b>8h 24min</b><small>Tempo de treino</small></div></div>
      <section className="load-card"><div className="section-heading"><span><small>EXERCÍCIO</small><b>Supino com halteres</b></span><span className="positive">+22%</span></div><div className="line-chart"><svg viewBox="0 0 330 100" preserveAspectRatio="none"><path d="M2 86 C45 82,55 70,90 71 S140 60,170 58 S210 54,235 40 S280 35,328 13" /><path className="line-fill" d="M2 86 C45 82,55 70,90 71 S140 60,170 58 S210 54,235 40 S280 35,328 13 L328 100 L2 100Z" /></svg></div><div className="load-stats"><span><small>INÍCIO</small><b>18 kg</b></span><span><small>ATUAL</small><b>22 kg</b></span></div></section>
      <section><div className="section-heading"><span><small>CONQUISTAS RECENTES</small><b>Seus marcos</b></span><button>Ver todas</button></div><div className="achievement-row"><div><Icon name="fire" /><span><b>Em ritmo</b><small>3 semanas</small></span></div><div><Icon name="medal" /><span><b>REP 010</b><small>10 treinos</small></span></div></div></section>
    </main>
  </Shell>;
}

function Community({ go }: { go: (s: Screen) => void }) {
  const [liked, setLiked] = useState(false);
  return <Shell current="community" go={go} nav>
    <Header go={go} />
    <main className="page community-page">
      <div className="title-row"><div><span className="eyebrow">JUNTOS, REP A REP</span><h1>Comunidade</h1></div><button className="round-add" onClick={() => go("createChallenge")}><Icon name="plus" /></button></div>
      <div className="challenge-banner" onClick={() => go("challenge")}><div><span className="eyebrow">DESAFIO OFICIAL</span><h2>Movimento de Maio</h2><p>7.842 pessoas em movimento</p><Progress value={68} /></div><span className="banner-medal"><Icon name="medal" /></span><Icon name="chevron" /></div>
      <div className="feed-filter"><Chip active>Para você</Chip><Chip>Seguindo</Chip><Chip>Desafios</Chip></div>
      <article className="post-card"><div className="post-author"><Avatar /><span><b>Joana Lima</b><small>há 18 min • Treino concluído</small></span><button>•••</button></div><p>Mais uma manhã escolhendo a consistência. REP 048!</p><div className="post-visual"><div className="post-number"><small>TREINO CONCLUÍDO</small><b>REP<br /><em>048</em></b><span>SUPERIOR A • 51 MIN</span></div></div><div className="post-actions"><button className={liked ? "liked" : ""} onClick={() => setLiked(!liked)}><Icon name="heart" /> {liked ? 128 : 127}</button><button><Icon name="share" /> Compartilhar</button><button><Icon name="user" /></button></div></article>
      <article className="post-card compact"><div className="post-author"><Avatar /><span><b>Rafael Nunes</b><small>há 1 h • Conquista</small></span></div><div className="achievement-post"><span><Icon name="medal" size={30} /></span><div><small>CONQUISTA DESBLOQUEADA</small><b>Primeira semana completa</b><p>3 de 3 treinos concluídos.</p></div></div><div className="post-actions"><button><Icon name="heart" /> 64</button><button><Icon name="share" /> Compartilhar</button></div></article>
    </main>
  </Shell>;
}

function Challenge({ go }: { go: (s: Screen) => void }) {
  return <Shell current="challenge" go={go} nav>
    <Header back="community" go={go} />
    <main className="challenge-page">
      <div className="challenge-hero"><div className="challenge-orbit" /><span className="official"><Icon name="check" /> DESAFIO OFICIAL</span><div className="big-medal"><Icon name="medal" size={50} /></div><h1>Movimento<br />de Maio</h1><p>12 treinos em 31 dias. No seu ritmo,<br />mas nunca sozinho.</p><div className="challenge-dates"><span><small>INÍCIO</small><b>01 MAI</b></span><i /><span><small>FIM</small><b>31 MAI</b></span></div></div>
      <div className="page challenge-content">
        <section className="your-progress"><div className="section-heading"><span><small>SEU PROGRESSO</small><b>8 de 12 treinos</b></span><b>67%</b></div><Progress value={67} /><div className="check-grid">{Array.from({ length: 12 }).map((_, i) => <span className={i < 8 ? "done" : ""} key={i}>{i < 8 ? <Icon name="check" size={15} /> : i + 1}</span>)}</div></section>
        <section className="collective"><div><span className="avatar-pile"><Avatar size="sm" /><Avatar size="sm" /><Avatar size="sm" /></span><b>7.842 participantes</b></div><p>Juntos, já concluímos <strong>68.219 treinos</strong></p><Progress value={78} /></section>
        <section className="prize"><span><Icon name="medal" /></span><div><small>CONQUISTA OFICIAL</small><b>Medalha Movimento</b><p>Complete o desafio para desbloquear.</p></div><Icon name="lock" /></section>
        <Button variant="secondary" icon="share">Convidar amigos</Button>
      </div>
    </main>
  </Shell>;
}

function CreateChallenge({ go }: { go: (s: Screen) => void }) {
  const [created, setCreated] = useState(false);
  if (created) return <Shell current="createChallenge" go={go}><main className="success-state"><div className="success-icon"><Icon name="check" size={36} /></div><span className="eyebrow">DESAFIO CRIADO</span><h1>12 treinos<br />juntos.</h1><p>Seu desafio está pronto. Agora é só chamar a turma e começar.</p><div className="invite-code"><small>CÓDIGO DO CONVITE</small><b>REP12MAI</b></div><Button icon="share">Convidar participantes</Button><Button variant="secondary" onClick={() => go("community")}>Ver desafio</Button></main></Shell>;
  return <Shell current="createChallenge" go={go}>
    <Header title="Criar desafio" back="community" go={go} />
    <main className="page create-page">
      <span className="eyebrow">FAÇA JUNTO</span><h1>Qual será o próximo marco?</h1><p className="muted">Crie uma meta simples e convide quem fortalece sua jornada.</p>
      <div className="template-row"><span>Comece com um modelo</span><div><button><Icon name="fire" /><b>12 treinos</b><small>em 30 dias</small></button><button><Icon name="calendar" /><b>3× semana</b><small>por 4 semanas</small></button></div></div>
      <label className="field"><span>Nome do desafio</span><input defaultValue="12 treinos juntos" /></label>
      <label className="field"><span>Objetivo</span><input defaultValue="Completar 12 treinos" /></label>
      <div className="field-pair"><label className="field"><span>Começa</span><input defaultValue="15 mai" /></label><label className="field"><span>Termina</span><input defaultValue="15 jun" /></label></div>
      <label className="field"><span>Participantes</span><div className="fake-input"><Icon name="user" /> Você + até 9 pessoas <Icon name="plus" /></div></label>
      <div className="plan-limit"><Icon name="bolt" /><span><b>Seu plano Free</b><small>1 desafio ativo • até 10 participantes</small></span><button onClick={() => go("plans")}>Ver planos</button></div>
      <div className="page-footer"><Button onClick={() => setCreated(true)}>Criar desafio</Button></div>
    </main>
  </Shell>;
}

function Profile({ go }: { go: (s: Screen) => void }) {
  return <Shell current="profile" go={go} nav>
    <main className="profile-page">
      <div className="profile-cover"><button className="profile-settings" onClick={() => go("settings")}><Icon name="gear" /></button><div className="cover-rings" /><span className="cover-rep">REP<br /><b>012</b></span></div>
      <div className="profile-avatar"><Avatar size="lg" /><button onClick={() => go("customize")}><Icon name="edit" size={15} /></button></div>
      <div className="profile-copy"><span className="creator"><Icon name="spark" size={14} /> CRIADOR</span><h1>Marina Alves</h1><p>Treinando consistência, uma rep de cada vez.</p><small>São Paulo, SP • Desde fev. 2025</small></div>
      <div className="profile-stats"><span><b>12</b><small>Treinos</small></span><span><b>4</b><small>Conquistas</small></span><span><b>2</b><small>Desafios</small></span></div>
      <div className="profile-links">
        <button onClick={() => go("progress")}><span><i><Icon name="trend" /></i><b>Evolução<small>Veja sua consistência e cargas</small></b></span><Icon name="chevron" /></button>
        <button onClick={() => go("challenge")}><span><i><Icon name="target" /></i><b>Meus desafios<small>1 desafio em andamento</small></b></span><Icon name="chevron" /></button>
        <button onClick={() => go("customize")}><span><i><Icon name="spark" /></i><b>Personalizar perfil<small>Retrato, moldura e cenário</small></b></span><Icon name="chevron" /></button>
        <button onClick={() => go("plans")}><span><i><Icon name="crown" /></i><b>Planos<small>Você está no Free</small></b></span><Icon name="chevron" /></button>
      </div>
      <section className="profile-achievements"><div className="section-heading"><span><small>CONQUISTAS</small><b>Marcos recentes</b></span><button>Ver todas</button></div><div><span><Icon name="medal" /><small>REP 010</small></span><span><Icon name="fire" /><small>3 semanas</small></span><span className="locked"><Icon name="lock" /><small>Em breve</small></span></div></section>
    </main>
  </Shell>;
}

function Customize({ go }: { go: (s: Screen) => void }) {
  const [tab, setTab] = useState("Cenários");
  const [selected, setSelected] = useState(0);
  return <Shell current="customize" go={go}>
    <Header title="Personalizar perfil" back="profile" go={go} />
    <main className="customize-page">
      <div className={`profile-preview style-${selected}`}><div className="preview-rings" /><Avatar size="lg" /><div><b>Marina Alves</b><small>REP 012 • 4 conquistas</small></div></div>
      <div className="custom-tabs">{["Retratos", "Molduras", "Cenários", "Itens"].map(t => <button className={tab === t ? "active" : ""} onClick={() => setTab(t)} key={t}>{t}</button>)}</div>
      <div className="catalog page"><div className="catalog-title"><span><b>{tab}</b><small>Toque para visualizar</small></span><span className="premium-tag"><Icon name="crown" size={13} /> PREMIUM</span></div><div className="catalog-grid">{[0, 1, 2, 3, 4, 5].map(i => <button className={`${selected === i ? "selected" : ""} item-${i}`} onClick={() => setSelected(i)} key={i}><div className="catalog-pattern"><i /><i /></div>{i > 2 && <span className="lock-tag"><Icon name="lock" size={13} /></span>}{selected === i && <span className="selected-tag"><Icon name="check" size={13} /></span>}</button>)}</div>
      {selected > 2 && <div className="premium-preview"><Icon name="crown" /><span><b>Prévia Premium</b><small>Explore estilos exclusivos sem alterar seu perfil atual.</small></span><button onClick={() => go("plans")}>Conhecer</button></div>}</div>
      <div className="sticky-action"><Button onClick={() => go("profile")}>Aplicar personalização</Button></div>
    </main>
  </Shell>;
}

function Plans({ go }: { go: (s: Screen) => void }) {
  const [plan, setPlan] = useState(1);
  const data = [
    { name: "Free", price: "R$ 0", desc: "O essencial para manter o ritmo.", items: ["Registre treinos ilimitados", "Acompanhe sua evolução", "4 montagens por mês", "1 desafio com até 10 pessoas"] },
    { name: "Premium", price: "R$ 19,90", desc: "Mais liberdade para evoluir.", items: ["Tudo do Free", "Montagens ilimitadas", "Personalização completa", "Desafios e métricas avançadas"] },
    { name: "Creator Pro", price: "R$ 49,90", desc: "Para quem move uma comunidade.", items: ["Tudo do Premium", "Até 50 participantes", "Perfil com selo Criador", "Gestão de alunos e grupos"] },
  ][plan];
  return <Shell current="plans" go={go}>
    <Header title="Planos" back="profile" go={go} />
    <main className="page plans-page">
      <span className="eyebrow">ESCOLHA SEU RITMO</span><h1>O essencial é<br />continuar evoluindo.</h1><p className="muted">As funções principais sempre estarão disponíveis.</p>
      <div className="plan-tabs">{["Free", "Premium", "Creator"].map((p, i) => <button className={plan === i ? "active" : ""} onClick={() => setPlan(i)} key={p}>{p}{i === 1 && <span>POPULAR</span>}</button>)}</div>
      <div className={`plan-card plan-${plan}`}><div className="plan-head"><span>{plan > 0 && <Icon name={plan === 1 ? "crown" : "spark"} />}</span><small>{plan === 0 ? "SEU PLANO ATUAL" : "PLANO MENSAL"}</small><h2>{data.name}</h2><p>{data.desc}</p><b>{data.price}<small>{plan > 0 ? " / mês" : " para sempre"}</small></b></div><div className="plan-features">{data.items.map(item => <div key={item}><span><Icon name="check" size={15} /></span>{item}</div>)}</div>{plan === 0 ? <Button variant="secondary">Plano atual</Button> : <Button>Experimentar por 7 dias</Button>}</div>
      <p className="plan-disclaimer">Protótipo visual — nenhuma cobrança será realizada.</p>
      <div className="limit-summary"><div><span><Icon name="repeat" /></span><b>Montagens neste mês<small>3 de 4 utilizadas</small></b></div><strong>1 restante</strong><Progress value={75} /><p>Edições no seu treino atual não consomem montagens.</p></div>
    </main>
  </Shell>;
}

function Toggle({ on = true }: { on?: boolean }) {
  const [active, setActive] = useState(on);
  return <button className={`toggle ${active ? "on" : ""}`} onClick={() => setActive(!active)}><span /></button>;
}

function Settings({ go }: { go: (s: Screen) => void }) {
  return <Shell current="settings" go={go}>
    <Header title="Configurações" back="profile" go={go} />
    <main className="page settings-page">
      <section><span className="settings-label">PREFERÊNCIAS</span><div className="settings-group"><div><span><i><Icon name="bell" /></i><b>Notificações de treino<small>Lembretes e sequência semanal</small></b></span><Toggle /></div><div><span><i><Icon name="community" /></i><b>Atividade da comunidade<small>Conquistas e desafios de amigos</small></b></span><Toggle on={false} /></div></div></section>
      <section><span className="settings-label">CONTA E PRIVACIDADE</span><div className="settings-group links"><button><span><i><Icon name="user" /></i><b>Dados da conta</b></span><Icon name="chevron" /></button><button><span><i><Icon name="lock" /></i><b>Privacidade</b></span><Icon name="chevron" /></button><button onClick={() => go("plans")}><span><i><Icon name="crown" /></i><b>Plano<small>Free</small></b></span><Icon name="chevron" /></button></div></section>
      <section><span className="settings-label">SOBRE</span><div className="settings-group links"><button><b>Termos de uso</b><Icon name="chevron" /></button><button><b>Política de privacidade</b><Icon name="chevron" /></button><button><b>Aviso de responsabilidade</b><Icon name="chevron" /></button></div></section>
      <div className="responsibility"><Icon name="spark" /><div><b>Treine com consciência.</b><p>O Rep a Rep ajuda você a organizar e acompanhar treinos, mas não substitui a orientação individualizada de profissionais de educação física ou saúde.</p></div></div>
      <Button variant="danger">Sair da conta</Button><p className="version">Rep a Rep • versão 0.1 MVP</p>
    </main>
  </Shell>;
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [history, setHistory] = useState<Screen[]>([]);
  const go = (next: Screen) => { setHistory([...history, screen]); setScreen(next); window.scrollTo(0, 0); };
  const activeIndex = screens.findIndex(s => s.id === screen);
  const render = () => {
    const props = { go };
    switch (screen) {
      case "welcome": return <Welcome {...props} />;
      case "auth": return <Auth {...props} />;
      case "onboarding": return <Onboarding {...props} />;
      case "preferences": return <Preferences {...props} />;
      case "structure": return <Structure {...props} />;
      case "exercises": return <Exercises {...props} />;
      case "review": return <Review {...props} />;
      case "today": return <Today {...props} />;
      case "exercise": return <Exercise {...props} />;
      case "rest": return <Rest {...props} />;
      case "summary": return <Summary {...props} />;
      case "share": return <ShareCard {...props} />;
      case "progress": return <ProgressScreen {...props} />;
      case "community": return <Community {...props} />;
      case "challenge": return <Challenge {...props} />;
      case "createChallenge": return <CreateChallenge {...props} />;
      case "profile": return <Profile {...props} />;
      case "customize": return <Customize {...props} />;
      case "plans": return <Plans {...props} />;
      case "settings": return <Settings {...props} />;
    }
  };
  return <div className="prototype-shell">
    <aside className="screen-index">
      <div className="index-head"><Logo /><p>Protótipo navegável</p><span>20 telas • MVP</span></div>
      <div className="index-list">{screens.map((item, i) => <button className={screen === item.id ? "active" : ""} onClick={() => go(item.id)} key={item.id}><span>{String(i + 1).padStart(2, "0")}</span>{item.label}{screen === item.id && <i />}</button>)}</div>
      <div className="index-foot"><span><i /> Tela ativa</span><small>Use o índice ou navegue pelo app.</small></div>
    </aside>
    <section className="device-stage">
      <div className="stage-meta"><span><b>{String(activeIndex + 1).padStart(2, "0")}</b> / 20</span><strong>{screens[activeIndex].label}</strong></div>
      <div className="device">{render()}</div>
      <div className="stage-controls"><button disabled={!history.length} onClick={() => { const prev = history.at(-1); if (prev) { setScreen(prev); setHistory(history.slice(0, -1)); } }}><Icon name="arrow" size={16} /> Voltar</button><span>390 × 844</span></div>
    </section>
  </div>;
}
