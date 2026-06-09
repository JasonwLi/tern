import type { Article } from "../types";

export const article: Article = {
  slug: "tax-refund-working-holiday-new-zealand",
  kind: "guide",
  emoji: "🧮",
  accent: "bg-sky-300",
  readMinutes: 6,
  sources: [
    {
      label: "Inland Revenue NZ (IRD) — I am coming to work or study in New Zealand",
      url: "https://www.ird.govt.nz/situations/work-or-study-in-new-zealand",
    },
    {
      label: "Inland Revenue NZ (IRD) — IRD numbers for individuals",
      url: "https://www.ird.govt.nz/managing-my-tax/ird-numbers/ird-numbers-for-individuals",
    },
    {
      label: "Inland Revenue NZ (IRD) — About tax codes",
      url: "https://www.ird.govt.nz/income-tax/income-tax-for-individuals/tax-codes-and-tax-rates-for-individuals/about-tax-codes",
    },
    {
      label: "Inland Revenue NZ (IRD) — End-of-year income tax assessments",
      url: "https://www.ird.govt.nz/income-tax/income-tax-for-individuals/what-happens-at-the-end-of-the-tax-year/income-tax-assessments",
    },
    {
      label: "Inland Revenue NZ (IRD) — Individual income tax return (IR3)",
      url: "https://www.ird.govt.nz/income-tax/income-tax-for-individuals/what-happens-at-the-end-of-the-tax-year/individual-income-tax-return---ir3",
    },
  ],
  i18n: {
    en: {
      title: "NZ tax for working holiday makers: the full guide",
      description:
        "Working holiday in New Zealand? Without an IRD number you're taxed at 45%. Here's how IRD numbers, PAYE, tax codes, automatic assessments and IR3 refunds work for WHV holders.",
      excerpt:
        "No IRD number means your employer must withhold tax at the brutal 45% no-notification rate. Here's how to get one, pick the right tax code, and claim your refund.",
      sections: [
        {
          paragraphs: [
            "New Zealand makes tax relatively painless for most working holiday makers — if you set things up correctly. The two things that cause the most damage are starting work without an IRD number and using the wrong tax code. Both are avoidable in under an hour.",
          ],
        },
        {
          heading: "Why you need an IRD number before you start work",
          paragraphs: [
            "An IRD number is New Zealand's equivalent of a tax file number. If you don't give your employer one, they are legally required to deduct tax at the 'no-notification' rate of 45% — the highest rate in the system. The application is free and takes around 10 working days to arrive.",
            "Apply online through the IRD website as soon as you arrive. If you hold a working holiday visa, you'll likely apply through the 'new arrival' process, which allows the IRD to verify your identity with Immigration New Zealand — no separate documents required.",
          ],
          bullets: [
            "Apply free at ird.govt.nz once you're in New Zealand",
            "Have your passport, visa details, and a New Zealand address ready",
            "Expect your IRD number within 10 working days of applying",
            "Give it to your employer immediately — don't wait until your first paycheck",
          ],
        },
        {
          heading: "PAYE and tax codes explained",
          paragraphs: [
            "New Zealand taxes employment income on a pay-as-you-earn (PAYE) basis. Your employer deducts tax from every paycheck according to the tax code you declare on an IR330 form.",
            "For most working holiday makers with one job, the correct tax code is 'M' (main income, no student loan). If you have a second job or a secondary source of income, use 'S' (secondary income) for that employer. Using the wrong code — especially 'M' for a second job — can leave you with a tax bill at year-end.",
          ],
          bullets: [
            "Fill in an IR330 Tax code declaration form for every employer",
            "Main job, no student loan: use tax code M",
            "Second job or secondary income: use tax code S",
            "Do not start work without handing your employer a completed IR330",
          ],
        },
        {
          heading: "Automatic end-of-year assessment",
          paragraphs: [
            "If all of your income for the year has been taxed through PAYE — which is typical for wage and salary earners — IRD will calculate your end-of-year tax automatically. No action needed from you.",
            "The NZ tax year runs from 1 April to 31 March. IRD usually issues automatic assessments between late May and the end of July after the tax year closes. If you overpaid during the year, the refund is deposited directly into the bank account you have registered in myIR.",
            "Keep your New Zealand bank account open long enough to receive the refund — or update your bank details in myIR to an overseas account before you leave.",
          ],
        },
        {
          heading: "When you need to file an IR3 instead",
          paragraphs: [
            "If you leave New Zealand before the end of the tax year (31 March) and want your refund sooner, you can file an IR3 individual tax return for the period you worked. The IR3 is also required if you had income that wasn't fully taxed at source — for example, self-employment income, rental income, or income over NZD 200 that IRD wasn't notified about.",
            "Keep every payslip. The IR3 requires your total income and total tax deducted for the period. Missing payslips are the single biggest cause of delays.",
          ],
          bullets: [
            "Leaving NZ early? File an IR3 to claim your refund without waiting for automatic assessment",
            "Had cash-in-hand or self-employment income? You must declare it in an IR3",
            "Collect every payslip — you'll need them all",
            "IR3 returns can be filed online through myIR",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Tern prompts your IRD number application at signup so you never miss the no-notification trap. It stores every payslip as it arrives, flags if your employer appears to be using the wrong tax code, and reminds you to file an IR3 — or to update your myIR bank details — before you catch your flight home.",
          ],
        },
      ],
      faq: [
        {
          q: "What happens if I work without an IRD number in New Zealand?",
          a: "Your employer must deduct tax at the 45% no-notification rate on everything you earn. Apply for your IRD number as soon as you arrive — it's free and takes about 10 working days.",
        },
        {
          q: "Do I need to file a tax return when I leave New Zealand?",
          a: "If all your income was taxed through PAYE and you had no other income, IRD will assess your tax automatically and refund any overpayment without you filing anything. If you want your refund before the automatic assessment (late May to July), or you had income outside PAYE, you file an IR3 return.",
        },
        {
          q: "What tax code should I use on a working holiday visa in New Zealand?",
          a: "For your main (or only) job with no student loan, use tax code M on the IR330 form. For a second job, use tax code S. Using the wrong code can mean owing tax at year-end.",
        },
      ],
    },
    es: {
      title: "Impuestos en Nueva Zelanda para working holiday: guía completa",
      description:
        "¿Tenés working holiday en Nueva Zelanda? Sin número IRD te cobran el 45%. Acá te explicamos cómo funcionan el IRD, PAYE, los códigos fiscales, la liquidación automática y las devoluciones IR3.",
      excerpt:
        "Sin número IRD, tu empleador debe retenerte el brutal 45% de no-notificación. Así conseguís el número, elegís el código fiscal correcto y reclamás tu devolución.",
      sections: [
        {
          paragraphs: [
            "Nueva Zelanda hace los impuestos relativamente sencillos para la mayoría de los trabajadores en visa working holiday — si configurás todo correctamente. Lo que más daño causa es empezar a trabajar sin número IRD y usar el código fiscal equivocado. Ambos se resuelven en menos de una hora.",
          ],
        },
        {
          heading: "Por qué necesitás un número IRD antes de empezar a trabajar",
          paragraphs: [
            "El número IRD es el equivalente neozelandés de un número de archivo fiscal. Si no le das uno a tu empleador, la ley lo obliga a descontar impuestos a la tasa de 'no-notificación' del 45% — la más alta del sistema. La solicitud es gratuita y tarda unos 10 días hábiles en llegar.",
            "Solicitalo en línea a través del sitio web del IRD en cuanto llegues. Si tenés visa working holiday, probablemente lo tramites por el proceso de 'nueva llegada', que permite al IRD verificar tu identidad con Inmigración Nueva Zelanda — sin documentos adicionales.",
          ],
          bullets: [
            "Solicitalo gratis en ird.govt.nz una vez que estés en Nueva Zelanda",
            "Tené a mano tu pasaporte, datos de la visa y una dirección en Nueva Zelanda",
            "Tu número IRD llegará en unos 10 días hábiles desde la solicitud",
            "Dáselo a tu empleador de inmediato — no esperes al primer cheque de pago",
          ],
        },
        {
          heading: "PAYE y códigos fiscales explicados",
          paragraphs: [
            "Nueva Zelanda grava los ingresos laborales según el sistema PAYE (pay-as-you-earn, pago al momento de ganar). Tu empleador descuenta impuestos en cada pago según el código fiscal que declarás en el formulario IR330.",
            "Para la mayoría de los trabajadores en visa working holiday con un solo trabajo, el código fiscal correcto es 'M' (ingreso principal, sin préstamo estudiantil). Si tenés un segundo trabajo, usá 'S' (ingreso secundario) para ese empleador. Usar el código equivocado — especialmente 'M' para un segundo trabajo — puede dejarte con una deuda fiscal al final del año.",
          ],
          bullets: [
            "Completá un formulario de declaración de código fiscal IR330 para cada empleador",
            "Trabajo principal, sin préstamo estudiantil: usá el código fiscal M",
            "Segundo trabajo o ingreso secundario: usá el código fiscal S",
            "No empieces a trabajar sin entregarle al empleador el IR330 completo",
          ],
        },
        {
          heading: "Liquidación automática de fin de año",
          paragraphs: [
            "Si todos tus ingresos del año fueron gravados a través de PAYE — lo habitual para trabajadores asalariados —, el IRD calculará automáticamente tu liquidación fiscal de fin de año. No necesitás hacer nada.",
            "El año fiscal de Nueva Zelanda va del 1 de abril al 31 de marzo. El IRD generalmente emite las liquidaciones automáticas entre fines de mayo y finales de julio, después de que cierra el año fiscal. Si pagaste de más durante el año, la devolución se deposita directamente en la cuenta bancaria que tenés registrada en myIR.",
            "Mantené tu cuenta bancaria neozelandesa abierta el tiempo suficiente para recibir el reembolso, o actualizá tus datos bancarios en myIR a una cuenta en el extranjero antes de irte.",
          ],
        },
        {
          heading: "Cuándo tenés que presentar un IR3",
          paragraphs: [
            "Si te vas de Nueva Zelanda antes del fin del año fiscal (31 de marzo) y querés tu devolución antes, podés presentar una declaración de renta individual IR3 por el período trabajado. El IR3 también es obligatorio si tuviste ingresos que no fueron completamente gravados en origen — por ejemplo, ingresos de trabajo independiente, alquiler o ingresos superiores a NZD 200 sobre los que el IRD no fue notificado.",
            "Guardá todos los recibos de sueldo. El IR3 requiere el total de ingresos y el total de impuestos descontados durante el período. Los recibos faltantes son la principal causa de demoras.",
          ],
          bullets: [
            "¿Te vas antes de tiempo? Presentá un IR3 para recibir tu devolución sin esperar la liquidación automática",
            "¿Tuviste ingresos en efectivo o de trabajo independiente? Debés declararlos en el IR3",
            "Guardá todos los recibos de sueldo — los vas a necesitar todos",
            "Las declaraciones IR3 se pueden presentar en línea a través de myIR",
          ],
        },
        {
          heading: "Cómo te ayuda Tern",
          paragraphs: [
            "Tern te recuerda solicitar el número IRD al registrarte para que nunca caigas en la trampa de la no-notificación. Guarda cada recibo de sueldo en cuanto llega, te avisa si tu empleador parece estar usando el código fiscal incorrecto y te recuerda presentar el IR3 — o actualizar tus datos bancarios en myIR — antes de tomar el vuelo de vuelta.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Qué pasa si trabajo sin número IRD en Nueva Zelanda?",
          a: "Tu empleador debe descontar impuestos a la tasa de no-notificación del 45% sobre todo lo que ganás. Solicitá tu número IRD en cuanto llegues — es gratis y tarda unos 10 días hábiles.",
        },
        {
          q: "¿Tengo que presentar una declaración de impuestos al irme de Nueva Zelanda?",
          a: "Si todos tus ingresos fueron gravados mediante PAYE y no tuviste otros ingresos, el IRD evaluará tu situación fiscal automáticamente y te devolverá el exceso sin que tengas que presentar nada. Si querés la devolución antes de la liquidación automática (finales de mayo a julio), o tuviste ingresos fuera del PAYE, presentás una declaración IR3.",
        },
        {
          q: "¿Qué código fiscal debo usar con visa working holiday en Nueva Zelanda?",
          a: "Para tu trabajo principal (o único) sin préstamo estudiantil, usá el código fiscal M en el formulario IR330. Para un segundo trabajo, usá el código fiscal S. Usar el código incorrecto puede significar deber impuestos al final del año.",
        },
      ],
    },
    ja: {
      title: "NZワーホリの税金完全ガイド — IRD番号から還付まで",
      description:
        "ニュージーランドでワーホリ中にIRD番号がないと45%課税されます。IRD番号、PAYE、税コード、自動算定、IR3還付の仕組みをわかりやすく解説します。",
      excerpt:
        "IRD番号がないと雇用主が45%を天引きする義務があります。番号の取得方法、正しい税コードの選び方、還付の受け取り方を説明します。",
      sections: [
        {
          paragraphs: [
            "ニュージーランドは、正しく設定さえすれば、ほとんどのワーホリメーカーにとって税金の手続きが比較的楽な国です。最も多いトラブルは「IRD番号なしで就労開始」と「誤った税コードの使用」の2つ。どちらも1時間以内に対処できます。",
          ],
        },
        {
          heading: "就労前にIRD番号が必要な理由",
          paragraphs: [
            "IRD番号はニュージーランドの税務番号にあたるものです。雇用主に番号を提出しないと、法律により「無届け税率」である45%で全収入から税金が天引きされます。申請は無料で、届くまで約10営業日かかります。",
            "入国後すぐにIRDのウェブサイトからオンライン申請しましょう。ワーキングホリデービザを持っている場合は「新規入国者」プロセスで申請でき、IRDが移民局に直接本人確認を行うため、別途書類を用意する必要がありません。",
          ],
          bullets: [
            "ニュージーランド入国後、ird.govt.nzから無料で申請する",
            "パスポート、ビザ情報、ニュージーランドの住所を準備しておく",
            "申請後約10営業日でIRD番号が届く",
            "届いたらすぐに雇用主に提出する — 最初の給料日を待たない",
          ],
        },
        {
          heading: "PAYEと税コードの仕組み",
          paragraphs: [
            "ニュージーランドの雇用所得はPAYE（源泉徴収）方式で課税されます。雇用主はIR330フォームに記入した税コードに従い、毎回の給与から税金を差し引きます。",
            "1つの仕事に就くほとんどのワーホリメーカーに適した税コードは「M」（メイン収入、学生ローンなし）です。2つ目の仕事や副収入がある場合は、その雇用主には「S」（副収入）を使用してください。特に2つ目の仕事に「M」を使うなど誤った税コードを使うと、年度末に追納が発生することがあります。",
          ],
          bullets: [
            "すべての雇用主に対してIR330税コード申告書を記入して提出する",
            "メインの仕事（学生ローンなし）：税コード M を使用",
            "2つ目の仕事または副収入：税コード S を使用",
            "記入済みのIR330を雇用主に提出するまで就労しない",
          ],
        },
        {
          heading: "年度末の自動税額算定",
          paragraphs: [
            "年間のすべての収入がPAYEで課税されている場合（給与所得者では一般的）、IRDが自動的に年度末の税額を算定します。手続きは不要です。",
            "NZの課税年度は4月1日〜3月31日です。IRDは通常、課税年度終了後の5月下旬から7月末にかけて自動算定を発行します。年間で過払いがあった場合、還付金はmyIRに登録した銀行口座に直接振り込まれます。",
            "還付金を受け取るまでニュージーランドの銀行口座を閉鎖しないか、出国前にmyIRで銀行口座情報を海外口座に更新しておきましょう。",
          ],
        },
        {
          heading: "IR3の申告が必要な場合",
          paragraphs: [
            "課税年度末（3月31日）前にニュージーランドを離れて早めに還付を受けたい場合は、就労期間分のIR3個人税申告書を提出できます。また、源泉徴収されなかった収入（自営業収入、家賃収入、IRDに未申告のNZD 200超の収入など）があった場合もIR3が必要です。",
            "給与明細はすべて保管してください。IR3には期間中の総収入と総控除税額が必要です。明細の紛失が最も多い遅延の原因です。",
          ],
          bullets: [
            "途中帰国する場合：自動算定を待たずにIR3で還付申請できます",
            "現金払いや自営業収入があった場合：IR3で申告が必要です",
            "給与明細はすべて保管する",
            "IR3はmyIRからオンラインで提出できます",
          ],
        },
        {
          heading: "Ternができること",
          paragraphs: [
            "TernはサインアップTime にIRD番号の申請を促して無届け税率の罠を回避します。給与明細が届くたびに保存し、雇用主が誤った税コードを使用している場合は通知し、帰国便に乗る前にIR3の提出またはmyIRでの銀行口座情報更新をリマインドします。",
          ],
        },
      ],
      faq: [
        {
          q: "ニュージーランドでIRD番号なしで働いたらどうなりますか？",
          a: "雇用主はすべての収入に対して45%の無届け税率で税金を天引きしなければなりません。入国後すぐにIRD番号を申請しましょう — 無料で約10営業日で届きます。",
        },
        {
          q: "ニュージーランドを離れる際に確定申告は必要ですか？",
          a: "すべての収入がPAYEで課税されていて他の収入がない場合、IRDが自動で税額を算定して過払い分を還付します。手続き不要です。自動算定（5月下旬〜7月）より早く還付を受けたい場合や、PAYE以外の収入があった場合はIR3申告が必要です。",
        },
        {
          q: "ニュージーランドのワーホリビザではどの税コードを使えばいいですか？",
          a: "学生ローンなしのメイン（または唯一の）仕事には、IR330フォームで税コードMを使用してください。2つ目の仕事にはSを使用します。誤った税コードを使うと年度末に追納が発生することがあります。",
        },
      ],
    },
    ko: {
      title: "뉴질랜드 워홀 세금 완벽 가이드 — IRD번호부터 환급까지",
      description:
        "뉴질랜드 워킹홀리데이에서 IRD번호가 없으면 45%가 공제됩니다. IRD번호, PAYE, 세금 코드, 자동 산정, IR3 환급이 어떻게 작동하는지 알아보세요.",
      excerpt:
        "IRD번호가 없으면 고용주가 45%의 미신고 세율로 공제해야 합니다. 번호 취득 방법, 올바른 세금 코드 선택, 환급 신청 방법을 알려드립니다.",
      sections: [
        {
          paragraphs: [
            "뉴질랜드는 제대로 설정만 하면 대부분의 워홀러에게 세금 처리가 비교적 간단한 나라입니다. 가장 큰 피해를 주는 두 가지는 IRD번호 없이 일을 시작하는 것과 잘못된 세금 코드를 사용하는 것입니다. 둘 다 한 시간 이내에 해결할 수 있습니다.",
          ],
        },
        {
          heading: "일을 시작하기 전에 IRD번호가 필요한 이유",
          paragraphs: [
            "IRD번호는 뉴질랜드의 세금 파일 번호에 해당합니다. 고용주에게 번호를 제출하지 않으면, 법에 따라 모든 수입에서 시스템 내 최고 세율인 '미신고' 세율 45%로 세금을 공제해야 합니다. 신청은 무료이며 약 10영업일이 걸립니다.",
            "입국하자마자 IRD 웹사이트에서 온라인으로 신청하세요. 워킹홀리데이 비자를 소지한 경우, '신규 입국자' 절차를 통해 신청하면 IRD가 이민부에 직접 신원 확인을 요청하므로 별도 서류가 필요 없습니다.",
          ],
          bullets: [
            "뉴질랜드 입국 후 ird.govt.nz에서 무료로 신청하기",
            "여권, 비자 정보, 뉴질랜드 주소를 준비하기",
            "신청 후 약 10영업일 내에 IRD번호 수령 예정",
            "수령 즉시 고용주에게 제출하기 — 첫 월급날을 기다리지 말 것",
          ],
        },
        {
          heading: "PAYE와 세금 코드 설명",
          paragraphs: [
            "뉴질랜드는 고용 소득에 PAYE(원천징수) 방식으로 세금을 부과합니다. 고용주는 IR330 양식에 신고한 세금 코드에 따라 매 급여에서 세금을 공제합니다.",
            "직장이 하나인 대부분의 워홀러에게 올바른 세금 코드는 'M'(주 소득, 학자금 대출 없음)입니다. 두 번째 직장이나 부소득이 있는 경우 해당 고용주에게는 'S'(부소득)를 사용하세요. 잘못된 코드 사용 — 특히 두 번째 직장에 'M' 사용 — 은 연말에 추가 납부로 이어질 수 있습니다.",
          ],
          bullets: [
            "모든 고용주에게 IR330 세금 코드 신고 양식을 작성해 제출하기",
            "주 직장, 학자금 대출 없음: 세금 코드 M 사용",
            "두 번째 직장 또는 부소득: 세금 코드 S 사용",
            "작성된 IR330을 고용주에게 제출하기 전까지 일을 시작하지 말 것",
          ],
        },
        {
          heading: "연말 자동 세금 산정",
          paragraphs: [
            "연간 모든 소득이 PAYE를 통해 과세되었다면 — 임금 및 급여 소득자에게는 일반적 — IRD가 연말 세금을 자동으로 계산합니다. 별도 조치가 필요 없습니다.",
            "뉴질랜드 세금 연도는 4월 1일부터 3월 31일까지입니다. IRD는 보통 세금 연도 종료 후 5월 말부터 7월 말 사이에 자동 산정 결과를 발행합니다. 연중 초과 납부한 경우, 환급금은 myIR에 등록된 은행 계좌로 직접 입금됩니다.",
            "환급금을 받을 때까지 뉴질랜드 은행 계좌를 열어두거나, 출국 전에 myIR에서 해외 계좌로 은행 정보를 업데이트하세요.",
          ],
        },
        {
          heading: "IR3를 직접 신고해야 하는 경우",
          paragraphs: [
            "세금 연도 말(3월 31일) 전에 뉴질랜드를 떠나 환급을 일찍 받고 싶다면, 근무 기간에 대한 IR3 개인 소득세 신고서를 제출할 수 있습니다. IR3는 원천징수되지 않은 소득 — 예를 들어 자영업 소득, 임대 소득, 또는 IRD에 통보되지 않은 NZD 200 초과 소득 — 이 있는 경우에도 필요합니다.",
            "모든 급여 명세서를 보관하세요. IR3에는 해당 기간의 총 소득과 총 공제 세액이 필요합니다. 급여 명세서 누락이 지연의 가장 큰 원인입니다.",
          ],
          bullets: [
            "조기 출국하는 경우: 자동 산정을 기다리지 않고 IR3로 환급 신청 가능",
            "현금 수입이나 자영업 소득이 있었다면: IR3에 반드시 신고해야 함",
            "모든 급여 명세서 보관하기",
            "IR3 신고서는 myIR를 통해 온라인으로 제출 가능",
          ],
        },
        {
          heading: "Tern이 도와드립니다",
          paragraphs: [
            "Tern은 가입 시 IRD번호 신청을 안내하여 미신고 세율의 함정을 피할 수 있게 합니다. 급여 명세서가 도착할 때마다 저장하고, 고용주가 잘못된 세금 코드를 사용하는 것 같으면 알림을 보내며, 귀국 항공편을 타기 전에 IR3 제출 또는 myIR 은행 정보 업데이트를 리마인드합니다.",
          ],
        },
      ],
      faq: [
        {
          q: "뉴질랜드에서 IRD번호 없이 일하면 어떻게 되나요?",
          a: "고용주는 모든 수입에 대해 45%의 미신고 세율로 세금을 공제해야 합니다. 입국하자마자 IRD번호를 신청하세요 — 무료이며 약 10영업일이 걸립니다.",
        },
        {
          q: "뉴질랜드를 떠날 때 세금 신고를 해야 하나요?",
          a: "모든 소득이 PAYE를 통해 과세되었고 다른 소득이 없다면, IRD가 세금을 자동으로 산정하고 초과 납부분을 환급합니다. 별도 신고가 필요 없습니다. 자동 산정(5월 말~7월)보다 일찍 환급을 받고 싶거나, PAYE 외 소득이 있었다면 IR3 신고서를 제출하면 됩니다.",
        },
        {
          q: "뉴질랜드 워킹홀리데이 비자에서는 어떤 세금 코드를 사용해야 하나요?",
          a: "학자금 대출 없는 주(또는 유일한) 직장에는 IR330 양식에서 세금 코드 M을 사용하세요. 두 번째 직장에는 S를 사용합니다. 잘못된 코드를 사용하면 연말에 추가 납부가 발생할 수 있습니다.",
        },
      ],
    },
    "zh-TW": {
      title: "紐西蘭打工度假稅務完整指南 — IRD號碼到退稅",
      description:
        "在紐西蘭打工度假沒有IRD號碼會被扣45%的稅。這裡說明IRD號碼、PAYE、稅務代碼、自動評估及IR3退稅的運作方式。",
      excerpt:
        "沒有IRD號碼，雇主必須以45%的未通知稅率扣繳。來了解如何申請號碼、選對稅務代碼，以及如何申請退稅。",
      sections: [
        {
          paragraphs: [
            "只要設定正確，紐西蘭對大多數打工度假者來說，稅務手續相當簡單。造成最大損失的兩件事是：沒有IRD號碼就開始工作，以及使用錯誤的稅務代碼。這兩件事都可以在一小時內解決。",
          ],
        },
        {
          heading: "為什麼要在開始工作前取得IRD號碼",
          paragraphs: [
            "IRD號碼相當於紐西蘭的稅號。如果你沒有提供給雇主，法律規定雇主必須以系統最高稅率45%的「未通知」稅率扣繳你全部收入的稅款。申請免費，約需10個工作天。",
            "一抵達紐西蘭就透過IRD官網在線上申請。如果你持打工度假簽證，通常可以走「新抵達者」申請流程，由IRD直接向移民局核實你的身份——不需要另外準備文件。",
          ],
          bullets: [
            "抵達紐西蘭後，在ird.govt.nz免費申請",
            "準備好護照、簽證資料及紐西蘭地址",
            "申請後約10個工作天收到IRD號碼",
            "收到後立即交給雇主——不要等到第一個發薪日",
          ],
        },
        {
          heading: "PAYE與稅務代碼說明",
          paragraphs: [
            "紐西蘭對雇用所得採PAYE（即賺即扣）方式課稅。雇主根據你在IR330表格上申報的稅務代碼，從每次薪資中扣除稅款。",
            "對大多數只有一份工作的打工度假者來說，正確的稅務代碼是「M」（主要收入，無學生貸款）。如果你有第二份工作或副業收入，該雇主使用「S」（次要收入）。使用錯誤的代碼——尤其是在第二份工作用「M」——可能導致年底補繳稅款。",
          ],
          bullets: [
            "對每位雇主都填寫並提交IR330稅務代碼申報表",
            "主要工作，無學生貸款：使用稅務代碼M",
            "第二份工作或次要收入：使用稅務代碼S",
            "在向雇主提交完整IR330之前，不要開始工作",
          ],
        },
        {
          heading: "年底自動稅務評估",
          paragraphs: [
            "如果你全年所有收入都已透過PAYE課稅——對薪資所得者來說是常態——IRD會自動計算你的年度稅務，你不需要做任何事。",
            "紐西蘭稅務年度為4月1日至3月31日。IRD通常在稅務年度結束後的5月下旬至7月底之間發出自動評估結果。如果你全年多繳了稅，退稅金額會直接匯入你在myIR上登錄的銀行帳戶。",
            "請保持你的紐西蘭銀行帳戶開通直到收到退稅，或是在離境前於myIR更新為海外銀行帳戶資訊。",
          ],
        },
        {
          heading: "什麼時候需要自行申報IR3",
          paragraphs: [
            "如果你在稅務年度結束（3月31日）前離開紐西蘭且希望提前拿到退稅，可以針對你工作的期間申報IR3個人所得稅申報表。若你有未在來源端完整課稅的收入——例如自雇收入、租金收入，或超過NZD 200但未通知IRD的收入——也需要申報IR3。",
            "保留所有薪資單。IR3需要你在此期間的總收入和總扣繳稅額。薪資單遺失是延誤最常見的原因。",
          ],
          bullets: [
            "提前離境？申報IR3可以不等自動評估就取回退稅",
            "有現金收入或自雇收入？必須在IR3中申報",
            "保留所有薪資單",
            "IR3申報表可透過myIR在線上提交",
          ],
        },
        {
          heading: "Tern 如何協助你",
          paragraphs: [
            "Tern在你註冊時提醒你申請IRD號碼，讓你避開未通知稅率的陷阱。每張薪資單到達時自動儲存，發現雇主使用了錯誤稅務代碼時通知你，並在你搭上回家的班機前提醒你提交IR3或在myIR更新銀行帳戶資訊。",
          ],
        },
      ],
      faq: [
        {
          q: "在紐西蘭沒有IRD號碼就工作會怎樣？",
          a: "雇主必須以45%的未通知稅率扣繳你所有收入的稅款。一抵達就申請IRD號碼吧——免費，約需10個工作天。",
        },
        {
          q: "離開紐西蘭時需要申報稅務嗎？",
          a: "如果你所有收入都透過PAYE課稅且沒有其他收入，IRD會自動評估你的稅務並退還超繳金額，無需申報。如果你希望在自動評估（5月下旬至7月）前提前收到退稅，或有PAYE以外的收入，則需要申報IR3。",
        },
        {
          q: "在紐西蘭打工度假簽證應該使用哪個稅務代碼？",
          a: "主要（或唯一）工作且無學生貸款，請在IR330表格上使用稅務代碼M。第二份工作使用S。使用錯誤代碼可能導致年底補繳稅款。",
        },
      ],
    },
  },
};
