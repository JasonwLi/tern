import type { Article } from "../types";

export const article: Article = {
  slug: "brazil-departure-checklist-working-holiday",
  kind: "guide",
  date: "2026-06-10",
  emoji: "🌴",
  accent: "bg-coral-300",
  readMinutes: 7,
  sources: [
    {
      label: "Receita Federal — Comunicar saída definitiva do país (CSDP)",
      url: "https://www.gov.br/pt-br/servicos/comunicar-saida-definitiva-do-pais",
    },
    {
      label: "Receita Federal — Portal CSDP (sistema online)",
      url: "https://www.csdp.receita.fazenda.gov.br/csdp/",
    },
    {
      label: "Previdência Social — Contribuição facultativa para brasileiros no exterior",
      url: "https://previdenciarista.com/blog/brasileiros-residentes-no-exterior-podem-pagar-o-inss/",
    },
  ],
  related: [
    "working-holiday-for-brazilians",
    "bank-account-working-holiday-new-zealand",
  ],
  i18n: {
    pt: {
      title: "Checklist Brasil: o que resolver antes do WHV",
      description:
        "Saída Definitiva vale a pena para um WHV de 1 ano? CSDP, DSDP, IRPF do ano de saída, INSS facultativo, conta bancária BRL e PIX do exterior, chip de celular e procuração — tudo o que você precisa resolver antes de embarcar.",
      excerpt:
        "Um WHV de 1 ano pode ou não justificar a Declaração de Saída Definitiva. Entenda os riscos da dupla residência fiscal, o que fazer com INSS, conta bancária, PIX e chip antes de embarcar.",
      sections: [
        {
          paragraphs: [
            "Você tem o visto nas mãos e a passagem comprada. Mas antes de embarcar para o seu working holiday, existe uma lista de pendências do lado brasileiro que, se ignorada, pode gerar multas, conta bloqueada ou problemas com a Receita Federal — tudo a distância e em reais. Este guia cobre os principais pontos: Declaração de Saída Definitiva (quando faz sentido e quando não faz), Imposto de Renda do ano de saída, INSS facultativo, conta bancária e PIX de fora, chip de celular e procuração. Cada situação é diferente; para dúvidas tributárias específicas, consulte um contador especializado em brasileiros no exterior.",
          ],
        },
        {
          heading: "Saída Definitiva: vale a pena para um WHV de 1 ano?",
          paragraphs: [
            "A Declaração de Saída Definitiva do País (DSDP) é o documento que encerra oficialmente sua residência fiscal no Brasil. Antes dela, você precisa enviar a Comunicação de Saída Definitiva do País (CSDP) — um aviso prévio à Receita Federal, feito pelo portal csdp.receita.fazenda.gov.br usando login gov.br. O prazo da CSDP é até o último dia útil de fevereiro do ano seguinte ao da saída. A DSDP é entregue no mesmo período da declaração anual de IRPF do ano seguinte.",
            "Para um WHV de exatamente 1 ano, a resposta não é automática. O risco de NÃO declarar: se você ficar fora do Brasil por 12 meses consecutivos sem ter enviado a CSDP, a Receita Federal pode enquadrá-lo como não residente de fato — o que cria inconsistência nos seus dados cadastrais e pode gerar pendências. O risco de declarar para uma estadia curta: ao encerrar a residência fiscal, seus rendimentos brasileiros (aluguel, investimentos, aposentadoria) passam a ser tributados na fonte como não residente — normalmente 15% ou 25% — sem possibilidade de usar a tabela progressiva ou dedução de dependentes. Além disso, você precisará converter sua conta bancária para uma Conta de Domiciliado no Exterior (o que pode restringir crédito e alguns serviços).",
            "Regra prática: se você vai ficar exatamente 12 meses e voltar definitivamente ao Brasil, a maioria dos especialistas recomenda NÃO enviar a CSDP — você permanece residente fiscal, declara normalmente no ano seguinte e não enfrenta as complicações de não residente. Se a viagem puder se estender, se você vai trabalhar e acumular renda no exterior, ou se já tem renda tributável no Brasil (aluguel, investimentos), consulte um contador antes de decidir.",
          ],
          bullets: [
            "CSDP: comunicação online pelo portal da Receita Federal — prazo até o último dia útil de fevereiro do ano seguinte à saída",
            "DSDP: declaração formal entregue no período do IRPF do ano seguinte — multa mínima de R$ 165,74 por atraso",
            "Após a DSDP: rendimentos brasileiros tributados na fonte como não residente (15%–25%), sem ajuste anual",
            "Risco de dupla residência: ficar 12 meses fora sem CSDP pode gerar inconsistência cadastral na Receita Federal",
            "Para WHV de exatamente 1 ano sem renda no Brasil: manter residência fiscal costuma ser mais simples",
          ],
        },
        {
          heading: "IRPF do ano de saída: o que declarar e quando pagar",
          paragraphs: [
            "Se você decidir fazer a Saída Definitiva, precisará entregar a DSDP referente ao ano em que saiu. Essa declaração cobre apenas o período de 1° de janeiro até a data da saída — os rendimentos obtidos depois disso no exterior não entram. O imposto eventualmente devido é pago em cota única no prazo da declaração. Não é possível parcelar como na declaração de ajuste anual normal.",
            "Se você mantiver a residência fiscal, continua obrigado a entregar a declaração de ajuste anual normalmente no ano seguinte, incluindo todos os rendimentos do ano — mesmo os obtidos no exterior. O Brasil tributa residentes fiscais pela renda mundial. Rendimentos de trabalho no exterior recebidos por residente fiscal brasileiro são tributáveis no Brasil; verifique se existe acordo de bitributação com o país de destino (Brasil tem acordo com vários países, incluindo Nova Zelândia e Austrália têm tratamento diferenciado).",
          ],
          bullets: [
            "DSDP cobre rendimentos de 1° de janeiro até a data da saída — pagamento em cota única",
            "Residente fiscal: deve declarar renda mundial, incluindo salário do exterior",
            "Multa por atraso na DSDP: mínimo R$ 165,74 ou até 20% do IR devido",
            "Verifique acordo de bitributação com o país de destino antes de partir",
          ],
        },
        {
          heading: "INSS: pagar como facultativo, pausar ou encerrar?",
          paragraphs: [
            "Ao sair do Brasil, você perde o vínculo contributivo automático com o INSS. Se quiser manter a contagem de tempo para aposentadoria, pode se inscrever como contribuinte facultativo — isso vale para quem não tem vínculo empregatício no Brasil e tem pelo menos 16 anos de idade.",
            "Em 2026, as alíquotas para contribuinte facultativo são: 20% (plano normal) sobre qualquer valor entre o salário mínimo de R$ 1.621,00 e o teto de R$ 8.475,55 — contribuição mínima de R$ 324,20/mês; 11% (plano simplificado) sobre o salário mínimo — R$ 178,31/mês, mas dá acesso apenas à aposentadoria por idade, não por tempo de contribuição; 5% (plano baixa renda) — R$ 81,05/mês, exclusivo para segurado especial, não se aplica ao caso geral. O pagamento é feito via GPS gerada no portal Meu INSS (app ou site), a partir de qualquer banco brasileiro com acesso por internet banking — dá para pagar do exterior. O prazo é até o dia 15 do mês seguinte.",
            "Se você tem poucos anos de contribuição e quer garantir a aposentadoria, manter o INSS facultativo faz sentido. Se já tem tempo de contribuição significativo ou prefere investir o dinheiro de outra forma, pausar pode ser razoável — mas avalie o custo-benefício com calma, pois lacunas longas encarecem a recomposição depois.",
          ],
          bullets: [
            "Facultativo 20% (plano normal): R$ 324,20/mês mínimo — acesso a aposentadoria por tempo de contribuição e por idade",
            "Facultativo 11% (plano simplificado): R$ 178,31/mês — apenas aposentadoria por idade",
            "Pagamento via GPS no Meu INSS: pode ser feito do exterior via internet banking brasileiro",
            "Prazo: até dia 15 do mês seguinte; atraso gera perda da competência (não é possível pagar com atraso)",
            "Informe o INSS sobre sua mudança de endereço para evitar pendências cadastrais",
          ],
        },
        {
          heading: "CPF, conta bancária e PIX do exterior",
          paragraphs: [
            "Boas notícias: o CPF não é cancelado pela saída definitiva e continua válido para sempre. Você pode e deve mantê-lo ativo — ele é necessário para conta bancária, acesso ao gov.br, receita de imóveis e qualquer pendência no Brasil.",
            "O que muda são as contas bancárias. Se você enviar a DSDP e virar não residente oficial, bancos tradicionais precisam converter sua conta para uma Conta de Domiciliado no Exterior (CDE), prevista na Resolução Conjunta Bacen/CVM nº 13/2024. Não é possível simplesmente aproveitar a conta de residente — é necessário abrir uma nova CDE e encerrar a anterior. Algumas fintechs e bancos como o C6 Bank já oferecem conta corrente para clientes com domicílio no exterior; o Banco Rendimento tem produto específico (planos Basic a partir de R$ 150/ano ou Premium a R$ 299,90/mês). A Conta de Não Residente (CNR) permite PIX, TED e acesso a renda fixa na B3.",
            "Se você mantiver residência fiscal (não fizer DSDP), pode manter a conta de residente normalmente — mas verifique os termos do seu banco, pois alguns (especialmente fintechs) bloqueiam contas ao detectar endereço estrangeiro. Nubank, por exemplo, permite uso para pagamentos e PIX, mas pode exigir atualização de cadastro. Inter e outros bancos digitais têm políticas variadas — confirme com o banco antes de viajar.",
            "Para enviar dinheiro para casa (BRL) ou receber reais de familiares, o PIX funciona normalmente desde que você tenha uma conta ativa no Brasil. Plataformas como Wise, Remessa Online e Nomad permitem câmbio e transferências internacionais em reais com taxas mais competitivas do que transferências bancárias tradicionais.",
          ],
          bullets: [
            "CPF: permanece válido independentemente da saída definitiva — mantenha-o ativo",
            "Não residente oficial: precisa converter conta para CDE (Conta de Domiciliado no Exterior) — C6 Bank e Banco Rendimento têm produtos específicos",
            "Residente fiscal mantido: pode manter conta comum, mas confirme política do seu banco (algumas fintechs bloqueiam por endereço estrangeiro)",
            "PIX funciona normalmente do exterior em contas ativas brasileiras",
            "Para câmbio BRL ↔ NZD/AUD: Wise, Remessa Online e Nomad oferecem taxas mais competitivas que bancos tradicionais",
          ],
        },
        {
          heading: "Chip de celular, WhatsApp e procuração",
          paragraphs: [
            "Pode parecer detalhe, mas o número de celular brasileiro é crítico: praticamente todos os bancos, o gov.br, o Meu INSS, o e-CAC da Receita Federal e muitos serviços públicos usam SMS ou WhatsApp para autenticação em dois fatores. Se você cancelar o chip antes de viajar, ou se a operadora desativar o número por falta de uso, pode perder acesso a contas bancárias, declarações de IR e outros serviços enquanto estiver fora.",
            "Solução recomendada: mantenha o chip brasileiro ativo com plano de baixo custo (existem planos de controle por R$ 10–20/mês que mantêm o número vivo). Alternativamente, transfira o número para um familiar de confiança via portabilidade, combinando o acesso para quando precisar. Outro recurso importante é a procuração pública ou eletrônica: uma pessoa de confiança no Brasil (pai, mãe, irmão) com procuração pode representar você em bancos, cartórios, Receita Federal e até para assinar contratos. Desde 2026, uma decisão do STJ confirmou que procurações assinadas digitalmente pelo portal gov.br são válidas e dispensam reconhecimento de firma — isso facilita muito outorgar poderes antes de embarcar. Para questões fiscais (Receita Federal), o representante pode ser nomeado como responsável fiscal pelo e-CAC.",
          ],
          bullets: [
            "Mantenha o chip brasileiro ativo — número é chave para 2FA de bancos e gov.br",
            "Planos de controle de baixo custo (R$ 10–20/mês) mantêm o número sem gastar",
            "Procuração digital pelo gov.br: válida e sem reconhecimento de firma (decisão STJ 2026)",
            "Responsável fiscal no e-CAC: recomendado se fizer a Saída Definitiva para receber notificações da Receita Federal",
            "Mantenha uma cópia digital de documentos importantes: passaporte, CPF, RG, título de eleitor",
          ],
        },
        {
          heading: "Como a Tern ajuda",
          paragraphs: [
            "A Tern é uma conta multimoeda que você abre pelo celular antes de embarcar — passaporte e aprovação do visto de working holiday são suficientes (pré-cadastro aberto agora). Você recebe os dados da conta antes de pousar no destino, podendo compartilhar com o primeiro empregador já no primeiro dia sem esperar abertura de conta local. As conversões BRL → NZD/AUD usam a taxa de câmbio interbancária, sem margem escondida, e os saques em ATMs locais não têm tarifa. Enquanto você organiza sua conta bancária brasileira para não residentes e resolve a burocracia do lado de cá, a Tern garante que você tenha acesso ao dinheiro do lado de lá desde o primeiro momento.",
          ],
        },
      ],
      faq: [
        {
          q: "Se eu ficar exatamente 1 ano no exterior, preciso fazer a Saída Definitiva?",
          a: "Não necessariamente. A Receita Federal enquadra como não residente quem fica fora por 12 meses consecutivos sem ter enviado a CSDP — mas isso só gera problema se você tiver renda tributável no Brasil ou se ficar irregularizado por não declarar. Para um WHV de exatamente 1 ano sem renda no Brasil, muitos especialistas recomendam manter a residência fiscal e entregar a declaração de ajuste anual normal ao retornar. Se a viagem puder se prolongar, ou se você tem aluguel, dividendos ou investimentos no Brasil, vale consultar um contador especializado em expatriados antes de decidir.",
        },
        {
          q: "Posso pagar o INSS de fora do Brasil?",
          a: "Sim. Você se inscreve como contribuinte facultativo pelo portal Meu INSS (meuinss.gov.br) usando login gov.br, gera a GPS (Guia de Previdência Social) e paga via internet banking de qualquer banco brasileiro com acesso online. Dá para fazer tudo do exterior. O prazo é até o dia 15 de cada mês — não é possível pagar com atraso (a competência é perdida). Em 2026, o plano simplificado de 11% custa R$ 178,31/mês sobre o salário mínimo de R$ 1.621,00.",
        },
        {
          q: "Minha conta no Nubank ou Inter vai ser bloqueada quando eu morar fora?",
          a: "Depende de dois fatores: se você fez ou não a Saída Definitiva, e da política de cada banco. Se você mantiver residência fiscal (sem DSDP), tecnicamente pode continuar usando a conta — mas fintechs como Nubank exigem atualização cadastral e podem restringir serviços ao detectar endereço estrangeiro. Se você virar não residente oficial, precisará converter para uma Conta de Domiciliado no Exterior (CDE); o Nubank não oferece esse produto, então seria necessário migrar para um banco que tenha, como C6 Bank ou Banco Rendimento. Confirme a política do seu banco antes de viajar para evitar surpresas.",
        },
      ],
    },
    en: {
      title: "Brazil admin checklist before your working holiday",
      description:
        "Should you file a Declaração de Saída Definitiva before a 1-year working holiday? CSDP/DSDP deadlines, departure-year income tax, INSS voluntary contributions, keeping a BRL bank account and using PIX from abroad, SIM card strategy, and power of attorney — everything to sort before you leave Brazil.",
      excerpt:
        "A 1-year working holiday may or may not justify filing Brazil's Declaração de Saída Definitiva. Understand the double-residency risk, what to do about INSS, your bank account, PIX, and SIM card before you board.",
      sections: [
        {
          paragraphs: [
            "You have your visa and your flight booked. But before you leave Brazil for a working holiday, there is a list of Brazilian-side tasks that, if ignored, can mean fines, a blocked account, or headaches with the Receita Federal — all from thousands of kilometres away and denominated in reais. This guide covers the main points: the Declaração de Saída Definitiva (when it makes sense and when it does not), income tax for the year you leave, voluntary INSS contributions, bank accounts and PIX from abroad, your SIM card, and power of attorney. Every situation is different; for tax-specific questions, consult an accountant who specialises in Brazilians abroad.",
          ],
        },
        {
          heading: "Saída Definitiva: worth filing for a 1-year working holiday?",
          paragraphs: [
            "The Declaração de Saída Definitiva do País (DSDP) is the document that officially ends your fiscal residency in Brazil. Before it, you file the Comunicação de Saída Definitiva do País (CSDP) — a prior notice to the Receita Federal, submitted online at csdp.receita.fazenda.gov.br using your gov.br login. The CSDP deadline is the last business day of February of the year after you leave. The DSDP itself is filed during the regular annual income-tax window in the year after departure.",
            "For a working holiday of exactly one year, the answer is not automatic. The risk of NOT filing: if you remain outside Brazil for 12 consecutive months without having sent a CSDP, the Receita Federal can classify you as a de facto non-resident — creating a mismatch in your registration data that can generate pending issues. The risk of filing for a short stay: once you close your fiscal residency, any Brazilian-source income (rent, investments, pension) becomes subject to withholding tax as a non-resident — typically 15% or 25% — with no option to use the progressive table or deduct dependants. You also need to convert your bank account to a Conta de Domiciliado no Exterior, which can restrict credit and some services.",
            "Practical rule: if you are going for exactly 12 months and returning to Brazil for good, most specialists recommend NOT filing the CSDP. You remain a fiscal resident, file a normal annual declaration the following year, and avoid the non-resident complications. If the trip might extend, if you will earn income abroad and want to avoid double taxation, or if you already have taxable income in Brazil (rent, dividends, investments), consult an accountant before deciding.",
          ],
          bullets: [
            "CSDP: online notice via the Receita Federal portal — deadline last business day of February the year after departure",
            "DSDP: formal declaration filed during the following year's IRPF window — minimum fine of R$ 165.74 for late submission",
            "After DSDP: Brazilian-source income taxed at source as non-resident (15%–25%), no annual adjustment return",
            "Double-residency risk: being abroad 12 months without a CSDP can create a classification mismatch with the Receita Federal",
            "For a strict 1-year WHV with no Brazilian income: keeping fiscal residency is usually simpler",
          ],
        },
        {
          heading: "Income tax for the year you leave",
          paragraphs: [
            "If you decide to file the Saída Definitiva, you will need to submit a DSDP covering the year you left. This declaration covers only the period from 1 January up to your departure date — income earned abroad after that date is excluded. Any tax owed is paid in a single instalment by the filing deadline. You cannot split it into monthly payments the way you can with a regular annual return.",
            "If you keep your fiscal residency, you continue to file a standard annual adjustment declaration the following year, including all income for the year — even income earned abroad. Brazil taxes fiscal residents on worldwide income. Salaries from working abroad are in principle taxable in Brazil; check whether a double-taxation agreement exists with your destination country before you leave.",
          ],
          bullets: [
            "DSDP covers income from 1 January to departure date — single-instalment payment",
            "Fiscal resident: must declare worldwide income, including foreign salary",
            "Late DSDP penalty: minimum R$ 165.74 or up to 20% of tax owed",
            "Check for a double-taxation agreement with your destination country",
          ],
        },
        {
          heading: "INSS: pay as a voluntary contributor, pause, or stop?",
          paragraphs: [
            "When you leave Brazil, your automatic INSS link ends. If you want to keep accumulating contribution time towards retirement, you can register as a contribuinte facultativo (voluntary contributor) — available to anyone aged 16 or older with no employment link in Brazil.",
            "In 2026, the rates for a voluntary contributor are: 20% (standard plan) on any amount between the minimum wage of R$ 1,621.00 and the INSS ceiling of R$ 8,475.55 — minimum contribution of R$ 324.20 per month, giving access to retirement by contribution time and by age; 11% (simplified plan) on the minimum wage — R$ 178.31 per month, but this only qualifies you for retirement by age, not by contribution time; 5% (low-income plan) — R$ 81.05 per month, available only to a specific insured category, not generally applicable. Payment is made via a GPS (Guia de Previdência Social) generated in the Meu INSS portal (app or website), payable through any Brazilian bank with online access — you can do this from abroad. The deadline is the 15th of the following month.",
            "If you have few years of contributions and want to secure your Brazilian retirement, keeping up voluntary INSS payments makes sense. If you already have significant contribution time or prefer to invest the money elsewhere, pausing may be reasonable — but evaluate the cost carefully, since long gaps are expensive to make up later.",
          ],
          bullets: [
            "Voluntary 20% (standard): R$ 324.20/month minimum — access to both contribution-time and age-based retirement",
            "Voluntary 11% (simplified): R$ 178.31/month — age-based retirement only",
            "Payment via GPS on Meu INSS: can be done from abroad via Brazilian internet banking",
            "Deadline: 15th of the following month — late payment means losing that month permanently",
            "Notify INSS of your address change to avoid registration issues",
          ],
        },
        {
          heading: "CPF, bank accounts, and PIX from abroad",
          paragraphs: [
            "Good news: your CPF is not cancelled by leaving Brazil and remains valid indefinitely. Keep it active — it is required for bank accounts, gov.br access, property income, and any dealings in Brazil.",
            "What does change is your bank account status. If you file the DSDP and become an official non-resident, traditional banks must convert your account to a Conta de Domiciliado no Exterior (CDE), created under Resolução Conjunta Bacen/CVM No. 13/2024. You cannot simply keep a resident account — you need to open a new CDE and close the old one. Some fintechs and banks such as C6 Bank already offer current accounts for customers domiciled abroad; Banco Rendimento has a specific product (Basic plan from R$ 150/year or Premium at R$ 299.90/month). The non-resident account (Conta de Não Residente, CNR) allows PIX, TED, and access to fixed-income products on B3.",
            "If you keep your fiscal residency (no DSDP), you can generally keep your regular resident account — but check your bank's terms, as some fintechs block accounts when they detect a foreign address. Nubank, for example, allows payments and PIX but may require a cadastre update. Inter and other digital banks have varying policies — confirm with your bank before you travel.",
            "For sending money home to Brazil or receiving reais from family, PIX works normally as long as you have an active Brazilian account. Platforms like Wise, Remessa Online, and Nomad offer international transfers in reais at more competitive exchange rates than traditional bank wires.",
          ],
          bullets: [
            "CPF: remains valid regardless of fiscal exit — keep it active",
            "Official non-resident: must convert account to CDE — C6 Bank and Banco Rendimento have specific products",
            "Fiscal residency maintained: can keep a regular account, but confirm your bank's policy on foreign addresses",
            "PIX works normally from abroad on active Brazilian accounts",
            "For BRL ↔ NZD/AUD exchange: Wise, Remessa Online, and Nomad offer more competitive rates than traditional banks",
          ],
        },
        {
          heading: "SIM card, WhatsApp, and power of attorney",
          paragraphs: [
            "It may sound minor, but your Brazilian mobile number is critical: almost every bank, gov.br, Meu INSS, the Receita Federal's e-CAC, and most public services use SMS or WhatsApp for two-factor authentication. If you cancel your SIM before leaving, or if the carrier deactivates the number for inactivity, you can lose access to bank accounts, tax declarations, and other services while you are abroad.",
            "Recommended approach: keep the Brazilian SIM active on a low-cost pre-paid plan (plans from around R$ 10–20 per month keep the number alive). Alternatively, port the number to a trusted family member, agreeing on access when you need it. Another important tool is a public or digital power of attorney (procuração): a trusted person in Brazil — a parent or sibling, for example — holding your procuração can represent you at banks, notaries, the Receita Federal, and even to sign contracts. Since 2026, a Supreme Court (STJ) ruling confirmed that procurações signed digitally via the gov.br portal are legally valid and do not require notarised recognition — making it straightforward to grant powers before boarding. For tax matters with the Receita Federal, your representative can be appointed as a fiscal representative through e-CAC.",
          ],
          bullets: [
            "Keep the Brazilian SIM active — the number is the key to 2FA for banks and gov.br",
            "Low-cost pre-paid plans (R$ 10–20/month) keep the number alive without much expense",
            "Digital procuração via gov.br: legally valid without notarised recognition (STJ ruling 2026)",
            "Fiscal representative in e-CAC: recommended if you file Saída Definitiva, to receive Receita Federal notifications",
            "Keep digital copies of key documents: passport, CPF, RG, voter registration card",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Tern is a multi-currency account you open from your phone before you board — your passport and working holiday visa approval are all you need (pre-launch registration is open now). You get your account details before you land, so you can share them with your first employer on day one without waiting for a local bank account. Top-ups from BRL use the mid-market exchange rate with no hidden margin, and local ATM withdrawals carry no fees. While you sort out your Brazilian bank account for non-residents and work through the paperwork on this side, Tern makes sure you have access to your money on the other side from the very first moment.",
          ],
        },
      ],
      faq: [
        {
          q: "If I am away for exactly 1 year, do I need to file a Saída Definitiva?",
          a: "Not necessarily. The Receita Federal treats someone who has been outside Brazil for 12 consecutive months without filing a CSDP as a de facto non-resident — but this only causes problems if you have taxable income in Brazil or end up with a cadastral mismatch. For a strict 1-year WHV with no Brazilian income, many specialists recommend keeping your fiscal residency and filing a normal annual return when you come back. If the trip might extend, or if you have rent, dividends, or investments in Brazil, speak to an accountant who specialises in Brazilians abroad before making a decision.",
        },
        {
          q: "Can I pay INSS from outside Brazil?",
          a: "Yes. You register as a voluntary contributor through the Meu INSS portal (meuinss.gov.br) using your gov.br login, generate a GPS (Guia de Previdência Social), and pay via internet banking at any Brazilian bank with online access — all of this can be done from abroad. The deadline is the 15th of each month; late payment means permanently losing that month's credit (there is no back-payment option). In 2026, the simplified 11% plan costs R$ 178.31 per month based on the minimum wage of R$ 1,621.00.",
        },
        {
          q: "Will my Nubank or Inter account be blocked when I live abroad?",
          a: "It depends on two things: whether you file a Saída Definitiva, and each bank's own policy. If you keep your fiscal residency (no DSDP), you can technically continue using the account — but fintechs like Nubank require a cadastre update and may restrict services when they detect a foreign address. If you become an official non-resident, you need to convert to a Conta de Domiciliado no Exterior (CDE); Nubank does not offer this product, so you would need to move to a bank that does, such as C6 Bank or Banco Rendimento. Confirm your bank's policy before you travel to avoid unpleasant surprises.",
        },
      ],
    },
  },
};
