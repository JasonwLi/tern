import type { Article } from "../types";

export const article: Article = {
  slug: "send-money-home-working-holiday",
  kind: "post",
  date: "2026-05-12",
  author: "Tern",
  emoji: "🌏",
  accent: "bg-grape-300",
  readMinutes: 5,
  sources: [
    {
      label: "ASIC MoneySmart — Sending money overseas",
      url: "https://moneysmart.gov.au/banking/sending-money-overseas",
    },
  ],
  i18n: {
    en: {
      title: "The cheapest way to send money home on a working holiday",
      description:
        "Banks hide a 2–4% markup in the exchange rate on top of transfer fees. How to send working holiday savings home at the real mid-market rate.",
      excerpt:
        "Your bank's transfer looks free — until you see the exchange rate. Here's how the markup works and how to keep more of your hard-earned savings when you send money home.",
      sections: [
        {
          paragraphs: [
            "After a year of farm work and double shifts, the last thing you want is to lose a chunk of your savings on the way home. But that's exactly what most bank transfers do — quietly, in the exchange rate.",
          ],
        },
        {
          heading: "Where the money actually disappears",
          paragraphs: ["A typical international transfer hits you in three places:"],
          bullets: [
            "The exchange rate markup — banks add 2–4% to the real (mid-market) rate. This is the big, hidden one.",
            "A flat transfer fee — often $15–30 per transfer.",
            "Intermediary bank fees — deducted mid-transfer on SWIFT, so the recipient gets less than expected.",
          ],
        },
        {
          heading: "The rate is the thing to watch",
          paragraphs: [
            "On a $3,000 transfer, a 3% markup is $90 — more than most flat fees, and invisible because it's baked into the rate you're quoted. Always compare the rate you're offered against the real mid-market rate (the one on Google).",
          ],
        },
        {
          heading: "Tips to keep more of your savings",
          bullets: [
            "Send in fewer, larger transfers to dilute flat fees",
            "Avoid airport and hotel exchange counters entirely",
            "Decline 'dynamic currency conversion' when a card machine offers to charge you in your home currency",
            "Use a provider that gives you the real mid-market rate, not a marked-up one",
          ],
        },
        {
          heading: "A different option: swap, don't send",
          paragraphs: [
            "If someone is arriving in your country just as you're leaving, you both need the opposite currencies. Tern matches departing and arriving travellers to swap directly at the real rate for one small flat fee — so neither of you pays a percentage to a bank.",
          ],
        },
      ],
      faq: [
        {
          q: "What's the cheapest way to send money home from a working holiday?",
          a: "Use a provider that converts at the real mid-market rate with a transparent flat fee, and send fewer, larger transfers. Avoid bank SWIFT transfers and currency counters, which hide a 2–4% markup in the rate.",
        },
        {
          q: "Why did my family receive less than I sent?",
          a: "Usually because of an exchange-rate markup baked into the quoted rate, plus possible intermediary bank fees on SWIFT transfers that are deducted along the way.",
        },
      ],
    },
    es: {
      title: "La forma más barata de enviar dinero en working holiday",
      description:
        "Los bancos ocultan un margen de 2–4% en el tipo de cambio más comisiones. Así envías tus ahorros del working holiday al tipo de cambio real.",
      excerpt:
        "La transferencia de tu banco parece gratuita... hasta que ves el tipo de cambio. Así funciona el margen oculto y cómo conservar más de tus ahorros cuando envías dinero a casa.",
      sections: [
        {
          paragraphs: [
            "Después de un año de trabajo en el campo y dobles turnos, lo último que quieres es perder una parte de tus ahorros en el camino a casa. Pero eso es exactamente lo que hacen la mayoría de las transferencias bancarias — en silencio, dentro del tipo de cambio.",
          ],
        },
        {
          heading: "Dónde desaparece tu dinero",
          paragraphs: ["Una transferencia internacional típica te cobra en tres lugares:"],
          bullets: [
            "El margen sobre el tipo de cambio — los bancos añaden un 2–4% al tipo real (interbancario). Este es el cargo oculto más grande.",
            "Una comisión fija por transferencia — normalmente $15–30 por envío.",
            "Comisiones de bancos intermediarios — se descuentan a mitad de la transferencia SWIFT, así que el destinatario recibe menos de lo esperado.",
          ],
        },
        {
          heading: "El tipo de cambio es lo que debes vigilar",
          paragraphs: [
            "En una transferencia de $3,000, un margen del 3% equivale a $90 — más que la mayoría de las comisiones fijas, e invisible porque ya está incluido en el tipo de cambio que te ofrecen. Compara siempre el tipo que te dan con el tipo interbancario real (el que aparece en Google).",
          ],
        },
        {
          heading: "Consejos para conservar más de tus ahorros",
          bullets: [
            "Haz menos transferencias pero de montos mayores para diluir las comisiones fijas",
            "Evita siempre las casas de cambio de aeropuertos y hoteles",
            "Rechaza la 'conversión dinámica de divisas' cuando un terminal te ofrezca cobrar en tu moneda local",
            "Usa un proveedor que te dé el tipo de cambio real, no uno inflado",
          ],
        },
        {
          heading: "Otra opción: intercambia, no transfieras",
          paragraphs: [
            "Si alguien está llegando a tu país justo cuando tú te vas, ambos necesitan las divisas contrarias. Tern conecta a viajeros que salen con los que llegan para intercambiar directamente al tipo real con una pequeña comisión fija — así ninguno de los dos le paga un porcentaje a un banco.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Cuál es la forma más barata de enviar dinero a casa desde un working holiday?",
          a: "Usa un proveedor que convierta al tipo de cambio interbancario real con una comisión fija transparente, y haz menos transferencias pero de mayor monto. Evita las transferencias bancarias SWIFT y las casas de cambio, que esconden un margen de 2–4% en el tipo.",
        },
        {
          q: "¿Por qué mi familia recibió menos de lo que envié?",
          a: "Generalmente porque el tipo de cambio ofrecido ya incluía un margen oculto, más posibles comisiones de bancos intermediarios en transferencias SWIFT que se descuentan en el camino.",
        },
      ],
    },
    ja: {
      title: "ワーホリ中に一番安く母国へ海外送金する方法",
      description:
        "ワーホリの貯金を母国へ送金したいですか？銀行は為替レートに2–4%の手数料を上乗せしています。実際のレートで安く送金する方法を解説します。",
      excerpt:
        "銀行の送金は無料に見えますが、為替レートを確認するまでは要注意。上乗せ手数料の仕組みと、稼いだ貯金をより多く持ち帰る方法をご紹介します。",
      sections: [
        {
          paragraphs: [
            "農場での仕事や長時間シフトで過ごした1年間。その大切な貯金の一部が帰国時に消えてしまうのは避けたいですよね。でも多くの銀行送金では、為替レートの中にそっと手数料が隠されているのです。",
          ],
        },
        {
          heading: "お金が消える3つの場所",
          paragraphs: ["一般的な海外送金には、3つのコストがかかります："],
          bullets: [
            "為替レートの上乗せ — 銀行は実際の市場中間レートに2–4%を加算します。これが最大の隠れコストです。",
            "送金手数料 — 1回の送金につき$15–30程度の固定費用。",
            "中継銀行手数料 — SWIFT送金の途中で差し引かれるため、受取人が想定より少ない金額を受け取ります。",
          ],
        },
        {
          heading: "注目すべきは為替レート",
          paragraphs: [
            "$3,000の送金に3%の上乗せがあれば$90の損失 — 固定手数料より高くなることも多く、提示レートに組み込まれているため見えにくいのです。常に提示されたレートと実際の市場中間レート（Googleで確認できるレート）を比較しましょう。",
          ],
        },
        {
          heading: "貯金を守るためのヒント",
          bullets: [
            "固定手数料の影響を薄めるため、送金回数を減らしてまとめて送る",
            "空港やホテルの両替所は絶対に避ける",
            "カード端末で自国通貨建て決済を提案された場合は「ダイナミックカレンシーコンバージョン」を断る",
            "上乗せのない実際の市場中間レートで送金できるサービスを使う",
          ],
        },
        {
          heading: "別の選択肢：送金ではなく「交換」する",
          paragraphs: [
            "あなたが帰国するタイミングで、誰かがあなたの国に到着するなら、お互いが相手の通貨を必要としています。Ternは出発者と到着者をマッチングし、実際の市場レートで少額の固定手数料のみで直接両替できます — どちらも銀行にパーセンテージを支払う必要はありません。",
          ],
        },
      ],
      faq: [
        {
          q: "ワーホリから母国への海外送金で最も安い方法は？",
          a: "透明な固定手数料で実際の市場中間レートに変換してくれるサービスを使い、送金回数を減らしてまとめて送りましょう。銀行のSWIFT送金や両替所は為替レートに2–4%の上乗せが隠されているため避けるのがベストです。",
        },
        {
          q: "家族が送金額より少ない金額を受け取ったのはなぜ？",
          a: "多くの場合、提示された為替レートに組み込まれた上乗せ手数料と、SWIFT送金の途中で差し引かれる中継銀行手数料が原因です。",
        },
      ],
    },
    ko: {
      title: "워홀 중 한국으로 해외 송금하는 가장 저렴한 방법",
      description:
        "은행은 환율에 2–4% 마진을 숨기고 송금 수수료도 따로 받습니다. 워홀 저축을 실제 환율로 저렴하게 송금하는 방법.",
      excerpt:
        "은행 송금은 무료처럼 보이지만, 환율을 확인해보면 이야기가 달라집니다. 숨겨진 마진이 어떻게 작동하는지, 그리고 열심히 번 저축을 더 많이 가져가는 방법을 알려드립니다.",
      sections: [
        {
          paragraphs: [
            "농장 일과 이중 근무로 가득했던 1년. 귀국길에 저축의 일부가 사라지는 건 정말 억울한 일이죠. 하지만 대부분의 은행 송금은 환율 안에 조용히 수수료를 숨겨두고 있습니다.",
          ],
        },
        {
          heading: "돈이 사라지는 3가지 지점",
          paragraphs: ["일반적인 해외 송금은 세 곳에서 비용을 발생시킵니다:"],
          bullets: [
            "환율 마진 — 은행은 실제 시장 중간 환율에 2–4%를 추가합니다. 이게 가장 크고 숨겨진 비용입니다.",
            "고정 송금 수수료 — 보통 송금 1회당 $15–30.",
            "중계 은행 수수료 — SWIFT 송금 중간에 공제되어 수취인이 예상보다 적게 받게 됩니다.",
          ],
        },
        {
          heading: "주목해야 할 건 환율입니다",
          paragraphs: [
            "$3,000 송금에 3% 마진이 붙으면 $90 손실 — 고정 수수료보다 클 때도 많고, 제시 환율에 이미 포함되어 있어 눈에 띄지 않습니다. 항상 제시받은 환율을 실제 시장 중간 환율(Google에서 확인 가능)과 비교해보세요.",
          ],
        },
        {
          heading: "저축을 지키는 팁",
          bullets: [
            "고정 수수료 부담을 줄이기 위해 횟수를 줄이고 한 번에 더 많이 송금하기",
            "공항이나 호텔 환전소는 무조건 피하기",
            "카드 단말기에서 원화 결제를 제안할 때 '동적 환율 변환(DCC)'을 거절하기",
            "부풀려진 환율이 아닌 실제 시장 중간 환율을 제공하는 서비스 사용하기",
          ],
        },
        {
          heading: "다른 선택지: 송금 말고 '스왑'하기",
          paragraphs: [
            "당신이 출국할 때 누군가가 당신의 나라로 입국한다면, 서로 상대방의 통화가 필요한 상황입니다. Tern은 출국자와 입국자를 매칭하여 실제 환율로 소액의 고정 수수료만으로 직접 환전할 수 있게 해줍니다 — 양쪽 모두 은행에 퍼센트 수수료를 낼 필요가 없습니다.",
          ],
        },
      ],
      faq: [
        {
          q: "워홀에서 한국으로 해외 송금하는 가장 저렴한 방법은?",
          a: "투명한 고정 수수료로 실제 시장 중간 환율을 제공하는 서비스를 이용하고, 횟수를 줄여 한 번에 더 많이 보내세요. 은행 SWIFT 송금과 환전소는 환율에 2–4% 마진이 숨겨져 있으니 피하는 것이 좋습니다.",
        },
        {
          q: "가족이 내가 보낸 것보다 적게 받은 이유는?",
          a: "대개 제시된 환율에 포함된 마진과, SWIFT 송금 과정에서 공제되는 중계 은행 수수료 때문입니다.",
        },
      ],
    },
    "zh-TW": {
      title: "打工度假如何用最低成本匯款回台灣",
      description:
        "想把打工度假存下來的錢匯回台灣？銀行在匯率中藏了2–4%的價差，還要另收手續費。教你如何用真實匯率低費用匯款回家。",
      excerpt:
        "銀行匯款看似免費，直到你看到匯率才發現不對勁。來了解隱藏價差的運作方式，以及如何把辛苦賺來的存款多帶一點回家。",
      sections: [
        {
          paragraphs: [
            "農場打工、雙班輪替熬過了整整一年，最不想看到的就是存款在回家的路上悄悄縮水。但大多數銀行匯款就是這樣——把手續費藏在匯率裡，讓你毫無察覺。",
          ],
        },
        {
          heading: "錢到底消失在哪裡",
          paragraphs: ["一筆一般的國際匯款通常會在三個地方被收費："],
          bullets: [
            "匯率價差——銀行在真實市場中間匯率上加收2–4%，這是最大、也最隱蔽的費用。",
            "固定匯款手續費——每筆匯款通常收取$15–30。",
            "中間行手續費——透過SWIFT匯款時，費用在中途被扣除，收款人實際收到的金額比預期少。",
          ],
        },
        {
          heading: "最該注意的是匯率",
          paragraphs: [
            "一筆$3,000的匯款若有3%價差，就損失$90——往往比固定手續費更高，而且因為直接反映在報價匯率上，很容易被忽略。務必把銀行報給你的匯率與真實的市場中間匯率（Google上查得到）做比較。",
          ],
        },
        {
          heading: "保住更多存款的小技巧",
          bullets: [
            "減少匯款次數、每次匯大額，分攤固定手續費",
            "完全避開機場和飯店的換匯櫃台",
            "刷卡時若被問要用台幣還是當地幣別結帳，拒絕「動態貨幣轉換（DCC）」",
            "選擇能提供真實市場中間匯率的服務，而非加了價差的匯率",
          ],
        },
        {
          heading: "另一個選擇：互換，不匯款",
          paragraphs: [
            "如果有人正好在你離境時入境你的國家，你們兩個人需要的恰好是對方手上的貨幣。Tern 將即將離境與剛抵達的旅人配對，讓雙方以真實匯率直接互換，只收一筆小額固定費用——兩邊都不需要付百分比手續費給銀行。",
          ],
        },
      ],
      faq: [
        {
          q: "打工度假匯款回台灣最便宜的方式是什麼？",
          a: "選擇以真實市場中間匯率換匯、收取透明固定手續費的服務，並減少匯款次數、每次匯大額。避免使用銀行SWIFT匯款和換匯櫃台，因為它們在匯率中隱藏了2–4%的價差。",
        },
        {
          q: "為什麼家人收到的金額比我匯出的少？",
          a: "通常是因為報價匯率中已內含價差，加上SWIFT匯款途中被中間行扣除手續費，導致最終收款金額縮水。",
        },
      ],
    },
  },
};
