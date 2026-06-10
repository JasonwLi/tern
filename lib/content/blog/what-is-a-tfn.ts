import type { Article } from "../types";

export const article: Article = {
  slug: "what-is-a-tfn",
  kind: "post",
  date: "2026-06-02",
  author: "Tern",
  emoji: "🪪",
  accent: "bg-lime-300",
  readMinutes: 4,
  sources: [
    {
      label: "Australian Taxation Office (ATO) — Apply for a TFN",
      url: "https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn",
    },
    {
      label: "Australian Taxation Office (ATO) — Working holiday makers",
      url: "https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/coming-to-australia/working-holiday-makers",
    },
  ],
  i18n: {
    en: {
      title: "What is a TFN? Australia tax number guide for WHV makers",
      description:
        "A TFN is your Australian personal tax ID. Without one, employers withhold 45% of your pay. How to apply free via the ATO and avoid the ABN trap.",
      excerpt:
        "Without a TFN your employer withholds 45% of your wages. Here's what a TFN is, how to apply free via the ATO once you're in Australia, and the ABN trap every WHV maker should know about.",
      sections: [
        {
          paragraphs: [
            "A Tax File Number (TFN) is a unique 9-digit number issued by the Australian Taxation Office (ATO) that identifies you in the Australian tax system. Every person who earns income in Australia needs one — and without it, your employer is legally required to withhold tax at the top rate of 45% from every pay.",
          ],
        },
        {
          heading: "Why working holiday makers need a TFN",
          paragraphs: [
            "When you start a job in Australia on a working holiday visa (subclass 417 or 462), your employer will ask for your TFN on the Tax File Number Declaration form. If you can't provide one, they must withhold at the maximum rate — 45% — from day one.",
            "You have a 28-day grace period: if you start work before your TFN arrives, your employer can hold off the maximum withholding for up to 28 days while your application is processed. After 28 days without a TFN, the 45% withholding kicks in automatically. Applying the day you arrive is the safest move.",
          ],
          bullets: [
            "With a TFN and a registered WHM employer: tax withheld at 15% on the first AUD 45,000 of earnings",
            "Without a TFN: tax withheld at 45% on all payments — you can claim most of this back at tax time, but it locks up a large chunk of your pay",
            "28-day grace period after starting work before maximum withholding applies",
          ],
        },
        {
          heading: "How to apply for a TFN: free and online",
          paragraphs: [
            "You must be physically in Australia to apply. The process is free — the ATO never charges for a TFN, and any website charging you a fee for this is a third party you don't need.",
          ],
          bullets: [
            "Go to ato.gov.au and navigate to 'Apply for a TFN' under individuals",
            "Working holiday visa holders apply via the foreign passport holders and temporary visitors pathway",
            "You will need your passport details and your Australian address",
            "After submitting online, your TFN is posted to your Australian address — allow up to 28 days, though many applicants receive it in 1–2 weeks",
            "Keep your TFN private — treat it like a password; only give it to employers, the ATO, and your bank",
          ],
        },
        {
          heading: "The TFN vs ABN trap",
          paragraphs: [
            "Some employers — particularly in hospitality, agriculture, and construction — will suggest that you work as a contractor on an Australian Business Number (ABN) rather than as an employee. This means you invoice them, they pay you without withholding tax, and you are responsible for paying tax yourself.",
            "For most working holiday jobs this is the wrong arrangement. If you are doing regular ongoing work under the direction of the employer, at their workplace, using their tools, you are legally an employee — not a contractor. Working as a fake contractor (sometimes called 'sham contracting') means you miss out on minimum wages, superannuation, workers' compensation, and paid leave entitlements. It also creates a more complex tax situation.",
            "The rule of thumb: if your employer tells you that you need an ABN to do what is obviously employee-style work, ask for a written explanation and consider seeking advice from the Fair Work Ombudsman before agreeing.",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Tern reminds you to apply for your TFN before or immediately after landing, and stores your TFN declaration status securely so you always know which employers have received it. At the end of the financial year, Tern surfaces your income and withholding history so you can lodge your tax return accurately — and claim back any over-withholding before the deadline.",
          ],
        },
      ],
      faq: [
        {
          q: "How long does it take to get a TFN in Australia?",
          a: "After submitting your online application via the ATO, your TFN is mailed to your Australian postal address. Most applicants receive it within 1 to 2 weeks, but allow up to 28 days. Apply as soon as you arrive and have an address — the 28-day grace period before the 45% withholding rate applies only runs from when you start work.",
        },
        {
          q: "Can my employer refuse to pay me until I have a TFN?",
          a: "No. An employer cannot withhold payment; they simply must withhold tax at 45% from your wages if you have not provided a TFN after the 28-day grace period. You can claim back any excess withholding when you lodge your end-of-year tax return with the ATO.",
        },
      ],
    },
    es: {
      title: "¿Qué es un TFN? Guía del número impositivo de Australia",
      description:
        "El TFN es tu número fiscal en Australia. Sin él te retienen el 45% del sueldo. Cómo solicitarlo gratis al ATO y evitar la trampa del ABN.",
      excerpt:
        "Sin TFN tu empleador retiene el 45% de tu sueldo. Esto es lo que es un TFN, cómo solicitarlo gratis a través del ATO una vez que llegas a Australia, y la trampa del ABN que todo viajero con working holiday debe conocer.",
      sections: [
        {
          paragraphs: [
            "El Tax File Number (TFN) es un número único de 9 dígitos emitido por la Oficina de Impuestos de Australia (ATO) que te identifica dentro del sistema tributario australiano. Toda persona que genere ingresos en Australia necesita uno — sin él, tu empleador está legalmente obligado a retenerte el impuesto a la tasa máxima del 45% en cada pago.",
          ],
        },
        {
          heading: "Por qué los titulares de la working holiday necesitan un TFN",
          paragraphs: [
            "Cuando empiezas un trabajo en Australia con una visa working holiday (subclase 417 o 462), tu empleador te pedirá el TFN en el formulario de Declaración de TFN. Si no puedes proporcionarlo, deben retenerte a la tasa máxima — el 45% — desde el primer día.",
            "Tienes un período de gracia de 28 días: si empiezas a trabajar antes de que llegue tu TFN, tu empleador puede postponer la retención máxima hasta 28 días mientras se procesa tu solicitud. Pasados 28 días sin TFN, la retención del 45% se activa automáticamente. Lo más prudente es solicitar el TFN el día que llegas.",
          ],
          bullets: [
            "Con TFN y empleador registrado para WHM: impuesto retenido al 15% sobre los primeros AUD 45,000 de ganancias",
            "Sin TFN: impuesto retenido al 45% sobre todos los pagos — puedes recuperar la mayor parte al declarar impuestos, pero inmoviliza una buena parte de tu sueldo",
            "Período de gracia de 28 días desde que empiezas a trabajar antes de que aplique la retención máxima",
          ],
        },
        {
          heading: "Cómo solicitar un TFN: gratis y online",
          paragraphs: [
            "Tienes que estar físicamente en Australia para solicitarlo. El proceso es gratuito — el ATO nunca cobra por un TFN, y cualquier sitio web que te cobre por esto es un intermediario que no necesitas.",
          ],
          bullets: [
            "Entra a ato.gov.au y busca 'Apply for a TFN' en la sección de personas físicas",
            "Los titulares de visa working holiday aplican a través de la vía para titulares de pasaporte extranjero y visitantes temporales",
            "Vas a necesitar los datos de tu pasaporte y tu dirección australiana",
            "Tras enviar la solicitud online, tu TFN se envía por correo a tu dirección australiana — espera hasta 28 días, aunque muchos solicitantes lo reciben en 1 o 2 semanas",
            "Guarda tu TFN en privado — trátalo como una contraseña; dáselo solo a tus empleadores, al ATO y a tu banco",
          ],
        },
        {
          heading: "La trampa TFN vs ABN",
          paragraphs: [
            "Algunos empleadores — especialmente en hotelería, agricultura y construcción — pueden sugerirte que trabajes como contratista bajo un Australian Business Number (ABN) en lugar de como empleado. Esto significa que les facturas, ellos te pagan sin retener impuestos y tú eres responsable de pagar los impuestos por tu cuenta.",
            "Para la mayoría de los trabajos con working holiday, este acuerdo no es el correcto. Si haces trabajo regular y continuo bajo la dirección del empleador, en su lugar de trabajo y con sus herramientas, legalmente eres un empleado, no un contratista. Trabajar como contratista falso (a veces llamado 'sham contracting') implica perder el salario mínimo, la jubilación (superannuation), la compensación laboral y los beneficios de licencia paga. Además, complica tu situación impositiva.",
            "La regla general: si tu empleador te dice que necesitas un ABN para hacer lo que claramente es trabajo de empleado, pídele una explicación por escrito y considera consultar al Fair Work Ombudsman antes de aceptar.",
          ],
        },
        {
          heading: "Cómo te ayuda Tern",
          paragraphs: [
            "Tern te recuerda que solicites tu TFN antes o inmediatamente después de llegar, y guarda de forma segura el estado de tu declaración de TFN para que siempre sepas a qué empleadores se lo diste. Al final del año fiscal, Tern muestra tu historial de ingresos y retenciones para que puedas presentar tu declaración impositiva con precisión — y reclamar cualquier exceso de retención antes del vencimiento.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Cuánto tarda en llegar un TFN en Australia?",
          a: "Después de enviar tu solicitud online a través del ATO, el TFN se envía por correo a tu dirección postal australiana. La mayoría de los solicitantes lo reciben en 1 o 2 semanas, pero espera hasta 28 días. Solicítalo en cuanto llegues y tengas una dirección — el período de gracia de 28 días antes de que aplique la retención del 45% corre desde que empiezas a trabajar.",
        },
        {
          q: "¿Mi empleador puede negarse a pagarme hasta que tenga un TFN?",
          a: "No. Un empleador no puede retener el pago; simplemente debe retener el impuesto al 45% de tu sueldo si no proporcionaste un TFN después del período de gracia de 28 días. Podés recuperar cualquier exceso de retención cuando presentes tu declaración de impuestos de fin de año ante el ATO.",
        },
      ],
    },
    ja: {
      title: "TFNとは？ワーホリのためのオーストラリア納税番号ガイド",
      description:
        "TFNはオーストラリアの個人納税番号。なければ給与の45%が源泉徴収されます。ATO無料申請とABNの落とし穴を解説。",
      excerpt:
        "TFNがなければ雇用主は給与の45%を天引きします。TFNとは何か、オーストラリア到着後にATOを通じて無料で申請する方法、そしてワーホリメーカー全員が知るべきABNの落とし穴を解説します。",
      sections: [
        {
          paragraphs: [
            "Tax File Number（TFN）は、オーストラリア税務署（ATO）が発行する、オーストラリアの税制においてあなたを識別する9桁の固有番号です。オーストラリアで収入を得るすべての人に必要で、TFNがなければ雇用主はすべての支払いに対して最高税率45%で源泉徴収することが法律上義務付けられています。",
          ],
        },
        {
          heading: "ワーホリメーカーにTFNが必要な理由",
          paragraphs: [
            "ワーキングホリデービザ（subclass 417または462）でオーストラリアで仕事を始めると、雇用主はTFN申告書でTFNを求めます。提供できない場合、雇用主は初日から最高税率45%で源泉徴収しなければなりません。",
            "28日間の猶予期間があります：TFNが届く前に働き始めた場合、申請処理中は最大28日間、雇用主は最高税率の源泉徴収を保留できます。28日を過ぎてもTFNを提供しないと、自動的に45%の源泉徴収が始まります。到着当日に申請するのが最も安全です。",
          ],
          bullets: [
            "TFNあり＋登録済みWHM雇用主：最初のAUD 45,000の収入に対して15%の税率で源泉徴収",
            "TFNなし：すべての支払いに対して45%の税率で源泉徴収 — 確定申告時に大部分を取り戻せますが、給与の大きな部分が一時的に差し引かれます",
            "最高税率が適用されるまで、就業開始から28日間の猶予期間あり",
          ],
        },
        {
          heading: "TFNの申請方法：無料・オンライン",
          paragraphs: [
            "申請するにはオーストラリア国内にいる必要があります。手続きは無料です。ATOはTFNに対して一切費用を請求しません。手数料を請求するウェブサイトは不要な第三者サービスです。",
          ],
          bullets: [
            "ato.gov.auにアクセスし、個人向けの「Apply for a TFN」に進む",
            "ワーキングホリデービザ保持者は、外国旅券保持者・一時的訪問者のルートで申請する",
            "パスポートの詳細とオーストラリアの住所が必要",
            "オンライン申請後、TFNはオーストラリアの住所に郵送されます。最大28日かかりますが、多くの申請者は1〜2週間で受け取れます",
            "TFNは厳重に管理してください。パスワードと同様に扱い、雇用主・ATO・銀行以外には教えないこと",
          ],
        },
        {
          heading: "TFN vs ABNの落とし穴",
          paragraphs: [
            "一部の雇用主、特に飲食業・農業・建設業では、従業員としてではなくAustralian Business Number（ABN）を使った請負業者として働くよう提案することがあります。この場合、あなたが請求書を発行し、雇用主は源泉徴収なしで支払い、あなた自身が税金を納める義務を負います。",
            "ほとんどのワーホリの仕事では、この契約形態は適切ではありません。雇用主の指示のもと、雇用主の職場で、雇用主の道具を使って継続的に働く場合、法律上あなたは従業員であり、請負業者ではありません。偽りの請負業者として働く（「sham contracting」とも呼ばれる）と、最低賃金・スーパーアニュエーション・労災補償・有給休暇などの権利を失います。また、税務手続きも複雑になります。",
            "基本的な判断基準：明らかに従業員のような働き方に対してABNが必要と言われた場合は、書面での説明を求め、同意する前にFair Work Ombudsmanへの相談を検討してください。",
          ],
        },
        {
          heading: "Ternが役立つ理由",
          paragraphs: [
            "Ternは到着前または到着直後にTFNを申請するようリマインドし、TFN申告状況を安全に保存することで、どの雇用主にTFNを提供したかを常に把握できます。会計年度末には、TernがあなたのTFNの収入と源泉徴収履歴を表示し、正確な確定申告を行えるようサポートします。過剰に源泉徴収された分を期限前にしっかり取り戻せます。",
          ],
        },
      ],
      faq: [
        {
          q: "オーストラリアでTFNを取得するまでどのくらいかかりますか？",
          a: "ATOのオンライン申請を提出した後、TFNはオーストラリアの郵送先住所に送られます。多くの申請者は1〜2週間で受け取りますが、最大28日かかることもあります。到着したらすぐに住所が確保でき次第申請しましょう。就業開始から45%源泉徴収が始まるまでの28日間の猶予期間は、働き始めた日から始まります。",
        },
        {
          q: "TFNがなければ雇用主は支払いを拒否できますか？",
          a: "いいえ。雇用主は支払い自体を拒否することはできません。28日間の猶予期間後にTFNを提供しなかった場合、給与から45%の税率で源泉徴収するだけです。過剰な源泉徴収分は、ATOで年末の確定申告を行う際に取り戻すことができます。",
        },
      ],
    },
    ko: {
      title: "TFN이란? 호주 워킹홀리데이 세금 번호 완벽 가이드",
      description:
        "TFN은 호주의 개인 납세 번호. 없으면 급여의 45%를 원천징수합니다. ATO 무료 신청 방법과 ABN 함정을 정리했습니다.",
      excerpt:
        "TFN이 없으면 고용주가 급여의 45%를 공제합니다. TFN이 무엇인지, 호주 도착 후 ATO를 통해 무료로 신청하는 방법, 모든 워홀러가 알아야 할 ABN 함정을 소개합니다.",
      sections: [
        {
          paragraphs: [
            "Tax File Number(TFN)는 호주 국세청(ATO)이 발급하는 9자리 고유 번호로, 호주 세금 시스템에서 본인을 식별하는 데 사용됩니다. 호주에서 수입이 있는 모든 사람에게 필요하며, 없을 경우 고용주는 모든 급여에서 최고 세율인 45%를 원천징수해야 할 법적 의무가 있습니다.",
          ],
        },
        {
          heading: "워킹홀리데이 메이커에게 TFN이 필요한 이유",
          paragraphs: [
            "워킹홀리데이 비자(417 또는 462 서브클래스)로 호주에서 일을 시작하면, 고용주는 TFN 신고서에 TFN을 요청합니다. 제공하지 못하면 첫날부터 최고 세율인 45%가 원천징수됩니다.",
            "28일 유예 기간이 있습니다: TFN이 오기 전에 일을 시작하면, 고용주는 신청 처리 기간 동안 최대 28일간 최고 세율 원천징수를 보류할 수 있습니다. 28일이 지나도 TFN을 제공하지 않으면 45% 원천징수가 자동으로 적용됩니다. 도착 당일 신청하는 것이 가장 안전합니다.",
          ],
          bullets: [
            "TFN 있음 + 등록된 WHM 고용주: 첫 AUD 45,000 수입에 대해 15% 세율 원천징수",
            "TFN 없음: 모든 급여에 45% 세율 원천징수 — 연말 세금 신고 시 대부분 돌려받을 수 있지만, 급여의 상당 부분이 일시적으로 공제됩니다",
            "취업 시작 후 최고 세율이 적용되기까지 28일 유예 기간 있음",
          ],
        },
        {
          heading: "TFN 신청 방법: 무료, 온라인",
          paragraphs: [
            "신청하려면 반드시 호주에 있어야 합니다. 절차는 무료입니다. ATO는 TFN에 대해 비용을 청구하지 않으며, 수수료를 요구하는 웹사이트는 불필요한 제3자입니다.",
          ],
          bullets: [
            "ato.gov.au에 접속하여 개인 섹션에서 'Apply for a TFN' 선택",
            "워킹홀리데이 비자 소지자는 외국 여권 소지자 및 임시 방문자 경로로 신청",
            "여권 정보와 호주 주소가 필요합니다",
            "온라인 신청 후 TFN은 호주 우편 주소로 발송됩니다. 최대 28일이 소요되지만 대부분 1~2주 내 수령합니다",
            "TFN은 비밀로 유지하세요 — 비밀번호처럼 취급하며, 고용주, ATO, 은행에만 제공하세요",
          ],
        },
        {
          heading: "TFN vs ABN 함정",
          paragraphs: [
            "일부 고용주, 특히 요식업, 농업, 건설업에서는 직원이 아닌 Australian Business Number(ABN)를 사용하는 계약자로 일하도록 제안할 수 있습니다. 이 경우 인보이스를 발행하고, 고용주는 원천징수 없이 지급하며, 세금은 본인이 직접 납부해야 합니다.",
            "대부분의 워킹홀리데이 일자리에서 이 방식은 적합하지 않습니다. 고용주의 지시하에, 고용주의 작업장에서, 고용주의 장비를 사용해 정기적으로 계속 일한다면 법적으로 직원이지 계약자가 아닙니다. 허위 계약자 방식(일명 '사기 계약')으로 일하면 최저 임금, 슈퍼애뉴에이션(퇴직연금), 산재보험, 유급 휴가 권리를 잃게 됩니다. 세금 처리도 복잡해집니다.",
            "기본 원칙: 고용주가 명백히 직원 형태의 업무에 ABN이 필요하다고 하면, 서면 설명을 요청하고 동의하기 전에 Fair Work Ombudsman에 상담하는 것을 고려하세요.",
          ],
        },
        {
          heading: "Tern이 어떻게 도움이 되나요",
          paragraphs: [
            "Tern은 도착 전 또는 도착 직후 TFN을 신청하도록 알림을 보내고, TFN 신고 현황을 안전하게 저장하여 어떤 고용주에게 TFN을 제공했는지 항상 파악할 수 있게 합니다. 회계 연도 말에는 Tern이 수입 및 원천징수 내역을 정리해 주어 정확한 세금 신고가 가능하고, 마감 전에 초과 원천징수분을 모두 돌려받을 수 있습니다.",
          ],
        },
      ],
      faq: [
        {
          q: "호주에서 TFN을 받는 데 얼마나 걸리나요?",
          a: "ATO 온라인 신청 제출 후 TFN은 호주 우편 주소로 발송됩니다. 대부분 1~2주 내에 받지만 최대 28일이 걸릴 수 있습니다. 도착 즉시 주소가 생기면 바로 신청하세요. 45% 원천징수가 적용되기까지의 28일 유예 기간은 취업 시작일부터 적용됩니다.",
        },
        {
          q: "고용주가 TFN이 없다는 이유로 급여 지급을 거부할 수 있나요?",
          a: "아닙니다. 고용주는 급여 지급 자체를 거부할 수 없습니다. 28일 유예 기간 후 TFN을 제공하지 않으면 급여에서 45% 세율로 원천징수할 뿐입니다. 초과 원천징수된 금액은 ATO에 연말 세금 신고서를 제출할 때 돌려받을 수 있습니다.",
        },
      ],
    },
    "zh-TW": {
      title: "什麼是TFN？澳洲打工度假稅務號碼完全指南",
      description:
        "Tax File Number（TFN）是你在澳洲的個人稅務編號。沒有TFN，雇主必須扣留45%的薪資。本文說明如何免費申請，以及TFN與ABN的陷阱。",
      excerpt:
        "沒有TFN，雇主將扣留你45%的薪資。TFN是什麼、抵澳後如何透過ATO免費申請，以及每位打工度假者都該了解的ABN陷阱——一次說清楚。",
      sections: [
        {
          paragraphs: [
            "Tax File Number（TFN）是澳洲稅務局（ATO）核發的9位數唯一號碼，用於識別你在澳洲稅務體系中的身份。在澳洲有收入的每個人都需要TFN——沒有TFN，雇主依法必須從每筆薪資中以最高稅率45%扣繳稅款。",
          ],
        },
        {
          heading: "打工度假者為何需要TFN",
          paragraphs: [
            "持打工度假簽證（417或462類）在澳洲開始工作時，雇主會在TFN申報表上要求你填寫TFN。若無法提供，雇主必須從第一天起以最高稅率45%扣繳。",
            "你有28天的寬限期：若在TFN寄達前已開始工作，雇主可在申請處理期間暫緩執行最高稅率，最長28天。超過28天仍未提供TFN，45%的扣繳將自動生效。最安全的做法是抵澳當天就申請。",
          ],
          bullets: [
            "有TFN且雇主已登記為WHM雇主：前AUD 45,000收入按15%稅率扣繳",
            "無TFN：所有薪資按45%稅率扣繳——年度報稅時可申請退回大部分，但會佔用薪資的一大部分",
            "開始工作後28天內為寬限期，之後最高稅率才會正式生效",
          ],
        },
        {
          heading: "如何申請TFN：免費線上辦理",
          paragraphs: [
            "申請時你必須在澳洲境內。整個流程完全免費——ATO從不收取TFN申請費用，任何向你收費的網站都是你不需要的第三方服務。",
          ],
          bullets: [
            "前往ato.gov.au，在個人專區找到「Apply for a TFN」",
            "打工度假簽證持有人請透過外國護照持有人及臨時訪客申請路徑辦理",
            "需要護照資料及澳洲地址",
            "線上提交後，TFN將以郵寄方式寄至你的澳洲地址，最長需28天，但多數申請人在1至2週內即可收到",
            "請妥善保管TFN——視同密碼處理，僅向雇主、ATO及銀行提供",
          ],
        },
        {
          heading: "TFN與ABN的陷阱",
          paragraphs: [
            "部分雇主，尤其是餐飲業、農業及建築業，可能會建議你以Australian Business Number（ABN）作為承包商身份工作，而非以員工身份受雇。這意味著你需要開具發票，雇主無需代扣稅款，你則需自行申報並繳納稅款。",
            "對大多數打工度假工作而言，這種安排並不合適。若你在雇主指示下、於雇主的工作場所、使用雇主的工具進行持續性工作，法律上你是員工而非承包商。以假承包商身份工作（有時稱為「假冒承包」）意味著你將失去最低工資、退休金（superannuation）、工傷補償及有薪假期等權益，同時也讓稅務處理更加複雜。",
            "基本原則：若雇主要求你以ABN從事明顯屬於員工性質的工作，請要求書面說明，並在同意前考慮向Fair Work Ombudsman諮詢。",
          ],
        },
        {
          heading: "Tern 如何協助你",
          paragraphs: [
            "Tern會提醒你在抵澳前或抵澳後立即申請TFN，並安全儲存你的TFN申報狀態，讓你隨時掌握已向哪些雇主提供了TFN。在財政年度結束時，Tern會整理你的收入與扣繳紀錄，協助你準確完成報稅——並在截止日期前申請退回所有超額扣繳的稅款。",
          ],
        },
      ],
      faq: [
        {
          q: "在澳洲申請TFN需要多久？",
          a: "透過ATO提交線上申請後，TFN將以郵寄方式寄至你的澳洲地址。多數申請人在1至2週內收到，但最長可能需要28天。一抵澳有了地址就立即申請——取業後45%扣繳稅率生效前的28天寬限期，是從你開始工作當天起算。",
        },
        {
          q: "雇主可以因為我沒有TFN而拒絕付款嗎？",
          a: "不行。雇主不能拒絕支付薪資；若你在28天寬限期後仍未提供TFN，他們只能按45%稅率從薪資中扣繳稅款。超額扣繳的金額，在你向ATO提交年度報稅表時可以申請退回。",
        },
      ],
    },
  },
};
