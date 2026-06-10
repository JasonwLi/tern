import type { Article } from "../types";

export const article: Article = {
  slug: "bank-account-working-holiday-ireland",
  kind: "guide",
  date: "2026-06-03",
  emoji: "🇮🇪",
  accent: "bg-lime-300",
  readMinutes: 6,
  sources: [
    {
      label: "Gov.ie — Get a Personal Public Service (PPS) Number",
      url: "https://www.gov.ie/en/department-of-social-protection/services/get-a-personal-public-service-pps-number/",
    },
    {
      label: "Citizens Information Ireland — Tax and starting work",
      url: "https://www.citizensinformation.ie/en/employment/starting-work-and-changing-job/starting-work/tax-and-starting-work/",
    },
  ],
  i18n: {
    en: {
      title: "Opening a bank account in Ireland on a working holiday",
      description:
        "Banking in Ireland on a working holiday — PPS numbers, the address catch-22, IBAN accounts, 40% emergency tax without a PPS, and getting paid.",
      excerpt:
        "No PPS number means your employer taxes you at 40% emergency rate. Here's how to get banked, grab your PPS, and dodge the emergency tax trap.",
      sections: [
        {
          paragraphs: [
            "Setting up finances in Ireland on a working holiday involves the same circular frustration you'll hear about in every English-speaking country: you need a bank account to get paid, you need a PPS number to register for tax, and you need an Irish address for both. The stakes here are particularly high — without a PPS number your employer is required to apply emergency tax, which in Ireland means 40% with no tax credits. Getting everything sorted in the right order in your first week is worth real money.",
          ],
        },
        {
          heading: "What a PPS number is and why you need it urgently",
          paragraphs: [
            "A Personal Public Service (PPS) number is a unique seven-character identifier (format: 1234567A or 1234567AB) issued by the Department of Social Protection. It's your key to registering with Revenue for PAYE (Pay As You Earn) tax, claiming social welfare entitlements, and accessing most public services.",
            "If you start work without a PPS number, your employer cannot register your employment with Revenue. The result is emergency tax: Revenue applies the higher rate of income tax (40%) with no tax credits and no tax-free allowance until your PPS number is on file. Emergency tax applies from the very first euro of pay, so even a few weeks of delay compounds into a meaningful amount — and while you can reclaim over-withheld tax at year end, that can be months away.",
          ],
          bullets: [
            "PPS number format: 7 digits followed by 1 or 2 letters, e.g. 1234567A",
            "Without a PPS number: 40% tax rate, no credits, no allowances — on every euro earned",
            "With a PPS number and Revenue registration: standard rate (20%) up to the rate band, then 40% above",
            "Emergency tax refunds can be reclaimed but you must wait until year end or until Revenue issues a revised tax certificate",
            "You need a PPS number to register your employment in Revenue's myAccount portal",
          ],
        },
        {
          heading: "Opening a bank account and dealing with the address problem",
          paragraphs: [
            "Irish banks require proof of an Irish address to open an account. The main options are AIB, Bank of Ireland, Permanent TSB, and An Post Money (the postal service's current account). An Post Money is often the most accessible for new arrivals because you apply in a post office and the address requirements can be more flexible — but bring as much documentation as you have.",
            "If you're staying in a hostel or short-term accommodation, ask the hostel manager for a signed letter confirming your stay. Many Irish banks accept this for WHV holders, though policies vary. App-based options like Revolut and N26 are available in Ireland under EU e-money rules and open with just your passport, making them a useful stopgap for immediate card access while you set up a full IBAN account.",
          ],
          bullets: [
            "An Post Money — open at a post office counter, most flexible address policy for new arrivals",
            "Bank of Ireland and AIB — mainstream IBAN accounts; call ahead to confirm current WHV policy before visiting",
            "Revolut / N26 — passport-only opening, full Euro IBAN, instant virtual card; accepted by most employers for payroll",
            "Hostel letter confirming address is acceptable at many banks — get it signed and dated on hotel letterhead",
            "Bring your passport, WHV visa documentation, and any address evidence (email confirmation of booking counts)",
          ],
        },
        {
          heading: "Getting your PPS number",
          paragraphs: [
            "To apply for a PPS number you must be present in Ireland and have a reason to apply — starting work qualifies. Apply online through the Department of Social Protection's MyWelfare platform (mywelfare.ie), where you'll need a basic MyGovID account. You can create a MyGovID account with just your email address initially; full verification follows later.",
            "You'll need to provide identity documents (passport), proof of your Irish address, and your reason for applying (employment). The application is processed by your local Intreo Centre or Social Welfare office. If documents are in order, the PPS number is usually issued by post within a few days. Some centres offer in-person appointments for urgent cases — explain you've just started work and are being emergency-taxed.",
          ],
          bullets: [
            "Apply at mywelfare.ie — you need a MyGovID account to start the online application",
            "Documents needed: passport, proof of Irish address, evidence of why you need the number (job offer letter works)",
            "Processing time: typically a few days by post once documents are verified",
            "Urgent cases: contact your nearest Intreo Centre and explain you're being emergency-taxed",
            "Once you receive your PPS number, register at Revenue's myAccount (revenue.ie) and add your new job under 'Jobs and Pensions'",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Tern lets you open a Euro IBAN account before you fly, using just your passport and WHV approval — so you have an Irish IBAN ready for your first employer on day one. Top up from your home currency at the real mid-market rate, swap currencies at a flat fee, and withdraw at Irish ATMs with no fees. Tern also walks you through the PPS number application steps in sequence once you land, and reminds you to register your employment with Revenue — so you never sit on emergency tax longer than necessary.",
          ],
        },
      ],
      faq: [
        {
          q: "Can my employer start paying me before I have a PPS number?",
          a: "Yes, but they're required to apply emergency tax — 40% with no credits — until your PPS number is registered with Revenue. You can claim back the over-withheld tax, but only at year end or when Revenue issues a revised tax certificate. Get your PPS number and register on myAccount as fast as possible to minimise the amount withheld at emergency rate.",
        },
        {
          q: "Does Ireland accept working holiday visas from my country?",
          a: "Ireland runs working holiday programmes with a limited set of countries including Australia, Canada, the USA (J-1 visa), New Zealand, Argentina, and several others. Eligibility, age limits, and quotas vary by country. Check the Irish Naturalisation and Immigration Service (INIS) website for the current list of participating countries and how to apply.",
        },
        {
          q: "What is an IBAN and do I need one to work in Ireland?",
          a: "IBAN stands for International Bank Account Number — it's the standard format for Euro bank accounts across the EU. An Irish IBAN starts with 'IE' followed by 22 alphanumeric characters. Your employer will ask for your IBAN (and BIC — Bank Identifier Code) to process SEPA payroll payments. All full Irish bank accounts come with an IBAN; Revolut and N26 also provide a full Irish IBAN.",
        },
      ],
    },
    es: {
      title: "Cómo abrir una cuenta bancaria en Irlanda con visa working holiday",
      description:
        "Banca en Irlanda con WHV: número PPS, el dilema del domicilio, cuentas IBAN, 40% de impuesto de emergencia sin PPS y cómo cobrar el sueldo.",
      excerpt:
        "Sin número PPS, tu empleador te aplica una tasa impositiva de emergencia del 40%. Así es como abres tu cuenta, consigues el PPS y evitas esa trampa.",
      sections: [
        {
          paragraphs: [
            "Organizar las finanzas en Irlanda con una visa working holiday implica la misma frustración circular que escuchas en todos los países de habla inglesa: necesitas una cuenta bancaria para cobrar, necesitas un número PPS para registrarte ante el fisco, y necesitas una dirección irlandesa para los dos. Acá las consecuencias son particularmente serias — sin número PPS, tu empleador está obligado a aplicarte el impuesto de emergencia, que en Irlanda es del 40% sin ningún crédito fiscal. Ordenar todo en la primera semana vale dinero real.",
          ],
        },
        {
          heading: "Qué es el número PPS y por qué lo necesitas urgente",
          paragraphs: [
            "El número de Servicio Público Personal (PPS) es un identificador único de siete caracteres (formato: 1234567A o 1234567AB) que emite el Departamento de Protección Social. Es tu clave para registrarte ante Revenue (la agencia tributaria irlandesa) para el PAYE, acceder a prestaciones sociales y a la mayoría de los servicios públicos.",
            "Si empiezas a trabajar sin número PPS, tu empleador no puede registrar tu empleo ante Revenue. La consecuencia es el impuesto de emergencia: Revenue aplica la tasa impositiva más alta (40%) sin créditos ni deducciones hasta que el número PPS esté registrado. El impuesto de emergencia aplica desde el primer euro ganado, así que hasta unas pocas semanas de demora pueden sumar una cantidad importante — y aunque puedes reclamar el exceso retenido a fin de año, eso puede estar a meses de distancia.",
          ],
          bullets: [
            "Formato del número PPS: 7 dígitos seguidos de 1 o 2 letras, por ejemplo 1234567A",
            "Sin número PPS: tasa del 40%, sin créditos ni deducciones — sobre cada euro que ganas",
            "Con número PPS y registro en Revenue: tasa estándar del 20% hasta el tramo, luego 40% por encima",
            "Las retenciones en exceso por impuesto de emergencia se pueden reclamar, pero hay que esperar a fin de año o a que Revenue emita un certificado fiscal revisado",
            "Necesitas el número PPS para registrar tu empleo en el portal myAccount de Revenue",
          ],
        },
        {
          heading: "Cómo abrir una cuenta bancaria y resolver el problema del domicilio",
          paragraphs: [
            "Los bancos irlandeses exigen comprobante de domicilio en Irlanda para abrir una cuenta. Las opciones principales son AIB, Bank of Ireland, Permanent TSB y An Post Money (la cuenta corriente del servicio postal). An Post Money suele ser la más accesible para los recién llegados porque se solicita en la oficina de correos y los requisitos de domicilio pueden ser más flexibles — aunque lleva toda la documentación que tengas.",
            "Si estás en un hostel o alojamiento temporal, pídele al encargado una carta firmada que confirme tu estadía. Muchos bancos irlandeses la aceptan para titulares de WHV, aunque las políticas varían. Las opciones digitales como Revolut y N26 están disponibles en Irlanda bajo las regulaciones europeas de dinero electrónico y se abren solo con el pasaporte, lo que las hace útiles como solución provisional para tener tarjeta de inmediato mientras configuras una cuenta IBAN completa.",
          ],
          bullets: [
            "An Post Money — se abre en el mostrador de la oficina de correos, la política de domicilio más flexible para recién llegados",
            "Bank of Ireland y AIB — cuentas IBAN estándar; llama antes para confirmar la política actual con WHV",
            "Revolut / N26 — apertura solo con pasaporte, IBAN en euros completo, tarjeta virtual al instante; la mayoría de los empleadores las aceptan para nómina",
            "Una carta del hostel confirmando la dirección es aceptada en muchos bancos — pedila firmada y fechada en papel membretado del hostel",
            "Lleva tu pasaporte, documentación de la visa WHV y cualquier comprobante de domicilio (la confirmación de reserva por email sirve)",
          ],
        },
        {
          heading: "Cómo obtener tu número PPS",
          paragraphs: [
            "Para solicitar un número PPS tienes que estar presente en Irlanda y tener un motivo para solicitarlo — empezar a trabajar es suficiente. Solicítalo online a través de la plataforma MyWelfare del Departamento de Protección Social (mywelfare.ie), donde vas a necesitar una cuenta básica de MyGovID. Puedes crear una cuenta de MyGovID solo con tu dirección de email al principio; la verificación completa viene después.",
            "Vas a tener que presentar documentos de identidad (pasaporte), comprobante de domicilio en Irlanda y el motivo de la solicitud (empleo). La solicitud la procesa tu Centro Intreo o Welfare local. Si los documentos están en orden, el número PPS generalmente se emite por correo en unos pocos días. Algunos centros ofrecen turnos presenciales para casos urgentes — explica que acabas de empezar a trabajar y te están aplicando impuesto de emergencia.",
          ],
          bullets: [
            "Solicítalo en mywelfare.ie — necesitas una cuenta de MyGovID para iniciar la solicitud online",
            "Documentos necesarios: pasaporte, comprobante de domicilio en Irlanda, evidencia de por qué necesitas el número (una carta de oferta de trabajo sirve)",
            "Tiempo de procesamiento: generalmente unos pocos días por correo una vez verificados los documentos",
            "Casos urgentes: contacta al Centro Intreo más cercano y explica que te están aplicando impuesto de emergencia",
            "Cuando recibas el número PPS, regístrate en myAccount de Revenue (revenue.ie) y agrega tu nuevo trabajo en 'Jobs and Pensions'",
          ],
        },
        {
          heading: "Cómo te ayuda Tern",
          paragraphs: [
            "Tern te permite abrir una cuenta en euros con IBAN antes de volar, solo con tu pasaporte y la aprobación de la visa WHV — así tienes un IBAN irlandés listo para tu primer empleador el primer día. Recargas desde tu moneda local al tipo de cambio real, cambias divisas con una tarifa fija y retiras en cajeros automáticos irlandeses sin comisiones. Tern también te guía por los pasos del número PPS en orden cuando llegas, y te recuerda registrar tu empleo en Revenue — para que nunca estés más tiempo del necesario pagando impuesto de emergencia.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Mi empleador puede empezar a pagarme antes de que yo tenga el número PPS?",
          a: "Sí, pero está obligado a aplicarte el impuesto de emergencia — 40% sin créditos — hasta que el número PPS esté registrado en Revenue. Puedes recuperar el exceso retenido, pero solo a fin de año o cuando Revenue emita un certificado fiscal revisado. Consigue tu número PPS y regístrate en myAccount lo más rápido posible para minimizar la retención a tasa de emergencia.",
        },
        {
          q: "¿Irlanda acepta visas working holiday de mi país?",
          a: "Irlanda tiene programas de working holiday con un número limitado de países, incluyendo Australia, Canadá, EE.UU. (visa J-1), Nueva Zelanda, Argentina y otros. La elegibilidad, los límites de edad y los cupos varían según el país. Consulta el sitio web del Servicio Irlandés de Naturalización e Inmigración (INIS) para ver la lista actualizada de países participantes y cómo solicitar.",
        },
        {
          q: "¿Qué es un IBAN y lo necesito para trabajar en Irlanda?",
          a: "IBAN significa International Bank Account Number — es el formato estándar para las cuentas bancarias en euros en toda la UE. Un IBAN irlandés empieza con 'IE' seguido de 22 caracteres alfanuméricos. Tu empleador va a pedirte el IBAN (y el BIC — Bank Identifier Code) para procesar los pagos de nómina por SEPA. Todas las cuentas bancarias irlandesas completas incluyen un IBAN; Revolut y N26 también proporcionan un IBAN irlandés completo.",
        },
      ],
    },
    ja: {
      title: "ワーキングホリデーでアイルランドの銀行口座を開設する方法",
      description:
        "ワーホリでアイルランドの銀行口座 — PPS番号・住所の悪循環・IBANロ座・PPS未取得で40%緊急税率を解説。",
      excerpt:
        "PPS番号がないと、雇用主に40%の緊急税率が適用されます。口座を開設し、PPSを取得して緊急課税の罠を回避する方法を解説します。",
      sections: [
        {
          paragraphs: [
            "アイルランドでのワーキングホリデー中に財務を整えるのは、英語圏のどの国でも聞かれる同じ悪循環です。給与を受け取るには銀行口座が必要で、税金の登録にはPPS番号が必要で、どちらにもアイルランドの住所が必要です。ここで特に重要なのは、PPS番号なしだと雇用主が緊急課税を適用しなければならないことです。アイルランドでは40%で税額控除もゼロ。最初の1週間で正しい順番に全て揃えることが、実際の節税につながります。",
          ],
        },
        {
          heading: "PPS番号とは何か、なぜ今すぐ必要なのか",
          paragraphs: [
            "個人公共サービス番号（PPS番号）は、社会保護省が発行する7文字の固有識別番号です（形式：1234567A または 1234567AB）。PAYEの税務登録、社会福祉給付の受給、そしてほとんどの公共サービスへのアクセスに必要なキーです。",
            "PPS番号なしで仕事を始めると、雇用主はRevenueに雇用を登録できません。その結果、緊急課税が適用されます。PPS番号が登録されるまで、Revenueは最高税率（40%）を適用し、控除も免除も一切ありません。緊急課税は最初の1ユーロから適用されるため、数週間の遅れでも相当な金額になります。過剰徴収分は年末に還付請求できますが、それは数か月先の話になる場合があります。",
          ],
          bullets: [
            "PPS番号の形式：7桁の数字に続いて1〜2文字のアルファベット、例：1234567A",
            "PPS番号なし：税率40%、控除なし、免除なし — 収入の1ユーロ目から適用",
            "PPS番号とRevenue登録あり：課税帯まで標準税率20%、それ以上は40%",
            "緊急税率による過剰徴収は還付請求可能だが、年末まで待つかRevenueが修正税証明を発行するまで待つ必要がある",
            "RevenueのmyAccountポータルで雇用登録するにはPPS番号が必要",
          ],
        },
        {
          heading: "銀行口座を開設して住所問題を解決する方法",
          paragraphs: [
            "アイルランドの銀行は口座開設にアイルランド国内の住所証明を要求します。主な選択肢はAIB、Bank of Ireland、Permanent TSB、An Post Money（郵便局の当座預金口座）です。An Post Moneyは郵便局のカウンターで申請でき、住所要件が比較的柔軟なため、新着者が最もアクセスしやすい選択肢です。ただし、持っているドキュメントは全て持参してください。",
            "ホステルや短期宿泊施設に滞在している場合は、ホステルのマネージャーに宿泊を証明する署名入りの手紙を依頼してください。多くのアイルランドの銀行はWHVホルダーにこれを受け入れますが、ポリシーは異なります。RevolutやN26はEUの電子マネー規制のもとアイルランドでも利用可能で、パスポートだけで開設できます。完全なIBAN口座の手配が整うまでの間、カードをすぐ手に入れるための一時的な手段として役立ちます。",
          ],
          bullets: [
            "An Post Money — 郵便局カウンターで開設、新着者への住所ポリシーが最も柔軟",
            "Bank of IrelandとAIB — 標準IBANロ座；訪問前に現在のWHVポリシーを電話で確認",
            "Revolut / N26 — パスポートのみで開設、ユーロのフルIBAN、即時バーチャルカード；ほとんどの雇用主がペイロールに受け入れる",
            "ホステルのレターヘッドに署名・日付入りの住所確認書は多くの銀行で受け入れられる",
            "パスポート、WHVビザ書類、住所証明（予約確認のメールも可）を持参",
          ],
        },
        {
          heading: "PPS番号の取得方法",
          paragraphs: [
            "PPS番号を申請するにはアイルランドに在在し、申請理由が必要です。就労開始は正当な理由として認められます。社会保護省のMyWelfareプラットフォーム（mywelfare.ie）からオンラインで申請します。最初はメールアドレスだけで基本的なMyGovIDアカウントを作成できます。完全な本人確認は後から行います。",
            "本人確認書類（パスポート）、アイルランドの住所証明、申請理由（雇用）の提示が必要です。申請は最寄りのIntreoセンターまたはSocial Welfare事務所が処理します。書類が揃っていれば、通常は数日以内に郵便でPPS番号が発行されます。一部のセンターでは緊急事例に対して対面予約を提供しています。就労を開始したばかりで緊急課税が適用されていることを説明してください。",
          ],
          bullets: [
            "mywelfare.ieで申請 — オンライン申請を始めるにはMyGovIDアカウントが必要",
            "必要書類：パスポート、アイルランドの住所証明、申請理由の証拠（採用通知書で可）",
            "処理時間：書類確認後、通常数日以内に郵送",
            "緊急の場合：最寄りのIntreoセンターに連絡し、緊急課税が適用されていることを説明",
            "PPS番号を受け取ったら、Revenue myAccount（revenue.ie）に登録し、「Jobs and Pensions」で新しい仕事を追加",
          ],
        },
        {
          heading: "Ternができること",
          paragraphs: [
            "Ternは、飛行機に乗る前にパスポートとWHV承認だけでユーロのIBAN口座を開設できます。到着初日から雇用主に渡せるアイルランドのIBANが手元にある状態で仕事を始められます。本国の通貨からミッドマーケットレートでトップアップでき、通貨両替は一律手数料、アイルランドのATM引き出しも手数料なし。また、到着後にはPPS番号取得の手順を順番にガイドし、Revenue雇用登録のリマインドも行います。緊急課税に長く晒されないよう、最速でサポートします。",
          ],
        },
      ],
      faq: [
        {
          q: "PPS番号なしでも給与を支払ってもらえますか？",
          a: "はい、ただし雇用主はPPS番号がRevenueに登録されるまで緊急課税（40%、控除なし）を適用しなければなりません。過剰徴収分は還付請求できますが、年末まで待つかRevenueが修正税証明を発行するまで待つ必要があります。できるだけ早くPPS番号を取得してmyAccountに登録し、緊急税率での徴収を最小限に抑えてください。",
        },
        {
          q: "私の国のパスポートでアイルランドのワーキングホリデービザを申請できますか？",
          a: "アイルランドはオーストラリア、カナダ、アメリカ（J-1ビザ）、ニュージーランド、アルゼンチンなど限られた国々とワーキングホリデープログラムを締結しています。対象国、年齢制限、枠数は国によって異なります。現在の参加国リストと申請方法については、アイルランド帰化移民局（INIS）のウェブサイトを確認してください。",
        },
        {
          q: "IBANとは何ですか？アイルランドで働くために必要ですか？",
          a: "IBANは国際銀行口座番号の略で、EU全域でのユーロ銀行口座の標準形式です。アイルランドのIBANは「IE」で始まり、続けて22桁の英数字が続きます。雇用主はSEPAペイロール支払いを処理するためにIBAN（とBIC：銀行識別コード）を求めます。アイルランドの完全な銀行口座は全てIBANが付きますが、RevolutやN26もアイルランドのフルIBANを提供しています。",
        },
      ],
    },
    ko: {
      title: "아일랜드 워킹홀리데이 비자로 은행 계좌 개설하는 방법",
      description:
        "워홀 비자로 아일랜드 은행 개설 — PPS 번호, 주소 악순환, IBAN, PPS 없이 40% 긴급 세율, 급여 수령 방법.",
      excerpt:
        "PPS 번호가 없으면 고용주가 40% 긴급 세율을 적용합니다. 계좌를 개설하고, PPS를 받고, 긴급 과세 함정을 피하는 방법을 알아보세요.",
      sections: [
        {
          paragraphs: [
            "아일랜드에서 워킹홀리데이 중 재정을 정리하는 것은 영어권 모든 나라에서 듣게 되는 똑같은 악순환입니다: 급여를 받으려면 은행 계좌가 필요하고, 세금 등록을 하려면 PPS 번호가 필요하며, 두 가지 모두 아일랜드 주소가 필요합니다. 여기서 특히 심각한 문제는 PPS 번호 없이 일을 시작하면 고용주가 긴급 세금을 적용해야 한다는 점입니다 — 아일랜드에서는 세액공제 없이 40%입니다. 첫 주 안에 올바른 순서로 모든 것을 해결하는 것이 실질적인 돈을 아끼는 방법입니다.",
          ],
        },
        {
          heading: "PPS 번호란 무엇이며 왜 급히 필요한가",
          paragraphs: [
            "개인 공공 서비스(PPS) 번호는 사회보호부가 발급하는 7자리의 고유 식별 번호입니다(형식: 1234567A 또는 1234567AB). 이는 PAYE(원천징수) 세금 등록, 사회복지 혜택 신청, 대부분의 공공 서비스 이용에 필요한 핵심 번호입니다.",
            "PPS 번호 없이 일을 시작하면 고용주는 Revenue에 고용 등록을 할 수 없습니다. 그 결과가 긴급 세금입니다: PPS 번호가 등록될 때까지 Revenue는 최고 세율(40%)을 적용하고 세액공제나 면세 혜택이 전혀 없습니다. 긴급 세금은 첫 번째 유로부터 적용되므로, 몇 주만 지연되어도 상당한 금액이 됩니다 — 초과 징수된 세금은 연말에 환급 청구가 가능하지만, 그건 몇 달 후의 일입니다.",
          ],
          bullets: [
            "PPS 번호 형식: 숫자 7자리에 1~2글자의 알파벳, 예: 1234567A",
            "PPS 번호 없음: 40% 세율, 공제 없음, 면세 없음 — 버는 매 유로에 적용",
            "PPS 번호와 Revenue 등록: 세율 구간까지 표준세율 20%, 이후 40%",
            "긴급 세율로 인한 초과 징수는 환급 청구 가능하지만 연말까지 기다리거나 Revenue의 수정 세금 증명서 발급을 기다려야 함",
            "Revenue myAccount 포털에서 고용 등록을 하려면 PPS 번호가 필요함",
          ],
        },
        {
          heading: "은행 계좌 개설과 주소 문제 해결하기",
          paragraphs: [
            "아일랜드 은행들은 계좌 개설 시 아일랜드 내 주소 증명을 요구합니다. 주요 선택지는 AIB, Bank of Ireland, Permanent TSB, An Post Money(우체국 당좌 계좌)입니다. An Post Money는 우체국 창구에서 신청할 수 있고 주소 요건이 더 유연한 경우가 많아 신규 도착자에게 가장 접근하기 쉬운 옵션입니다 — 하지만 가지고 있는 서류는 모두 가져가세요.",
            "호스텔이나 단기 숙박 시설에 머물고 있다면, 호스텔 매니저에게 숙박을 확인하는 서명된 편지를 요청하세요. 많은 아일랜드 은행들이 WHV 소지자에게 이를 받아들이지만 정책은 다양합니다. Revolut와 N26 같은 앱 기반 옵션은 EU 전자화폐 규정 하에 아일랜드에서도 이용 가능하며 여권만으로 개설됩니다. 완전한 IBAN 계좌를 설정하는 동안 즉시 카드를 받을 수 있는 임시 수단으로 유용합니다.",
          ],
          bullets: [
            "An Post Money — 우체국 창구에서 개설, 신규 도착자를 위한 가장 유연한 주소 정책",
            "Bank of Ireland와 AIB — 표준 IBAN 계좌; 방문 전 현재 WHV 정책 전화로 확인",
            "Revolut / N26 — 여권만으로 개설, 완전한 유로 IBAN, 즉시 가상 카드; 대부분의 고용주가 급여 지급에 수락",
            "호스텔 레터헤드에 서명과 날짜가 적힌 주소 확인 편지는 많은 은행에서 받아들임",
            "여권, WHV 비자 서류, 주소 증빙 자료(예약 확인 이메일도 가능)를 지참하세요",
          ],
        },
        {
          heading: "PPS 번호 발급받는 방법",
          paragraphs: [
            "PPS 번호를 신청하려면 아일랜드에 있어야 하고 신청 이유가 있어야 합니다 — 취업 시작이 해당됩니다. 사회보호부의 MyWelfare 플랫폼(mywelfare.ie)을 통해 온라인으로 신청하며, 기본 MyGovID 계정이 필요합니다. 처음에는 이메일 주소만으로 기본 MyGovID 계정을 만들 수 있으며, 전체 인증은 나중에 진행됩니다.",
            "신분증명 서류(여권), 아일랜드 주소 증명, 신청 이유(고용)를 제출해야 합니다. 신청은 가장 가까운 Intreo 센터나 사회복지 사무소에서 처리합니다. 서류가 갖춰지면 보통 며칠 내로 우편으로 PPS 번호가 발급됩니다. 일부 센터는 긴급 사례에 대해 대면 예약을 제공합니다 — 막 일을 시작했고 긴급 과세가 적용되고 있다고 설명하세요.",
          ],
          bullets: [
            "mywelfare.ie에서 신청 — 온라인 신청을 시작하려면 MyGovID 계정이 필요합니다",
            "필요 서류: 여권, 아일랜드 주소 증명, 신청 이유 증빙(채용 제안서 가능)",
            "처리 기간: 서류 확인 후 보통 며칠 내 우편 발송",
            "긴급한 경우: 가장 가까운 Intreo 센터에 연락해 긴급 과세 중임을 설명하세요",
            "PPS 번호를 받은 후에는 Revenue myAccount(revenue.ie)에 등록하고 '직업 및 연금'에서 새 직장을 추가하세요",
          ],
        },
        {
          heading: "Tern이 도와드립니다",
          paragraphs: [
            "Tern은 비행기에 오르기 전에 여권과 WHV 승인만으로 유로 IBAN 계좌를 개설할 수 있게 해줍니다 — 도착 첫날부터 고용주에게 아일랜드 IBAN을 건넬 준비가 됩니다. 본국 통화에서 실제 환율로 충전하고, 통화 교환은 정액 수수료로, 아일랜드 ATM 출금은 수수료 없이 이용하세요. Tern은 도착 후 PPS 번호 취득 단계를 순서대로 안내하고, Revenue 고용 등록도 상기시켜 줍니다 — 긴급 세금에 오래 노출되지 않도록 최대한 빠르게 지원합니다.",
          ],
        },
      ],
      faq: [
        {
          q: "PPS 번호가 없어도 고용주에게 급여를 받을 수 있나요?",
          a: "네, 하지만 PPS 번호가 Revenue에 등록될 때까지 고용주는 긴급 세금(공제 없이 40%)을 적용해야 합니다. 초과 징수된 세금은 환급 청구할 수 있지만 연말까지 기다리거나 Revenue의 수정 세금 증명서 발급을 기다려야 합니다. 긴급 세율로 인한 공제를 최소화하기 위해 최대한 빨리 PPS 번호를 받고 myAccount에 등록하세요.",
        },
        {
          q: "제 나라 여권으로 아일랜드 워킹홀리데이 비자를 신청할 수 있나요?",
          a: "아일랜드는 호주, 캐나다, 미국(J-1 비자), 뉴질랜드, 아르헨티나 등 제한된 국가와 워킹홀리데이 프로그램을 운영합니다. 자격 요건, 나이 제한, 쿼터는 국가마다 다릅니다. 현재 참여 국가 목록과 신청 방법은 아일랜드 귀화이민청(INIS) 웹사이트를 확인하세요.",
        },
        {
          q: "IBAN이 무엇이며 아일랜드에서 일하려면 필요한가요?",
          a: "IBAN은 국제 은행 계좌 번호의 약자로, EU 전역에서 유로 은행 계좌의 표준 형식입니다. 아일랜드 IBAN은 'IE'로 시작하고 22자리의 영숫자가 뒤따릅니다. 고용주는 SEPA 급여 지급을 처리하기 위해 IBAN(과 BIC — 은행 식별 코드)을 요청합니다. 모든 아일랜드 정식 은행 계좌에는 IBAN이 포함되어 있으며, Revolut과 N26도 완전한 아일랜드 IBAN을 제공합니다.",
        },
      ],
    },
    "zh-TW": {
      title: "持打工度假簽證在愛爾蘭開設銀行帳戶的方法",
      description:
        "WHV簽證持有者的愛爾蘭銀行完整指南 — PPS號碼、住址證明的惡性循環、IBAN帳戶、沒有PPS就被課40%緊急稅率，以及如何向愛爾蘭雇主收取薪資。",
      excerpt:
        "沒有PPS號碼，雇主就得對你課徵40%的緊急稅率。這裡告訴你如何開戶、取得PPS，並避開緊急課稅的陷阱。",
      sections: [
        {
          paragraphs: [
            "在愛爾蘭打工度假期間整理財務，和在所有英語系國家一樣，都會碰到同一個惱人的循環：要收薪水需要銀行帳戶，要申報稅務需要PPS號碼，而這兩件事都需要愛爾蘭地址。這裡的風險特別高——沒有PPS號碼，雇主依法必須對你課徵緊急稅，在愛爾蘭這代表完全沒有稅額抵減地被課40%。第一週內依正確順序把所有事情搞定，能幫你省下真實的金錢。",
          ],
        },
        {
          heading: "PPS號碼是什麼，為什麼要緊急取得",
          paragraphs: [
            "個人公共服務（PPS）號碼是社會保障部發行的七字元唯一識別碼（格式：1234567A 或 1234567AB）。它是你向Revenue（稅務機關）登記PAYE（薪資所得稅）、申請社會福利，以及使用大多數公共服務的關鍵。",
            "如果你在沒有PPS號碼的情況下開始工作，雇主就無法向Revenue登記你的受雇狀態，結果就是緊急稅：在PPS號碼登記之前，Revenue會以最高稅率（40%）課稅，完全沒有任何扣除或免稅額。緊急稅從第一歐元起就開始計算，因此即使只是延誤幾週也會累積成相當大的金額——雖然你可以在年底申請退回多扣的稅款，但那可能是幾個月後的事了。",
          ],
          bullets: [
            "PPS號碼格式：7位數字後接1至2個英文字母，例如 1234567A",
            "沒有PPS號碼：40%稅率，無任何抵減或免稅——從每一歐元開始算起",
            "持有PPS號碼並完成Revenue登記：稅率區間內為標準稅率20%，超過後為40%",
            "緊急稅率造成的多扣稅款可申請退稅，但須等到年底或Revenue發出修訂稅務證明",
            "需要PPS號碼才能在Revenue的myAccount入口網站登記受雇資訊",
          ],
        },
        {
          heading: "開設銀行帳戶並解決住址問題",
          paragraphs: [
            "愛爾蘭銀行要求提供愛爾蘭境內的住址證明才能開戶。主要選項有AIB、Bank of Ireland、Permanent TSB，以及An Post Money（郵政局的活期帳戶）。An Post Money通常是新抵達者最容易申請的，因為你在郵局櫃台申請，住址要求也相對彈性——但仍建議攜帶所有能證明的文件。",
            "如果你住在青年旅館或短期住宿，請館方出具一封簽名的住宿證明信。許多愛爾蘭銀行會為WHV持有者接受這份文件，但各家政策不同。Revolut和N26等數位帳戶在歐盟電子貨幣法規下可在愛爾蘭使用，僅憑護照即可開戶，是在設立完整IBAN帳戶前立即取得卡片的好用過渡方案。",
          ],
          bullets: [
            "An Post Money — 在郵局櫃台開戶，對新抵達者住址政策最為彈性",
            "Bank of Ireland 和 AIB — 標準IBAN帳戶；前往前先致電確認目前的WHV開戶政策",
            "Revolut / N26 — 僅憑護照開戶，完整歐元IBAN，即時虛擬卡；大多數雇主接受用於薪資發放",
            "附有簽名與日期的青年旅館住址確認信在許多銀行可被接受",
            "請攜帶護照、WHV簽證文件及任何住址佐證資料（訂房確認郵件亦可）",
          ],
        },
        {
          heading: "如何申請PPS號碼",
          paragraphs: [
            "申請PPS號碼時，你必須人在愛爾蘭，且有申請的理由——開始工作即符合資格。透過社會保障部的MyWelfare平台（mywelfare.ie）線上申請，需要一個基本的MyGovID帳號。一開始只需電子郵件地址就能建立MyGovID帳號，完整驗證稍後再進行。",
            "你需要提供身份證件（護照）、愛爾蘭住址證明，以及申請理由（受雇）。申請由你所在地區的Intreo中心或社會福利辦公室處理。文件齊全的話，通常幾天內就會以郵寄方式發出PPS號碼。部分中心為緊急案件提供現場預約——請說明你剛開始工作且正被課徵緊急稅。",
          ],
          bullets: [
            "在mywelfare.ie申請——開始線上申請需要MyGovID帳號",
            "所需文件：護照、愛爾蘭住址證明、申請原因佐證（工作邀請信即可）",
            "處理時間：文件審核後通常數日內郵寄",
            "緊急情況：聯絡最近的Intreo中心，說明你正被課徵緊急稅",
            "收到PPS號碼後，在Revenue的myAccount（revenue.ie）登記，並在「職業與退休金」項目下新增新工作",
          ],
        },
        {
          heading: "Tern 如何協助你",
          paragraphs: [
            "Tern讓你在搭機前就能以護照和WHV批准開設歐元IBAN帳戶——抵達當天就備妥愛爾蘭IBAN可以交給第一位雇主。從本國貨幣以真實匯率充值，貨幣兌換收固定費用，在愛爾蘭ATM提款也完全免手續費。Tern還會在你落地後依序引導你完成PPS號碼申請步驟，並提醒你完成Revenue的受雇登記——讓你不必比必要時間更久地承受緊急稅的損失。",
          ],
        },
      ],
      faq: [
        {
          q: "沒有PPS號碼，雇主也可以開始付我薪水嗎？",
          a: "可以，但在PPS號碼向Revenue登記之前，雇主必須課徵緊急稅（40%，無任何抵減）。你可以申請退回被多扣的稅款，但須等到年底或Revenue發出修訂稅務證明。請盡快取得PPS號碼並在myAccount登記，以減少被以緊急稅率扣稅的時間。",
        },
        {
          q: "我的國家護照可以申請愛爾蘭打工度假簽證嗎？",
          a: "愛爾蘭與澳洲、加拿大、美國（J-1簽證）、紐西蘭、阿根廷等有限的國家簽訂了打工度假計畫。各國的資格條件、年齡限制和名額各不相同。請查詢愛爾蘭歸化及移民署（INIS）網站，了解目前的參與國名單和申請方式。",
        },
        {
          q: "IBAN是什麼？在愛爾蘭工作需要IBAN嗎？",
          a: "IBAN是國際銀行帳號（International Bank Account Number）的縮寫，是歐盟全境歐元銀行帳戶的標準格式。愛爾蘭IBAN以「IE」開頭，後接22個英數字元。雇主需要你的IBAN（及BIC——銀行識別碼）來處理SEPA薪資支付。所有完整的愛爾蘭銀行帳戶都附帶IBAN；Revolut和N26也提供完整的愛爾蘭IBAN。",
        },
      ],
    },
  },
};
