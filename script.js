  // Variables
  const screen1 = document.querySelector(".screen1");
  const screen2 = document.querySelector(".screen2");
  const cookie1 = document.querySelector(".cookie1");
  const buttonReset = document.querySelector("#buttonReset");
  let fortunePhrases = [
    "A primeira regra é manter o espírito tranquilo. A segunda é enfrentar as coisas de frente e tomá-las pelo que realmente são.",
    "Nada de desgosto, nem de desânimo; se acabas de fracassar, recomeça.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "O mundo seria um deserto se todo dia fizesse sol, precisamos de chuva para que as flores possam crescer",
    "A nossa vida é aquilo que os nossos pensamentos fizerem dela.",
    "Nem ganhar, nem perder, mas procurar evoluir",
    "Aquele que se recusa a receber orientação odeia a si mesmo, mas quem escuta a repreensão adiquire juízo.",
    "Quem procura ter sabedoria ama a sua vida e quem age com inteligência encontra a felicidade",
    "O melhor modo de vingar-se de um inimigo é não se assemelhar a ele.",
    "Não escolher também é escolher.",
    "Muitas vezes erra não apenas quem faz, mas também quem deixa de fazer alguma coisa.",
    "A experiência é um troféu composto por todas as armas que nos feriram.",
    "Se você está sofrendo por coisas externas, não são elas que estão te perturbando, mas o seu próprio julgamento sobre elas. E está em seu poder anular este julgamento agora.",
    "Mudar de opinião e seguir quem te corrige é também o comportamento do homem livre.",
    "Tudo o que a sua mão encontrar para fazer, faça-o com todo o seu coração.",
    "O coração alegre aformoseia o rosto.",
    "Algumas amizades não duram nada, mas um verdadeiro amigo é mais chegado que um irmão.",
    "Quem é sábio procura aprender, mas os tolos estão satisfeito com a sua própria ignorância.",
    "O sábio esconde a sua sabedoria, o tolo anuncia a sua ignorância.",
    "Tudo neste mundo tem seu tempo, cada coisa tem sua ocasião.",
    "Lembre de Deus em tudo o que fizer, e ele lhe mostrará o caminho certo.",
    "Se você deixa o machado perder o corte e não o afia, terá de trabalhar muito mais. É mais inteligente planejar antes de agir.",
    "Quando a sabedoria entrar no teu coração e o conhecimento for agradável à tua alma, o bom conhecimento te guardará e a inteligência te conservará.",
    "Melhor é o pouco com justiça, do que tter muito de modo injusto",
    "Não diga sem pensar, o que pensa em dizer.",
    "Não desampares a sabedoria, e ela te guardará; ama-a, e ela te protegerá.",
    "Cada um se limita a viver o presente, que tem duração muito curta, sobre o futuro e o passado, um é incerto e o outro impenetrável.",
    "Não se alcança o sucesso imediatamente da noite para o dia, mas com o acúmulo de estudo, trabalho e conhecimento você fica cada vez mais próimo.",
    "Constância é a chave para se atingir um objetivo. Mantenha o foco, a determinação e tenha disciplina.",
    "Momentos ruins virão, o cansaço vai bater e muitas vezes motivação vai faltar, mas o que vai fazer você continuar é a sua disciplina pra alcançar o que almeja.",
    "Valorize as pequenas vitórias, pois cada passo, por menor que seja, é mais um que te deixa mais próximo do grande objetivo.",
    "Não pense em algo que deu errado como um fracasso, mas sim como um ensinamento que te mostra em que não errar novamente.",
    "Olho no objetivo, cabeça erguida, pés no chão e em movimento.",
    "Quem recusar ouvir o grito do pobre também gritará e não será ouvido.",
    "Quem é sábio edifica a sua casa; mas o tolo a derruba com as próprias mãos.",
    "Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as fontes da vida.",
    "O filho sábio dá alegria a seu pai, mas o tolo despreza a sua mãe.",
    "Quem responde antes de ouvir mostra que é tolo e passa vergonha.",
    "O temor do Senhor é o princípio do conhecimento, mas os insensatos desprezam a sabedoria e a disciplina.",
    "As grandes ideias surgem da observação dos pequenos detalhes",
    "Ser feliz é deixar de ser vítima dos problemas e se tornar um autor da própria história.",
    "Você pode ter defeitos, viver ansioso e ficar irritado algumas vezes, mas não se esqueça de que sua vida é a maior empresa do mundo. Só você pode evitar que ela vá à falência.",
    "Sábio é o ser humano que tem coragem de ir diante do espelho da sua alma para reconhecer seus erros e fracassos e utilizá-los para plantar as mais belas sementes no terreno de sua inteligência.",
    "Os problemas nunca vão desaparecer, mesmo na mais bela existência. Problemas existem para serem resolvidos, e não para perturbar-nos.",
    "A vaidade é o caminho mais curto para o paraíso da satisfação, porém, ela é, ao mesmo tempo, o solo onde a burrice melhor se desenvolve.",
    "O passado é uma cortina de vidro. Felizes os que observam o passado para poder caminhar no futuro.",
    "Quando somos abandonados pelo mundo, a solidão é superável; quando somos abandonados por nós mesmos, a solidão é quase incurável.",
    "Todos querem o perfume das flores, mas poucos sujam as suas mãos para cultivá-las.",
    "Os inimigos que não perdoamos dormirão em nossa cama e perturbarão o nosso sono.",
    "O maior líder é aquele que reconhece sua pequenez, extrai força de sua humildade e experiência da sua fragilidade.",
    "Uma pessoa inteligente aprende com os seus erros, uma pessoa sábia aprende com os erros dos outros.",
  ]
  let randomPhrase = fortunePhrases[Math.floor(Math.random() * fortunePhrases.length)];
  console.log(fortunePhrases.length);



  // Functions
  function toggleScreen () {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
  }

  function handleCookie1Click () {
    toggleScreen ();
    screen2.querySelector("#fortunePhrase").innerText = randomPhrase; 
  }

  function handleResetClick () {
    toggleScreen ();
    randomPhrase = fortunePhrases[Math.floor(Math.random() * fortunePhrases.length)];
  }

  function handleResetKeydown(enter) {
    if (enter.key == 'Enter' && screen1.classList.contains("hide")) {
      handleResetClick()
    }
  }

  // Events
  cookie1.addEventListener('click', handleCookie1Click);
  buttonReset.addEventListener('click', handleResetClick);
  document.addEventListener('keydown', handleResetKeydown);