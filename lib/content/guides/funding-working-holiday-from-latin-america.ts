import type { Article } from "../types";

export const article: Article = {
  slug: "funding-working-holiday-from-latin-america",
  kind: "guide",
  date: "2026-06-10",
  emoji: "💱",
  accent: "bg-coral-300",
  readMinutes: 7,
  sources: [
    {
      label: "BCRA — Fin del cepo cambiario para personas físicas (abril 2025)",
      url: "https://www.bcra.gob.ar/",
    },
    {
      label: "Argentina.gob.ar — Eliminación de percepciones por compra de moneda extranjera",
      url: "https://www.argentina.gob.ar/noticias/ganancias-y-bienes-personales-se-eliminaron-las-percepciones-cuenta-por-compras-de-moneda",
    },
    {
      label: "KPMG Flash Alert 2025-082 — Argentina: Significant Relaxation of Access to Official Exchange Market",
      url: "https://kpmg.com/xx/en/our-insights/gms-flash-alert/flash-alert-2025-082.html",
    },
    {
      label: "Departamento de Inmigración y Ciudadanía de Australia (DOHA) — Evidencia de fondos",
      url: "https://immi.homeaffairs.gov.au/help-text/evidence/Pages/et-h0022.aspx",
    },
    {
      label: "Wise Help Centre — What countries/regions can I send to?",
      url: "https://wise.com/help/articles/2571942/what-countriesregions-can-i-send-to",
    },
  ],
  related: [
    "how-much-money-working-holiday-australia",
    "proof-of-funds-working-holiday-visa",
  ],
  i18n: {
    es: {
      title: "Cómo llevar tu plata a Australia: guía para latinoamericanos",
      description:
        "Todo lo que necesitás saber para sacar dinero de Argentina, Chile, Perú o Colombia y financiar tu working holiday en Australia: controles cambiarios actuales, Wise, prueba de fondos y más.",
      excerpt:
        "Mover plata desde Latinoamérica a Australia tiene sus trabas: cepo (ya casi inexistente para personas), impuestos a la tarjeta, extractos en español y raíles de transferencia que no siempre funcionan. Esta guía despeja el camino.",
      sections: [
        {
          paragraphs: [
            "Conseguir el visado de working holiday es la parte fácil. Lo que nadie te dice es que convertir tus ahorros latinoamericanos en fondos utilizables en Australia puede llevarte semanas y costarte más de lo que esperabas. Las restricciones cambiarias, los impuestos al dólar tarjeta, los extractos en español que la embajada no acepta y los raíles de transferencia que funcionan de forma desigual según tu país de origen son obstáculos reales. Esta guía los aborda uno por uno, empezando por el país con la historia cambiaria más complicada de la región: Argentina.",
          ],
        },
        {
          heading: "Argentina: el nuevo panorama cambiario en 2026",
          paragraphs: [
            "Durante años, el cepo cambiario limitó a los argentinos a comprar apenas USD 200 por mes al tipo de cambio oficial, con recargos tributarios que podían elevar el costo efectivo un 60 % o más. Ese esquema cambió radicalmente en 2025. El 14 de abril de 2025, el gobierno de Milei levantó las restricciones para personas físicas: el cupo mensual de USD 200 quedó eliminado por homebanking y apps. Desde entonces, cualquier persona con ingresos declarados y sin deudas con ARCA (ex AFIP) puede comprar dólares oficiales sin límite mensual a través de canales digitales. El único tope que subsiste es de USD 100 al mes para compra de billetes físicos en ventanilla bancaria.",
            "El Impuesto PAIS, que gravaba las compras de moneda extranjera, fue eliminado. A partir del 2 de enero de 2026, ARCA también dejó de aplicar el recargo del 30 % en concepto de Ganancias y Bienes Personales sobre consumos con tarjeta en el exterior. En la práctica, pagar con tarjeta de débito o crédito argentina en Australia ya no implica el brutal dólar tarjeta de antes: el costo se acerca al tipo de cambio oficial dentro de las bandas cambiarias vigentes. Las restricciones que quedan apuntan a las empresas, no a los individuos.",
            "Lo que sí persiste para personas físicas es el tipo de cambio dentro de bandas: el BCRA opera con un esquema de flotación administrada con bandas que se ajustan mensualmente según la inflación pasada. El tipo de cambio puede moverse dentro de ese corredor sin intervención oficial. Para quienes planifican su working holiday, la recomendación práctica es monitorear el tipo de cambio en las semanas previas al viaje y cambiar en más de una operación para promediar el precio.",
          ],
          bullets: [
            "Cupo mensual digital: eliminado desde abril 2025 — podés comprar lo que quieras por homebanking",
            "Cupo en efectivo (ventanilla): sigue existiendo un límite de USD 100 por mes",
            "Impuesto PAIS: eliminado",
            "Recargo 30 % tarjeta (Ganancias/Bienes Personales): eliminado desde el 2 de enero de 2026",
            "Tipo de cambio: flotación dentro de bandas ajustables; sin cepo para individuos",
            "Restricciones vigentes: afectan principalmente a empresas, no a personas físicas",
          ],
        },
        {
          heading: "Chile, Perú y Colombia: más abiertos, pero con sus propias reglas",
          paragraphs: [
            "Chile tiene uno de los mercados cambiarios más liberalizados de América Latina. No hay restricciones para que personas compren dólares u otras divisas. Los bancos ofrecen cambio de moneda sin límite; las casas de cambio y plataformas como Wise también operan libremente. Para sacar dinero al exterior, las transferencias internacionales desde bancos chilenos son rutinarias. El principal factor a considerar es el spread que cobra el banco: comparar entre el banco, una casa de cambio y Wise suele valer la pena.",
            "Perú también opera con libre cambio de divisas. El sol peruano (PEN) es convertible sin restricciones y el Banco Central de Reserva del Perú no impone límites a las compras de moneda extranjera. Las transferencias SWIFT al exterior funcionan desde los principales bancos. Wise acepta PEN para envíos internacionales.",
            "Colombia permite comprar divisas libremente, aunque la normativa del Banco de la República exige declarar ante el sistema cambiario operaciones de transferencia al exterior superiores a USD 10,000. Por debajo de ese monto, no hay restricciones prácticas para individuos. Wise opera con COP: puede enviar a cuentas Bancolombia y a cuentas en el exterior; los tiempos de entrega suelen ser de 1-2 días hábiles.",
          ],
          bullets: [
            "Chile: sin restricciones, mercado cambiario completamente libre",
            "Perú: libre cambio, Wise acepta PEN, SWIFT disponible desde bancos principales",
            "Colombia: libre para individuos, declaración obligatoria solo por encima de USD 10,000; Wise opera con COP a Bancolombia y al exterior",
          ],
        },
        {
          heading: "Raíles de transferencia: qué funciona desde cada país",
          paragraphs: [
            "Wise es la opción más transparente para la mayoría de los latinoamericanos. Opera en Chile, Perú, Colombia y Argentina; en todos los casos permite abrir cuenta y guardar saldos en AUD, USD y otras divisas. La ventaja principal es el tipo de cambio de mitad de mercado (mid-market rate) sin márgenes ocultos y comisiones explícitas. Dicho esto, desde Argentina el panorama es parcial: Wise no acepta transferencias salientes en ARS desde cuentas bancarias argentinas (no podés enviar pesos directamente); tenés que convertir antes tus pesos a dólares por homebanking y luego mover los USD. Desde Chile, Perú y Colombia la integración con cuentas locales es más directa.",
            "Las criptomonedas estables (stablecoins como USDC y USDT) son una realidad ampliamente usada en Argentina para preservar valor y eludir la brecha cambiaria. Muchos argentinos acumulan stablecoins en exchanges como Lemon, Belo o Bitso y luego las envían a una wallet propia o a un exchange australiano para convertir a AUD. Es una ruta técnicamente funcional pero conlleva riesgos que vale mencionar con honestidad: la regulación de criptomonedas en Australia exige declarar tenencias; los exchanges pueden suspender retiros o tener restricciones de liquidez; y la volatilidad o un hack pueden afectar tu capital. Si usás esta vía, limitá la exposición a lo estrictamente necesario y usá exchanges con custodia propia (self-custody) para el traslado.",
            "Las remesadoras tradicionales como Western Union o MoneyGram siguen siendo opciones, especialmente para quien no tiene acceso fácil a homebanking. Sus comisiones suelen ser más altas que Wise y el tipo de cambio menos favorable, pero la red de puntos de cobro puede ser útil en destino si llegás sin cuenta bancaria local.",
          ],
          bullets: [
            "Wise: disponible en Chile, Perú, Colombia y Argentina; tipo de cambio mid-market; desde Argentina requiere cargar USD previamente",
            "Stablecoins (USDC/USDT): muy usadas en Argentina; funcional pero con riesgos regulatorios, de custodia y de liquidez",
            "SWIFT desde bancos: disponible en todos los países; comparar spreads antes de operar",
            "Western Union / MoneyGram: opción de respaldo; comisiones más altas que plataformas digitales",
          ],
        },
        {
          heading: "Prueba de fondos: qué acepta inmigración australiana",
          paragraphs: [
            "El Departamento de Inmigración de Australia (DOHA) exige AUD 5,000 como prueba de fondos suficientes para la visa de working holiday (subclase 417 y 462). El extracto bancario es la forma de acreditarlo más aceptada, pero hay dos cosas que muchos latinoamericanos no saben y que pueden costarles el visado.",
            "Primero, el idioma: si el extracto está en español (o cualquier idioma que no sea inglés), debés adjuntar una traducción. DOHA no exige un traductor oficial certificado (NAATI), pero el traductor debe consignar su nombre completo, dirección, número de teléfono y una declaración de que la traducción es fiel al original. En la práctica, un extracto traducido al inglés por un traductor independiente es aceptado, siempre que el documento original también se adjunte. Muchos bancos latinoamericanos no emiten extractos en inglés; si el tuyo tiene esa opción (cada vez más frecuente en los bancos digitales), solicitalo directamente.",
            "Segundo, el formato: el extracto debe tener membrete oficial del banco, tu nombre completo, número de cuenta, saldo disponible y la fecha. Un pantallazo de la app sin membrete bancario no es suficiente. Pedí al banco un extracto oficial firmado y sellado, o descargá el PDF con sello digital desde el portal del banco.",
            "Un consejo práctico: si podés mostrar los fondos en tu cuenta de Tern o en otra cuenta internacional en AUD o USD, el proceso de inmigración suele ser más directo porque el extracto ya viene en inglés y en el formato que los oficiales reconocen.",
          ],
          bullets: [
            "Monto mínimo requerido: AUD 5,000 (visa subclase 417 y 462)",
            "Extracto en español: aceptado con traducción al inglés adjunta (no requiere NAATI obligatoriamente)",
            "Formato válido: membrete oficial del banco, nombre, cuenta, saldo y fecha",
            "Pantallazos sin membrete oficial: no aceptados",
            "Cuenta Tern o cuenta internacional: extracto ya en inglés, más sencillo para inmigración",
          ],
        },
        {
          heading: "Timing del cambio y mantener una cuenta en tu país de origen",
          paragraphs: [
            "El tipo de cambio ARS/AUD, CLP/AUD o COP/AUD puede moverse significativamente en el período entre que solicitás el visado y que viajás, que suele ser de 3 a 6 meses. En vez de convertir todo el dinero en un solo momento, una estrategia razonable es dividir el monto en 3 o 4 operaciones distribuidas en el tiempo para promediar el tipo de cambio (costo promedio). No es necesario ser sofisticado: simplemente evita mover toda tu liquidez el mismo día.",
            "Mantener una cuenta activa en tu país de origen es importante aunque no parezca urgente. Sirve para recibir reintegros impositivos, depositar bonificaciones de empleos anteriores, pagar cuotas de préstamos en curso o simplemente tener un respaldo si algo sale mal con tu cuenta australiana. En Argentina, asegurate de que tu banco te permita operar de forma no presencial desde el exterior antes de viajar: no todos los bancos habilitan homebanking internacional sin trámite previo.",
          ],
          bullets: [
            "Dividí las conversiones en el tiempo para promediar el tipo de cambio",
            "No liquidés todos tus ahorros de golpe: guardá un colchón en tu moneda local por imprevistos",
            "Verificá antes de viajar que tu banco de origen habilite operaciones por homebanking desde Australia",
            "Mantené la cuenta activa con algún movimiento periódico para que no la inactiven",
          ],
        },
        {
          heading: "Cómo te ayuda Tern",
          paragraphs: [
            "Tern es una cuenta multicurrency que podés abrir desde tu celular antes de subirte al avión. Con tu pasaporte y la aprobación del visa, obtenés un número de cuenta australiano real antes de aterrizar, lo que te permite dárselo a tu empleador desde el primer día sin esperar semanas que te abran una cuenta local.",
            "Una vez llegado a Australia, podés cargar tu cuenta Tern desde tu banco latinoamericano al tipo de cambio mid-market, sin el margen oculto que cobran los bancos tradicionales. El extracto de Tern está en inglés y tiene el formato que Inmigración reconoce, por lo que si necesitás demostrar fondos mientras tu solicitud está en proceso, ya tenés la prueba lista. No hay comisiones por retiro en ATMs australianos. Y si combinás Tern con tu cuenta de origen, tenés dos raíles de respaldo para mover dinero en cualquier dirección si las condiciones cambiarias o los raíles de transferencia de tu país cambian.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Todavía existe el cepo cambiario en Argentina para sacar plata al exterior?",
          a: "Para personas físicas, el cepo cambiario fue levantado en abril de 2025. Ya no existe el cupo de USD 200 mensuales por homebanking ni el Impuesto PAIS. El recargo del 30 % en tarjeta también fue eliminado en enero de 2026. Lo que queda: un límite de USD 100 mensuales para comprar billetes físicos en ventanilla. Las restricciones vigentes afectan principalmente a las empresas. Si comprás dólares por homebanking o app y los transferís al exterior, estás operando dentro de un mercado libre con flotación administrada por bandas.",
        },
        {
          q: "¿Puedo usar Wise para enviar dinero desde Argentina a mi cuenta australiana?",
          a: "Wise opera en Argentina pero con una limitación importante: no acepta transferencias salientes en ARS directamente desde cuentas bancarias argentinas. La ruta más usada es comprar USD por homebanking de tu banco argentino, recibirlos en una cuenta en dólares (cuenta bancaria en USD o cuenta Wise con saldo en USD) y desde ahí convertir a AUD. Desde Chile, Perú y Colombia, Wise se integra de forma más directa con las cuentas bancarias locales.",
        },
        {
          q: "Mi banco chileno o peruano emite los extractos en español. ¿Los acepta inmigración australiana?",
          a: "Sí, con condiciones. El Departamento de Inmigración de Australia acepta extractos en español siempre que adjuntés una traducción al inglés junto al documento original. La traducción no necesita ser certificada por un organismo oficial, pero el traductor debe incluir su nombre completo, dirección y una declaración de fidelidad al original. Si tu banco ofrece extractos digitales en inglés, es la opción más simple. De lo contrario, pedí un extracto oficial con membrete y sello, y contratá a un traductor para adjuntar la versión en inglés.",
        },
      ],
    },
    en: {
      title: "Funding your working holiday from Latin America",
      description:
        "How to move money from Argentina, Chile, Peru, or Colombia to Australia for a working holiday — currency controls, Wise, proof-of-funds statements, and practical transfer strategies.",
      excerpt:
        "Getting your Latin American savings to Australia is harder than it looks. Currency controls, card taxes, Spanish-language bank statements, and uneven transfer rails all add friction. This guide shows you the way through.",
      sections: [
        {
          paragraphs: [
            "Landing the working holiday visa is the straightforward part. What nobody tells you is that converting your Latin American savings into usable funds in Australia can take weeks and cost more than you planned. Currency restrictions, dollar-card taxes, bank statements in Spanish that immigration does not accept, and transfer rails that work unevenly depending on your home country are real obstacles. This guide addresses them one by one, starting with the country that has had the most complicated exchange-rate history in the region: Argentina.",
          ],
        },
        {
          heading: "Argentina: the new FX landscape in 2026",
          paragraphs: [
            "For years, Argentina's cepo cambiario limited residents to buying just USD 200 per month at the official rate, with tax surcharges that could push the effective cost 60 % or more above the mid-market price. That regime changed dramatically in 2025. On 14 April 2025, the Milei government lifted exchange controls for individuals: the USD 200 monthly quota was abolished for digital channels (home banking and apps). Since then, any person with declared income and no outstanding debt with ARCA (the former AFIP) can buy official dollars without a monthly cap through digital platforms. The only remaining limit is USD 100 per month for physical cash purchases at bank branch windows.",
            "The Impuesto PAIS, which taxed foreign currency purchases, has been eliminated. From 2 January 2026, ARCA also stopped applying the 30 % income-tax and personal-property-tax surcharge on card spending abroad. In practical terms, paying with an Argentine debit or credit card in Australia no longer involves the punishing dólar tarjeta premium of the past — the cost is now close to the official exchange rate within the managed float bands. The restrictions that remain target companies, not individuals.",
            "What does still apply for individuals is that the peso trades within adjustable bands: the BCRA operates a managed float with corridors that widen monthly in line with lagged inflation. The rate can move freely within that corridor without central bank intervention. For those planning a working holiday, the practical advice is to monitor the rate in the weeks before departure and convert in several tranches to average the price.",
          ],
          bullets: [
            "Monthly digital cap: eliminated since April 2025 — you can buy as much as you want via home banking",
            "Cash at branch window: a USD 100-per-month limit remains",
            "Impuesto PAIS: eliminated",
            "30 % card surcharge (Ganancias / Bienes Personales): eliminated from 2 January 2026",
            "Exchange rate: managed float within adjustable bands; no cepo for individuals",
            "Remaining restrictions: apply mainly to companies, not to individuals",
          ],
        },
        {
          heading: "Chile, Peru, and Colombia: open markets with their own nuances",
          paragraphs: [
            "Chile has one of the most liberalised foreign exchange markets in Latin America. There are no restrictions on individuals buying dollars or other currencies. Banks, casas de cambio, and platforms like Wise all operate freely. International wire transfers from Chilean banks are routine. The main variable to watch is the spread your bank charges — comparing between your bank, a casa de cambio, and Wise is worth a few minutes of effort.",
            "Peru also operates with free currency exchange. The Peruvian sol (PEN) is freely convertible and the Banco Central de Reserva del Perú imposes no limits on foreign currency purchases by individuals. SWIFT transfers abroad work from the major banks. Wise accepts PEN for international sends.",
            "Colombia allows individuals to buy foreign currency freely, though Banco de la República regulations require a declaration for transfers above USD 10,000. Below that threshold there are no practical restrictions for individuals. Wise operates with COP and can send to Bancolombia accounts and to international accounts, with typical delivery times of one to two business days.",
          ],
          bullets: [
            "Chile: no restrictions, fully free exchange market",
            "Peru: free exchange, Wise accepts PEN, SWIFT available from major banks",
            "Colombia: free for individuals, mandatory declaration only above USD 10,000; Wise operates COP to Bancolombia and abroad",
          ],
        },
        {
          heading: "Transfer rails: what actually works from each country",
          paragraphs: [
            "Wise is the most transparent option for most Latin Americans. It operates in Chile, Peru, Colombia, and Argentina; in all cases you can open an account and hold balances in AUD, USD, and other currencies. The key advantage is the mid-market exchange rate with no hidden margin and explicit fees. That said, the picture from Argentina is partial: Wise does not accept outgoing ARS transfers directly from Argentine bank accounts. You cannot send pesos directly; you need to convert your pesos to dollars first via home banking, then move the USD. From Chile, Peru, and Colombia, integration with local bank accounts is more direct.",
            "Stablecoins (USDC and USDT) are widely used in Argentina as a way to preserve value and sidestep the exchange-rate gap. Many Argentines accumulate stablecoins on exchanges such as Lemon, Belo, or Bitso and then send them to a personal wallet or an Australian exchange to convert to AUD. This is a technically viable route, but it carries risks worth stating plainly: Australian law requires declaring crypto holdings; exchanges can suspend withdrawals or face liquidity constraints; and a hack or platform failure can affect your capital. If you use this route, keep the exposure to what is strictly necessary and use self-custody wallets for the transfer leg.",
            "Traditional remittance services like Western Union or MoneyGram remain options, particularly for those without easy access to home banking. Their fees are generally higher than Wise and the exchange rate less favourable, but the network of cash-out points can be useful at the destination if you arrive without a local bank account.",
          ],
          bullets: [
            "Wise: available in Chile, Peru, Colombia, and Argentina; mid-market rate; from Argentina requires pre-loading USD",
            "Stablecoins (USDC/USDT): widely used in Argentina; viable but carries regulatory, custody, and liquidity risks",
            "SWIFT from banks: available in all countries; compare spreads before transacting",
            "Western Union / MoneyGram: backup option; higher fees than digital platforms",
          ],
        },
        {
          heading: "Proof of funds: what Australian immigration actually accepts",
          paragraphs: [
            "The Australian Department of Home Affairs (DOHA) requires AUD 5,000 as evidence of sufficient funds for the working holiday visa (subclasses 417 and 462). A bank statement is the most accepted form of proof, but there are two things many Latin Americans do not know that can cost them the visa.",
            "First, language. If the statement is in Spanish (or any language other than English), you must attach a translation. DOHA does not require a certified NAATI translator, but the translator must include their full name, address, phone number, and a declaration that the translation is a true and accurate rendering of the original document. A statement translated into English by an independent translator is accepted, as long as the original document is also included. Many Latin American banks do not issue statements in English; if yours has that option (increasingly common at digital banks), request it directly.",
            "Second, format. The statement must have the bank's official letterhead, your full name, account number, available balance, and the date. A screenshot from the bank app without official letterhead is not sufficient. Ask your bank for an official signed and stamped statement, or download the PDF with a digital stamp from the bank portal.",
            "A practical tip: if you can show funds in your Tern account or another international account denominated in AUD or USD, the immigration process tends to be more straightforward because the statement is already in English in the format that immigration officers recognise.",
          ],
          bullets: [
            "Minimum amount required: AUD 5,000 (subclass 417 and 462 visas)",
            "Statement in Spanish: accepted with an English translation attached (NAATI certification not mandatory)",
            "Valid format: official bank letterhead, name, account number, balance, and date",
            "App screenshots without official letterhead: not accepted",
            "Tern or other international account: statement already in English, easier for immigration",
          ],
        },
        {
          heading: "Timing your conversion and keeping a home account alive",
          paragraphs: [
            "The ARS/AUD, CLP/AUD, or COP/AUD exchange rate can move significantly over the three-to-six-month period between applying for the visa and actually travelling. Rather than converting your entire budget on a single day, a sensible strategy is to split the amount into three or four operations spread over time to average the exchange rate (dollar-cost averaging). You do not need to be sophisticated about it: simply avoid moving all your liquidity on the same day.",
            "Keeping an active account in your home country matters even if it seems unnecessary. It lets you receive tax refunds, accept salary deposits from previous employers, pay instalments on existing loans, or simply have a fallback if something goes wrong with your Australian account. In Argentina in particular, make sure your bank enables non-resident home banking access before you travel — not all banks allow international login without completing an in-branch procedure first.",
          ],
          bullets: [
            "Split conversions over time to average the exchange rate",
            "Do not liquidate all savings at once — keep a buffer in local currency for emergencies",
            "Verify before travelling that your home bank enables home banking from Australia",
            "Keep the account active with periodic transactions so it is not marked inactive",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Tern is a multi-currency account you can open on your phone before you board the plane. With your passport and working holiday visa approval, you get a real Australian account number before you land — which means you can give it to an employer from day one without waiting weeks for a local bank account to be approved.",
            "Once in Australia, you can top up your Tern account from your Latin American bank at the mid-market rate, without the hidden margin that traditional banks charge. Your Tern statement is in English and in the format that immigration recognises, so if you need to demonstrate funds while your application is being processed, the evidence is already ready. There are no fees for cash withdrawals at Australian ATMs. And by pairing Tern with your home-country account, you have two transfer rails in each direction — useful if exchange conditions or transfer availability in your home country shift.",
          ],
        },
      ],
      faq: [
        {
          q: "Do exchange controls still block Argentines from sending money abroad?",
          a: "For individuals, the cepo cambiario was lifted in April 2025. The USD 200 monthly cap via home banking no longer exists, nor does the Impuesto PAIS. The 30 % card surcharge was also eliminated in January 2026. What remains is a USD 100 per month limit for buying physical cash at branch windows. The restrictions still in force mainly target companies. If you buy dollars via home banking or an app and transfer them abroad, you are operating in a freely floating (band-managed) market.",
        },
        {
          q: "Can I use Wise to send money from Argentina to my Australian account?",
          a: "Wise operates in Argentina but with an important limitation: it does not accept outgoing ARS transfers directly from Argentine bank accounts. The most common route is to buy USD via your Argentine bank's home banking, receive them in a USD account (either a bank USD account or a Wise balance in USD), and then convert to AUD from there. From Chile, Peru, and Colombia, Wise integrates more directly with local bank accounts.",
        },
        {
          q: "My Chilean or Peruvian bank issues statements in Spanish. Will Australian immigration accept them?",
          a: "Yes, with conditions. The Australian Department of Home Affairs accepts statements in Spanish as long as you attach an English translation alongside the original document. The translation does not need to be certified by an official body, but the translator must include their full name, address, and a declaration of accuracy. If your bank offers digital statements in English, that is the simplest path. Otherwise, request an official stamped statement with letterhead and hire a translator to attach the English version.",
        },
      ],
    },
  },
};
