import type { Article } from "../types";

export const article: Article = {
  slug: "bank-account-working-holiday-germany",
  kind: "guide",
  date: "2026-06-03",
  emoji: "🇩🇪",
  accent: "bg-grape-300",
  readMinutes: 6,
  sources: [
    {
      label: "Make it in Germany — Bank account",
      url: "https://www.make-it-in-germany.com/en/living-in-germany/money-insurance/bank-account",
    },
    {
      label: "Make it in Germany — Housing and registration (Anmeldung)",
      url: "https://www.make-it-in-germany.com/en/living-in-germany/housing-mobility/housing-registration",
    },
  ],
  i18n: {
    en: {
      title: "Opening a bank account in Germany on a working holiday",
      description:
        "Get a German Girokonto on a working holiday visa — breaking the Anmeldung catch-22, IBAN basics, Steuer-ID, and app banks vs Sparkasse.",
      excerpt:
        "You need an address to open a bank account, but you need a bank account to rent a flat. Here's how to break the Anmeldung loop and get paid in euros.",
      sections: [
        {
          paragraphs: [
            "Germany has a strong banking system, but it comes with more bureaucratic friction than Australia or New Zealand. As a working holiday visa holder, your first task is untangling a classic catch-22: most banks require an Anmeldung (address registration certificate) to open an account, but you need an address to complete your Anmeldung, and landlords often ask for a German bank account before handing over the keys. Breaking this loop early is the difference between a smooth first month and weeks of stress.",
          ],
        },
        {
          heading: "The Anmeldung catch-22 — and how to escape it",
          paragraphs: [
            "Anmeldung is Germany's compulsory address registration. Within two weeks of moving into permanent accommodation, you must register at your local Einwohnermeldeamt (residents' registration office) and obtain an Anmeldebestätigung (registration certificate). Most traditional banks — Sparkasse, Volksbank, Deutsche Bank — will not open a Girokonto (current account) without this certificate.",
            "The practical escape routes are:",
          ],
          bullets: [
            "Use a short-term hostel or sublet address for your first Anmeldung — this is legal and widely accepted; hostels that serve long-term guests will often provide the required landlord confirmation letter (Wohnungsgeberbestätigung)",
            "Open with an app bank first: N26 and DKB can open accounts with just your passport and a selfie — no Anmeldebestätigung required at sign-up",
            "Once you have a German IBAN from an app bank, use it to satisfy landlords while you find permanent accommodation",
            "After you secure a fixed address and complete Anmeldung, you can add a Sparkasse or branch-based account if you need one for paying rent by SEPA direct debit",
          ],
        },
        {
          heading: "Understanding IBAN and German payment norms",
          paragraphs: [
            "Germany uses the SEPA payment system. Your German bank account number is expressed as an IBAN — a 22-character code starting with DE (for example, DE89 3704 0044 0532 0130 00). This is the only number you give your employer for payroll, your landlord for rent, or anyone sending you money domestically or from within the EU.",
            "Unlike Australia's BSB + account number system, there is no separate routing code — the IBAN contains everything. Your bank will also give you a BIC (Bank Identifier Code) for international transfers from outside the SEPA zone.",
          ],
        },
        {
          heading: "Why cash still matters in Germany",
          paragraphs: [
            "Germany remains one of the most cash-heavy economies in Western Europe. Many restaurants, bakeries, markets, and smaller shops are Nur Barzahlung (cash only) or impose a minimum spend for card payments. Budget roughly €50–100 in cash for your first week for transport, food, and incidentals.",
          ],
          bullets: [
            "Withdraw cash at your own bank's ATMs to avoid foreign transaction and ATM fees",
            "Avoid currency exchange booths at airports — the rates are poor; use an ATM or your app bank's fee-free withdrawal",
            "EC-Karte (Girocard) is the German domestic debit standard — not all terminals accept Visa/Mastercard debit, so confirm your card type",
            "App banks like N26 issue Mastercard or Visa — widely accepted but not universal at smaller venues",
          ],
        },
        {
          heading: "Your Steuer-ID arrives after Anmeldung",
          paragraphs: [
            "The Steuer-ID (Steueridentifikationsnummer) is your 11-digit German tax identification number. It is not something you apply for — it is automatically generated and posted to your registered address within two to four weeks of completing your Anmeldung. You cannot earn wages in Germany without it.",
            "Give your employer your Steuer-ID as soon as it arrives. Without it, your employer is required to withhold wage tax at the highest bracket (Steuerklasse VI), which can exceed 40% of your gross pay. Once you supply your Steuer-ID, they will apply the correct tax class — usually Steuerklasse I for single employees with no children.",
          ],
          bullets: [
            "Complete Anmeldung at the Einwohnermeldeamt within two weeks of arrival — bring your passport and the Wohnungsgeberbestätigung from your landlord",
            "Your Steuer-ID letter arrives by post in 2–4 weeks — do not lose this letter",
            "If you change address, your Steuer-ID stays the same for life; only update your address registration",
            "If you need your Steuer-ID urgently before the letter arrives, you can request it from the Bundeszentralamt für Steuern (Federal Central Tax Office) online",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Tern walks you through the German arrival sequence — Anmeldung, account opening, and Steuer-ID — in the right order so nothing blocks your first payslip. It stores your IBAN securely, reminds you to pass your Steuer-ID to each employer, and flags immediately if your net pay suggests you are still being taxed at the non-declaration bracket.",
          ],
        },
      ],
      faq: [
        {
          q: "Can I open a German bank account before I arrive?",
          a: "With app banks like N26 you can start the application process before arrival, though identity verification usually still requires a video call or a completed PostIdent at a Deutsche Post branch. Traditional banks (Sparkasse, Deutsche Bank) require an Anmeldebestätigung, which you can only get after arriving and registering an address.",
        },
        {
          q: "What if I still haven't received my Steuer-ID after a month?",
          a: "You can request your Steuer-ID from the Bundeszentralamt für Steuern online at bzst.de. Processing takes several weeks. In the meantime, inform your employer in writing that you have applied — some employers will use a provisional arrangement rather than apply Steuerklasse VI, though this is at their discretion.",
        },
        {
          q: "Which bank is best for a working holiday in Germany?",
          a: "N26 and DKB are the most practical for WHV holders: both open accounts without an Anmeldebestätigung and offer free IBAN-based salary receipt. Sparkasse branches are useful for in-person help and free ATM withdrawals within their network, but the application process is slower. Use an app bank to get started, then add a Sparkasse account once you are settled.",
        },
      ],
    },
    es: {
      title: "Cuenta bancaria en Alemania con visa working holiday",
      description:
        "Cómo conseguir un Girokonto alemán con WHV — el dilema del Anmeldung, el IBAN, el Steuer-ID y apps bancarias vs Sparkasse.",
      excerpt:
        "Necesitas una dirección para abrir una cuenta, pero necesitas una cuenta para alquilar un piso. Acá te explicamos cómo salir del círculo del Anmeldung y empezar a cobrar en euros.",
      sections: [
        {
          paragraphs: [
            "Alemania tiene un sólido sistema bancario, pero con más burocracia que Australia o Nueva Zelanda. Como titular de una visa working holiday, tu primera tarea es resolver el clásico círculo vicioso: la mayoría de los bancos te piden el Anmeldung (certificado de registro de domicilio) para abrir una cuenta, pero necesitas una dirección para hacer el Anmeldung, y los propietarios suelen pedirte una cuenta bancaria alemana antes de darte las llaves. Resolver esto cuanto antes es la diferencia entre un primer mes tranquilo y semanas de estrés.",
          ],
        },
        {
          heading: "El dilema del Anmeldung — y cómo escapar de él",
          paragraphs: [
            "El Anmeldung es el registro de domicilio obligatorio en Alemania. Dentro de las dos semanas de mudarte a una vivienda permanente, debes registrarte en la oficina local (Einwohnermeldeamt) y obtener el Anmeldebestätigung (certificado de registro). La mayoría de los bancos tradicionales — Sparkasse, Volksbank, Deutsche Bank — no abren un Girokonto sin este certificado.",
            "Las salidas prácticas son:",
          ],
          bullets: [
            "Usa la dirección de un hostel o sublet para tu primer Anmeldung — es legal y está ampliamente aceptado; los hostels que alojan huéspedes a largo plazo suelen facilitar la carta del propietario (Wohnungsgeberbestätigung)",
            "Abre primero con un banco app: N26 y DKB pueden abrir cuentas solo con tu pasaporte y una selfie — no requieren Anmeldebestätigung al registrarte",
            "Una vez que tienes un IBAN alemán de un banco app, puedes usarlo con propietarios mientras buscas alojamiento definitivo",
            "Después de asegurar una dirección fija y completar el Anmeldung, puedes agregar una cuenta de Sparkasse o banco con sucursales si lo necesitas para pagar el alquiler por débito SEPA",
          ],
        },
        {
          heading: "Entendiendo el IBAN y los usos del dinero en Alemania",
          paragraphs: [
            "Alemania usa el sistema de pagos SEPA. Tu número de cuenta bancaria alemana se expresa como IBAN — un código de 22 caracteres que empieza con DE (por ejemplo, DE89 3704 0044 0532 0130 00). Este es el único número que le das a tu empleador para los pagos, al propietario para el alquiler, o a cualquiera que te envíe dinero dentro de la UE.",
            "A diferencia del sistema australiano con BSB + número de cuenta, no hay un código de enrutamiento separado — el IBAN lo contiene todo. Tu banco también te dará un BIC (Bank Identifier Code) para transferencias internacionales desde fuera de la zona SEPA.",
          ],
        },
        {
          heading: "Por qué el efectivo sigue siendo importante en Alemania",
          paragraphs: [
            "Alemania sigue siendo una de las economías con mayor uso de efectivo de Europa Occidental. Muchos restaurantes, panaderías, mercados y comercios pequeños son Nur Barzahlung (solo efectivo) o tienen un gasto mínimo para pagar con tarjeta. Calculá unos €50–100 en efectivo para la primera semana.",
          ],
          bullets: [
            "Retira efectivo en los cajeros de tu propio banco para evitar comisiones por transacciones extranjeras",
            "Evita las casas de cambio en aeropuertos — los tipos son malos; usa un cajero automático o los retiros sin comisión de tu banco app",
            "La EC-Karte (Girocard) es el estándar alemán de débito — no todos los terminales aceptan débito Visa/Mastercard, así que verifica el tipo de tu tarjeta",
            "Los bancos app como N26 emiten Mastercard o Visa — ampliamente aceptadas pero no universales en locales pequeños",
          ],
        },
        {
          heading: "Tu Steuer-ID llega después del Anmeldung",
          paragraphs: [
            "El Steuer-ID (Steueridentifikationsnummer) es tu número de identificación fiscal alemán de 11 dígitos. No hay que solicitarlo — se genera automáticamente y se envía por correo a tu domicilio registrado en un plazo de dos a cuatro semanas después de completar el Anmeldung. No puedes cobrar un sueldo en Alemania sin él.",
            "Pásale tu Steuer-ID a tu empleador en cuanto llegue. Sin él, tu empleador tiene que retener el impuesto laboral en la categoría más alta (Steuerklasse VI), que puede superar el 40% de tu sueldo bruto. Una vez que lo entregues, aplicarán la clase fiscal correcta — normalmente Steuerklasse I para empleados solteros sin hijos.",
          ],
          bullets: [
            "Completa el Anmeldung en el Einwohnermeldeamt dentro de las dos semanas de llegar — lleva tu pasaporte y el Wohnungsgeberbestätigung de tu propietario",
            "La carta del Steuer-ID llega por correo en 2–4 semanas — no la pierdas",
            "Si cambias de domicilio, el Steuer-ID sigue siendo el mismo de por vida; solo actualiza tu registro de domicilio",
            "Si necesitas el Steuer-ID urgentemente antes de que llegue la carta, puedes solicitarlo al Bundeszentralamt für Steuern (Oficina Federal Central de Impuestos) online",
          ],
        },
        {
          heading: "Cómo te ayuda Tern",
          paragraphs: [
            "Tern te guía por la secuencia de llegada a Alemania — Anmeldung, apertura de cuenta y Steuer-ID — en el orden correcto para que nada bloquee tu primer recibo de sueldo. Guarda tu IBAN de forma segura, te recuerda que entregues el Steuer-ID a cada empleador y te avisa de inmediato si tu sueldo neto sugiere que todavía te están cobrando en el tramo sin declaración.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Puedo abrir una cuenta bancaria alemana antes de llegar?",
          a: "Con bancos app como N26 puedes iniciar el proceso antes de llegar, aunque la verificación de identidad suele requerir una videollamada o un PostIdent en una sucursal de Deutsche Post. Los bancos tradicionales (Sparkasse, Deutsche Bank) requieren el Anmeldebestätigung, que solo puedes obtener después de llegar y registrar una dirección.",
        },
        {
          q: "¿Qué pasa si después de un mes todavía no recibiste el Steuer-ID?",
          a: "Puedes solicitarlo al Bundeszentralamt für Steuern online en bzst.de. El procesamiento lleva varias semanas. Mientras tanto, informa a tu empleador por escrito que ya lo solicitaste — algunos empleadores usarán un arreglo provisional en lugar de aplicar Steuerklasse VI, aunque queda a su criterio.",
        },
        {
          q: "¿Qué banco es mejor para un working holiday en Alemania?",
          a: "N26 y DKB son los más prácticos para los titulares de WHV: ambos abren cuentas sin Anmeldebestätigung y ofrecen recepción gratuita de sueldos vía IBAN. Las sucursales de Sparkasse son útiles para asistencia presencial y retiros gratuitos en su red, pero el proceso de solicitud es más lento. Usa un banco app para empezar y luego agrega una cuenta de Sparkasse cuando estés instalado.",
        },
      ],
    },
    ja: {
      title: "ワーキングホリデーでドイツの銀行口座を開設する方法",
      description:
        "ワーホリでドイツのGirokonto取得 — Anmeldungのジレンマ・IBAN・Steuer-ID・アプリ銀行vsSparkasseを解説。",
      excerpt:
        "口座を開くには住所が必要で、住所を登録するには口座が必要。Anmeldungの悪循環を断ち切り、ユーロで給料を受け取る方法を解説します。",
      sections: [
        {
          paragraphs: [
            "ドイツには充実した銀行システムがありますが、オーストラリアやニュージーランドより官僚的な手続きが多いのが現実です。ワーキングホリデービザ（WHV）ホルダーとして最初に解決すべきなのが、典型的な悪循環です。ほとんどの銀行は口座開設にAnmeldung（住所登録証明書）を要求しますが、Anmeldungには住所が必要で、家主は入居前にドイツの銀行口座を求めることが多いのです。この悪循環を早期に断ち切ることが、スムーズな最初の1ヶ月と何週間もの混乱の分かれ目になります。",
          ],
        },
        {
          heading: "Anmeldungの悪循環 — 抜け出す方法",
          paragraphs: [
            "Anmeldungはドイツの義務的な住所登録制度です。恒久的な住居に引っ越してから2週間以内に、地域の市民登録局（Einwohnermeldeamt）で登録し、Anmeldebestätigung（登録証明書）を取得する必要があります。Sparkasse、Volksbank、Deutsche Bankなどの従来型銀行のほとんどは、この証明書なしにGirokonto（当座預金口座）を開設しません。",
            "現実的な回避方法は次の通りです：",
          ],
          bullets: [
            "最初のAnmeldungにホステルやサブレットの住所を使用する — これは合法で広く認められており、長期滞在のゲストを受け入れているホステルは必要な家主確認書（Wohnungsgeberbestätigung）を提供してくれることが多い",
            "まずアプリ銀行で開設する：N26とDKBはパスポートと自撮り写真だけで口座を開設でき、登録時にAnmeldebestätigungは不要",
            "アプリ銀行のドイツIBANを取得したら、恒久的な住居を探す間は家主への証明に使用できる",
            "固定住所を確保してAnmeldungを完了したら、SEPA直接引き落としで家賃を支払う必要がある場合は、SparkasseやSHATed銀行の口座を追加できる",
          ],
        },
        {
          heading: "IBANとドイツの支払い慣習について",
          paragraphs: [
            "ドイツはSEPA決済システムを使用しています。ドイツの銀行口座番号はIBANで表され、DEで始まる22文字のコードです（例：DE89 3704 0044 0532 0130 00）。これが、給与のために雇用主に伝えたり、家賃のために家主に伝えたり、EU圏内から送金する際に使う唯一の番号です。",
            "オーストラリアのBSB+口座番号システムとは異なり、別途のルーティングコードはありません — IBANにすべてが含まれています。SEPA圏外からの国際送金には、銀行からBIC（銀行識別コード）も提供されます。",
          ],
        },
        {
          heading: "ドイツで現金が今も重要な理由",
          paragraphs: [
            "ドイツは西ヨーロッパで現金利用率が最も高い経済圏のひとつです。多くのレストラン、パン屋、市場、小規模な店舗がNur Barzahlung（現金のみ）か、カード払いに最低利用金額を設けています。最初の1週間は交通費や食費などのために€50〜100の現金を用意しておきましょう。",
          ],
          bullets: [
            "外国取引手数料やATM手数料を避けるために、自分の銀行のATMで現金を引き出す",
            "空港の両替所は避ける — レートが悪い。ATMかアプリ銀行の手数料無料引き出しを使う",
            "EC-Karte（Girocard）はドイツの国内デビット標準規格 — すべての端末がVisa/Mastercardのデビットに対応しているわけではないので、カードの種類を確認する",
            "N26などのアプリ銀行はMastercardやVisaを発行している — 広く使えるが、小規模な店では使えないこともある",
          ],
        },
        {
          heading: "Steuer-IDはAnmeldungの後に届きます",
          paragraphs: [
            "Steuer-ID（Steueridentifikationsnummer）は11桁のドイツの税務識別番号です。申請するものではなく、Anmeldungを完了してから2〜4週間以内に登録住所に自動的に郵送されます。Steuer-IDなしではドイツで給与を受け取ることができません。",
            "届いたらすぐに雇用主にSteuer-IDを伝えてください。提出するまで、雇用主は最高税率区分（Steuerklasse VI）で所得税を源泉徴収する義務があり、総給与の40%以上になることがあります。提出後は正しい税クラスが適用されます — 子供のいない独身従業員には通常Steuerklasse Iが適用されます。",
          ],
          bullets: [
            "到着から2週間以内にEinwohnermeldeamtでAnmeldungを完了する — パスポートと家主のWohnungsgeberbestätigungを持参",
            "Steuer-IDの手紙は2〜4週間で郵便で届く — なくさないこと",
            "住所を変更しても、Steuer-IDは生涯同じ。住所登録だけ更新する",
            "手紙が届く前にSteuer-IDが緊急に必要な場合は、Bundeszentralamt für Steuern（連邦税務中央局）にオンラインで申請できる",
          ],
        },
        {
          heading: "Ternができること",
          paragraphs: [
            "TernはAnmeldung、口座開設、Steuer-IDというドイツ到着時の手順を正しい順序でサポートし、最初の給与明細が届くまで何もブロックされないようにします。IBANを安全に保存し、各雇用主へのSteuer-ID提出をリマインドし、手取り給与が無申告税率で課税されている可能性を示す場合は即座に通知します。",
          ],
        },
      ],
      faq: [
        {
          q: "ドイツに到着する前に銀行口座を開設できますか？",
          a: "N26のようなアプリ銀行では到着前に申請プロセスを開始できますが、本人確認はビデオ通話かドイツポスト（Deutsche Post）の支店でのPostIdentが必要な場合がほとんどです。Sparkasse、Deutsche Bankなどの従来型銀行はAnmeldebestätigungが必要で、これは到着して住所を登録した後にしか取得できません。",
        },
        {
          q: "1ヶ月経ってもSteuer-IDが届かない場合はどうすればよいですか？",
          a: "bzst.deでBundeszentralamt für Steuernにオンラインで申請できます。処理には数週間かかります。その間、申請済みであることを書面で雇用主に伝えてください — Steuerklasse VIを適用するかわりに暫定的な対応をしてくれる雇用主もいますが、これは雇用主の裁量によります。",
        },
        {
          q: "ドイツのワーホリに最適な銀行はどこですか？",
          a: "WHVホルダーにとって最も実用的なのはN26とDKBです。どちらもAnmeldebestätigungなしで口座を開設でき、IBANを使った無料の給与受け取りに対応しています。Sparkasseの支店は対面サポートとネットワーク内での無料ATM引き出しに便利ですが、申請プロセスに時間がかかります。まずアプリ銀行で始め、落ち着いてからSparkasseの口座を追加する方法がおすすめです。",
        },
      ],
    },
    ko: {
      title: "독일 워킹홀리데이 비자로 은행 계좌 개설하는 방법",
      description:
        "워홀로 독일 Girokonto 개설 — Anmeldung 딜레마, IBAN, Steuer-ID, 앱 은행 vs Sparkasse.",
      excerpt:
        "계좌를 열려면 주소가 필요하고, 주소 등록에는 계좌가 필요합니다. Anmeldung의 악순환을 끊고 유로로 급여를 받는 방법을 알아보세요.",
      sections: [
        {
          paragraphs: [
            "독일은 탄탄한 은행 시스템을 갖추고 있지만, 호주나 뉴질랜드보다 행정 절차가 복잡합니다. 워킹홀리데이 비자(WHV) 소지자로서 첫 번째 과제는 전형적인 악순환을 해결하는 것입니다. 대부분의 은행은 계좌 개설에 Anmeldung(주소 등록 증명서)을 요구하지만, Anmeldung을 위해서는 주소가 필요하고, 집주인은 열쇠를 넘기기 전에 독일 은행 계좌를 요구하는 경우가 많습니다. 이 악순환을 일찍 해결하면 첫 달을 순조롭게 보낼 수 있습니다.",
          ],
        },
        {
          heading: "Anmeldung 딜레마 — 탈출하는 방법",
          paragraphs: [
            "Anmeldung은 독일의 의무 주소 등록 제도입니다. 영구 거주지로 이사한 후 2주 이내에 지역 주민등록사무소(Einwohnermeldeamt)에서 등록하고 Anmeldebestätigung(등록 증명서)을 발급받아야 합니다. Sparkasse, Volksbank, Deutsche Bank 등 대부분의 전통 은행은 이 증명서 없이는 Girokonto(당좌예금 계좌)를 개설하지 않습니다.",
            "현실적인 해결 방법은 다음과 같습니다:",
          ],
          bullets: [
            "첫 Anmeldung에 호스텔이나 서브렛 주소를 사용하세요 — 합법적이며 널리 인정됩니다. 장기 투숙객을 받는 호스텔은 필요한 집주인 확인서(Wohnungsgeberbestätigung)를 제공해 주는 경우가 많습니다",
            "먼저 앱 은행으로 개설하세요: N26과 DKB는 여권과 셀카만으로 계좌를 개설할 수 있으며, 가입 시 Anmeldebestätigung이 필요하지 않습니다",
            "앱 은행에서 독일 IBAN을 받으면, 영구 거주지를 구하는 동안 집주인에게 증빙으로 사용할 수 있습니다",
            "고정 주소를 확보하고 Anmeldung을 완료한 후, SEPA 자동이체로 임대료를 내야 한다면 Sparkasse 또는 지점 기반 은행 계좌를 추가할 수 있습니다",
          ],
        },
        {
          heading: "IBAN과 독일의 결제 관행 이해하기",
          paragraphs: [
            "독일은 SEPA 결제 시스템을 사용합니다. 독일 은행 계좌 번호는 DE로 시작하는 22자리 코드인 IBAN으로 표시됩니다(예: DE89 3704 0044 0532 0130 00). 이것이 급여를 위해 고용주에게 알려주거나, 임대료를 위해 집주인에게 알려주거나, EU 내에서 송금받을 때 사용하는 유일한 번호입니다.",
            "호주의 BSB + 계좌번호 시스템과 달리, 별도의 라우팅 코드가 없습니다 — IBAN에 모든 정보가 포함되어 있습니다. SEPA 권역 외부에서의 국제 송금을 위해 은행에서 BIC(은행 식별 코드)도 제공합니다.",
          ],
        },
        {
          heading: "독일에서 현금이 여전히 중요한 이유",
          paragraphs: [
            "독일은 서유럽에서 현금 사용 비율이 가장 높은 경제권 중 하나입니다. 많은 식당, 빵집, 시장, 소규모 상점이 Nur Barzahlung(현금 전용)이거나 카드 결제에 최소 금액을 요구합니다. 첫 주 교통비, 식비 등을 위해 €50~100 정도의 현금을 준비하세요.",
          ],
          bullets: [
            "해외 거래 수수료와 ATM 수수료를 피하려면 자신의 은행 ATM에서 현금을 인출하세요",
            "공항의 환전소는 피하세요 — 환율이 나쁩니다. ATM이나 앱 은행의 수수료 무료 인출을 이용하세요",
            "EC-Karte(Girocard)는 독일 국내 직불카드 표준입니다 — 모든 단말기가 Visa/Mastercard 직불카드를 지원하는 것은 아니므로 카드 종류를 확인하세요",
            "N26 같은 앱 은행은 Mastercard나 Visa를 발급합니다 — 널리 사용되지만 소규모 업소에서는 사용이 안 되는 경우도 있습니다",
          ],
        },
        {
          heading: "Steuer-ID는 Anmeldung 이후에 도착합니다",
          paragraphs: [
            "Steuer-ID(Steueridentifikationsnummer)는 11자리 독일 세금 식별 번호입니다. 직접 신청하는 것이 아니라, Anmeldung을 완료한 후 2~4주 이내에 등록된 주소로 자동 우편 발송됩니다. Steuer-ID 없이는 독일에서 임금을 받을 수 없습니다.",
            "받는 즉시 고용주에게 Steuer-ID를 전달하세요. 제출하기 전까지 고용주는 최고 세율 등급(Steuerklasse VI)으로 소득세를 원천징수해야 하며, 이는 총급여의 40% 이상이 될 수 있습니다. 제출 후에는 올바른 세금 등급이 적용됩니다 — 자녀가 없는 미혼 직원에게는 보통 Steuerklasse I이 적용됩니다.",
          ],
          bullets: [
            "도착 후 2주 이내에 Einwohnermeldeamt에서 Anmeldung을 완료하세요 — 여권과 집주인의 Wohnungsgeberbestätigung을 지참하세요",
            "Steuer-ID 편지는 2~4주 내에 우편으로 도착합니다 — 잃어버리지 마세요",
            "주소를 변경해도 Steuer-ID는 평생 동일합니다. 주소 등록만 업데이트하면 됩니다",
            "편지가 오기 전에 Steuer-ID가 긴급히 필요하다면, Bundeszentralamt für Steuern(연방 중앙 세무청) 온라인에서 신청할 수 있습니다",
          ],
        },
        {
          heading: "Tern이 도와드립니다",
          paragraphs: [
            "Tern은 Anmeldung, 계좌 개설, Steuer-ID라는 독일 도착 시 절차를 올바른 순서로 안내하여 첫 급여 명세서를 받을 때까지 아무것도 막히지 않도록 합니다. IBAN을 안전하게 저장하고, 각 고용주에게 Steuer-ID를 제출하도록 상기시키며, 세후 급여가 여전히 무신고 세율로 과세되고 있음을 나타낼 경우 즉시 알려드립니다.",
          ],
        },
      ],
      faq: [
        {
          q: "독일에 도착하기 전에 은행 계좌를 개설할 수 있나요?",
          a: "N26 같은 앱 은행은 도착 전에 신청 과정을 시작할 수 있지만, 본인 확인은 보통 화상 통화나 Deutsche Post 지점에서의 PostIdent가 필요합니다. Sparkasse, Deutsche Bank 같은 전통 은행은 Anmeldebestätigung이 필요하며, 이는 도착 후 주소를 등록해야만 받을 수 있습니다.",
        },
        {
          q: "한 달이 지나도 Steuer-ID가 안 오면 어떻게 하나요?",
          a: "bzst.de에서 Bundeszentralamt für Steuern에 온라인으로 신청할 수 있습니다. 처리에는 몇 주가 걸립니다. 그 동안 신청했다는 사실을 서면으로 고용주에게 알리세요 — Steuerklasse VI를 적용하는 대신 임시 처리를 해주는 고용주도 있지만, 이는 고용주 재량입니다.",
        },
        {
          q: "독일 워홀에 가장 좋은 은행은 어디인가요?",
          a: "WHV 소지자에게 가장 실용적인 곳은 N26과 DKB입니다. 둘 다 Anmeldebestätigung 없이 계좌를 개설할 수 있고 IBAN을 통한 무료 급여 수령을 지원합니다. Sparkasse 지점은 대면 지원과 네트워크 내 무료 ATM 인출에 유용하지만 신청 절차가 느립니다. 앱 은행으로 시작한 후 자리를 잡으면 Sparkasse 계좌를 추가하는 방법을 추천합니다.",
        },
      ],
    },
    "zh-TW": {
      title: "打工度假德國如何開設銀行帳戶",
      description:
        "打工度假取得德國Girokonto — Anmeldung困境、IBAN說明、Steuer-ID時程，以及App銀行與Sparkasse的比較。",
      excerpt:
        "開戶需要地址，登記地址又需要帳戶。教你如何打破Anmeldung的惡性循環，開始以歐元領薪。",
      sections: [
        {
          paragraphs: [
            "德國擁有完善的銀行體系，但行政手續比澳洲或紐西蘭繁瑣許多。身為打工度假簽證（WHV）持有者，你首先要解決的是一個典型的兩難困境：大多數銀行開戶需要Anmeldung（住址登記證明），但辦理Anmeldung需要地址，而房東在交鑰匙前往往要求你提供德國銀行帳戶。盡早解開這個循環，是輕鬆度過第一個月還是煎熬數週的關鍵。",
          ],
        },
        {
          heading: "Anmeldung的兩難困境 — 如何脫困",
          paragraphs: [
            "Anmeldung是德國強制性的住址登記制度。搬入正式住所後兩週內，你必須至當地居民登記處（Einwohnermeldeamt）辦理登記，並取得Anmeldebestätigung（登記證明）。大多數傳統銀行——Sparkasse、Volksbank、Deutsche Bank——沒有這份證明就不會開設Girokonto（活期帳戶）。",
            "實際的解套方式如下：",
          ],
          bullets: [
            "用青年旅舍或分租地址辦理第一次Anmeldung——這是合法且普遍被接受的；接待長期住客的旅舍通常會提供所需的房東確認書（Wohnungsgeberbestätigung）",
            "先用App銀行開戶：N26和DKB只需護照和自拍照即可開戶，申請時不需要Anmeldebestätigung",
            "從App銀行取得德國IBAN後，在尋找固定住所期間可以此向房東證明你有帳戶",
            "確定固定地址並完成Anmeldung後，如果需要透過SEPA自動轉帳支付房租，可再新增Sparkasse或實體分行銀行帳戶",
          ],
        },
        {
          heading: "了解IBAN與德國的付款慣例",
          paragraphs: [
            "德國使用SEPA支付系統。德國銀行帳號以IBAN表示——一組以DE開頭的22碼代碼（例如：DE89 3704 0044 0532 0130 00）。這是你提供給雇主領薪、給房東付租金，或在EU區內接收匯款時唯一需要的號碼。",
            "與澳洲的BSB加帳號系統不同，沒有獨立的路由代碼——IBAN已包含所有資訊。對於來自SEPA區外的國際匯款，銀行還會提供BIC（銀行識別碼）。",
          ],
        },
        {
          heading: "德國現金為何依然重要",
          paragraphs: [
            "德國仍是西歐現金使用率最高的經濟體之一。許多餐廳、麵包店、市集和小商店只接受Nur Barzahlung（現金付款），或對刷卡消費設有最低金額限制。建議第一週準備€50至€100的現金，用於交通、飲食等日常開銷。",
          ],
          bullets: [
            "在自己銀行的ATM提款，避免外幣交易手續費和ATM手續費",
            "避免在機場兌換所換錢——匯率很差；改用ATM或App銀行的免費提款功能",
            "EC-Karte（Girocard）是德國國內借記卡標準——並非所有刷卡機都支援Visa/Mastercard借記卡，請確認你的卡別",
            "N26等App銀行發行Mastercard或Visa——使用廣泛，但在規模較小的店家仍可能無法使用",
          ],
        },
        {
          heading: "Steuer-ID在Anmeldung之後才會寄達",
          paragraphs: [
            "Steuer-ID（Steueridentifikationsnummer）是你的11碼德國稅務識別號碼。這不是申請來的，而是在完成Anmeldung後二至四週內，由官方自動產生並郵寄至你的登記地址。沒有Steuer-ID就無法在德國領取薪資。",
            "Steuer-ID寄達後請立即告知雇主。在提交之前，雇主依法必須以最高稅率級別（Steuerklasse VI）預扣所得稅，可能超過你薪資毛額的40%。提交後將適用正確的稅率等級——無子女的單身員工通常適用Steuerklasse I。",
          ],
          bullets: [
            "抵達後兩週內至Einwohnermeldeamt完成Anmeldung——帶好護照和房東的Wohnungsgeberbestätigung",
            "Steuer-ID信件將在2至4週內以郵件寄達——請妥善保存，勿遺失",
            "更換地址時，Steuer-ID終身不變；只需更新住址登記即可",
            "如果信件寄達前急需Steuer-ID，可在線上向Bundeszentralamt für Steuern（聯邦中央稅務局）申請",
          ],
        },
        {
          heading: "Tern 如何協助你",
          paragraphs: [
            "Tern按正確順序引導你完成德國抵達的所有步驟——Anmeldung、開戶與Steuer-ID——確保你在收到第一張薪資單之前不會遇到任何阻礙。它安全保存你的IBAN、提醒你向每位雇主提交Steuer-ID，並在你的稅後薪資顯示仍被以無申報稅率課稅時立即通知你。",
          ],
        },
      ],
      faq: [
        {
          q: "可以在抵達德國前就開設銀行帳戶嗎？",
          a: "N26等App銀行可以在抵達前開始申請程序，但身份驗證通常仍需透過視訊通話或到Deutsche Post（德國郵政）分行完成PostIdent。Sparkasse、Deutsche Bank等傳統銀行需要Anmeldebestätigung，而這份文件只能在抵達並完成住址登記後才能取得。",
        },
        {
          q: "超過一個月還沒收到Steuer-ID怎麼辦？",
          a: "可以到bzst.de向Bundeszentralamt für Steuern線上申請。處理需要數週時間。在此期間，以書面方式告知雇主你已提出申請——部分雇主會採取臨時安排而不套用Steuerklasse VI，但這取決於雇主的意願。",
        },
        {
          q: "哪間銀行最適合在德國打工度假？",
          a: "N26和DKB對WHV持有者最為實用：兩者都不需要Anmeldebestätigung即可開戶，並提供免費的IBAN薪資收款服務。Sparkasse分行在面對面協助和網路內免費ATM提款方面很方便，但申請過程較慢。建議先用App銀行開始，安頓下來後再視需要新增Sparkasse帳戶。",
        },
      ],
    },
  },
};
