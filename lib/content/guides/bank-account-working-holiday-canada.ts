import type { Article } from "../types";

export const article: Article = {
  slug: "bank-account-working-holiday-canada",
  kind: "guide",
  date: "2026-05-22",
  emoji: "🍁",
  accent: "bg-coral-300",
  readMinutes: 6,
  sources: [
    {
      label: "Government of Canada — Social Insurance Number (SIN)",
      url: "https://www.canada.ca/en/employment-social-development/services/sin.html",
    },
    {
      label: "IRCC — International Experience Canada: Prepare for arrival",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec/prepare-arrival.html",
    },
  ],
  i18n: {
    en: {
      title: "Banking in Canada on a working holiday (IEC)",
      description:
        "IEC working holiday banking guide — getting your SIN, opening a Canadian bank account, the CAD 2,500 proof-of-funds requirement, and getting paid.",
      excerpt:
        "You can't legally work in Canada without a SIN. Here's the fastest path to a SIN, a bank account, and your first CAD paycheck — in the right order.",
      sections: [
        {
          paragraphs: [
            "The IEC working holiday opens Canada to you — but before you earn a single dollar you need two things in the right order: a Social Insurance Number (SIN) and a Canadian bank account. Get them wrong or out of sequence and your first pay period becomes a headache.",
          ],
        },
        {
          heading: "Proof of funds: the CAD 2,500 you must show at the border",
          paragraphs: [
            "When you arrive at a Canadian port of entry, a border services officer may ask you to prove you have enough money to support yourself for the first three months. The standard requirement is CAD 2,500 in accessible funds.",
            "You must show a bank statement issued no more than one week before your departure. The statement must clearly show your name and the effective date. Credit cards do not count — only liquid funds such as cash, savings accounts, bank drafts, certified cheques, or traveller's cheques are acceptable. If you're arriving with CAD 10,000 or more in any form, you are legally required to declare it to the border officer.",
          ],
        },
        {
          heading: "Getting your SIN — do this first",
          paragraphs: [
            "A Social Insurance Number (SIN) is a 9-digit number required to work legally in Canada and to access government programs. As an IEC working holiday maker, you'll receive a temporary SIN that starts with the digit '9' and has an expiry date matching your work permit.",
            "You can apply for your SIN online through Service Canada — this is the fastest method. You'll need your IEC work permit (the document that says you 'may accept employment in Canada'). There is no fee to apply.",
          ],
          bullets: [
            "Apply online at canada.ca or in person at a Service Canada office",
            "Bring your IEC work permit and passport",
            "Online applications are processed quickly — in-person visits may require waiting",
            "Once issued, provide your SIN to your employer before or within 3 days of starting work",
            "Your temporary SIN (starting with '9') is valid until your work permit expires — keep your permit renewed to keep your SIN valid",
          ],
        },
        {
          heading: "Opening a Canadian bank account",
          paragraphs: [
            "Most major Canadian banks — TD, RBC, Scotiabank, BMO, and CIBC — allow temporary residents with a valid work permit to open a chequing account. Many let you start the application online before you arrive and finalise it in branch with your documents.",
            "You typically need: your passport, your IEC work permit, your SIN (some banks let you open without it initially and add it later), and a Canadian address. For the address, many banks accept a hostel, Airbnb, or a friend's address as a temporary address while you find permanent accommodation.",
          ],
          bullets: [
            "TD and RBC both offer pre-arrival online account opening for newcomers",
            "Bring your passport, work permit, and SIN to the branch activation appointment",
            "A temporary address (hostel, short-term rental) is usually accepted — confirm with your chosen bank",
            "Most accounts come with a debit card and online banking from day one",
            "Ask about 'newcomer' or 'no monthly fee' accounts — several banks waive fees for the first year",
          ],
        },
        {
          heading: "Getting paid in CAD — what your employer needs",
          paragraphs: [
            "To receive direct deposit from a Canadian employer, you need to provide your bank's transit number (5 digits), institution number (3 digits), and account number (7–12 digits). These are printed on the bottom of a cheque, or you can find them in your bank's app under 'direct deposit information'.",
            "Your employer will also need your SIN for payroll and tax withholding purposes. Federal income tax, Employment Insurance (EI) premiums, and Canada Pension Plan (CPP) contributions are all withheld from your pay. You file a T1 tax return at the end of the year to reconcile — and potentially get a refund.",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Tern walks you through the SIN and bank account steps in the correct order on arrival, stores your Canadian banking details securely, and tracks your withholdings throughout your stay. When tax season arrives, Tern has your income and deduction history ready so filing your T1 return is straightforward — and you don't leave any refund on the table.",
          ],
        },
      ],
      faq: [
        {
          q: "Can I start work in Canada before I have a SIN?",
          a: "You must apply for your SIN within 3 days of starting employment. You can start work before receiving the physical number, but you must apply immediately and provide the SIN to your employer within 3 days of receiving it. Working without ever applying for a SIN is illegal.",
        },
        {
          q: "What if I can't show CAD 2,500 at the border?",
          a: "Border services officers have discretion. If you can't demonstrate sufficient funds, they may ask more questions or in the worst case deny entry. Ensure your statement is dated within 7 days of travel, clearly shows your name, and reflects accessible cash — not just a credit limit.",
        },
        {
          q: "Do I get Canadian income tax back when I leave?",
          a: "Possibly, yes. If too much tax was withheld during the year — which is common if you worked only part of the year — you can file a T1 tax return and receive a refund. You can file even after leaving Canada. Keep all your T4 slips from employers.",
        },
      ],
    },
    es: {
      title: "Cuenta bancaria en Canadá para working holiday (IEC)",
      description:
        "Guía bancaria para la visa IEC en Canadá — cómo obtener el SIN, abrir cuenta, los fondos mínimos (CAD 2,500) y cobrar en CAD.",
      excerpt:
        "No puedes trabajar legalmente en Canadá sin un SIN. Acá te explicamos el camino más rápido para obtener el SIN, abrir una cuenta y recibir tu primer sueldo en CAD — en el orden correcto.",
      sections: [
        {
          paragraphs: [
            "La visa IEC te abre las puertas de Canadá — pero antes de ganar un solo dólar necesitas dos cosas en el orden correcto: un Número de Seguro Social (SIN) y una cuenta bancaria canadiense. Si los haces mal o fuera de secuencia, tu primer período de pago se convierte en un dolor de cabeza.",
          ],
        },
        {
          heading: "Fondos mínimos: los CAD 2,500 que debes mostrar en la frontera",
          paragraphs: [
            "Cuando llegas a un puerto de entrada canadiense, un oficial de servicios fronterizos puede pedirte que demuestres que tienes dinero suficiente para mantenerte durante los primeros tres meses. El requisito estándar son CAD 2,500 en fondos accesibles.",
            "Tienes que mostrar un extracto bancario emitido no más de una semana antes de tu partida. El extracto debe mostrar claramente tu nombre y la fecha de emisión. Las tarjetas de crédito no se aceptan — solo fondos líquidos como efectivo, cuentas de ahorro, giros bancarios, cheques certificados o cheques de viajero. Si llegas con CAD 10,000 o más en cualquier forma, estás legalmente obligado a declararlo al oficial de frontera.",
          ],
        },
        {
          heading: "Obtener tu SIN — haz esto primero",
          paragraphs: [
            "El Número de Seguro Social (SIN) es un número de 9 dígitos necesario para trabajar legalmente en Canadá y acceder a programas gubernamentales. Como titular de la visa working holiday IEC, recibirás un SIN temporal que empieza con el dígito '9' y tiene una fecha de vencimiento que coincide con tu permiso de trabajo.",
            "Puedes solicitar el SIN online a través de Service Canada — es el método más rápido. Vas a necesitar tu permiso de trabajo IEC (el documento que dice que puedes aceptar empleo en Canadá). No hay costo para solicitarlo.",
          ],
          bullets: [
            "Solicítalo online en canada.ca o en persona en una oficina de Service Canada",
            "Lleva tu permiso de trabajo IEC y pasaporte",
            "Las solicitudes online se procesan rápidamente — las visitas en persona pueden requerir espera",
            "Una vez emitido, proporciona tu SIN a tu empleador antes o dentro de los 3 días de iniciar el trabajo",
            "Tu SIN temporal (que empieza con '9') es válido hasta que venza tu permiso de trabajo — renuévalo para mantener el SIN vigente",
          ],
        },
        {
          heading: "Cómo abrir una cuenta bancaria canadiense",
          paragraphs: [
            "La mayoría de los grandes bancos canadienses — TD, RBC, Scotiabank, BMO y CIBC — permiten que los residentes temporales con un permiso de trabajo válido abran una cuenta corriente. Muchos te permiten iniciar la solicitud online antes de llegar y finalizarla en la sucursal con tus documentos.",
            "Generalmente necesitas: pasaporte, permiso de trabajo IEC, SIN (algunos bancos te dejan abrirla sin él y agregarlo después) y una dirección en Canadá. Para la dirección, muchos bancos aceptan un hostel, Airbnb o la dirección de un amigo como dirección temporal mientras buscas alojamiento permanente.",
          ],
          bullets: [
            "TD y RBC ofrecen apertura de cuenta online antes de llegar para recién llegados",
            "Lleva tu pasaporte, permiso de trabajo y SIN a la cita de activación en sucursal",
            "Generalmente se acepta una dirección temporal (hostel, alquiler a corto plazo) — confirmalo con tu banco",
            "La mayoría de las cuentas incluyen una tarjeta de débito y banca online desde el primer día",
            "Pregunta por las cuentas 'para recién llegados' o 'sin cuota mensual' — varios bancos exoneran las comisiones durante el primer año",
          ],
        },
        {
          heading: "Cómo cobrar en CAD — qué necesita tu empleador",
          paragraphs: [
            "Para recibir depósito directo de un empleador canadiense, necesitas proporcionar el número de tránsito de tu banco (5 dígitos), el número de institución (3 dígitos) y el número de cuenta (7–12 dígitos). Estos datos están impresos en el fondo de un cheque, o puedes encontrarlos en la app de tu banco en 'información de depósito directo'.",
            "Tu empleador también necesitará tu SIN para los fines de nómina y retención de impuestos. El impuesto federal sobre la renta, las primas del Seguro de Empleo (EI) y las contribuciones al Plan de Pensiones de Canadá (CPP) se retienen de tu sueldo. Al final del año presentas una declaración T1 para cuadrar cuentas — y potencialmente obtener una devolución.",
          ],
        },
        {
          heading: "Cómo te ayuda Tern",
          paragraphs: [
            "Tern te guía a través de los pasos del SIN y la cuenta bancaria en el orden correcto al llegar, guarda de forma segura tus datos bancarios canadienses y hace un seguimiento de tus retenciones a lo largo de tu estadía. Cuando llega la temporada de impuestos, Tern tiene listo tu historial de ingresos y deducciones para que presentar tu declaración T1 sea sencillo — y no dejes ningún reembolso sin reclamar.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Puedo empezar a trabajar en Canadá antes de tener un SIN?",
          a: "Debes solicitar el SIN dentro de los 3 días de iniciar el empleo. Puedes comenzar a trabajar antes de recibir el número, pero debes solicitarlo de inmediato y proporcionárselo a tu empleador dentro de los 3 días de recibirlo. Trabajar sin solicitar nunca el SIN es ilegal.",
        },
        {
          q: "¿Qué pasa si no puedo mostrar CAD 2,500 en la frontera?",
          a: "Los oficiales de servicios fronterizos tienen discrecionalidad. Si no puedes demostrar fondos suficientes, pueden hacerte más preguntas o, en el peor caso, negarte la entrada. Asegúrate de que tu extracto tenga menos de 7 días desde tu viaje, muestre claramente tu nombre y refleje efectivo accesible — no solo un límite de crédito.",
        },
        {
          q: "¿Puedo recuperar el impuesto sobre la renta canadiense cuando me vaya?",
          a: "Es posible, sí. Si durante el año se retuvo más impuesto del necesario — lo que es común si trabajaste solo parte del año — puedes presentar una declaración T1 y recibir un reembolso. Puedes presentarla incluso después de salir de Canadá. Guarda todos tus recibos T4 de los empleadores.",
        },
      ],
    },
    ja: {
      title: "カナダのワーキングホリデー（IEC）で銀行口座を開設する方法",
      description:
        "IECワーホリのカナダ銀行ガイド — SIN取得・口座開設・CAD 2,500の資金証明・CADで給料受け取りまで解説。",
      excerpt:
        "SINなしではカナダで合法的に働けません。SIN取得、口座開設、最初のCAD給与を受け取るための最速ルートを正しい順番で説明します。",
      sections: [
        {
          paragraphs: [
            "IECワーキングホリデーはカナダへの扉を開きますが、最初の1ドルを稼ぐ前に、正しい順番で2つのことが必要です。社会保険番号（SIN）とカナダの銀行口座です。順番を間違えると、最初の給与期間が大変なことになります。",
          ],
        },
        {
          heading: "必要資金：入国時に証明するCAD 2,500",
          paragraphs: [
            "カナダの入国港に到着すると、国境サービス官が最初の3ヶ月間の生活費として十分な資金があることの証明を求める場合があります。標準的な要件はCAD 2,500の利用可能な資金です。",
            "出発7日以内に発行された銀行口座明細書を提示する必要があります。明細書にはあなたの名前と発効日が明確に記載されている必要があります。クレジットカードは認められません。現金、普通預金口座、銀行手形、認定小切手、旅行者用小切手などの流動性の高い資金のみが受け入れられます。何らかの形でCAD 10,000以上を持ち込む場合は、法律により入国審査官に申告する義務があります。",
          ],
        },
        {
          heading: "SINの取得 — まずこれから始める",
          paragraphs: [
            "社会保険番号（SIN）は、カナダで合法的に働いたり、政府のプログラムにアクセスしたりするために必要な9桁の番号です。IECワーキングホリデービザとして、数字の「9」で始まり、就労許可証の有効期限と一致する有効期限のある一時的なSINが発行されます。",
            "Service CanadaからオンラインでSINを申請できます — これが最も速い方法です。IEC就労許可証（「カナダでの就労を受け入れてもよい」と記載された書類）が必要です。申請料は無料です。",
          ],
          bullets: [
            "canada.caでオンライン申請するか、Service Canadaの事務所で対面申請",
            "IEC就労許可証とパスポートを持参",
            "オンライン申請は迅速に処理されます。対面申請は待ち時間が生じる場合があります",
            "SIN取得後は、就業開始前または3日以内に雇用主に提供",
            "一時的なSIN（「9」で始まる）は就労許可証の有効期限まで有効です。SINを有効に保つために就労許可証を更新してください",
          ],
        },
        {
          heading: "カナダの銀行口座を開設する",
          paragraphs: [
            "主要なカナダの銀行（TD、RBC、スコシアバンク、BMO、CIBC）のほとんどは、有効な就労許可証を持つ一時的な居住者が当座預金口座を開設することを認めています。多くの銀行では到着前にオンラインで申請を始め、書類を持参して支店で最終手続きをすることができます。",
            "一般的に必要なものは、パスポート、IEC就労許可証、SIN（最初はなくても開設できる銀行もあり、後で追加できます）、そしてカナダの住所です。住所については、多くの銀行が恒久的な住居を探している間はホステル、Airbnb、友人の住所を一時的な住所として受け入れています。",
          ],
          bullets: [
            "TDとRBCは、新規到着者向けに渡航前のオンライン口座開設を提供",
            "支店での有効化時にパスポート、就労許可証、SINを持参",
            "一時的な住所（ホステル、短期賃貸）は通常受け入れられますが、選んだ銀行で確認を",
            "ほとんどの口座は初日からデビットカードとオンラインバンキングが利用可能",
            "「新規到着者向け」や「月額手数料なし」の口座について聞いてみましょう。複数の銀行が初年度の手数料を免除しています",
          ],
        },
        {
          heading: "CADで給料を受け取るために — 雇用主に必要な情報",
          paragraphs: [
            "カナダの雇用主からの直接振込を受け取るには、銀行のトランジット番号（5桁）、機関番号（3桁）、口座番号（7〜12桁）を提供する必要があります。これらはチェックの下部に印刷されているか、銀行のアプリの「直接振込情報」で確認できます。",
            "雇用主は給与計算と税金源泉徴収のためにSINも必要です。連邦所得税、雇用保険（EI）保険料、カナダ年金プラン（CPP）拠出金がすべて給与から源泉徴収されます。年末にT1税務申告書を提出して精算します — そして払い戻しを受けられる可能性があります。",
          ],
        },
        {
          heading: "Ternができること",
          paragraphs: [
            "Ternは到着時にSINと銀行口座の手順を正しい順番で案内し、カナダの銀行情報を安全に保存し、滞在中の源泉徴収額を追跡します。確定申告シーズンが来ると、Ternには収入と控除の履歴が揃っているので、T1申告書の提出が簡単になります — 還付金を取り逃すことなく受け取れます。",
          ],
        },
      ],
      faq: [
        {
          q: "SINなしでカナダで働き始めることはできますか？",
          a: "就業開始から3日以内にSINを申請する必要があります。SINを受け取る前に働き始めることはできますが、すぐに申請し、SINを受け取ってから3日以内に雇用主に提供しなければなりません。SINを一切申請せずに働くことは違法です。",
        },
        {
          q: "国境でCAD 2,500を証明できない場合はどうなりますか？",
          a: "国境サービス官には裁量権があります。十分な資金を証明できない場合、さらに質問される可能性があり、最悪の場合は入国を拒否される可能性があります。明細書は出発から7日以内のものを用意し、名前が明確に記載されており、クレジット限度額ではなく利用可能な現金が反映されていることを確認してください。",
        },
        {
          q: "カナダを出国するときに所得税の還付を受けられますか？",
          a: "可能です。年間の勤務期間が短い場合など、過剰に源泉徴収されていた場合は、T1申告書を提出して還付を受けられます。カナダを出国後でも申告できます。雇用主から受け取ったすべてのT4票を保管しておいてください。",
        },
      ],
    },
    ko: {
      title: "캐나다 워킹홀리데이(IEC)로 은행 계좌 개설하는 방법",
      description:
        "IEC 워홀 캐나다 은행 가이드 — SIN 발급, 계좌 개설, CAD 2,500 증명 자금, CAD 급여 수령까지 정리.",
      excerpt:
        "SIN 없이는 캐나다에서 합법적으로 일할 수 없습니다. SIN 발급, 계좌 개설, 첫 CAD 급여를 받기까지의 가장 빠른 경로를 올바른 순서로 알려드립니다.",
      sections: [
        {
          paragraphs: [
            "IEC 워킹홀리데이는 캐나다의 문을 열어줍니다. 하지만 첫 달러를 벌기 전에 올바른 순서로 두 가지가 필요합니다: 사회보험번호(SIN)와 캐나다 은행 계좌입니다. 순서를 잘못하거나 틀리면 첫 급여 기간이 골치거리가 됩니다.",
          ],
        },
        {
          heading: "증명 자금: 국경에서 보여줘야 할 CAD 2,500",
          paragraphs: [
            "캐나다 입국 항구에 도착하면 국경 서비스 직원이 처음 3개월 동안 자신을 부양할 충분한 자금이 있다는 것을 증명하도록 요청할 수 있습니다. 표준 요건은 이용 가능한 자금 CAD 2,500입니다.",
            "출발 1주일 이내에 발급된 은행 명세서를 제출해야 합니다. 명세서에는 이름과 발급일이 명확하게 표시되어 있어야 합니다. 신용카드는 인정되지 않습니다. 현금, 저축 계좌, 은행 어음, 보증 수표, 여행자 수표 등 유동 자산만 허용됩니다. 어떤 형태로든 CAD 10,000 이상을 가지고 입국하는 경우 법적으로 국경 직원에게 신고해야 합니다.",
          ],
        },
        {
          heading: "SIN 발급 — 가장 먼저 하세요",
          paragraphs: [
            "사회보험번호(SIN)는 캐나다에서 합법적으로 일하거나 정부 프로그램을 이용하는 데 필요한 9자리 번호입니다. IEC 워킹홀리데이 비자 소지자는 '9'로 시작하고 취업 허가증 만료일과 일치하는 만료일이 있는 임시 SIN을 받게 됩니다.",
            "Service Canada를 통해 온라인으로 SIN을 신청할 수 있습니다 — 이것이 가장 빠른 방법입니다. IEC 취업 허가증(캐나다에서 '취업을 수락할 수 있다'고 명시된 문서)이 필요합니다. 신청 비용은 무료입니다.",
          ],
          bullets: [
            "canada.ca에서 온라인 신청하거나 Service Canada 사무소에서 직접 신청",
            "IEC 취업 허가증과 여권 지참",
            "온라인 신청은 빠르게 처리됩니다. 직접 방문은 대기 시간이 필요할 수 있습니다",
            "SIN을 받으면 취업 시작 전 또는 3일 이내에 고용주에게 제공",
            "임시 SIN('9'로 시작)은 취업 허가증 만료일까지 유효합니다. SIN을 유효하게 유지하려면 허가증을 갱신하세요",
          ],
        },
        {
          heading: "캐나다 은행 계좌 개설하기",
          paragraphs: [
            "주요 캐나다 은행(TD, RBC, Scotiabank, BMO, CIBC) 대부분은 유효한 취업 허가증을 가진 임시 거주자가 당좌 계좌를 개설할 수 있도록 허용합니다. 많은 은행에서 도착 전 온라인으로 신청을 시작하고 서류를 가지고 지점에서 최종 절차를 밟을 수 있습니다.",
            "일반적으로 필요한 것은 여권, IEC 취업 허가증, SIN(일부 은행은 처음에 없어도 개설 후 추가 가능), 캐나다 주소입니다. 주소의 경우, 많은 은행에서 영구 거처를 찾는 동안 호스텔, Airbnb, 또는 친구의 주소를 임시 주소로 받아들입니다.",
          ],
          bullets: [
            "TD와 RBC는 신규 이민자를 위한 도착 전 온라인 계좌 개설 서비스를 제공",
            "지점 활성화 약속 시 여권, 취업 허가증, SIN 지참",
            "임시 주소(호스텔, 단기 임대)는 일반적으로 수락됩니다. 선택한 은행에 확인하세요",
            "대부분의 계좌는 첫날부터 직불카드와 온라인 뱅킹 제공",
            "'신규 이민자' 또는 '월 수수료 없음' 계좌에 대해 문의하세요. 여러 은행이 첫 해 수수료를 면제합니다",
          ],
        },
        {
          heading: "CAD로 급여 받기 — 고용주에게 필요한 정보",
          paragraphs: [
            "캐나다 고용주로부터 직접 입금을 받으려면 은행의 통과 번호(5자리), 기관 번호(3자리), 계좌 번호(7~12자리)를 제공해야 합니다. 이 정보는 수표 하단에 인쇄되어 있거나 은행 앱의 '직접 입금 정보'에서 확인할 수 있습니다.",
            "고용주는 급여 지급 및 세금 원천징수를 위해 SIN도 필요합니다. 연방 소득세, 고용보험(EI) 보험료, 캐나다 연금 플랜(CPP) 기여금이 모두 급여에서 원천징수됩니다. 연말에 T1 세금 신고서를 제출해 정산하고 환급을 받을 수 있습니다.",
          ],
        },
        {
          heading: "Tern이 도와드립니다",
          paragraphs: [
            "Tern은 도착 시 SIN과 은행 계좌 단계를 올바른 순서로 안내하고, 캐나다 은행 정보를 안전하게 저장하며, 체류 기간 내내 원천징수액을 추적합니다. 세금 신고 시즌이 오면 Tern에 소득 및 공제 내역이 준비되어 있어 T1 신고서 제출이 간편해지고 환급금을 하나도 놓치지 않습니다.",
          ],
        },
      ],
      faq: [
        {
          q: "SIN 없이 캐나다에서 일을 시작할 수 있나요?",
          a: "취업 시작 후 3일 이내에 SIN을 신청해야 합니다. SIN을 받기 전에 일을 시작할 수 있지만, 즉시 신청하고 SIN을 받은 후 3일 이내에 고용주에게 제공해야 합니다. SIN을 전혀 신청하지 않고 일하는 것은 불법입니다.",
        },
        {
          q: "국경에서 CAD 2,500을 증명할 수 없으면 어떻게 되나요?",
          a: "국경 서비스 직원에게는 재량권이 있습니다. 충분한 자금을 증명하지 못하면 추가 질문을 받거나 최악의 경우 입국이 거부될 수 있습니다. 명세서가 여행 7일 이내 발급되었고, 이름이 명확하게 표시되어 있으며, 신용 한도가 아닌 이용 가능한 현금이 반영되어 있는지 확인하세요.",
        },
        {
          q: "캐나다를 떠날 때 소득세를 환급받을 수 있나요?",
          a: "가능합니다. 1년 중 일부만 일한 경우 등 세금이 과다 원천징수된 경우 T1 세금 신고서를 제출해 환급을 받을 수 있습니다. 캐나다를 떠난 후에도 신고할 수 있습니다. 고용주로부터 받은 모든 T4 전표를 보관하세요.",
        },
      ],
    },
    "zh-TW": {
      title: "加拿大打工度假（IEC）如何辦理銀行帳戶",
      description:
        "IEC打工度假簽證持有者在加拿大使用銀行服務的完整指南 — 申請SIN、開設加拿大銀行帳戶、資金證明（CAD 2,500），以及如何以CAD領薪。",
      excerpt:
        "沒有SIN就無法在加拿大合法工作。這裡告訴你取得SIN、開設帳戶、領到第一筆CAD薪資的最快路徑——按照正確順序。",
      sections: [
        {
          paragraphs: [
            "IEC打工度假為你打開了加拿大的大門——但在賺到第一塊錢之前，你需要按正確順序完成兩件事：社會保險號碼（SIN）和加拿大銀行帳戶。順序搞錯就會讓第一個薪資周期變成一場麻煩。",
          ],
        },
        {
          heading: "資金證明：入境時必須出示的CAD 2,500",
          paragraphs: [
            "當你抵達加拿大入境口岸時，邊境服務官員可能會要求你證明有足夠的資金支付前三個月的生活費。標準要求是可動用資金CAD 2,500。",
            "你必須出示出發前一週內開立的銀行對帳單，且對帳單上必須清楚顯示你的姓名和有效日期。信用卡不被接受——只有現金、儲蓄帳戶、銀行匯票、保付支票或旅行支票等流動資金才符合要求。若攜帶任何形式的CAD 10,000以上入境，依法必須向邊境官員申報。",
          ],
        },
        {
          heading: "申請SIN — 優先辦理",
          paragraphs: [
            "社會保險號碼（SIN）是在加拿大合法工作或使用政府計畫所需的9位數號碼。作為IEC打工度假簽證持有者，你會收到一個以「9」開頭的臨時SIN，有效期與工作許可證一致。",
            "你可以透過Service Canada線上申請SIN——這是最快的方式。你需要IEC工作許可證（上面載明你「可在加拿大接受就業」的文件）。申請免費。",
          ],
          bullets: [
            "在canada.ca線上申請，或親自前往Service Canada辦公室辦理",
            "攜帶IEC工作許可證及護照",
            "線上申請處理快速；親自辦理可能需要等待",
            "收到SIN後，須在開始工作前或收到SIN後3日內提供給雇主",
            "臨時SIN（以「9」開頭）有效期至工作許可證到期——請及時更新許可證以維持SIN有效",
          ],
        },
        {
          heading: "開設加拿大銀行帳戶",
          paragraphs: [
            "大多數主要加拿大銀行——TD、RBC、Scotiabank、BMO及CIBC——都允許持有有效工作許可證的臨時居民開設活期帳戶。許多銀行允許你在抵達前線上開始申請，再帶著文件到分行完成開戶手續。",
            "一般需要準備：護照、IEC工作許可證、SIN（部分銀行允許先開戶後補SIN），以及加拿大地址。在地址方面，許多銀行在你尋找永久住所期間，接受青年旅舍、Airbnb或朋友的地址作為臨時地址。",
          ],
          bullets: [
            "TD和RBC均提供新移民抵達前的線上開戶服務",
            "攜帶護照、工作許可證及SIN前往分行完成開通手續",
            "臨時地址（青年旅舍、短租）通常可以接受——請向你選擇的銀行確認",
            "大多數帳戶從第一天起即可使用金融卡和網路銀行",
            "詢問「新移民」或「免月費」帳戶——多家銀行第一年免收手續費",
          ],
        },
        {
          heading: "以CAD領薪 — 雇主需要的資訊",
          paragraphs: [
            "要接收加拿大雇主的直接存款，你需要提供銀行的通匯號碼（5位數）、機構號碼（3位數）和帳戶號碼（7至12位數）。這些資訊印在支票底部，或可在銀行應用程式的「直接存款資訊」中查詢。",
            "雇主還需要你的SIN用於薪資作業和稅款代扣。聯邦所得稅、就業保險（EI）保費和加拿大退休金計畫（CPP）提撥款均會從薪資中扣除。年末提交T1報稅表進行結算，並有機會獲得退稅。",
          ],
        },
        {
          heading: "Tern 如何協助你",
          paragraphs: [
            "Tern在你抵達時按正確順序引導你完成SIN和銀行帳戶的申辦步驟，安全儲存你的加拿大銀行資訊，並在整個居留期間追蹤你的代扣稅款。報稅季來臨時，Tern已備好你的收入和扣除記錄，讓你輕鬆提交T1報稅表，確保退稅一分不少。",
          ],
        },
      ],
      faq: [
        {
          q: "沒有SIN可以在加拿大開始工作嗎？",
          a: "你必須在開始就業後3日內申請SIN。可以在收到SIN之前開始工作，但必須立即申請，並在收到SIN後3日內提供給雇主。從未申請SIN就工作屬於違法行為。",
        },
        {
          q: "如果在邊境無法證明CAD 2,500的資金怎麼辦？",
          a: "邊境服務官員擁有裁量權。若無法證明足夠資金，可能會被追問更多問題，最壞情況下會被拒絕入境。請確保對帳單是在出發7日內開立的，清楚顯示姓名，且反映的是可動用的現金——而非信用額度。",
        },
        {
          q: "離開加拿大後可以申請所得稅退稅嗎？",
          a: "有可能。若當年被過度代扣稅款——只工作部分時間很常見——可以提交T1報稅表申請退稅。離開加拿大後仍可報稅。請妥善保存雇主提供的所有T4表格。",
        },
      ],
    },
  },
};
