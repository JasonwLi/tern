import type { Article } from "../types";

export const article: Article = {
  slug: "what-is-an-ird-number",
  kind: "post",
  date: "2026-06-04",
  author: "Tern",
  emoji: "🧾",
  accent: "bg-coral-300",
  readMinutes: 4,
  sources: [
    {
      label: "Inland Revenue New Zealand — IRD numbers for individuals",
      url: "https://www.ird.govt.nz/managing-my-tax/ird-numbers/ird-numbers-for-individuals",
    },
    {
      label: "Inland Revenue New Zealand — New arrival to New Zealand: IRD number application",
      url: "https://www.ird.govt.nz/managing-my-tax/ird-numbers/ird-numbers-for-individuals/new-arrival-to-new-zealand---ird-number-application",
    },
    {
      label: "Inland Revenue New Zealand — Tax codes and tax rates for individuals",
      url: "https://www.ird.govt.nz/income-tax/income-tax-for-individuals/tax-codes-and-tax-rates-for-individuals",
    },
    {
      label: "Inland Revenue New Zealand — Coming to work or study in New Zealand",
      url: "https://www.ird.govt.nz/situations/work-or-study-in-new-zealand",
    },
  ],
  i18n: {
    en: {
      title: "What is an IRD number? A guide for working holiday makers in NZ",
      description:
        "An IRD number is New Zealand's tax identifier. Without one, your employer must deduct 45% tax. Here's what it is, why it matters, and how to apply on arrival.",
      excerpt:
        "No IRD number in New Zealand means your employer must withhold tax at the non-declaration rate of 45%. Here's what an IRD number is, the catch-22 around getting one, and how to apply.",
      sections: [
        {
          paragraphs: [
            "An IRD number is New Zealand's personal tax identifier — a unique 8- or 9-digit number issued by Inland Revenue (IRD) that your employer, bank, and KiwiSaver provider use to record and process your tax.",
          ],
        },
        {
          heading: "Why you need one urgently",
          paragraphs: [
            "If you start work in New Zealand without providing an IRD number and completing a Tax Code Declaration (IR330 form), your employer is legally required to deduct tax at the non-notified rate of 45% — plus the ACC earners' levy. That means nearly half your gross pay is withheld until you sort it out. Getting an IRD number quickly is one of the most important admin tasks when you arrive.",
          ],
        },
        {
          heading: "The catch-22: bank account and IRD number",
          paragraphs: [
            "Here is the frustrating part: IRD strongly recommends having a New Zealand bank account to receive your tax refunds and for ongoing payments. Many banks, in turn, ask for an IRD number as part of their account-opening process. The practical way through is to open a bank account first — some banks and fintech providers will open an account for new arrivals without requiring an IRD number upfront — and then use that account when you apply for your IRD number.",
          ],
        },
        {
          heading: "How to apply for an IRD number",
          paragraphs: [
            "New arrivals to New Zealand can apply online through the myIR portal or by completing the paper IR595 form. You will need to provide your passport, visa details, and a New Zealand address. IRD will typically issue your number within 8–10 working days of receiving a completed application.",
          ],
          bullets: [
            "Apply as soon as possible after arriving — before you start your first shift if you can",
            "You need your passport, visa details, and a NZ address for the application",
            "Processing generally takes 8–10 working days",
            "Once you have your number, give it to your employer with a completed IR330 tax code form",
          ],
        },
        {
          heading: "What tax code to use",
          paragraphs: [
            "Along with your IRD number, you need to tell your employer which tax code to use on the IR330 form. For most working holiday makers in their first job in New Zealand, the standard tax code is 'M'. If you have more than one job, use 'M' for your main job and 'SB', 'S', or 'SH' for the secondary jobs depending on expected income.",
          ],
        },
        {
          heading: "Where Tern fits",
          paragraphs: [
            "The bank-account-first catch-22 is exactly the kind of friction Tern is designed to remove. We are building an account that working holiday makers can open before or immediately on arrival — so you have a NZ bank account ready to go when you apply for your IRD number, and you never lose pay to the 45% non-notification rate.",
          ],
        },
      ],
      faq: [
        {
          q: "What happens if I work in New Zealand without an IRD number?",
          a: "Your employer must deduct tax at the non-notified rate of 45% plus the ACC earners' levy on all your earnings until you provide an IRD number and a completed IR330 tax code declaration. You can claim back any overpaid tax at the end of the tax year.",
        },
        {
          q: "How long does it take to get an IRD number in New Zealand?",
          a: "Inland Revenue typically processes applications within 8–10 working days once they receive your completed application and supporting documents. Apply as soon as you arrive — ideally before you start your first job.",
        },
      ],
    },
    es: {
      title: "¿Qué es un número IRD? Guía para trabajadores de vacaciones y trabajo en NZ",
      description:
        "El número IRD es el identificador fiscal de Nueva Zelanda. Sin él, tu empleador debe retener el 45% de tu sueldo como impuesto. Qué es, por qué importa y cómo solicitarlo al llegar.",
      excerpt:
        "Sin un número IRD en Nueva Zelanda, tu empleador debe retener el 45% de tu sueldo. Te explicamos qué es, el dilema para obtenerlo y cómo hacer la solicitud.",
      sections: [
        {
          paragraphs: [
            "El número IRD es el identificador fiscal personal de Nueva Zelanda: un número único de 8 o 9 dígitos emitido por Inland Revenue (IRD) que tu empleador, banco y proveedor de KiwiSaver utilizan para registrar y procesar tus impuestos.",
          ],
        },
        {
          heading: "Por qué lo necesitás urgente",
          paragraphs: [
            "Si empezás a trabajar en Nueva Zelanda sin proporcionar un número IRD ni completar la Declaración de Código Fiscal (formulario IR330), tu empleador está legalmente obligado a deducir impuestos a la tasa de no-notificación del 45%, más el gravamen ACC. Eso significa que casi la mitad de tu salario bruto es retenido hasta que lo resuelvas. Conseguir un número IRD rápidamente es una de las gestiones más importantes cuando llegás.",
          ],
        },
        {
          heading: "El dilema: cuenta bancaria y número IRD",
          paragraphs: [
            "Acá viene la parte frustrante: Inland Revenue recomienda tener una cuenta bancaria en Nueva Zelanda para recibir reembolsos de impuestos y pagos continuos. A su vez, muchos bancos piden el número IRD como parte de su proceso de apertura de cuenta. La solución práctica es abrir una cuenta bancaria primero — algunos bancos y fintechs permiten abrir cuentas para recién llegados sin pedir el número IRD de entrada — y luego usar esa cuenta al solicitar tu número IRD.",
          ],
        },
        {
          heading: "Cómo solicitar un número IRD",
          paragraphs: [
            "Los recién llegados a Nueva Zelanda pueden solicitar el número IRD en línea a través del portal myIR o completando el formulario en papel IR595. Necesitarás tu pasaporte, datos de la visa y una dirección en Nueva Zelanda. Inland Revenue generalmente emite el número dentro de los 8 a 10 días hábiles posteriores a la recepción de la solicitud completa.",
          ],
          bullets: [
            "Solicitalo lo antes posible después de llegar — idealmente antes de tu primer turno de trabajo",
            "Necesitás tu pasaporte, datos de la visa y una dirección en NZ para la solicitud",
            "El procesamiento generalmente toma entre 8 y 10 días hábiles",
            "Una vez que tenés tu número, dáselo a tu empleador junto con el formulario IR330 completo",
          ],
        },
        {
          heading: "Qué código fiscal usar",
          paragraphs: [
            "Junto con tu número IRD, debés indicarle a tu empleador qué código fiscal usar en el formulario IR330. Para la mayoría de los que tienen visa de trabajo y vacaciones en su primer empleo en Nueva Zelanda, el código estándar es 'M'. Si tenés más de un trabajo, usá 'M' para el principal y 'SB', 'S' o 'SH' para los empleos secundarios según el ingreso esperado.",
          ],
        },
        {
          heading: "Dónde encaja Tern",
          paragraphs: [
            "El dilema de la cuenta bancaria es exactamente el tipo de fricción que Tern está diseñado para eliminar. Estamos construyendo una cuenta que los titulares de visa de trabajo y vacaciones puedan abrir antes de llegar o inmediatamente al aterrizar, para que tengas una cuenta bancaria en NZ lista cuando solicites tu número IRD, y nunca pierdas parte de tu sueldo por la tasa de no-notificación del 45%.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Qué pasa si trabajo en Nueva Zelanda sin número IRD?",
          a: "Tu empleador debe deducir impuestos a la tasa de no-notificación del 45% más el gravamen ACC sobre todos tus ingresos hasta que proporciones un número IRD y completes el formulario IR330. Podés reclamar el impuesto pagado en exceso al final del año fiscal.",
        },
        {
          q: "¿Cuánto tarda en obtenerse un número IRD en Nueva Zelanda?",
          a: "Inland Revenue generalmente procesa las solicitudes en 8 a 10 días hábiles una vez que recibe la solicitud completa y los documentos de respaldo. Solicitalo tan pronto como llegues, idealmente antes de empezar tu primer trabajo.",
        },
      ],
    },
    ja: {
      title: "IRDナンバーとは？ニュージーランドのワーホリ向け解説",
      description:
        "IRDナンバーはニュージーランドの納税者番号です。なければ雇用主は45%の税率で源泉徴収しなければなりません。内容・重要性・申請方法を解説します。",
      excerpt:
        "ニュージーランドでIRDナンバーがないと、雇用主は45%の未申告税率で源泉徴収する義務があります。IRDナンバーとは何か、取得の難しさ、申請方法を説明します。",
      sections: [
        {
          paragraphs: [
            "IRDナンバーとはニュージーランドの個人納税者番号で、Inland Revenue（IRD）が発行する8〜9桁の固有番号です。雇用主・銀行・KiwiSaverプロバイダーが税務処理に使用します。",
          ],
        },
        {
          heading: "なぜ早急に必要なのか",
          paragraphs: [
            "IRDナンバーと税コード申告書（IR330フォーム）を提出せずにニュージーランドで働き始めると、雇用主は法律上、未申告税率45%（さらにACCアーナーズレビー）で税金を源泉徴収しなければなりません。つまり、手続きが完了するまで総収入の約半分が差し引かれます。IRDナンバーの取得は到着後最も重要な手続きの一つです。",
          ],
        },
        {
          heading: "ジレンマ：銀行口座とIRDナンバー",
          paragraphs: [
            "ここが厄介な点です。IRDは税金還付や継続的な支払いのためにニュージーランドの銀行口座を持つことを強く推奨しています。一方、多くの銀行は口座開設プロセスの一環としてIRDナンバーを要求します。実際の解決策は、まず銀行口座を開設することです。一部の銀行やフィンテックプロバイダーは、最初からIRDナンバーを要求せずに新規到着者の口座を開設してくれます。その口座をIRDナンバー申請時に使用しましょう。",
          ],
        },
        {
          heading: "IRDナンバーの申請方法",
          paragraphs: [
            "ニュージーランドへの新規到着者は、myIRポータルからオンラインで申請するか、紙のIR595フォームに記入して申請できます。パスポート、ビザの詳細、ニュージーランドの住所が必要です。IRDは申請書類を受け取ってから通常8〜10営業日以内に番号を発行します。",
          ],
          bullets: [
            "到着後できるだけ早く申請する — 理想的には最初のシフト前に",
            "申請にはパスポート、ビザの詳細、NZの住所が必要",
            "処理には通常8〜10営業日かかる",
            "番号を受け取ったら、IR330税コードフォームとともに雇用主に提出する",
          ],
        },
        {
          heading: "使用する税コードについて",
          paragraphs: [
            "IRDナンバーとともに、IR330フォームで使用する税コードを雇用主に伝える必要があります。ニュージーランドで初めて働くワーホリの方の多くは、標準税コードの「M」を使用します。複数の仕事をする場合は、メインの仕事に「M」、副業には予想収入に応じて「SB」、「S」、または「SH」を使用してください。",
          ],
        },
        {
          heading: "Ternが役立つ理由",
          paragraphs: [
            "銀行口座を先に作るというジレンマは、まさにTernが解消しようとしている問題です。ワーキングホリデーの方が渡航前または到着直後に開設できる口座を構築中です。IRDナンバー申請時にすぐ使えるNZ銀行口座を確保し、45%の未申告税率で給料が減ることのないように。",
          ],
        },
      ],
      faq: [
        {
          q: "IRDナンバーなしでニュージーランドで働くとどうなりますか？",
          a: "IRDナンバーとIR330税コード申告書を提出するまで、雇用主はすべての収入に対して未申告税率45%とACCアーナーズレビーを源泉徴収しなければなりません。過払いした税金は年度末に請求できます。",
        },
        {
          q: "ニュージーランドのIRDナンバーの取得にどのくらい時間がかかりますか？",
          a: "完成した申請書と必要書類を受け取ってから、Inland Revenueは通常8〜10営業日以内に処理します。到着後すぐ、できれば最初の仕事を始める前に申請しましょう。",
        },
      ],
    },
    ko: {
      title: "IRD 번호란? 뉴질랜드 워홀러를 위한 완벽 가이드",
      description:
        "IRD 번호는 뉴질랜드의 납세자 식별 번호입니다. 없으면 고용주가 45%의 세율로 원천징수해야 합니다. IRD 번호가 무엇인지, 왜 중요한지, 신청 방법을 알아보세요.",
      excerpt:
        "뉴질랜드에서 IRD 번호가 없으면 고용주는 45%의 미신고 세율로 원천징수해야 합니다. IRD 번호가 무엇인지, 취득의 딜레마, 신청 방법을 설명합니다.",
      sections: [
        {
          paragraphs: [
            "IRD 번호는 뉴질랜드의 개인 납세자 식별 번호로, Inland Revenue(IRD)에서 발급하는 8~9자리 고유 번호입니다. 고용주, 은행, KiwiSaver 제공업체가 세금 처리에 사용합니다.",
          ],
        },
        {
          heading: "왜 빨리 받아야 하는가",
          paragraphs: [
            "IRD 번호와 세금 코드 신고서(IR330 양식)를 제출하지 않고 뉴질랜드에서 일을 시작하면, 고용주는 법적으로 미신고 세율 45%에 ACC 소득자 부담금을 더한 세율로 원천징수해야 합니다. 즉, 문제를 해결할 때까지 총 급여의 절반 가까이가 공제됩니다. IRD 번호를 빨리 받는 것은 도착 후 가장 중요한 행정 절차 중 하나입니다.",
          ],
        },
        {
          heading: "딜레마: 은행 계좌와 IRD 번호",
          paragraphs: [
            "여기서 답답한 부분이 있습니다. IRD는 세금 환급 및 지속적인 지급을 위해 뉴질랜드 은행 계좌를 갖도록 강력히 권장합니다. 반면 많은 은행들은 계좌 개설 과정에서 IRD 번호를 요구합니다. 현실적인 해결책은 먼저 은행 계좌를 개설하는 것입니다. 일부 은행과 핀테크 업체는 처음부터 IRD 번호를 요구하지 않고 신규 도착자의 계좌를 개설해 줍니다. 그 계좌를 IRD 번호 신청 시 사용하세요.",
          ],
        },
        {
          heading: "IRD 번호 신청 방법",
          paragraphs: [
            "뉴질랜드 신규 도착자는 myIR 포털에서 온라인으로 신청하거나 종이 IR595 양식을 작성하여 신청할 수 있습니다. 여권, 비자 정보, 뉴질랜드 주소가 필요합니다. IRD는 완성된 신청서류를 받은 후 보통 8~10 영업일 이내에 번호를 발급합니다.",
          ],
          bullets: [
            "도착 후 가능한 한 빨리 신청하세요 — 첫 근무 전에 신청하는 것이 이상적입니다",
            "신청에는 여권, 비자 정보, 뉴질랜드 주소가 필요합니다",
            "처리에는 보통 8~10 영업일이 소요됩니다",
            "번호를 받으면 IR330 세금 코드 양식과 함께 고용주에게 제출하세요",
          ],
        },
        {
          heading: "사용할 세금 코드",
          paragraphs: [
            "IRD 번호와 함께 IR330 양식에서 사용할 세금 코드를 고용주에게 알려야 합니다. 뉴질랜드에서 처음 일하는 대부분의 워홀러에게 표준 세금 코드는 'M'입니다. 직업이 두 개 이상인 경우, 주 직장에 'M'을 사용하고 예상 수입에 따라 부업에는 'SB', 'S' 또는 'SH'를 사용하세요.",
          ],
        },
        {
          heading: "Tern이 어떻게 도움이 되나요",
          paragraphs: [
            "은행 계좌를 먼저 개설해야 한다는 딜레마는 Tern이 없애고자 하는 바로 그 장벽입니다. 워킹홀리데이 여행자가 출발 전 또는 도착 즉시 개설할 수 있는 계좌를 만들고 있습니다. IRD 번호 신청 시 바로 사용할 수 있는 NZ 은행 계좌를 확보하고, 45% 미신고 세율로 급여가 줄어드는 일을 막아드립니다.",
          ],
        },
      ],
      faq: [
        {
          q: "IRD 번호 없이 뉴질랜드에서 일하면 어떻게 되나요?",
          a: "IRD 번호와 IR330 세금 코드 신고서를 제출할 때까지 고용주는 모든 수입에 대해 미신고 세율 45%와 ACC 소득자 부담금을 원천징수해야 합니다. 과납된 세금은 과세 연도 말에 환급 신청할 수 있습니다.",
        },
        {
          q: "뉴질랜드에서 IRD 번호를 받는 데 얼마나 걸리나요?",
          a: "완성된 신청서와 지원 서류를 받은 후 Inland Revenue는 보통 8~10 영업일 이내에 처리합니다. 도착 후 즉시, 가능하면 첫 직장을 시작하기 전에 신청하세요.",
        },
      ],
    },
    "zh-TW": {
      title: "什麼是 IRD 號碼？紐西蘭打工度假者完整指南",
      description:
        "IRD 號碼是紐西蘭的個人稅號。沒有 IRD 號碼，雇主須以 45% 稅率代扣所得稅。本文說明它是什麼、為何重要，以及如何在抵達後申請。",
      excerpt:
        "在紐西蘭沒有 IRD 號碼，雇主必須以 45% 的未申報稅率代扣稅款。本文說明 IRD 號碼是什麼、申請的先有雞還是先有蛋困境，以及申請方式。",
      sections: [
        {
          paragraphs: [
            "IRD 號碼是紐西蘭的個人稅務識別號碼，由稅務局（Inland Revenue，IRD）發出的 8 至 9 位數唯一編號，雇主、銀行及 KiwiSaver 供應商使用此號碼處理你的稅務事宜。",
          ],
        },
        {
          heading: "為什麼必須盡快取得",
          paragraphs: [
            "若你在未提交 IRD 號碼及稅碼申報表（IR330 表格）的情況下開始在紐西蘭工作，雇主依法必須以 45% 的未申報稅率加上 ACC 收入附加費代扣所得稅。這意味著在你完成手續前，近一半的毛薪將被扣留。盡快取得 IRD 號碼是你抵達後最重要的行政事務之一。",
          ],
        },
        {
          heading: "先有雞還是先有蛋：銀行帳戶與 IRD 號碼",
          paragraphs: [
            "這裡有個令人頭痛的問題：IRD 強烈建議你擁有紐西蘭銀行帳戶以接收退稅及持續付款；然而，許多銀行在開戶流程中也會要求提供 IRD 號碼。實際可行的解決方式是先開立銀行帳戶——部分銀行和金融科技業者允許新抵達者在未提供 IRD 號碼的情況下開戶——然後在申請 IRD 號碼時使用該帳戶。",
          ],
        },
        {
          heading: "如何申請 IRD 號碼",
          paragraphs: [
            "新抵達紐西蘭的人可透過 myIR 線上入口申請，或填寫紙本 IR595 表格提交申請。你需要提供護照、簽證資料及紐西蘭地址。IRD 在收到完整申請資料後，通常在 8 至 10 個工作日內發出號碼。",
          ],
          bullets: [
            "抵達後盡快申請——如果可以，在第一個班次開始前完成",
            "申請時需要護照、簽證資料及紐西蘭地址",
            "處理時間通常為 8 至 10 個工作日",
            "收到號碼後，連同填妥的 IR330 稅碼申報表一起交給雇主",
          ],
        },
        {
          heading: "應使用哪個稅碼",
          paragraphs: [
            "除了 IRD 號碼外，你還需要在 IR330 表格上告知雇主應使用的稅碼。對大多數初次在紐西蘭工作的打工度假者而言，標準稅碼為「M」。若同時從事多份工作，主要工作使用「M」，兼職工作則根據預期收入使用「SB」、「S」或「SH」。",
          ],
        },
        {
          heading: "Tern 如何幫助你",
          paragraphs: [
            "銀行帳戶的先後順序困境，正是 Tern 致力消除的障礙。我們正在打造一個讓打工度假旅行者在出發前或抵達當下即可開立的帳戶，讓你在申請 IRD 號碼時就有可用的紐西蘭銀行帳戶，再也不必因 45% 的未申報稅率而損失薪資。",
          ],
        },
      ],
      faq: [
        {
          q: "在紐西蘭沒有 IRD 號碼就工作會怎樣？",
          a: "在你提交 IRD 號碼及完成 IR330 稅碼申報表之前，雇主必須對你所有收入以未申報稅率 45% 加上 ACC 收入附加費代扣稅款。多扣的稅款可在稅務年度結束時申請退稅。",
        },
        {
          q: "在紐西蘭取得 IRD 號碼需要多久？",
          a: "Inland Revenue 在收到完整申請資料及支持文件後，通常在 8 至 10 個工作日內完成處理。請在抵達後立即申請，最好在開始第一份工作之前完成。",
        },
      ],
    },
  },
};
