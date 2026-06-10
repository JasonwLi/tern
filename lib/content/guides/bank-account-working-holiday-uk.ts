import type { Article } from "../types";

export const article: Article = {
  slug: "bank-account-working-holiday-uk",
  kind: "guide",
  date: "2026-06-02",
  emoji: "🇬🇧",
  accent: "bg-sky-300",
  readMinutes: 6,
  sources: [
    {
      label: "GOV.UK — Apply for a National Insurance number",
      url: "https://www.gov.uk/apply-national-insurance-number",
    },
    {
      label: "GOV.UK — Youth Mobility Scheme visa",
      url: "https://www.gov.uk/youth-mobility",
    },
  ],
  i18n: {
    en: {
      title: "Opening a UK bank account on a Youth Mobility Scheme visa",
      description:
        "Banking in the UK on a YMS visa — sort codes, the proof-of-address catch-22, getting a NIN for work, and app banks vs high street banks.",
      excerpt:
        "No UK bank account means no pay — and the proof-of-address loop catches almost every new arrival. Here's how to break it fast.",
      sections: [
        {
          paragraphs: [
            "Banking in the UK is one of the first walls you hit on the Youth Mobility Scheme. You need a bank account to get paid, but every bank asks for proof of a UK address — which you don't have yet because you just landed. On top of that, getting a National Insurance number (NIN) to work legally adds another step. Getting all three sorted (account, address, NIN) in the right order is what separates a smooth first fortnight from a stressful one.",
          ],
        },
        {
          heading: "Sort codes, account numbers, and how UK banking works",
          paragraphs: [
            "UK bank accounts use two identifiers: a six-digit sort code (formatted XX-XX-XX) that identifies the bank and branch, and an eight-digit account number. Both are required together whenever you give payment details to an employer or set up a transfer. Unlike Australia's BSB, the sort code and account number are always presented as a pair.",
            "Most UK employers pay by BACS (Bankers' Automated Clearing System), which processes overnight. Your first pay run may be delayed if your account details aren't submitted before the payroll cut-off — usually a week before payday — so opening your account as early as possible matters.",
          ],
          bullets: [
            "Sort code format: XX-XX-XX (6 digits), e.g. 20-00-00",
            "Account number: 8 digits, e.g. 12345678",
            "Give both to your employer on day one — payroll needs them before the cut-off",
            "BACS payments take 1 business day to clear after the payment date",
            "Some employers also ask for your bank's name and the account holder name as it appears on the account",
          ],
        },
        {
          heading: "Breaking the proof-of-address catch-22",
          paragraphs: [
            "Traditional high-street banks (Barclays, HSBC, Lloyds, NatWest) typically require proof of a UK address — a utility bill or council tax letter in your name dated within 3 months. As a new arrival staying in a hostel or short-let flat, you almost certainly don't have this, which is why most YMS holders are turned away on their first visit.",
            "App-based banks solve this problem entirely. Monzo, Revolut, and Starling all open accounts with just your passport and a selfie — no UK address proof required. They also open fully online in 10–15 minutes and issue virtual card details immediately. For most working holiday makers, one of these is the right first bank account in the UK.",
          ],
          bullets: [
            "Monzo — opens with passport + selfie, physical card in 3–5 days, full UK sort code and account number",
            "Starling — similar to Monzo, FSCS-protected, excellent spending notifications",
            "Revolut — fastest to open, but technically an e-money account rather than a full bank account; some employers don't accept it for payroll — confirm before relying on it",
            "Barclays — has a specific 'foreign national' application path but still requires a UK address; worth trying once you have one",
            "Bring your passport and YMS visa stamp or BRP card to any in-branch appointment for high-street banks",
          ],
        },
        {
          heading: "Getting your National Insurance number",
          paragraphs: [
            "A National Insurance number (NIN) is a unique reference (format: AB 12 34 56 C) that HMRC uses to track your tax and National Insurance contributions. You are legally permitted to start work before you have a NIN — you simply tell your employer you have applied and they can start paying you. However, without a NIN on file your employer cannot allocate your contributions correctly, and you may pay emergency tax initially.",
            "You apply for a NIN online via the GOV.UK 'Apply for a National Insurance number' service. You'll need your passport, your right to work in the UK (your YMS visa), and a UK address — even a temporary one — for correspondence. Processing typically takes several weeks, and HMRC will send a letter to your UK address with your NIN.",
          ],
          bullets: [
            "You can work legally while your NIN application is pending — tell your employer you have applied",
            "Apply at gov.uk/apply-national-insurance-number as soon as you have a UK address to receive the letter",
            "Your NIN never changes — keep it safe for future UK employment",
            "Once you have it, give it to your employer and ask them to apply it from your next payroll run",
            "NIN is separate from a UTR (Unique Taxpayer Reference) — you only need a UTR if you go self-employed",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Tern lets you open a local UK account before you even board the plane — all you need is your passport and YMS visa approval. When you land, your sort code and account number are ready to hand to your employer on day one. Top up from your home currency at the real mid-market rate, swap currencies at a flat fee, and use your card at UK ATMs with no withdrawal fees. Tern also reminds you to apply for your NIN the moment you have a UK address, so nothing slips through the cracks.",
          ],
        },
      ],
      faq: [
        {
          q: "Can I start work in the UK before I have a National Insurance number?",
          a: "Yes. You can legally start work before your NIN arrives. Tell your employer you have applied and give them the date of your application. They should not refuse to employ you or withhold pay just because you don't have the number yet. Once it arrives, provide it to your employer and ask them to update your payroll record.",
        },
        {
          q: "Will high-street UK banks open an account for a YMS visa holder?",
          a: "Some will, but the proof-of-address requirement is the main barrier. Barclays has the most foreigner-friendly in-branch process and a specific non-UK resident pathway. Most WHV holders find it faster to open with Monzo or Starling on arrival, then add a high-street account later once they have a rental agreement or utility bill.",
        },
        {
          q: "What's the difference between a sort code and a BSB number?",
          a: "They serve the same purpose — identifying the bank and branch — but they are different systems. UK sort codes are 6 digits (XX-XX-XX); Australian BSB numbers are also 6 digits but formatted differently. If you're sending money from Australia to a UK account, you need the UK sort code and 8-digit account number, not a BSB.",
        },
      ],
    },
    es: {
      title: "Cuenta bancaria en el Reino Unido con Youth Mobility Scheme",
      description:
        "Banca en el Reino Unido con visa YMS: sort codes, el dilema del domicilio, el NIN para trabajar, y bancos digitales vs. tradicionales.",
      excerpt:
        "Sin cuenta bancaria en el Reino Unido no te pueden pagar — y el bucle de la dirección te atrapa casi al instante. Así lo solucionas rápido.",
      sections: [
        {
          paragraphs: [
            "El sistema bancario del Reino Unido es uno de los primeros obstáculos en el Youth Mobility Scheme. Necesitas una cuenta para cobrar, pero cada banco te pide un comprobante de domicilio en el Reino Unido — que todavía no tienes porque acabas de llegar. Además, para trabajar legalmente necesitas un número de Seguro Nacional (NIN). Ordenar bien los tres pasos (cuenta, domicilio, NIN) marca la diferencia entre las dos primeras semanas.",
          ],
        },
        {
          heading: "Sort codes, números de cuenta y cómo funciona la banca en el Reino Unido",
          paragraphs: [
            "Las cuentas bancarias del Reino Unido usan dos datos: un sort code de seis dígitos (formato XX-XX-XX) que identifica el banco y la sucursal, y un número de cuenta de ocho dígitos. Ambos son necesarios juntos cada vez que le das tus datos de pago a un empleador o haces una transferencia. A diferencia del BSB australiano, el sort code y el número de cuenta siempre se usan en par.",
            "La mayoría de los empleadores del Reino Unido pagan por BACS (sistema automatizado de compensación bancaria), que procesa de un día para el otro. Tu primer pago puede demorarse si no entregás tus datos bancarios antes del cierre de nómina — que suele ser una semana antes del día de pago — así que abrir la cuenta lo antes posible es importante.",
          ],
          bullets: [
            "Formato del sort code: XX-XX-XX (6 dígitos), por ejemplo 20-00-00",
            "Número de cuenta: 8 dígitos, por ejemplo 12345678",
            "Dáselos a tu empleador el primer día — nómina los necesita antes del cierre",
            "Los pagos BACS tardan 1 día hábil en acreditarse después de la fecha de pago",
            "Algunos empleadores también piden el nombre del banco y el nombre del titular tal como figura en la cuenta",
          ],
        },
        {
          heading: "Cómo salir del bucle de la prueba de domicilio",
          paragraphs: [
            "Los bancos tradicionales (Barclays, HSBC, Lloyds, NatWest) suelen exigir un comprobante de domicilio en el Reino Unido — una factura de servicios o carta del ayuntamiento a tu nombre con menos de 3 meses de antigüedad. Si acabas de llegar y estás en un hostel o piso de alquiler temporario, casi seguro que no lo tienes, y por eso la mayoría de los titulares de YMS son rechazados en la primera visita.",
            "Los bancos digitales resuelven este problema por completo. Monzo, Revolut y Starling abren cuentas solo con tu pasaporte y una selfie — sin necesidad de comprobante de domicilio en el Reino Unido. Además, se abren completamente online en 10 o 15 minutos y emiten datos de tarjeta virtual al instante. Para la mayoría de los que están en working holiday, uno de estos es la mejor primera cuenta bancaria en el Reino Unido.",
          ],
          bullets: [
            "Monzo — se abre con pasaporte y selfie, tarjeta física en 3 a 5 días, sort code y número de cuenta del Reino Unido completos",
            "Starling — similar a Monzo, con protección FSCS y excelentes notificaciones de gastos",
            "Revolut — el más rápido de abrir, pero técnicamente es una cuenta de dinero electrónico y no un banco completo; algunos empleadores no lo aceptan para nómina — confirma antes de depender de él",
            "Barclays — tiene un proceso específico para extranjeros, pero sigue requiriendo domicilio en el Reino Unido; vale la pena cuando ya tienes uno",
            "Lleva tu pasaporte y el sello de la visa YMS o tu tarjeta BRP a cualquier turno en sucursal para bancos tradicionales",
          ],
        },
        {
          heading: "Cómo obtener tu número de Seguro Nacional (NIN)",
          paragraphs: [
            "El número de Seguro Nacional (NIN) es una referencia única (formato: AB 12 34 56 C) que HMRC usa para registrar tus contribuciones de impuestos y Seguro Nacional. Puedes empezar a trabajar legalmente antes de tenerlo — simplemente le dices a tu empleador que ya solicitaste el número. Sin embargo, sin el NIN cargado, el empleador no puede asignar tus contribuciones correctamente y puede que al principio te cobren impuestos de emergencia.",
            "Solicitas el NIN online a través del servicio 'Solicitar un número de Seguro Nacional' de GOV.UK. Vas a necesitar tu pasaporte, tu derecho a trabajar en el Reino Unido (tu visa YMS) y una dirección en el Reino Unido — aunque sea temporal — para recibir correspondencia. El trámite suele tardar varias semanas y HMRC te manda una carta con tu NIN a esa dirección.",
          ],
          bullets: [
            "Puedes trabajar legalmente mientras tu solicitud de NIN está en trámite — avísale a tu empleador que ya aplicaste",
            "Solicítalo en gov.uk/apply-national-insurance-number apenas tengas una dirección en el Reino Unido para recibir la carta",
            "Tu NIN nunca cambia — guárdalo para cualquier trabajo futuro en el Reino Unido",
            "Una vez que lo tengas, dáselo a tu empleador y pídele que lo aplique desde tu próxima liquidación",
            "El NIN es diferente del UTR (número único de contribuyente) — solo lo necesitas si trabajas como autónomo",
          ],
        },
        {
          heading: "Cómo te ayuda Tern",
          paragraphs: [
            "Tern te permite abrir una cuenta local en el Reino Unido antes de subir al avión — solo necesitas tu pasaporte y la aprobación de la visa YMS. Cuando llegas, tu sort code y número de cuenta están listos para dárselos a tu empleador el primer día. Recargas desde tu moneda local al tipo de cambio real, cambias divisas con una tarifa fija y usas tu tarjeta en cajeros automáticos del Reino Unido sin comisiones de extracción. Tern también te recuerda solicitar el NIN en cuanto tienes una dirección en el Reino Unido para que nada se te escape.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Puedo empezar a trabajar en el Reino Unido antes de tener el número de Seguro Nacional?",
          a: "Sí. Puedes empezar a trabajar legalmente antes de que llegue el NIN. Avísale a tu empleador que ya aplicaste y dale la fecha de tu solicitud. No debería negarse a contratarte ni retener el pago solo porque todavía no tienes el número. Cuando llegue, proporciónaselo y pídele que actualice tu registro en nómina.",
        },
        {
          q: "¿Los bancos tradicionales del Reino Unido abren una cuenta a los titulares de visa YMS?",
          a: "Algunos sí, pero el requisito de domicilio es el principal obstáculo. Barclays tiene el proceso más amigable para extranjeros y una vía específica para no residentes del Reino Unido. La mayoría de los que están en working holiday encuentran más rápido abrir con Monzo o Starling al llegar, y agregar un banco tradicional después cuando ya tienen contrato de alquiler o factura de servicios.",
        },
        {
          q: "¿Qué diferencia hay entre un sort code y un número BSB?",
          a: "Cumplen la misma función — identificar el banco y la sucursal — pero son sistemas distintos. Los sort codes del Reino Unido son 6 dígitos (XX-XX-XX); los BSB australianos también son 6 dígitos pero con un formato diferente. Si mandas dinero desde Australia a una cuenta en el Reino Unido, necesitas el sort code del Reino Unido y el número de cuenta de 8 dígitos, no un BSB.",
        },
      ],
    },
    ja: {
      title: "ユースモビリティビザでイギリスの銀行口座を開設する方法",
      description:
        "YMSビザでイギリスの銀行口座開設 — ソートコード・住所証明の悪循環・NIN取得・ネット銀行vs大手銀行を解説。",
      excerpt:
        "イギリスの銀行口座がなければ給与を受け取れません。住所証明のループを素早く突破する方法を解説します。",
      sections: [
        {
          paragraphs: [
            "ユースモビリティスキーム（YMS）で最初にぶつかる実務的な壁が、銀行口座の開設です。給与を受け取るには口座が必要ですが、どの銀行もイギリス国内の住所証明を求めます――でも、着いたばかりのあなたにはそれがありません。さらに、合法的に働くには国民保険番号（NIN）の取得も必要です。口座・住所・NINを正しい順番で揃えることが、スムーズな最初の2週間への近道です。",
          ],
        },
        {
          heading: "ソートコード・口座番号とイギリスの銀行の仕組み",
          paragraphs: [
            "イギリスの銀行口座には2つの識別番号があります。銀行と支店を識別する6桁のソートコード（XX-XX-XX形式）と、8桁の口座番号です。雇用主への支払情報の提供や送金の際は、常にこの2つをセットで使います。オーストラリアのBSBと異なり、ソートコードと口座番号は必ず一緒に提示します。",
            "英国の雇用主のほとんどはBACS（銀行自動決済システム）で給与を支払います。翌営業日処理なので、通常は給与日の1週間前がペイロールの締め切りです。それまでに口座情報を提出できないと最初の給与が遅れる可能性があるため、できるだけ早く口座を開設することが重要です。",
          ],
          bullets: [
            "ソートコード形式：XX-XX-XX（6桁）、例：20-00-00",
            "口座番号：8桁、例：12345678",
            "初日に雇用主へ両方を渡す――ペイロールの締め切り前に必要です",
            "BACS支払いは支払日の翌営業日に着金します",
            "銀行名と口座名義人名（口座に登録された通り）を求める雇用主もいます",
          ],
        },
        {
          heading: "住所証明の悪循環を突破する方法",
          paragraphs: [
            "大手銀行（Barclays、HSBC、Lloyds、NatWest）は通常、イギリス国内の住所証明――3ヶ月以内に発行された名義人宛ての光熱費の請求書や住民税通知書――を求めます。着いたばかりでホステルや短期賃貸に住んでいる場合、まずこれは持っていないため、多くのYMSホルダーが最初の訪問で断られます。",
            "ネット銀行はこの問題を完全に解決してくれます。Monzo、Revolut、Starlingはパスポートと自撮り写真だけで口座を開設でき、イギリス国内の住所証明は不要です。全てオンラインで10〜15分で完了し、すぐにバーチャルカードの情報が発行されます。ほとんどのワーホリメーカーにとって、これがイギリスでの最初の銀行口座として最善の選択肢です。",
          ],
          bullets: [
            "Monzo — パスポートと自撮りで開設、物理カードは3〜5日で届く、完全なイギリスのソートコードと口座番号付き",
            "Starling — Monzoと同様、FSCS保護あり、優れた支出通知機能",
            "Revolut — 最速で開設できるが、技術的には完全な銀行ではなく電子マネー口座。ペイロールに使えない雇用主もいるため、事前に確認を",
            "Barclays — 外国人向けの特別な申請ルートがあるが、やはりイギリスの住所が必要。住所が確保できてから試す価値あり",
            "大手銀行の店舗訪問時は、パスポートとYMSビザのスタンプまたはBRPカードを持参してください",
          ],
        },
        {
          heading: "国民保険番号（NIN）の取得方法",
          paragraphs: [
            "国民保険番号（NIN）は、HMRCが税金と国民保険料を管理するための固有の参照番号です（形式：AB 12 34 56 C）。NINがなくても合法的に仕事を始めることができます。雇用主に申請済みであることを伝えれば働き始められます。ただし、NINが登録されていないと雇用主が正しく拠出金を配分できず、最初のうちは緊急税率で課税される場合があります。",
            "NINはGOV.UKの「国民保険番号を申請する」サービスからオンラインで申請します。パスポート、イギリスでの就労許可（YMSビザ）、そして通知を受け取るためのイギリスの住所（一時的なものでも可）が必要です。処理には数週間かかることが多く、HMRCがその住所宛に手紙でNINを送ってきます。",
          ],
          bullets: [
            "NIN申請中でも合法的に働ける――申請済みであることを雇用主に伝えましょう",
            "イギリスの住所ができたらすぐにgov.uk/apply-national-insurance-numberで申請する",
            "NINは一生変わらない――将来のイギリスでの就労のために大切に保管してください",
            "届いたら雇用主に渡し、次のペイロールから適用してもらうよう依頼する",
            "NINはUTR（固有納税者番号）とは別――フリーランスで働く場合のみUTRが必要です",
          ],
        },
        {
          heading: "Ternができること",
          paragraphs: [
            "Ternは、飛行機に乗る前からイギリスのローカル口座を開設できます――必要なのはパスポートとYMSビザの承認だけです。到着したその日に、ソートコードと口座番号を雇用主に渡せる状態になっています。本国の通貨からミッドマーケットレートでトップアップでき、通貨両替は一律手数料、ATM引き出しも手数料なし。NINはイギリスの住所ができた瞬間にリマインドが届くので、何も見落としません。",
          ],
        },
      ],
      faq: [
        {
          q: "NINなしでもイギリスで仕事を始めることはできますか？",
          a: "はい、できます。NINが届く前でも合法的に仕事を始められます。申請済みであることと申請日を雇用主に伝えてください。番号がないだけで採用拒否や給与の未払いをされることはありません。NINが届いたら雇用主に提供し、ペイロール記録の更新を依頼してください。",
        },
        {
          q: "イギリスの大手銀行はYMSビザ保有者の口座を開設してくれますか？",
          a: "開設してくれる銀行もありますが、住所証明の要件が主な障壁です。Barclaysには外国人向けの最も柔軟な店頭プロセスと非英国居住者向けの特別ルートがあります。多くのワーホリメーカーは、到着時にMonzoかStarlingで開設して、賃貸契約か光熱費の請求書ができてから大手銀行の口座を追加する方法が効率的だと感じています。",
        },
        {
          q: "ソートコードとBSB番号の違いは何ですか？",
          a: "どちらも銀行と支店を識別するという同じ目的を持っていますが、異なるシステムです。イギリスのソートコードは6桁（XX-XX-XX）、オーストラリアのBSB番号も6桁ですが形式が異なります。オーストラリアからイギリスの口座に送金する場合、必要なのはイギリスのソートコードと8桁の口座番号であり、BSBではありません。",
        },
      ],
    },
    ko: {
      title: "유스 모빌리티 스킴 비자로 영국 은행 계좌 개설하는 방법",
      description:
        "YMS 비자로 영국 은행 개설 — 소트 코드, 주소 증명 악순환, NIN 발급, 앱 은행 vs 일반 은행 비교 정리.",
      excerpt:
        "영국 은행 계좌가 없으면 급여를 받을 수 없습니다. 주소 증명 루프를 빠르게 해결하는 방법을 알아보세요.",
      sections: [
        {
          paragraphs: [
            "유스 모빌리티 스킴(YMS)에서 처음 만나는 실질적인 장벽이 바로 은행 계좌 개설입니다. 급여를 받으려면 계좌가 필요한데, 모든 은행은 영국 내 주소 증명을 요구합니다 — 하지만 막 도착한 여러분에게는 그게 없죠. 게다가 합법적으로 일하려면 국민보험번호(NIN)도 필요합니다. 계좌, 주소, NIN을 올바른 순서로 해결하는 것이 원활한 첫 2주를 만드는 핵심입니다.",
          ],
        },
        {
          heading: "소트 코드, 계좌번호, 영국 은행 시스템 이해하기",
          paragraphs: [
            "영국 은행 계좌는 두 가지 식별자를 사용합니다: 은행과 지점을 식별하는 6자리 소트 코드(XX-XX-XX 형식)와 8자리 계좌번호입니다. 고용주에게 결제 정보를 줄 때나 송금할 때는 항상 이 둘을 함께 제공해야 합니다. 호주의 BSB와 달리, 소트 코드와 계좌번호는 항상 쌍으로 제시됩니다.",
            "대부분의 영국 고용주는 BACS(은행 자동 정산 시스템)로 급여를 지급하며, 다음 영업일에 처리됩니다. 급여일 약 일주일 전인 급여 마감일 전에 계좌 정보를 제출하지 않으면 첫 급여가 늦어질 수 있으므로, 최대한 빨리 계좌를 개설하는 것이 중요합니다.",
          ],
          bullets: [
            "소트 코드 형식: XX-XX-XX (6자리), 예: 20-00-00",
            "계좌번호: 8자리, 예: 12345678",
            "첫날 고용주에게 두 정보 모두 제공 — 급여 마감일 전에 필요합니다",
            "BACS 결제는 지급일 다음 영업일에 입금됩니다",
            "일부 고용주는 은행 이름과 계좌에 등록된 예금주 이름도 요청합니다",
          ],
        },
        {
          heading: "주소 증명의 악순환 깨기",
          paragraphs: [
            "전통적인 시중 은행(Barclays, HSBC, Lloyds, NatWest)은 보통 영국 내 주소 증명 — 3개월 이내 발행된 본인 명의 공과금 청구서나 지방세 고지서 — 을 요구합니다. 막 도착해서 호스텔이나 단기 임대 아파트에 묵고 있다면 이것을 갖추기가 거의 불가능하기 때문에, 대부분의 YMS 소지자들은 첫 방문에서 거절당합니다.",
            "앱 기반 은행들은 이 문제를 완전히 해결해 줍니다. Monzo, Revolut, Starling은 여권과 셀피만으로 계좌를 개설할 수 있으며 영국 주소 증명이 필요 없습니다. 모두 온라인으로 10~15분 안에 개설되고 즉시 가상 카드 정보가 발급됩니다. 대부분의 워홀러에게는 이 중 하나가 영국 첫 번째 은행 계좌로 가장 적합합니다.",
          ],
          bullets: [
            "Monzo — 여권 + 셀피로 개설, 실물 카드 3~5일 내 도착, 완전한 영국 소트 코드와 계좌번호 제공",
            "Starling — Monzo와 유사, FSCS 보호, 뛰어난 지출 알림 기능",
            "Revolut — 가장 빠르게 개설 가능하지만 기술적으로는 완전한 은행이 아닌 전자화폐 계좌; 일부 고용주는 급여 지급에 사용 불가 — 사용 전 확인 필수",
            "Barclays — 외국인을 위한 특별 신청 경로가 있지만 여전히 영국 주소 필요; 주소가 생기면 시도해볼 만함",
            "시중 은행 방문 시 여권과 YMS 비자 스탬프 또는 BRP 카드를 지참하세요",
          ],
        },
        {
          heading: "국민보험번호(NIN) 발급받는 방법",
          paragraphs: [
            "국민보험번호(NIN)는 HMRC가 세금과 국민보험 기여금을 추적하는 고유 참조번호입니다(형식: AB 12 34 56 C). NIN 없이도 합법적으로 일을 시작할 수 있습니다 — 고용주에게 신청했다고 알리면 됩니다. 하지만 NIN이 등록되지 않으면 고용주가 기여금을 올바르게 배분할 수 없어 초기에는 비상 세율로 과세될 수 있습니다.",
            "NIN은 GOV.UK의 '국민보험번호 신청' 서비스를 통해 온라인으로 신청합니다. 여권, 영국 취업 권한(YMS 비자), 그리고 서신을 받을 영국 주소(임시 주소도 가능)가 필요합니다. 처리에는 보통 몇 주가 걸리며, HMRC가 해당 영국 주소로 NIN이 적힌 편지를 보냅니다.",
          ],
          bullets: [
            "NIN 신청 중에도 합법적으로 일할 수 있습니다 — 고용주에게 신청 사실을 알리세요",
            "영국 주소가 생기는 즉시 gov.uk/apply-national-insurance-number에서 신청하세요",
            "NIN은 평생 변경되지 않습니다 — 향후 영국 취업을 위해 안전하게 보관하세요",
            "받은 후에는 고용주에게 제공하고 다음 급여 처리부터 적용해 달라고 요청하세요",
            "NIN은 UTR(고유납세자번호)과 다릅니다 — UTR은 자영업자에게만 필요합니다",
          ],
        },
        {
          heading: "Tern이 도와드립니다",
          paragraphs: [
            "Tern은 비행기에 오르기 전에 영국 현지 계좌를 개설할 수 있게 해줍니다 — 여권과 YMS 비자 승인만 있으면 됩니다. 도착하는 날, 소트 코드와 계좌번호를 첫날 고용주에게 바로 건넬 준비가 됩니다. 본국 통화에서 실제 환율로 충전하고, 통화 교환은 정액 수수료로, 영국 ATM 출금은 수수료 없이 이용할 수 있습니다. 영국 주소가 생기는 순간 NIN 신청 알림도 보내드려 아무것도 놓치지 않게 해드립니다.",
          ],
        },
      ],
      faq: [
        {
          q: "NIN 없이도 영국에서 일을 시작할 수 있나요?",
          a: "네, 가능합니다. NIN이 도착하기 전에도 합법적으로 일을 시작할 수 있습니다. 고용주에게 신청했다는 사실과 신청 날짜를 알려주세요. 번호가 없다는 이유로 채용 거부나 급여 미지급을 당해서는 안 됩니다. NIN이 도착하면 고용주에게 제공하고 급여 기록 업데이트를 요청하세요.",
        },
        {
          q: "영국 시중 은행들이 YMS 비자 소지자의 계좌를 개설해 주나요?",
          a: "일부 은행은 해주지만 주소 증명 요건이 가장 큰 장벽입니다. Barclays가 외국인에게 가장 친화적인 방문 프로세스와 비영국 거주자를 위한 특별 경로를 갖추고 있습니다. 대부분의 워홀러는 도착 시 Monzo나 Starling으로 먼저 개설한 뒤, 임대 계약서나 공과금 청구서가 생기면 시중 은행 계좌를 추가하는 방법이 효율적이라고 느낍니다.",
        },
        {
          q: "소트 코드와 BSB 번호의 차이가 무엇인가요?",
          a: "둘 다 은행과 지점을 식별하는 동일한 목적을 가지지만 다른 시스템입니다. 영국 소트 코드는 6자리(XX-XX-XX)이고, 호주 BSB 번호도 6자리이지만 형식이 다릅니다. 호주에서 영국 계좌로 송금할 때는 영국 소트 코드와 8자리 계좌번호가 필요하며, BSB는 필요하지 않습니다.",
        },
      ],
    },
    "zh-TW": {
      title: "持青年打工度假簽證在英國開設銀行帳戶的方法",
      description:
        "YMS簽證持有者的英國銀行完整指南 — 銀行代碼、住址證明的惡性循環、申請NIN以合法工作、數位銀行vs傳統銀行，以及如何向英國雇主收取薪資。",
      excerpt:
        "沒有英國銀行帳戶就無法收薪水——住址證明的循環幾乎讓每個新抵達者都卡關。這裡告訴你如何快速突破。",
      sections: [
        {
          paragraphs: [
            "在青年打工度假簽證（YMS）期間，開設英國銀行帳戶是你最先碰到的實務難關。你需要帳戶才能收薪水，但每間銀行都要求英國境內的住址證明——而剛抵達的你根本還沒有。除此之外，合法工作還需要國民保險號碼（NIN）。依正確順序搞定帳戶、住址和NIN這三件事，是讓頭兩週順利的關鍵。",
          ],
        },
        {
          heading: "銀行代碼、帳號與英國銀行系統介紹",
          paragraphs: [
            "英國銀行帳戶使用兩種識別碼：用來識別銀行與分行的六位數銀行代碼（格式為XX-XX-XX），以及八位數的帳號。每次提供付款資訊給雇主或進行匯款，都必須同時提供這兩者。與澳洲的BSB不同，英國的銀行代碼和帳號一定要成對使用。",
            "英國大多數雇主透過BACS（銀行自動清算系統）發薪，隔一個工作日處理。若在薪資截止日（通常是發薪日前一週）前未能提交帳戶資料，第一筆薪水可能會延遲，因此越早開戶越好。",
          ],
          bullets: [
            "銀行代碼格式：XX-XX-XX（6位數），例如 20-00-00",
            "帳號：8位數，例如 12345678",
            "第一天就把兩者都給雇主——薪資部門需要在截止日前收到",
            "BACS付款在付款日的下一個工作日入帳",
            "部分雇主也會要求提供銀行名稱及帳戶上的戶名",
          ],
        },
        {
          heading: "突破住址證明的惡性循環",
          paragraphs: [
            "傳統的高街銀行（Barclays、HSBC、Lloyds、NatWest）通常要求英國境內的住址證明——三個月內以本人名義開立的水電費帳單或地方稅通知書。剛抵達、住在青年旅館或短租公寓的你，幾乎不可能有這些文件，這也是大多數YMS持有者第一次去銀行就被拒的原因。",
            "數位銀行完全解決了這個問題。Monzo、Revolut和Starling只需護照和自拍照即可開戶，完全不需要英國住址證明。全程線上，10至15分鐘即可完成，並立即取得虛擬卡資訊。對大多數打工度假者來說，這些是在英國開設第一個銀行帳戶的最佳選擇。",
          ],
          bullets: [
            "Monzo — 護照加自拍即可開戶，實體卡3至5天到達，提供完整的英國銀行代碼和帳號",
            "Starling — 與Monzo類似，受FSCS保護，支出通知功能出色",
            "Revolut — 開戶最快，但技術上屬於電子貨幣帳戶而非完整銀行；部分雇主不接受用於薪資發放——使用前先確認",
            "Barclays — 有專為外籍人士設計的申請流程，但仍需英國住址；有了住址後值得嘗試",
            "前往高街銀行分行時，請攜帶護照及YMS簽證印章或BRP卡",
          ],
        },
        {
          heading: "如何申請國民保險號碼（NIN）",
          paragraphs: [
            "國民保險號碼（NIN）是HMRC用來追蹤你的稅款和國民保險供款的唯一參考號碼（格式：AB 12 34 56 C）。你可以在還沒拿到NIN之前就合法開始工作——只需告知雇主你已提出申請即可。不過，若NIN尚未登記，雇主將無法正確分配你的供款，初期可能會被課徵緊急稅率。",
            "你可透過GOV.UK的「申請國民保險號碼」服務線上申請NIN。需要準備護照、在英國的工作權利（YMS簽證）以及一個英國地址（臨時地址亦可）用於接收信件。處理時間通常需要數週，HMRC會將NIN以信件方式寄送至你在英國的地址。",
          ],
          bullets: [
            "NIN申請期間仍可合法工作——告知雇主你已提出申請",
            "一有英國地址，立即前往gov.uk/apply-national-insurance-number申請",
            "NIN終身不變——請妥善保管，供未來在英國工作使用",
            "收到後交給雇主，並請他們從下一個薪資週期起套用",
            "NIN與UTR（唯一納稅人參考號碼）不同——只有自營作業者才需要UTR",
          ],
        },
        {
          heading: "Tern 如何協助你",
          paragraphs: [
            "Tern讓你在登機前就能開設英國本地帳戶——只需護照和YMS簽證批准即可。抵達當天，銀行代碼和帳號就已備妥，可以在第一天直接交給雇主。從本國貨幣以真實匯率充值，貨幣兌換收取固定費用，在英國ATM提款也完全免手續費。一有英國地址，Tern便會立即提醒你申請NIN，讓你不遺漏任何步驟。",
          ],
        },
      ],
      faq: [
        {
          q: "沒有NIN也可以在英國開始工作嗎？",
          a: "可以。在NIN送達前，你仍可合法開始工作。請告知雇主你已提出申請並提供申請日期。雇主不應僅因你尚未持有號碼就拒絕雇用或扣留薪資。收到NIN後，將其提供給雇主並請他們更新薪資記錄。",
        },
        {
          q: "英國高街銀行會為YMS簽證持有者開戶嗎？",
          a: "部分銀行會，但住址證明要求是主要障礙。Barclays的外籍人士申請流程最為友善，並有專為非英國居民設計的申請路徑。大多數打工度假者發現，抵達時先用Monzo或Starling開戶，等有了租約或公用事業帳單後再申請高街銀行帳戶，是最有效率的做法。",
        },
        {
          q: "銀行代碼和BSB號碼有什麼不同？",
          a: "兩者用途相同——都是用來識別銀行和分行——但屬於不同系統。英國銀行代碼為6位數（XX-XX-XX）；澳洲BSB號碼也是6位數，但格式不同。從澳洲匯款到英國帳戶時，需要的是英國銀行代碼和8位數帳號，而非BSB。",
        },
      ],
    },
  },
};
