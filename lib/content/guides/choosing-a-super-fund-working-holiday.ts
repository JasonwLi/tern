import type { Article } from "../types";

export const article: Article = {
  slug: "choosing-a-super-fund-working-holiday",
  kind: "guide",
  date: "2026-06-12",
  emoji: "🪺",
  accent: "bg-sky-300",
  readMinutes: 6,
  related: ["what-is-superannuation", "superannuation-refund-dasp"],
  sources: [
    {
      label: "Australian Taxation Office (ATO) — Choosing a super fund",
      url: "https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/choosing-a-super-fund",
    },
    {
      label: "Australian Taxation Office (ATO) — Stapled super funds for employers",
      url: "https://www.ato.gov.au/businesses-and-organisations/super-for-employers/setting-up-super-for-your-business/offer-employees-a-choice-of-super-fund/stapled-super-funds-for-employers",
    },
    {
      label: "Australian Taxation Office (ATO) — YourSuper comparison tool",
      url: "https://www.ato.gov.au/calculators-and-tools/super-yoursuper-comparison-tool",
    },
    {
      label: "Moneysmart (ASIC) — Choosing a super fund",
      url: "https://moneysmart.gov.au/how-super-works/choosing-a-super-fund",
    },
  ],
  i18n: {
    en: {
      title: "How to choose a super fund on a working holiday",
      description:
        "A working holiday maker's guide to picking an Australian super fund: the stapled fund rule, low fees, one account, and why it matters for your DASP refund.",
      excerpt:
        "Your employer pays 12% super into a fund for you. Choose well once and it follows you between jobs; choose badly and you're stuck with it. Here's the 60-second framework.",
      sections: [
        {
          paragraphs: [
            "When you start working in Australia, your employer pays [superannuation (\"super\")](~/blog/what-is-superannuation) into a fund on your behalf — currently 12% of your wages (the super guarantee rate for 2025-26). On a working holiday you might only be here a year or two, so it's tempting to ignore this entirely. But the fund you end up with on day one tends to stick with you — and for backpackers, the right choice is mostly about keeping fees low and keeping everything in one place.",
          ],
        },
        {
          heading: "Why fund choice matters more on a working holiday",
          paragraphs: [
            "For someone retiring in Australia, investment returns over decades are what matter most. You don't have decades — you have a short stay and a balance of a few thousand dollars. That flips the priorities completely. Over one or two years, fees and the number of accounts you hold matter far more than which fund posted the best return last year.",
            "It matters even more because of how the trip ends: when you leave Australia for good you reclaim your super through the [Departing Australia Superannuation Payment (DASP)](~/guides/superannuation-refund-dasp), which is taxed at 65% for working holiday visa holders. Every dollar lost to fees, or trapped in a forgotten duplicate account, is a dollar that erodes the 35% you actually get back. Minimising fees and consolidating to one fund is the whole game.",
          ],
        },
        {
          heading: "The 60-second decision framework",
          bullets: [
            "Pick ONE fund and use it for every job — give the same fund details to each new employer so your super doesn't scatter.",
            "Prioritise LOW FEES over past returns. On a short stay with a small balance, fees are the cost you can actually control.",
            "Choose a MySuper product if you don't want to compare options — these are the simple, low-cost default products funds offer.",
            "Avoid duplicate accounts — a second account means a second set of fees quietly draining your balance.",
            "Check what insurance you're paying for — many funds attach default life or income-protection cover, and the premiums come straight out of a small balance.",
          ],
        },
        {
          heading: "The stapled fund rule — your first choice follows you",
          paragraphs: [
            "Since 1 November 2021, Australia has a \"stapled super fund\" rule. When you start a new job and don't nominate a fund, your employer asks the ATO whether you already have one — and if you do, your pay goes into that existing fund instead of a brand-new account. The fund is \"stapled\" to you and follows you from job to job.",
            "For a working holiday maker this is good and bad. Good: you won't automatically rack up a new account at every farm or café. Bad: whatever fund you land in first becomes the default you keep — so a careless first choice (or a fund picked for you because you never filled in the form) can quietly stay with you for your whole trip. It pays to get that first fund right.",
          ],
        },
        {
          heading: "How to nominate your fund (and compare them)",
          paragraphs: [
            "Each new employer gives you a Superannuation standard choice form. Write your chosen fund's name, ABN and your member number on it, hand it back, and your super goes where you want it. If you skip the form, the stapled-fund rule (or the employer's default fund) decides for you.",
            "To compare funds before you choose, use the ATO's YourSuper comparison tool, which ranks MySuper products by fee and performance — and via myGov shows your own existing accounts so you can spot duplicates. Moneysmart, the government's money-guidance site, also explains how to weigh fees, insurance and investment options. Both are free and official.",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Tern is built for working holiday makers, so super is part of the plan from day one. We'll let you record the fund you've chosen, keep a planned view of the super each employer pays in, and warn you when a new job looks set to open a second account you don't need — so you arrive at the DASP claim with one tidy fund instead of a scattered trail. (Tern is pre-launch; this is what we're building.)",
          ],
        },
      ],
      faq: [
        {
          q: "Do I have to choose a super fund?",
          a: "No — if you don't choose, your employer pays into your existing stapled fund (or their default fund if you have none). But choosing once, on purpose, lets you pick a low-fee fund and keep all your super in one place, which is what matters most on a short stay.",
        },
        {
          q: "Which super fund is best for working holiday makers?",
          a: "There's no single \"best\" fund, but for a one-to-two-year stay the right one is usually a low-fee MySuper product that you use for every job. Compare options with the ATO's YourSuper tool and prioritise low fees over past returns.",
        },
        {
          q: "What happens to my super when I leave Australia?",
          a: "You claim it back through the Departing Australia Superannuation Payment (DASP) once you've left and your visa has ceased. For working holiday visa holders it's taxed at 65%, which is exactly why keeping fees low and your super in one fund matters.",
        },
      ],
    },
    es: {
      title: "Cómo elegir un fondo de super en working holiday",
      description:
        "Guía del fondo de superannuation en working holiday: la regla del fondo vinculado (stapled), comisiones bajas, una cuenta y tu reembolso DASP.",
      excerpt:
        "Tu empleador aporta el 12% de tu sueldo a un fondo de super. Si eliges bien una vez, te sigue entre trabajos; si eliges mal, te quedas atascado con él. Aquí tienes el esquema de 60 segundos.",
      sections: [
        {
          paragraphs: [
            "Cuando empiezas a trabajar en Australia, tu empleador aporta [superannuation (jubilación australiana, \"super\")](~/blog/what-is-superannuation) a un fondo en tu nombre: actualmente el 12% de tu sueldo (la tasa de garantía de super para 2025-26). En un working holiday quizá solo estés aquí uno o dos años, así que es tentador ignorar todo esto por completo. Pero el fondo que te toca el primer día tiende a quedarse contigo, y para los mochileros la elección correcta consiste sobre todo en mantener las comisiones bajas y tenerlo todo en un mismo lugar.",
          ],
        },
        {
          heading: "Por qué la elección del fondo importa más en un working holiday",
          paragraphs: [
            "Para alguien que se jubila en Australia, lo que más cuenta son los rendimientos de la inversión a lo largo de décadas. Tú no tienes décadas: tienes una estancia corta y un saldo de unos pocos miles de dólares. Eso da la vuelta por completo a las prioridades. A lo largo de uno o dos años, las comisiones y el número de cuentas que tienes importan mucho más que qué fondo obtuvo el mejor rendimiento el año pasado.",
            "Importa aún más por cómo termina el viaje: cuando te vas de Australia de forma definitiva recuperas tu super mediante el [Pago de Superannuation por Salida de Australia (DASP)](~/guides/superannuation-refund-dasp), que tributa al 65% para los titulares de visado de working holiday. Cada dólar perdido en comisiones, o atrapado en una cuenta duplicada olvidada, es un dólar que erosiona el 35% que realmente recuperas. Minimizar las comisiones y consolidar todo en un único fondo es todo el juego.",
          ],
        },
        {
          heading: "El esquema de decisión de 60 segundos",
          bullets: [
            "Elige UN solo fondo y úsalo para cada trabajo: dale los mismos datos del fondo a cada nuevo empleador para que tu super no se disperse.",
            "Prioriza las COMISIONES BAJAS por encima de los rendimientos pasados. En una estancia corta con un saldo pequeño, las comisiones son el coste que sí puedes controlar.",
            "Elige un producto MySuper si no quieres comparar opciones: son los productos por defecto, sencillos y de bajo coste, que ofrecen los fondos.",
            "Evita las cuentas duplicadas: una segunda cuenta significa un segundo juego de comisiones drenando tu saldo en silencio.",
            "Comprueba qué seguro estás pagando: muchos fondos incluyen por defecto cobertura de vida o de protección de ingresos, y las primas salen directamente de un saldo pequeño.",
          ],
        },
        {
          heading: "La regla del fondo vinculado (stapled): tu primera elección te sigue",
          paragraphs: [
            "Desde el 1 de noviembre de 2021, Australia tiene una regla de \"fondo de super vinculado\" (stapled super fund). Cuando empiezas un nuevo trabajo y no designas un fondo, tu empleador le pregunta al ATO si ya tienes uno y, si lo tienes, tu sueldo va a ese fondo existente en lugar de a una cuenta nueva. El fondo queda \"vinculado\" (stapled) a ti y te sigue de un trabajo a otro.",
            "Para quien hace un working holiday esto es bueno y malo a la vez. Lo bueno: no acumularás automáticamente una cuenta nueva en cada granja o cafetería. Lo malo: el fondo en el que aterrices primero se convierte en el predeterminado que conservas, así que una primera elección descuidada (o un fondo elegido por ti porque nunca rellenaste el formulario) puede quedarse contigo en silencio durante todo el viaje. Vale la pena acertar con ese primer fondo.",
          ],
        },
        {
          heading: "Cómo designar tu fondo (y compararlos)",
          paragraphs: [
            "Cada nuevo empleador te da un Superannuation standard choice form. Escribe el nombre de tu fondo elegido, su ABN y tu número de afiliado, devuélvelo, y tu super irá adonde tú quieras. Si te saltas el formulario, la regla del fondo vinculado (o el fondo por defecto del empleador) decide por ti.",
            "Para comparar fondos antes de elegir, usa la herramienta de comparación YourSuper del ATO, que clasifica los productos MySuper por comisiones y rendimiento, y a través de myGov muestra tus propias cuentas existentes para que detectes duplicados. Moneysmart, el sitio de orientación financiera del gobierno, también explica cómo sopesar comisiones, seguros y opciones de inversión. Ambos son gratuitos y oficiales.",
          ],
        },
        {
          heading: "Cómo ayuda Tern",
          paragraphs: [
            "Tern está pensado para quienes hacen un working holiday, así que el super forma parte del plan desde el primer día. Te dejaremos registrar el fondo que has elegido, mantener una vista planificada del super que aporta cada empleador y avisarte cuando un nuevo trabajo parezca a punto de abrir una segunda cuenta que no necesitas, para que llegues al trámite del DASP con un único fondo ordenado en lugar de un rastro disperso. (Tern está en fase previa al lanzamiento; esto es lo que estamos construyendo.)",
          ],
        },
      ],
      faq: [
        {
          q: "¿Tengo que elegir un fondo de super?",
          a: "No: si no eliges, tu empleador aporta a tu fondo vinculado existente (o a su fondo por defecto si no tienes ninguno). Pero elegir una vez, a propósito, te permite escoger un fondo de comisiones bajas y mantener todo tu super en un mismo lugar, que es lo que más importa en una estancia corta.",
        },
        {
          q: "¿Qué fondo de super es el mejor para quienes hacen working holiday?",
          a: "No existe un único fondo \"mejor\", pero para una estancia de uno o dos años el adecuado suele ser un producto MySuper de comisiones bajas que uses para cada trabajo. Compara opciones con la herramienta YourSuper del ATO y prioriza las comisiones bajas por encima de los rendimientos pasados.",
        },
        {
          q: "¿Qué pasa con mi super cuando me voy de Australia?",
          a: "Lo recuperas mediante el Pago de Superannuation por Salida de Australia (DASP) una vez que te has ido y tu visado ha caducado. Para los titulares de visado de working holiday tributa al 65%, que es exactamente por lo que importa mantener las comisiones bajas y tu super en un solo fondo.",
        },
      ],
    },
    de: {
      title: "Superfonds für Work and Travel richtig wählen",
      description:
        "Superannuation-Ratgeber für Work and Travel: die Stapled-Fund-Regel, niedrige Gebühren, ein Konto und warum das für deine DASP-Rückzahlung zählt.",
      excerpt:
        "Dein Arbeitgeber zahlt 12% deines Lohns in einen Superfonds ein. Einmal gut gewählt, folgt er dir zwischen Jobs; schlecht gewählt, hängst du daran fest. Hier ist das 60-Sekunden-Schema.",
      sections: [
        {
          paragraphs: [
            "Wenn du in Australien zu arbeiten beginnst, zahlt dein Arbeitgeber [Superannuation (australische Altersvorsorge, \"Super\")](~/blog/what-is-superannuation) in deinem Namen in einen Fonds ein – aktuell 12% deines Lohns (der Super-Guarantee-Satz für 2025-26). Bei Work and Travel bist du vielleicht nur ein oder zwei Jahre hier, also ist es verlockend, das Ganze einfach zu ignorieren. Doch der Fonds, in dem du am ersten Tag landest, bleibt meist bei dir – und für Backpacker geht es bei der richtigen Wahl vor allem darum, die Gebühren niedrig zu halten und alles an einem Ort zu bündeln.",
          ],
        },
        {
          heading: "Warum die Fondswahl bei Work and Travel mehr zählt",
          paragraphs: [
            "Für jemanden, der in Australien in Rente geht, zählen vor allem die Anlagerenditen über Jahrzehnte. Du hast keine Jahrzehnte – du hast einen kurzen Aufenthalt und ein Guthaben von ein paar tausend Dollar. Das dreht die Prioritäten komplett um. Über ein oder zwei Jahre zählen die Gebühren und die Anzahl deiner Konten weit mehr als die Frage, welcher Fonds letztes Jahr die beste Rendite erzielt hat.",
            "Noch wichtiger wird es durch die Art, wie die Reise endet: Wenn du Australien endgültig verlässt, holst du deine Super über die [Departing Australia Superannuation Payment (DASP)](~/guides/superannuation-refund-dasp) zurück, die für Inhaber eines Work-and-Travel-Visums mit 65% besteuert wird. Jeder Dollar, der durch Gebühren verloren geht oder in einem vergessenen Doppelkonto feststeckt, knabbert an den 35%, die du tatsächlich zurückbekommst. Gebühren minimieren und auf einen einzigen Fonds zusammenführen – das ist das ganze Spiel.",
          ],
        },
        {
          heading: "Das 60-Sekunden-Entscheidungsschema",
          bullets: [
            "Wähle EINEN Fonds und nutze ihn für jeden Job – gib jedem neuen Arbeitgeber dieselben Fondsdaten, damit sich deine Super nicht verstreut.",
            "Setze NIEDRIGE GEBÜHREN über vergangene Renditen. Bei kurzem Aufenthalt mit kleinem Guthaben sind Gebühren die Kosten, die du tatsächlich steuern kannst.",
            "Wähle ein MySuper-Produkt, wenn du keine Optionen vergleichen willst – das sind die einfachen, kostengünstigen Standardprodukte der Fonds.",
            "Vermeide Doppelkonten – ein zweites Konto bedeutet eine zweite Reihe Gebühren, die dein Guthaben still aufzehren.",
            "Prüfe, welche Versicherung du bezahlst – viele Fonds hängen standardmäßig eine Lebens- oder Berufsunfähigkeitsversicherung an, und die Prämien gehen direkt von einem kleinen Guthaben ab.",
          ],
        },
        {
          heading: "Die Stapled-Fund-Regel – deine erste Wahl folgt dir",
          paragraphs: [
            "Seit dem 1. November 2021 gibt es in Australien eine \"Stapled-Super-Fund\"-Regel. Wenn du einen neuen Job beginnst und keinen Fonds benennst, fragt dein Arbeitgeber beim ATO nach, ob du bereits einen hast – und falls ja, geht dein Lohn in diesen bestehenden Fonds statt in ein brandneues Konto. Der Fonds ist an dich \"gestapelt\" (stapled) und folgt dir von Job zu Job.",
            "Für jemanden bei Work and Travel ist das Fluch und Segen zugleich. Gut: Du sammelst nicht automatisch auf jeder Farm oder in jedem Café ein neues Konto an. Schlecht: Welcher Fonds dir zuerst zufällt, wird zum Standard, den du behältst – eine nachlässige erste Wahl (oder ein Fonds, der für dich bestimmt wurde, weil du das Formular nie ausgefüllt hast) kann dich so still durch die ganze Reise begleiten. Es lohnt sich, diesen ersten Fonds richtig zu wählen.",
          ],
        },
        {
          heading: "So benennst du deinen Fonds (und vergleichst sie)",
          paragraphs: [
            "Jeder neue Arbeitgeber gibt dir ein Superannuation standard choice form. Trage den Namen deines gewählten Fonds, seine ABN und deine Mitgliedsnummer ein, gib es zurück, und deine Super geht dorthin, wo du es willst. Lässt du das Formular aus, entscheidet die Stapled-Fund-Regel (oder der Standardfonds des Arbeitgebers) für dich.",
            "Um Fonds vor der Wahl zu vergleichen, nutze das YourSuper-Vergleichstool des ATO, das MySuper-Produkte nach Gebühren und Wertentwicklung sortiert – und über myGov deine eigenen bestehenden Konten anzeigt, damit du Duplikate erkennst. Moneysmart, die Finanzberatungsseite der Regierung, erklärt außerdem, wie du Gebühren, Versicherungen und Anlageoptionen abwägst. Beide sind kostenlos und offiziell.",
          ],
        },
        {
          heading: "Wie Tern hilft",
          paragraphs: [
            "Tern ist für Work and Travel gemacht, also ist Super vom ersten Tag an Teil des Plans. Wir lassen dich den gewählten Fonds festhalten, eine geplante Übersicht über die Super behalten, die jeder Arbeitgeber einzahlt, und warnen dich, wenn ein neuer Job ein zweites Konto zu eröffnen droht, das du nicht brauchst – damit du beim DASP-Antrag mit einem aufgeräumten Fonds ankommst statt mit einer verstreuten Spur. (Tern ist noch vor dem Start; das ist, was wir gerade bauen.)",
          ],
        },
      ],
      faq: [
        {
          q: "Muss ich einen Superfonds wählen?",
          a: "Nein – wenn du nicht wählst, zahlt dein Arbeitgeber in deinen bestehenden Stapled-Fonds ein (oder in seinen Standardfonds, falls du keinen hast). Aber einmal bewusst zu wählen lässt dich einen gebührengünstigen Fonds nehmen und deine gesamte Super an einem Ort halten – und genau das zählt bei einem kurzen Aufenthalt am meisten.",
        },
        {
          q: "Welcher Superfonds ist der beste für Work and Travel?",
          a: "Es gibt keinen einzelnen \"besten\" Fonds, aber für einen ein- bis zweijährigen Aufenthalt ist der richtige meist ein gebührengünstiges MySuper-Produkt, das du für jeden Job nutzt. Vergleiche Optionen mit dem YourSuper-Tool des ATO und setze niedrige Gebühren über vergangene Renditen.",
        },
        {
          q: "Was passiert mit meiner Super, wenn ich Australien verlasse?",
          a: "Du holst sie über die Departing Australia Superannuation Payment (DASP) zurück, sobald du ausgereist bist und dein Visum erloschen ist. Für Inhaber eines Work-and-Travel-Visums wird sie mit 65% besteuert – genau deshalb zählt es, die Gebühren niedrig und deine Super in einem Fonds zu halten.",
        },
      ],
    },
    fr: {
      title: "Choisir un fonds de super en PVT : le guide",
      description:
        "Guide superannuation PVT : la règle du fonds rattaché (stapled), des frais bas, un seul compte et pourquoi cela compte pour ton remboursement DASP.",
      excerpt:
        "Ton employeur verse 12% de ton salaire dans un fonds de super. Bien choisi une fois, il te suit entre les jobs ; mal choisi, tu restes coincé avec. Voici la méthode en 60 secondes.",
      sections: [
        {
          paragraphs: [
            "Quand tu commences à travailler en Australie, ton employeur verse de la [superannuation (retraite australienne, \"super\")](~/blog/what-is-superannuation) dans un fonds pour ton compte — actuellement 12% de ton salaire (le taux de garantie de super pour 2025-26). En PVT tu n'es peut-être ici qu'un an ou deux, alors c'est tentant d'ignorer tout cela. Mais le fonds dans lequel tu atterris le premier jour a tendance à te suivre — et pour les backpackers, le bon choix consiste surtout à garder des frais bas et à tout regrouper au même endroit.",
          ],
        },
        {
          heading: "Pourquoi le choix du fonds compte davantage en PVT",
          paragraphs: [
            "Pour quelqu'un qui prend sa retraite en Australie, ce sont les rendements de placement sur des décennies qui comptent le plus. Toi, tu n'as pas des décennies — tu as un court séjour et un solde de quelques milliers de dollars. Cela inverse totalement les priorités. Sur un an ou deux, les frais et le nombre de comptes que tu détiens comptent bien plus que de savoir quel fonds a affiché le meilleur rendement l'an dernier.",
            "Cela compte encore plus à cause de la façon dont le voyage se termine : quand tu quittes l'Australie pour de bon, tu récupères ta super via le [Departing Australia Superannuation Payment (DASP)](~/guides/superannuation-refund-dasp), taxé à 65% pour les titulaires d'un visa PVT. Chaque dollar perdu en frais, ou bloqué dans un compte en double oublié, est un dollar qui ronge les 35% que tu récupères réellement. Réduire les frais au minimum et tout regrouper dans un seul fonds, c'est tout l'enjeu.",
          ],
        },
        {
          heading: "La méthode de décision en 60 secondes",
          bullets: [
            "Choisis UN seul fonds et utilise-le pour chaque job — donne les mêmes coordonnées de fonds à chaque nouvel employeur pour que ta super ne s'éparpille pas.",
            "Privilégie des FRAIS BAS plutôt que les rendements passés. Sur un court séjour avec un petit solde, les frais sont le coût que tu peux réellement maîtriser.",
            "Choisis un produit MySuper si tu ne veux pas comparer les options — ce sont les produits par défaut, simples et peu coûteux, proposés par les fonds.",
            "Évite les comptes en double — un deuxième compte, c'est une deuxième série de frais qui grignote ton solde en silence.",
            "Vérifie quelle assurance tu paies — beaucoup de fonds rattachent par défaut une couverture décès ou perte de revenu, et les primes sortent directement d'un petit solde.",
          ],
        },
        {
          heading: "La règle du fonds rattaché (stapled) — ton premier choix te suit",
          paragraphs: [
            "Depuis le 1er novembre 2021, l'Australie applique une règle de \"fonds de super rattaché\" (stapled super fund). Quand tu commences un nouveau job sans désigner de fonds, ton employeur demande à l'ATO si tu en as déjà un — et si oui, ta paie va dans ce fonds existant plutôt que dans un compte tout neuf. Le fonds est \"rattaché\" (stapled) à toi et te suit d'un job à l'autre.",
            "Pour un pvtiste, c'est à la fois bon et mauvais. Bon : tu n'accumuleras pas automatiquement un nouveau compte dans chaque ferme ou café. Mauvais : le fonds dans lequel tu atterris en premier devient le réglage par défaut que tu conserves — donc un premier choix négligent (ou un fonds choisi à ta place parce que tu n'as jamais rempli le formulaire) peut te suivre en silence tout au long du voyage. Cela vaut la peine de bien choisir ce premier fonds.",
          ],
        },
        {
          heading: "Comment désigner ton fonds (et les comparer)",
          paragraphs: [
            "Chaque nouvel employeur te remet un Superannuation standard choice form. Inscris le nom du fonds que tu as choisi, son ABN et ton numéro de membre, rends-le, et ta super ira là où tu veux. Si tu sautes le formulaire, la règle du fonds rattaché (ou le fonds par défaut de l'employeur) décide à ta place.",
            "Pour comparer les fonds avant de choisir, utilise l'outil de comparaison YourSuper de l'ATO, qui classe les produits MySuper par frais et performance — et via myGov affiche tes propres comptes existants pour que tu repères les doublons. Moneysmart, le site d'orientation financière du gouvernement, explique aussi comment peser frais, assurances et options de placement. Les deux sont gratuits et officiels.",
          ],
        },
        {
          heading: "Comment Tern t'aide",
          paragraphs: [
            "Tern est conçu pour les pvtistes, alors la super fait partie du plan dès le premier jour. On te laissera enregistrer le fonds que tu as choisi, garder une vue planifiée de la super que verse chaque employeur, et t'avertir quand un nouveau job semble sur le point d'ouvrir un deuxième compte dont tu n'as pas besoin — pour que tu arrives à la demande de DASP avec un seul fonds bien rangé plutôt qu'une traînée éparpillée. (Tern est en pré-lancement ; c'est ce que nous construisons.)",
          ],
        },
      ],
      faq: [
        {
          q: "Suis-je obligé de choisir un fonds de super ?",
          a: "Non — si tu ne choisis pas, ton employeur verse dans ton fonds rattaché existant (ou dans son fonds par défaut si tu n'en as aucun). Mais choisir une fois, volontairement, te permet de prendre un fonds à frais bas et de garder toute ta super au même endroit, ce qui compte le plus sur un court séjour.",
        },
        {
          q: "Quel fonds de super est le meilleur pour un PVT ?",
          a: "Il n'existe pas de fonds \"meilleur\" unique, mais pour un séjour d'un à deux ans, le bon est en général un produit MySuper à frais bas que tu utilises pour chaque job. Compare les options avec l'outil YourSuper de l'ATO et privilégie des frais bas plutôt que les rendements passés.",
        },
        {
          q: "Qu'advient-il de ma super quand je quitte l'Australie ?",
          a: "Tu la récupères via le Departing Australia Superannuation Payment (DASP) une fois parti et ton visa expiré. Pour les titulaires d'un visa PVT, elle est taxée à 65%, ce qui est exactement pourquoi garder des frais bas et ta super dans un seul fonds compte.",
        },
      ],
    },
    it: {
      title: "Scegliere un fondo super in working holiday",
      description:
        "Guida alla superannuation in working holiday: la regola del fondo collegato (stapled), commissioni basse, un conto e il tuo rimborso DASP.",
      excerpt:
        "Il datore di lavoro versa il 12% del tuo stipendio in un fondo super. Scelto bene una volta, ti segue tra un lavoro e l'altro; scelto male, ci resti incastrato. Ecco lo schema in 60 secondi.",
      sections: [
        {
          paragraphs: [
            "Quando inizi a lavorare in Australia, il datore di lavoro versa la [superannuation (previdenza australiana, \"super\")](~/blog/what-is-superannuation) in un fondo per tuo conto — attualmente il 12% del tuo stipendio (l'aliquota della super guarantee per il 2025-26). In working holiday magari resti solo un anno o due, quindi è allettante ignorare del tutto la cosa. Ma il fondo in cui ti ritrovi il primo giorno tende a restarti attaccato — e per i backpacker la scelta giusta sta soprattutto nel tenere basse le commissioni e nel concentrare tutto in un unico posto.",
          ],
        },
        {
          heading: "Perché la scelta del fondo conta di più in working holiday",
          paragraphs: [
            "Per chi va in pensione in Australia, ciò che conta di più sono i rendimenti dell'investimento lungo decenni. Tu non hai decenni — hai un soggiorno breve e un saldo di qualche migliaio di dollari. Questo ribalta del tutto le priorità. Nell'arco di uno o due anni, le commissioni e il numero di conti che possiedi contano molto più di quale fondo abbia registrato il rendimento migliore l'anno scorso.",
            "Conta ancora di più per come finisce il viaggio: quando lasci l'Australia per sempre recuperi la tua super tramite il [Departing Australia Superannuation Payment (DASP)](~/guides/superannuation-refund-dasp), tassato al 65% per chi ha un visto working holiday. Ogni dollaro perso in commissioni, o intrappolato in un conto duplicato dimenticato, è un dollaro che erode il 35% che effettivamente riprendi. Ridurre al minimo le commissioni e consolidare tutto in un unico fondo è tutto il gioco.",
          ],
        },
        {
          heading: "Lo schema decisionale in 60 secondi",
          bullets: [
            "Scegli UN solo fondo e usalo per ogni lavoro — dai gli stessi dati del fondo a ciascun nuovo datore di lavoro, così la tua super non si disperde.",
            "Dai la priorità alle COMMISSIONI BASSE rispetto ai rendimenti passati. In un soggiorno breve con un saldo piccolo, le commissioni sono il costo che puoi davvero controllare.",
            "Scegli un prodotto MySuper se non vuoi confrontare le opzioni — sono i prodotti predefiniti, semplici e a basso costo, offerti dai fondi.",
            "Evita i conti duplicati — un secondo conto significa una seconda serie di commissioni che prosciuga il tuo saldo in silenzio.",
            "Controlla quale assicurazione stai pagando — molti fondi aggiungono per impostazione predefinita una copertura vita o di protezione del reddito, e i premi escono direttamente da un saldo piccolo.",
          ],
        },
        {
          heading: "La regola del fondo collegato (stapled) — la tua prima scelta ti segue",
          paragraphs: [
            "Dal 1° novembre 2021 l'Australia ha una regola del \"fondo super collegato\" (stapled super fund). Quando inizi un nuovo lavoro e non indichi un fondo, il datore di lavoro chiede all'ATO se ne hai già uno — e in tal caso il tuo stipendio va in quel fondo esistente invece che in un conto nuovo di zecca. Il fondo viene \"collegato\" (stapled) a te e ti segue da un lavoro all'altro.",
            "Per chi fa working holiday questo è un bene e un male. Bene: non accumulerai automaticamente un nuovo conto in ogni fattoria o caffè. Male: il fondo in cui finisci per primo diventa il predefinito che tieni — quindi una prima scelta superficiale (o un fondo scelto al posto tuo perché non hai mai compilato il modulo) può restarti accanto in silenzio per tutto il viaggio. Vale la pena azzeccare quel primo fondo.",
          ],
        },
        {
          heading: "Come indicare il tuo fondo (e confrontarli)",
          paragraphs: [
            "Ogni nuovo datore di lavoro ti dà un Superannuation standard choice form. Scrivi il nome del fondo che hai scelto, il suo ABN e il tuo numero di iscritto, riconsegnalo, e la tua super andrà dove vuoi. Se salti il modulo, la regola del fondo collegato (o il fondo predefinito del datore di lavoro) decide al posto tuo.",
            "Per confrontare i fondi prima di scegliere, usa lo strumento di confronto YourSuper dell'ATO, che ordina i prodotti MySuper per commissioni e rendimento — e tramite myGov mostra i tuoi conti esistenti così individui i duplicati. Moneysmart, il sito di orientamento finanziario del governo, spiega anche come valutare commissioni, assicurazioni e opzioni di investimento. Entrambi sono gratuiti e ufficiali.",
          ],
        },
        {
          heading: "Come ti aiuta Tern",
          paragraphs: [
            "Tern è pensato per chi fa working holiday, quindi la super fa parte del piano fin dal primo giorno. Ti faremo registrare il fondo che hai scelto, mantenere una vista pianificata della super che versa ciascun datore di lavoro e avvisarti quando un nuovo lavoro sembra in procinto di aprire un secondo conto di cui non hai bisogno — così arrivi alla richiesta DASP con un unico fondo ordinato invece di una scia dispersa. (Tern è in fase pre-lancio; questo è ciò che stiamo costruendo.)",
          ],
        },
      ],
      faq: [
        {
          q: "Devo per forza scegliere un fondo super?",
          a: "No — se non scegli, il datore di lavoro versa nel tuo fondo collegato esistente (o nel suo fondo predefinito se non ne hai). Ma scegliere una volta, di proposito, ti permette di prendere un fondo a commissioni basse e tenere tutta la super in un unico posto, che è ciò che conta di più in un soggiorno breve.",
        },
        {
          q: "Qual è il miglior fondo super per chi fa working holiday?",
          a: "Non esiste un unico fondo \"migliore\", ma per un soggiorno di uno o due anni quello giusto è di solito un prodotto MySuper a commissioni basse che usi per ogni lavoro. Confronta le opzioni con lo strumento YourSuper dell'ATO e dai la priorità alle commissioni basse rispetto ai rendimenti passati.",
        },
        {
          q: "Cosa succede alla mia super quando lascio l'Australia?",
          a: "La recuperi tramite il Departing Australia Superannuation Payment (DASP) una volta partito e scaduto il visto. Per chi ha un visto working holiday è tassata al 65%, ed è esattamente per questo che conta tenere basse le commissioni e la super in un unico fondo.",
        },
      ],
    },
    ja: {
      title: "ワーホリのスーパー選び方ガイド",
      description:
        "ワーホリ向けスーパーアニュエーションの選び方。ステープル制度、低手数料、口座一本化、そしてDASP還付になぜ効くのかを解説します。",
      excerpt:
        "雇用主は給与の12%をスーパーに積み立てます。最初に良い口座を選べば転職してもついてきますが、選び方を誤るとそのまま固定されます。60秒で決める判断軸を紹介します。",
      sections: [
        {
          paragraphs: [
            "オーストラリアで働き始めると、雇用主はあなたのために[スーパーアニュエーション（「スーパー」）](~/blog/what-is-superannuation)をファンドへ積み立てます。現在の割合は給与の12%（2025-26年度のスーパーギャランティー率）です。ワーホリでは滞在が1〜2年ということも多く、つい無関心になりがちです。しかし初日に決まったファンドは基本的にずっとついて回ります — そしてワーホリにとって正しい選択とは、手数料を低く抑え、すべてを一つにまとめることがほとんどです。",
          ],
        },
        {
          heading: "ワーホリでファンド選びが特に重要な理由",
          paragraphs: [
            "オーストラリアで退職する人にとっては、数十年にわたる運用利回りが最も重要です。あなたには数十年はありません — 短い滞在と数千ドルの残高があるだけです。これで優先順位は完全に変わります。1〜2年では、どのファンドが昨年最も高い利回りを出したかよりも、手数料と保有口座の数のほうがはるかに重要です。",
            "それが一層重要になるのは、旅の終わり方ゆえです。永久に出国するとき、あなたは[「離境オーストラリア退職金給付」（DASP）](~/guides/superannuation-refund-dasp)を通じてスーパーを取り戻しますが、ワーホリビザ保有者にはこれに65%の税率が適用されます。手数料で失う1ドル、忘れられた重複口座に閉じ込められた1ドルは、実際に受け取れる35%を削っていきます。手数料を最小化し、一つのファンドに統合すること — それがすべてです。",
          ],
        },
        {
          heading: "60秒で決める判断軸",
          bullets: [
            "ファンドは一つに絞り、すべての仕事で使う — 新しい雇用主ごとに同じファンド情報を伝え、スーパーを分散させない。",
            "過去の利回りより低手数料を優先する。短い滞在と少額残高では、手数料こそ自分でコントロールできるコストです。",
            "比較したくなければMySuper商品を選ぶ — ファンドが提供する、シンプルで低コストのデフォルト商品です。",
            "重複口座を避ける — 二つ目の口座は、二重の手数料が静かに残高を削ることを意味します。",
            "何の保険料を払っているか確認する — 多くのファンドは生命保険や所得補償のデフォルト保障を付けており、その保険料は少額残高から直接引かれます。",
          ],
        },
        {
          heading: "ステープル制度 — 最初の選択がついて回る",
          paragraphs: [
            "2021年11月1日以降、オーストラリアには「ステープル・スーパーファンド（stapled super fund）」制度があります。新しい仕事を始めてファンドを指定しない場合、雇用主はあなたが既にファンドを持っているかATOに照会し、持っていればその既存ファンドに給与が振り込まれます — 真新しい口座は作られません。ファンドはあなたに「ステープル（紐付け）」され、仕事から仕事へついて回ります。",
            "ワーホリにとって、これは良し悪しです。良い点：農場やカフェごとに自動で新しい口座が増えることはありません。悪い点：最初に入ったファンドがそのまま既定として残るため、不注意な最初の選択（あるいは用紙を出さなかったために決められたファンド）が、滞在中ずっと静かに残り続けかねません。最初のファンドをきちんと選ぶ価値があります。",
          ],
        },
        {
          heading: "ファンドの指定方法（と比較の仕方）",
          paragraphs: [
            "新しい雇用主はそれぞれ「Superannuation standard choice form（スーパー選択フォーム）」を渡します。選んだファンドの名称、ABN、会員番号を記入して返却すれば、スーパーは希望どおりの場所へ入ります。フォームを出さなければ、ステープル制度（または雇用主のデフォルトファンド）があなたの代わりに決めてしまいます。",
            "選ぶ前にファンドを比較するなら、ATOのYourSuper比較ツールを使いましょう。MySuper商品を手数料と運用成績で並べて比較でき、myGov経由なら自分の既存口座も表示されるので重複を見つけられます。政府のお金ガイドサイトMoneysmartも、手数料・保険・投資オプションの見極め方を解説しています。どちらも無料の公式情報です。",
          ],
        },
        {
          heading: "Ternのサポート内容",
          paragraphs: [
            "Ternはワーホリのために作られているので、スーパーは初日から計画の一部です。選んだファンドを記録し、各雇用主が積み立てるスーパーを計画的に見える化し、新しい仕事で不要な二つ目の口座が開かれそうなときに警告します — そうして散らばった痕跡ではなく、すっきり一本化したファンドでDASP申請にたどり着けます。（Ternは現在ローンチ前で、これは私たちが構築中の内容です。）",
          ],
        },
      ],
      faq: [
        {
          q: "スーパーファンドは必ず選ばないといけませんか？",
          a: "いいえ — 選ばなければ、雇用主は既存のステープルファンド（なければ雇用主のデフォルトファンド）に積み立てます。ただし一度きちんと自分で選べば、低手数料のファンドを選び、すべてのスーパーを一つにまとめられます。短い滞在ではこれが最も重要です。",
        },
        {
          q: "ワーホリにとって最適なスーパーファンドはどれですか？",
          a: "唯一の「最適」ファンドはありませんが、1〜2年の滞在なら、通常はすべての仕事で使う低手数料のMySuper商品が正解です。ATOのYourSuperツールで比較し、過去の利回りより低手数料を優先しましょう。",
        },
        {
          q: "出国したらスーパーはどうなりますか？",
          a: "出国してビザが終了した後、「離境オーストラリア退職金給付」（DASP）を通じて取り戻せます。ワーホリビザ保有者には65%の税率が適用され、だからこそ手数料を低く抑え、スーパーを一つのファンドにまとめることが重要なのです。",
        },
      ],
    },
    ko: {
      title: "워홀 슈퍼 펀드 고르는 법",
      description:
        "워홀러를 위한 슈퍼애뉴에이션 펀드 선택 가이드. 스테이플 펀드 규정, 낮은 수수료, 계좌 일원화, 그리고 DASP 환급에 미치는 영향까지.",
      excerpt:
        "고용주는 임금의 12%를 슈퍼에 납부합니다. 처음에 잘 고르면 이직해도 따라오지만, 잘못 고르면 그대로 굳어집니다. 60초 판단 기준을 소개합니다.",
      sections: [
        {
          paragraphs: [
            "호주에서 일을 시작하면 고용주는 당신을 위해 [슈퍼애뉴에이션(\"슈퍼\")](~/blog/what-is-superannuation)을 펀드에 납부합니다 — 현재 임금의 12%(2025-26년도 슈퍼 개런티 비율)입니다. 워홀은 체류 기간이 1~2년에 불과한 경우가 많아 이를 그냥 넘기기 쉽습니다. 하지만 첫날 정해진 펀드는 대체로 끝까지 따라옵니다 — 그리고 워홀러에게 올바른 선택이란 대부분 수수료를 낮게 유지하고 모든 것을 한곳에 모으는 일입니다.",
          ],
        },
        {
          heading: "워홀에서 펀드 선택이 더 중요한 이유",
          paragraphs: [
            "호주에서 은퇴하는 사람에게는 수십 년에 걸친 투자 수익률이 가장 중요합니다. 당신에게는 수십 년이 없습니다 — 짧은 체류와 수천 달러의 잔액이 있을 뿐입니다. 이것이 우선순위를 완전히 뒤집습니다. 1~2년 동안에는 어느 펀드가 작년에 가장 높은 수익을 냈는지보다 수수료와 보유 계좌 수가 훨씬 더 중요합니다.",
            "이것이 더욱 중요한 이유는 여정이 끝나는 방식 때문입니다. 호주를 완전히 떠날 때 당신은 [출국 호주 슈퍼애뉴에이션 지급(DASP)](~/guides/superannuation-refund-dasp)을 통해 슈퍼를 돌려받는데, 워홀 비자 소지자에게는 65%의 세율이 적용됩니다. 수수료로 잃는 1달러, 잊힌 중복 계좌에 갇힌 1달러는 실제로 돌려받는 35%를 갉아먹습니다. 수수료를 최소화하고 하나의 펀드로 통합하는 것 — 그것이 전부입니다.",
          ],
        },
        {
          heading: "60초 결정 기준",
          bullets: [
            "펀드는 하나만 골라 모든 직장에서 사용하세요 — 새 고용주마다 같은 펀드 정보를 제출해 슈퍼가 흩어지지 않게 하세요.",
            "과거 수익률보다 낮은 수수료를 우선하세요. 짧은 체류와 적은 잔액에서는 수수료가 당신이 실제로 통제할 수 있는 비용입니다.",
            "비교하기 싫다면 MySuper 상품을 고르세요 — 펀드가 제공하는 단순하고 저비용의 기본 상품입니다.",
            "중복 계좌를 피하세요 — 두 번째 계좌는 두 배의 수수료가 조용히 잔액을 갉아먹는다는 뜻입니다.",
            "어떤 보험료를 내고 있는지 확인하세요 — 많은 펀드가 생명보험이나 소득보장 기본 보장을 붙이며, 그 보험료는 적은 잔액에서 곧바로 빠져나갑니다.",
          ],
        },
        {
          heading: "스테이플 펀드 규정 — 첫 선택이 따라온다",
          paragraphs: [
            "2021년 11월 1일부터 호주에는 \"스테이플 슈퍼 펀드(stapled super fund)\" 규정이 있습니다. 새 직장을 시작하면서 펀드를 지정하지 않으면, 고용주는 당신에게 이미 펀드가 있는지 ATO에 조회하고 — 있다면 새 계좌가 아니라 그 기존 펀드로 급여가 들어갑니다. 펀드가 당신에게 \"스테이플(연결)\"되어 직장에서 직장으로 따라옵니다.",
            "워홀러에게 이것은 양날의 검입니다. 좋은 점: 농장이나 카페마다 자동으로 새 계좌가 쌓이지 않습니다. 나쁜 점: 처음 들어간 펀드가 그대로 기본값으로 남기 때문에, 부주의한 첫 선택(또는 양식을 내지 않아 대신 정해진 펀드)이 체류 내내 조용히 따라다닐 수 있습니다. 그 첫 펀드를 제대로 고를 가치가 있습니다.",
          ],
        },
        {
          heading: "펀드 지정하는 법 (그리고 비교하는 법)",
          paragraphs: [
            "새 고용주는 각각 \"Superannuation standard choice form(슈퍼 선택 양식)\"을 줍니다. 고른 펀드의 이름, ABN, 회원번호를 적어 제출하면 슈퍼가 원하는 곳으로 들어갑니다. 양식을 내지 않으면 스테이플 규정(또는 고용주의 기본 펀드)이 당신 대신 결정합니다.",
            "고르기 전에 펀드를 비교하려면 ATO의 YourSuper 비교 도구를 사용하세요. MySuper 상품을 수수료와 성과로 정렬해 비교할 수 있고, myGov를 통하면 본인의 기존 계좌도 보여줘 중복을 찾아낼 수 있습니다. 정부의 금융 안내 사이트 Moneysmart도 수수료, 보험, 투자 옵션을 따져보는 법을 설명합니다. 둘 다 무료 공식 자료입니다.",
          ],
        },
        {
          heading: "Tern이 도와드릴 수 있어요",
          paragraphs: [
            "Tern은 워홀러를 위해 만들어졌기에 슈퍼는 첫날부터 계획의 일부입니다. 고른 펀드를 기록하고, 각 고용주가 납부하는 슈퍼를 계획적으로 한눈에 보여주며, 새 직장에서 필요 없는 두 번째 계좌가 열릴 것 같으면 미리 알려드립니다 — 그래서 흩어진 흔적이 아니라 깔끔하게 하나로 정리된 펀드로 DASP 신청에 도달하게 합니다. (Tern은 출시 전이며, 지금 만들고 있는 내용입니다.)",
          ],
        },
      ],
      faq: [
        {
          q: "슈퍼 펀드를 꼭 골라야 하나요?",
          a: "아니요 — 고르지 않으면 고용주가 당신의 기존 스테이플 펀드(없으면 고용주의 기본 펀드)에 납부합니다. 하지만 한 번 의도적으로 고르면 낮은 수수료의 펀드를 선택하고 모든 슈퍼를 한곳에 모을 수 있는데, 짧은 체류에서는 이것이 가장 중요합니다.",
        },
        {
          q: "워홀러에게 가장 좋은 슈퍼 펀드는 무엇인가요?",
          a: "유일한 \"최고\" 펀드는 없지만, 1~2년 체류라면 보통 모든 직장에서 쓰는 낮은 수수료의 MySuper 상품이 정답입니다. ATO의 YourSuper 도구로 비교하고 과거 수익률보다 낮은 수수료를 우선하세요.",
        },
        {
          q: "호주를 떠나면 슈퍼는 어떻게 되나요?",
          a: "출국하고 비자가 종료된 후 출국 호주 슈퍼애뉴에이션 지급(DASP)을 통해 돌려받습니다. 워홀 비자 소지자에게는 65%의 세율이 적용되며, 바로 그래서 수수료를 낮게 유지하고 슈퍼를 한 펀드에 모으는 것이 중요합니다.",
        },
      ],
    },
    "zh-TW": {
      title: "澳洲退休金（super）帳戶怎麼選：打工度假指南",
      description:
        "打工度假者如何挑選澳洲退休金（super）帳戶：stapled制度、低手續費、單一帳戶，以及為何攸關你的DASP退款。",
      excerpt:
        "雇主會把薪資的12%提撥到退休金帳戶。一開始選對，換工作也會跟著你；選錯就只能將就。本文給你60秒決策框架。",
      sections: [
        {
          paragraphs: [
            "在澳洲開始工作後，雇主會替你把[退休金（\"super\"）](~/blog/what-is-superannuation)提撥到一個基金帳戶——目前費率為薪資的12%（2025-26年度的退休金保證率）。打工度假往往只待一兩年，因此很容易完全不理會這件事。但第一天落腳的那個帳戶通常會一路跟著你——而對打工度假者來說，選對帳戶幾乎就等於把手續費壓低、把一切集中在同一處。",
          ],
        },
        {
          heading: "為什麼打工度假更該重視帳戶選擇",
          paragraphs: [
            "對在澳洲退休的人而言，數十年的投資報酬率才是重點。你沒有數十年——你只有短暫的停留與幾千澳幣的餘額。這會完全顛覆優先順序。在一兩年內，手續費與你持有的帳戶數量，遠比哪個基金去年報酬最高來得重要。",
            "之所以更該重視，是因為這趟旅程的結束方式：當你永久離開澳洲時，你會透過[「離境澳洲退休金給付」（DASP）](~/guides/superannuation-refund-dasp)領回退休金，而打工度假簽證持有人適用65%的稅率。每一塊被手續費吃掉的錢、每一塊卡在被遺忘的重複帳戶裡的錢，都會侵蝕你實際能拿回的那35%。把手續費降到最低、整合成單一帳戶，就是全部的關鍵。",
          ],
        },
        {
          heading: "60秒決策框架",
          bullets: [
            "只挑一個帳戶，每份工作都用它——把同一組基金資料交給每位新雇主，別讓退休金四散。",
            "把低手續費看得比過往報酬更重。在短暫停留、餘額不高的情況下，手續費才是你真正能掌控的成本。",
            "不想比較就選MySuper商品——這是各基金提供的簡單、低成本的預設商品。",
            "避免重複帳戶——多開一個帳戶就等於多一份手續費在默默蠶食你的餘額。",
            "確認你在付哪些保險費——許多基金會附加預設的壽險或所得保障，而這些保費會直接從不高的餘額中扣除。",
          ],
        },
        {
          heading: "Stapled帳戶制度——第一次的選擇會跟著你",
          paragraphs: [
            "自2021年11月1日起，澳洲有所謂「stapled退休金帳戶」（stapled super fund）制度。當你開始新工作卻沒有指定基金時，雇主會向ATO查詢你是否已有帳戶——若有，薪資就會進入那個既有帳戶，而不是開立全新帳戶。這個帳戶會被「綁定」（stapled）在你身上，隨你從一份工作換到下一份。",
            "對打工度假者而言，這有好有壞。好處：你不會在每個農場或咖啡店都被自動多開一個帳戶。壞處：你最初落腳的那個帳戶會成為一直保留的預設值——所以一個隨便的第一次選擇（或因為你沒填表而被替你決定的帳戶），可能整趟旅程都默默跟著你。把第一個帳戶選對，很值得。",
          ],
        },
        {
          heading: "如何指定你的帳戶（以及如何比較）",
          paragraphs: [
            "每位新雇主都會給你一份「Superannuation standard choice form」（退休金選擇表）。把你選定基金的名稱、ABN與會員編號填上交回，退休金就會進到你想要的地方。若你略過這張表，stapled制度（或雇主的預設基金）就會替你決定。",
            "想在選擇前比較各基金，可使用ATO的YourSuper比較工具，它會依手續費與績效排列各MySuper商品——透過myGov登入還會顯示你自己的既有帳戶，方便揪出重複帳戶。政府的理財指引網站Moneysmart也說明如何權衡手續費、保險與投資選項。兩者都是免費的官方資源。",
          ],
        },
        {
          heading: "Tern如何協助你",
          paragraphs: [
            "Tern是為打工度假者打造的，所以退休金從第一天起就是規劃的一部分。我們會讓你記錄已選定的基金、以計畫視角追蹤每位雇主提撥的退休金，並在新工作可能開立你不需要的第二個帳戶時提醒你——讓你帶著一個整齊的帳戶、而非散落各處的痕跡，走到DASP申請那一步。（Tern尚未上線，這是我們正在打造的功能。）",
          ],
        },
      ],
      faq: [
        {
          q: "我一定要選退休金帳戶嗎？",
          a: "不用——如果你不選，雇主會把錢提撥到你既有的stapled帳戶（若沒有，則用雇主的預設基金）。但只要主動選一次，你就能挑到低手續費的基金，並把所有退休金集中在同一處，這在短暫停留中最為重要。",
        },
        {
          q: "打工度假者最適合哪一個退休金帳戶？",
          a: "沒有單一「最好」的基金，但若只待一兩年，正解通常是一個你每份工作都使用的低手續費MySuper商品。用ATO的YourSuper工具比較，並把低手續費看得比過往報酬更重要。",
        },
        {
          q: "我離開澳洲後退休金會怎麼樣？",
          a: "在你離境且簽證失效後，可透過「離境澳洲退休金給付」（DASP）領回。打工度假簽證持有人適用65%的稅率，這正是為什麼把手續費壓低、把退休金集中在同一個帳戶如此重要。",
        },
      ],
    },
  },
};
