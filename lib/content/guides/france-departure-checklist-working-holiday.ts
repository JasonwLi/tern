import type { Article } from "../types";

export const article: Article = {
  slug: "france-departure-checklist-working-holiday",
  kind: "guide",
  date: "2026-06-09",
  emoji: "🥐",
  accent: "bg-sky-300",
  readMinutes: 7,
  sources: [
    {
      label: "ameli.fr — La protection universelle maladie (PUMa)",
      url: "https://www.ameli.fr/assure/droits-demarches/principes/protection-universelle-maladie",
    },
    {
      label: "ameli.fr — Travailleur expatrié à l'étranger",
      url: "https://www.ameli.fr/assure/droits-demarches/europe-international/protection-sociale-etranger/travailleur-expatriation-etranger",
    },
    {
      label: "impots.gouv.fr — Je pars vivre à l'étranger : quelles démarches ?",
      url: "https://www.impots.gouv.fr/particulier/questions/je-pars-vivre-letranger-quelles-demarches-dois-je-accomplir-dois-je-cloturer",
    },
    {
      label: "impots.gouv.fr — Non-résident de France",
      url: "https://www.impots.gouv.fr/non-resident-de-france",
    },
    {
      label: "CFE — La Sécurité sociale des Français de l'Étranger",
      url: "https://www.cfe.fr",
    },
    {
      label: "service-public.fr — Impôt sur le revenu d'un Français qui part vivre à l'étranger",
      url: "https://www.service-public.fr/particuliers/vosdroits/F31442",
    },
  ],
  related: [
    "bank-account-working-holiday-canada",
    "how-much-money-working-holiday-canada",
  ],
  i18n: {
    fr: {
      title: "PVT : démarches admin côté France avant de partir",
      description:
        "Sécurité sociale, impôts non-résident, CPAM, compte bancaire, mutuelle : tout ce qu'il faut régler en France avant de partir en PVT au Canada, en Australie ou en Nouvelle-Zélande.",
      excerpt:
        "Partir en PVT, ça se prépare aussi côté France. PUMa, impôts de départ, CFE ou assurance privée, compte bancaire non-résident : voici le guide admin complet avant de prendre l'avion.",
      sections: [
        {
          paragraphs: [
            "Le visa est validé, les billets sont réservés — et pourtant, la moitié du travail se passe encore en France. Sécurité sociale, impôts, CPAM, CAF, mutuelle, bail, compte bancaire : chaque poste administratif a sa propre logique quand tu changes de pays de résidence. Mal géré, ça peut coûter cher au retour : rappel de cotisations, impôts à régulariser, ou compte bancaire figé depuis l'autre bout du monde. Ce guide passe en revue les démarches à faire — ou à décider consciemment de ne pas faire — avant de partir en PVT au Canada, en Australie ou en Nouvelle-Zélande. Certains points dépendent de ta situation personnelle (revenus, employeur, type de bail) ; quand c'est le cas, on le précise.",
          ],
        },
        {
          heading: "Sécurité sociale (PUMa) : tes droits s'arrêtent avec ta résidence",
          paragraphs: [
            "La Protection Universelle Maladie (PUMa) couvre les frais de santé de toute personne qui réside en France de manière stable et régulière. Le critère clé est la résidence : l'Assurance Maladie considère que tu dois être présent en France au moins six mois sur douze pour conserver tes droits. Dès que tu pars en PVT — et que tu n'es donc plus résident stable en France — ta couverture PUMa s'éteint de fait. L'Assurance Maladie effectue des contrôles aléatoires et peut demander le remboursement des soins pris en charge après ton départ si ta situation n'a pas été déclarée.",
            "Tu as l'obligation de signaler ton départ à ta CPAM. Le moyen le plus simple est d'utiliser la messagerie de ton compte ameli.fr ou de remplir le formulaire S1105 « Déclaration de transfert de résidence hors de France ». Fais-le dans le mois suivant ton départ. Ta carte Vitale reste physiquement en ta possession, mais elle n'est plus active pour les remboursements une fois tes droits fermés — inutile donc de l'emporter en pensant qu'elle servira à l'étranger.",
          ],
          bullets: [
            "Déclare ton départ à ta CPAM via ameli.fr (messagerie) ou formulaire S1105, dans le mois suivant le départ",
            "La PUMa exige une résidence stable en France (≥ 6 mois / an) — un PVT de 12 à 24 mois y met fin",
            "La carte Vitale devient inactive pour les remboursements après clôture des droits",
            "Ne compte pas sur la PUMa pour te couvrir à l'étranger : elle ne fonctionne pas hors de France",
          ],
        },
        {
          heading: "CFE ou assurance PVT privée : laquelle choisir ?",
          paragraphs: [
            "Une fois la PUMa fermée, deux grandes options s'offrent à toi pour te couvrir : la CFE (Caisse des Français de l'Étranger) ou une assurance PVT privée. Les deux ont des logiques très différentes.",
            "La CFE est un organisme de droit privé chargé d'une mission de service public. Elle propose aux Français expatriés une couverture santé calquée sur le régime général français — remboursements, cotisation retraite, etc. Son avantage principal : la continuité de droits à la Sécurité sociale française. Elle est particulièrement adaptée aux personnes qui ont des soins réguliers ou qui veulent maintenir leur couverture retraite. En revanche, ses cotisations sont plus élevées qu'une assurance PVT de base, et elle ne dispense pas forcément de l'assurance exigée par le visa.",
            "Les assurances PVT privées (comme Chapka, AVA, Mondassur et autres) sont conçues spécifiquement pour les pvtistes. Elles couvrent soins courants, hospitalisation, rapatriement, et répondent généralement aux exigences des ambassades pour l'obtention du visa. Elles sont souvent moins chères que la CFE pour un jeune en bonne santé sur 12 à 24 mois. Important : le visa PVT exige dans tous les cas une assurance valable pour toute la durée du séjour. Vérifie que ta couverture est conforme avant de déposer ta demande de visa.",
            "Note : certains pvtistes partent avec une assurance privée et s'affilient à la CFE plus tard s'ils s'installent durablement. Les deux ne sont pas mutuellement exclusifs — mais pour un premier PVT, l'assurance privée dédiée est la solution la plus courante.",
          ],
          bullets: [
            "CFE : continuité de droits Sécu française, cotisation retraite possible, mais cotisations plus élevées",
            "Assurance PVT privée : conçue pour les pvtistes, couvre le visa, généralement moins chère pour un séjour de 1 à 2 ans",
            "Le visa PVT exige une assurance couvrant l'intégralité du séjour — à vérifier impérativement avant le dépôt du dossier",
            "Pour faire le calcul : compare les cotisations CFE avec les primes des assureurs PVT selon ta destination et ta durée",
          ],
        },
        {
          heading: "Impôts : déclarer l'année de départ et devenir non-résident fiscal",
          paragraphs: [
            "Changer de résidence fiscale, ce n'est pas automatique : tu dois en informer le fisc. Dès que tu t'établis durablement à l'étranger (ce qui est le cas pour un PVT de 12 mois ou plus), tu deviens non-résident fiscal de France au sens de l'article 4 B du CGI. En pratique, tu n'es plus imposable en France sur tes revenus étrangers, mais tu restes imposable sur tes éventuels revenus de source française (loyer perçu en France, par exemple).",
            "L'année du départ, tu dois déposer une déclaration de revenus classique (formulaire 2042) pour les revenus perçus du 1er janvier jusqu'à la date de ton départ. Coche la case « départ à l'étranger » et indique la date d'installation à l'étranger. Si tu perçois ensuite des revenus de source française après ton départ, il faudra aussi compléter le formulaire 2047. Le Centre des Finances Publiques dont tu relevais reste compétent pour l'année de départ ; à partir de l'année suivante, c'est le Service des Impôts des Particuliers Non-Résidents (SIPNR) qui devient ton interlocuteur. Les informations pratiques se trouvent sur la page « Je pars à l'étranger » d'impots.gouv.fr.",
            "Si tu pars en cours d'année, ton taux d'imposition peut être différent selon la proportion de tes revenus français. Certaines conventions fiscales entre la France et ton pays de destination (Canada, Australie, Nouvelle-Zélande) régissent spécifiquement l'imposition des salaires gagnés là-bas : tu n'auras en général pas à les déclarer en France, mais les règles varient. En cas de doute, consulte un comptable ou le SIPNR.",
          ],
          bullets: [
            "Déclare ton départ sur impots.gouv.fr — rubrique « Je pars à l'étranger »",
            "Dépose une déclaration 2042 pour les revenus du 1er janv. jusqu'à ta date de départ",
            "Coche « départ à l'étranger » et indique la date d'installation hors de France",
            "Après le départ, le SIPNR (Service des Impôts des Particuliers Non-Résidents) devient ton centre fiscal",
            "Les revenus gagnés à l'étranger ne sont généralement pas imposables en France si tu es non-résident fiscal — mais vérifie la convention fiscale applicable",
          ],
        },
        {
          heading: "Compte bancaire français : statut non-résident et frais à prévoir",
          paragraphs: [
            "Contrairement au Japon, la France ne t'oblige pas à fermer ton compte bancaire quand tu pars à l'étranger. Tu peux tout à fait le conserver. Cela dit, tu as l'obligation légale d'informer ta banque de ton changement de statut fiscal (passage en non-résident) : ne pas le faire peut entraîner des complications fiscales, et certaines banques le découvrent d'elles-mêmes via les échanges automatiques d'informations fiscales.",
            "La plupart des banques traditionnelles (BNP Paribas, Société Générale, Crédit Agricole, etc.) maintiennent les comptes des non-résidents, mais appliquent souvent des frais supplémentaires : frais de gestion mensuels plus élevés, commissions sur les virements internationaux, frais de change sur les paiements en devise étrangère. Certaines banques en ligne françaises (Boursorama, Hello bank…) ont des politiques moins accommodantes pour les non-résidents — vérифie les conditions générales avant de partir. Le conseil pratique : garde un compte français actif pour recevoir des éventuels remboursements (impôts, CAF), prélever tes abonnements restants, et permettre à tes proches de te faire des virements. Mais pour tes dépenses quotidiennes à l'étranger, un compte multi-devises évite les frais de change à répétition.",
          ],
          bullets: [
            "Informe ta banque de ton départ et de ton changement de statut (non-résident) — obligatoire légalement",
            "La plupart des banques traditionnelles conservent le compte, avec parfois des frais supplémentaires",
            "Vérifie les CGU de ta banque en ligne française : certaines bloquent l'accès aux non-résidents",
            "Garde un compte français actif pour les remboursements, prélèvements et virements depuis la France",
            "Pour les dépenses en destination, un compte multi-devises sans frais de change est bien plus pratique",
          ],
        },
        {
          heading: "Le reste de la check-list : mutuelle, CAF, logement",
          paragraphs: [
            "Mutuelle complémentaire : si tu as une mutuelle individuelle (hors mutuelle d'entreprise), tu peux la résilier avant ton départ en invoquant le motif « changement de domicile / départ à l'étranger » (article L113-16 du Code des Assurances). Envoie une lettre recommandée avec AR en joignant la copie de ton billet aller et de ton visa PVT. La résiliation prend effet un mois après réception. Pour une mutuelle d'entreprise, parle-en à ton employeur — si tu démissionnes, elle cesse à la date de fin de contrat.",
            "CAF : si tu bénéficies d'une aide au logement (APL, ALF…), déclare ton départ sur caf.fr dès que tu remets les clés à ton propriétaire. Les aides s'arrêtent à la date de libération du logement ; ne pas déclarer le changement peut entraîner un trop-perçu à rembourser.",
            "Logement : le préavis légal pour un logement vide est de trois mois (un mois en zone tendue). Pour un meublé, c'est un mois. Tu peux le réduire en accord avec ton propriétaire. Pense à donner ton préavis bien en avance — idéalement dès que ton visa est validé — pour éviter de payer un loyer inutile.",
            "Abonnements et domiciliation : résilie ou mets en pause tes abonnements (téléphone, streaming, salle de sport…). Si tu as besoin d'une adresse postale en France, un proche peut jouer le rôle de domiciliation pour recevoir ton courrier officiel.",
          ],
          bullets: [
            "Mutuelle : résiliation pour « départ à l'étranger » (Art. L113-16) — LRAR avec billet + copie PVT, effet à 1 mois",
            "CAF : déclare le départ sur caf.fr dès la remise des clés pour éviter un trop-perçu",
            "Bail : préavis 3 mois (vide) ou 1 mois (meublé / zone tendue) — donne-le dès la validation du visa",
            "Domiciliation : un proche peut recevoir ton courrier officiel pendant ton absence",
            "Résilie ou mets en pause les abonnements inutiles (téléphone FR, streaming, etc.)",
          ],
        },
        {
          heading: "Comment Tern aide",
          paragraphs: [
            "Tern est un compte multi-devises conçu pour les pvtistes et les travailleurs en mobilité internationale — ouverture depuis ton téléphone avant même de prendre l'avion (inscription en pré-lancement ouverte). Ton IBAN ou numéro de compte est disponible avant l'atterrissage, ce qui te permet de le communiquer à ton employeur dès le premier jour sans attendre un compte local. Les conversions se font au taux interbancaire, sans marge cachée, et les retraits aux distributeurs locaux sont sans frais supplémentaires. Pendant que ton compte bancaire français sert à gérer tes affaires côté France, Tern prend en charge tes dépenses quotidiennes à l'étranger — sans que chaque paiement ne te coûte en frais de change.",
          ],
        },
      ],
      faq: [
        {
          q: "Est-ce que je suis obligé(e) de résilier mon contrat avec la Sécu avant de partir en PVT ?",
          a: "Tu n'as pas à « résilier » la Sécurité sociale, mais tu dois déclarer ton départ à ta CPAM — via ameli.fr ou le formulaire S1105 — dans le mois suivant ton départ. Tes droits PUMa se ferment automatiquement dès que tu ne remplis plus la condition de résidence stable en France (présence au moins 6 mois par an). Si tu oublies de déclarer, la CPAM peut contrôler ta situation et réclamer le remboursement de soins pris en charge après ton départ réel.",
        },
        {
          q: "Vaut-il mieux la CFE ou une assurance PVT privée ?",
          a: "Pour un premier PVT de 12 à 24 mois, la majorité des pvtistes optent pour une assurance privée dédiée (Chapka, AVA, etc.) : moins chère, pensée pour le visa, et suffisante pour un séjour en bonne santé. La CFE est plus pertinente si tu as des soins réguliers, si tu veux maintenir tes droits à la retraite française, ou si tu envisages de t'expatrier longtemps. Dans tous les cas, vérifie que ta couverture est valable pour toute la durée du visa — c'est une condition d'obtention du PVT.",
        },
        {
          q: "Est-ce que je dois faire une déclaration de revenus en France l'année de mon départ ?",
          a: "Oui. Tu déclares les revenus perçus du 1er janvier jusqu'à ta date de départ sur le formulaire 2042, en cochant la case « départ à l'étranger ». Les revenus gagnés à l'étranger après ton départ ne sont en général pas imposables en France si tu es devenu(e) non-résident fiscal — mais cela dépend de la convention fiscale entre la France et ton pays de destination. La page « Je pars à l'étranger » d'impots.gouv.fr détaille la marche à suivre.",
        },
      ],
    },
    en: {
      title: "France admin checklist before your working holiday (PVT)",
      description:
        "Everything French residents need to sort before leaving on a PVT working holiday: social security (PUMa), tax non-residency, CPAM notification, bank accounts, CFE vs private insurance.",
      excerpt:
        "Heading off on a PVT to Canada, Australia, or New Zealand? The French admin side matters too — PUMa coverage, departure tax return, CFE vs private insurance, and keeping your bank account. Here is the full checklist.",
      sections: [
        {
          paragraphs: [
            "Your visa is approved and the flights are booked — but half the work still needs to happen in France. Social security, taxes, CPAM, CAF, health top-up insurance, your lease, your bank account: each one has its own logic when you change your country of residence. Getting it wrong can be expensive on return — back-dated contributions, tax adjustments, or a frozen bank account from the other side of the world. This guide covers the steps to take — or to consciously decide not to take — before leaving on a PVT (Programme Vacances-Travail) to Canada, Australia, or New Zealand. Some points depend on your personal situation (income, employment, lease type); we flag those as they come up.",
          ],
        },
        {
          heading: "Social security (PUMa): coverage ends when your residency does",
          paragraphs: [
            "The Protection Universelle Maladie (PUMa) covers healthcare costs for anyone who lives in France on a stable and regular basis. The key criterion is residence: the Assurance Maladie requires you to be physically present in France for at least six months per year to keep your rights. Once you leave on a working holiday — and are therefore no longer a stable French resident — your PUMa coverage lapses. The Assurance Maladie runs random checks and can demand repayment of costs covered after your actual departure if your situation was not declared.",
            "You are required to notify your CPAM of your departure. The easiest way is through the messaging section of your ameli.fr account, or by submitting form S1105 (\"Déclaration de transfert de résidence hors de France\"). Do this within one month of leaving. Your Carte Vitale remains physically in your possession, but it will no longer be active for reimbursements once your rights are closed — there is no point taking it abroad expecting it to work.",
          ],
          bullets: [
            "Notify your CPAM of your departure via ameli.fr (messaging) or form S1105, within one month of leaving",
            "PUMa requires stable residency in France (at least 6 months per year) — a 12–24-month working holiday ends that",
            "Your Carte Vitale becomes inactive for reimbursements once your rights are closed",
            "PUMa does not cover you abroad — do not rely on it once you have left France",
          ],
        },
        {
          heading: "CFE or private working holiday insurance: which to choose?",
          paragraphs: [
            "Once PUMa closes, you have two main options for health coverage: the CFE (Caisse des Français de l'Étranger) or a dedicated private working holiday insurance policy. They work very differently.",
            "The CFE is a private-law body carrying out a public service mission. It offers French nationals abroad a health coverage scheme modelled on the French system — reimbursements, and optional pension contributions. Its main advantage is continuity of French social security rights. It suits people with ongoing health needs or those who want to maintain pension contributions. On the downside, its premiums are higher than a basic working holiday policy, and it does not necessarily replace the insurance required by the visa itself.",
            "Private working holiday insurance policies (Chapka, AVA, Mondassur, and others) are built specifically for pvtistes. They cover routine care, hospitalisation, repatriation, and generally meet embassy requirements for visa approval. For a healthy person going for 12 to 24 months, they are typically cheaper than the CFE. One key point: the working holiday visa requires health insurance covering the full duration of your stay in all cases. Make sure your cover is compliant before submitting your visa application.",
            "Some pvtistes start with a private policy and join the CFE later if they settle abroad long-term. The two are not mutually exclusive — but for a first working holiday, a dedicated private policy is the most common approach.",
          ],
          bullets: [
            "CFE: continuity of French social security rights, optional pension contributions, but higher premiums",
            "Private working holiday insurance: built for pvtistes, satisfies visa requirements, generally cheaper for a 1–2-year stay",
            "The working holiday visa requires insurance covering the full duration of stay — verify compliance before applying",
            "Compare CFE premiums against private insurers based on your destination, duration, and health situation",
          ],
        },
        {
          heading: "Taxes: filing for the year of departure and becoming a non-resident",
          paragraphs: [
            "Changing your tax residency is not automatic — you need to inform the tax authority. Once you establish yourself durably abroad (which a working holiday of 12 months or more qualifies as), you become a non-resident for French tax purposes under article 4 B of the General Tax Code. In practice, you are no longer taxable in France on your foreign income, but you remain taxable on any French-source income (rent from a French property, for example).",
            "For the year of departure, you must file a standard income tax return (form 2042) covering income from January 1st up to your departure date. Tick the box marked \"départ à l'étranger\" and enter the date you installed yourself abroad. If you also receive French-source income after leaving, you will need to complete form 2047 as well. The tax office that handled your file until departure remains responsible for that year; from the following year, your contact becomes the Service des Impôts des Particuliers Non-Résidents (SIPNR). The practical steps are outlined on the \"Je pars à l'étranger\" page of impots.gouv.fr.",
            "If you leave mid-year, your tax rate may differ depending on the proportion of your French income. Bilateral tax treaties between France and your destination (Canada, Australia, New Zealand) generally mean you will not need to declare your working holiday earnings in France once you are a non-resident — but the rules vary. If in doubt, contact the SIPNR or consult an accountant.",
          ],
          bullets: [
            "Declare your departure on impots.gouv.fr — section \"Je pars à l'étranger\"",
            "File form 2042 for income from January 1st to your departure date",
            "Tick \"départ à l'étranger\" and record your installation date abroad",
            "From the following year, the SIPNR (Non-Resident Tax Service) is your tax office",
            "Foreign earnings are generally not taxable in France once you are a non-resident — but check the applicable tax treaty",
          ],
        },
        {
          heading: "French bank account: non-resident status and what it costs",
          paragraphs: [
            "Unlike some countries, France does not require you to close your bank account when you move abroad. You can absolutely keep it. That said, you are legally required to inform your bank of your change in tax status (switching to non-resident): failing to do so can cause tax complications, and some banks detect the change through automatic tax information exchanges.",
            "Most traditional French banks (BNP Paribas, Société Générale, Crédit Agricole, etc.) keep accounts for non-residents but often apply higher monthly management fees, commissions on international transfers, and currency conversion charges on foreign payments. Some French online banks have less accommodating policies for non-residents — check the terms and conditions before you leave. The practical advice: keep a French account active to receive potential refunds (taxes, CAF), maintain direct debits for remaining subscriptions, and allow family to send you money. But for daily spending abroad, a multi-currency account avoids repeated conversion fees.",
          ],
          bullets: [
            "Inform your bank of your departure and non-resident change of status — legally required",
            "Most traditional banks keep the account open, but may add fees for non-residents",
            "Check your French online bank's terms — some restrict access for non-residents",
            "Keep a French account active for refunds, direct debits, and transfers from France",
            "For spending at your destination, a no-fee multi-currency account is far more practical",
          ],
        },
        {
          heading: "The rest of the checklist: top-up insurance, CAF, lease",
          paragraphs: [
            "Complementary health insurance (mutuelle): if you have an individual policy (not an employer scheme), you can cancel it before departure using the grounds of \"change of domicile / moving abroad\" (article L113-16 of the Insurance Code). Send a recorded letter with your flight confirmation and a copy of your PVT visa. Cancellation takes effect one month after receipt. For an employer-provided mutuelle, check with your HR department — it generally ends on the last day of your employment contract.",
            "CAF: if you receive housing benefit (APL, ALF, etc.), declare your departure on caf.fr as soon as you hand back the keys. Benefits stop on the date you vacate the property; failing to declare the change can result in overpayments you will have to reimburse.",
            "Lease: the legal notice period for an unfurnished rental is three months (one month in designated high-pressure zones). For a furnished flat, it is one month. You can negotiate a shorter period with your landlord. Give notice as early as possible — ideally as soon as your visa is approved — to avoid paying rent you no longer need.",
            "Subscriptions and postal address: cancel or pause subscriptions (French phone plan, streaming, gym). If you need a French mailing address while abroad, a family member or trusted friend can receive official post on your behalf.",
          ],
          bullets: [
            "Mutuelle: cancel for \"moving abroad\" (Art. L113-16) — recorded letter with flight + PVT copy, one month's notice",
            "CAF: declare your departure on caf.fr when you return the keys — avoids overpayment recovery",
            "Lease: 3 months notice (unfurnished) or 1 month (furnished / high-pressure zone) — start the clock early",
            "Postal address: a trusted contact in France can receive official correspondence on your behalf",
            "Cancel or pause unnecessary subscriptions (French SIM, streaming, etc.)",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Tern is a multi-currency account built for working holiday travellers — open from your phone before you board the flight, with pre-launch registration available now. Your account details are ready before you land, so you can share them with an employer on day one without waiting for a local bank account. Transfers from euros convert at the mid-market rate with no hidden margin, and ATM withdrawals at your destination carry no extra fee. While your French bank account handles the France-side admin, Tern takes care of your day-to-day spending abroad — without the conversion fees that add up fast on a working holiday budget.",
          ],
        },
      ],
      faq: [
        {
          q: "Do I need to cancel my social security before leaving on a working holiday?",
          a: "You do not formally \"cancel\" social security, but you must notify your CPAM of your departure — via ameli.fr or form S1105 — within one month of leaving. Your PUMa rights close automatically once you no longer meet the stable residency condition (at least 6 months per year in France). If you forget to declare your departure, the CPAM can audit your situation and recover costs covered after your actual leaving date.",
        },
        {
          q: "Is the CFE or a private working holiday insurance policy better?",
          a: "For a first working holiday lasting 12 to 24 months, most pvtistes go with a dedicated private policy (Chapka, AVA, etc.): cheaper, designed for the visa, and sufficient for a healthy traveller. The CFE makes more sense if you have ongoing health needs, want to maintain French pension contributions, or plan a longer period abroad. In all cases, check that your cover is valid for the entire duration of your visa — it is a condition of the PVT application.",
        },
        {
          q: "Do I need to file a French tax return in the year I leave?",
          a: "Yes. You declare income received from January 1st to your departure date on form 2042, ticking the box for \"départ à l'étranger\". Working holiday earnings abroad are generally not taxable in France once you have become a non-resident — but this depends on the tax treaty between France and your destination country. The \"Je pars à l'étranger\" section of impots.gouv.fr explains the full process.",
        },
      ],
    },
  },
};
