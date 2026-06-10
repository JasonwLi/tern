import type { Article } from "../types";

export const article: Article = {
  slug: "working-holiday-tax-refund-australia",
  kind: "guide",
  date: "2026-05-19",
  emoji: "🧾",
  accent: "bg-coral-300",
  readMinutes: 7,
  related: ["what-is-a-tfn", "superannuation-refund-dasp"],
  sources: [
    {
      label: "Australian Taxation Office (ATO) — Working holiday makers",
      url: "https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/coming-to-australia/working-holiday-makers",
    },
    {
      label: "Australian Taxation Office (ATO) — Apply for a TFN",
      url: "https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn/foreign-passport-holders-permanent-migrants-and-temporary-visitors-tfn-application",
    },
  ],
  i18n: {
    en: {
      title: "The 45% backpacker tax — and how to claim your refund",
      description:
        "No TFN means 45% withholding in Australia. How the backpacker tax works, how to get your TFN, and how to claim your tax refund (avg ~$2,600).",
      excerpt:
        "No tax file number means your boss withholds a brutal 45%. Here's how to avoid it — and claim back the average ~$2,600 refund when you leave.",
      sections: [
        {
          paragraphs: [
            "Tax is where working holiday makers quietly lose the most money — first to over-withholding, then by never claiming a refund. The good news: most of it is avoidable, and a lot of it is refundable.",
          ],
        },
        {
          heading: "Why you might be taxed 45%",
          paragraphs: [
            "If you start work without giving your employer a [tax file number (TFN)](~/blog/what-is-a-tfn), they're legally required to withhold tax at the top marginal rate — 45% — on everything you earn. Apply for your TFN as soon as you arrive (it's free) and give it to your employer to be taxed correctly.",
            "With a TFN, working holiday makers are taxed at 15% on the first $45,000 of earnings, which is far lower than 45%.",
          ],
        },
        {
          heading: "How to get a tax file number (TFN)",
          bullets: [
            "Apply free online through the Australian Taxation Office (ATO) once you're in Australia",
            "You'll need your passport and visa details",
            "It usually arrives within about two weeks",
            "Give it to every employer so you're taxed at the working-holiday rate, not 45%",
          ],
        },
        {
          heading: "Claiming your tax refund when you leave",
          paragraphs: [
            "At the end of the financial year (or when you leave Australia for good), you lodge a tax return. If too much was withheld — very common if you started a job before your TFN came through — you get the difference back. The average backpacker refund is around $2,600.",
            "Keep every payslip and your income statement. You'll need them to lodge accurately and to prove what you earned and what was withheld.",
          ],
        },
        {
          heading: "Don't confuse tax with superannuation",
          paragraphs: [
            "Your tax refund and your superannuation (retirement savings your employer pays on top of wages) are two separate pots of money. You claim super back separately when you leave — see our DASP guide.",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Tern prompts your TFN application at signup, stores your payslips in one place so lodging a return is painless, and flags if your employer is withholding the wrong rate — so you keep more of what you earn and reclaim what's yours.",
          ],
        },
      ],
      faq: [
        {
          q: "Why am I being taxed 45% on my working holiday?",
          a: "Because you haven't given your employer a tax file number. Without a TFN, the law requires withholding at the top 45% rate. Apply for a TFN and provide it to drop to the 15% working-holiday rate.",
        },
        {
          q: "How much is the average working holiday tax refund?",
          a: "Around $2,600, though it depends on how much you earned and how much was withheld. Over-withholding before your TFN was processed is the most common reason for a large refund.",
        },
        {
          q: "When can I claim my tax back?",
          a: "After the financial year ends (30 June) or when you leave Australia permanently. You lodge a tax return with the ATO using your income statement and payslips.",
        },
      ],
    },
    es: {
      title: "El impuesto del 45% en Australia y cómo recuperar tu dinero",
      description:
        "Sin TFN en Australia, retienen hasta el 45%. Cómo funciona el impuesto backpacker, cómo obtener el TFN y reclamar la devolución (promedio ~$2,600).",
      excerpt:
        "Sin número de archivo fiscal, tu empleador te retiene un brutal 45%. Acá te contamos cómo evitarlo — y cómo recuperar el promedio de ~$2,600 cuando te vayas.",
      sections: [
        {
          paragraphs: [
            "Los impuestos son donde los trabajadores en visa working holiday pierden más plata en silencio — primero por retención excesiva, y luego por no reclamar la devolución. La buena noticia: la mayor parte se puede evitar, y mucho se puede recuperar. Si eres de Latinoamérica (Chile, Argentina, Perú, Uruguay, Ecuador…), tu visa es la Work and Holiday (subclase 462) — a efectos de impuestos y TFN funciona exactamente igual que la 417.",
          ],
        },
        {
          heading: "Por qué te pueden cobrar el 45%",
          paragraphs: [
            "Si empiezas a trabajar sin darle a tu empleador un [número de archivo fiscal (TFN)](~/blog/what-is-a-tfn), la ley lo obliga a retener impuestos a la tasa máxima del 45% sobre todo lo que ganas. Solicita tu TFN apenas llegues (es gratis) y dáselo a tu empleador para que te cobren la tasa correcta.",
            "Con un TFN, los trabajadores en visa working holiday pagan 15% sobre los primeros $45,000 de ganancias, que es muchísimo menos que el 45%.",
          ],
        },
        {
          heading: "Cómo obtener un número de archivo fiscal (TFN)",
          bullets: [
            "Solicítalo gratis en línea a través de la Oficina de Impuestos de Australia (ATO) una vez que estés en el país",
            "Vas a necesitar tu pasaporte y los datos de tu visa",
            "Generalmente llega en unas dos semanas",
            "Dáselo a cada empleador para que te cobren la tasa working holiday y no el 45%",
          ],
        },
        {
          heading: "Cómo reclamar la devolución de impuestos al irte",
          paragraphs: [
            "Al final del año fiscal (o cuando sales definitivamente de Australia), presentas una declaración de impuestos. Si te retuvieron de más — algo muy común si empezaste a trabajar antes de que llegara tu TFN — te devuelven la diferencia. El reembolso promedio para backpackers es de alrededor de $2,600.",
            "Guarda todos tus recibos de sueldo y tu declaración de ingresos. Los vas a necesitar para presentar la declaración con precisión y probar cuánto ganaste y cuánto te retuvieron.",
          ],
        },
        {
          heading: "No confundas impuestos con superannuation",
          paragraphs: [
            "Tu devolución de impuestos y tu superannuation (los ahorros para el retiro que tu empleador paga además del sueldo) son dos fondos separados. Reclamas el super por separado cuando te vayas — mira nuestra guía sobre DASP.",
          ],
        },
        {
          heading: "Cómo te ayuda Tern",
          paragraphs: [
            "Tern te recuerda solicitar el TFN al registrarte, guarda tus recibos de sueldo en un solo lugar para que presentar la declaración sea fácil, y te avisa si tu empleador está reteniendo la tasa incorrecta — para que te quedes con más de lo que ganas y recuperes lo que es tuyo.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Por qué me cobran el 45% en mi visa working holiday?",
          a: "Porque no le diste a tu empleador un número de archivo fiscal. Sin un TFN, la ley exige retención a la tasa máxima del 45%. Solicita un TFN y entrégeselo para bajar a la tasa working holiday del 15%.",
        },
        {
          q: "¿Cuánto es el reembolso promedio de impuestos en la visa working holiday?",
          a: "Alrededor de $2,600, aunque depende de cuánto ganaste y cuánto te retuvieron. La retención excesiva antes de que se procesara tu TFN es la razón más común de un reembolso grande.",
        },
        {
          q: "¿Cuándo puedo reclamar la devolución de impuestos?",
          a: "Después de que termine el año fiscal (30 June) o cuando salgas de Australia definitivamente. Presentas una declaración de impuestos ante la ATO usando tu declaración de ingresos y tus recibos de sueldo.",
        },
      ],
    },
    ja: {
      title: "バックパッカー税45%の仕組みと、税金を取り戻す方法",
      description:
        "TFNなしだと最大45%が源泉徴収されます。バックパッカー税の仕組み・TFN取得・平均約$2,600の還付申請方法を解説。",
      excerpt:
        "TFNがないと雇用主に45%もの税金を天引きされます。その回避方法と、帰国前に平均約$2,600を取り戻す方法をわかりやすく説明します。",
      sections: [
        {
          paragraphs: [
            "ワーホリで最もお金を損しやすいのが税金です。過剰な天引きと、還付請求を忘れることで、気づかないうちに大きな損失になります。でも朗報があります。多くの場合は回避できるし、かなりの金額が戻ってくるのです。",
          ],
        },
        {
          heading: "なぜ45%も課税されるのか",
          paragraphs: [
            "雇用主に[TFN（税務番号）](~/blog/what-is-a-tfn)を伝えずに働き始めると、法律により最高税率である45%が全収入から天引きされます。オーストラリア到着後すぐにTFNを申請し（無料）、雇用主に伝えることで正しい税率が適用されます。",
            "TFNを持つワーホリメーカーは、最初の$45,000の収入に対して15%の税率が適用されます。45%と比べると、大きな差です。",
          ],
        },
        {
          heading: "TFN（税務番号）の取得方法",
          bullets: [
            "オーストラリア入国後、ATO（オーストラリア税務局）のウェブサイトから無料でオンライン申請できます",
            "パスポートとビザの情報が必要です",
            "通常、約2週間で届きます",
            "すべての雇用主に番号を伝えることで、45%ではなくワーホリ税率が適用されます",
          ],
        },
        {
          heading: "帰国時の税金還付手続き",
          paragraphs: [
            "会計年度末（または永久にオーストラリアを離れるとき）に確定申告を行います。TFNが届く前に働いていたなどの理由で過剰に天引きされていた場合、差額が還付されます。バックパッカーの平均還付額は約$2,600です。",
            "給与明細と収入証明書はすべて保管しておきましょう。正確な申告と、収入・天引き額の証明に必要になります。",
          ],
        },
        {
          heading: "税金とスーパーアニュエーションを混同しないように",
          paragraphs: [
            "税金の還付と、スーパーアニュエーション（雇用主が給与に上乗せして支払う退職積立金）は別々の制度です。スーパーは帰国時に別途請求します。DASPガイドをご覧ください。",
          ],
        },
        {
          heading: "Ternができること",
          paragraphs: [
            "Ternはサインアップ時にTFN申請を促し、給与明細を一か所にまとめて確定申告を楽にし、雇用主が誤った税率で天引きしていないかチェックします。稼いだお金をしっかり手元に残し、受け取るべきお金を取り戻しましょう。",
          ],
        },
      ],
      faq: [
        {
          q: "ワーホリなのに45%も税金を引かれているのはなぜですか？",
          a: "雇用主にTFNを提出していないからです。TFNがない場合、法律により最高税率45%での天引きが義務付けられます。TFNを申請して提出すれば、ワーホリ税率の15%に下がります。",
        },
        {
          q: "ワーホリの税金還付の平均額はいくらですか？",
          a: "約$2,600ですが、収入額や天引き額によって異なります。TFNが届く前の過剰天引きが、高額還付の最も一般的な理由です。",
        },
        {
          q: "いつ税金を請求できますか？",
          a: "会計年度終了後（30 June）またはオーストラリアを永久に離れるときです。収入証明書と給与明細を使ってATOに確定申告を行います。",
        },
      ],
    },
    ko: {
      title: "워홀 세금 45% — 환급받는 방법 완벽 가이드",
      description:
        "호주 워홀에서 TFN 없으면 최대 45% 공제. 백패커 세금 제도, TFN 발급, 평균 $2,600 환급 신청법 정리.",
      excerpt:
        "TFN이 없으면 고용주가 무려 45%를 공제합니다. 이를 피하는 방법과, 출국 전에 평균 약 $2,600을 돌려받는 방법을 알려드립니다.",
      sections: [
        {
          paragraphs: [
            "워홀러들이 가장 많은 돈을 잃는 곳이 바로 세금입니다. 과다 공제와 환급 미신청으로 모르는 사이에 큰 손실이 생깁니다. 그러나 좋은 소식이 있습니다. 대부분은 피할 수 있고, 상당한 금액을 돌려받을 수 있습니다.",
          ],
        },
        {
          heading: "왜 45%나 세금을 내야 하나요?",
          paragraphs: [
            "[TFN(세금 파일 번호)](~/blog/what-is-a-tfn)을 고용주에게 제출하지 않고 일을 시작하면, 법에 따라 모든 수입의 최고 세율인 45%가 원천징수됩니다. 호주 도착 즉시 TFN을 신청하고(무료) 고용주에게 제출해 올바른 세율을 적용받으세요.",
            "TFN이 있는 워킹홀리데이 비자 소지자는 첫 $45,000 수입에 대해 15%의 세율이 적용됩니다. 45%에 비해 훨씬 낮은 비율입니다.",
          ],
        },
        {
          heading: "TFN(세금 파일 번호) 발급 방법",
          bullets: [
            "호주 입국 후 ATO(호주 세무청) 웹사이트에서 무료로 온라인 신청 가능합니다",
            "여권과 비자 정보가 필요합니다",
            "보통 약 2주 내에 발급됩니다",
            "모든 고용주에게 번호를 제출해야 45%가 아닌 워홀 세율이 적용됩니다",
          ],
        },
        {
          heading: "출국 시 세금 환급 신청하기",
          paragraphs: [
            "회계연도 말(또는 호주를 완전히 떠날 때) 세금 신고서를 제출합니다. TFN이 처리되기 전에 일을 시작한 경우처럼 세금이 과다 공제된 경우, 차액을 환급받을 수 있습니다. 워홀러 평균 환급액은 약 $2,600입니다.",
            "급여 명세서와 소득 증명서를 모두 보관하세요. 정확한 세금 신고와 소득 및 공제액 증명에 필요합니다.",
          ],
        },
        {
          heading: "세금과 수퍼애뉴에이션을 혼동하지 마세요",
          paragraphs: [
            "세금 환급과 수퍼애뉴에이션(고용주가 임금 외에 추가로 납입하는 퇴직연금)은 별개의 제도입니다. 수퍼는 출국 시 별도로 신청합니다. DASP 가이드를 참고하세요.",
          ],
        },
        {
          heading: "Tern이 도와드립니다",
          paragraphs: [
            "Tern은 가입 시 TFN 신청을 안내하고, 급여 명세서를 한 곳에 저장해 세금 신고를 쉽게 만들어 주며, 고용주가 잘못된 세율을 적용하고 있는지 알려줍니다. 번 돈을 최대한 지키고, 돌려받아야 할 돈을 찾아가세요.",
          ],
        },
      ],
      faq: [
        {
          q: "워킹홀리데이인데 왜 45%나 세금을 내고 있나요?",
          a: "고용주에게 TFN을 제출하지 않았기 때문입니다. TFN이 없으면 법에 따라 최고 세율인 45%로 원천징수됩니다. TFN을 신청해 제출하면 워홀 세율인 15%로 낮아집니다.",
        },
        {
          q: "워킹홀리데이 세금 환급 평균 금액은 얼마인가요?",
          a: "약 $2,600이지만, 수입액과 공제액에 따라 다릅니다. TFN 처리 전 과다 공제가 높은 환급액의 가장 흔한 이유입니다.",
        },
        {
          q: "언제 세금을 환급받을 수 있나요?",
          a: "회계연도가 끝난 후(30 June) 또는 호주를 완전히 떠날 때입니다. 소득 증명서와 급여 명세서를 이용해 ATO에 세금 신고서를 제출하면 됩니다.",
        },
      ],
    },
    "zh-TW": {
      title: "打工度假澳洲45%稅率說明 — 如何申請退稅",
      description:
        "在澳洲打工度假沒有TFN的話，最高會被扣45%的稅。這裡說明背包客稅制的運作方式、如何申請稅號，以及如何申請平均約$2,600的退稅。",
      excerpt:
        "沒有稅號，雇主就會扣走高達45%的薪資。這裡告訴你如何避開這個狀況，以及離開前如何取回平均約$2,600的退稅。",
      sections: [
        {
          paragraphs: [
            "稅務是打工度假者悄悄損失最多錢的環節——先是被過度扣繳，然後離開時又沒有申請退稅。好消息是：大部分情況都可以避免，而且有相當多的錢可以退回來。",
          ],
        },
        {
          heading: "為什麼你可能被課45%的稅",
          paragraphs: [
            "如果你在沒有提供雇主[TFN（稅號）](~/blog/what-is-a-tfn)的情況下開始工作，法律要求雇主以最高邊際稅率45%扣繳你所有收入的稅款。抵達澳洲後請盡快申請TFN（免費），並提交給雇主，才能適用正確的稅率。",
            "持有TFN的打工度假者，前$45,000收入適用15%的稅率，遠低於45%。",
          ],
        },
        {
          heading: "如何申請TFN（稅號）",
          bullets: [
            "抵達澳洲後，透過ATO（澳洲稅務局）官網免費線上申請",
            "需要準備護照及簽證資料",
            "通常約兩週內會收到",
            "務必將稅號提交給每位雇主，才能適用打工度假稅率，而非45%",
          ],
        },
        {
          heading: "離境時如何申請退稅",
          paragraphs: [
            "在財政年度結束時（或永久離開澳洲時），你需要申報稅務。如果被扣繳過多——在TFN申請期間就開始工作的話非常常見——你可以取回差額。背包客的平均退稅金額約為$2,600。",
            "請保存所有薪資單和收入證明。申報時需要這些資料來確認你的收入及扣繳金額。",
          ],
        },
        {
          heading: "不要把退稅和退休金搞混",
          paragraphs: [
            "退稅和超級退休金（superannuation，雇主在薪資以外額外繳納的退休儲蓄）是兩件不同的事。超級退休金需要在離開澳洲時另外申請——請參考我們的DASP指南。",
          ],
        },
        {
          heading: "Tern 如何協助你",
          paragraphs: [
            "Tern在你註冊時提示申請TFN、將薪資單集中保存讓申報退稅輕鬆無痛，並且在雇主扣錯稅率時即時提醒你——讓你留住更多血汗錢，取回屬於你的退稅。",
          ],
        },
      ],
      faq: [
        {
          q: "為什麼我打工度假時被扣了45%的稅？",
          a: "因為你沒有提供雇主TFN。沒有TFN，法律規定必須以最高45%的稅率扣繳。申請TFN並提交後，就能降至打工度假稅率15%。",
        },
        {
          q: "打工度假的平均退稅金額是多少？",
          a: "大約$2,600，但視你的收入及被扣繳的金額而定。在TFN處理完成前就被過度扣繳，是退稅金額偏高最常見的原因。",
        },
        {
          q: "什麼時候可以申請退稅？",
          a: "財政年度結束後（30 June）或永久離開澳洲時。使用收入證明和薪資單向ATO申報稅務即可。",
        },
      ],
    },
    de: {
      title: "45% Backpacker-Steuer in Australien — so holst du dir Geld zurück",
      description:
        "Ohne TFN werden in Australien 45% einbehalten. Wie die Backpacker-Steuer funktioniert, wie du eine TFN beantragst und deine Steuerrückerstattung (ca. $2.600) einfordern kannst.",
      excerpt:
        "Ohne Steuernummer behält dein Arbeitgeber brutale 45% ein. So vermeidest du das — und holst dir beim Abflug im Schnitt ~$2.600 zurück.",
      sections: [
        {
          paragraphs: [
            "Steuern sind der Bereich, in dem Work-and-Travel-Reisende am meisten Geld verlieren — erst durch zu hohe Einbehaltungen, dann weil sie nie eine Rückerstattung beantragen. Die gute Nachricht: Der Großteil lässt sich vermeiden, und vieles bekommst du zurück.",
          ],
        },
        {
          heading: "Warum dir 45% abgezogen werden können",
          paragraphs: [
            "Wenn du anfängst zu arbeiten, ohne deinem Arbeitgeber eine [Steuernummer (TFN)](~/blog/what-is-a-tfn) zu geben, ist dieser gesetzlich verpflichtet, 45% Steuer auf alles, was du verdienst, einzubehalten. Beantrage deine TFN direkt nach der Ankunft (kostenlos) und gib sie deinem Arbeitgeber, damit der korrekte Steuersatz gilt.",
            "Mit einer TFN zahlen Work-and-Travel-Reisende 15% auf die ersten $45.000 ihres Einkommens — deutlich weniger als 45%.",
          ],
        },
        {
          heading: "So beantragst du eine Steuernummer (TFN)",
          bullets: [
            "Beantrage sie kostenlos online über das Australian Taxation Office (ATO), sobald du in Australien bist",
            "Du brauchst deinen Reisepass und deine Visadaten",
            "Sie kommt in der Regel innerhalb von etwa zwei Wochen an",
            "Gib sie jedem Arbeitgeber, damit der Work-and-Travel-Steuersatz gilt und nicht 45%",
          ],
        },
        {
          heading: "So beantragst du deine Steuerrückerstattung bei der Abreise",
          paragraphs: [
            "Am Ende des Steuerjahres (oder wenn du Australien endgültig verlässt) reichst du eine Steuererklärung ein. Wenn zu viel einbehalten wurde — sehr häufig, wenn du einen Job angetreten hast, bevor deine TFN ankam — bekommst du die Differenz zurück. Die durchschnittliche Rückerstattung für Backpacker liegt bei rund $2.600.",
            "Hebe alle Gehaltsabrechnungen und deine Einkommensbescheinigung auf. Du brauchst sie für eine genaue Steuererklärung und als Nachweis, was du verdient und was einbehalten wurde.",
          ],
        },
        {
          heading: "Verwechsle Steuer nicht mit Superannuation",
          paragraphs: [
            "Deine Steuerrückerstattung und dein Superannuation (die Altersvorsorge, die dein Arbeitgeber zusätzlich zum Lohn einzahlt) sind zwei getrennte Töpfe. Den Super beantragst du separat bei der Abreise — lies dazu unseren DASP-Guide.",
          ],
        },
        {
          heading: "Wie Tern dir hilft",
          paragraphs: [
            "Tern erinnert dich bei der Anmeldung daran, deine TFN zu beantragen, speichert deine Gehaltsabrechnungen an einem Ort, damit die Steuererklärung unkompliziert ist, und gibt dir Bescheid, wenn dein Arbeitgeber den falschen Steuersatz einbehält — damit du mehr von deinem Verdienst behältst und zurückbekommst, was dir zusteht.",
          ],
        },
      ],
      faq: [
        {
          q: "Warum werden mir bei Work and Travel 45% Steuern abgezogen?",
          a: "Weil du deinem Arbeitgeber keine Steuernummer gegeben hast. Ohne TFN schreibt das Gesetz vor, 45% einzubehalten. Beantrage eine TFN und reiche sie ein, um auf den Work-and-Travel-Steuersatz von 15% zu kommen.",
        },
        {
          q: "Wie hoch ist die durchschnittliche Steuerrückerstattung bei Work and Travel?",
          a: "Rund $2.600, aber es hängt davon ab, wie viel du verdient und wie viel einbehalten wurde. Zu hohe Einbehaltungen vor der Ausstellung der TFN sind der häufigste Grund für eine hohe Rückerstattung.",
        },
        {
          q: "Wann kann ich meine Steuern zurückfordern?",
          a: "Nach Ende des Steuerjahres (30 June) oder wenn du Australien endgültig verlässt. Du reichst eine Steuererklärung beim ATO ein — mit deiner Einkommensbescheinigung und den Gehaltsabrechnungen.",
        },
      ],
    },
    fr: {
      title: "Taxe backpacker 45% en Australie — récupère ton remboursement",
      description:
        "Sans TFN en Australie, 45% sont retenus à la source. Comment fonctionne la taxe backpacker, comment obtenir ton TFN et réclamer ton remboursement (moy. ~$2 600).",
      excerpt:
        "Sans numéro fiscal, ton employeur retient un brutal 45%. Voici comment l'éviter — et récupérer en moyenne ~$2 600 à ton départ.",
      sections: [
        {
          paragraphs: [
            "Les impôts, c'est là que les pvtistes perdent le plus d'argent en silence — d'abord à cause d'une retenue excessive, ensuite parce qu'ils ne réclament jamais de remboursement. La bonne nouvelle : la plupart de ces pertes sont évitables, et une bonne partie est récupérable.",
          ],
        },
        {
          heading: "Pourquoi tu peux être taxé à 45%",
          paragraphs: [
            "Si tu commences à travailler sans donner à ton employeur un [numéro fiscal (TFN)](~/blog/what-is-a-tfn), la loi l'oblige à retenir l'impôt au taux marginal maximum — 45% — sur tout ce que tu gagnes. Fais ta demande de TFN dès ton arrivée (c'est gratuit) et transmets-le à ton employeur pour être imposé au bon taux.",
            "Avec un TFN, les titulaires d'un PVT sont imposés à 15% sur les premiers $45 000 de revenus — bien loin des 45%.",
          ],
        },
        {
          heading: "Comment obtenir un numéro fiscal (TFN)",
          bullets: [
            "Fais ta demande gratuitement en ligne auprès de l'Australian Taxation Office (ATO) dès que tu es en Australie",
            "Tu auras besoin de ton passeport et des détails de ton visa",
            "Il arrive généralement en deux semaines environ",
            "Donne-le à chaque employeur pour être taxé au taux PVT et non à 45%",
          ],
        },
        {
          heading: "Réclamer ton remboursement d'impôt à ton départ",
          paragraphs: [
            "À la fin de l'année fiscale (ou quand tu quittes définitivement l'Australie), tu déposes une déclaration d'impôts. Si trop a été retenu — très courant si tu as commencé à travailler avant que ton TFN n'arrive — tu récupères la différence. Le remboursement moyen pour un backpacker est d'environ $2 600.",
            "Conserve chaque bulletin de salaire et ton relevé de revenus. Tu en auras besoin pour déclarer avec précision et prouver ce que tu as gagné et ce qui a été retenu.",
          ],
        },
        {
          heading: "Ne confonds pas impôt et superannuation",
          paragraphs: [
            "Ton remboursement d'impôt et ta superannuation (l'épargne retraite que ton employeur verse en plus de ton salaire) sont deux cagnottes distinctes. Tu réclames la super séparément à ton départ — consulte notre guide DASP.",
          ],
        },
        {
          heading: "Comment Tern t'aide",
          paragraphs: [
            "Tern te rappelle de faire ta demande de TFN à l'inscription, stocke tes bulletins de salaire en un seul endroit pour que ta déclaration soit sans prise de tête, et te signale si ton employeur retient le mauvais taux — pour que tu gardes le maximum de ce que tu gagnes et récupères ce qui t'appartient.",
          ],
        },
      ],
      faq: [
        {
          q: "Pourquoi suis-je taxé à 45% pendant mon PVT ?",
          a: "Parce que tu n'as pas donné ton numéro fiscal à ton employeur. Sans TFN, la loi impose une retenue au taux maximum de 45%. Fais ta demande de TFN et transmets-le pour passer au taux PVT de 15%.",
        },
        {
          q: "Quel est le remboursement d'impôt moyen pour un PVT ?",
          a: "Environ $2 600, selon ce que tu as gagné et ce qui a été retenu. La retenue excessive avant le traitement de ton TFN est la raison la plus fréquente d'un remboursement élevé.",
        },
        {
          q: "Quand puis-je récupérer mes impôts ?",
          a: "Après la fin de l'année fiscale (30 June) ou quand tu quittes définitivement l'Australie. Tu déposes une déclaration d'impôts auprès de l'ATO en utilisant ton relevé de revenus et tes bulletins de salaire.",
        },
      ],
    },
    it: {
      title: "Tassa backpacker 45% in Australia — come ottenere il rimborso",
      description:
        "Senza TFN in Australia ti trattengono fino al 45%. Come funziona la tassa backpacker, come ottenere il TFN e richiedere il rimborso fiscale (media ~$2.600).",
      excerpt:
        "Senza codice fiscale il tuo datore di lavoro trattiene un brutale 45%. Ecco come evitarlo — e come recuperare in media ~$2.600 quando parti.",
      sections: [
        {
          paragraphs: [
            "Le tasse sono il settore in cui chi fa una working holiday perde più soldi in silenzio — prima per le trattenute eccessive, poi perché non richiede mai il rimborso. La buona notizia: la maggior parte è evitabile, e molto è rimborsabile.",
          ],
        },
        {
          heading: "Perché potresti essere tassato al 45%",
          paragraphs: [
            "Se inizi a lavorare senza dare al tuo datore di lavoro un [codice fiscale (TFN)](~/blog/what-is-a-tfn), la legge lo obbliga a trattenere le imposte all'aliquota massima del 45% su tutto ciò che guadagni. Richiedi il TFN appena arrivi (è gratuito) e consegnalo al tuo datore di lavoro per essere tassato correttamente.",
            "Con un TFN, chi è in working holiday paga il 15% sui primi $45.000 di guadagni — ben lontano dal 45%.",
          ],
        },
        {
          heading: "Come ottenere un codice fiscale (TFN)",
          bullets: [
            "Fai domanda gratuitamente online tramite l'Australian Taxation Office (ATO) una volta che sei in Australia",
            "Avrai bisogno del passaporto e dei dettagli del visto",
            "Di solito arriva entro circa due settimane",
            "Consegnalo a ogni datore di lavoro per essere tassato all'aliquota working holiday e non al 45%",
          ],
        },
        {
          heading: "Come richiedere il rimborso fiscale alla partenza",
          paragraphs: [
            "Alla fine dell'anno fiscale (o quando lasci definitivamente l'Australia) presenti la dichiarazione dei redditi. Se ti è stato trattenuto troppo — molto comune se hai iniziato a lavorare prima che arrivasse il TFN — ricevi indietro la differenza. Il rimborso medio per i backpacker è di circa $2.600.",
            "Conserva tutte le buste paga e il tuo prospetto dei redditi. Ti serviranno per dichiarare con precisione e dimostrare quanto hai guadagnato e quanto ti è stato trattenuto.",
          ],
        },
        {
          heading: "Non confondere le tasse con la superannuation",
          paragraphs: [
            "Il rimborso fiscale e la superannuation (il risparmio previdenziale che il tuo datore di lavoro versa in aggiunta allo stipendio) sono due fondi separati. Richiedi la super separatamente quando parti — consulta la nostra guida DASP.",
          ],
        },
        {
          heading: "Come ti aiuta Tern",
          paragraphs: [
            "Tern ti ricorda di richiedere il TFN all'iscrizione, conserva le tue buste paga in un unico posto per rendere la dichiarazione dei redditi indolore, e ti avvisa se il tuo datore di lavoro trattiene l'aliquota sbagliata — così tieni di più di quello che guadagni e recuperi quello che ti spetta.",
          ],
        },
      ],
      faq: [
        {
          q: "Perché mi stanno tassando al 45% durante la mia working holiday?",
          a: "Perché non hai fornito al tuo datore di lavoro il codice fiscale. Senza TFN, la legge impone la trattenuta all'aliquota massima del 45%. Richiedi un TFN e consegnalo per scendere all'aliquota working holiday del 15%.",
        },
        {
          q: "Quanto vale il rimborso fiscale medio per una working holiday?",
          a: "Circa $2.600, ma dipende da quanto hai guadagnato e da quanto ti è stato trattenuto. Le trattenute eccessive prima dell'elaborazione del TFN sono il motivo più comune per un rimborso elevato.",
        },
        {
          q: "Quando posso richiedere il rimborso fiscale?",
          a: "Dopo la fine dell'anno fiscale (30 June) o quando lasci definitivamente l'Australia. Presenti la dichiarazione dei redditi all'ATO usando il prospetto dei redditi e le buste paga.",
        },
      ],
    },
  },
};
