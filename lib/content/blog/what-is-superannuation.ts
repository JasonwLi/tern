import type { Article } from "../types";

export const article: Article = {
  slug: "what-is-superannuation",
  kind: "post",
  date: "2026-06-03",
  author: "Tern",
  emoji: "🐖",
  accent: "bg-sky-300",
  readMinutes: 5,
  related: ["superannuation-refund-dasp", "working-holiday-tax-refund-australia"],
  sources: [
    {
      label: "Australian Taxation Office — Super guarantee",
      url: "https://www.ato.gov.au/tax-rates-and-codes/key-superannuation-rates-and-thresholds/super-guarantee",
    },
    {
      label: "Australian Taxation Office — Departing Australia superannuation payment (DASP)",
      url: "https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/temporary-residents-and-superannuation/departing-australia-superannuation-payment-dasp",
    },
    {
      label: "Australian Taxation Office — Working holiday makers",
      url: "https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/coming-to-australia/working-holiday-makers",
    },
  ],
  i18n: {
    en: {
      title: "What is superannuation? A guide for working holiday makers",
      description:
        "Superannuation is Australia's employer-paid retirement system — 12% on top of your wages. What WHV holders need to know and how to claim it back.",
      excerpt:
        "Your Australian employer must pay 12% of your wages into a super fund — on top of your salary. You can claim most of it back when you leave via DASP. Here's how it works.",
      sections: [
        {
          paragraphs: [
            "Superannuation — 'super' for short — is Australia's compulsory retirement savings system where your employer pays an extra 12% of your wages directly into a dedicated super fund on your behalf, on top of your take-home pay.",
          ],
        },
        {
          heading: "How super works for employees",
          paragraphs: [
            "The super guarantee (SG) rate for the 2025–26 financial year is 12% of your ordinary time earnings. It is paid by your employer in addition to your wages — it does not come out of your pocket or reduce your take-home pay. From 1 July 2026, employers are also required to pay super on each payday rather than quarterly.",
          ],
          bullets: [
            "Your employer pays 12% of your ordinary time earnings into a super fund",
            "This is separate from and on top of your agreed wage or salary",
            "The money sits in the fund and is invested until you access it",
            "You choose a super fund when you start a job — if you do nothing, your employer picks a default fund",
          ],
        },
        {
          heading: "Why working holiday makers should care",
          paragraphs: [
            "Super is real money. If you earn AUD 1,000 a week for six months, around AUD 3,120 will be sitting in a super fund in your name by the time you leave. As a temporary resident, you cannot access it at retirement age — but you can claim most of it back.",
          ],
        },
        {
          heading: "Claiming super back: the DASP",
          paragraphs: [
            "Once your working holiday visa expires and you have left (or are about to leave) Australia permanently, you can claim your superannuation through the [Departing Australia Superannuation Payment (DASP)](~/guides/superannuation-refund-dasp). For working holiday maker visa holders (subclass 417 and 462), the DASP withholding tax rate is 65% of the taxable component. That is a high tax hit — but the remaining 35% is still real money, and many travellers leave thousands of dollars unclaimed simply because they did not know about DASP.",
          ],
          bullets: [
            "Apply via the ATO's online DASP application system after your visa has ceased",
            "Your super fund processes the payment and withholds the tax",
            "Allow several weeks for processing — the ATO recommends applying after you have left Australia",
            "If you worked across multiple jobs, you may have multiple super accounts",
          ],
        },
        {
          heading: "Avoid the multiple-fund trap",
          paragraphs: [
            "Every time you start a new job without nominating a fund, your employer may open a new default fund for you. Multiple small balances mean multiple sets of admin fees eating into your savings. When you start a new job, provide your existing super fund details on your tax file number declaration so contributions go to one place.",
          ],
        },
        {
          heading: "Where Tern fits",
          paragraphs: [
            "Tern is being built specifically for working holiday travellers. Alongside banking features, we are building tools to help you track your super balance, understand your DASP entitlement, and stay on top of the paperwork — so none of that 12% gets left behind when you move on.",
          ],
        },
      ],
      faq: [
        {
          q: "Do working holiday visa holders get superannuation in Australia?",
          a: "Yes. Any employer who pays you wages in Australia must contribute 12% of your ordinary time earnings into a super fund on your behalf, regardless of your visa type. This is in addition to your wages.",
        },
        {
          q: "How do I claim my super when I leave Australia?",
          a: "You apply for a Departing Australia Superannuation Payment (DASP) through the ATO after your visa has ceased. Working holiday maker visa holders (subclass 417/462) pay a 65% withholding tax on the taxable component, so you receive roughly 35 cents of every dollar in super — still worth claiming.",
        },
      ],
    },
    es: {
      title: "¿Qué es la superannuation? Guía para working holiday",
      description:
        "La superannuation es la jubilación de Australia — 12% adicional al sueldo. Lo que debes saber en tu working holiday y cómo reclamarla.",
      excerpt:
        "Tu empleador australiano debe pagar un 12% adicional de tu sueldo a un fondo de jubilación. Al salir del país, puedes reclamar gran parte de ese dinero mediante el DASP. Así funciona todo.",
      sections: [
        {
          paragraphs: [
            "La superannuation — o simplemente «super» — es el sistema de ahorro obligatorio para la jubilación en Australia: tu empleador paga un 12% adicional de tu salario directamente a un fondo de super a tu nombre, por encima de tu sueldo neto.",
          ],
        },
        {
          heading: "Cómo funciona la super para los empleados",
          paragraphs: [
            "La tasa de garantía de superannuation (SG) para el año fiscal 2025–26 es del 12% de tus ganancias en tiempo ordinario. La paga tu empleador además de tu sueldo, no se descuenta de tu salario. A partir del 1 de julio de 2026, los empleadores también deberán pagar la super en cada día de pago, en lugar de hacerlo trimestralmente.",
          ],
          bullets: [
            "Tu empleador paga el 12% de tus ganancias ordinarias a un fondo de super",
            "Ese dinero es adicional y no se descuenta de tu salario acordado",
            "El dinero permanece en el fondo y se invierte hasta que puedas acceder a él",
            "Al comenzar un trabajo, eliges un fondo; si no haces nada, tu empleador elige uno por defecto",
          ],
        },
        {
          heading: "Por qué les importa a los que tienen visa de trabajo y vacaciones",
          paragraphs: [
            "La super es dinero real. Si ganas AUD 1,000 por semana durante seis meses, al irte habrá aproximadamente AUD 3,120 en un fondo de super a tu nombre. Como residente temporal, no puedes acceder a ese dinero al jubilarte, pero sí puedes reclamar la mayor parte de vuelta.",
          ],
        },
        {
          heading: "Cómo recuperar tu super: el DASP",
          paragraphs: [
            "Una vez que tu visa de vacaciones y trabajo vence y has salido (o estás por salir) de Australia de forma permanente, puedes reclamar tu superannuation mediante el [Departing Australia Superannuation Payment (DASP)](~/guides/superannuation-refund-dasp). Para titulares de visa de trabajadores en vacaciones (subclass 417 y 462), la tasa de retención del DASP es del 65% del componente imponible. Es un impuesto alto, pero el 35% restante sigue siendo dinero real, y muchos viajeros dejan miles de dólares sin reclamar porque simplemente no saben que existe el DASP.",
          ],
          bullets: [
            "Solicítalo a través del sistema DASP en línea de la ATO después de que tu visa haya vencido",
            "Tu fondo de super procesa el pago y retiene el impuesto correspondiente",
            "El proceso puede tardar varias semanas; la ATO recomienda solicitarlo después de salir de Australia",
            "Si trabajaste en varios empleos, es posible que tengas múltiples cuentas de super",
          ],
        },
        {
          heading: "Evita el problema de los fondos múltiples",
          paragraphs: [
            "Cada vez que empiezas un nuevo trabajo sin indicar un fondo, tu empleador puede abrir un fondo por defecto nuevo para ti. Varios saldos pequeños significan varias comisiones de administración que reducen tus ahorros. Al comenzar un trabajo nuevo, proporciona los datos de tu fondo de super existente para que todas las contribuciones vayan al mismo lugar.",
          ],
        },
        {
          heading: "Dónde encaja Tern",
          paragraphs: [
            "Tern está siendo construido específicamente para viajeros con visa de trabajo y vacaciones. Además de sus funciones bancarias, estamos desarrollando herramientas para ayudarte a rastrear tu saldo de super, entender tu derecho al DASP y gestionar el papeleo, para que ese 12% no quede abandonado cuando sigas tu camino.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Los titulares de visa de vacaciones y trabajo tienen derecho a la superannuation en Australia?",
          a: "Sí. Cualquier empleador que te pague un salario en Australia debe contribuir el 12% de tus ganancias ordinarias a un fondo de super a tu nombre, sin importar el tipo de visa. Esto es adicional a tu sueldo.",
        },
        {
          q: "¿Cómo reclamo mi super al salir de Australia?",
          a: "Solicitás el Departing Australia Superannuation Payment (DASP) a través de la ATO después de que tu visa venza. Los titulares de visa de trabajadores en vacaciones (subclass 417/462) pagan una retención del 65% sobre el componente imponible, por lo que recibirás aproximadamente 35 centavos de cada dólar de super — aun así, vale la pena reclamarlo.",
        },
      ],
    },
    ja: {
      title: "スーパーアニュエーションとは？ワーホリ向けわかりやすい解説",
      description:
        "スーパーアニュエーションはオーストラリアの雇用主負担の退職積立制度です。給与に加えて12%が積み立てられます。ワーホリでの受け取り方・DASP申請まで解説。",
      excerpt:
        "オーストラリアの雇用主は給与とは別に12%を超基金に積み立てる義務があります。帰国時にDASPで一部を取り戻せます。仕組みを詳しく解説します。",
      sections: [
        {
          paragraphs: [
            "スーパーアニュエーション（通称「スーパー」）とは、オーストラリアの強制退職積立制度です。雇用主があなたの給与とは別に、給与の12%を専用の超基金（スーパーファンド）にあなたの名義で積み立てます。",
          ],
        },
        {
          heading: "スーパーの仕組み",
          paragraphs: [
            "2025〜26年度のスーパー保証（SG）率は通常勤務時間の賃金の12%です。これは給与に加算されるものであり、あなたの手取りから差し引かれるわけではありません。2026年7月1日からは、雇用主は四半期ごとではなく給料日ごとにスーパーを支払うことが義務付けられます。",
          ],
          bullets: [
            "雇用主があなたの通常賃金の12%をスーパーファンドに拠出する",
            "これは合意した給与に上乗せされるもので、給与から引かれない",
            "積み立てられた資金はファンドで運用される",
            "仕事を始めるときにファンドを選択する。何もしなければ雇用主がデフォルトファンドを選ぶ",
          ],
        },
        {
          heading: "ワーホリにとってスーパーが重要な理由",
          paragraphs: [
            "スーパーは実際のお金です。週AUD 1,000を6ヶ月間稼ぐと、帰国時にはあなた名義のスーパーファンドに約AUD 3,120が積み立てられています。一時滞在者は定年退職後にアクセスできませんが、その多くを取り戻すことができます。",
          ],
        },
        {
          heading: "スーパーを取り戻す方法：DASP",
          paragraphs: [
            "ワーホリビザが失効し、オーストラリアを永久に出国した（または出国する予定の）後、[DASP（Departing Australia Superannuation Payment）](~/guides/superannuation-refund-dasp)を通じてスーパーを請求できます。ワーキングホリデービザ（subclass 417・462）保持者の場合、DASPの源泉徴収税率は課税対象部分の65%です。税負担は高いですが、残りの35%は実際のお金であり、DASPの存在を知らないだけで何千ドルもの受取を逃している旅行者が多くいます。",
          ],
          bullets: [
            "ビザ失効後にATOのオンラインDASPシステムから申請する",
            "スーパーファンドが支払いを処理し、税金を源泉徴収する",
            "処理に数週間かかる場合がある。ATOはオーストラリア出国後に申請することを推奨している",
            "複数の職場で働いた場合、複数のスーパー口座が存在する可能性がある",
          ],
        },
        {
          heading: "複数ファンド問題を避ける",
          paragraphs: [
            "ファンドを指定せずに新しい仕事を始めるたびに、雇用主が新たなデフォルトファンドを開設することがあります。小さな残高が複数存在すると、それぞれに管理手数料がかかり積立金が減っていきます。新しい仕事を始めるときは、既存のスーパーファンドの情報を提供して、全ての拠出が一箇所にまとまるようにしましょう。",
          ],
        },
        {
          heading: "Ternが役立つ理由",
          paragraphs: [
            "TernはワーキングホリデーをされているNativeのために構築されています。銀行機能に加えて、スーパー残高のトラッキング、DASP受取額の把握、書類手続きのサポートツールを開発中です。帰国時にあの12%を置き去りにしなくて済むように。",
          ],
        },
      ],
      faq: [
        {
          q: "ワーキングホリデービザ保持者もオーストラリアでスーパーアニュエーションを受け取れますか？",
          a: "はい。ビザの種類に関わらず、オーストラリアで給与を支払う雇用主は通常賃金の12%をスーパーファンドに拠出する義務があります。これは給与に上乗せされるものです。",
        },
        {
          q: "オーストラリアを出国する際、スーパーをどうやって請求しますか？",
          a: "ビザが失効した後、ATOのDASP（Departing Australia Superannuation Payment）制度を通じて申請します。ワーホリビザ（subclass 417/462）保持者は課税対象部分に65%の源泉徴収税がかかるため、スーパーの約35%を受け取れます。それでも請求する価値は十分あります。",
        },
      ],
    },
    ko: {
      title: "슈퍼애뉴에이션이란? 워홀러를 위한 완벽 가이드",
      description:
        "슈퍼애뉴에이션은 호주의 고용주 부담 퇴직연금으로, 급여 외 12% 적립됩니다. 워홀러가 알아야 할 것과 DASP 환급 방법.",
      excerpt:
        "호주 고용주는 급여와 별도로 임금의 12%를 슈퍼 펀드에 적립해야 합니다. 출국 시 DASP로 일부를 돌려받을 수 있습니다. 작동 방식을 알아보세요.",
      sections: [
        {
          paragraphs: [
            "슈퍼애뉴에이션(줄여서 '슈퍼')은 호주의 강제 퇴직 저축 제도로, 고용주가 당신의 급여에 추가로 임금의 12%를 당신 명의의 전용 슈퍼 펀드에 납부하는 제도입니다.",
          ],
        },
        {
          heading: "슈퍼의 작동 방식",
          paragraphs: [
            "2025~26 회계연도의 슈퍼 보장(SG) 비율은 통상 근무 시간 임금의 12%입니다. 이는 고용주가 급여에 추가로 납부하는 것으로, 당신의 실수령액에서 공제되지 않습니다. 2026년 7월 1일부터는 고용주가 분기별이 아닌 매 급여일에 슈퍼를 납부해야 합니다.",
          ],
          bullets: [
            "고용주가 당신의 통상 임금의 12%를 슈퍼 펀드에 기여한다",
            "이는 합의된 급여에 추가되는 것으로, 급여에서 공제되지 않는다",
            "적립된 돈은 펀드에서 운용된다",
            "취업 시 펀드를 선택할 수 있으며, 선택하지 않으면 고용주가 기본 펀드를 지정한다",
          ],
        },
        {
          heading: "워홀러에게 슈퍼가 중요한 이유",
          paragraphs: [
            "슈퍼는 실제 돈입니다. 주당 AUD 1,000을 6개월간 벌면, 출국 시 당신 명의의 슈퍼 펀드에 약 AUD 3,120이 쌓여 있습니다. 임시 거주자는 은퇴 후에 이 돈에 접근할 수 없지만, 대부분을 돌려받을 수 있습니다.",
          ],
        },
        {
          heading: "슈퍼 환급 방법: DASP",
          paragraphs: [
            "워홀 비자가 만료되고 호주를 영구적으로 출국한 후(또는 출국 예정 시), [DASP(Departing Australia Superannuation Payment)](~/guides/superannuation-refund-dasp)를 통해 슈퍼를 청구할 수 있습니다. 워킹홀리데이 비자(subclass 417 및 462) 소지자의 경우 DASP 원천징수 세율은 과세 대상 금액의 65%입니다. 세금 부담은 높지만 나머지 35%는 실제 돈이며, DASP 존재 자체를 몰라서 수천 달러를 찾아가지 않는 여행자들이 많습니다.",
          ],
          bullets: [
            "비자 만료 후 ATO 온라인 DASP 시스템을 통해 신청한다",
            "슈퍼 펀드가 지급을 처리하고 세금을 원천징수한다",
            "처리에 수 주가 소요될 수 있으며, ATO는 호주 출국 후 신청을 권장한다",
            "여러 직장에서 일했다면 여러 슈퍼 계좌가 있을 수 있다",
          ],
        },
        {
          heading: "여러 펀드 문제 피하기",
          paragraphs: [
            "펀드를 지정하지 않고 새 직장을 시작할 때마다 고용주가 새로운 기본 펀드를 개설할 수 있습니다. 소액 잔액이 여러 개 있으면 각각 관리 수수료가 발생해 저축이 줄어듭니다. 새 직장을 시작할 때 기존 슈퍼 펀드 정보를 제공해 모든 기여금이 한 곳에 모이도록 하세요.",
          ],
        },
        {
          heading: "Tern이 어떻게 도움이 되나요",
          paragraphs: [
            "Tern은 워킹홀리데이 여행자를 위해 특별히 만들어지고 있습니다. 은행 기능과 함께, 슈퍼 잔액 추적, DASP 수령액 파악, 서류 처리를 돕는 도구를 개발 중입니다. 출국 시 그 12%를 그냥 두고 오는 일이 없도록요.",
          ],
        },
      ],
      faq: [
        {
          q: "워킹홀리데이 비자 소지자도 호주에서 슈퍼애뉴에이션을 받을 수 있나요?",
          a: "네. 비자 종류와 관계없이 호주에서 급여를 지급하는 모든 고용주는 통상 임금의 12%를 당신 명의의 슈퍼 펀드에 기여해야 합니다. 이는 급여에 추가되는 금액입니다.",
        },
        {
          q: "호주를 떠날 때 슈퍼를 어떻게 돌려받나요?",
          a: "비자 만료 후 ATO의 DASP(Departing Australia Superannuation Payment) 제도를 통해 신청합니다. 워홀 비자(subclass 417/462) 소지자는 과세 대상 금액에 65%의 원천징수 세금이 부과되므로 슈퍼의 약 35%를 받게 됩니다. 그래도 청구할 가치가 충분합니다.",
        },
      ],
    },
    "zh-TW": {
      title: "什麼是澳洲超級年金？打工度假者完整指南",
      description:
        "超級年金是澳洲雇主負擔的退休儲蓄制度，額外支付薪資的 12% 存入基金。本文介紹打工度假者需要了解的一切，包括如何透過 DASP 領回這筆錢。",
      excerpt:
        "澳洲雇主必須在薪資之外額外支付 12% 到超級基金。離開澳洲時，你可以透過 DASP 申請取回大部分金額。看看這一切如何運作。",
      sections: [
        {
          paragraphs: [
            "超級年金（Super）是澳洲強制性退休儲蓄制度，雇主須在你的薪資之外，額外將薪資的 12% 存入以你名義開立的專屬超級基金，這筆錢不從你的薪水中扣除。",
          ],
        },
        {
          heading: "超級年金的運作方式",
          paragraphs: [
            "2025–26 財政年度的超級保障（SG）比率為一般工時薪資的 12%，由雇主在薪資之外額外支付，不影響你的實領薪資。自 2026 年 7 月 1 日起，雇主須在每個發薪日支付超級年金，而非按季度支付。",
          ],
          bullets: [
            "雇主將你一般工時薪資的 12% 存入超級基金",
            "這筆錢是薪資以外的額外部分，不從你的薪水中扣除",
            "資金留在基金中進行投資，直到你能夠提取",
            "開始新工作時可選擇基金；若未選擇，雇主將指定預設基金",
          ],
        },
        {
          heading: "為何打工度假者應該重視超級年金",
          paragraphs: [
            "超級年金是真正的錢。若你每週賺 AUD 1,000 工作六個月，離開時你名義下的超級基金裡將有約 AUD 3,120。作為臨時居民，你無法在退休年齡領取這筆錢，但你可以在離境時申請取回大部分。",
          ],
        },
        {
          heading: "如何取回超級年金：DASP",
          paragraphs: [
            "當你的打工度假簽證到期並永久離開澳洲後，你可以透過 [DASP（Departing Australia Superannuation Payment，離澳超級年金給付）](~/guides/superannuation-refund-dasp)申請取回你的超級年金。對於持有打工度假簽證（subclass 417 及 462）的申請人，DASP 扣繳稅率為應課稅金額的 65%。稅率雖高，但剩餘的 35% 仍是實際金額，許多旅行者僅因不知道 DASP 的存在，就讓數千澳幣無人認領。",
          ],
          bullets: [
            "簽證失效後，透過 ATO 的線上 DASP 系統提出申請",
            "超級基金處理支付並扣除應繳稅款",
            "處理時間可能需要數週；ATO 建議在離開澳洲後再申請",
            "若曾在多個工作場所任職，可能有多個超級帳戶",
          ],
        },
        {
          heading: "避免多帳戶問題",
          paragraphs: [
            "每次在未指定基金的情況下開始新工作，雇主可能會為你開立新的預設基金。多個小額帳戶意味著多重管理費侵蝕你的儲蓄。開始新工作時，提供現有超級基金資訊，讓所有供款集中到同一個帳戶。",
          ],
        },
        {
          heading: "Tern 如何幫助你",
          paragraphs: [
            "Tern 是專為打工度假旅行者打造的平台。除了銀行功能，我們正在開發追蹤超級年金餘額、了解 DASP 應得金額及協助處理文件的工具，確保你離開時不會把那 12% 留在澳洲。",
          ],
        },
      ],
      faq: [
        {
          q: "持打工度假簽證在澳洲工作，也能獲得超級年金嗎？",
          a: "可以。無論簽證類型為何，在澳洲支付薪資的雇主都必須將你一般工時薪資的 12% 存入你的超級基金。這筆錢是薪資以外的額外部分。",
        },
        {
          q: "離開澳洲時，如何申請取回超級年金？",
          a: "簽證失效後，透過 ATO 的 DASP（Departing Australia Superannuation Payment）制度提出申請。打工度假簽證（subclass 417/462）持有人的應課稅金額將被扣除 65% 稅款，因此你將取回約 35% 的超級年金——仍值得申請。",
        },
      ],
    },
    de: {
      title: "Was ist Superannuation? Ratgeber für Work and Travel Australien",
      description:
        "Superannuation ist Australiens Pflichtrentensystem — dein Arbeitgeber zahlt 12% extra. Was du als Work-and-Travel-Visainhaber wissen musst und wie du das Geld per DASP zurückbekommst.",
      excerpt:
        "Dein australischer Arbeitgeber zahlt zusätzlich zu deinem Lohn 12% in einen Superannuation-Fonds ein. Wenn du Australien verlässt, kannst du den Großteil per DASP zurückfordern. So funktioniert das.",
      sections: [
        {
          paragraphs: [
            "Superannuation — kurz \"Super\" — ist Australiens verpflichtendes Altersvorsorgesystem. Dein Arbeitgeber zahlt zusätzlich zu deinem Nettolohn 12% deines Gehalts direkt in einen eigens für dich eingerichteten Super-Fonds ein.",
          ],
        },
        {
          heading: "So funktioniert Super für Arbeitnehmer",
          paragraphs: [
            "Der Super Guarantee (SG)-Satz beträgt im Steuerjahr 2025–26 genau 12% deines Grundlohns. Dein Arbeitgeber zahlt diesen Betrag zusätzlich zu deinem Gehalt — er wird nicht von deinem Lohn abgezogen. Ab dem 1. Juli 2026 sind Arbeitgeber außerdem verpflichtet, Super bei jeder Lohnzahlung zu überweisen, anstatt nur quartalsweise.",
          ],
          bullets: [
            "Dein Arbeitgeber zahlt 12% deines Grundlohns in einen Super-Fonds ein",
            "Dieser Betrag kommt zusätzlich zu deinem vereinbarten Lohn oder Gehalt",
            "Das Geld wird im Fonds angelegt, bis du es abrufst",
            "Beim Jobbeginn wählst du einen Fonds — tust du nichts, wählt dein Arbeitgeber einen Standardfonds",
          ],
        },
        {
          heading: "Warum Super für Work and Travel so wichtig ist",
          paragraphs: [
            "Super ist echtes Geld. Wer sechs Monate lang AUD 1.000 pro Woche verdient, hat beim Abflug rund AUD 3.120 in einem Super-Fonds auf dem eigenen Namen. Als temporärer Aufenthalter kommst du nicht im Rentenalter daran — aber du kannst den Großteil zurückfordern.",
          ],
        },
        {
          heading: "Super zurückbekommen: der DASP",
          paragraphs: [
            "Sobald dein Working-Holiday-Visum abgelaufen ist und du Australien dauerhaft verlassen hast (oder verlassen wirst), kannst du deine Superannuation über den [Departing Australia Superannuation Payment (DASP)](~/guides/superannuation-refund-dasp) beantragen. Für Inhaber eines Working-Holiday-Visums (subclass 417 und 462) beträgt die DASP-Quellensteuer 65% der steuerpflichtigen Komponente. Das ist ein hoher Steuerabzug — aber die verbleibenden 35% sind dennoch bares Geld, und viele Reisende lassen Tausende von Dollar liegen, weil sie den DASP schlicht nicht kennen.",
          ],
          bullets: [
            "Antrag nach Ablauf des Visums über das Online-DASP-System der ATO stellen",
            "Der Super-Fonds bearbeitet die Auszahlung und behält die Steuer ein",
            "Die Bearbeitung dauert einige Wochen — die ATO empfiehlt, den Antrag nach der Ausreise zu stellen",
            "Wer in mehreren Jobs gearbeitet hat, kann mehrere Super-Konten besitzen",
          ],
        },
        {
          heading: "Die Mehrfachkonto-Falle vermeiden",
          paragraphs: [
            "Jedes Mal, wenn du einen neuen Job ohne Fondsangabe beginnst, kann dein Arbeitgeber einen neuen Standardfonds für dich eröffnen. Mehrere kleine Guthaben bedeuten mehrfache Verwaltungsgebühren, die deine Ersparnisse auffressen. Wenn du eine neue Stelle antritst, gib deine bestehenden Super-Fonds-Daten an, damit alle Beiträge an einem Ort landen.",
          ],
        },
        {
          heading: "Wo Tern ins Spiel kommt",
          paragraphs: [
            "Tern wird speziell für Work-and-Travel-Reisende entwickelt. Neben den Banking-Funktionen bauen wir Tools, mit denen du dein Super-Guthaben im Blick behältst, deinen DASP-Anspruch verstehst und den Papierkram erledigst — damit du diese 12% nicht zurücklässt, wenn du weiterzieht.",
          ],
        },
      ],
      faq: [
        {
          q: "Haben Work-and-Travel-Visainhaber in Australien Anspruch auf Superannuation?",
          a: "Ja. Jeder Arbeitgeber, der dir in Australien Lohn zahlt, muss unabhängig von deiner Visaart 12% deines Grundlohns in einen Super-Fonds auf deinen Namen einzahlen. Dieser Betrag kommt zusätzlich zu deinem Lohn.",
        },
        {
          q: "Wie bekomme ich meine Super zurück, wenn ich Australien verlasse?",
          a: "Nach Ablauf deines Visums stellst du einen Antrag auf Departing Australia Superannuation Payment (DASP) über die ATO. Für Working-Holiday-Visainhaber (subclass 417/462) fällt eine Quellensteuer von 65% auf die steuerpflichtige Komponente an — du erhältst also ungefähr 35 Cent pro Dollar in Super. Es lohnt sich trotzdem, den Antrag zu stellen.",
        },
      ],
    },
    fr: {
      title: "C'est quoi la superannuation ? Guide pour les pvtistes en Australie",
      description:
        "La superannuation est le système de retraite australien — 12% en plus de ton salaire payés par l'employeur. Ce que tout pvtiste doit savoir et comment récupérer cet argent via le DASP.",
      excerpt:
        "Ton employeur australien doit verser 12% de ton salaire dans un fonds de retraite, en plus de ta rémunération. En partant, tu peux en récupérer une grande partie via le DASP. Voilà comment ça marche.",
      sections: [
        {
          paragraphs: [
            "La superannuation — ou simplement «super» — est le système d'épargne-retraite obligatoire en Australie : ton employeur verse 12% supplémentaires de ton salaire directement dans un fonds dédié à ton nom, en plus de ta paye nette.",
          ],
        },
        {
          heading: "Comment fonctionne la super pour les salariés",
          paragraphs: [
            "Le taux de garantie de superannuation (SG) pour l'exercice fiscal 2025–26 est de 12% de tes revenus en temps ordinaire. Il est versé par ton employeur en plus de ton salaire — il ne vient pas de ta poche et ne réduit pas ton salaire net. À partir du 1er juillet 2026, les employeurs seront également tenus de payer la super à chaque jour de paie plutôt que trimestriellement.",
          ],
          bullets: [
            "Ton employeur verse 12% de tes revenus ordinaires dans un fonds de super",
            "Ce montant s'ajoute à ton salaire convenu et n'en est pas déduit",
            "L'argent reste dans le fonds et est investi jusqu'à ce que tu y accèdes",
            "Tu choisis un fonds en commençant un emploi — si tu ne fais rien, ton employeur en choisit un par défaut",
          ],
        },
        {
          heading: "Pourquoi la super compte pour les pvtistes",
          paragraphs: [
            "La super, c'est de l'argent bien réel. Si tu gagnes AUD 1 000 par semaine pendant six mois, environ AUD 3 120 seront dans un fonds de super à ton nom au moment de partir. En tant que résident temporaire, tu ne peux pas y accéder à l'âge de la retraite — mais tu peux en récupérer la majeure partie.",
          ],
        },
        {
          heading: "Récupérer sa super : le DASP",
          paragraphs: [
            "Une fois ton visa PVT expiré et après avoir quitté (ou être sur le point de quitter) l'Australie définitivement, tu peux demander le remboursement de ta superannuation via le [Departing Australia Superannuation Payment (DASP)](~/guides/superannuation-refund-dasp). Pour les titulaires d'un visa working holiday maker (subclass 417 et 462), le taux de retenue DASP est de 65% de la composante imposable. C'est un impôt élevé — mais les 35% restants représentent quand même de l'argent réel, et beaucoup de pvtistes laissent des milliers de dollars sur la table simplement parce qu'ils ignorent l'existence du DASP.",
          ],
          bullets: [
            "Fais ta demande via le système DASP en ligne de l'ATO après l'expiration de ton visa",
            "Ton fonds de super traite le paiement et retient l'impôt",
            "Compte plusieurs semaines de traitement — l'ATO recommande de faire la demande après avoir quitté l'Australie",
            "Si tu as travaillé dans plusieurs emplois, tu peux avoir plusieurs comptes de super",
          ],
        },
        {
          heading: "Éviter le piège des multiples fonds",
          paragraphs: [
            "Chaque fois que tu commences un nouveau travail sans désigner de fonds, ton employeur peut en ouvrir un nouveau par défaut. Plusieurs petits soldes signifient plusieurs séries de frais de gestion qui grèvent ton épargne. Quand tu prends un nouveau poste, transmets les coordonnées de ton fonds de super existant pour que toutes les cotisations aillent au même endroit.",
          ],
        },
        {
          heading: "Le rôle de Tern",
          paragraphs: [
            "Tern est conçu spécifiquement pour les voyageurs en PVT. En plus des fonctionnalités bancaires, nous développons des outils pour t'aider à suivre ton solde de super, comprendre ton droit au DASP et gérer les démarches administratives — afin que ces 12% ne soient pas laissés de côté quand tu repars.",
          ],
        },
      ],
      faq: [
        {
          q: "Les titulaires d'un visa working holiday ont-ils droit à la superannuation en Australie ?",
          a: "Oui. Tout employeur qui te verse un salaire en Australie est tenu de cotiser 12% de tes revenus ordinaires dans un fonds de super à ton nom, quel que soit ton type de visa. Ce montant s'ajoute à ton salaire.",
        },
        {
          q: "Comment récupérer ma super en quittant l'Australie ?",
          a: "Tu fais une demande de Departing Australia Superannuation Payment (DASP) auprès de l'ATO après l'expiration de ton visa. Les titulaires d'un visa working holiday maker (subclass 417/462) subissent une retenue à la source de 65% sur la composante imposable, ce qui te laisse environ 35 centimes par dollar de super — ça vaut tout de même la peine de le demander.",
        },
      ],
    },
    it: {
      title: "Cos'è la superannuation? Guida per chi fa working holiday in Australia",
      description:
        "La superannuation è il sistema pensionistico australiano — il datore di lavoro versa il 12% in più del tuo stipendio. Tutto ciò che devi sapere per il working holiday e come recuperarla con il DASP.",
      excerpt:
        "Il tuo datore di lavoro australiano deve versare il 12% del tuo stipendio in un fondo previdenziale, in aggiunta alla tua retribuzione. Quando parti puoi recuperarne gran parte tramite il DASP. Ecco come funziona.",
      sections: [
        {
          paragraphs: [
            "La superannuation — o semplicemente \"super\" — è il sistema australiano di risparmio previdenziale obbligatorio: il tuo datore di lavoro versa un extra del 12% del tuo stipendio direttamente in un fondo dedicato a tuo nome, oltre alla tua paga netta.",
          ],
        },
        {
          heading: "Come funziona la super per i dipendenti",
          paragraphs: [
            "L'aliquota della super guarantee (SG) per l'anno fiscale 2025–26 è pari al 12% dei tuoi guadagni in orario ordinario. È pagata dal datore di lavoro in aggiunta al tuo stipendio — non viene detratta dalla tua busta paga. Dal 1° luglio 2026, i datori di lavoro saranno anche obbligati a versare la super a ogni giorno di paga anziché trimestralmente.",
          ],
          bullets: [
            "Il tuo datore di lavoro versa il 12% dei tuoi guadagni ordinari in un fondo super",
            "Questo importo si aggiunge al tuo stipendio concordato e non viene sottratto da esso",
            "Il denaro resta nel fondo e viene investito fino a quando non puoi accedervi",
            "Scegli un fondo quando inizi un lavoro — se non fai nulla, il datore di lavoro sceglie un fondo predefinito",
          ],
        },
        {
          heading: "Perché la super è importante per chi fa working holiday",
          paragraphs: [
            "La super è denaro reale. Se guadagni AUD 1.000 a settimana per sei mesi, al momento di partire avrai circa AUD 3.120 depositati in un fondo super a tuo nome. Come residente temporaneo non puoi accedervi all'età pensionabile — ma puoi recuperarne la maggior parte.",
          ],
        },
        {
          heading: "Come recuperare la super: il DASP",
          paragraphs: [
            "Una volta scaduto il tuo visto working holiday e dopo aver lasciato (o essere in procinto di lasciare) definitivamente l'Australia, puoi richiedere la tua superannuation tramite il [Departing Australia Superannuation Payment (DASP)](~/guides/superannuation-refund-dasp). Per i titolari di visto working holiday maker (subclass 417 e 462), l'aliquota di ritenuta DASP è del 65% della componente imponibile. È un prelievo fiscale elevato — ma il 35% restante è comunque denaro reale, e molti viaggiatori lasciano migliaia di dollari non reclamati semplicemente perché non sanno che il DASP esiste.",
          ],
          bullets: [
            "Fai domanda tramite il sistema DASP online dell'ATO dopo la scadenza del tuo visto",
            "Il fondo super elabora il pagamento e trattiene l'imposta",
            "L'elaborazione richiede alcune settimane — l'ATO consiglia di fare domanda dopo aver lasciato l'Australia",
            "Se hai lavorato in più lavori, potresti avere più conti super",
          ],
        },
        {
          heading: "Evitare la trappola dei fondi multipli",
          paragraphs: [
            "Ogni volta che inizi un nuovo lavoro senza indicare un fondo, il tuo datore di lavoro potrebbe aprirti un nuovo fondo predefinito. Più saldi di piccole dimensioni significano più commissioni di gestione che erodono i tuoi risparmi. Quando inizi un nuovo lavoro, fornisci i dati del tuo fondo super esistente in modo che tutti i contributi vadano nello stesso posto.",
          ],
        },
        {
          heading: "Il ruolo di Tern",
          paragraphs: [
            "Tern è pensato specificamente per i viaggiatori in working holiday. Insieme alle funzionalità bancarie, stiamo costruendo strumenti per aiutarti a monitorare il saldo della tua super, capire il tuo diritto al DASP e gestire le pratiche burocratiche — così quel 12% non rimarrà indietro quando ripartirai.",
          ],
        },
      ],
      faq: [
        {
          q: "I titolari di visto working holiday hanno diritto alla superannuation in Australia?",
          a: "Sì. Qualsiasi datore di lavoro che ti paghi uno stipendio in Australia è tenuto a versare il 12% dei tuoi guadagni ordinari in un fondo super a tuo nome, indipendentemente dal tipo di visto. Questo importo si aggiunge al tuo stipendio.",
        },
        {
          q: "Come recupero la mia super quando lascio l'Australia?",
          a: "Fai domanda per il Departing Australia Superannuation Payment (DASP) tramite l'ATO dopo la scadenza del tuo visto. I titolari di visto working holiday maker (subclass 417/462) subiscono una ritenuta del 65% sulla componente imponibile, quindi riceverai circa 35 centesimi per ogni dollaro di super — vale comunque la pena di richiederlo.",
        },
      ],
    },
  },
};
