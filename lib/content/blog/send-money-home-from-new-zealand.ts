import type { Article } from "../types";

export const article: Article = {
  slug: "send-money-home-from-new-zealand",
  kind: "post",
  date: "2026-06-06",
  author: "Tern",
  emoji: "🛫",
  accent: "bg-coral-300",
  readMinutes: 5,
  sources: [
    {
      label: "Consumer NZ — International money transfers",
      url: "https://www.consumer.org.nz/articles/foreign-transaction-fees",
    },
    {
      label: "MoneyHub NZ — International Money Transfer Fee & FX Rate Comparison",
      url: "https://www.moneyhub.co.nz/international-money-transfer.html",
    },
    {
      label: "Sorted NZ — Money and the big OE",
      url: "https://sorted.org.nz/oe/",
    },
  ],
  i18n: {
    en: {
      title: "Cheapest ways to send savings home from New Zealand",
      description:
        "NZ bank transfers hide a 2–4% FX margin. Here's how to send your NZD working holiday savings home cheaply at the real mid-market rate.",
      excerpt:
        "Your NZ bank's transfer looks straightforward — until you spot the exchange rate. Here's where the money goes and how to keep more of your hard-earned savings on the way home.",
      sections: [
        {
          paragraphs: [
            "After months of long shifts and careful budgeting in New Zealand, the last thing you want is to lose a slice of your savings to hidden fees when you send money home. But that's exactly what bank international transfers do — quietly, through the exchange rate.",
          ],
        },
        {
          heading: "What your NZ bank actually charges you",
          paragraphs: [
            "A typical international transfer out of New Zealand hits you in three places at once. First, the exchange rate: NZ banks typically add a 2–4% margin on top of the real mid-market rate (the rate you see on Google). On NZD 5,000, a 3% margin is NZD 150 — and it's invisible because it's baked into the rate you're quoted, not listed as a fee.",
          ],
          bullets: [
            "FX margin — banks mark up the real rate by 2–4%, the biggest hidden cost",
            "Flat transfer fee — the big five NZ banks typically charge NZD 20–30 per outward transfer",
            "Intermediary (correspondent) bank fees — deducted mid-journey on SWIFT, so the recipient gets less than expected",
          ],
        },
        {
          heading: "Compare on the real rate, not the headline",
          paragraphs: [
            "Consumer NZ tested New Zealand's five biggest banks (ANZ, ASB, BNZ, Kiwibank, Westpac) against specialist providers and found that using Wise instead of Westpac to send NZD 10,000 to Australia could save the equivalent of around NZD 200. The savings are similar for other corridors.",
            "The rule of thumb: always look up the mid-market rate on Google or XE before you transfer, then compare it against what your provider is quoting. The gap between those two numbers is what you're paying.",
          ],
          bullets: [
            "Check the mid-market rate first (Google, XE.com)",
            "Non-bank providers (Wise, XE, OFX, Remitly) consistently beat bank FX rates",
            "Send in larger, fewer transfers to minimise flat fees",
            "Avoid airport kiosks and hotel exchange counters — margins can reach 10%",
          ],
        },
        {
          heading: "Timing your transfer and closing your NZ account",
          paragraphs: [
            "Don't convert your NZD savings at the airport — currency exchange counters there charge some of the worst rates available. Convert online a day or two before you fly, once you've confirmed your final account balance.",
            "On closing your NZ account: you don't have to close it before you leave. Many banks let you keep a NZ account open as a non-resident, and it's worth keeping it active until your end-of-year tax refund from IRD arrives. IRD will deposit your refund directly into your registered NZ bank account, so closing it early means a delay while you update your details in myIR.",
          ],
          bullets: [
            "Transfer online before your departure — never at the airport counter",
            "Keep your NZ account open until your IRD tax refund arrives, or update bank details in myIR",
            "Confirm your KiwiSaver or PAYE final balances before closing accounts",
            "Screenshot or download your transaction history for tax records",
          ],
        },
        {
          heading: "A different option: swap, don't send",
          paragraphs: [
            "If someone is arriving in your home country just as you're leaving New Zealand, you each hold the opposite currency. Tern matches departing and arriving travellers to swap NZD directly at the real mid-market rate for a single flat fee — so neither side pays a percentage to a bank or broker. No FX margin, no SWIFT intermediary, no surprises.",
          ],
        },
      ],
      faq: [
        {
          q: "What is the cheapest way to send money home from New Zealand?",
          a: "Use a specialist provider (Wise, XE, OFX) that converts at the real mid-market rate with a transparent flat fee, rather than your NZ bank. Send fewer, larger amounts to dilute any fixed fee, and never convert at the airport. Consumer NZ found specialist providers can save NZD 200+ on a NZD 10,000 transfer compared to the big banks.",
        },
        {
          q: "Should I close my New Zealand bank account before I fly home?",
          a: "Not necessarily. If you're expecting an IRD tax refund, keep your NZ account open until it arrives — IRD pays refunds into the bank account on file. Alternatively, update your myIR bank details to an overseas account before you leave. Closing the account prematurely delays your refund.",
        },
      ],
    },
    es: {
      title: "La forma más barata de enviar dinero desde Nueva Zelanda",
      description:
        "Los bancos de NZ se quedan con 2–4% en margen cambiario oculto. Así envías tus ahorros en NZD al tipo de cambio real y sin sorpresas.",
      excerpt:
        "La transferencia de tu banco neozelandés parece simple... hasta que ves el tipo de cambio. Acá te explicamos dónde va tu plata y cómo llevarte más de tus ahorros al volver a casa.",
      sections: [
        {
          paragraphs: [
            "Después de meses de jornadas largas y presupuesto ajustado en Nueva Zelanda, lo último que quieres es perder parte de tus ahorros en comisiones ocultas cuando los mandas a casa. Pero eso es exactamente lo que hacen las transferencias internacionales de los bancos — en silencio, a través del tipo de cambio.",
          ],
        },
        {
          heading: "Qué te cobra en realidad tu banco neozelandés",
          paragraphs: [
            "Una transferencia internacional desde Nueva Zelanda te golpea en tres lugares a la vez. Primero, el tipo de cambio: los bancos neozelandeses suelen añadir un margen del 2–4% sobre el tipo de cambio real del mercado interbancario (el que ves en Google). Con NZD 5.000, un margen del 3% equivale a NZD 150 — y es invisible porque ya está incluido en el tipo que te ofrecen, no aparece como comisión.",
          ],
          bullets: [
            "Margen cambiario — los bancos suben el tipo real un 2–4%, el mayor costo oculto",
            "Comisión fija por transferencia — los cinco grandes bancos neozelandeses suelen cobrar entre NZD 20 y 30 por transferencia saliente",
            "Comisiones de bancos corresponsales — descontadas durante el camino en SWIFT, por lo que el destinatario recibe menos de lo esperado",
          ],
        },
        {
          heading: "Comparar por el tipo real, no por el titular",
          paragraphs: [
            "Consumer NZ comparó los cinco bancos más grandes de Nueva Zelanda (ANZ, ASB, BNZ, Kiwibank, Westpac) con proveedores especializados y encontró que usar Wise en lugar de Westpac para enviar NZD 10.000 a Australia puede suponer un ahorro equivalente a unos NZD 200. Los ahorros son similares para otros destinos.",
            "La regla de oro: antes de transferir, siempre busca el tipo de cambio interbancario real en Google o XE y compáralo con lo que te ofrece tu proveedor. La diferencia entre esos dos números es lo que estás pagando.",
          ],
          bullets: [
            "Primero, consulta el tipo interbancario real (Google, XE.com)",
            "Los proveedores no bancarios (Wise, XE, OFX, Remitly) superan consistentemente las tasas de los bancos",
            "Haz transferencias más grandes y menos frecuentes para minimizar las comisiones fijas",
            "Evita los kioscos del aeropuerto y las casas de cambio de hoteles — los márgenes pueden llegar al 10%",
          ],
        },
        {
          heading: "Cuándo transferir y cómo cerrar tu cuenta neozelandesa",
          paragraphs: [
            "No conviertas tus ahorros en NZD en el aeropuerto — los mostradores de cambio ahí cobran algunos de los peores tipos disponibles. Haz la conversión online uno o dos días antes de volar, una vez que confirmaste el saldo final de tu cuenta.",
            "Sobre cerrar tu cuenta neozelandesa: no es obligatorio antes de irte. Muchos bancos te permiten mantener una cuenta neozelandesa como no residente, y vale la pena mantenerla activa hasta que llegue tu devolución de impuestos del IRD. El IRD deposita el reembolso directamente en tu cuenta bancaria neozelandesa registrada, así que cerrarla antes significa un retraso mientras actualizas tus datos en myIR.",
          ],
          bullets: [
            "Transfiere online antes de salir — nunca en el mostrador del aeropuerto",
            "Mantén tu cuenta neozelandesa abierta hasta que llegue tu reembolso del IRD, o actualiza los datos bancarios en myIR",
            "Confirma los saldos finales de tu KiwiSaver o PAYE antes de cerrar cuentas",
            "Captura o descarga el historial de transacciones para los registros fiscales",
          ],
        },
        {
          heading: "Otra opción: intercambia, no transfieras",
          paragraphs: [
            "Si alguien está llegando a tu país justo cuando tú sales de Nueva Zelanda, cada uno tiene la divisa que el otro necesita. Tern conecta a viajeros que salen con los que llegan para intercambiar NZD directamente al tipo interbancario real con una única comisión fija — sin margen cambiario, sin intermediarios SWIFT, sin sorpresas.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Cuál es la forma más barata de enviar dinero a casa desde Nueva Zelanda?",
          a: "Usa un proveedor especializado (Wise, XE, OFX) que convierta al tipo de cambio interbancario real con una comisión fija transparente, en lugar de tu banco neozelandés. Envía menos transferencias pero de montos mayores para diluir las comisiones fijas, y nunca conviertas en el aeropuerto. Consumer NZ encontró que los proveedores especializados pueden ahorrar más de NZD 200 en una transferencia de NZD 10.000 en comparación con los grandes bancos.",
        },
        {
          q: "¿Debo cerrar mi cuenta bancaria neozelandesa antes de volar a casa?",
          a: "No necesariamente. Si esperas una devolución de impuestos del IRD, mantén la cuenta abierta hasta que llegue — el IRD deposita el reembolso en la cuenta bancaria registrada. También puedes actualizar tus datos bancarios en myIR a una cuenta en el extranjero antes de irte. Cerrar la cuenta prematuramente retrasa el reembolso.",
        },
      ],
    },
    ja: {
      title: "ニュージーランドから母国への節約送金術",
      description:
        "NZでのワーホリを終えたら？銀行送金には2〜4%の隠れFXマージンがかかります。NZDの貯金を実際の市場レートで安く送金する方法をご紹介します。",
      excerpt:
        "NZの銀行送金はシンプルに見えますが、為替レートを確認するまでは油断禁物。お金がどこへ消えるのか、そして帰国時により多くの貯金を持ち帰る方法を解説します。",
      sections: [
        {
          paragraphs: [
            "ニュージーランドで何ヶ月も長時間働いて節約した貯金を、帰国時に隠れ手数料でごっそり持っていかれるのは避けたいものです。でも銀行の海外送金は、為替レートの中にこっそり手数料を忍び込ませているのです。",
          ],
        },
        {
          heading: "NZの銀行が実際に請求するもの",
          paragraphs: [
            "ニュージーランドからの一般的な海外送金は3つの場所でコストが発生します。最大のものが為替レートのマージンです。NZの銀行は実際の市場中間レート（Googleで確認できるレート）に2〜4%を上乗せするのが一般的です。NZD 5,000の送金で3%のマージンなら150NZD — 提示レートに組み込まれているため手数料として表示されず、見えにくいのが特徴です。",
          ],
          bullets: [
            "FXマージン — 銀行は実際のレートを2〜4%引き上げ、最大の隠れコスト",
            "固定送金手数料 — NZの5大銀行は海外送金1回につき通常20〜30NZDを請求",
            "中継銀行手数料 — SWIFT送金の途中で差し引かれ、受取人が想定より少ない金額を受け取る",
          ],
        },
        {
          heading: "提示レートではなく実際のレートで比較する",
          paragraphs: [
            "Consumer NZがNZの5大銀行（ANZ、ASB、BNZ、Kiwibank、Westpac）と専門プロバイダーを比較したところ、WestpacではなくWiseを使ってNZD 10,000をオーストラリアに送金すると、約200NZD節約できることがわかりました。他の送金先でも同様の節約効果があります。",
            "鉄則：送金前にGoogleかXEで市場中間レートを確認し、プロバイダーの提示レートと比較する。その差が実際に払っているコストです。",
          ],
          bullets: [
            "まず市場中間レートを確認する（Google、XE.com）",
            "銀行以外のプロバイダー（Wise、XE、OFX、Remitly）は一貫して銀行より有利なレートを提供",
            "固定手数料を薄めるため、送金回数を減らしてまとめて送る",
            "空港の両替所やホテルの換金カウンターは避ける — マージンが10%に達することも",
          ],
        },
        {
          heading: "送金のタイミングとNZ口座の解約",
          paragraphs: [
            "空港でNZDの貯金を両替しないでください — 空港の両替カウンターは最も不利なレートの一つです。最終残高を確認したら、フライトの1〜2日前にオンラインで両替・送金しましょう。",
            "NZ口座の解約について：出国前に解約する必要はありません。多くの銀行は非居住者でも口座を維持できます。IRDからの年度末の税金還付が届くまでは口座を開けておく価値があります。IRDは還付金を登録銀行口座に直接振り込むため、先に閉鎖すると、myIRで口座情報を更新している間、還付が遅れることになります。",
          ],
          bullets: [
            "出発前にオンラインで送金する — 空港カウンターは絶対にNG",
            "IRDの税金還付が届くまでNZ口座を維持するか、myIRで海外口座に更新する",
            "口座を閉じる前にKiwiSaverやPAYEの最終残高を確認する",
            "税務記録のために取引履歴をスクリーンショットまたはダウンロードしておく",
          ],
        },
        {
          heading: "別の選択肢：送金ではなく「交換」する",
          paragraphs: [
            "あなたがニュージーランドを離れるタイミングで、誰かがあなたの国に到着するなら、お互いが相手の通貨を持っています。Ternは出発者と到着者をマッチングし、実際の市場中間レートでNZDを直接交換できます。手数料は1回の少額固定費のみ — FXマージンなし、SWIFT中継なし、隠れコストなし。",
          ],
        },
      ],
      faq: [
        {
          q: "ニュージーランドから母国へ最も安く送金する方法は？",
          a: "NZの銀行ではなく、実際の市場中間レートで透明な固定手数料を提供する専門プロバイダー（Wise、XE、OFX）を使いましょう。固定手数料を薄めるため送金回数を減らしてまとめて送り、空港では絶対に両替しないこと。Consumer NZの調査では、専門プロバイダーはNZD 10,000の送金で大手銀行より200NZD以上節約できることがわかっています。",
        },
        {
          q: "帰国前にNZの銀行口座を閉めるべきですか？",
          a: "必ずしも閉める必要はありません。IRDからの税金還付を待っている場合は、届くまで口座を開いておきましょう — IRDは登録口座に直接還付します。または、出国前にmyIRで銀行情報を海外口座に更新することもできます。口座を早期に閉鎖すると還付が遅れます。",
        },
      ],
    },
    ko: {
      title: "뉴질랜드에서 한국으로 저렴하게 돈 보내는 방법",
      description:
        "뉴질랜드 은행 송금에는 2~4% 숨겨진 FX 마진이 붙습니다. 실제 시장 환율로 NZD 저축을 저렴하게 본국으로 보내는 법.",
      excerpt:
        "뉴질랜드 은행 송금은 간단해 보이지만, 환율을 보기 전까지는 방심 금물. 돈이 어디로 사라지는지, 그리고 귀국 시 열심히 번 저축을 더 많이 가져가는 방법을 알려드립니다.",
      sections: [
        {
          paragraphs: [
            "뉴질랜드에서 수개월간 긴 근무와 절약 끝에 모은 저축을, 귀국 시 숨겨진 수수료에 일부 빼앗기는 건 정말 억울한 일입니다. 하지만 은행 국제 송금이 바로 그런 방식으로 작동합니다 — 환율 속에 조용히 숨겨져서요.",
          ],
        },
        {
          heading: "뉴질랜드 은행이 실제로 청구하는 것",
          paragraphs: [
            "뉴질랜드에서의 일반적인 국제 송금은 세 곳에서 동시에 비용이 발생합니다. 가장 큰 것은 환율 마진입니다. 뉴질랜드 은행들은 일반적으로 실제 시장 중간 환율(구글에서 확인되는 환율)에 2~4%를 추가합니다. NZD 5,000 송금에 3% 마진이면 NZD 150 — 제시 환율에 이미 포함되어 수수료로 표시되지 않아 눈에 띄지 않습니다.",
          ],
          bullets: [
            "FX 마진 — 은행은 실제 환율에 2~4%를 추가, 가장 큰 숨겨진 비용",
            "고정 송금 수수료 — 뉴질랜드 5대 은행은 해외 송금 1건당 보통 NZD 20~30 청구",
            "중계 은행 수수료 — SWIFT 도중 공제되어 수취인이 예상보다 적게 받게 됨",
          ],
        },
        {
          heading: "헤드라인 환율이 아닌 실제 환율로 비교하기",
          paragraphs: [
            "Consumer NZ가 뉴질랜드 5대 은행(ANZ, ASB, BNZ, Kiwibank, Westpac)과 전문 업체를 비교한 결과, Westpac 대신 Wise를 사용해 NZD 10,000을 호주로 보내면 약 NZD 200를 절약할 수 있다고 나타났습니다. 다른 목적지에서도 비슷한 절감 효과가 있습니다.",
            "기본 원칙: 송금 전에 항상 Google이나 XE에서 시장 중간 환율을 먼저 확인하고, 업체에서 제시하는 환율과 비교하세요. 그 두 숫자의 차이가 당신이 내는 비용입니다.",
          ],
          bullets: [
            "먼저 시장 중간 환율 확인하기(구글, XE.com)",
            "비은행 업체(Wise, XE, OFX, Remitly)는 지속적으로 은행 환율보다 유리함",
            "고정 수수료를 줄이기 위해 큰 금액으로 적게 송금하기",
            "공항 환전소와 호텔 환전 카운터 피하기 — 마진이 10%에 달하기도 함",
          ],
        },
        {
          heading: "송금 타이밍과 뉴질랜드 계좌 해지",
          paragraphs: [
            "NZD 저축을 공항에서 환전하지 마세요 — 공항 환전 카운터는 가장 불리한 환율 중 하나입니다. 최종 잔액을 확인한 후, 비행기 타기 1~2일 전에 온라인으로 환전 및 송금하세요.",
            "뉴질랜드 계좌 해지 관련: 출국 전에 반드시 닫을 필요는 없습니다. 많은 은행에서 비거주자도 NZ 계좌를 유지할 수 있습니다. IRD 연말 세금 환급이 들어올 때까지 계좌를 열어두는 것이 좋습니다. IRD는 환급금을 등록된 NZ 은행 계좌로 직접 입금하므로, 미리 닫으면 myIR에서 정보를 업데이트하는 동안 환급이 지연됩니다.",
          ],
          bullets: [
            "출발 전에 온라인으로 송금하기 — 공항 카운터는 절대 금지",
            "IRD 세금 환급이 들어올 때까지 NZ 계좌 유지하거나, myIR에서 해외 계좌로 업데이트",
            "계좌 닫기 전에 KiwiSaver 또는 PAYE 최종 잔액 확인하기",
            "세금 기록을 위해 거래 내역 스크린샷 또는 다운로드하기",
          ],
        },
        {
          heading: "다른 선택지: 송금 말고 '스왑'하기",
          paragraphs: [
            "당신이 뉴질랜드를 떠날 때 누군가가 당신의 나라로 입국한다면, 서로 상대방의 통화를 보유하고 있는 셈입니다. Tern은 출국자와 입국자를 매칭하여 실제 시장 중간 환율로 NZD를 직접 교환할 수 있게 합니다. 수수료는 단 한 번의 소액 고정 수수료뿐 — FX 마진 없음, SWIFT 중계 없음, 숨겨진 비용 없음.",
          ],
        },
      ],
      faq: [
        {
          q: "뉴질랜드에서 한국으로 가장 저렴하게 송금하는 방법은?",
          a: "뉴질랜드 은행 대신 실제 시장 중간 환율로 투명한 고정 수수료를 제공하는 전문 업체(Wise, XE, OFX)를 사용하세요. 고정 수수료를 분산하기 위해 큰 금액으로 적게 보내고, 절대 공항에서 환전하지 마세요. Consumer NZ 조사에 따르면 전문 업체는 NZD 10,000 송금 시 대형 은행 대비 NZD 200 이상을 절약할 수 있습니다.",
        },
        {
          q: "귀국하기 전에 뉴질랜드 은행 계좌를 닫아야 하나요?",
          a: "반드시 그럴 필요는 없습니다. IRD 세금 환급을 기다리고 있다면 환급이 들어올 때까지 계좌를 열어두세요 — IRD는 등록된 계좌로 직접 환급합니다. 또는 출국 전에 myIR에서 해외 계좌로 은행 정보를 업데이트할 수도 있습니다. 계좌를 일찍 닫으면 환급이 지연됩니다.",
        },
      ],
    },
    "zh-TW": {
      title: "打工度假結束後，如何從紐西蘭低成本匯款回台灣",
      description:
        "打工度假快結束了？銀行匯款藏有2~4%的隱形匯差。這裡教你如何以真實市場匯率，把NZD存款低費用地匯回家。",
      excerpt:
        "紐西蘭銀行匯款看似簡單，直到你看到匯率才發現問題。來了解錢消失在哪裡，以及如何把辛苦賺來的存款多帶一點回台灣。",
      sections: [
        {
          paragraphs: [
            "在紐西蘭工作了幾個月，長班輪替、精打細算，最不想在回家的路上因為隱藏費用被吃掉一大塊存款。但銀行的海外匯款，就是這樣悄悄地從匯率裡動手腳。",
          ],
        },
        {
          heading: "你的紐西蘭銀行究竟收了什麼費用",
          paragraphs: [
            "從紐西蘭發出的一般海外匯款，同時在三個地方產生費用。最大的是匯率價差：紐西蘭的銀行通常會在真實市場中間匯率（Google上查到的匯率）基礎上加收2~4%的價差。匯出NZD 5,000，3%的價差就是NZD 150——因為直接反映在報價匯率裡、不以手續費形式呈現，所以很難察覺。",
          ],
          bullets: [
            "匯率價差——銀行在真實匯率上加收2~4%，是最大的隱形費用",
            "固定匯款手續費——紐西蘭五大銀行每筆匯出通常收取NZD 20~30",
            "中間行手續費——SWIFT匯款途中被扣除，收款人實際收到的比預期少",
          ],
        },
        {
          heading: "要比較真實匯率，而不是表面報價",
          paragraphs: [
            "Consumer NZ對紐西蘭五大銀行（ANZ、ASB、BNZ、Kiwibank、Westpac）與專業業者進行比較，發現改用Wise取代Westpac匯出NZD 10,000到澳洲，可以省下約NZD 200。其他匯款目的地也有類似的節省效果。",
            "基本原則：匯款前先在Google或XE確認市場中間匯率，再與業者的報價比較。兩個數字之間的差距，就是你實際付出的成本。",
          ],
          bullets: [
            "先查市場中間匯率（Google、XE.com）",
            "非銀行業者（Wise、XE、OFX、Remitly）匯率持續優於銀行",
            "減少匯款次數、每次匯大額，分攤固定手續費",
            "避開機場換匯亭和飯店換匯櫃台——價差可能高達10%",
          ],
        },
        {
          heading: "匯款時機，以及如何關閉紐西蘭帳戶",
          paragraphs: [
            "不要在機場把NZD存款換匯——機場換匯的匯率是最差的選項之一。確認最終帳戶餘額後，在登機前一兩天在線上完成換匯與匯款。",
            "關於關閉紐西蘭帳戶：不一定要在出發前關閉。許多銀行允許非居民保留帳戶，建議等IRD的年度退稅入帳後再關閉。IRD會把退稅直接匯入你在系統中登錄的紐西蘭銀行帳戶，若提前關閉，就得等你更新myIR上的資訊，退稅因此延誤。",
          ],
          bullets: [
            "出發前在線上匯款——絕對不要在機場換匯",
            "保留紐西蘭帳戶直到IRD退稅到帳，或在離境前於myIR更新為海外帳戶",
            "關閉帳戶前確認KiwiSaver或PAYE的最終餘額",
            "截圖或下載交易記錄供稅務備查",
          ],
        },
        {
          heading: "另一個選擇：互換，不匯款",
          paragraphs: [
            "如果有人正好在你離開紐西蘭時入境台灣，你們兩個人正好持有對方需要的貨幣。Tern將即將離境與剛抵達的旅人配對，以真實市場中間匯率直接互換NZD，只收一筆小額固定費用——沒有匯率價差、沒有SWIFT中間行、沒有意外驚喜。",
          ],
        },
      ],
      faq: [
        {
          q: "從紐西蘭匯款回台灣最便宜的方式是什麼？",
          a: "使用以真實市場中間匯率換匯、收取透明固定手續費的專業業者（Wise、XE、OFX），而非你的紐西蘭銀行。減少匯款次數、每次匯大額以分攤固定費用，絕對不要在機場換匯。Consumer NZ的研究顯示，專業業者在一筆NZD 10,000匯款中，能比大型銀行省下NZD 200以上。",
        },
        {
          q: "我需要在搭機回台灣前關閉紐西蘭銀行帳戶嗎？",
          a: "不一定。如果你在等IRD退稅，請保留帳戶直到退稅入帳——IRD會匯入登錄的帳戶。你也可以在離境前於myIR更新為海外帳戶資訊。提前關閉帳戶會導致退稅延誤。",
        },
      ],
    },
  },
};
