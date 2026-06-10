import type { Article } from "../types";

export const article: Article = {
  slug: "bank-account-working-holiday-australia",
  kind: "guide",
  date: "2026-05-18",
  emoji: "🏦",
  accent: "bg-lime-300",
  readMinutes: 6,
  related: ["what-is-a-bsb-number", "best-bank-working-holiday-australia"],
  sources: [
    {
      label: "Australian Taxation Office (ATO) — Apply for a TFN",
      url: "https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn/foreign-passport-holders-permanent-migrants-and-temporary-visitors-tfn-application",
    },
    {
      label: "Department of Home Affairs — Working Holiday visa (subclass 417)",
      url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
    },
    {
      label: "Department of Home Affairs — Work and Holiday visa (subclass 462)",
      url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462",
    },
  ],
  i18n: {
    en: {
      title: "How to open a bank account for Australia working holiday",
      description:
        "Open an Australian bank account for your working holiday before you arrive — no fixed address needed. What to bring and how to get paid.",
      excerpt:
        "No utility bill, no fixed address, no two-week wait. Here's how working holiday makers actually get an Australian account set up — and get paid on payday one.",
      sections: [
        {
          paragraphs: [
            "Opening a bank account is the first real hurdle of any Australian working holiday — and it's where most backpackers lose time and money. You need a local account to get paid, but the big banks often want a local address and an in-branch visit you can't do from a hostel. This guide walks through your options and the fastest path to a working account.",
          ],
        },
        {
          heading: "What you need to open an Australian account",
          paragraphs: ["For a working holiday visa (subclass 417 or 462), you'll typically need:"],
          bullets: [
            "A valid passport",
            "Your working holiday visa grant",
            "An Australian or overseas address (a neobank usually accepts your home address)",
            "A tax file number (TFN) — you can add this within the first weeks, but without it you'll be taxed at the top rate",
          ],
        },
        {
          heading: "The 'no fixed address' problem",
          paragraphs: [
            "Traditional banks frequently ask for proof of a local residential address — a catch-22 when you're living in hostels or a campervan. App-based banks (neobanks) verify you with your passport and visa instead, so you can open an account from your sofa back home before you even fly.",
            "That matters because your employer can't pay you until you give them a local account number. Set it up early and your first payday isn't three weeks late.",
          ],
        },
        {
          heading: "Get your BSB and account number before you land",
          paragraphs: [
            "An Australian account number comes in two parts: a 6-digit [BSB](~/blog/what-is-a-bsb-number) (which identifies the bank and branch) and your account number. Your employer needs both to run payroll. With a digital account you get these instantly on signup, plus a virtual card for spending before your physical card arrives.",
          ],
        },
        {
          heading: "Avoid the fees that quietly add up",
          bullets: [
            "Foreign ATM and card fees while you wait for a local card",
            "Monthly account-keeping fees on some legacy accounts",
            "Bad exchange rates when family tops you up from home",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Tern is built for working holiday makers: open an account from overseas with just your passport and visa, get a real BSB and account number instantly to hand to your employer, top up from home at the real exchange rate, and pay with no ATM fees. Your physical card ships to your first hostel or share house.",
          ],
        },
      ],
      faq: [
        {
          q: "Can I open an Australian bank account before I arrive?",
          a: "Yes. A neobank like Tern verifies you with your passport and working holiday visa, so you can open the account from your home country and arrive with your account number ready for your employer.",
        },
        {
          q: "Do I need a TFN to open the account?",
          a: "No — you can open the account first. But apply for your tax file number quickly, because without it your employer must withhold tax at the highest rate until it's added.",
        },
        {
          q: "How do I get paid on a working holiday?",
          a: "Give your employer your BSB and account number. Wages are paid directly into your account on payday. Setting the account up before you start work avoids weeks of delay.",
        },
      ],
    },
    es: {
      title: "Cuenta bancaria australiana para tu working holiday",
      description:
        "Abre una cuenta bancaria australiana para tu working holiday antes de llegar, sin domicilio fijo. Qué necesitas y cómo cobrar desde el primer día.",
      excerpt:
        "Sin factura de servicios, sin domicilio fijo, sin esperar dos semanas. Así es como los backpackers abren de verdad una cuenta australiana — y cobran el primer día de pago.",
      sections: [
        {
          paragraphs: [
            "Abrir una cuenta bancaria es el primer obstáculo real de cualquier working holiday en Australia — y es donde la mayoría de los backpackers pierden tiempo y dinero. Necesitas una cuenta local para que te paguen, pero los bancos grandes suelen pedir un domicilio local y una visita a la sucursal que no puedes hacer desde un hostel. Esta guía repasa tus opciones y el camino más rápido para tener una cuenta operativa. Si eres de Latinoamérica (Chile, Argentina, Perú, Uruguay, Ecuador…), tu visa es la Work and Holiday (subclase 462) — a efectos de cuenta bancaria y trámites financieros funciona exactamente igual que la 417.",
          ],
        },
        {
          heading: "Qué necesitas para abrir una cuenta australiana",
          paragraphs: ["Para una visa working holiday (subclass 417 o 462), normalmente vas a necesitar:"],
          bullets: [
            "Pasaporte vigente",
            "La aprobación de tu visa working holiday",
            "Un domicilio australiano o del extranjero (los neobancos suelen aceptar tu dirección de casa)",
            "Un número de archivo tributario (TFN) — puedes agregarlo en las primeras semanas, pero sin él te retendrán impuestos a la tasa más alta",
          ],
        },
        {
          heading: "El problema de 'no tener domicilio fijo'",
          paragraphs: [
            "Los bancos tradicionales suelen pedir comprobante de domicilio local — un círculo vicioso cuando vives en hostels o una campervan. Los bancos digitales (neobancos) te verifican con tu pasaporte y visa, así que puedes abrir la cuenta desde tu casa antes de volar.",
            "Eso importa porque tu empleador no puede pagarte hasta que le des un número de cuenta local. Configúrala antes y tu primer día de pago no llega con tres semanas de retraso.",
          ],
        },
        {
          heading: "Consigue tu BSB y número de cuenta antes de aterrizar",
          paragraphs: [
            "Una cuenta australiana tiene dos partes: un [BSB](~/blog/what-is-a-bsb-number) de 6 dígitos (que identifica el banco y la sucursal) y tu número de cuenta. Tu empleador necesita ambos para procesar la nómina. Con una cuenta digital los obtienes al instante al registrarte, más una tarjeta virtual para gastar antes de que llegue la física.",
          ],
        },
        {
          heading: "Evita las comisiones que se acumulan sin que te des cuenta",
          bullets: [
            "Comisiones por cajero y tarjeta extranjera mientras esperas tu tarjeta local",
            "Comisiones mensuales de mantenimiento en algunas cuentas tradicionales",
            "Tipos de cambio malos cuando tu familia te transfiere dinero desde casa",
          ],
        },
        {
          heading: "Cómo te ayuda Tern",
          paragraphs: [
            "Tern está hecha para los working holiday makers: abre una cuenta desde el extranjero solo con tu pasaporte y visa, obtén un BSB y número de cuenta real al instante para dárselo a tu empleador, recarga desde casa al tipo de cambio real, y paga sin comisiones en cajeros. Tu tarjeta física llega a tu primer hostel o casa compartida.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Puedo abrir una cuenta bancaria australiana antes de llegar?",
          a: "Sí. Un neobanco como Tern te verifica con tu pasaporte y visa working holiday, así que puedes abrir la cuenta desde tu país y llegar a Australia con el número de cuenta listo para tu empleador.",
        },
        {
          q: "¿Necesito un TFN para abrir la cuenta?",
          a: "No — puedes abrir la cuenta primero. Pero solicita tu número de archivo tributario rápido, porque sin él tu empleador debe retener impuestos a la tasa más alta hasta que lo agregues.",
        },
        {
          q: "¿Cómo cobro en un working holiday?",
          a: "Dale a tu empleador tu BSB y número de cuenta. Los salarios se depositan directamente en tu cuenta el día de pago. Configurarla antes de empezar a trabajar evita semanas de demora.",
        },
      ],
    },
    ja: {
      title: "オーストラリアのワーホリ向け銀行口座の開設方法",
      description:
        "ワーホリでオーストラリアの銀行口座を開設する方法 — 渡航前・住所なしでもOK。必要書類と初給料日から受け取るコツを解説。",
      excerpt:
        "公共料金の明細も固定住所も2週間待ちも不要。ワーホリ参加者が実際にオーストラリアの口座を開設して、最初の給料日にちゃんと受け取る方法をまとめました。",
      sections: [
        {
          paragraphs: [
            "銀行口座の開設は、オーストラリアのワーキングホリデーで最初にぶつかる関門です。ここで時間とお金を無駄にするバックパッカーは少なくありません。給与を受け取るには現地口座が必要ですが、大手銀行は現地住所やブランチへの来店を求めることが多く、ホステル滞在中には対応が難しいことも。このガイドでは選択肢と最短ルートをわかりやすく説明します。",
          ],
        },
        {
          heading: "オーストラリアの口座開設に必要なもの",
          paragraphs: ["ワーキングホリデービザ（subclass 417 または 462）の場合、一般的に必要なものは以下の通りです："],
          bullets: [
            "有効なパスポート",
            "ワーキングホリデービザの許可通知",
            "オーストラリア国内または海外の住所（ネオバンクは自国の住所でも可）",
            "税務番号（TFN） — 最初の数週間以内に追加できますが、なければ最高税率で源泉徴収されます",
          ],
        },
        {
          heading: "「住所がない」という問題",
          paragraphs: [
            "従来の銀行は現地の住居証明を求めることが多く、ホステルやキャンピングカーで生活している場合は八方ふさがりになりがちです。アプリ系の銀行（ネオバンク）はパスポートとビザで本人確認ができるため、渡航前に自宅のソファーに座りながらでも口座を開設できます。",
            "これは重要なポイントです。現地の口座番号を渡すまで、雇用主は給与を振り込めません。事前に開設しておけば、初給料日が3週間遅れるような事態を避けられます。",
          ],
        },
        {
          heading: "渡航前にBSBと口座番号を取得する",
          paragraphs: [
            "オーストラリアの口座番号は2つの要素で構成されます：銀行と支店を識別する6桁の[BSB](~/blog/what-is-a-bsb-number)と、口座番号です。給与計算にはどちらも必要です。デジタル口座なら登録直後に取得でき、物理カードが届く前に使えるバーチャルカードも即時発行されます。",
          ],
        },
        {
          heading: "じわじわ積み重なる手数料を避ける",
          bullets: [
            "現地カードが届くまでの海外ATM・カード手数料",
            "一部の従来型口座にかかる月額維持費",
            "家族が自国から送金するときの不利な為替レート",
          ],
        },
        {
          heading: "Ternでできること",
          paragraphs: [
            "Ternはワーキングホリデー参加者のために設計されています。パスポートとビザだけで海外から口座開設でき、リアルなBSBと口座番号を即時取得して雇用主に渡せます。実勢レートで自国から入金でき、ATM手数料なしで支払いも可能。物理カードは最初のホステルやシェアハウスに郵送されます。",
          ],
        },
      ],
      faq: [
        {
          q: "オーストラリアに到着する前に銀行口座を開設できますか？",
          a: "はい。Ternのようなネオバンクはパスポートとワーキングホリデービザで本人確認ができるため、自国にいながら口座を開設し、口座番号を準備した状態でオーストラリアに到着できます。",
        },
        {
          q: "口座開設にTFNは必要ですか？",
          a: "いいえ — 先に口座を開設することができます。ただし、TFNは早めに申請してください。なければ追加されるまで雇用主が最高税率で源泉徴収しなければならないためです。",
        },
        {
          q: "ワーホリ中の給与はどうやって受け取りますか？",
          a: "雇用主にBSBと口座番号を伝えてください。給与は給料日に口座に直接振り込まれます。仕事を始める前に口座を準備しておけば、数週間の遅れを防げます。",
        },
      ],
    },
    ko: {
      title: "호주 워홀 은행 계좌 개설 방법 완벽 가이드",
      description:
        "워홀 비자로 호주 은행 계좌 개설 — 입국 전, 고정 주소 없이도 가능. 필요 서류와 첫 월급 수령 방법 총정리.",
      excerpt:
        "공과금 고지서도, 고정 주소도, 2주 대기도 필요 없어요. 워홀러들이 실제로 호주 계좌를 만들고 첫 월급을 받는 방법을 정리했습니다.",
      sections: [
        {
          paragraphs: [
            "은행 계좌 개설은 호주 워킹홀리데이에서 처음 맞닥뜨리는 현실적인 난관이에요. 대부분의 워홀러들이 여기서 시간과 돈을 낭비합니다. 급여를 받으려면 현지 계좌가 필요하지만, 대형 은행들은 현지 주소 증명과 지점 방문을 요구하는 경우가 많아 호스텔에 머무는 동안에는 쉽지 않죠. 이 가이드에서는 선택지와 가장 빠른 방법을 안내합니다.",
          ],
        },
        {
          heading: "호주 계좌 개설에 필요한 것들",
          paragraphs: ["워킹홀리데이 비자(subclass 417 또는 462)의 경우 일반적으로 필요한 것들은 다음과 같습니다:"],
          bullets: [
            "유효한 여권",
            "워킹홀리데이 비자 승인서",
            "호주 내 또는 해외 주소 (네오뱅크는 보통 본국 주소도 수락)",
            "세금 파일 번호(TFN) — 처음 몇 주 안에 추가할 수 있지만, 없으면 최고 세율로 원천징수됩니다",
          ],
        },
        {
          heading: "'고정 주소가 없다'는 문제",
          paragraphs: [
            "전통적인 은행들은 현지 거주지 증명을 요구하는 경우가 많아, 호스텔이나 캠퍼밴에서 지내는 경우 딜레마에 빠지게 됩니다. 앱 기반 은행(네오뱅크)은 여권과 비자로 본인 인증을 하기 때문에, 출국 전 집에서 편하게 계좌를 개설할 수 있어요.",
            "이게 중요한 이유는 현지 계좌 번호를 전달해야 고용주가 급여를 입금할 수 있기 때문입니다. 미리 만들어두면 첫 월급날이 3주씩 밀리는 상황을 피할 수 있어요.",
          ],
        },
        {
          heading: "입국 전에 BSB와 계좌 번호 받기",
          paragraphs: [
            "호주 계좌 번호는 두 부분으로 구성됩니다: 은행과 지점을 식별하는 6자리 [BSB](~/blog/what-is-a-bsb-number)와 계좌 번호예요. 고용주가 급여를 처리하려면 두 가지 모두 필요합니다. 디지털 계좌는 가입 즉시 발급되며, 실물 카드가 도착하기 전에 사용할 수 있는 가상 카드도 바로 받을 수 있어요.",
          ],
        },
        {
          heading: "조용히 쌓이는 수수료 피하기",
          bullets: [
            "현지 카드를 기다리는 동안 발생하는 해외 ATM 및 카드 수수료",
            "일부 전통 계좌의 월 유지 수수료",
            "가족이 본국에서 송금할 때 적용되는 불리한 환율",
          ],
        },
        {
          heading: "Tern이 도와드리는 방법",
          paragraphs: [
            "Tern은 워킹홀리데이 메이커를 위해 만들어졌습니다: 여권과 비자만으로 해외에서 계좌를 개설하고, 고용주에게 바로 전달할 수 있는 실제 BSB와 계좌 번호를 즉시 받으세요. 실시간 환율로 본국에서 충전하고, ATM 수수료 없이 결제할 수 있어요. 실물 카드는 첫 번째 호스텔이나 쉐어하우스로 배송됩니다.",
          ],
        },
      ],
      faq: [
        {
          q: "입국 전에 호주 은행 계좌를 개설할 수 있나요?",
          a: "네. Tern 같은 네오뱅크는 여권과 워킹홀리데이 비자로 본인 인증을 하기 때문에, 본국에서 계좌를 개설하고 계좌 번호를 준비한 상태로 호주에 도착할 수 있어요.",
        },
        {
          q: "계좌 개설에 TFN이 필요한가요?",
          a: "아니요 — 계좌를 먼저 개설할 수 있어요. 하지만 세금 파일 번호는 빨리 신청하세요. 없으면 추가될 때까지 고용주가 최고 세율로 원천징수해야 합니다.",
        },
        {
          q: "워홀 중 급여는 어떻게 받나요?",
          a: "고용주에게 BSB와 계좌 번호를 알려주세요. 급여는 월급날에 계좌로 직접 입금됩니다. 일을 시작하기 전에 계좌를 준비해두면 몇 주씩 지연되는 상황을 피할 수 있어요.",
        },
      ],
    },
    "zh-TW": {
      title: "如何為澳洲打工度假開設銀行帳戶",
      description:
        "持打工度假簽證（WHV）在澳洲開設銀行帳戶 — 抵達前即可辦理，無需固定住址。所需文件、申請時間，以及如何從第一個發薪日就收到薪資。",
      excerpt:
        "不需要水電帳單、不需要固定住址、不需要等兩週。這是打工度假者實際開設澳洲帳戶的方式 — 並在第一個發薪日就順利領到薪資。",
      sections: [
        {
          paragraphs: [
            "開設銀行帳戶是澳洲打工度假的第一道關卡 — 也是大多數背包客浪費時間與金錢的地方。你需要本地帳戶才能領薪水，但大型銀行通常要求本地地址和親自到分行辦理，住在青年旅館時根本難以配合。本指南將介紹你的選擇，以及最快速開立有效帳戶的方式。",
          ],
        },
        {
          heading: "開設澳洲帳戶所需的文件",
          paragraphs: ["持打工度假簽證（subclass 417 或 462），通常需要準備："],
          bullets: [
            "有效護照",
            "打工度假簽證核准通知",
            "澳洲或海外地址（純網路銀行通常接受你在台灣的地址）",
            "稅務檔案號碼（TFN） — 可在最初幾週內補充，但若未申請，雇主須以最高稅率預扣所得稅",
          ],
        },
        {
          heading: "「沒有固定住址」的困境",
          paragraphs: [
            "傳統銀行經常要求提供本地居住地址證明 — 對住在青年旅館或露營車的人來說根本無法配合。以App為基礎的銀行（純網路銀行）改以護照和簽證驗證身分，因此你可以在出發前坐在家裡就完成開戶。",
            "這點非常重要，因為雇主必須取得你的本地帳號才能匯薪水。提早開好帳戶，第一個發薪日就不會延誤三週。",
          ],
        },
        {
          heading: "在抵達前取得BSB與帳號",
          paragraphs: [
            "澳洲帳號由兩個部分組成：識別銀行和分行的6位數[BSB](~/blog/what-is-a-bsb-number)，以及帳戶號碼。雇主兩者都需要才能處理薪資。數位帳戶在註冊後即可立即取得這些資訊，還會同步發行虛擬卡，讓你在實體卡寄達前就能消費。",
          ],
        },
        {
          heading: "避免悄悄累積的費用",
          bullets: [
            "等待本地卡期間的境外ATM與刷卡手續費",
            "部分舊式帳戶的每月帳戶管理費",
            "家人從台灣匯款時的不利匯率",
          ],
        },
        {
          heading: "Tern 如何幫助你",
          paragraphs: [
            "Tern 專為打工度假者打造：只需護照和簽證即可在海外完成開戶，立即取得真實的BSB和帳號交給雇主，以即時匯率從台灣儲值，並免手續費使用ATM提款。實體卡會寄送到你第一間青年旅館或分租套房。",
          ],
        },
      ],
      faq: [
        {
          q: "我可以在抵達澳洲前開設銀行帳戶嗎？",
          a: "可以。Tern 等純網路銀行以護照和打工度假簽證驗證身分，因此你可以在台灣完成開戶，帶著帳號抵達澳洲，直接交給雇主。",
        },
        {
          q: "開戶需要TFN嗎？",
          a: "不需要 — 你可以先開戶。但請盡快申請稅務檔案號碼，因為在取得TFN之前，雇主必須以最高稅率預扣所得稅。",
        },
        {
          q: "打工度假期間如何領薪水？",
          a: "將你的BSB和帳號提供給雇主，薪資會在發薪日直接匯入帳戶。在開始工作前設好帳戶，就能避免延誤數週才領到薪水。",
        },
      ],
    },
    de: {
      title: "Bankkonto für Work and Travel Australien eröffnen",
      description:
        "Australisches Bankkonto für dein Work and Travel vor der Abreise eröffnen — ohne feste Adresse. Was du brauchst und wie du ab dem ersten Zahltag Geld bekommst.",
      excerpt:
        "Keine Stromrechnung, keine feste Adresse, kein zweiwöchiges Warten. So eröffnen Work-and-Travel-Reisende wirklich ein australisches Konto — und bekommen schon am ersten Zahltag ihr Geld.",
      sections: [
        {
          paragraphs: [
            "Ein Bankkonto zu eröffnen ist die erste echte Hürde bei jedem Work and Travel in Australien — und genau hier verschwenden die meisten Backpacker Zeit und Geld. Du brauchst ein lokales Konto, um bezahlt zu werden, aber die großen Banken verlangen eine lokale Adresse und einen Filialbesuch, den du vom Hostel aus nicht erledigen kannst. Dieser Leitfaden zeigt dir deine Optionen und den schnellsten Weg zu einem funktionsfähigen Konto.",
          ],
        },
        {
          heading: "Was du für ein australisches Konto brauchst",
          paragraphs: ["Für ein Working-Holiday-Visum (subclass 417 oder 462) benötigst du in der Regel:"],
          bullets: [
            "Gültiger Reisepass",
            "Deine Working-Holiday-Visumsgenehmigung",
            "Eine australische oder ausländische Adresse (Neobanken akzeptieren meist deine Heimatadresse)",
            "Eine Steuernummer (TFN) — kannst du in den ersten Wochen nachreichen, aber ohne sie wird dir der Höchststeuersatz einbehalten",
          ],
        },
        {
          heading: "Das Problem ohne feste Adresse",
          paragraphs: [
            "Traditionelle Banken verlangen häufig einen Nachweis der lokalen Wohnadresse — ein Teufelskreis, wenn du im Hostel oder Campervan lebst. App-basierte Banken (Neobanken) verifizieren dich stattdessen mit Reisepass und Visum, sodass du das Konto schon von deiner Couch zu Hause eröffnen kannst, bevor du überhaupt fliegst.",
            "Das ist wichtig, weil dein Arbeitgeber dich erst bezahlen kann, wenn du ihm eine lokale Kontonummer gibst. Richte es frühzeitig ein und dein erster Zahltag kommt nicht drei Wochen zu spät.",
          ],
        },
        {
          heading: "BSB und Kontonummer vor der Ankunft sichern",
          paragraphs: [
            "Eine australische Kontonummer besteht aus zwei Teilen: einer 6-stelligen [BSB](~/blog/what-is-a-bsb-number) (die Bank und Filiale identifiziert) und deiner Kontonummer. Dein Arbeitgeber braucht beides für die Gehaltsabrechnung. Mit einem digitalen Konto erhältst du beides sofort bei der Anmeldung — plus eine virtuelle Karte zum Zahlen, bevor die physische Karte ankommt.",
          ],
        },
        {
          heading: "Gebühren vermeiden, die sich still summieren",
          bullets: [
            "Auslands-ATM- und Kartengebühren, während du auf eine lokale Karte wartest",
            "Monatliche Kontoführungsgebühren bei manchen herkömmlichen Konten",
            "Schlechte Wechselkurse, wenn Familie von zu Hause Geld überweist",
          ],
        },
        {
          heading: "So hilft dir Tern",
          paragraphs: [
            "Tern ist für Work-and-Travel-Reisende gemacht: Eröffne ein Konto vom Ausland aus mit nur Reisepass und Visum, erhalte sofort eine echte BSB und Kontonummer für deinen Arbeitgeber, lade von zu Hause zum echten Wechselkurs auf und zahle ohne ATM-Gebühren. Deine physische Karte wird zu deinem ersten Hostel oder deiner Wohngemeinschaft geschickt.",
          ],
        },
      ],
      faq: [
        {
          q: "Kann ich ein australisches Bankkonto vor meiner Ankunft eröffnen?",
          a: "Ja. Eine Neobank wie Tern verifiziert dich mit Reisepass und Working-Holiday-Visum, sodass du das Konto von zu Hause aus eröffnen und mit deiner Kontonummer für den Arbeitgeber in Australien ankommen kannst.",
        },
        {
          q: "Brauche ich eine TFN, um das Konto zu eröffnen?",
          a: "Nein — du kannst das Konto zuerst eröffnen. Beantrage deine Steuernummer aber schnell, denn ohne sie muss dein Arbeitgeber bis zur Nachreichung den höchsten Steuersatz einbehalten.",
        },
        {
          q: "Wie werde ich beim Work and Travel bezahlt?",
          a: "Gib deinem Arbeitgeber deine BSB und Kontonummer. Der Lohn wird am Zahltag direkt auf dein Konto überwiesen. Richtest du das Konto vor Arbeitsbeginn ein, vermeidest du wochenlange Verzögerungen.",
        },
      ],
    },
    fr: {
      title: "Ouvrir un compte bancaire australien pour son PVT",
      description:
        "Ouvre un compte bancaire australien pour ton PVT avant d'arriver — sans adresse fixe. Ce qu'il te faut et comment être payé dès le premier jour.",
      excerpt:
        "Pas de facture d'électricité, pas d'adresse fixe, pas deux semaines d'attente. Voilà comment les pvtistes ouvrent vraiment un compte australien — et touchent leur salaire dès le premier jour de paie.",
      sections: [
        {
          paragraphs: [
            "Ouvrir un compte bancaire est le premier vrai obstacle de tout PVT en Australie — et c'est là que la plupart des backpackers perdent du temps et de l'argent. Tu as besoin d'un compte local pour être payé, mais les grandes banques réclament souvent une adresse locale et une visite en agence impossible à faire depuis une auberge. Ce guide passe en revue tes options et le chemin le plus rapide vers un compte opérationnel.",
          ],
        },
        {
          heading: "Ce qu'il te faut pour ouvrir un compte australien",
          paragraphs: ["Pour un visa working holiday (subclass 417 ou 462), il te faudra généralement :"],
          bullets: [
            "Un passeport en cours de validité",
            "L'accord d'attribution de ton visa working holiday",
            "Une adresse australienne ou étrangère (une néobanque accepte généralement ton adresse de chez toi)",
            "Un numéro fiscal (TFN) — tu peux l'ajouter dans les premières semaines, mais sans lui tu seras imposé au taux maximum",
          ],
        },
        {
          heading: "Le problème de l'adresse fixe",
          paragraphs: [
            "Les banques traditionnelles demandent souvent un justificatif de domicile local — un cercle vicieux quand tu vis en auberge ou en van. Les banques sur application (néobanques) te vérifient avec ton passeport et ton visa, donc tu peux ouvrir un compte depuis ton canapé avant même de prendre l'avion.",
            "C'est crucial car ton employeur ne peut pas te payer tant qu'il n'a pas ton numéro de compte local. Ouvre-le tôt et ton premier jour de paie n'aura pas trois semaines de retard.",
          ],
        },
        {
          heading: "Obtiens ton BSB et ton numéro de compte avant d'atterrir",
          paragraphs: [
            "Un compte australien se compose de deux éléments : un [BSB](~/blog/what-is-a-bsb-number) à 6 chiffres (qui identifie la banque et l'agence) et ton numéro de compte. Ton employeur a besoin des deux pour te mettre en paie. Avec un compte digital, tu les obtiens instantanément à l'inscription, plus une carte virtuelle pour dépenser avant que ta carte physique arrive.",
          ],
        },
        {
          heading: "Évite les frais qui s'accumulent discrètement",
          bullets: [
            "Frais de retrait et de paiement à l'étranger en attendant ta carte locale",
            "Frais de tenue de compte mensuels sur certains comptes classiques",
            "Mauvais taux de change quand ta famille te vire de l'argent depuis la France",
          ],
        },
        {
          heading: "Comment Tern t'aide",
          paragraphs: [
            "Tern est conçu pour les pvtistes : ouvre un compte depuis l'étranger avec juste ton passeport et ton visa, reçois instantanément un vrai BSB et un numéro de compte à donner à ton employeur, recharge depuis chez toi au taux de change réel et paie sans frais de retrait. Ta carte physique est envoyée à ta première auberge ou colocation.",
          ],
        },
      ],
      faq: [
        {
          q: "Puis-je ouvrir un compte bancaire australien avant d'arriver ?",
          a: "Oui. Une néobanque comme Tern te vérifie avec ton passeport et ton visa working holiday, donc tu peux ouvrir le compte depuis ton pays et arriver avec ton numéro de compte prêt pour ton employeur.",
        },
        {
          q: "Ai-je besoin d'un TFN pour ouvrir le compte ?",
          a: "Non — tu peux ouvrir le compte d'abord. Mais demande ton numéro fiscal rapidement, car sans lui ton employeur doit prélever des impôts au taux le plus élevé jusqu'à ce qu'il soit renseigné.",
        },
        {
          q: "Comment suis-je payé en PVT ?",
          a: "Donne à ton employeur ton BSB et ton numéro de compte. Le salaire est versé directement sur ton compte le jour de paie. Ouvrir le compte avant de commencer à travailler évite des semaines de délai.",
        },
      ],
    },
    it: {
      title: "Aprire un conto bancario australiano per il working holiday",
      description:
        "Apri un conto bancario australiano per il tuo working holiday prima di arrivare — senza indirizzo fisso. Cosa ti serve e come ricevere il pagamento dal primo giorno.",
      excerpt:
        "Nessuna bolletta, nessun indirizzo fisso, nessuna attesa di due settimane. Ecco come chi fa working holiday apre davvero un conto australiano — e riceve il primo stipendio in tempo.",
      sections: [
        {
          paragraphs: [
            "Aprire un conto bancario è il primo vero ostacolo di qualsiasi working holiday in Australia — ed è qui che la maggior parte dei backpacker perde tempo e denaro. Ti serve un conto locale per ricevere lo stipendio, ma le grandi banche spesso richiedono un indirizzo locale e una visita in filiale impossibile da fare da un ostello. Questa guida ti illustra le opzioni e il percorso più rapido per avere un conto operativo.",
          ],
        },
        {
          heading: "Cosa ti serve per aprire un conto australiano",
          paragraphs: ["Per un visto working holiday (subclass 417 o 462), di solito ti servirà:"],
          bullets: [
            "Un passaporto valido",
            "La concessione del tuo visto working holiday",
            "Un indirizzo australiano o estero (una neobank di solito accetta il tuo indirizzo di casa)",
            "Un codice fiscale australiano (TFN) — puoi aggiungerlo entro le prime settimane, ma senza di esso verrai tassato all'aliquota massima",
          ],
        },
        {
          heading: "Il problema dell'assenza di indirizzo fisso",
          paragraphs: [
            "Le banche tradizionali chiedono spesso la prova di un indirizzo residenziale locale — un paradosso quando vivi in ostelli o in un camper. Le banche digitali (neobank) ti verificano con passaporto e visto, così puoi aprire il conto dal divano di casa prima ancora di partire.",
            "È fondamentale perché il tuo datore di lavoro non può pagarti finché non gli fornisci un numero di conto locale. Aprilo in anticipo e il tuo primo giorno di paga non arriverà con tre settimane di ritardo.",
          ],
        },
        {
          heading: "Ottieni BSB e numero di conto prima di atterrare",
          paragraphs: [
            "Un conto australiano è composto da due parti: un [BSB](~/blog/what-is-a-bsb-number) a 6 cifre (che identifica la banca e la filiale) e il numero di conto. Il tuo datore di lavoro ha bisogno di entrambi per elaborare la busta paga. Con un conto digitale li ottieni immediatamente alla registrazione, più una carta virtuale per spendere prima che arrivi quella fisica.",
          ],
        },
        {
          heading: "Evita le commissioni che si accumulano in silenzio",
          bullets: [
            "Commissioni su ATM stranieri e carte mentre aspetti la carta locale",
            "Spese mensili di gestione conto su alcuni conti tradizionali",
            "Tassi di cambio sfavorevoli quando la famiglia ti ricarica da casa",
          ],
        },
        {
          heading: "Come ti aiuta Tern",
          paragraphs: [
            "Tern è costruita per chi fa working holiday: apri un conto dall'estero con solo passaporto e visto, ricevi subito un BSB reale e un numero di conto da consegnare al datore di lavoro, ricarica da casa al tasso di cambio reale e paga senza commissioni ATM. La carta fisica viene spedita al tuo primo ostello o casa condivisa.",
          ],
        },
      ],
      faq: [
        {
          q: "Posso aprire un conto bancario australiano prima di arrivare?",
          a: "Sì. Una neobank come Tern ti verifica con passaporto e visto working holiday, quindi puoi aprire il conto dal tuo Paese e arrivare con il numero di conto già pronto per il datore di lavoro.",
        },
        {
          q: "Ho bisogno di un TFN per aprire il conto?",
          a: "No — puoi aprire prima il conto. Ma richiedi il codice fiscale australiano in fretta, perché senza di esso il tuo datore di lavoro è obbligato a trattenere le tasse all'aliquota più alta finché non viene aggiunto.",
        },
        {
          q: "Come vengo pagato durante il working holiday?",
          a: "Dai al tuo datore di lavoro il tuo BSB e il numero di conto. Lo stipendio viene accreditato direttamente sul conto il giorno di paga. Aprire il conto prima di iniziare a lavorare evita settimane di ritardo.",
        },
      ],
    },
  },
};
