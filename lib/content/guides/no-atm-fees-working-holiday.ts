import type { Article } from "../types";

export const article: Article = {
  slug: "no-atm-fees-working-holiday",
  kind: "guide",
  date: "2026-05-23",
  emoji: "🏧",
  accent: "bg-lime-300",
  readMinutes: 6,
  sources: [
    {
      label: "NerdWallet — 7 Ways to Avoid International ATM Fees",
      url: "https://www.nerdwallet.com/travel/learn/international-atm-fees",
    },
    {
      label: "Wise — Dynamic currency conversion explained",
      url: "https://wise.com/us/blog/choose-local-currency-at-foreign-atm",
    },
  ],
  i18n: {
    en: {
      title: "How to avoid ATM and card fees on a working holiday",
      description:
        "ATM fees, foreign transaction fees, DCC, and weekend FX markups silently drain working holiday earnings. How a fee-free travel account stops it.",
      excerpt:
        "Every ATM withdrawal and card swipe abroad can trigger multiple hidden fees. Here's exactly what they are — and how to eliminate them with the right account.",
      sections: [
        {
          paragraphs: [
            "When you're on a working holiday, fees on your card and ATM withdrawals are a slow, invisible leak. Each individual charge looks small — a dollar here, two percent there — but across a 12-month stay they can cost you hundreds of dollars you never noticed leaving. Understanding each fee type is the first step to eliminating them.",
          ],
        },
        {
          heading: "Foreign ATM operator fees",
          paragraphs: [
            "When you withdraw cash from an ATM that belongs to a different bank than your own — which is almost every ATM abroad — the operator of that ATM typically charges a flat fee per withdrawal. This fee is set by the ATM's owner, not your bank, and can range from USD 2 to USD 5 or the local currency equivalent per transaction.",
            "This fee is charged on top of anything your own bank charges. That means a single cash withdrawal can trigger two separate fees before the exchange rate even enters the picture.",
          ],
        },
        {
          heading: "Foreign transaction fees",
          paragraphs: [
            "Many bank cards and credit cards add a foreign transaction fee — typically 1% to 3% of the purchase amount — on every transaction made in a foreign currency. This applies to ATM withdrawals and card purchases alike.",
            "A 3% foreign transaction fee on CAD 1,000 a month in spending is CAD 30 gone every month, or CAD 360 over a year. Over a working holiday, this fee alone can cost more than a flight.",
          ],
        },
        {
          heading: "Dynamic currency conversion (DCC) — the sneakiest fee",
          paragraphs: [
            "Dynamic currency conversion (DCC) is the option an ATM or card terminal presents to convert your transaction into your home currency on the spot, instead of letting your bank handle the conversion. It seems helpful — you can see the charge in your own currency — but the exchange rate used by the DCC provider is almost always significantly worse than the interbank rate your bank would use.",
            "Studies of real DCC transactions have found average markups of 7–8% above interbank rates, with some reaching 12% or higher. In nearly every case, choosing DCC costs you more money. When an ATM or terminal asks whether you want to pay in the local currency or your home currency, always choose the local currency — and let your bank do the conversion.",
          ],
        },
        {
          heading: "Weekend FX markup",
          paragraphs: [
            "The global foreign exchange market closes over the weekend. Banks and card networks still process transactions on Saturdays and Sundays, but because live market rates aren't available, some providers apply a weekend spread — a small additional buffer added to the rate — to protect themselves against the rate moving when markets reopen on Monday.",
            "Not every provider applies this markup, and it is usually small (often a fraction of a percent), but on large purchases or cash withdrawals it is one more cost to be aware of.",
          ],
        },
        {
          heading: "How a fee-free travel account fixes it",
          paragraphs: [
            "A good fee-free travel card eliminates all of the above. Look for an account that charges no foreign transaction fees on purchases, no flat ATM withdrawal fees (or reimburses them), converts at the real mid-market exchange rate with no markup, and does not add a weekend spread.",
            "With this type of account you can withdraw cash at any ATM in the world and pay for anything with your card without any of the hidden costs described above. Over the course of a 12-month working holiday this typically saves hundreds of dollars compared to using a standard home-country bank account abroad.",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Tern is built for working holiday makers who earn in one currency and spend in another. The Tern account has no foreign transaction fees, converts at the mid-market rate, and flags DCC attempts before you accidentally accept one. Your earnings stay yours — not eroded by fees you didn't know existed.",
          ],
        },
      ],
      faq: [
        {
          q: "What is dynamic currency conversion (DCC) and should I accept it?",
          a: "DCC is when an ATM or card terminal offers to convert your transaction into your home currency at the point of sale, rather than leaving the conversion to your bank. You should almost always decline it. DCC providers use exchange rates with markups typically between 3% and 12% above the interbank rate. Choose local currency every time.",
        },
        {
          q: "Are foreign transaction fees the same as ATM fees?",
          a: "No — they are separate charges. An ATM fee is a flat fee charged by the ATM operator for using their machine. A foreign transaction fee is a percentage charged by your card issuer on any transaction in a foreign currency, including both ATM withdrawals and card purchases. You can face both on a single withdrawal.",
        },
        {
          q: "How much can I save by switching to a fee-free travel card?",
          a: "It depends on your spending, but travellers spending the equivalent of USD 1,000 a month abroad with a card that has a 3% foreign transaction fee and USD 3 ATM fees (twice a week) would pay roughly USD 55–60 per month in fees alone — about USD 650 over a year. A fee-free account reduces that to near zero.",
        },
      ],
    },
    es: {
      title: "Working holiday: cómo evitar cargos de ATM y tarjetas",
      description:
        "Cargos de cajero, DCC y márgenes de fin de semana merman tus ganancias del working holiday. Así una cuenta sin comisiones detiene el sangrado.",
      excerpt:
        "Cada retiro de cajero y pago con tarjeta en el extranjero puede generar múltiples cargos ocultos. Acá te explicamos exactamente cuáles son — y cómo eliminarlos con la cuenta correcta.",
      sections: [
        {
          paragraphs: [
            "Cuando estás en una visa working holiday, los cargos por usar tu tarjeta y retirar efectivo son una fuga lenta e invisible. Cada cargo parece pequeño — un dólar acá, dos por ciento allá — pero en una estadía de 12 meses pueden costarte cientos de dólares que nunca notaste que te estaban cobrando. Entender cada tipo de cargo es el primer paso para eliminarlos.",
          ],
        },
        {
          heading: "Cargos del operador del cajero automático",
          paragraphs: [
            "Cuando retiras efectivo de un cajero que pertenece a un banco diferente al tuyo — que es prácticamente todo cajero en el exterior — el operador de ese cajero generalmente cobra un cargo fijo por retiro. Este cargo lo define el dueño del cajero, no tu banco, y puede ir de USD 2 a USD 5 (o su equivalente en moneda local) por transacción.",
            "Este cargo se suma a lo que cobra tu propio banco. Esto significa que un solo retiro de efectivo puede generar dos cargos separados antes de que siquiera entremos a hablar del tipo de cambio.",
          ],
        },
        {
          heading: "Comisiones por transacciones en el extranjero",
          paragraphs: [
            "Muchas tarjetas de débito y crédito agregan una comisión por transacción en el extranjero — generalmente del 1% al 3% del monto de la compra — en cada operación realizada en moneda extranjera. Esto aplica tanto a los retiros de cajero como a los pagos con tarjeta.",
            "Una comisión del 3% sobre CAD 1,000 mensuales en gastos son CAD 30 que se van cada mes, o CAD 360 en un año. A lo largo de una visa working holiday, solo esta comisión puede costarte más que un vuelo.",
          ],
        },
        {
          heading: "Conversión dinámica de moneda (DCC) — el cargo más engañoso",
          paragraphs: [
            "La conversión dinámica de moneda (DCC) es la opción que ofrece un cajero o terminal de pago para convertir tu transacción a tu moneda de origen en el momento, en lugar de dejar que tu banco haga la conversión. Parece útil — puedes ver el cargo en tu propia moneda — pero el tipo de cambio que usa el proveedor de DCC casi siempre es significativamente peor que la tasa interbancaria que usaría tu banco.",
            "Estudios sobre transacciones DCC reales encontraron márgenes promedio de 7–8% por encima de las tasas interbancarias, con algunos llegando al 12% o más. En casi todos los casos, elegir DCC te cuesta más dinero. Cuando un cajero o terminal te pregunta si quieres pagar en moneda local o en tu moneda de origen, siempre elige la moneda local — y deja que tu banco haga la conversión.",
          ],
        },
        {
          heading: "Margen de tipo de cambio de los fines de semana",
          paragraphs: [
            "El mercado global de divisas cierra los fines de semana. Los bancos y las redes de tarjetas siguen procesando transacciones los sábados y domingos, pero como no hay tasas de mercado en tiempo real disponibles, algunos proveedores aplican un margen de fin de semana — un pequeño margen adicional incorporado a la tasa — para protegerse ante posibles movimientos del mercado cuando este reabre el lunes.",
            "No todos los proveedores aplican este margen, y generalmente es pequeño (a menudo una fracción de punto porcentual), pero en compras grandes o retiros de efectivo es un costo más a tener en cuenta.",
          ],
        },
        {
          heading: "Cómo una cuenta sin comisiones lo resuelve",
          paragraphs: [
            "Una buena tarjeta de viaje sin comisiones elimina todo lo anterior. Busca una cuenta que no cobre comisiones por transacciones en el extranjero, no cobre cargos fijos en cajeros automáticos (o los reembolse), convierta al tipo de cambio real del mercado interbancario sin margen adicional, y no aplique margen de fin de semana.",
            "Con este tipo de cuenta puedes retirar efectivo en cualquier cajero del mundo y pagar con tarjeta cualquier cosa sin ninguno de los costos ocultos descritos. A lo largo de una visa working holiday de 12 meses, esto generalmente te ahorra cientos de dólares en comparación con usar una cuenta bancaria de tu país de origen en el exterior.",
          ],
        },
        {
          heading: "Cómo te ayuda Tern",
          paragraphs: [
            "Tern está diseñada para personas en visa working holiday que ganan en una moneda y gastan en otra. La cuenta Tern no tiene comisiones por transacciones en el extranjero, convierte al tipo de cambio real del mercado interbancario y te avisa ante intentos de DCC antes de que los aceptes por accidente. Lo que ganas se queda en tus manos — sin que se erosione con cargos que no sabías que existían.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Qué es la conversión dinámica de moneda (DCC) y debería aceptarla?",
          a: "El DCC es cuando un cajero o terminal de pago ofrece convertir tu transacción a tu moneda de origen en el punto de venta, en lugar de dejar la conversión a tu banco. En casi todos los casos, deberías rechazarlo. Los proveedores de DCC usan tipos de cambio con márgenes que suelen estar entre el 3% y el 12% por encima de la tasa interbancaria. Elige siempre la moneda local.",
        },
        {
          q: "¿Las comisiones por transacciones en el extranjero son lo mismo que los cargos de cajero?",
          a: "No — son cargos separados. El cargo del cajero es un monto fijo que cobra el operador del cajero por usar su máquina. La comisión por transacción en el extranjero es un porcentaje que cobra el emisor de tu tarjeta en cualquier operación en moneda extranjera, tanto retiros de cajero como pagos con tarjeta. Puedes enfrentar ambos en un solo retiro.",
        },
        {
          q: "¿Cuánto puedo ahorrar pasando a una tarjeta de viaje sin comisiones?",
          a: "Depende de tus gastos, pero si gastas el equivalente a USD 1,000 al mes en el exterior con una tarjeta que tiene 3% de comisión por transacción en el extranjero y USD 3 por uso de cajero (dos veces por semana), estarías pagando aproximadamente USD 55–60 solo en comisiones al mes — unos USD 650 al año. Una cuenta sin comisiones reduce eso casi a cero.",
        },
      ],
    },
    ja: {
      title: "ワーキングホリデーでATMとカード手数料を回避する方法",
      description:
        "ATM手数料・外貨取引手数料・DCC・週末為替マークアップがワーホリ収入を蝕みます。手数料ゼロのカードで解決する方法を解説。",
      excerpt:
        "海外でのATM引き出しやカード支払いのたびに、複数の隠れた手数料がかかることがあります。その手数料の実態と、正しい口座で完全になくす方法を説明します。",
      sections: [
        {
          paragraphs: [
            "ワーキングホリデー中、カードやATM引き出しの手数料はゆっくりと目に見えない形で資金を減らしていきます。一つひとつの金額は小さく見えますが — ここで1ドル、あそこで2% — 12ヶ月の滞在全体では気づかないうちに数百ドルの損失になることがあります。各手数料の種類を理解することが、それをなくすための第一歩です。",
          ],
        },
        {
          heading: "海外ATM利用手数料",
          paragraphs: [
            "自分の銀行とは別の銀行が所有するATMで現金を引き出すとき — 海外ではほぼすべてのATMがこれにあたります — そのATMの運営者は通常、1回の引き出しにつき固定の手数料を請求します。この手数料はATMの所有者が設定するもので、自分の銀行ではなく、1回あたりUSD 2〜5（または現地通貨の同等額）の範囲です。",
            "この手数料は、自分の銀行が請求する手数料に上乗せされます。つまり、1回の現金引き出しで、為替レートの話が出る前に2つの別々の手数料が発生することがあります。",
          ],
        },
        {
          heading: "外貨取引手数料",
          paragraphs: [
            "多くの銀行カードやクレジットカードは、外国通貨で行うすべての取引に対して外貨取引手数料 — 通常は購入金額の1〜3% — を上乗せします。これはATM引き出しにも、カード決済にも同様に適用されます。",
            "月にCAD 1,000の支出に3%の外貨取引手数料がかかると、毎月CAD 30が消え、1年間でCAD 360です。ワーキングホリデーの間、この手数料だけで航空券代以上のコストになることがあります。",
          ],
        },
        {
          heading: "動的通貨換算（DCC）— 最も気づきにくい手数料",
          paragraphs: [
            "動的通貨換算（DCC）とは、ATMや決済端末が、銀行に換算を任せる代わりにその場で取引を自国通貨に換算する選択肢を提示するものです。便利に見えます — 自国通貨で金額を確認できますから — しかし、DCCプロバイダーが使用する為替レートは、自分の銀行が使うインターバンクレートよりもほとんどの場合かなり悪くなっています。",
            "実際のDCC取引の研究では、インターバンクレートより平均7〜8%高いマークアップが確認されており、12%以上に達するケースもあります。ほぼすべての場合、DCCを選ぶと余計にお金がかかります。ATMや端末が地元通貨と自国通貨のどちらで支払うか尋ねてきたら、常に地元通貨を選びましょう — 換算は銀行に任せてください。",
          ],
        },
        {
          heading: "週末の為替マークアップ",
          paragraphs: [
            "グローバルな外国為替市場は週末に閉まります。銀行やカードネットワークは土日も取引を処理しますが、リアルタイムの市場レートが利用できないため、プロバイダーによっては月曜日に市場が再開したときのレート変動に備えて「週末スプレッド」— レートにわずかな上乗せ — を適用することがあります。",
            "すべてのプロバイダーがこのマークアップを適用するわけではなく、通常は小さな金額（多くの場合、数分の一パーセント）ですが、大きな買い物や現金引き出しでは知っておくべきもう一つのコストです。",
          ],
        },
        {
          heading: "手数料なしのトラベルカードで解決する方法",
          paragraphs: [
            "優れた手数料なしのトラベルカードは、上記のすべてを解消します。外貨取引手数料なし、ATM引き出し固定手数料なし（または返金あり）、マークアップなしの実際の中央値為替レートで換算、週末スプレッドなしの口座を探しましょう。",
            "このタイプの口座があれば、世界中のどのATMでも現金を引き出せ、上記の隠れたコストなしにカードで何でも支払えます。12ヶ月のワーキングホリデー全体を通じると、海外で本国の銀行口座を使うよりも一般的に数百ドルの節約になります。",
          ],
        },
        {
          heading: "Ternができること",
          paragraphs: [
            "Ternは、ある通貨で稼いで別の通貨で使うワーキングホリデーメーカーのために作られています。Ternの口座は外貨取引手数料なし、中央値の為替レートで換算し、誤ってDCCを承認してしまう前にDCCの試みを警告します。稼いだお金はあなたのもの — 知らなかった手数料で削られることはありません。",
          ],
        },
      ],
      faq: [
        {
          q: "動的通貨換算（DCC）とは何ですか？受け入れるべきですか？",
          a: "DCCとは、ATMや決済端末が、銀行に換算を任せる代わりに販売時点で取引を自国通貨に換算する提案です。ほとんどの場合、断るべきです。DCCプロバイダーはインターバンクレートより通常3〜12%高いマークアップのある為替レートを使用します。常に地元通貨を選んでください。",
        },
        {
          q: "外貨取引手数料とATM手数料は同じですか？",
          a: "いいえ — 別々の請求です。ATM手数料はATM運営者がその機械の利用に対して請求する固定額です。外貨取引手数料はカード発行者が外国通貨でのすべての取引（ATM引き出しとカード購入の両方）に対して請求するパーセンテージです。1回の引き出しで両方に直面することがあります。",
        },
        {
          q: "手数料なしのトラベルカードに切り替えるとどれくらい節約できますか？",
          a: "支出額によりますが、月にUSD 1,000相当を海外で、外貨取引手数料3%、ATM手数料USD 3（週2回）のカードで使う場合、手数料だけで月に約USD 55〜60 — 年間で約USD 650かかります。手数料なしの口座ならそれがほぼゼロになります。",
        },
      ],
    },
    ko: {
      title: "워킹홀리데이 중 ATM 및 카드 수수료 피하는 방법",
      description:
        "ATM 수수료, 해외 거래 수수료, DCC, 주말 환율 마크업이 워홀 수입을 갉아먹습니다. 수수료 없는 트래블 카드로 해결하는 방법.",
      excerpt:
        "해외에서 ATM 인출이나 카드 결제를 할 때마다 여러 숨겨진 수수료가 발생할 수 있습니다. 정확히 무엇인지, 올바른 계좌로 어떻게 없앨 수 있는지 알아보세요.",
      sections: [
        {
          paragraphs: [
            "워킹홀리데이 중 카드와 ATM 인출 수수료는 느리고 눈에 보이지 않는 누수입니다. 개별 금액은 작아 보이지만 — 여기서 1달러, 저기서 2% — 12개월 체류 동안 모르는 사이에 수백 달러가 빠져나갈 수 있습니다. 각 수수료 유형을 이해하는 것이 없애는 첫 번째 단계입니다.",
          ],
        },
        {
          heading: "해외 ATM 운영사 수수료",
          paragraphs: [
            "자신의 은행이 아닌 다른 은행 소유의 ATM에서 현금을 인출할 때 — 해외에서는 거의 모든 ATM이 이에 해당합니다 — 해당 ATM 운영사는 일반적으로 인출당 고정 수수료를 부과합니다. 이 수수료는 자신의 은행이 아닌 ATM 소유자가 설정하며, 거래당 USD 2~5(또는 현지 통화 동등액) 범위입니다.",
            "이 수수료는 자신의 은행이 청구하는 수수료에 추가됩니다. 즉, 단 한 번의 현금 인출로 환율 이야기가 나오기도 전에 두 개의 별도 수수료가 발생할 수 있습니다.",
          ],
        },
        {
          heading: "해외 거래 수수료",
          paragraphs: [
            "많은 은행 카드와 신용카드는 외국 통화로 이루어진 모든 거래에 해외 거래 수수료 — 일반적으로 구매 금액의 1%~3% — 를 추가합니다. 이는 ATM 인출과 카드 결제 모두에 적용됩니다.",
            "월 CAD 1,000 지출에 3% 해외 거래 수수료가 붙으면 매월 CAD 30이 사라지고, 1년이면 CAD 360입니다. 워킹홀리데이 기간 동안 이 수수료만으로 항공권 비용 이상이 될 수 있습니다.",
          ],
        },
        {
          heading: "동적 통화 환산(DCC) — 가장 교묘한 수수료",
          paragraphs: [
            "동적 통화 환산(DCC)은 ATM이나 카드 단말기가 은행에 환산을 맡기는 대신 그 자리에서 거래를 본국 통화로 환산하는 옵션을 제시하는 것입니다. 편리해 보입니다 — 자국 통화로 금액을 확인할 수 있으니까요 — 하지만 DCC 제공업체가 사용하는 환율은 거의 항상 은행이 사용할 인터뱅크 환율보다 훨씬 불리합니다.",
            "실제 DCC 거래 연구에서 인터뱅크 환율보다 평균 7~8% 높은 마크업이 확인되었으며, 12% 이상에 달하는 경우도 있었습니다. 거의 모든 경우에 DCC를 선택하면 더 많은 돈을 잃습니다. ATM이나 단말기에서 현지 통화 또는 본국 통화 중 하나를 선택하라고 하면 항상 현지 통화를 선택하세요 — 환산은 은행에 맡기세요.",
          ],
        },
        {
          heading: "주말 환율 마크업",
          paragraphs: [
            "글로벌 외환 시장은 주말에 문을 닫습니다. 은행과 카드 네트워크는 토요일과 일요일에도 거래를 처리하지만, 실시간 시장 환율을 이용할 수 없기 때문에 일부 제공업체는 월요일 시장 재개 시 환율 변동에 대비해 '주말 스프레드' — 환율에 약간의 추가 버퍼 — 를 적용합니다.",
            "모든 제공업체가 이 마크업을 적용하는 것은 아니며, 일반적으로 소액(종종 1% 미만)이지만 대규모 구매나 현금 인출 시에는 알아두어야 할 또 하나의 비용입니다.",
          ],
        },
        {
          heading: "수수료 없는 트래블 카드로 해결하는 방법",
          paragraphs: [
            "좋은 수수료 없는 트래블 카드는 위의 모든 것을 없애줍니다. 해외 거래 수수료 없음, ATM 인출 고정 수수료 없음(또는 환급), 마크업 없는 실제 중간 환율로 환산, 주말 스프레드 없음인 계좌를 찾으세요.",
            "이런 유형의 계좌가 있으면 전 세계 어느 ATM에서도 현금을 인출하고 앞서 설명한 숨겨진 비용 없이 카드로 무엇이든 결제할 수 있습니다. 12개월 워킹홀리데이 전체에 걸쳐 일반적으로 해외에서 본국 은행 계좌를 사용하는 것보다 수백 달러를 절약할 수 있습니다.",
          ],
        },
        {
          heading: "Tern이 도와드립니다",
          paragraphs: [
            "Tern은 한 통화로 벌고 다른 통화로 소비하는 워킹홀리데이 참가자를 위해 만들어졌습니다. Tern 계좌는 해외 거래 수수료가 없고, 중간 환율로 환산하며, DCC를 실수로 수락하기 전에 DCC 시도를 알려드립니다. 번 돈은 온전히 당신 것입니다 — 몰랐던 수수료로 깎이지 않습니다.",
          ],
        },
      ],
      faq: [
        {
          q: "동적 통화 환산(DCC)이란 무엇이며 수락해야 하나요?",
          a: "DCC는 ATM이나 카드 단말기가 은행에 환산을 맡기는 대신 판매 시점에 거래를 본국 통화로 환산하는 제안입니다. 거의 항상 거절해야 합니다. DCC 제공업체는 인터뱅크 환율보다 일반적으로 3%~12% 높은 마크업이 있는 환율을 사용합니다. 항상 현지 통화를 선택하세요.",
        },
        {
          q: "해외 거래 수수료와 ATM 수수료는 같은 건가요?",
          a: "아닙니다 — 별도의 청구입니다. ATM 수수료는 ATM 운영자가 기기 사용에 대해 부과하는 고정 금액입니다. 해외 거래 수수료는 카드 발급사가 ATM 인출과 카드 결제 모두 포함한 외국 통화 거래에 부과하는 비율입니다. 단 한 번의 인출로 두 가지 모두 직면할 수 있습니다.",
        },
        {
          q: "수수료 없는 트래블 카드로 전환하면 얼마나 절약할 수 있나요?",
          a: "지출에 따라 다르지만, 월 USD 1,000 상당을 해외에서 3% 해외 거래 수수료와 ATM 수수료 USD 3(주 2회)이 있는 카드로 사용한다면 수수료만으로 월 약 USD 55~60 — 연간 약 USD 650가 됩니다. 수수료 없는 계좌는 이를 거의 제로로 줄여줍니다.",
        },
      ],
    },
    "zh-TW": {
      title: "打工度假如何避免ATM及刷卡手續費",
      description:
        "海外ATM手續費、境外交易費、動態貨幣換算（DCC）加成，以及週末匯率加成，正在悄悄侵蝕你的打工度假收入。這裡說明免費旅行帳戶如何解決這個問題。",
      excerpt:
        "每一次在海外提款或刷卡，都可能觸發多種隱藏費用。這裡告訴你它們分別是什麼——以及如何用正確的帳戶將它們全部消除。",
      sections: [
        {
          paragraphs: [
            "打工度假期間，刷卡和ATM提款的手續費是緩慢且隱形的資金流失。每筆金額看似微小——這裡一塊錢、那裡百分之二——但在12個月的居留期間，你可能在不知不覺中損失了數百美元。了解每種費用的種類，是消除它們的第一步。",
          ],
        },
        {
          heading: "海外ATM手續費",
          paragraphs: [
            "當你在不屬於自己銀行的ATM提款時——在海外幾乎所有的ATM都是如此——那台ATM的運營商通常會針對每次提款收取固定手續費。這筆費用由ATM擁有者設定，而非你的銀行，每筆交易約為USD 2至USD 5（或等值當地貨幣）。",
            "這筆費用是疊加在你自己銀行收取的費用之上的。也就是說，一次提款可能在還沒談到匯率之前，就已產生兩筆獨立的費用。",
          ],
        },
        {
          heading: "境外交易費",
          paragraphs: [
            "許多銀行卡和信用卡會對每筆以外幣進行的交易收取境外交易費——通常為消費金額的1%至3%。無論是ATM提款還是刷卡消費，均適用。",
            "每月CAD 1,000的消費收取3%的境外交易費，就是每月CAD 30消失，一年是CAD 360。打工度假期間，光是這筆費用就可能超過一張機票的費用。",
          ],
        },
        {
          heading: "動態貨幣換算（DCC）— 最狡猾的費用",
          paragraphs: [
            "動態貨幣換算（DCC）是指ATM或刷卡機提供一個選項，讓你當場把交易金額換算成本國貨幣，而不是讓你的銀行來處理換算。這看起來很方便——你可以用自己的貨幣看到費用——但DCC服務商使用的匯率幾乎總是遠比你的銀行所使用的銀行間匯率差。",
            "針對真實DCC交易的研究發現，平均比銀行間匯率高出7至8%的加成，有些甚至超過12%。幾乎在每一種情況下，選擇DCC都會讓你多花錢。當ATM或刷卡機詢問你要用當地貨幣還是本國貨幣付款時，務必選擇當地貨幣——讓你的銀行來換算。",
          ],
        },
        {
          heading: "週末匯率加成",
          paragraphs: [
            "全球外匯市場在週末關閉。銀行和卡片網路仍會在週六和週日處理交易，但由於無法取得即時市場匯率，部分服務商會套用「週末點差」——在匯率上增加一小筆緩衝——以防週一市場重開時匯率波動帶來損失。",
            "並非所有服務商都會收取這個加成，而且通常金額很小（通常不到百分之一），但在大額消費或提款時，這是又一個值得注意的成本。",
          ],
        },
        {
          heading: "免手續費旅行帳戶如何解決問題",
          paragraphs: [
            "一個好的免手續費旅行卡能消除上述所有問題。尋找一個不收境外交易費、不收ATM提款固定手續費（或全額返還）、按真實銀行間中間匯率換算且不加成、不加收週末點差的帳戶。",
            "有了這種帳戶，你可以在全球任何ATM提款，並用卡片支付任何費用，完全不產生上述隱藏成本。整段12個月的打工度假下來，相較於在海外使用本國銀行帳戶，通常能節省數百美元。",
          ],
        },
        {
          heading: "Tern 如何協助你",
          paragraphs: [
            "Tern專為用一種貨幣賺錢、用另一種貨幣花費的打工度假者而打造。Tern帳戶沒有境外交易費，按中間匯率換算，並在你不小心接受DCC之前發出提醒。你賺的錢就是你的——不會被你不知道存在的手續費一點一滴侵蝕。",
          ],
        },
      ],
      faq: [
        {
          q: "什麼是動態貨幣換算（DCC）？我應該接受嗎？",
          a: "DCC是指ATM或刷卡機在付款現場提議將交易換算成你的本國貨幣，而不是由你的銀行處理換算。幾乎在所有情況下，你都應該拒絕。DCC服務商使用的匯率通常比銀行間匯率高出3%至12%。每次都選擇當地貨幣。",
        },
        {
          q: "境外交易費和ATM手續費是同一件事嗎？",
          a: "不一樣——它們是分開收取的費用。ATM手續費是ATM運營商針對使用其機器所收取的固定金額。境外交易費是你的發卡機構針對所有外幣交易（包括ATM提款和刷卡消費）收取的百分比。一次提款可能同時觸發兩種費用。",
        },
        {
          q: "換成免手續費旅行卡能省多少錢？",
          a: "取決於你的消費情況，但如果你每月在海外花費相當於USD 1,000，使用的卡有3%境外交易費和每次USD 3的ATM手續費（每週兩次），光是手續費每月約要USD 55至60——一年約USD 650。免手續費帳戶可將這個數字降至接近零。",
        },
      ],
    },
  },
};
