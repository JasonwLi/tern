import type { Article } from "../types";

export const article: Article = {
  slug: "best-bank-working-holiday-new-zealand",
  kind: "guide",
  date: "2026-05-27",
  emoji: "🥇",
  accent: "bg-sky-300",
  readMinutes: 6,
  sources: [
    {
      label: "Immigration New Zealand — Working holiday visas",
      url: "https://www.immigration.govt.nz/work/working-holiday-visas/",
    },
    {
      label: "Inland Revenue — IRD number application (new arrivals)",
      url: "https://www.ird.govt.nz/managing-my-tax/ird-numbers/ird-numbers-for-individuals/new-arrival-to-new-zealand---ird-number-application",
    },
  ],
  i18n: {
    en: {
      title: "Best bank for a working holiday in New Zealand",
      description:
        "Honest comparison of NZ banks for WHV holders — pre-arrival opening, AML address rules, the IRD number chain, and Tern.",
      excerpt:
        "ANZ, BNZ, or Tern — which is actually best for working holiday New Zealand? Here's what to compare before you land.",
      sections: [
        {
          paragraphs: [
            "\"Best bank for working holiday New Zealand\" turns up in every WHV Facebook group and Reddit thread — and the honest answer is more complicated than a single recommendation. New Zealand's banking rules have tightened in recent years under anti-money-laundering legislation, and that affects travellers more than most people realise. This guide covers the criteria that matter for WHV holders, how the main NZ banks stack up, the critical IRD number chain reaction, and how to close up cleanly when your visa ends.",
          ],
        },
        {
          heading: "What actually matters in a WHV bank",
          paragraphs: [
            "Most bank comparison articles are written for residents. For a working holidaymaker in New Zealand, the factors that genuinely move the needle are:",
          ],
          bullets: [
            "Apply before arrival — can you start your application from home so you hit the ground running the moment you land?",
            "No monthly account fee — or a waiver condition simple enough to satisfy on a casual wage",
            "Low or no foreign transaction fees — you may be sending money home or spending across borders regularly",
            "Fast activation — Auckland branch appointment queues can stretch weeks; slow activation means delayed pay",
            "Accepts temporary addresses — AML rules mean many NZ banks reject hostel or backpacker addresses outright",
            "Easy to repatriate funds — when your visa expires you need to move your money out without bureaucratic drag",
          ],
        },
        {
          heading: "The big NZ banks compared for working holidaymakers",
          paragraphs: [
            "ANZ New Zealand and BNZ are the two banks most commonly recommended for WHV arrivals because both accept account applications from overseas before you land. The catch: activation still generally requires an in-branch identity visit with your passport, and in Auckland — where most WHV holders arrive — branch appointments can book out weeks in advance. Turning up on spec and waiting is possible but not guaranteed.",
            "The other major banks — ASB, Westpac NZ, and Kiwibank — broadly require you to be physically present in New Zealand before you can apply, which removes the pre-arrival advantage entirely.",
            "All NZ banks tightened address verification requirements under AML (anti-money-laundering) regulations. Hostel and backpacker addresses are frequently rejected as proof of address, which catches many WHV holders off guard. Having a confirmed flat address — or a letter from an employer — significantly smooths the process.",
          ],
          bullets: [
            "ANZ NZ: online application accepted from overseas; activation requires in-branch ID; Auckland queues can be weeks out",
            "BNZ: overseas application accepted; similar in-branch activation requirement; same Auckland queue issue",
            "ASB: in-country presence required before applying",
            "Westpac NZ: in-country presence required before applying",
            "Kiwibank: New Zealand-focused, in-country requirement; popular for locals but less practical for fresh arrivals",
            "All banks: hostel addresses routinely rejected under AML rules — have a stable address ready before you apply",
          ],
        },
        {
          heading: "The IRD number chain reaction",
          paragraphs: [
            "This is the piece most newcomers miss until it is too late. In New Zealand, getting an IRD number (your tax identifier) requires a fully functional New Zealand bank account — Inland Revenue needs to verify your account details as part of the application. Without an IRD number, your employer is legally required to deduct PAYE tax at the no-notification rate of 45%. That is not a typo: 45% withheld on every pay until your IRD number is processed.",
            "The chain is therefore: land → activate bank account → apply for IRD number → give IRD number to employer → get taxed at the correct rate. Every week's delay in opening your account is a week you could be losing nearly half your wages to the no-notification rate. This is why a bank that allows pre-arrival application — and fast activation on arrival — is not just a convenience but a direct financial priority.",
          ],
        },
        {
          heading: "Closing up when you leave",
          paragraphs: [
            "At the end of your WHV you need to close your NZ bank account and repatriate any remaining funds. This sounds simple but often is not. Many NZ banks require an in-branch visit to close an account, which is inconvenient if you are finishing your trip in a different city or region from where you opened it. International wire transfer fees can also erode the final balance if you are sending a relatively small amount home.",
            "Before you leave, confirm your bank's account-closure process and whether you can transfer funds internationally at a reasonable cost. If your bank charges a flat or percentage-based international wire fee, factor that into your exit plan.",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Tern is built specifically for the working holiday lifecycle — not as a generic bank account and not as a multi-currency travel card, but as a financial companion that understands the WHV timeline from pre-departure to departure. Key differences for NZ WHV holders:",
          ],
          bullets: [
            "Account details before you land: Tern provides your NZ account details before you board the plane, so you can hand them to an employer the moment you arrive",
            "Fund from home at the real rate: top up from your home currency at the mid-market rate before you leave — no conversion markup",
            "Flat-fee currency swaps: a flat fee per swap regardless of the amount, not a percentage that scales with your balance",
            "No ATM fees: withdraw from any ATM without being charged by Tern",
            "Clean exit: Tern is designed so that closing your account and moving your money home at the end of your visa is straightforward, not a branch-queue ordeal",
            "Pre-launch / waitlist stage: Tern is not yet live in New Zealand — join the waitlist to be first in line when it launches",
          ],
        },
      ],
      faq: [
        {
          q: "Which NZ bank can I open before I arrive?",
          a: "ANZ New Zealand and BNZ both accept account applications from overseas before you arrive. However, both still require an in-branch identity verification with your passport to activate the account — you cannot complete the process entirely remotely. In Auckland, branch appointments can book out weeks ahead, so apply online as early as possible and schedule your activation appointment before you fly. Tern (pre-launch) is designed to provide full account details before you land without requiring a branch visit.",
        },
        {
          q: "Why do I need the account before my IRD number?",
          a: "Inland Revenue New Zealand requires a verified NZ bank account as part of the IRD number application for new arrivals. You cannot get your IRD number first and then open an account. Without an IRD number, your employer must withhold PAYE tax at the no-notification rate of 45% on all your earnings. Every week you delay opening your account is another week at that elevated rate — so activating your bank account as fast as possible after landing is a direct financial priority, not just an admin task.",
        },
        {
          q: "Will my hostel address work for NZ bank ID requirements?",
          a: "Often not. New Zealand banks tightened address verification under AML (anti-money-laundering) rules, and hostel or backpacker addresses are frequently rejected. If you are staying in a hostel initially, try to get a letter from your employer or a confirmed flat address lined up before you apply. Some banks accept a letter from Immigration New Zealand as supporting documentation. Check your chosen bank's current requirements before arriving, as they can change.",
        },
      ],
    },
    es: {
      title: "El mejor banco para una working holiday en Nueva Zelanda",
      description:
        "Comparación honesta de bancos en NZ para WHV — apertura antes de llegar, reglas AML de domicilio, la cadena IRD y Tern.",
      excerpt:
        "ANZ, BNZ o Tern: ¿cuál es realmente el mejor banco para la working holiday en Nueva Zelanda? Esto es lo que tienes que comparar antes de llegar.",
      sections: [
        {
          paragraphs: [
            "\"El mejor banco para la working holiday en Nueva Zelanda\" aparece en todos los grupos de Facebook y foros de WHV — y la respuesta honesta es más complicada que una sola recomendación. Las reglas bancarias de Nueva Zelanda se endurecieron en los últimos años bajo la legislación antilavado de dinero, y eso afecta a los viajeros más de lo que la mayoría cree. Esta guía cubre los criterios que importan para los titulares de WHV, cómo se comparan los principales bancos de NZ, la cadena crítica del número IRD y cómo cerrar todo limpiamente cuando vence tu visa.",
          ],
        },
        {
          heading: "Lo que realmente importa en un banco para WHV",
          paragraphs: [
            "La mayoría de los artículos de comparación bancaria están escritos para residentes. Para alguien en working holiday en Nueva Zelanda, los factores que hacen la diferencia son:",
          ],
          bullets: [
            "Solicitar antes de llegar — ¿puedes iniciar la solicitud desde tu país para arrancar desde el primer momento?",
            "Sin cuota mensual — o una condición de exención simple de cumplir con un sueldo casual",
            "Bajas o nulas comisiones por transacciones en moneda extranjera — es posible que envíes dinero a casa o gastes en otros países con regularidad",
            "Activación rápida — los turnos en sucursales de Auckland pueden tomar semanas; una activación lenta significa cobros demorados",
            "Acepta domicilios temporales — las reglas AML hacen que muchos bancos de NZ rechacen directamente las direcciones de hostels",
            "Fácil repatriación de fondos — cuando vence tu visa, necesitas mover tu dinero sin burocracia",
          ],
        },
        {
          heading: "Los grandes bancos de NZ comparados para working holidaymakers",
          paragraphs: [
            "ANZ Nueva Zelanda y BNZ son los dos bancos más recomendados para quienes llegan con WHV porque ambos aceptan solicitudes desde el exterior antes de llegar. El problema: la activación igual requiere una visita presencial a la sucursal con el pasaporte, y en Auckland — donde llega la mayoría — los turnos pueden tardar semanas.",
            "Los otros bancos principales — ASB, Westpac NZ y Kiwibank — en general requieren estar físicamente en Nueva Zelanda antes de poder solicitar, lo que elimina la ventaja de hacerlo con anticipación.",
            "Todos los bancos de NZ endurecieron los requisitos de verificación de domicilio bajo las regulaciones AML. Las direcciones de hostels o albergues son frecuentemente rechazadas, lo que toma por sorpresa a muchos titulares de WHV. Tener una dirección de piso confirmada — o una carta del empleador — facilita mucho el proceso.",
          ],
          bullets: [
            "ANZ NZ: solicitud online aceptada desde el exterior; activación requiere ID en sucursal; las colas en Auckland pueden demorar semanas",
            "BNZ: solicitud desde el exterior aceptada; mismo requisito de activación presencial; mismo problema de colas en Auckland",
            "ASB: requiere estar en el país antes de solicitar",
            "Westpac NZ: requiere presencia en el país antes de solicitar",
            "Kiwibank: enfocado en Nueva Zelanda, requiere presencia en el país; popular para locales pero menos práctico para recién llegados",
            "Todos los bancos: las direcciones de hostels son rechazadas habitualmente bajo las reglas AML — tienes que tener una dirección estable lista antes de solicitar",
          ],
        },
        {
          heading: "La reacción en cadena del número IRD",
          paragraphs: [
            "Este es el punto que la mayoría de los recién llegados no advierte hasta que es tarde. En Nueva Zelanda, obtener el número IRD (tu identificador fiscal) requiere una cuenta bancaria neozelandesa completamente operativa — el Inland Revenue necesita verificar tus datos bancarios como parte de la solicitud. Sin número IRD, tu empleador está obligado por ley a descontarte PAYE a la tasa de no notificación del 45%. No es un error tipográfico: el 45% retenido en cada pago hasta que se procese tu número IRD.",
            "La cadena es entonces: llegar → activar cuenta bancaria → solicitar número IRD → dar el número IRD al empleador → ser gravado a la tasa correcta. Cada semana de demora en abrir la cuenta es una semana en la que podrías perder casi la mitad de tu sueldo. Por eso, un banco que permita solicitar antes de llegar — y con activación rápida al llegar — no es solo una comodidad, sino una prioridad financiera directa.",
          ],
        },
        {
          heading: "Cerrar todo cuando te vas",
          paragraphs: [
            "Al final de tu WHV necesitas cerrar la cuenta bancaria en NZ y repatriar los fondos que te queden. Parece simple pero a menudo no lo es. Muchos bancos de NZ exigen una visita presencial para cerrar la cuenta, lo que complica las cosas si terminas el viaje en una ciudad diferente a donde la abriste. Las comisiones por transferencia internacional también pueden erosionar el saldo final si el monto es relativamente pequeño.",
            "Antes de irte, confirma el proceso de cierre de cuenta de tu banco y si puedes transferir fondos al exterior a un costo razonable.",
          ],
        },
        {
          heading: "Cómo te ayuda Tern",
          paragraphs: [
            "Tern está diseñado específicamente para el ciclo de vida de la working holiday — no como una cuenta bancaria genérica ni como una tarjeta de viaje multi-moneda, sino como un compañero financiero que entiende el ciclo de la WHV desde la pre-partida hasta la salida. Diferencias clave para titulares de WHV en NZ:",
          ],
          bullets: [
            "Datos de cuenta antes de llegar: Tern te da los datos de tu cuenta de NZ antes de subir al avión, para dárselos al empleador en cuanto llegas",
            "Fondear desde casa al tipo real: recarga desde tu moneda local al tipo de cambio de mercado antes de salir — sin margen de conversión",
            "Cambios de moneda con tarifa fija: una tarifa fija por operación sin importar el monto, no un porcentaje que crece con tu saldo",
            "Sin comisiones en cajeros: retira en cualquier cajero sin que Tern te cobre",
            "Salida limpia: Tern está diseñado para que cerrar la cuenta y enviar tu dinero a casa al final de la visa sea sencillo, no un trámite interminable",
            "Pre-lanzamiento / lista de espera: Tern todavía no está activo en Nueva Zelanda — anótate en la lista de espera para ser de los primeros cuando se lance",
          ],
        },
      ],
      faq: [
        {
          q: "¿Qué banco de NZ puedo abrir antes de llegar?",
          a: "ANZ Nueva Zelanda y BNZ aceptan solicitudes desde el exterior antes de llegar. Sin embargo, ambos igual requieren verificación de identidad presencial con el pasaporte para activar la cuenta. En Auckland, los turnos en sucursal pueden demorarse semanas, así que solicita online lo antes posible y agenda el turno de activación antes de volar. Tern (en pre-lanzamiento) está diseñado para darte todos los datos de la cuenta antes de llegar sin necesidad de ir a la sucursal.",
        },
        {
          q: "¿Por qué necesito la cuenta antes del número IRD?",
          a: "El Inland Revenue de Nueva Zelanda requiere una cuenta bancaria neozelandesa verificada como parte de la solicitud del número IRD para nuevos llegados. No puedes obtener el IRD primero y después abrir la cuenta. Sin número IRD, tu empleador debe retener el impuesto PAYE a la tasa de no notificación del 45% sobre todos tus ingresos. Cada semana de demora en abrir la cuenta es otra semana a esa tasa elevada — por eso activar la cuenta lo antes posible es una prioridad financiera directa, no solo un trámite.",
        },
        {
          q: "¿Mi dirección de hostel sirve para los requisitos de identidad bancaria en NZ?",
          a: "A menudo no. Los bancos de Nueva Zelanda endurecieron la verificación de domicilio bajo las normas AML, y las direcciones de hostels o albergues son rechazadas con frecuencia. Si en un principio te quedas en un hostel, intenta conseguir una carta de tu empleador o tener una dirección de piso confirmada antes de solicitar. Verifica los requisitos actuales de tu banco antes de llegar, ya que pueden cambiar.",
        },
      ],
    },
    ja: {
      title: "ニュージーランドのワーホリに最適な銀行比較",
      description:
        "WHVホルダー向けNZ銀行を正直に比較 — 渡航前開設、AMLの住所規則、IRD番号の連鎖、そしてTernが違う理由。",
      excerpt:
        "ANZ、BNZ、それともTern — ニュージーランドのワーホリに本当に最適な銀行はどれ？渡航前に確認すべき比較ポイントをまとめました。",
      sections: [
        {
          paragraphs: [
            "「ニュージーランドのワーホリ向けベスト銀行」はすべてのWHVのFacebookグループやRedditスレッドで話題になります。そして正直な答えは、一つの推薦以上に複雑です。ニュージーランドの銀行規則はここ数年でマネーロンダリング対策法のもと厳格化されており、それが旅行者にとって思った以上の影響を及ぼしています。このガイドではWHVホルダーに重要な基準、主要なNZ銀行の比較、IRD番号の重要な連鎖、そしてビザ終了時にきれいに整理する方法を解説します。",
          ],
        },
        {
          heading: "ワーホリの銀行に本当に重要なこと",
          paragraphs: [
            "ほとんどの銀行比較記事は居住者向けに書かれています。ニュージーランドのワーキングホリデーに来る人にとって、本当に重要な要素は次の通りです：",
          ],
          bullets: [
            "渡航前に申請できるか — 出発前に申請を始めて、到着した瞬間からスムーズに動けるか？",
            "月額手数料なし — またはカジュアルな賃金でも達成できる簡単な免除条件があるか",
            "外貨取引手数料が低い、または無料 — 頻繁に本国送金や国境をまたいだ支出をする可能性がある",
            "速やかな口座開設 — オークランドの支店予約は数週間待ちになることも。開設が遅れると給与受取も遅れる",
            "仮住所を受け入れる — AMLルールにより多くのNZ銀行はホステルの住所を受け付けない",
            "資金の海外送金が容易 — ビザ終了時に煩雑な手続きなく資金を移動できるか",
          ],
        },
        {
          heading: "ワーホリ向けNZ大手銀行の比較",
          paragraphs: [
            "ANZニュージーランドとBNZは、WHV到着者に最もよく推薦される銀行です。両行とも渡航前に海外から口座申請を受け付けているためです。ただし注意点があります：口座の有効化には依然としてパスポートを持って支店に本人確認に行く必要があり、多くのWHVホルダーが到着するオークランドでは支店の予約が数週間先まで埋まっていることがあります。",
            "他の主要銀行——ASB、ウェストパックNZ、キウィバンク——は基本的にニュージーランドに物理的に在住していないと申請できないため、事前申請の利点がなくなります。",
            "すべてのNZ銀行はAML（マネーロンダリング対策）規制のもとで住所確認要件を厳格化しました。ホステルやバックパッカーズの住所は頻繁に却下されており、多くのWHVホルダーが想定外の問題に直面しています。確定した住所か雇用主からの手紙があると手続きがスムーズになります。",
          ],
          bullets: [
            "ANZ NZ：海外からのオンライン申請受付可；有効化には支店でのID確認が必要；オークランドの予約は数週間待ちになることも",
            "BNZ：海外からの申請受付可；同様の支店での有効化が必要；オークランドの予約待ち問題も同様",
            "ASB：申請前にニュージーランドへの入国が必要",
            "Westpac NZ：申請前に現地にいることが必要",
            "Kiwibank：NZ国内向けで現地要件あり；地元民には人気だが新着者には不便",
            "全銀行：AMLルールのもとでホステルの住所は通常却下——申請前に安定した住所を用意すること",
          ],
        },
        {
          heading: "IRD番号の連鎖反応",
          paragraphs: [
            "これは多くの新着者が手遅れになるまで気づかないポイントです。ニュージーランドでIRD番号（税務識別番号）を取得するには、完全に機能するNZの銀行口座が必要です——インランドレベニューは申請の一環として銀行口座の詳細を確認する必要があります。IRD番号がなければ、雇用主は法律上、無通知税率45%でPAYE税を差し引かなければなりません。誤字ではありません：IRD番号が処理されるまでの毎回の給与から45%が天引きされます。",
            "連鎖はこうです：到着 → 銀行口座を有効化 → IRD番号を申請 → IRD番号を雇用主に伝える → 正しい税率で課税される。口座開設が1週間遅れるごとに、給与のほぼ半分を失う可能性のある期間が1週間延びます。だからこそ、渡航前に申請できて、到着後速やかに有効化できる銀行は、単なる利便性ではなく、直接的な経済的優先事項なのです。",
          ],
        },
        {
          heading: "出国時の整理",
          paragraphs: [
            "WHVの終わりには、NZの銀行口座を閉鎖し、残った資金を本国に送金する必要があります。簡単そうに聞こえますが、実際はそうでないことが多いです。多くのNZ銀行は口座を閉鎖するために支店への来店を求めており、口座を開いた都市とは別の場所で旅を終える場合には不便です。比較的少額を送金する場合、国際電信送金手数料で最終残高が目減りすることもあります。",
            "出発前に、銀行の口座閉鎖手順と海外送金の費用について確認しておきましょう。",
          ],
        },
        {
          heading: "Ternの活用方法",
          paragraphs: [
            "Ternはワーキングホリデービザのライフサイクルに特化して設計されています——汎用銀行口座でもマルチカレンシーのトラベルカードでもなく、出発前から帰国後までWHVのタイムラインを理解したファイナンシャルパートナーです。NZのWHVホルダーにとっての主な違い：",
          ],
          bullets: [
            "渡航前に口座情報を取得：Ternは搭乗前にNZの口座情報を提供するので、到着した瞬間に雇用主へ渡せる",
            "本国から実勢レートで入金：出発前に実勢為替レートで本国通貨から入金——換算マージンなし",
            "定額の通貨スワップ：金額に関わらず1回ごとの定額手数料で、残高に比例したパーセンテージ手数料なし",
            "ATM手数料なし：どこのATMでもTernによる手数料なしで引き出し可能",
            "クリーンな出国：ビザ終了時に口座を閉鎖して本国に送金するプロセスが、支店の列に並ぶことなく簡単にできるよう設計",
            "プレローンチ/ウェイトリスト段階：Ternはニュージーランドではまだローンチされていませんーローンチ時に真っ先に使えるようウェイトリストに登録を",
          ],
        },
      ],
      faq: [
        {
          q: "渡航前に開設できるNZの銀行はどこですか？",
          a: "ANZニュージーランドとBNZはどちらも渡航前に海外から口座申請を受け付けています。ただし、両行とも口座を有効化するにはパスポートを持って支店での本人確認が必要です——完全なリモートでの手続きはできません。オークランドでは支店の予約が数週間先まで埋まることがあるため、できるだけ早くオンライン申請をして、渡航前に有効化の予約を入れておくことをおすすめします。Tern（プレローンチ）は支店訪問なしで渡航前から口座情報を提供できるよう設計されています。",
        },
        {
          q: "IRD番号の前に口座が必要なのはなぜですか？",
          a: "ニュージーランドのインランドレベニューは、新着者のIRD番号申請の一部として確認済みのNZ銀行口座を必要とします。先にIRD番号を取得してから口座を開くことはできません。IRD番号がないと、雇用主はすべての収入に対して無通知税率45%でPAYE税を源泉徴収しなければなりません。口座開設が1週間遅れるごとに、その高い税率が適用される週が増えます。だからこそ、到着後できるだけ早く銀行口座を有効化することは、単なる事務手続きではなく、直接的な財務上の優先事項なのです。",
        },
        {
          q: "NZの銀行の本人確認にホステルの住所は使えますか？",
          a: "多くの場合、使えません。ニュージーランドの銀行はAML（マネーロンダリング対策）規則のもとで住所確認を厳格化しており、ホステルやバックパッカーズの住所は頻繁に却下されます。最初はホステルに滞在する場合は、雇用主からの手紙を用意するか、申請前に確定した住所を確保しておくようにしましょう。要件は変わることがあるため、渡航前に選んだ銀行の最新要件を確認しておくことをおすすめします。",
        },
      ],
    },
    ko: {
      title: "뉴질랜드 워킹홀리데이 최고의 은행 비교",
      description:
        "WHV 소지자를 위한 NZ 은행 정직한 비교 — 사전 개설, AML 주소 규정, IRD 번호 연쇄 반응, 그리고 Tern이 다른 이유.",
      excerpt:
        "ANZ, BNZ, 또는 Tern — 뉴질랜드 워킹홀리데이에 실제로 가장 좋은 은행은 어디일까요? 입국 전에 확인해야 할 비교 포인트입니다.",
      sections: [
        {
          paragraphs: [
            "\"뉴질랜드 워킹홀리데이 최고의 은행\"은 모든 WHV 페이스북 그룹과 레딧 스레드에 등장하는 질문입니다. 그리고 솔직한 답변은 단 하나의 추천보다 훨씬 복잡합니다. 뉴질랜드의 은행 규정은 자금세탁 방지 법률 아래 최근 몇 년간 강화되었고, 이는 여행자에게 대부분의 사람들이 생각하는 것보다 더 큰 영향을 미칩니다. 이 가이드는 WHV 소지자에게 중요한 기준, 주요 NZ 은행 비교, IRD 번호의 중요한 연쇄 반응, 그리고 비자 종료 시 깔끔하게 정리하는 방법을 다룹니다.",
          ],
        },
        {
          heading: "워홀 은행에서 실제로 중요한 것",
          paragraphs: [
            "대부분의 은행 비교 기사는 거주자를 위해 작성됩니다. 뉴질랜드에서 워킹홀리데이를 하는 사람에게 실질적인 차이를 만드는 요소는 다음과 같습니다:",
          ],
          bullets: [
            "도착 전 신청 가능 여부 — 본국에서 신청을 시작하여 도착하자마자 바로 움직일 수 있나요?",
            "월 계좌 유지비 없음 — 또는 일용직 임금으로도 충족 가능한 간단한 면제 조건",
            "낮거나 없는 외화 거래 수수료 — 정기적으로 본국 송금이나 해외 소비를 할 가능성이 있습니다",
            "빠른 개설 — 오클랜드 지점 예약은 몇 주가 걸릴 수 있으며, 늦은 개설은 급여 수령 지연으로 이어집니다",
            "임시 주소 수용 여부 — AML 규정으로 많은 NZ 은행이 호스텔 주소를 거부합니다",
            "자금 송금 용이성 — 비자 만료 시 관료적 절차 없이 자금을 이동할 수 있어야 합니다",
          ],
        },
        {
          heading: "워킹홀리데이 입장에서 본 NZ 주요 은행 비교",
          paragraphs: [
            "ANZ 뉴질랜드와 BNZ는 WHV 입국자에게 가장 많이 추천되는 두 은행으로, 둘 다 입국 전 해외에서 계좌 신청을 받습니다. 단점은 개설을 위해 여전히 여권을 들고 지점에서 본인 확인이 필요하다는 것이며, 대부분의 WHV 소지자가 도착하는 오클랜드에서는 지점 예약이 몇 주 앞까지 꽉 찰 수 있습니다.",
            "다른 주요 은행인 ASB, 웨스트팩 NZ, 키위뱅크는 대체로 신청 전에 뉴질랜드에 물리적으로 있어야 해서 사전 신청의 이점이 사라집니다.",
            "모든 NZ 은행은 AML(자금세탁 방지) 규정에 따라 주소 확인 요건을 강화했습니다. 호스텔이나 배낭여행자 숙소 주소는 자주 거부되어 많은 WHV 소지자들을 당황스럽게 만듭니다. 확정된 주거지 주소나 고용주의 편지가 있으면 과정이 훨씬 수월해집니다.",
          ],
          bullets: [
            "ANZ NZ: 해외에서 온라인 신청 가능; 개설을 위해 지점 신분 확인 필요; 오클랜드 예약은 몇 주가 걸릴 수 있음",
            "BNZ: 해외 신청 가능; 유사한 지점 개설 요건; 오클랜드 대기 문제도 동일",
            "ASB: 신청 전 국내 체류 필요",
            "Westpac NZ: 신청 전 현지 체류 필요",
            "Kiwibank: 뉴질랜드 현지 중심, 국내 요건 있음; 현지인에게 인기 있지만 신규 입국자에게는 덜 실용적",
            "모든 은행: AML 규정에 따라 호스텔 주소는 일반적으로 거부됨 — 신청 전에 안정적인 주소를 준비해야 합니다",
          ],
        },
        {
          heading: "IRD 번호의 연쇄 반응",
          paragraphs: [
            "이것이 대부분의 신규 입국자가 너무 늦게서야 깨닫는 부분입니다. 뉴질랜드에서 IRD 번호(세금 식별번호)를 받으려면 완전히 기능하는 NZ 은행 계좌가 필요합니다 — 국세청인 Inland Revenue는 신청 과정에서 계좌 정보를 확인해야 합니다. IRD 번호 없이는 고용주가 법적으로 모든 수입에 대해 무통지 세율 45%로 PAYE 세금을 공제해야 합니다. 오타가 아닙니다: IRD 번호가 처리될 때까지 매 급여에서 45%가 원천징수됩니다.",
            "연쇄 과정은 이렇습니다: 입국 → 은행 계좌 개설 → IRD 번호 신청 → 고용주에게 IRD 번호 전달 → 올바른 세율로 과세. 계좌 개설이 일주일 지연될 때마다 급여의 절반 가까이를 잃을 수 있는 기간이 일주일씩 늘어납니다. 그래서 입국 전 신청이 가능하고 도착 후 빠른 개설이 가능한 은행은 단순한 편의가 아니라 직접적인 재정적 우선사항입니다.",
          ],
        },
        {
          heading: "떠날 때 정리하기",
          paragraphs: [
            "WHV가 끝나면 NZ 은행 계좌를 해지하고 남은 자금을 본국으로 송금해야 합니다. 간단해 보이지만 실제로는 그렇지 않은 경우가 많습니다. 많은 NZ 은행이 계좌 해지를 위해 지점 방문을 요구하는데, 계좌를 개설한 도시가 아닌 다른 곳에서 여행을 마치는 경우에는 불편합니다. 비교적 소액을 송금하는 경우 국제 송금 수수료로 최종 잔액이 줄어들 수도 있습니다.",
            "떠나기 전에 은행의 계좌 해지 절차와 합리적인 비용으로 해외 송금이 가능한지 확인하세요.",
          ],
        },
        {
          heading: "Tern이 도와드립니다",
          paragraphs: [
            "Tern은 워킹홀리데이 비자의 생애주기 전반을 위해 특별히 설계되었습니다 — 일반 은행 계좌도 아니고 다중 통화 트래블 카드도 아닌, 출발 전부터 귀국까지 WHV의 여정을 이해하는 금융 파트너입니다. NZ WHV 소지자를 위한 핵심 차이점:",
          ],
          bullets: [
            "입국 전에 계좌 정보 제공: Tern은 비행기에 탑승하기 전에 NZ 계좌 정보를 제공하여 도착하자마자 고용주에게 전달할 수 있습니다",
            "본국에서 실제 환율로 입금: 출발 전에 실시간 시장 환율로 본국 통화에서 입금 — 환산 마진 없음",
            "고정 수수료 환전: 잔액에 비례하는 수수료 없이 금액에 관계없이 건당 고정 수수료",
            "ATM 수수료 없음: Tern 수수료 없이 모든 ATM에서 출금 가능",
            "깔끔한 출국: 비자가 끝날 때 계좌를 해지하고 자금을 본국으로 송금하는 과정이 지점 대기 없이 간단하도록 설계",
            "사전 출시/대기자 명단 단계: Tern은 아직 뉴질랜드에서 출시되지 않았습니다 — 출시 시 가장 먼저 사용할 수 있도록 대기자 명단에 등록하세요",
          ],
        },
      ],
      faq: [
        {
          q: "입국 전에 개설할 수 있는 NZ 은행은 어디인가요?",
          a: "ANZ 뉴질랜드와 BNZ 모두 입국 전 해외에서 계좌 신청을 받습니다. 그러나 두 은행 모두 계좌를 개설하려면 여권을 가지고 지점에서 본인 확인이 필요합니다 — 완전히 원격으로는 절차를 완료할 수 없습니다. 오클랜드에서는 지점 예약이 몇 주 앞까지 찰 수 있으므로, 최대한 빨리 온라인으로 신청하고 비행 전에 개설 예약을 잡으세요. Tern(사전 출시)은 지점 방문 없이 입국 전에 전체 계좌 정보를 제공하도록 설계되어 있습니다.",
        },
        {
          q: "IRD 번호 전에 계좌가 필요한 이유는 무엇인가요?",
          a: "뉴질랜드 Inland Revenue는 신규 입국자의 IRD 번호 신청 일환으로 확인된 NZ 은행 계좌를 요구합니다. 먼저 IRD 번호를 받고 그다음 계좌를 개설할 수는 없습니다. IRD 번호 없이는 고용주가 모든 수입에 대해 무통지 세율 45%로 PAYE 세금을 원천징수해야 합니다. 계좌 개설이 일주일 지연될 때마다 그 높은 세율이 적용되는 기간이 일주일씩 늘어납니다. 그래서 입국 후 최대한 빨리 은행 계좌를 개설하는 것은 단순한 행정 절차가 아닌 직접적인 재정적 우선사항입니다.",
        },
        {
          q: "NZ 은행 신분 확인에 호스텔 주소가 사용 가능한가요?",
          a: "대부분의 경우 그렇지 않습니다. 뉴질랜드 은행들은 AML(자금세탁 방지) 규정에 따라 주소 확인을 강화했으며, 호스텔이나 배낭여행자 숙소 주소는 자주 거부됩니다. 처음에 호스텔에 머무는 경우, 고용주의 편지를 받거나 신청 전에 확정된 주거지 주소를 확보하세요. 요건은 변경될 수 있으므로 입국 전에 선택한 은행의 최신 요건을 확인하는 것이 좋습니다.",
        },
      ],
    },
    "zh-TW": {
      title: "紐西蘭打工度假最佳銀行比較指南",
      description:
        "WHV簽證持有者必看的NZ銀行誠實比較 — 抵達前開戶、AML住址規定、IRD號碼連鎖效應，以及Tern的不同之處。",
      excerpt:
        "ANZ、BNZ還是Tern，哪間才是紐西蘭打工度假的最佳銀行？這裡整理了你抵達前必須比較的重點。",
      sections: [
        {
          paragraphs: [
            "「紐西蘭打工度假最佳銀行」幾乎出現在每個WHV的臉書社群和Reddit討論串中。誠實的答案比單一推薦複雜許多。近年來紐西蘭的銀行規定在反洗錢法規下愈趨嚴格，這對旅行者的影響遠比一般人想像的更大。本指南涵蓋WHV持有者真正需要考量的標準、主要NZ銀行的比較、IRD號碼的關鍵連鎖效應，以及簽證到期時如何乾淨俐落地收尾。",
          ],
        },
        {
          heading: "打工度假銀行真正重要的條件",
          paragraphs: [
            "大多數銀行比較文章都是為居民而寫的。對紐西蘭打工度假者而言，真正影響選擇的因素是：",
          ],
          bullets: [
            "抵達前可申請 — 能在本國就開始申請，一落地就能立即行動嗎？",
            "無月費 — 或以臨時工薪資也能輕鬆達成的免除條件",
            "低或無外幣交易手續費 — 你可能頻繁需要匯款回國或跨境消費",
            "快速開戶 — 奧克蘭分行預約可能要等好幾週；開戶太慢代表薪資也會跟著延誤",
            "接受臨時住址 — AML規定導致許多NZ銀行直接拒絕青年旅館地址",
            "資金匯出方便 — 簽證到期時能順暢移轉資金，不被行政程序卡住",
          ],
        },
        {
          heading: "從打工度假角度比較NZ主要銀行",
          paragraphs: [
            "ANZ紐西蘭和BNZ是最常被推薦給WHV入境者的兩間銀行，因為兩者都接受海外事前申請。問題是：開戶仍通常需要親自攜帶護照到分行進行身份驗證。在大多數WHV持有者入境的奧克蘭，分行預約常常提前好幾週就預約滿了。",
            "其他主要銀行——ASB、Westpac NZ和Kiwibank——基本上都要求申請前已身處紐西蘭境內，這讓事前申請的優勢完全消失。",
            "所有NZ銀行在AML（反洗錢）法規下都收緊了地址驗證要求。青年旅館和背包客棧地址時常遭到拒絕，讓許多WHV持有者措手不及。備好確定的租屋地址或雇主證明信，手續會順暢許多。",
          ],
          bullets: [
            "ANZ NZ：接受海外線上申請；開戶需至分行完成身份驗證；奧克蘭預約可能等好幾週",
            "BNZ：接受海外申請；類似的分行開戶要求；奧克蘭預約問題相同",
            "ASB：申請前需已在境內",
            "Westpac NZ：申請前需在境內",
            "Kiwibank：以NZ本地為主，有在境內要求；本地人愛用，但對新入境者較不方便",
            "所有銀行：AML規定下青年旅館地址通常遭拒——申請前準備好穩定住址",
          ],
        },
        {
          heading: "IRD號碼的連鎖效應",
          paragraphs: [
            "這是大多數新入境者到太晚才察覺的環節。在紐西蘭，取得IRD號碼（稅務識別號碼）需要一個完全可用的NZ銀行帳戶——Inland Revenue需要在申請過程中驗證你的銀行帳戶資訊。沒有IRD號碼，雇主依法必須以45%的無通知稅率扣繳PAYE稅。這不是筆誤：在你的IRD號碼處理完成之前，每筆薪資都會被扣掉45%。",
            "連鎖流程如下：入境 → 啟用銀行帳戶 → 申請IRD號碼 → 把IRD號碼交給雇主 → 以正確稅率課稅。每拖延一週開戶，就多一週可能損失將近一半薪資。這就是為什麼能夠事前申請、到達後快速開戶的銀行，不只是方便，而是直接的財務優先事項。",
          ],
        },
        {
          heading: "離開時的收尾工作",
          paragraphs: [
            "WHV結束時，你需要關閉NZ銀行帳戶並將剩餘資金匯回本國。聽起來簡單，但往往並非如此。許多NZ銀行要求親自到分行辦理關戶，如果你在不同於開戶的城市結束旅程，就會很麻煩。如果匯款金額相對較小，國際電匯手續費也可能吃掉一部分餘額。",
            "離開前，確認你的銀行關戶流程，以及是否能以合理費用進行國際匯款。",
          ],
        },
        {
          heading: "Tern 如何協助你",
          paragraphs: [
            "Tern專為打工度假簽證的整個生命週期而設計——不是一般的銀行帳戶，也不是多幣別旅行卡，而是理解WHV旅程從出發前到離境的財務夥伴。對NZ WHV持有者的核心差異：",
          ],
          bullets: [
            "抵達前取得帳戶資訊：Tern在你登機前就提供NZ帳戶資訊，讓你一落地就能交給雇主",
            "從本國以實際匯率入金：出發前以即時市場匯率從本國貨幣入金——無換匯差價",
            "固定費率換匯：不論金額大小每筆固定費用，而非依餘額比例收費",
            "無ATM手續費：在任何ATM提款，Tern不收取手續費",
            "輕鬆離境：簽證結束時，Tern設計讓關戶和匯款回國的流程簡單，不需排隊等候分行",
            "預先上市/候補名單階段：Tern尚未在紐西蘭正式上線——加入候補名單，搶先體驗",
          ],
        },
      ],
      faq: [
        {
          q: "哪間NZ銀行可以在抵達前開戶？",
          a: "ANZ紐西蘭和BNZ都接受抵達前的海外申請。但兩者仍需攜帶護照到分行完成身份驗證才能啟用帳戶——無法完全遠端完成。奧克蘭的分行預約可能提前幾週就排滿，因此建議盡早線上申請，並在搭機前預約好開戶驗證時間。Tern（預先上市中）設計為無需到分行即可在抵達前取得完整帳戶資訊。",
        },
        {
          q: "為什麼需要先有帳戶才能申請IRD號碼？",
          a: "紐西蘭Inland Revenue要求新入境者在申請IRD號碼時提供已驗證的NZ銀行帳戶。你無法先取得IRD號碼再開戶。沒有IRD號碼，雇主必須以45%的無通知稅率對你的所有收入進行PAYE原扣。每拖延一週開戶，就多一週適用這個高稅率。因此入境後盡快啟用銀行帳戶不只是行政事項，而是直接的財務優先事項。",
        },
        {
          q: "青年旅館地址可以用於NZ銀行的身份驗證嗎？",
          a: "通常不行。紐西蘭銀行在AML（反洗錢）規定下強化了地址驗證，青年旅館和背包客棧地址時常遭拒。如果你一開始住在青年旅館，試著從雇主取得證明信，或在申請前確定一個租屋地址。由於要求可能有所變動，建議在抵達前確認所選銀行的最新要求。",
        },
      ],
    },
  },
};
