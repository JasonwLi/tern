import type { Article } from "../types";

export const article: Article = {
  slug: "bank-account-working-holiday-new-zealand",
  kind: "guide",
  date: "2026-05-21",
  emoji: "🥝",
  accent: "bg-sky-300",
  readMinutes: 6,
  sources: [
    {
      label: "Inland Revenue New Zealand — IRD number for new arrivals",
      url: "https://www.ird.govt.nz/managing-my-tax/ird-numbers/ird-numbers-for-individuals/new-arrival-to-new-zealand---ird-number-application",
    },
    {
      label: "Immigration New Zealand — Banking in New Zealand",
      url: "https://www.immigration.govt.nz/live/setting-up-your-life-in-new-zealand/managing-your-money-banking-and-taxes-in-new-zealand/banking-in-new-zealand/",
    },
  ],
  i18n: {
    en: {
      title: "Opening a bank account in New Zealand on a working holiday",
      description:
        "Banking in New Zealand on a working holiday — IRD numbers, the no-fixed-address hurdle, which banks to try first, and getting paid in NZD.",
      excerpt:
        "No IRD number means your employer withholds tax at 45%. Here's how to get banked quickly, grab your IRD number, and start receiving pay in NZD.",
      sections: [
        {
          paragraphs: [
            "Banking in New Zealand is one of the first practical hurdles of a working holiday — and it's a circular one. You need a bank account to get an IRD number, and you need an IRD number to avoid being taxed at 45%. Getting both sorted in your first week saves you real money.",
          ],
        },
        {
          heading: "Why the IRD number is non-negotiable",
          paragraphs: [
            "If you start work without giving your employer an IRD number and a completed tax code declaration (IR330 form), New Zealand law requires them to withhold tax at the non-declaration rate — 45% — on everything you earn. This has been the rate since April 2020 and it applies regardless of how little you earn.",
            "With an IRD number and the correct tax code, most working holiday makers are taxed at rates between 10.5% and 33% depending on their income band. Providing your IRD number to every employer is therefore one of the highest-value actions you can take on arrival.",
          ],
        },
        {
          heading: "Opening a bank account without a fixed address",
          paragraphs: [
            "The biggest frustration for newly arrived WHV holders is the address requirement. Banks need a New Zealand address to open an account, but you may be living in a hostel or haven't signed a lease yet.",
          ],
          bullets: [
            "ANZ and BNZ let you apply online from overseas up to 90 days before arrival — you then activate in branch when you land",
            "Many banks accept a hostel address as a temporary address if you explain you hold a working holiday visa",
            "ASB is the strictest — it typically requires a residential address, not a hostel, so leave it as a backup",
            "Bring your passport, working holiday visa confirmation, and your overseas home address (bank statement or utility bill from the last 12 months works)",
            "Kiwibank and Westpac also allow WHV holders to open accounts; check their websites for current pre-arrival options",
          ],
        },
        {
          heading: "Getting your IRD number",
          paragraphs: [
            "Once your bank account is open, apply for your IRD number online through the Inland Revenue website. The application asks for your passport details, your Immigration New Zealand application number (from your visa), and your most recent overseas tax number if you have one.",
            "If you apply online, Inland Revenue sends your IRD number by text or email within about 2 days. A postal application can take up to 10 days. Apply online — you want this number before your first shift.",
          ],
          bullets: [
            "Go to ird.govt.nz and select 'Apply for an IRD number'",
            "Choose the 'New arrival' pathway and enter your visa details",
            "Provide your NZ bank account number (this is why you need the account first)",
            "Your IRD number arrives by text/email in roughly 2 days",
            "Hand it to your employer along with a completed IR330 tax code declaration form",
          ],
        },
        {
          heading: "Getting paid in NZD — what your employer needs",
          paragraphs: [
            "New Zealand bank accounts use a 15-digit account number in the format: bank–branch–account–suffix (for example, 12-3456-7890123-00). This full number is what you give your employer for payroll — there is no separate BSB-style code like in Australia.",
            "Most banks provide this number in their app immediately after account activation. Screenshot it and save it somewhere accessible — you'll be asked for it on your first day of work.",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Tern guides you through the bank account and IRD number steps in sequence the moment you land, stores your NZ account details securely, and reminds you to submit your IRD number to each new employer. If your employer ever withholds at the 45% non-declaration rate, Tern flags it immediately so you can correct it before the over-withholding compounds.",
          ],
        },
      ],
      faq: [
        {
          q: "Can I apply for an IRD number without a NZ bank account?",
          a: "Technically yes — there is a 'no bank account' option on the IRD application — but you'll still need to add a NZ bank account later to receive any refund or interact with the tax system. It's faster to get the account first so you can complete the IRD application in one go.",
        },
        {
          q: "What happens if I give my employer my IRD number late?",
          a: "Your employer is legally required to withhold at 45% until you provide your IRD number and a completed IR330. Once you do, they should switch to the correct rate from your next pay. Any over-withheld tax can be reclaimed when you file your end-of-year return.",
        },
        {
          q: "Which NZ bank is best for a working holiday visa holder?",
          a: "ANZ and BNZ are generally the most WHV-friendly because they offer pre-arrival online applications and are flexible about temporary addresses. ASB is the most restrictive. Kiwibank and Westpac sit in between. Check current terms directly with each bank before you arrive.",
        },
      ],
    },
    es: {
      title: "Cómo abrir una cuenta bancaria en Nueva Zelanda con visa working holiday",
      description:
        "Banca en Nueva Zelanda con WHV: número IRD, el problema sin dirección fija, qué bancos son más flexibles y cómo cobrar en NZD.",
      excerpt:
        "Sin número IRD, tu empleador te retiene el 45% de impuestos. Acá te explicamos cómo abrir tu cuenta rápido, obtener el IRD y empezar a cobrar en NZD.",
      sections: [
        {
          paragraphs: [
            "Abrir una cuenta bancaria en Nueva Zelanda es uno de los primeros obstáculos prácticos de la visa working holiday — y es un círculo vicioso. Necesitas una cuenta para obtener el número IRD, y necesitas el número IRD para evitar que te retengan el 45% de impuestos. Resolver ambas cosas en tu primera semana te ahorra plata de verdad.",
          ],
        },
        {
          heading: "Por qué el número IRD no es opcional",
          paragraphs: [
            "Si empiezas a trabajar sin haberle dado a tu empleador un número IRD y el formulario de declaración de código fiscal (IR330), la ley neozelandesa lo obliga a retener impuestos a la tasa de no declaración — el 45% — sobre todo lo que ganas. Esta tasa rige desde abril de 2020 y aplica sin importar cuánto ganes.",
            "Con un número IRD y el código fiscal correcto, la mayoría de los trabajadores en visa working holiday tributan entre el 10,5% y el 33%, según su tramo de ingresos. Por eso, entregarle tu número IRD a cada empleador es una de las acciones más rentables que puedes hacer al llegar.",
          ],
        },
        {
          heading: "Cómo abrir una cuenta sin dirección fija",
          paragraphs: [
            "El mayor problema para los recién llegados con WHV es el requisito de dirección. Los bancos necesitan una dirección en Nueva Zelanda para abrir la cuenta, pero puede que estés viviendo en un hostel o que todavía no hayas firmado un contrato de alquiler.",
          ],
          bullets: [
            "ANZ y BNZ te permiten solicitar la cuenta online desde el exterior hasta 90 días antes de llegar — la activas en sucursal cuando aterrizas",
            "Muchos bancos aceptan la dirección del hostel como dirección temporal si explicas que tienes visa working holiday",
            "ASB es el más estricto — generalmente requiere domicilio real, no hostel, así que dejalo como opción de respaldo",
            "Lleva tu pasaporte, confirmación de la visa working holiday y tu dirección en el extranjero (un extracto bancario o factura de los últimos 12 meses sirve)",
            "Kiwibank y Westpac también permiten a los titulares de WHV abrir cuentas; revisa sus webs para opciones previas a la llegada",
          ],
        },
        {
          heading: "Cómo obtener tu número IRD",
          paragraphs: [
            "Una vez que tienes la cuenta bancaria, solicita tu número IRD online a través del sitio web de Inland Revenue. La solicitud pide los datos de tu pasaporte, tu número de solicitud de Immigration New Zealand (que viene con tu visa) y tu número de identificación fiscal extranjero si tienes uno.",
            "Si solicitas online, Inland Revenue te manda el número IRD por mensaje de texto o email en unos 2 días. Una solicitud postal puede tardar hasta 10 días. Solicítalo online — quieres tener este número antes de tu primer turno.",
          ],
          bullets: [
            "Entra a ird.govt.nz y selecciona 'Solicitar un número IRD'",
            "Elige la opción 'Recién llegado' e ingresa los datos de tu visa",
            "Ingresa el número de tu cuenta bancaria en NZ (por eso necesitas la cuenta primero)",
            "Tu número IRD llega por mensaje/email en aproximadamente 2 días",
            "Dáselo a tu empleador junto con el formulario de declaración de código fiscal IR330 completo",
          ],
        },
        {
          heading: "Cómo cobrar en NZD — qué necesita tu empleador",
          paragraphs: [
            "Las cuentas bancarias en Nueva Zelanda usan un número de 15 dígitos con el formato: banco–sucursal–cuenta–sufijo (por ejemplo, 12-3456-7890123-00). Este número completo es el que le das a tu empleador para que te pague — no hay un código tipo BSB separado como en Australia.",
            "La mayoría de los bancos te muestran este número en su app apenas activas la cuenta. Sácale una captura de pantalla y guárdala en algún lugar accesible — te lo van a pedir el primer día de trabajo.",
          ],
        },
        {
          heading: "Cómo te ayuda Tern",
          paragraphs: [
            "Tern te guía a través de los pasos de la cuenta bancaria y el número IRD en orden apenas llegas, guarda los datos de tu cuenta en NZ de forma segura, y te recuerda presentar el número IRD a cada nuevo empleador. Si tu empleador alguna vez retiene a la tasa de no declaración del 45%, Tern te avisa de inmediato para que puedas corregirlo antes de que la retención excesiva se acumule.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Puedo solicitar un número IRD sin cuenta bancaria en NZ?",
          a: "Técnicamente sí — hay una opción de 'sin cuenta bancaria' en la solicitud del IRD — pero igual vas a necesitar agregar una cuenta en NZ después para recibir cualquier reembolso o interactuar con el sistema impositivo. Es más rápido tener la cuenta primero para completar la solicitud del IRD de una sola vez.",
        },
        {
          q: "¿Qué pasa si le doy mi número IRD a mi empleador tarde?",
          a: "Tu empleador está legalmente obligado a retener el 45% hasta que le entregues el número IRD y el formulario IR330 completo. Una vez que lo haces, debería aplicar la tasa correcta desde tu próximo pago. El exceso retenido se puede recuperar cuando presentas la declaración anual.",
        },
        {
          q: "¿Qué banco de NZ es mejor para una visa working holiday?",
          a: "ANZ y BNZ son generalmente los más amigables con los titulares de WHV porque ofrecen solicitudes online previas a la llegada y son flexibles con las direcciones temporales. ASB es el más restrictivo. Kiwibank y Westpac están en el medio. Revisa las condiciones actuales con cada banco antes de llegar.",
        },
      ],
    },
    ja: {
      title: "ワーキングホリデーでニュージーランドの銀行口座を開設する方法",
      description:
        "ワーホリでNZの銀行口座開設 — IRD番号・住所なしの課題・おすすめ銀行・NZDでの給料受け取りを解説。",
      excerpt:
        "IRD番号がないと、雇用主に45%の税金を天引きされます。素早く口座を開設し、IRD番号を取得して、NZDで給料を受け取る方法を説明します。",
      sections: [
        {
          paragraphs: [
            "NZの銀行口座開設は、ワーキングホリデーで最初にぶつかる実務的な壁のひとつです。しかも、ループになっています。IRD番号を取得するには銀行口座が必要で、45%の税金を回避するにはIRD番号が必要です。最初の1週間で両方を揃えることが、実際の節税につながります。",
          ],
        },
        {
          heading: "IRD番号は絶対に必要です",
          paragraphs: [
            "IRD番号と税コード申告書（IR330フォーム）を雇用主に提出せずに働き始めると、ニュージーランドの法律により、すべての収入に対して「無申告税率」の45%が天引きされます。この税率は2020年4月から適用されており、収入額に関係なく課税されます。",
            "IRD番号と正しい税コードがあれば、多くのワーホリメーカーの税率は収入帯に応じて10.5%〜33%になります。そのため、すべての雇用主にIRD番号を提出することは、渡航後に取れる最も価値の高い行動のひとつです。",
          ],
        },
        {
          heading: "住所なしで銀行口座を開設する方法",
          paragraphs: [
            "新しく到着したWHVホルダーにとって最大の困難は住所要件です。銀行口座を開設するにはNZの住所が必要ですが、ホステルに泊まっていたり、まだ賃貸契約を結んでいなかったりする場合があります。",
          ],
          bullets: [
            "ANZとBNZは入国90日前から海外でオンライン申請が可能で、入国後に店頭で有効化できます",
            "多くの銀行は、WHVを保有していることを説明すれば、ホステルの住所を一時的な住所として受け入れています",
            "ASBは最も厳格で、通常はホステルではなく住居の住所が必要です — バックアップとして検討してください",
            "パスポート、ワーキングホリデービザの確認書類、海外の自宅住所（過去12ヶ月以内の銀行明細または公共料金の領収書）を持参してください",
            "KiwibankとWestpacもWHVホルダーの口座開設に対応しています。渡航前オプションについては各銀行のウェブサイトを確認してください",
          ],
        },
        {
          heading: "IRD番号の取得方法",
          paragraphs: [
            "銀行口座が開設できたら、Inland Revenue（IRD）のウェブサイトからオンラインでIRD番号を申請します。申請にはパスポートの詳細、Immigration New Zealandのビザ申請番号、そして持っていれば最新の海外税務番号が必要です。",
            "オンライン申請の場合、Inland Revenueは約2日以内にテキストまたはメールでIRD番号を送ってくれます。郵便申請は最大10日かかることがあります。最初の仕事の前にIRD番号が手元にあるよう、オンラインで申請しましょう。",
          ],
          bullets: [
            "ird.govt.nzにアクセスし、「IRD番号を申請する」を選択",
            "「新規入国者」のルートを選び、ビザの詳細を入力",
            "NZの銀行口座番号を入力（これが口座を先に作る必要がある理由です）",
            "IRD番号は約2日以内にテキスト・メールで届きます",
            "雇用主にIRD番号と記入済みのIR330税コード申告書を提出してください",
          ],
        },
        {
          heading: "NZDで給料を受け取るために — 雇用主に必要な情報",
          paragraphs: [
            "ニュージーランドの銀行口座は、銀行–支店–口座–サフィックスの形式（例：12-3456-7890123-00）の15桁の口座番号を使用します。この番号全体を給与振込のために雇用主に渡します。オーストラリアのようなBSBコードは別途必要ありません。",
            "ほとんどの銀行では、口座を有効化した直後からアプリでこの番号を確認できます。スクリーンショットを撮って保存しておきましょう — 初日に必ず聞かれます。",
          ],
        },
        {
          heading: "Ternができること",
          paragraphs: [
            "Ternは到着後すぐに、銀行口座とIRD番号の取得手順を順番にサポートします。NZの口座情報を安全に保存し、新しい雇用主にIRD番号を提出するようリマインドします。もし雇用主が45%の無申告税率で天引きしていた場合、Ternがすぐに知らせてくれるので、過剰天引きが積み重なる前に修正できます。",
          ],
        },
      ],
      faq: [
        {
          q: "NZの銀行口座なしでIRD番号を申請できますか？",
          a: "技術的には可能です — IRD申請には「銀行口座なし」のオプションがあります — しかし、還付を受け取ったり税務手続きをしたりするために、後でNZの銀行口座を追加する必要があります。IRD申請を一度で完了できるように、先に口座を作っておく方が効率的です。",
        },
        {
          q: "IRD番号の提出が遅れた場合はどうなりますか？",
          a: "IRD番号とIR330フォームを提出するまで、雇用主は法的に45%で天引きする義務があります。提出後は、次の給与から正しい税率が適用されるはずです。過剰に天引きされた分は、年末の確定申告で取り戻せます。",
        },
        {
          q: "ワーホリビザにはどのNZの銀行がおすすめですか？",
          a: "ANZとBNZは、渡航前のオンライン申請に対応しており、一時住所にも柔軟に対応しているため、WHVホルダーにとって最もフレンドリーな銀行です。ASBは最も制限が厳しく、KiwibankとWestpacはその中間です。渡航前に各銀行の最新条件を確認してください。",
        },
      ],
    },
    ko: {
      title: "뉴질랜드 워킹홀리데이 비자로 은행 계좌 개설하는 방법",
      description:
        "워홀 비자로 뉴질랜드 은행 개설 — IRD 번호, 주소 없는 문제, 추천 은행, NZD 급여 수령 방법 정리.",
      excerpt:
        "IRD 번호가 없으면 고용주가 45% 세금을 원천징수합니다. 빠르게 계좌를 만들고, IRD 번호를 받고, NZD로 급여를 받는 방법을 알아보세요.",
      sections: [
        {
          paragraphs: [
            "뉴질랜드 은행 계좌 개설은 워킹홀리데이에서 처음 마주치는 실질적인 장벽 중 하나입니다 — 게다가 순환 구조입니다. IRD 번호를 받으려면 은행 계좌가 필요하고, 45% 세금을 피하려면 IRD 번호가 필요합니다. 첫 주 안에 둘 다 해결하면 실제로 돈을 아낄 수 있습니다.",
          ],
        },
        {
          heading: "IRD 번호는 선택이 아닌 필수입니다",
          paragraphs: [
            "IRD 번호와 세금 코드 신고서(IR330 양식)를 고용주에게 제출하지 않고 일을 시작하면, 뉴질랜드 법률에 따라 모든 수입에 대해 '무신고 세율' 45%가 원천징수됩니다. 이 세율은 2020년 4월부터 적용되며, 수입 금액과 관계없이 부과됩니다.",
            "IRD 번호와 올바른 세금 코드가 있으면, 대부분의 워홀러는 소득 구간에 따라 10.5%~33%의 세율을 적용받습니다. 따라서 모든 고용주에게 IRD 번호를 제출하는 것은 도착 후 할 수 있는 가장 가치 있는 행동 중 하나입니다.",
          ],
        },
        {
          heading: "고정 주소 없이 은행 계좌 개설하기",
          paragraphs: [
            "새로 도착한 WHV 소지자들의 가장 큰 고충은 주소 요건입니다. 은행 계좌를 개설하려면 뉴질랜드 주소가 필요한데, 호스텔에 묵고 있거나 아직 임대 계약을 맺지 않은 경우가 많습니다.",
          ],
          bullets: [
            "ANZ와 BNZ는 도착 90일 전부터 해외에서 온라인으로 신청할 수 있으며, 입국 후 지점에서 활성화합니다",
            "워킹홀리데이 비자 소지자임을 설명하면 많은 은행에서 호스텔 주소를 임시 주소로 받아들입니다",
            "ASB는 가장 까다로워서 일반적으로 호스텔이 아닌 실거주 주소가 필요합니다 — 대안으로 남겨두세요",
            "여권, 워킹홀리데이 비자 확인서, 해외 자택 주소(최근 12개월 이내 은행 명세서 또는 공과금 청구서)를 준비하세요",
            "Kiwibank와 Westpac도 WHV 소지자의 계좌 개설을 허용합니다. 사전 신청 옵션은 각 은행 웹사이트를 확인하세요",
          ],
        },
        {
          heading: "IRD 번호 발급받는 방법",
          paragraphs: [
            "은행 계좌가 개설되면, Inland Revenue 웹사이트에서 온라인으로 IRD 번호를 신청하세요. 신청 시 여권 정보, Immigration New Zealand 비자 신청 번호, 그리고 있다면 가장 최근 해외 세금 번호가 필요합니다.",
            "온라인 신청 시 Inland Revenue는 약 2일 이내에 문자 또는 이메일로 IRD 번호를 보내줍니다. 우편 신청은 최대 10일이 걸릴 수 있습니다. 온라인으로 신청하세요 — 첫 출근 전에 이 번호가 필요합니다.",
          ],
          bullets: [
            "ird.govt.nz에 접속해 'IRD 번호 신청'을 선택",
            "'신규 도착자' 경로를 선택하고 비자 정보를 입력",
            "뉴질랜드 은행 계좌 번호를 입력(계좌가 먼저 필요한 이유입니다)",
            "IRD 번호가 약 2일 이내에 문자/이메일로 도착합니다",
            "IRD 번호와 작성 완료된 IR330 세금 코드 신고서를 고용주에게 제출하세요",
          ],
        },
        {
          heading: "NZD로 급여 받기 — 고용주에게 필요한 정보",
          paragraphs: [
            "뉴질랜드 은행 계좌는 은행-지점-계좌-접미사 형식(예: 12-3456-7890123-00)의 15자리 계좌 번호를 사용합니다. 이 전체 번호를 급여 수령을 위해 고용주에게 알려주면 됩니다 — 호주처럼 별도의 BSB 코드는 없습니다.",
            "대부분의 은행에서 계좌 활성화 직후 앱에서 이 번호를 확인할 수 있습니다. 스크린샷을 찍어 저장해두세요 — 첫 근무일에 반드시 필요합니다.",
          ],
        },
        {
          heading: "Tern이 도와드립니다",
          paragraphs: [
            "Tern은 도착 즉시 은행 계좌와 IRD 번호 취득 단계를 순서대로 안내하고, 뉴질랜드 계좌 정보를 안전하게 저장하며, 새 고용주에게 IRD 번호를 제출하도록 상기시켜 줍니다. 고용주가 45% 무신고 세율로 공제할 경우 Tern이 즉시 알려드려서 과다 공제가 쌓이기 전에 수정할 수 있습니다.",
          ],
        },
      ],
      faq: [
        {
          q: "뉴질랜드 은행 계좌 없이 IRD 번호를 신청할 수 있나요?",
          a: "기술적으로는 가능합니다 — IRD 신청에 '은행 계좌 없음' 옵션이 있습니다 — 하지만 환급을 받거나 세무 시스템을 이용하려면 나중에 뉴질랜드 은행 계좌를 추가해야 합니다. IRD 신청을 한 번에 완료할 수 있도록 먼저 계좌를 만드는 편이 효율적입니다.",
        },
        {
          q: "IRD 번호를 늦게 제출하면 어떻게 되나요?",
          a: "IRD 번호와 IR330 양식을 제출할 때까지 고용주는 법적으로 45%를 원천징수해야 합니다. 제출 후에는 다음 급여부터 올바른 세율이 적용됩니다. 과다 공제된 세금은 연말 세금 신고 시 돌려받을 수 있습니다.",
        },
        {
          q: "워킹홀리데이 비자 소지자에게 어떤 뉴질랜드 은행이 좋나요?",
          a: "ANZ와 BNZ는 사전 온라인 신청이 가능하고 임시 주소에 유연하여 WHV 소지자에게 가장 친화적입니다. ASB는 가장 까다롭고, Kiwibank와 Westpac은 그 중간입니다. 도착 전에 각 은행의 최신 조건을 직접 확인하세요.",
        },
      ],
    },
    "zh-TW": {
      title: "打工度假紐西蘭如何開設銀行帳戶",
      description:
        "WHV簽證持有者的紐西蘭銀行完整指南 — IRD號碼、沒有固定住址的挑戰、哪間銀行最友善、如何以NZD領薪，以及到分行開通帳戶的流程。",
      excerpt:
        "沒有IRD號碼，雇主就會扣除45%的稅款。這裡告訴你如何快速開戶、取得IRD號碼，並開始以NZD收取薪資。",
      sections: [
        {
          paragraphs: [
            "在紐西蘭開設銀行帳戶是打工度假最初碰到的實務難題之一，而且是個循環困境：你需要銀行帳戶才能申請IRD號碼，又需要IRD號碼才能避免被扣45%的稅。在第一週就把兩件事都搞定，能幫你省下真實的金錢。",
          ],
        },
        {
          heading: "IRD號碼是必須的，沒有退路",
          paragraphs: [
            "如果你在沒有提供雇主IRD號碼及稅碼申報表（IR330表格）的情況下開始工作，紐西蘭法律要求雇主對你所有收入按「無申報稅率」扣繳45%的稅款。這個稅率自2020年4月起生效，不論收入多少均適用。",
            "有了IRD號碼並使用正確的稅碼，大多數打工度假者的稅率依收入區間介於10.5%至33%之間。因此，把IRD號碼提交給每一位雇主，是你抵達後能採取的最有價值的行動之一。",
          ],
        },
        {
          heading: "沒有固定住址如何開設銀行帳戶",
          paragraphs: [
            "新抵達的WHV持有者最大的困擾就是住址要求。銀行開戶需要紐西蘭地址，但你可能住在青年旅舍，或者還沒簽租約。",
          ],
          bullets: [
            "ANZ和BNZ允許你在抵達前90天於海外線上申請，入境後再到分行完成開通",
            "許多銀行在你說明持有打工度假簽證的情況下，會接受青年旅舍地址作為臨時地址",
            "ASB最為嚴格，通常需要住宅地址而非旅舍地址，建議留作備選",
            "攜帶護照、打工度假簽證確認文件，以及海外住家地址（最近12個月的銀行對帳單或水電帳單即可）",
            "Kiwibank和Westpac也允許WHV持有者開戶；請至各銀行網站查詢目前的抵達前申請方案",
          ],
        },
        {
          heading: "如何申請IRD號碼",
          paragraphs: [
            "開設好銀行帳戶後，透過Inland Revenue（IRD）官網線上申請IRD號碼。申請時需要護照資料、移民局（Immigration New Zealand）的簽證申請號碼，以及你的最新海外稅務號碼（若有的話）。",
            "線上申請的話，Inland Revenue會在約2天內以簡訊或電子郵件傳送你的IRD號碼。郵件申請最多需要10天。請線上申請——你需要在第一天上班之前拿到這個號碼。",
          ],
          bullets: [
            "前往ird.govt.nz，選擇「申請IRD號碼」",
            "選擇「新抵達者」路徑並輸入簽證資料",
            "填入紐西蘭銀行帳戶號碼（這就是為什麼要先開戶的原因）",
            "IRD號碼約2天內以簡訊/電子郵件送達",
            "將IRD號碼連同填妥的IR330稅碼申報表一起交給雇主",
          ],
        },
        {
          heading: "以NZD領薪 — 雇主需要的資訊",
          paragraphs: [
            "紐西蘭銀行帳戶使用銀行–分行–帳戶–後綴格式的15位數帳號（例如：12-3456-7890123-00）。你只需要把這個完整號碼提供給雇主用於薪資匯款——不像澳洲需要額外的BSB代碼。",
            "大多數銀行在帳戶開通後，應用程式上會立即顯示這個號碼。截圖存好，放在隨時找得到的地方——第一天上班就會被問到。",
          ],
        },
        {
          heading: "Tern 如何協助你",
          paragraphs: [
            "Tern在你抵達後立即按順序引導你完成銀行帳戶和IRD號碼的申請步驟，安全保存你的紐西蘭帳戶資訊，並提醒你在每位新雇主處提交IRD號碼。如果雇主以45%的無申報稅率扣薪，Tern會立即通知你，讓你在過度扣繳累積之前及時糾正。",
          ],
        },
      ],
      faq: [
        {
          q: "沒有紐西蘭銀行帳戶可以申請IRD號碼嗎？",
          a: "技術上可以——IRD申請有「沒有銀行帳戶」的選項——但你之後仍需新增紐西蘭銀行帳戶，才能收取退稅或使用稅務系統。建議先開戶，這樣可以一次完成IRD申請，更有效率。",
        },
        {
          q: "如果晚交IRD號碼給雇主會怎樣？",
          a: "在你提交IRD號碼和IR330表格之前，雇主依法必須以45%扣繳。提交後，下一次發薪就會適用正確稅率。被多扣的稅款可在年終報稅時申請退回。",
        },
        {
          q: "哪間紐西蘭銀行最適合打工度假簽證持有者？",
          a: "ANZ和BNZ通常對WHV持有者最為友善，提供抵達前線上申請，並對臨時地址較為彈性。ASB最為嚴格，Kiwibank和Westpac介於兩者之間。建議在抵達前直接向各銀行確認最新條件。",
        },
      ],
    },
  },
};
