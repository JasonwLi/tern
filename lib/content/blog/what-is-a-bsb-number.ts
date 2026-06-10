import type { Article } from "../types";

export const article: Article = {
  slug: "what-is-a-bsb-number",
  kind: "post",
  date: "2026-06-01",
  author: "Tern",
  emoji: "🔢",
  accent: "bg-grape-300",
  readMinutes: 4,
  related: ["bank-account-working-holiday-australia", "what-is-a-tfn"],
  sources: [
    {
      label: "Australian Payments Network (AusPayNet) — BSB System",
      url: "https://auspaynet.com.au/node/717",
    },
  ],
  i18n: {
    en: {
      title: "What is a BSB number? Australian banking explained",
      description:
        "A BSB number is the 6-digit routing code Australian employers need to pay you. Here's what it means, where to find yours, and mistakes to avoid.",
      excerpt:
        "Before your first Australian paycheque can land, your employer needs a BSB number. Here's what it is, where to find it, and why giving your SWIFT code by mistake delays your pay.",
      sections: [
        {
          paragraphs: [
            "A BSB number (Bank-State-Branch) is a 6-digit code that identifies the specific bank and branch where your Australian account is held. Together with your account number, it routes domestic payments in Australia directly to your account — the same way a sort code works in the UK or a routing number works in the US.",
          ],
        },
        {
          heading: "How a BSB number is structured",
          paragraphs: [
            "The six digits follow the format XX-Y-ZZZ, often written with a hyphen after the third digit (for example, 062-000). The first two digits identify the financial institution. The third digit represents the state the branch is located in. The final three digits pinpoint the specific branch address.",
            "BSB numbers are maintained by Australian Payments Network (AusPayNet), the industry body responsible for Australia's domestic payment system. Every active BSB is registered in the official AusPayNet register.",
          ],
        },
        {
          heading: "BSB + account number = how you get paid",
          paragraphs: [
            "To receive a direct deposit from an Australian employer, you need to give them two things: your BSB number and your account number. Together these tell the payment system exactly which account to credit. Neither number alone is enough.",
            "Your account number is typically 6 to 9 digits and is specific to you. Your BSB is shared by everyone who banks at the same branch of the same institution. Both are required on payroll forms and tax declarations.",
          ],
          bullets: [
            "BSB: 6 digits, identifies your bank and branch",
            "Account number: 6–9 digits, identifies your individual account",
            "Both are required — providing only one will delay or fail the payment",
          ],
        },
        {
          heading: "Where to find your BSB number",
          bullets: [
            "In your bank's mobile app — look for 'Account details' or 'Pay anyone' information",
            "On the welcome email or letter your bank sent when you opened your account",
            "On your bank statement (PDF or paper)",
            "By calling your bank's customer service line or visiting a branch",
            "Using AusPayNet's official BSB lookup at bsb.auspaynet.com.au to verify a BSB before providing it",
          ],
        },
        {
          heading: "Common mistakes working holiday makers make",
          bullets: [
            "Giving a SWIFT/BIC code instead of a BSB: SWIFT codes are for international transfers, not Australian domestic payroll — your employer's system will reject or delay the payment",
            "Transposing digits: a single wrong digit routes your pay to someone else's bank or causes a rejection; always double-check by reading the BSB back digit by digit",
            "Confusing the BSB with the account number: the BSB is always exactly 6 digits; if you are quoting more than 6 digits for the BSB, you have included part of your account number",
            "Using a closed or merged branch BSB: banks occasionally retire old BSBs when branches close; if in doubt, verify your BSB in the AusPayNet lookup before giving it to an employer",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "When you open a Tern account in Australia, your BSB and account number are displayed clearly in the app — formatted exactly as Australian payroll systems expect them. You can share your payment details with an employer in one tap, so your first pay goes to the right account on the right day.",
          ],
        },
      ],
      faq: [
        {
          q: "Is a BSB number the same as a SWIFT code?",
          a: "No. A BSB number is used for domestic payments within Australia. A SWIFT/BIC code is used for international bank transfers. If your employer is paying you a local Australian salary, they need your BSB number and account number — not a SWIFT code.",
        },
        {
          q: "Can I use the same BSB for all my accounts at the same bank?",
          a: "Not necessarily. BSB numbers identify a bank branch, not a bank as a whole. If you have accounts at different branches — or if your bank has changed its branch structure — your BSB may differ between accounts. Always check the specific BSB shown for each account rather than assuming they are the same.",
        },
      ],
    },
    es: {
      title: "¿Qué es un número BSB? La guía para cobrar en Australia",
      description:
        "El BSB es el código de 6 dígitos que tu empleador australiano necesita para pagarte. Qué significa, dónde encontrarlo y errores frecuentes a evitar.",
      excerpt:
        "Antes de recibir tu primer sueldo en Australia, tu empleador necesita un número BSB. Esto es lo que es, dónde encontrarlo y por qué dar tu código SWIFT por error demora el pago.",
      sections: [
        {
          paragraphs: [
            "Un número BSB (Bank-State-Branch) es un código de 6 dígitos que identifica el banco y la sucursal específicos donde está tu cuenta australiana. Junto con tu número de cuenta, dirige los pagos domésticos dentro de Australia directamente a tu cuenta, de la misma manera que un código de clasificación funciona en el Reino Unido o un número de routing en Estados Unidos.",
          ],
        },
        {
          heading: "Cómo está estructurado un número BSB",
          paragraphs: [
            "Los seis dígitos siguen el formato XX-Y-ZZZ, frecuentemente escrito con un guión después del tercer dígito (por ejemplo, 062-000). Los dos primeros dígitos identifican la entidad financiera. El tercer dígito representa el estado donde está ubicada la sucursal. Los últimos tres dígitos identifican la dirección exacta de la sucursal.",
            "Los números BSB son administrados por Australian Payments Network (AusPayNet), el organismo responsable del sistema de pagos domésticos de Australia. Cada BSB activo está registrado en el registro oficial de AusPayNet.",
          ],
        },
        {
          heading: "BSB + número de cuenta = cómo te pagan",
          paragraphs: [
            "Para recibir un depósito directo de un empleador australiano, necesitas darle dos datos: tu número BSB y tu número de cuenta. Juntos, le indican al sistema de pagos exactamente en qué cuenta acreditar el dinero. Ninguno de los dos por separado es suficiente.",
            "Tu número de cuenta suele tener entre 6 y 9 dígitos y es específico de tu persona. Tu BSB es compartido por todos los que tienen cuenta en la misma sucursal de la misma institución. Ambos son obligatorios en los formularios de nómina y las declaraciones impositivas.",
          ],
          bullets: [
            "BSB: 6 dígitos, identifica tu banco y sucursal",
            "Número de cuenta: 6–9 dígitos, identifica tu cuenta personal",
            "Ambos son necesarios — si solo proporcionas uno, el pago se demorará o fallará",
          ],
        },
        {
          heading: "Dónde encontrar tu número BSB",
          bullets: [
            "En la app móvil de tu banco — busca 'Detalles de la cuenta' o información de 'Transferencia a cualquiera'",
            "En el correo electrónico o la carta de bienvenida que te envió el banco al abrir la cuenta",
            "En tu extracto bancario (PDF o en papel)",
            "Llamando a la línea de atención al cliente de tu banco o visitando una sucursal",
            "Usando el verificador oficial de BSB de AusPayNet en bsb.auspaynet.com.au para confirmar un BSB antes de proporcionarlo",
          ],
        },
        {
          heading: "Errores comunes de los trabajadores en visa working holiday",
          bullets: [
            "Dar el código SWIFT/BIC en lugar del BSB: los códigos SWIFT son para transferencias internacionales, no para las nóminas domésticas australianas — el sistema de tu empleador rechazará o retrasará el pago",
            "Transponer dígitos: un solo dígito incorrecto puede enviar tu sueldo a la cuenta de otra persona o generar un rechazo; siempre verifica leyendo el BSB dígito a dígito",
            "Confundir el BSB con el número de cuenta: el BSB siempre tiene exactamente 6 dígitos; si estás citando más de 6 dígitos para el BSB, incluiste parte de tu número de cuenta",
            "Usar un BSB de sucursal cerrada o fusionada: los bancos a veces dan de baja los BSB viejos cuando cierran sucursales; si tienes dudas, verifica tu BSB en el buscador de AusPayNet antes de dárselo a un empleador",
          ],
        },
        {
          heading: "Cómo te ayuda Tern",
          paragraphs: [
            "Cuando abres una cuenta Tern en Australia, tu BSB y número de cuenta se muestran claramente en la app — con el formato exacto que esperan los sistemas de nómina australianos. Puedes compartir tus datos de pago con un empleador con un solo toque, para que tu primer sueldo llegue a la cuenta correcta el día correcto.",
          ],
        },
      ],
      faq: [
        {
          q: "¿El número BSB es lo mismo que un código SWIFT?",
          a: "No. El número BSB se usa para pagos domésticos dentro de Australia. El código SWIFT/BIC se usa para transferencias bancarias internacionales. Si tu empleador te paga un salario local australiano, necesita tu número BSB y número de cuenta, no un código SWIFT.",
        },
        {
          q: "¿Puedo usar el mismo BSB para todas mis cuentas en el mismo banco?",
          a: "No necesariamente. Los números BSB identifican una sucursal bancaria, no un banco en su totalidad. Si tienes cuentas en distintas sucursales, o si tu banco cambió su estructura de sucursales, tu BSB puede ser diferente entre cuentas. Siempre verifica el BSB específico que aparece para cada cuenta en lugar de asumir que son iguales.",
        },
      ],
    },
    ja: {
      title: "BSB番号とは？オーストラリアの給与受取を徹底解説",
      description:
        "BSB番号はオーストラリアの雇用主があなたに給与を支払う前に必要な6桁のコードです。意味・見つけ方・よくあるミスを解説します。",
      excerpt:
        "オーストラリアで初めての給与を受け取る前に、雇用主はBSB番号を必要とします。BSBとは何か、どこで確認するか、SWIFT番号を間違えて渡すとなぜ給与が遅れるかを解説します。",
      sections: [
        {
          paragraphs: [
            "BSB番号（Bank-State-Branch）は、あなたのオーストラリアの口座が開設されている銀行と支店を特定する6桁のコードです。口座番号と組み合わせることで、オーストラリア国内の送金があなたの口座に正確に届きます。イギリスのソートコードやアメリカのルーティング番号と同じ役割を果たします。",
          ],
        },
        {
          heading: "BSB番号の構造",
          paragraphs: [
            "6桁はXX-Y-ZZZのフォーマットに従い、3桁目の後にハイフンが入ることが多いです（例：062-000）。最初の2桁は金融機関を識別します。3桁目は支店が所在する州を示します。残り3桁は具体的な支店の住所を特定します。",
            "BSB番号はAustralian Payments Network（AusPayNet）が管理しています。AusPayNetはオーストラリアの国内決済システムを担う業界団体です。すべての有効なBSBは公式のAusPayNetレジストリに登録されています。",
          ],
        },
        {
          heading: "BSB番号 + 口座番号 = 給与の受け取り方",
          paragraphs: [
            "オーストラリアの雇用主から直接振込を受け取るには、BSB番号と口座番号の2つを提供する必要があります。この2つの組み合わせにより、決済システムはどの口座に振り込むかを正確に判断します。どちらか一方だけでは不十分です。",
            "口座番号は通常6〜9桁で、あなた個人に固有のものです。BSBは同じ機関の同じ支店に口座を持つすべての人が共有します。給与フォームや税務申告書では両方が必要です。",
          ],
          bullets: [
            "BSB：6桁、銀行と支店を識別",
            "口座番号：6〜9桁、あなたの個別口座を識別",
            "両方が必要 — 一方だけでは支払いが遅延または失敗する",
          ],
        },
        {
          heading: "BSB番号の確認方法",
          bullets: [
            "銀行のモバイルアプリ — 「口座情報」や「他行への送金」情報から確認",
            "口座開設時に銀行から届いたウェルカムメールまたはレター",
            "銀行の取引明細書（PDFまたは紙）",
            "銀行のカスタマーサービスに電話するか、支店に直接行く",
            "AusPayNetの公式BSB検索ツール（bsb.auspaynet.com.au）で提供前に確認",
          ],
        },
        {
          heading: "ワーホリメーカーがよくやるミス",
          bullets: [
            "BSBの代わりにSWIFT/BICコードを渡す：SWIFTコードは国際送金用であり、オーストラリア国内の給与支払いには使えません。雇用主のシステムで支払いが拒否または遅延します",
            "桁の順番を間違える：1桁でも間違えると給与が他人の口座に届くか拒否されます。必ず1桁ずつ読み上げて確認しましょう",
            "BSBと口座番号を混同する：BSBは常にちょうど6桁です。6桁を超えてBSBを伝えている場合は、口座番号の一部も含まれています",
            "閉店または統合された支店のBSBを使う：銀行は支店閉鎖時に古いBSBを廃止することがあります。不安な場合は雇用主に渡す前にAusPayNetで確認してください",
          ],
        },
        {
          heading: "Ternが役立つ理由",
          paragraphs: [
            "オーストラリアでTernの口座を開設すると、BSBと口座番号がアプリ内に明確に表示されます。オーストラリアの給与システムが期待する形式そのままです。1タップで雇用主に支払い情報を共有できるので、最初の給与は正しい口座に正しい日に届きます。",
          ],
        },
      ],
      faq: [
        {
          q: "BSB番号はSWIFTコードと同じですか？",
          a: "いいえ。BSB番号はオーストラリア国内の送金に使用します。SWIFT/BICコードは国際銀行送金に使用します。オーストラリアの国内給与を受け取る場合は、SWIFTコードではなくBSB番号と口座番号が必要です。",
        },
        {
          q: "同じ銀行の複数の口座で同じBSBを使えますか？",
          a: "必ずしもそうとは限りません。BSB番号は銀行全体ではなく、銀行の特定支店を識別します。異なる支店に口座がある場合や銀行が支店構造を変更した場合、口座ごとにBSBが異なる可能性があります。同じだと決め込まず、各口座に表示されている具体的なBSBを必ず確認してください。",
        },
      ],
    },
    ko: {
      title: "BSB 번호란? 호주 급여 수령 완벽 가이드",
      description:
        "BSB 번호는 호주 고용주가 급여를 지급하기 전에 반드시 필요한 6자리 코드입니다. 의미, 확인 방법, 흔한 실수까지 정리했습니다.",
      excerpt:
        "호주에서 첫 급여를 받기 전에 고용주는 BSB 번호가 필요합니다. BSB가 무엇인지, 어디서 확인하는지, SWIFT 코드를 잘못 알려주면 왜 급여가 지연되는지 알아보세요.",
      sections: [
        {
          paragraphs: [
            "BSB 번호(Bank-State-Branch)는 호주 계좌가 개설된 특정 은행과 지점을 식별하는 6자리 코드입니다. 계좌 번호와 함께 제공하면 호주 국내 결제가 정확히 해당 계좌로 전달됩니다. 영국의 소트 코드나 미국의 라우팅 번호와 같은 역할을 합니다.",
          ],
        },
        {
          heading: "BSB 번호의 구조",
          paragraphs: [
            "6자리는 XX-Y-ZZZ 형식으로 구성되며, 세 번째 자리 뒤에 하이픈이 표기되는 경우가 많습니다(예: 062-000). 앞 두 자리는 금융 기관을 식별합니다. 세 번째 자리는 지점이 위치한 주(州)를 나타냅니다. 마지막 세 자리는 특정 지점 주소를 특정합니다.",
            "BSB 번호는 호주 국내 결제 시스템을 담당하는 산업 단체인 Australian Payments Network(AusPayNet)가 관리합니다. 모든 유효한 BSB는 AusPayNet 공식 등록부에 등록되어 있습니다.",
          ],
        },
        {
          heading: "BSB + 계좌 번호 = 급여 수령 방법",
          paragraphs: [
            "호주 고용주로부터 직접 입금을 받으려면 두 가지를 제공해야 합니다: BSB 번호와 계좌 번호입니다. 이 두 가지가 결합되어야 결제 시스템이 정확히 어떤 계좌에 입금할지 알 수 있습니다. 하나만으로는 충분하지 않습니다.",
            "계좌 번호는 보통 6~9자리이며 개인에게 고유합니다. BSB는 같은 기관의 같은 지점에 계좌를 가진 모든 사람이 공유합니다. 급여 양식과 세금 신고서 모두에 두 가지가 필요합니다.",
          ],
          bullets: [
            "BSB: 6자리, 은행 및 지점 식별",
            "계좌 번호: 6~9자리, 개인 계좌 식별",
            "둘 다 필요 — 하나만 제공하면 결제가 지연되거나 실패할 수 있습니다",
          ],
        },
        {
          heading: "BSB 번호 확인 방법",
          bullets: [
            "은행 모바일 앱 — '계좌 정보' 또는 '타행 이체' 정보에서 확인",
            "계좌 개설 시 은행에서 보낸 환영 이메일 또는 편지",
            "은행 거래 명세서(PDF 또는 종이)",
            "은행 고객 서비스 전화 또는 지점 방문",
            "AusPayNet의 공식 BSB 조회 도구(bsb.auspaynet.com.au)에서 제공 전 확인",
          ],
        },
        {
          heading: "워킹홀리데이 참가자들이 흔히 하는 실수",
          bullets: [
            "BSB 대신 SWIFT/BIC 코드 제공: SWIFT 코드는 국제 송금용으로, 호주 국내 급여 지급에는 사용할 수 없습니다. 고용주 시스템에서 결제가 거부되거나 지연됩니다",
            "자릿수 바꾸기: 한 자리만 틀려도 급여가 다른 사람 계좌로 가거나 거부될 수 있습니다. 반드시 한 자리씩 읽어 확인하세요",
            "BSB와 계좌 번호 혼동: BSB는 항상 정확히 6자리입니다. BSB로 6자리 이상을 입력하고 있다면 계좌 번호 일부가 포함된 것입니다",
            "폐쇄 또는 합병된 지점의 BSB 사용: 은행은 지점이 폐쇄될 때 기존 BSB를 폐기하는 경우가 있습니다. 확실하지 않다면 고용주에게 제공하기 전에 AusPayNet에서 확인하세요",
          ],
        },
        {
          heading: "Tern이 어떻게 도움이 되나요",
          paragraphs: [
            "호주에서 Tern 계좌를 개설하면 앱에서 BSB와 계좌 번호를 명확하게 확인할 수 있습니다. 호주 급여 시스템이 기대하는 정확한 형식으로 표시됩니다. 탭 한 번으로 고용주와 결제 정보를 공유할 수 있어, 첫 급여가 올바른 날 올바른 계좌로 입금됩니다.",
          ],
        },
      ],
      faq: [
        {
          q: "BSB 번호는 SWIFT 코드와 같은 건가요?",
          a: "아닙니다. BSB 번호는 호주 국내 결제에 사용됩니다. SWIFT/BIC 코드는 국제 은행 송금에 사용됩니다. 고용주가 현지 호주 급여를 지급하는 경우 SWIFT 코드가 아닌 BSB 번호와 계좌 번호가 필요합니다.",
        },
        {
          q: "같은 은행의 여러 계좌에 동일한 BSB를 사용할 수 있나요?",
          a: "반드시 그런 것은 아닙니다. BSB 번호는 은행 전체가 아닌 특정 지점을 식별합니다. 다른 지점에 계좌가 있거나 은행이 지점 구조를 변경한 경우 계좌마다 BSB가 다를 수 있습니다. 같다고 가정하지 말고 항상 각 계좌에 표시된 BSB를 확인하세요.",
        },
      ],
    },
    "zh-TW": {
      title: "什麼是BSB號碼？澳洲銀行轉帳完全指南",
      description:
        "BSB號碼是澳洲雇主在支付薪資前必須知道的6位數代碼。本文說明其意義、如何查詢，以及常見錯誤一次整理。",
      excerpt:
        "在澳洲領到第一份薪資前，雇主需要你的BSB號碼。它是什麼、去哪裡查、為什麼不小心提供SWIFT代碼會導致薪資延誤——一次說清楚。",
      sections: [
        {
          paragraphs: [
            "BSB號碼（Bank-State-Branch，銀行-州-分行）是一組6位數代碼，用來識別你澳洲帳戶所在的特定銀行及分行。BSB號碼與帳號搭配使用，能讓澳洲國內款項精準匯入你的帳戶——原理就像英國的sort code或美國的routing number一樣。",
          ],
        },
        {
          heading: "BSB號碼的結構",
          paragraphs: [
            "6位數字遵循XX-Y-ZZZ的格式，通常在第三位後加連字號（例如062-000）。前兩位數字識別金融機構，第三位代表分行所在州別，最後三位指定具體的分行地址。",
            "BSB號碼由Australian Payments Network（AusPayNet）負責管理，該機構是澳洲國內支付系統的主管機關。每一個有效的BSB均已登錄於AusPayNet的官方登記冊中。",
          ],
        },
        {
          heading: "BSB + 帳號 = 收到薪資的方式",
          paragraphs: [
            "要接收澳洲雇主的直接存款，你需要提供兩樣資訊：BSB號碼和帳號。兩者組合在一起，才能讓支付系統精確識別要存入哪個帳戶。單獨提供其中一項是不夠的。",
            "帳號通常為6至9位數字，是你個人專屬的。BSB則由同一機構同一分行的所有開戶者共用。薪資表格和稅務申報都需要提供這兩項資訊。",
          ],
          bullets: [
            "BSB：6位數字，識別你的銀行及分行",
            "帳號：6至9位數字，識別你的個人帳戶",
            "兩者缺一不可——只提供其中一項將導致付款延誤或失敗",
          ],
        },
        {
          heading: "如何查詢你的BSB號碼",
          bullets: [
            "在銀行的手機App中——尋找「帳戶詳情」或「轉帳他行」相關資訊",
            "開戶時銀行寄送的歡迎電郵或信件",
            "銀行對帳單（PDF或紙本）",
            "致電銀行客服或親臨分行查詢",
            "在提供BSB前，可使用AusPayNet的官方BSB查詢工具（bsb.auspaynet.com.au）進行核實",
          ],
        },
        {
          heading: "打工度假者常犯的錯誤",
          bullets: [
            "將SWIFT/BIC代碼誤當BSB提供：SWIFT代碼用於國際匯款，不適用於澳洲國內薪資支付——雇主系統會拒絕或延誤付款",
            "數字順序錯誤：哪怕只寫錯一位，薪資可能匯入他人帳戶或遭到退款；務必逐位核對BSB號碼",
            "混淆BSB與帳號：BSB一定恰好是6位數字；如果你報出的BSB超過6位，代表你把帳號的一部分也包含進去了",
            "使用已關閉或已合併分行的BSB：銀行在分行關閉時有時會停用舊BSB；若有疑慮，請在提供給雇主前先在AusPayNet查詢確認",
          ],
        },
        {
          heading: "Tern 如何協助你",
          paragraphs: [
            "當你在澳洲開立Tern帳戶，你的BSB與帳號會在App中清楚顯示——格式完全符合澳洲薪資系統的要求。你只需點一下即可將付款資訊分享給雇主，確保第一份薪資準時存入正確帳戶。",
          ],
        },
      ],
      faq: [
        {
          q: "BSB號碼和SWIFT代碼是一樣的嗎？",
          a: "不一樣。BSB號碼用於澳洲國內轉帳，SWIFT/BIC代碼用於國際銀行匯款。如果你的雇主是在澳洲本地支付薪資，他們需要的是你的BSB號碼和帳號，而非SWIFT代碼。",
        },
        {
          q: "同一家銀行的多個帳戶可以使用同一個BSB嗎？",
          a: "不一定。BSB號碼識別的是特定分行，而非整家銀行。如果你在不同分行開有帳戶，或銀行調整了分行架構，不同帳戶的BSB可能不同。不要想當然，請務必逐一確認每個帳戶所顯示的BSB號碼。",
        },
      ],
    },
  },
};
