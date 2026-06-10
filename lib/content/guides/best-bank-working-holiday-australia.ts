import type { Article } from "../types";

export const article: Article = {
  slug: "best-bank-working-holiday-australia",
  kind: "guide",
  date: "2026-05-26",
  emoji: "🏆",
  accent: "bg-lime-300",
  readMinutes: 7,
  related: ["bank-account-working-holiday-australia", "how-much-money-working-holiday-australia"],
  sources: [
    {
      label: "Australian Government MoneySmart — Transaction accounts and debit cards",
      url: "https://moneysmart.gov.au/banking/transaction-accounts-and-debit-cards",
    },
  ],
  i18n: {
    en: {
      title: "Best bank for a working holiday in Australia",
      description:
        "Honest comparison of Australian banks, travel cards, and fintechs for WHV holders — what criteria matter and where Tern fits.",
      excerpt:
        "Big-4 banks, Wise, Revolut, or Tern — which is actually best for working holiday Australia? Here's what to compare before you land.",
      sections: [
        {
          paragraphs: [
            "\"Best bank for working holiday Australia\" is one of the most searched questions by incoming WHV holders — and the honest answer is that no single bank is perfect for every traveller. The right choice depends on your priorities: do you need to open before you land? Do you need multi-currency? Are you staying six months or two years? This guide breaks down what genuinely matters, assesses the main options fairly, and explains where Tern is different.",
          ],
        },
        {
          heading: "What actually matters for a working holiday bank account",
          paragraphs: [
            "Most bank comparisons focus on interest rates or bonus features that are irrelevant to travellers. For a WHV holder, the factors that move the needle are:",
          ],
          bullets: [
            "[Open before arrival](~/guides/bank-account-working-holiday-australia) — can you get your BSB and account number before you land, so your employer can pay you from day one?",
            "No monthly account-keeping fee — or an easy waiver condition like one deposit per month",
            "No (or low) international ATM and foreign transaction fees — you may be withdrawing from machines outside your bank's network regularly",
            "Instant BSB and account number — so you can hand it to an employer the same day you arrive",
            "Easy to close and retrieve funds — when your visa expires you need to be able to move your money out without bureaucratic delay",
            "Multi-currency or good FX rates — if you are sending money home or travelling to other countries during your WHV",
          ],
        },
        {
          heading: "The big-4 Australian banks — fair assessment",
          paragraphs: [
            "The Commonwealth Bank (CommBank), ANZ, Westpac, and NAB are the four largest banks in Australia. They offer broad ATM networks, branch access across all states, and are accepted everywhere.",
          ],
          bullets: [
            "Monthly fees: most big-4 everyday accounts charge a monthly fee (typically AUD 4–6) that is waived if you deposit a minimum amount each month — for a regularly paid WHV worker this is usually easy to satisfy",
            "In-branch ID requirement: all big-4 banks require in-person identity verification with your passport to open a full account — you cannot complete the process entirely online as a new overseas arrival",
            "Pre-arrival applications: CommBank's Everyday Account and ANZ's Access Advantage allow an online application before you arrive; you complete identity verification at a branch when you land",
            "Foreign ATM fees: big-4 banks typically charge AUD 2–5 per overseas ATM withdrawal and 2–3% on foreign currency transactions — these add up on a travel-heavy WHV",
            "TFN handling: all big-4 banks prompt you to add your Tax File Number in online banking; without it, interest is withheld at the top rate (though for a transaction account with minimal interest this rarely matters much)",
          ],
        },
        {
          heading: "Travel cards and fintechs — Wise and Revolut",
          paragraphs: [
            "Wise and Revolut are popular with WHV holders for currency exchange, international transfers, and multi-currency spending. They are genuinely excellent for those use cases. However, they are designed as multi-currency fintech products, not as primary Australian salary accounts.",
          ],
          bullets: [
            "Wise: offers an Australian bank account with BSB and account number — you can receive AUD salary directly; real mid-market FX rates are a genuine advantage for sending money home; no monthly fee",
            "Revolut: AUD account available; strong multi-currency features and fee-free ATM withdrawals up to a monthly limit; premium tiers unlock more",
            "Superannuation: neither Wise nor Revolut are linked to any super fund tracking or TFN/super nudge features — you need to manage these separately",
            "AU-specific features: neither platform has built-in tools for Australia-specific WHV paperwork such as TFN lodgement reminders, super fund selection, or tax-year summaries",
            "Both are solid choices for FX and spending; neither replaces a dedicated WHV banking tool for salary-day and compliance tracking",
          ],
        },
        {
          heading: "Where Tern fits",
          paragraphs: [
            "Tern is designed specifically for working holiday visa holders — not as a generic bank or a multi-currency card, but as a financial companion that understands the WHV lifecycle. Key differences:",
          ],
          bullets: [
            "Salary from day one: Tern provides your BSB and account number before you land so your employer can pay you from the first shift",
            "TFN nudges: Tern reminds you to apply for your Tax File Number and checks whether your employer is withholding at the correct rate",
            "Superannuation tracking: Tern tracks your super contributions and helps you claim your super back when you leave Australia",
            "Flat-fee currency swaps: no percentage-based foreign transaction fees — a flat fee per swap regardless of the amount",
            "Easy exit: when your WHV ends, Tern is designed to make closing your account and repatriating your money simple, not a bureaucratic ordeal",
            "Pre-launch / waitlist: Tern is not yet live — join the waitlist to be first in line when it launches",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Unlike big-4 banks that treat you as a standard retail customer, and unlike fintechs that treat you as a multi-currency user, Tern is built around the working holiday timeline: arrive, get paid, manage TFN and super, and leave cleanly. If you want a bank account that understands what you are actually there to do, join the Tern waitlist.",
          ],
        },
      ],
      faq: [
        {
          q: "Which bank is best for a working holiday in Australia?",
          a: "It depends on your priorities. For branch access and wide ATM coverage, CommBank and ANZ are the most practical big-4 options. For zero foreign transaction fees, Wise gives you real mid-market FX rates with an AUD account. For a purpose-built WHV experience with salary-from-day-one, TFN nudges, and super tracking, Tern (currently pre-launch) is designed specifically for you.",
        },
        {
          q: "Can I open an Australian bank account before I arrive?",
          a: "Partially. CommBank and ANZ both allow you to start the application online from overseas, but you must verify your identity in branch once you land — you cannot receive your account details until that step is complete. Tern (pre-launch) and some fintechs like Wise allow full digital account opening, meaning you can receive your BSB and account number before you board the plane.",
        },
        {
          q: "Do I need a TFN to open a bank account in Australia?",
          a: "No — you can open a transaction account without a TFN. However, if you earn any interest, the bank is required to withhold tax at the top marginal rate without your TFN. For a salary account where interest is minimal, this is rarely a practical issue. That said, you should apply for your TFN as soon as you arrive since your employer needs it for payroll — without it they must withhold tax at the top rate on your wages.",
        },
      ],
    },
    es: {
      title: "El mejor banco para una working holiday en Australia",
      description:
        "Comparación honesta de bancos, tarjetas de viaje y fintechs para WHV en Australia — criterios que importan y cómo encaja Tern.",
      excerpt:
        "Big-4 australianos, Wise, Revolut o Tern: ¿cuál es realmente el mejor banco para la working holiday en Australia? Esto es lo que tienes que comparar antes de llegar.",
      sections: [
        {
          paragraphs: [
            "\"El mejor banco para la working holiday en Australia\" es una de las preguntas más buscadas por quienes llegan con WHV — y la respuesta honesta es que ningún banco es perfecto para todos. La elección correcta depende de tus prioridades: ¿necesitas abrir la cuenta antes de llegar? ¿Necesitas multi-moneda? ¿Te quedas seis meses o dos años? Esta guía desglosa lo que realmente importa, evalúa las principales opciones con honestidad y explica en qué se diferencia Tern. Si eres de Latinoamérica (Chile, Argentina, Perú, Uruguay, Ecuador…), tu visa es la Work and Holiday (subclase 462) — a efectos de bancos e impuestos funciona igual que la 417, así que toda la información de esta guía aplica para ti.",
          ],
        },
        {
          heading: "Lo que realmente importa en una cuenta bancaria para working holiday",
          paragraphs: [
            "La mayoría de las comparaciones de bancos se centran en tasas de interés o características irrelevantes para los viajeros. Para un titular de WHV, los factores que hacen la diferencia son:",
          ],
          bullets: [
            "[Abrir antes de llegar](~/guides/bank-account-working-holiday-australia) — ¿puedes obtener tu BSB y número de cuenta antes de aterrizar, para que tu empleador pueda pagarte desde el primer día?",
            "Sin cuota mensual de mantenimiento — o una condición de exención fácil como un depósito al mes",
            "Sin (o bajas) comisiones por cajero automático internacional y por transacciones en moneda extranjera",
            "BSB y número de cuenta instantáneos — para dárselos a un empleador el mismo día que llegas",
            "Fácil de cerrar y retirar fondos — cuando vence tu visa necesitas poder mover tu dinero sin demoras burocráticas",
            "Multi-moneda o buenos tipos de cambio — si envías dinero a casa o viajas a otros países durante tu WHV",
          ],
        },
        {
          heading: "Los cuatro grandes bancos australianos — evaluación honesta",
          paragraphs: [
            "Commonwealth Bank (CommBank), ANZ, Westpac y NAB son los cuatro bancos más grandes de Australia. Ofrecen amplia red de cajeros automáticos, sucursales en todos los estados y aceptación universal.",
          ],
          bullets: [
            "Cuotas mensuales: la mayoría de las cuentas cotidianas de los big-4 cobran una cuota mensual (típicamente AUD 4–6) que se exime si depositas un mínimo mensual — para un trabajador con WHV que cobra regularmente, esto suele ser fácil de cumplir",
            "Verificación presencial: todos los big-4 requieren verificación de identidad en sucursal con tu pasaporte — no puedes completar el proceso totalmente online como nuevo llegado del exterior",
            "Solicitudes previas a la llegada: CommBank y ANZ permiten solicitar online antes de llegar; completas la verificación de identidad en sucursal cuando aterrizas",
            "Comisiones por cajeros externos: los big-4 suelen cobrar AUD 2–5 por retiro en cajeros externos y 2–3% en transacciones en moneda extranjera",
            "Gestión del TFN: todos los big-4 te solicitan agregar tu Tax File Number en la banca online; sin él, los intereses se retienen a la tasa máxima",
          ],
        },
        {
          heading: "Tarjetas de viaje y fintechs — Wise y Revolut",
          paragraphs: [
            "Wise y Revolut son populares entre los titulares de WHV para cambio de divisas, transferencias internacionales y gastos en múltiples monedas. Son genuinamente excelentes para esos casos de uso, pero están diseñadas como productos fintech multi-moneda, no como cuentas australianas de cobro de sueldo.",
          ],
          bullets: [
            "Wise: ofrece cuenta bancaria australiana con BSB y número de cuenta — puedes recibir sueldo en AUD directamente; tipos de cambio al precio de mercado real; sin cuota mensual",
            "Revolut: cuenta en AUD disponible; grandes funciones multi-moneda y retiros en cajero sin comisión hasta un límite mensual; los planes premium desbloquean más beneficios",
            "Superannuation: ninguna de las dos plataformas tiene seguimiento del super ni funciones de TFN — tienes que gestionarlo por separado",
            "Funciones específicas de AU: ninguna tiene herramientas integradas para recordatorios de TFN, selección de fondo de super o resúmenes del año fiscal australiano",
            "Ambas son buenas opciones para FX y gastos; ninguna reemplaza una herramienta específica para WHV en cuanto al seguimiento de sueldo y cumplimiento",
          ],
        },
        {
          heading: "Dónde encaja Tern",
          paragraphs: [
            "Tern está diseñado específicamente para titulares de visa working holiday — no como un banco genérico ni una tarjeta multi-moneda, sino como un compañero financiero que entiende el ciclo de vida de la WHV. Diferencias clave:",
          ],
          bullets: [
            "Sueldo desde el primer día: Tern te da tu BSB y número de cuenta antes de llegar para que tu empleador pueda pagarte desde el primer turno",
            "Recordatorios del TFN: Tern te recuerda solicitar el Tax File Number y verifica si tu empleador retiene a la tasa correcta",
            "Seguimiento del superannuation: Tern sigue tus aportes al super y te ayuda a reclamarlo cuando te vas de Australia",
            "Cambios de moneda con tarifa fija: sin comisiones porcentuales por transacciones en moneda extranjera — una tarifa fija por operación sin importar el monto",
            "Salida fácil: cuando termina tu WHV, Tern está diseñado para que cerrar tu cuenta y repatriar tu dinero sea simple",
            "Pre-lanzamiento / lista de espera: Tern todavía no está activo — anótate en la lista de espera para ser de los primeros cuando se lance",
          ],
        },
        {
          heading: "Cómo te ayuda Tern",
          paragraphs: [
            "A diferencia de los bancos big-4 que te tratan como un cliente minorista estándar, y de los fintechs que te tratan como usuario multi-moneda, Tern está diseñado en torno al ciclo de la working holiday: llegar, cobrar, gestionar el TFN y el super, y irse sin complicaciones. Si quieres una cuenta que entienda para qué estás realmente ahí, anótate en la lista de espera de Tern.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Qué banco es mejor para una working holiday en Australia?",
          a: "Depende de tus prioridades. Para acceso a sucursales y amplia red de cajeros, CommBank y ANZ son las opciones big-4 más prácticas. Para cero comisiones por transacciones en moneda extranjera, Wise ofrece tipos de cambio al precio real de mercado con cuenta en AUD. Para una experiencia diseñada específicamente para WHV con sueldo desde el primer día, recordatorios de TFN y seguimiento del super, Tern (actualmente en pre-lanzamiento) está diseñado especialmente para ti.",
        },
        {
          q: "¿Puedo abrir una cuenta bancaria australiana antes de llegar?",
          a: "Parcialmente. CommBank y ANZ permiten iniciar la solicitud online desde el exterior, pero debes verificar tu identidad en sucursal cuando llegas. Tern (en pre-lanzamiento) y algunos fintechs como Wise permiten la apertura de cuenta totalmente digital, lo que significa que puedes recibir tu BSB y número de cuenta antes de subir al avión.",
        },
        {
          q: "¿Necesito un TFN para abrir una cuenta bancaria en Australia?",
          a: "No — puedes abrir una cuenta de transacciones sin TFN. Sin embargo, si generas intereses, el banco está obligado a retener impuestos a la tasa marginal máxima sin tu TFN. Para una cuenta de sueldos donde los intereses son mínimos, esto rara vez es un problema práctico. Dicho esto, deberías solicitar tu TFN en cuanto llegues, ya que tu empleador lo necesita para la nómina — sin él, debe retener impuestos a la tasa máxima sobre tus salarios.",
        },
      ],
    },
    ja: {
      title: "ワーキングホリデーオーストラリアのベスト銀行比較",
      description:
        "WHVホルダー向けオーストラリアの銀行・トラベルカード・フィンテックを正直に比較 — 本当に重要な選択基準と、Ternが違う理由。",
      excerpt:
        "Big-4銀行、Wise、Revolut、Tern — オーストラリアのワーホリに本当に最適な銀行はどれ？渡航前に確認すべき比較ポイントをまとめました。",
      sections: [
        {
          paragraphs: [
            "「オーストラリアのワーホリ向けベスト銀行」は、WHVで来る人が最もよく検索する質問のひとつです。そして正直な答えは、すべての人に完璧な銀行はないということです。正しい選択は優先順位によって異なります。渡航前に口座を開設したいですか？マルチカレンシーが必要ですか？6ヶ月滞在するのか、2年間滞在するのか？このガイドでは本当に重要な点を整理し、主な選択肢を公平に評価し、Ternの違いを説明します。",
          ],
        },
        {
          heading: "ワーホリの銀行口座で本当に重要なこと",
          paragraphs: [
            "ほとんどの銀行比較は、旅行者には無関係な金利や付帯機能に焦点を当てています。WHVホルダーにとって本当に重要な要素は次の通りです：",
          ],
          bullets: [
            "[渡航前に開設できるか](~/guides/bank-account-working-holiday-australia) — 着陸前にBSBと口座番号を取得できるか。初日から雇用主が給与を支払えるか？",
            "月額手数料なし — または月1回の入金など簡単な免除条件があるか",
            "国際ATM手数料・外貨取引手数料なし（または低い） — 銀行ネットワーク外のATMを定期的に使う可能性がある",
            "即日BSBと口座番号の取得 — 到着当日に雇用主に渡せるか",
            "簡単に解約して資金を引き出せるか — ビザ期限後、官僚的な遅延なく海外送金できるか",
            "マルチカレンシーまたは良い為替レート — ワーホリ中に本国送金や他国への旅行がある場合",
          ],
        },
        {
          heading: "オーストラリア4大銀行 — 正直な評価",
          paragraphs: [
            "Commonwealth Bank（CommBank）、ANZ、Westpac、NABはオーストラリアの4大銀行です。全国に広いATMネットワークと支店を持ち、どこでも利用可能です。",
          ],
          bullets: [
            "月額手数料：ほとんどの4大銀行の日常口座は月額手数料（通常AUD 4〜6）がありますが、毎月最低入金額を達成すれば免除されます — 定期的に給与を受け取るワーホリワーカーには通常クリアしやすい条件",
            "支店での本人確認：すべての4大銀行は、新規の海外からの来客にはパスポートによる対面での本人確認が必要で、完全オンラインではプロセスを完了できません",
            "渡航前申請：CommBankとANZは渡航前のオンライン申請を許可していますが、着陸後に支店での本人確認が必要です",
            "外部ATM手数料：4大銀行は通常、外部ATM引き出し1回につきAUD 2〜5、外貨取引に2〜3%を請求します",
            "TFN対応：すべての4大銀行のオンラインバンキングでTFNの追加を促します。提出しないと利息に最高税率が適用されます",
          ],
        },
        {
          heading: "トラベルカードとフィンテック — WiseとRevolut",
          paragraphs: [
            "WiseとRevolutは外貨両替、国際送金、マルチカレンシー支出においてWHVホルダーに人気です。これらの用途では本当に優秀ですが、マルチカレンシーのフィンテック商品として設計されており、オーストラリアの給与受取口座としては位置付けられていません。",
          ],
          bullets: [
            "Wise：BSBと口座番号付きのオーストラリアの銀行口座を提供 — AUDで直接給与受取が可能。本国送金には本当の市場中間レートが大きなメリット。月額手数料なし",
            "Revolut：AUD口座あり。強力なマルチカレンシー機能と月間上限まで手数料無料のATM引き出し。プレミアムプランでさらに充実",
            "スーパーアニュエーション：WiseもRevolutもスーパーファンドの追跡やTFN/スーパーに関する通知機能はなく、自分で管理する必要があります",
            "AU特有の機能：どちらのプラットフォームにも、TFN申請リマインダー、スーパーファンド選択、納税年度別サマリーなどのオーストラリア特有のWHV書類対応機能はありません",
            "どちらも外貨と支出には優れた選択肢ですが、給与管理や各種手続きのためのWHV専用ツールにはなりません",
          ],
        },
        {
          heading: "Ternの位置付け",
          paragraphs: [
            "Ternはワーキングホリデービザホルダー専用に設計されています。汎用銀行でもマルチカレンシーカードでもなく、WHVのライフサイクルを理解したファイナンシャルパートナーです。主な違い：",
          ],
          bullets: [
            "初日から給与受取：渡航前にBSBと口座番号を提供するので、初日のシフトから雇用主が支払い可能",
            "TFNリマインダー：TFNの申請を促し、雇用主が正しい税率で源泉徴収しているかを確認",
            "スーパーアニュエーション追跡：スーパー拠出金を追跡し、オーストラリアを離れる際のスーパー還付をサポート",
            "定額通貨スワップ：外貨取引に割合ベースの手数料なし — 金額に関わらず1回ごとの定額手数料",
            "簡単な出口：WHVが終了したときにアカウントを閉鎖して資金を送金するプロセスを簡単にするよう設計",
            "プレローンチ/ウェイトリスト：Ternはまだ稼働していません — ローンチ時に真っ先に使えるようウェイトリストに登録を",
          ],
        },
        {
          heading: "Ternができること",
          paragraphs: [
            "一般の小売顧客として扱う4大銀行とも、マルチカレンシーユーザーとして扱うフィンテックとも違い、Ternはワーキングホリデーのタイムラインをベースにしたサービスです：到着、給与受取、TFNとスーパーの管理、そすムーズな帰国。自分がここで本当にやりたいことを理解した銀行口座を求めるなら、Ternのウェイトリストに登録してください。",
          ],
        },
      ],
      faq: [
        {
          q: "オーストラリアのワーホリに最適な銀行はどこですか？",
          a: "優先事項によります。支店アクセスと広いATMネットワークには、CommBankとANZが最も実用的な4大銀行の選択肢です。外貨取引手数料ゼロには、WiseがAUDの口座付きで本当の市場中間レートを提供しています。初日から給与受取できるWHV専用体験、TFNリマインダー、スーパー追跡には、Tern（現在プレローンチ）が特にあなたのために設計されています。",
        },
        {
          q: "オーストラリアに到着する前に銀行口座を開設できますか？",
          a: "部分的には可能です。CommBankとANZはどちらも海外からオンラインで申請を始められますが、着陸後に支店での本人確認が必要です。Tern（プレローンチ）やWiseなど一部のフィンテックは完全デジタルでの口座開設が可能で、搭乗前にBSBと口座番号を受け取れます。",
        },
        {
          q: "オーストラリアの銀行口座開設にTFNは必要ですか？",
          a: "いいえ — TFNなしで取引口座を開設できます。ただし、利息が発生した場合、TFNがないと銀行は最高限界税率で税金を源泉徴収します。利息が最小限の給与口座では、これが実質的な問題になることはほとんどありません。とはいえ、給与に対してTFNなしでは最高税率が源泉徴収されるため、雇用主のためにも到着後すぐにTFNを申請すべきです。",
        },
      ],
    },
    ko: {
      title: "호주 워킹홀리데이 최고의 은행 비교",
      description:
        "WHV 소지자를 위한 호주 은행, 트래블 카드, 핀테크 정직한 비교 — 실제로 중요한 선택 기준과 Tern이 다른 이유.",
      excerpt:
        "Big-4 은행, Wise, Revolut, Tern — 호주 워킹홀리데이에 실제로 가장 좋은 은행은 어디일까요? 입국 전에 확인해야 할 비교 포인트입니다.",
      sections: [
        {
          paragraphs: [
            "\"호주 워킹홀리데이 최고의 은행\"은 WHV 입국자들이 가장 많이 검색하는 질문 중 하나입니다. 솔직한 답변은 모든 여행자에게 완벽한 은행은 없다는 것입니다. 올바른 선택은 우선순위에 따라 다릅니다. 입국 전에 개설이 필요한가요? 다중 통화가 필요한가요? 6개월 체류인가요, 2년인가요? 이 가이드는 실제로 중요한 사항을 분류하고, 주요 선택지를 공정하게 평가하며, Tern이 어떻게 다른지 설명합니다.",
          ],
        },
        {
          heading: "워킹홀리데이 은행 계좌에서 실제로 중요한 것",
          paragraphs: [
            "대부분의 은행 비교는 여행자에게는 무관한 이자율이나 부가 기능에 초점을 맞춥니다. WHV 소지자에게 실질적인 차이를 만드는 요소는 다음과 같습니다:",
          ],
          bullets: [
            "[도착 전 개설](~/guides/bank-account-working-holiday-australia) — 착륙 전에 BSB와 계좌번호를 받을 수 있나요? 첫날부터 고용주가 급여를 지급할 수 있나요?",
            "월 계좌 유지비 없음 — 또는 월 1회 입금 같은 쉬운 면제 조건",
            "해외 ATM 및 외화 거래 수수료 없음(또는 낮음) — 은행 네트워크 외 ATM을 정기적으로 사용할 수 있습니다",
            "즉시 BSB 및 계좌번호 발급 — 도착 당일 고용주에게 전달할 수 있도록",
            "계좌 해지 및 자금 인출 용이성 — 비자 만료 후 관료적 지연 없이 돈을 이동할 수 있어야 함",
            "다중 통화 또는 좋은 환율 — WHV 기간 중 본국 송금이나 다른 나라 여행이 있는 경우",
          ],
        },
        {
          heading: "호주 4대 은행 — 공정한 평가",
          paragraphs: [
            "Commonwealth Bank(CommBank), ANZ, Westpac, NAB는 호주 4대 은행입니다. 전국적인 ATM 네트워크, 모든 주에 걸친 지점 접근성, 어디서나 이용 가능한 편의성을 제공합니다.",
          ],
          bullets: [
            "월 수수료: 대부분의 4대 은행 일상 계좌는 월 수수료(보통 AUD 4~6)가 있지만 매월 최소 금액을 입금하면 면제됩니다 — 정기적으로 급여를 받는 WHV 근무자에게는 보통 쉽게 충족 가능한 조건",
            "지점 신원 확인: 모든 4대 은행은 해외에서 새로 온 고객에게 여권으로 대면 신원 확인을 요구합니다 — 완전히 온라인으로는 절차를 완료할 수 없습니다",
            "사전 신청: CommBank와 ANZ는 입국 전 온라인 신청을 허용하지만 착륙 후 지점에서 신원 확인이 필요합니다",
            "외부 ATM 수수료: 4대 은행은 보통 외부 ATM 인출당 AUD 2~5, 외화 거래에 2~3%를 청구합니다",
            "TFN 처리: 모든 4대 은행의 인터넷 뱅킹에서 Tax File Number 등록을 안내합니다. 없으면 이자에 최고 세율이 적용됩니다",
          ],
        },
        {
          heading: "트래블 카드와 핀테크 — Wise와 Revolut",
          paragraphs: [
            "Wise와 Revolut은 환전, 국제 송금, 다중 통화 지출에서 WHV 소지자에게 인기 있습니다. 이런 용도에서는 정말 탁월하지만, 다중 통화 핀테크 제품으로 설계되어 있으며 호주 주급 수령 계좌가 주목적이 아닙니다.",
          ],
          bullets: [
            "Wise: BSB와 계좌번호가 있는 호주 은행 계좌 제공 — AUD 급여를 직접 받을 수 있습니다. 실제 시장 중간 환율은 본국 송금에 큰 장점. 월 수수료 없음",
            "Revolut: AUD 계좌 이용 가능. 강력한 다중 통화 기능과 월 한도까지 수수료 무료 ATM 인출. 프리미엄 플랜으로 더 많은 혜택",
            "슈퍼애뉴에이션: Wise와 Revolut 모두 슈퍼 펀드 추적이나 TFN/슈퍼 알림 기능이 없어 별도로 관리해야 합니다",
            "AU 특화 기능: 두 플랫폼 모두 TFN 신청 알림, 슈퍼 펀드 선택, 호주 세무 연도 요약 등 호주 특화 WHV 서류 기능이 없습니다",
            "두 옵션 모두 외환 거래와 지출에는 탄탄하지만, 급여 첫날 처리와 세무 추적을 위한 WHV 전용 도구를 대체하지는 못합니다",
          ],
        },
        {
          heading: "Tern의 차별점",
          paragraphs: [
            "Tern은 워킹홀리데이 비자 소지자를 위해 특별히 설계되었습니다 — 일반 은행이나 다중 통화 카드가 아니라, WHV 생활 주기를 이해하는 금융 파트너입니다. 핵심 차이점:",
          ],
          bullets: [
            "첫날부터 급여 수령: 입국 전에 BSB와 계좌번호를 제공하여 고용주가 첫 번째 근무 당일부터 지급 가능",
            "TFN 알림: TFN 신청을 상기시키고 고용주가 올바른 세율로 원천징수하는지 확인",
            "슈퍼애뉴에이션 추적: 슈퍼 기여금을 추적하고 호주를 떠날 때 슈퍼 환급을 돕습니다",
            "정액 통화 스왑: 외화 거래에 비율 기반 수수료 없음 — 금액에 관계없이 스왑당 정액 수수료",
            "쉬운 출구: WHV가 종료될 때 계좌 해지와 자금 송금이 관료적인 번거로움 없이 간단하도록 설계",
            "사전 출시/대기자 명단: Tern은 아직 출시 전입니다 — 출시 시 가장 먼저 사용할 수 있도록 대기자 명단에 등록하세요",
          ],
        },
        {
          heading: "Tern이 도와드립니다",
          paragraphs: [
            "일반 소매 고객으로 대하는 4대 은행과도, 다중 통화 사용자로 대하는 핀테크와도 달리, Tern은 워킹홀리데이 타임라인을 중심으로 구축되었습니다: 도착, 급여 수령, TFN과 슈퍼 관리, 깔끔한 출국. 자신이 실제로 거기서 하는 일을 이해하는 은행 계좌를 원한다면 Tern 대기자 명단에 등록하세요.",
          ],
        },
      ],
      faq: [
        {
          q: "호주 워킹홀리데이에 가장 좋은 은행은 어디인가요?",
          a: "우선순위에 따라 다릅니다. 지점 접근성과 넓은 ATM 네트워크를 원한다면 CommBank와 ANZ가 가장 실용적인 4대 은행 선택지입니다. 외화 거래 수수료 제로를 원한다면 Wise가 AUD 계좌와 함께 실제 시장 중간 환율을 제공합니다. 첫날부터 급여 수령, TFN 알림, 슈퍼 추적을 갖춘 WHV 전용 경험을 원한다면 Tern(현재 사전 출시 중)이 당신을 위해 설계되었습니다.",
        },
        {
          q: "호주에 도착하기 전에 은행 계좌를 개설할 수 있나요?",
          a: "부분적으로 가능합니다. CommBank와 ANZ 모두 해외에서 온라인으로 신청을 시작할 수 있지만, 착륙 후 지점에서 신원 확인이 필요합니다. Tern(사전 출시)과 Wise 같은 일부 핀테크는 완전 디지털 계좌 개설이 가능하여 비행기 탑승 전에 BSB와 계좌번호를 받을 수 있습니다.",
        },
        {
          q: "호주 은행 계좌 개설에 TFN이 필요한가요?",
          a: "아니요 — TFN 없이도 거래 계좌를 개설할 수 있습니다. 단, 이자가 발생하면 TFN이 없는 경우 은행이 최고 한계세율로 세금을 원천징수합니다. 이자가 미미한 급여 계좌에서는 실질적인 문제가 되는 경우가 거의 없습니다. 그렇더라도 고용주에게 TFN이 필요하므로(없으면 급여에 최고 세율 적용) 도착 후 즉시 신청하는 것이 좋습니다.",
        },
      ],
    },
    "zh-TW": {
      title: "打工度假澳洲最佳銀行比較指南",
      description:
        "WHV簽證持有者必看的澳洲銀行、旅行卡與金融科技誠實比較 — 真正重要的選擇標準，以及Tern的不同之處。",
      excerpt:
        "四大銀行、Wise、Revolut還是Tern，哪間才是澳洲打工度假的最佳銀行？這裡整理了你抵達前必須比較的重點。",
      sections: [
        {
          paragraphs: [
            "「澳洲打工度假最佳銀行」是入境WHV持有者搜尋最頻繁的問題之一，而誠實的答案是：沒有任何一間銀行對所有旅人都完美。正確的選擇取決於你的優先需求：你需要在抵達前就能開戶嗎？需要多幣別功能嗎？你打算待六個月還是兩年？本指南釐清真正重要的因素，公平評估主要選項，並說明Tern的差異所在。",
          ],
        },
        {
          heading: "打工度假銀行帳戶真正重要的條件",
          paragraphs: [
            "大多數銀行比較都聚焦在對旅人無關緊要的利率或附加功能。對WHV持有者而言，真正影響選擇的因素是：",
          ],
          bullets: [
            "[抵達前可開戶](~/guides/bank-account-working-holiday-australia) — 登機前就能取得BSB和帳號，讓雇主從第一天起就能匯薪嗎？",
            "無月費 — 或條件簡單易達的免除方案，例如每月存款一次",
            "無（或低）國際ATM手續費與外幣交易費 — 你可能需要頻繁使用非自家銀行的ATM",
            "即時取得BSB和帳號 — 抵達當天就能交給雇主",
            "容易關戶與提領資金 — 簽證到期後能順暢匯出資金，不被行政流程卡住",
            "多幣別或良好匯率 — 如果你需要在WHV期間匯款回國或前往其他國家旅遊",
          ],
        },
        {
          heading: "澳洲四大銀行 — 公平評估",
          paragraphs: [
            "Commonwealth Bank（CommBank）、ANZ、Westpac、NAB是澳洲四大銀行，提供廣泛的ATM網絡、遍布各州的實體分行，在任何地方都通行無阻。",
          ],
          bullets: [
            "月費：多數四大銀行的日常帳戶收取月費（通常AUD 4~6），只要每月存入最低金額即可免除——對有固定薪資的WHV工作者來說通常容易達成",
            "分行身份驗證：所有四大銀行都要求攜帶護照到分行進行本人驗證，海外新客無法完全在線上完成開戶流程",
            "抵達前申請：CommBank和ANZ允許在海外線上申請，但抵達後仍需到分行完成身份驗證",
            "外部ATM手續費：四大銀行每次使用外部ATM通常收取AUD 2~5，外幣交易另收2~3%",
            "TFN處理：所有四大銀行的網路銀行都會提示你新增Tax File Number；若未提供，利息將被扣繳最高稅率",
          ],
        },
        {
          heading: "旅行卡與金融科技 — Wise與Revolut",
          paragraphs: [
            "Wise和Revolut深受WHV持有者歡迎，用於外幣兌換、國際匯款和多幣別消費，確實非常出色。不過，它們是以多幣別金融科技產品為設計核心，而非以澳洲薪資收款帳戶為主。",
          ],
          bullets: [
            "Wise：提供附BSB和帳號的澳洲銀行帳戶——可直接收取AUD薪資；以真實市場中間匯率匯款回國是一大優勢；無月費",
            "Revolut：提供AUD帳戶；強大的多幣別功能與月限額內免手續費ATM提款；高階方案可解鎖更多福利",
            "退休金（Superannuation）：Wise和Revolut均無退休金追蹤或TFN/超額提示功能，需自行管理",
            "澳洲特有功能：兩個平台均無內建TFN申請提醒、退休金選擇或澳洲稅務年度摘要等WHV專屬文件功能",
            "兩者在外匯和消費方面都是優秀選擇，但無法取代針對薪資入帳和合規追蹤的WHV專屬工具",
          ],
        },
        {
          heading: "Tern的定位",
          paragraphs: [
            "Tern專為打工度假簽證持有者而設計——不是通用銀行，也不是多幣別卡，而是一個理解WHV生命週期的財務夥伴。核心差異：",
          ],
          bullets: [
            "第一天就能領薪：Tern在你抵達前就提供BSB和帳號，讓雇主從第一班次起即可匯薪",
            "TFN提醒：Tern提醒你申請Tax File Number，並確認雇主是否以正確稅率扣繳",
            "退休金追蹤：追蹤你的退休金提撥，並在你離開澳洲時協助申請退回",
            "固定費率換匯：無百分比外幣交易費——不論金額大小，每次換匯收取固定費用",
            "輕鬆離境：WHV結束時，Tern設計讓關戶和匯出資金的流程簡單、無繁文縟節",
            "預先上市/候補名單：Tern尚未正式上線——加入候補名單，搶先體驗",
          ],
        },
        {
          heading: "Tern 如何協助你",
          paragraphs: [
            "不同於把你當作一般零售客戶的四大銀行，也不同於把你當作多幣別用戶的金融科技，Tern圍繞打工度假時間軸而建立：抵達、領薪、管理TFN與退休金、順利離境。如果你想要一個真正理解你此行目的的銀行帳戶，加入Tern候補名單。",
          ],
        },
      ],
      faq: [
        {
          q: "哪間銀行最適合在澳洲打工度假？",
          a: "視優先需求而定。若重視分行服務和廣泛ATM覆蓋，CommBank和ANZ是最實用的四大銀行選擇。若追求零外幣交易費，Wise提供附AUD帳戶的真實市場中間匯率。若想要從第一天領薪、TFN提醒、退休金追蹤等WHV專屬體驗，Tern（目前預先上市中）正是為你而設計的。",
        },
        {
          q: "可以在抵達澳洲前開設銀行帳戶嗎？",
          a: "部分可以。CommBank和ANZ都允許在海外線上開始申請，但仍需在抵達後到分行完成身份驗證才能取得帳戶資料。Tern（預先上市中）以及Wise等部分金融科技平台支援全程數位開戶，意味著你在登機前就能收到BSB和帳號。",
        },
        {
          q: "在澳洲開設銀行帳戶需要TFN嗎？",
          a: "不需要——沒有TFN也能開設交易帳戶。不過，如果有產生利息，銀行必須以最高邊際稅率扣繳稅款。對於利息收入微薄的薪資帳戶，這通常不是實際問題。儘管如此，由於雇主需要你的TFN來計算薪資——沒有TFN雇主必須以最高稅率扣薪——建議抵達後盡快申請。",
        },
      ],
    },
    de: {
      title: "Bestes Konto für Work and Travel Australien",
      description:
        "Ehrlicher Vergleich von australischen Banken, Reisekarten und Fintechs für WHV-Inhaber — worauf es wirklich ankommt und wo Tern anders ist.",
      excerpt:
        "Big-4-Banken, Wise, Revolut oder Tern — welche ist wirklich die beste Bank für Work and Travel Australien? Das solltest du vor der Einreise vergleichen.",
      sections: [
        {
          paragraphs: [
            "\"Beste Bank für Work and Travel Australien\" ist eine der meistgesuchten Fragen von WHV-Inhabern — und die ehrliche Antwort lautet: Es gibt keine einzelne Bank, die für jeden Reisenden perfekt ist. Die richtige Wahl hängt von deinen Prioritäten ab: Musst du das Konto vor der Ankunft eröffnen? Brauchst du Mehrwährungsfunktionen? Bleibst du sechs Monate oder zwei Jahre? Dieser Leitfaden zeigt, worauf es wirklich ankommt, bewertet die wichtigsten Optionen fair und erklärt, was Tern anders macht.",
          ],
        },
        {
          heading: "Was bei einem Work-and-Travel-Bankkonto wirklich zählt",
          paragraphs: [
            "Die meisten Bankvergleiche konzentrieren sich auf Zinssätze oder Zusatzfunktionen, die für Reisende irrelevant sind. Für WHV-Inhaber sind die folgenden Faktoren entscheidend:",
          ],
          bullets: [
            "[Kontoeröffnung vor der Einreise](~/guides/bank-account-working-holiday-australia) — Kannst du BSB und Kontonummer erhalten, bevor du landest, damit dein Arbeitgeber dich vom ersten Tag an bezahlen kann?",
            "Keine monatliche Kontoführungsgebühr — oder eine leicht erfüllbare Befreiungsbedingung wie eine Einzahlung pro Monat",
            "Keine (oder niedrige) Gebühren für internationale Geldautomaten und Fremdwährungstransaktionen — du wirst möglicherweise regelmäßig an Automaten außerhalb deines Banknetzwerks abheben",
            "Sofortige BSB und Kontonummer — damit du sie einem Arbeitgeber noch am Ankunftstag übergeben kannst",
            "Einfaches Schließen und Auszahlen — wenn dein Visum abläuft, musst du dein Geld ohne bürokratische Verzögerung transferieren können",
            "Mehrwährung oder gute Wechselkurse — wenn du während deines Work and Travel Geld nach Hause schickst oder andere Länder bereist",
          ],
        },
        {
          heading: "Die australischen Big-4-Banken — faire Bewertung",
          paragraphs: [
            "Commonwealth Bank (CommBank), ANZ, Westpac und NAB sind die vier größten Banken Australiens. Sie bieten ein breites Geldautomatennetz, Filialen in allen Bundesstaaten und werden überall akzeptiert.",
          ],
          bullets: [
            "Monatliche Gebühren: Die meisten Alltagskonten der Big-4 erheben eine Monatsgebühr (in der Regel AUD 4–6), die entfällt, wenn du monatlich einen Mindestbetrag einzahlst — für einen regelmäßig bezahlten Work-and-Travel-Jobber ist das meist leicht zu erfüllen",
            "Persönliche Identitätsverifizierung: Alle Big-4-Banken verlangen eine persönliche Identitätsprüfung mit Reisepass in der Filiale — als neuer Einreisender aus dem Ausland kannst du den Prozess nicht vollständig online abschließen",
            "Anträge vor der Einreise: CommBank und ANZ erlauben eine Online-Bewerbung vor der Einreise; die Identitätsverifizierung findet nach der Landung in der Filiale statt",
            "Fremd-Geldautomatengebühren: Big-4-Banken berechnen in der Regel AUD 2–5 pro Abhebung an einem fremden Geldautomaten und 2–3 % auf Fremdwährungstransaktionen",
            "TFN-Verwaltung: Alle Big-4-Banken fordern dich im Online-Banking auf, deine Tax File Number hinzuzufügen; ohne sie werden Zinsen zum Höchststeuersatz einbehalten",
          ],
        },
        {
          heading: "Reisekarten und Fintechs — Wise und Revolut",
          paragraphs: [
            "Wise und Revolut sind bei WHV-Inhabern für Währungsumtausch, internationale Überweisungen und Ausgaben in mehreren Währungen beliebt. Für diese Anwendungsfälle sind sie wirklich ausgezeichnet. Allerdings sind sie als Mehrwährungs-Fintech-Produkte konzipiert, nicht als primäre australische Gehaltskonten.",
          ],
          bullets: [
            "Wise: bietet ein australisches Bankkonto mit BSB und Kontonummer — du kannst AUD-Gehalt direkt empfangen; echte Mittelkurse sind ein echter Vorteil beim Heimatgeldtransfer; keine Monatsgebühr",
            "Revolut: AUD-Konto verfügbar; starke Mehrwährungsfunktionen und gebührenfreie Geldautomatenabhebungen bis zu einem monatlichen Limit; Premium-Tarife schalten mehr frei",
            "Superannuation: Weder Wise noch Revolut verfügen über eine Verknüpfung mit Super-Fonds-Tracking oder TFN/Super-Erinnerungen — du musst das selbst verwalten",
            "AU-spezifische Funktionen: Keine der Plattformen hat integrierte Tools für australienspezifische WHV-Formalitäten wie TFN-Antragserinnerungen, Super-Fonds-Auswahl oder Steuerjahres-Zusammenfassungen",
            "Beide sind solide Optionen für Devisen und Ausgaben; keine ersetzt ein spezielles WHV-Banking-Tool für Gehaltseingang und steuerliche Compliance",
          ],
        },
        {
          heading: "Wo Tern seinen Platz hat",
          paragraphs: [
            "Tern wurde speziell für Inhaber eines Working-Holiday-Visums entwickelt — nicht als Universalbank oder Mehrwährungskarte, sondern als Finanzbegleiter, der den WHV-Lebenszyklus versteht. Die wichtigsten Unterschiede:",
          ],
          bullets: [
            "Gehalt ab dem ersten Tag: Tern stellt dir BSB und Kontonummer vor der Einreise bereit, damit dein Arbeitgeber dich bereits ab der ersten Schicht bezahlen kann",
            "TFN-Erinnerungen: Tern erinnert dich daran, deine Tax File Number zu beantragen, und prüft, ob dein Arbeitgeber zum richtigen Steuersatz einbehält",
            "Superannuation-Tracking: Tern verfolgt deine Super-Beiträge und hilft dir, dein Super zurückzufordern, wenn du Australien verlässt",
            "Pauschale Währungstauschgebühr: keine prozentualen Fremdwährungsgebühren — eine feste Gebühr pro Tausch, unabhängig vom Betrag",
            "Unkomplizierter Ausstieg: Wenn dein WHV endet, ist Tern darauf ausgelegt, das Schließen deines Kontos und die Rücküberweisung deines Geldes einfach und bürokratiefrei zu gestalten",
            "Vorstart / Warteliste: Tern ist noch nicht live — trag dich in die Warteliste ein, um bei der Markteinführung als Erster dabei zu sein",
          ],
        },
        {
          heading: "Wie Tern dir hilft",
          paragraphs: [
            "Anders als die Big-4-Banken, die dich als Standardkunden behandeln, und anders als Fintechs, die dich als Mehrwährungsnutzer sehen, ist Tern rund um den Work-and-Travel-Zeitplan aufgebaut: ankommen, Gehalt erhalten, TFN und Super verwalten, sauber ausreisen. Wenn du ein Konto möchtest, das wirklich versteht, was du dort vorhast, trag dich in die Tern-Warteliste ein.",
          ],
        },
      ],
      faq: [
        {
          q: "Welche Bank ist am besten für Work and Travel Australien?",
          a: "Das hängt von deinen Prioritäten ab. Für Filialzugang und ein breites Geldautomatennetz sind CommBank und ANZ die praktischsten Big-4-Optionen. Für null Fremdwährungsgebühren bietet Wise echte Mittelkurse mit einem AUD-Konto. Für eine speziell auf Work and Travel zugeschnittene Erfahrung mit Gehalt ab Tag eins, TFN-Erinnerungen und Super-Tracking ist Tern (derzeit im Vorstart) genau für dich entwickelt worden.",
        },
        {
          q: "Kann ich ein australisches Bankkonto vor meiner Einreise eröffnen?",
          a: "Teilweise. Sowohl CommBank als auch ANZ ermöglichen einen Online-Antrag von Übersee, aber du musst deine Identität nach der Landung in einer Filiale verifizieren — deine Kontodaten erhältst du erst nach diesem Schritt. Tern (im Vorstart) und einige Fintechs wie Wise ermöglichen eine vollständig digitale Kontoeröffnung, sodass du BSB und Kontonummer erhalten kannst, bevor du ins Flugzeug steigst.",
        },
        {
          q: "Brauche ich eine TFN, um in Australien ein Bankkonto zu eröffnen?",
          a: "Nein — du kannst ein Transaktionskonto ohne TFN eröffnen. Wenn du jedoch Zinsen verdienst, ist die Bank verpflichtet, Steuern zum Höchststeuersatz einzubehalten, solange keine TFN vorliegt. Bei einem Gehaltskonto mit minimalen Zinsen ist das in der Praxis selten ein Problem. Dennoch solltest du deine TFN so schnell wie möglich nach der Ankunft beantragen, da dein Arbeitgeber sie für die Lohnabrechnung benötigt — ohne TFN muss er Steuern zum Höchststeuersatz auf deinen Lohn einbehalten.",
        },
      ],
    },
    fr: {
      title: "Meilleure banque pour un PVT en Australie",
      description:
        "Comparatif honnête des banques australiennes, cartes voyage et fintechs pour les pvtistes — ce qui compte vraiment et la place de Tern.",
      excerpt:
        "Big-4, Wise, Revolut ou Tern — quelle est vraiment la meilleure banque pour un PVT en Australie ? Ce qu'il faut comparer avant d'atterrir.",
      sections: [
        {
          paragraphs: [
            "\"Meilleure banque pour un PVT en Australie\" est l'une des questions les plus cherchées par les pvtistes — et la réponse honnête est qu'aucune banque n'est parfaite pour tous les voyageurs. Le bon choix dépend de tes priorités : as-tu besoin d'ouvrir un compte avant d'arriver ? As-tu besoin du multi-devises ? Tu restes six mois ou deux ans ? Ce guide décompose ce qui compte vraiment, évalue honnêtement les principales options et explique ce qui distingue Tern.",
          ],
        },
        {
          heading: "Ce qui compte vraiment pour un compte bancaire en PVT",
          paragraphs: [
            "La plupart des comparatifs de banques se concentrent sur les taux d'intérêt ou des fonctionnalités sans intérêt pour les voyageurs. Pour un titulaire de WHV, les facteurs qui font vraiment la différence sont :",
          ],
          bullets: [
            "[Ouvrir avant l'arrivée](~/guides/bank-account-working-holiday-australia) — peux-tu obtenir ton BSB et ton numéro de compte avant d'atterrir, pour que ton employeur puisse te payer dès le premier jour ?",
            "Pas de frais de tenue de compte mensuel — ou une condition de dispense facile à remplir, comme un seul virement par mois",
            "Pas (ou peu) de frais de retrait international et de frais sur les transactions en devises étrangères — tu utiliseras peut-être régulièrement des distributeurs hors réseau",
            "BSB et numéro de compte immédiats — pour les transmettre à un employeur le jour même de ton arrivée",
            "Facile à clôturer et à récupérer ses fonds — quand ton visa expire, tu dois pouvoir rapatrier ton argent sans délai administratif",
            "Multi-devises ou bons taux de change — si tu envoies de l'argent chez toi ou voyages dans d'autres pays pendant ton PVT",
          ],
        },
        {
          heading: "Les quatre grandes banques australiennes — évaluation honnête",
          paragraphs: [
            "La Commonwealth Bank (CommBank), ANZ, Westpac et NAB sont les quatre plus grandes banques d'Australie. Elles offrent un vaste réseau de distributeurs, des agences dans tous les États et sont acceptées partout.",
          ],
          bullets: [
            "Frais mensuels : la plupart des comptes courants des big-4 facturent des frais mensuels (généralement AUD 4–6) supprimés si tu déposes un montant minimum chaque mois — pour un pvtiste qui perçoit un salaire régulier, c'est en général facile à atteindre",
            "Vérification d'identité en agence : toutes les big-4 exigent une vérification d'identité en personne avec ton passeport — tu ne peux pas finaliser l'ouverture entièrement en ligne en tant que nouvel arrivant de l'étranger",
            "Candidatures avant l'arrivée : CommBank et ANZ permettent une demande en ligne avant l'arrivée ; tu complètes la vérification d'identité en agence après avoir atterri",
            "Frais de retrait hors réseau : les big-4 facturent en général AUD 2–5 par retrait hors réseau et 2–3 % sur les transactions en devises étrangères",
            "Gestion du TFN : toutes les big-4 t'invitent à ajouter ton Tax File Number dans l'appli ; sans lui, les intérêts sont prélevés au taux marginal maximum",
          ],
        },
        {
          heading: "Cartes voyage et fintechs — Wise et Revolut",
          paragraphs: [
            "Wise et Revolut sont populaires auprès des pvtistes pour le change de devises, les virements internationaux et les dépenses en plusieurs devises. Ce sont d'excellentes solutions pour ces usages. Toutefois, ce sont des produits fintech multi-devises, pas des comptes salaires australiens à part entière.",
          ],
          bullets: [
            "Wise : propose un compte bancaire australien avec BSB et numéro de compte — tu peux recevoir ton salaire en AUD directement ; les vrais taux de change interbancaires sont un vrai avantage pour envoyer de l'argent chez toi ; pas de frais mensuels",
            "Revolut : compte en AUD disponible ; fonctionnalités multi-devises solides et retraits ATM sans frais jusqu'à un plafond mensuel ; les formules premium débloquent plus d'options",
            "Superannuation : ni Wise ni Revolut ne proposent de suivi de la super ni de rappels TFN/super — tu dois gérer cela séparément",
            "Fonctionnalités spécifiques à l'Australie : aucune des deux plateformes n'intègre d'outils pour les démarches WHV propres à l'Australie, comme les rappels d'enregistrement du TFN, la sélection d'un fonds de retraite ou les récapitulatifs de l'année fiscale australienne",
            "Toutes deux sont de solides options pour le change et les dépenses ; aucune ne remplace un outil bancaire dédié aux pvtistes pour le suivi du salaire et des obligations fiscales",
          ],
        },
        {
          heading: "La place de Tern",
          paragraphs: [
            "Tern est conçu spécifiquement pour les titulaires d'un visa working holiday — pas comme une banque généraliste ni une carte multi-devises, mais comme un compagnon financier qui comprend le cycle de vie du PVT. Les différences clés :",
          ],
          bullets: [
            "Salaire dès le premier jour : Tern te fournit ton BSB et ton numéro de compte avant d'atterrir, pour que ton employeur puisse te payer dès le premier jour de travail",
            "Rappels TFN : Tern te rappelle de faire ta demande de Tax File Number et vérifie que ton employeur prélève au taux correct",
            "Suivi de la superannuation : Tern suit tes cotisations de retraite et t'aide à récupérer ta super quand tu quittes l'Australie",
            "Conversion de devises à tarif fixe : pas de frais proportionnels sur les transactions en devises — un tarif fixe par conversion, quel que soit le montant",
            "Sortie facile : quand ton PVT se termine, Tern est conçu pour que la clôture de ton compte et le rapatriement de ton argent soient simples, sans tracas administratifs",
            "Prélancement / liste d'attente : Tern n'est pas encore disponible — rejoins la liste d'attente pour être parmi les premiers à l'utiliser à son lancement",
          ],
        },
        {
          heading: "Comment Tern t'aide",
          paragraphs: [
            "Contrairement aux big-4 qui te traitent comme un client de détail standard, et aux fintechs qui te traitent comme un utilisateur multi-devises, Tern est construit autour du calendrier du PVT : arriver, être payé, gérer le TFN et la super, et repartir sans complications. Si tu veux un compte bancaire qui comprend vraiment ce que tu es venu faire là-bas, rejoins la liste d'attente Tern.",
          ],
        },
      ],
      faq: [
        {
          q: "Quelle banque est la meilleure pour un PVT en Australie ?",
          a: "Cela dépend de tes priorités. Pour l'accès aux agences et un large réseau de distributeurs, CommBank et ANZ sont les options big-4 les plus pratiques. Pour zéro frais sur les transactions en devises étrangères, Wise offre les vrais taux interbancaires avec un compte en AUD. Pour une expérience conçue spécifiquement pour le PVT — salaire dès le premier jour, rappels TFN et suivi de la super — Tern (actuellement en prélancement) a été pensé spécialement pour toi.",
        },
        {
          q: "Puis-je ouvrir un compte bancaire australien avant d'arriver ?",
          a: "En partie. CommBank et ANZ te permettent de commencer la demande en ligne depuis l'étranger, mais tu dois vérifier ton identité en agence une fois sur place — tu ne peux pas recevoir tes coordonnées bancaires avant cette étape. Tern (en prélancement) et certains fintechs comme Wise permettent une ouverture de compte entièrement en ligne, ce qui signifie que tu peux recevoir ton BSB et ton numéro de compte avant de monter dans l'avion.",
        },
        {
          q: "Ai-je besoin d'un TFN pour ouvrir un compte bancaire en Australie ?",
          a: "Non — tu peux ouvrir un compte courant sans TFN. Cependant, si tu perçois des intérêts, la banque est tenue de prélever des impôts au taux marginal maximum en l'absence de TFN. Pour un compte salaire où les intérêts sont minimes, c'est rarement un problème en pratique. Cela dit, tu dois demander ton TFN dès ton arrivée, car ton employeur en a besoin pour la paie — sans lui, il doit prélever des impôts au taux maximum sur ton salaire.",
        },
      ],
    },
    it: {
      title: "La migliore banca per il working holiday in Australia",
      description:
        "Confronto onesto tra banche australiane, carte viaggio e fintech per i titolari di WHV — cosa conta davvero e dove si posiziona Tern.",
      excerpt:
        "Big-4, Wise, Revolut o Tern — qual è davvero la banca migliore per il working holiday in Australia? Ecco cosa confrontare prima di partire.",
      sections: [
        {
          paragraphs: [
            "\"Migliore banca per il working holiday in Australia\" è una delle domande più cercate dai titolari di WHV — e la risposta onesta è che non esiste una banca perfetta per tutti i viaggiatori. La scelta giusta dipende dalle tue priorità: hai bisogno di aprire il conto prima di arrivare? Ti serve il multi-valuta? Resti sei mesi o due anni? Questa guida analizza ciò che conta davvero, valuta in modo equo le principali opzioni e spiega cosa rende Tern diverso.",
          ],
        },
        {
          heading: "Cosa conta davvero per un conto bancario in working holiday",
          paragraphs: [
            "La maggior parte dei confronti tra banche si concentra su tassi d'interesse o funzionalità irrilevanti per i viaggiatori. Per un titolare di WHV, i fattori che fanno la differenza sono:",
          ],
          bullets: [
            "[Aprire prima dell'arrivo](~/guides/bank-account-working-holiday-australia) — puoi ottenere il BSB e il numero di conto prima di atterrare, in modo che il tuo datore di lavoro possa pagarti dal primo giorno?",
            "Nessun canone mensile — o una condizione di esenzione facile da soddisfare, come un solo accredito al mese",
            "Nessuna (o bassa) commissione per prelievi ATM internazionali e transazioni in valuta estera — potresti prelevare regolarmente da sportelli fuori dalla rete della tua banca",
            "BSB e numero di conto immediati — per consegnarli a un datore di lavoro lo stesso giorno dell'arrivo",
            "Facile da chiudere e prelevare i fondi — quando il visto scade devi poter trasferire i tuoi soldi senza ritardi burocratici",
            "Multi-valuta o buoni tassi di cambio — se mandi soldi a casa o viaggi in altri paesi durante il tuo working holiday",
          ],
        },
        {
          heading: "Le quattro grandi banche australiane — valutazione onesta",
          paragraphs: [
            "Commonwealth Bank (CommBank), ANZ, Westpac e NAB sono le quattro banche più grandi d'Australia. Offrono una vasta rete di sportelli ATM, filiali in tutti gli Stati e sono accettate ovunque.",
          ],
          bullets: [
            "Canoni mensili: la maggior parte dei conti correnti delle big-4 applica un canone mensile (di solito AUD 4–6) che viene azzerato se accrediti un importo minimo ogni mese — per un lavoratore in working holiday con stipendio regolare, questa condizione è in genere facile da soddisfare",
            "Verifica dell'identità in filiale: tutte le big-4 richiedono una verifica dell'identità di persona con il passaporto — non puoi completare il processo interamente online come nuovo arrivato dall'estero",
            "Richieste prima dell'arrivo: CommBank e ANZ permettono una domanda online prima dell'arrivo; completi la verifica dell'identità in filiale dopo l'atterraggio",
            "Commissioni ATM esterni: le big-4 addebitano in genere AUD 2–5 per ogni prelievo a uno sportello esterno e il 2–3 % sulle transazioni in valuta estera",
            "Gestione del TFN: tutte le big-4 ti invitano ad aggiungere il tuo Tax File Number nell'home banking; senza di esso, gli interessi vengono ritenuti all'aliquota massima",
          ],
        },
        {
          heading: "Carte viaggio e fintech — Wise e Revolut",
          paragraphs: [
            "Wise e Revolut sono popolari tra i titolari di WHV per il cambio valuta, i bonifici internazionali e le spese in più valute. Sono davvero eccellenti per questi utilizzi. Tuttavia, sono pensati come prodotti fintech multi-valuta, non come conti primari per ricevere lo stipendio in Australia.",
          ],
          bullets: [
            "Wise: offre un conto bancario australiano con BSB e numero di conto — puoi ricevere lo stipendio in AUD direttamente; i tassi di cambio reali interbancari sono un vero vantaggio per inviare denaro a casa; nessun canone mensile",
            "Revolut: conto in AUD disponibile; forti funzionalità multi-valuta e prelievi ATM senza commissioni fino a un limite mensile; i piani premium sbloccano di più",
            "Superannuation: né Wise né Revolut offrono il tracciamento della super né promemoria TFN/super — devi gestirli separatamente",
            "Funzionalità specifiche per l'Australia: nessuna delle due piattaforme ha strumenti integrati per le pratiche WHV specifiche dell'Australia, come promemoria per la richiesta del TFN, selezione del fondo pensionistico o riepiloghi dell'anno fiscale australiano",
            "Entrambe sono ottime scelte per il cambio valuta e le spese; nessuna sostituisce uno strumento bancario dedicato al working holiday per la gestione dello stipendio e degli adempimenti fiscali",
          ],
        },
        {
          heading: "Il ruolo di Tern",
          paragraphs: [
            "Tern è progettato specificamente per i titolari di visto working holiday — non come una banca generica o una carta multi-valuta, ma come un compagno finanziario che comprende il ciclo di vita del WHV. Le differenze principali:",
          ],
          bullets: [
            "Stipendio dal primo giorno: Tern ti fornisce il BSB e il numero di conto prima di arrivare, così il tuo datore di lavoro può pagarti fin dal primo turno",
            "Promemoria TFN: Tern ti ricorda di richiedere il Tax File Number e verifica che il tuo datore di lavoro stia trattenendo all'aliquota corretta",
            "Tracciamento della superannuation: Tern monitora i tuoi contributi previdenziali e ti aiuta a recuperare la super quando lasci l'Australia",
            "Commissione fissa per il cambio valuta: nessuna commissione percentuale sulle transazioni in valuta estera — una tariffa fissa per ogni cambio, indipendentemente dall'importo",
            "Uscita facile: quando il tuo WHV finisce, Tern è progettato per rendere la chiusura del conto e il rimpatrio del denaro semplici, senza intoppi burocratici",
            "Pre-lancio / lista d'attesa: Tern non è ancora attivo — iscriviti alla lista d'attesa per essere tra i primi quando verrà lanciato",
          ],
        },
        {
          heading: "Come ti aiuta Tern",
          paragraphs: [
            "A differenza delle big-4, che ti trattano come un cliente retail standard, e dei fintech, che ti trattano come un utente multi-valuta, Tern è costruito attorno alla timeline del working holiday: arrivare, ricevere lo stipendio, gestire TFN e super, e partire in modo pulito. Se vuoi un conto bancario che capisca davvero cosa sei venuto a fare lì, iscriviti alla lista d'attesa di Tern.",
          ],
        },
      ],
      faq: [
        {
          q: "Qual è la banca migliore per il working holiday in Australia?",
          a: "Dipende dalle tue priorità. Per l'accesso alle filiali e un'ampia rete di sportelli, CommBank e ANZ sono le opzioni big-4 più pratiche. Per zero commissioni sulle transazioni in valuta estera, Wise offre i veri tassi interbancari con un conto in AUD. Per un'esperienza pensata appositamente per il WHV — stipendio dal primo giorno, promemoria TFN e tracciamento della super — Tern (attualmente in pre-lancio) è stato progettato specificamente per te.",
        },
        {
          q: "Posso aprire un conto bancario australiano prima di arrivare?",
          a: "In parte. CommBank e ANZ ti permettono entrambe di iniziare la domanda online dall'estero, ma devi verificare la tua identità in filiale una volta atterrato — non puoi ricevere i dati del conto finché non completi questo passaggio. Tern (in pre-lancio) e alcune fintech come Wise consentono l'apertura del conto completamente digitale, il che significa che puoi ricevere BSB e numero di conto prima di salire sull'aereo.",
        },
        {
          q: "Ho bisogno di un TFN per aprire un conto bancario in Australia?",
          a: "No — puoi aprire un conto corrente senza TFN. Tuttavia, se percepisci interessi, la banca è tenuta a trattenere le imposte all'aliquota marginale massima in assenza del TFN. Per un conto stipendio con interessi minimi, questo è raramente un problema pratico. Detto questo, dovresti richiedere il TFN non appena arrivi, poiché il tuo datore di lavoro ne ha bisogno per la busta paga — senza di esso deve trattenere le imposte all'aliquota massima sul tuo salario.",
        },
      ],
    },
  },
};
