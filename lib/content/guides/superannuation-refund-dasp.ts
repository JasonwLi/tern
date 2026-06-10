import type { Article } from "../types";

export const article: Article = {
  slug: "superannuation-refund-dasp",
  kind: "guide",
  date: "2026-05-20",
  emoji: "💰",
  accent: "bg-sky-300",
  readMinutes: 6,
  related: ["what-is-superannuation", "working-holiday-tax-refund-australia"],
  sources: [
    {
      label: "Australian Taxation Office (ATO) — Departing Australia Superannuation Payment (DASP)",
      url: "https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/temporary-residents-and-superannuation/departing-australia-superannuation-payment-dasp",
    },
    {
      label: "Australian Taxation Office (ATO) — Working holiday makers",
      url: "https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/coming-to-australia/working-holiday-makers",
    },
  ],
  i18n: {
    en: {
      title: "How to claim your superannuation when leaving Australia",
      description:
        "Working holiday makers can claim Australian superannuation back via the DASP. How it works, the tax rate, and how to avoid leaving thousands behind.",
      excerpt:
        "Your employer paid super on top of your wages — and you can claim it back when you leave. Billions sit unclaimed. Here's how to get yours via the DASP.",
      sections: [
        {
          paragraphs: [
            "[Superannuation (\"super\")](~/blog/what-is-superannuation) is retirement money your employer pays on top of your wages — currently 12% of your earnings. As a temporary visa holder you can claim it back when you leave Australia for good, through the Departing Australia Superannuation Payment (DASP). Billions of dollars in super sit unclaimed, much of it belonging to backpackers who didn't know to ask.",
          ],
        },
        {
          heading: "How much super is yours",
          paragraphs: [
            "If you earned wages in Australia, your employer should have paid super into a fund for you. Across a year of farm and hospitality work that can easily be a few thousand dollars. The catch: every time you change jobs without nominating a fund, a new account is created — so your super ends up scattered, each account charging its own fees.",
          ],
        },
        {
          heading: "Claiming your DASP step by step",
          bullets: [
            "Make sure your visa is expired or cancelled and you've left Australia (DASP is paid after you depart)",
            "Find all your super accounts — the ATO's online services can help you locate lost super",
            "Submit a DASP application online with each fund (or via the ATO)",
            "Provide your TFN, passport and visa details for identity verification",
          ],
        },
        {
          heading: "How DASP is taxed",
          paragraphs: [
            "DASP for working holiday makers (subclass 417/462) is taxed at 65%. It sounds steep, but 35% of your super back is far better than 0% — which is what you get if you never claim. On a few thousand dollars, that's still real money toward your next trip.",
          ],
        },
        {
          heading: "Don't lose track of your super",
          paragraphs: [
            "The biggest reason backpackers never claim is simple: old fund logins, forgotten emails, and multiple scattered accounts. Consolidating and tracking your super while you're still in Australia makes the DASP claim painless once you leave.",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Tern tracks the super each employer pays, warns you before a needless new fund is opened, and walks you through the DASP claim step by step from overseas — so you don't leave your retirement money behind in Australia.",
          ],
        },
      ],
      faq: [
        {
          q: "Can working holiday makers claim superannuation back?",
          a: "Yes. As a temporary resident you can claim your super via the Departing Australia Superannuation Payment (DASP) once you've left Australia and your visa has ceased.",
        },
        {
          q: "How much tax is taken from a DASP refund?",
          a: "For working holiday visa holders (subclass 417/462), DASP is taxed at 65%. You receive the remaining 35% — which is still far better than never claiming.",
        },
        {
          q: "When can I claim my super?",
          a: "After you've left Australia and your visa has expired or been cancelled. You apply to each super fund (or via the ATO) with your passport, visa and TFN details.",
        },
      ],
    },
    es: {
      title: "Cómo reclamar tu superannuation al salir de Australia (DASP)",
      description:
        "Recupera tu superannuation de Australia mediante el DASP al salir. Cómo funciona, cuánto retienen y cómo no dejar miles detrás.",
      excerpt:
        "Tu empleador depositó super además de tu sueldo — y puedes recuperarlo al irte. Miles de millones siguen sin reclamarse. Así consigues el tuyo con el DASP.",
      sections: [
        {
          paragraphs: [
            "[El superannuation (\"super\")](~/blog/what-is-superannuation) es dinero para el retiro que tu empleador paga además de tu sueldo — actualmente el 12% de tus ganancias. Como titular de una visa temporal, puedes reclamarlo cuando dejes Australia definitivamente a través del Departing Australia Superannuation Payment (DASP). Miles de millones de dólares en super siguen sin reclamarse, gran parte de ellos de backpackers que no sabían que podían pedirlo.",
          ],
        },
        {
          heading: "Cuánto super te corresponde",
          paragraphs: [
            "Si tuviste un trabajo en Australia, tu empleador debería haber depositado super en un fondo a tu nombre. Entre trabajo en el campo y la gastronomía, fácilmente pueden ser varios miles de dólares en un año. El problema: cada vez que cambias de trabajo sin elegir un fondo, se abre una cuenta nueva — así tu super queda disperso y cada cuenta cobra sus propias comisiones.",
          ],
        },
        {
          heading: "Cómo reclamar tu DASP paso a paso",
          bullets: [
            "Asegúrate de que tu visa esté vencida o cancelada y de haber salido de Australia (el DASP se paga después de que te vayas)",
            "Busca todas tus cuentas de super — los servicios online del ATO te ayudan a encontrar el super perdido",
            "Envía una solicitud de DASP online a cada fondo (o a través del ATO)",
            "Proporciona tu TFN, pasaporte y datos de visa para verificar tu identidad",
          ],
        },
        {
          heading: "Cómo se tributa el DASP",
          paragraphs: [
            "El DASP para titulares de visa de vacaciones y trabajo (subclass 417/462) se grava con un 65%. Suena alto, pero recibir el 35% de tu super es mucho mejor que el 0% — que es lo que obtienes si nunca lo reclamas. Sobre varios miles de dólares, sigue siendo plata real para tu próximo viaje.",
          ],
        },
        {
          heading: "No pierdas el rastro de tu super",
          paragraphs: [
            "El principal motivo por el que los backpackers nunca reclaman es simple: accesos olvidados a fondos viejos, correos perdidos y múltiples cuentas dispersas. Consolidar y hacer seguimiento de tu super mientras todavía estás en Australia hace que el trámite del DASP sea muy sencillo cuando te vayas.",
          ],
        },
        {
          heading: "Cómo te ayuda Tern",
          paragraphs: [
            "Tern registra el super que paga cada empleador, te avisa antes de que se abra innecesariamente un nuevo fondo y te guía paso a paso en el trámite del DASP desde el exterior — para que no dejes tu dinero de retiro olvidado en Australia.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Pueden los titulares de visa de vacaciones y trabajo reclamar el superannuation?",
          a: "Sí. Como residente temporal, puedes reclamar tu super a través del Departing Australia Superannuation Payment (DASP) una vez que hayas salido de Australia y tu visa haya caducado.",
        },
        {
          q: "¿Cuánto impuesto descuentan de la devolución del DASP?",
          a: "Para los titulares de visa de vacaciones y trabajo (subclass 417/462), el DASP se grava con un 65%. Recibes el 35% restante — que sigue siendo mucho mejor que no reclamar nada.",
        },
        {
          q: "¿Cuándo puedo reclamar mi super?",
          a: "Después de haber salido de Australia y de que tu visa haya vencido o sido cancelada. Presentas la solicitud a cada fondo de super (o a través del ATO) con tu pasaporte, visa y TFN.",
        },
      ],
    },
    ja: {
      title: "オーストラリア出国時のスーパー還付（DASP）",
      description:
        "ワーホリビザでオーストラリアで働いた方は、出国時にDASPを通じてスーパーアニュエーションを取り戻せます。仕組み、税率、受け取り忘れを防ぐ方法を解説します。",
      excerpt:
        "雇用主は給与に加えてスーパーアニュエーションを積み立てています — 出国時に返還請求できます。何十億ドルもが未請求のまま。DASPであなたの分を取り戻しましょう。",
      sections: [
        {
          paragraphs: [
            "[スーパーアニュエーション（「スーパー」）](~/blog/what-is-superannuation)とは、雇用主が給与に上乗せして支払う退職積立金で、現在の割合は給与の12%です。一時ビザ保有者は、Departing Australia Superannuation Payment（DASP）を通じて、永久出国時にこの積立金を取り戻すことができます。何十億ドルものスーパーが未請求のままになっており、その多くは請求方法を知らなかったワーホリの方々のものです。",
          ],
        },
        {
          heading: "あなたのスーパー残高はいくら？",
          paragraphs: [
            "オーストラリアで給与収入があった場合、雇用主はあなたのためにスーパーファンドへ積み立てを行っているはずです。農場やホスピタリティの仕事を1年続ければ、数千ドルになることも珍しくありません。注意点は、ファンドを指定せずに転職するたびに新しいアカウントが作られてしまうことです — そのためスーパーが複数のファンドに分散し、それぞれが手数料を徴収します。",
          ],
        },
        {
          heading: "DASPの請求手順",
          bullets: [
            "ビザが失効または取り消され、オーストラリアを出国済みであることを確認する（DASPは出国後に支払われます）",
            "すべてのスーパーアカウントを探す — ATOのオンラインサービスで失われたスーパーを照会できます",
            "各ファンド（またはATO）に対してオンラインでDASP申請を提出する",
            "本人確認のためにTFN、パスポート、ビザの情報を提供する",
          ],
        },
        {
          heading: "DASPにかかる税金",
          paragraphs: [
            "ワーホリビザ（subclass 417/462）保有者のDASPには65%の税率が適用されます。高く感じるかもしれませんが、35%を受け取れることは、一切請求しない場合の0%よりはるかに良いことです。数千ドルの積立金なら、次の旅に向けたまとまったお金になります。",
          ],
        },
        {
          heading: "スーパーの管理を怠らない",
          paragraphs: [
            "ワーホリの方がスーパーを請求しない最大の理由はシンプルです：古いファンドのログイン情報の紛失、メールアドレスの失念、複数のアカウントへの分散です。オーストラリア滞在中にスーパーを統合して管理しておけば、出国後のDASP請求がスムーズになります。",
          ],
        },
        {
          heading: "Ternのサポート内容",
          paragraphs: [
            "Ternは各雇用主が支払ったスーパーを追跡し、不要な新規ファンド開設を事前に警告します。また、海外からでもDASP請求を一歩一歩サポートするので、退職積立金をオーストラリアに置き去りにすることがありません。",
          ],
        },
      ],
      faq: [
        {
          q: "ワーホリビザ保有者はスーパーアニュエーションを取り戻せますか？",
          a: "はい。一時滞在者として、オーストラリアを出国しビザが終了した後に、Departing Australia Superannuation Payment（DASP）を通じてスーパーを請求できます。",
        },
        {
          q: "DASPの払い戻しにかかる税金はどのくらいですか？",
          a: "ワーホリビザ（subclass 417/462）保有者の場合、DASPには65%の税率が適用されます。残りの35%を受け取れますが、これは一切請求しないよりはるかに良い選択です。",
        },
        {
          q: "スーパーはいつ請求できますか？",
          a: "オーストラリアを出国し、ビザが失効または取り消された後です。パスポート、ビザ、TFNの情報を用意して、各スーパーファンド（またはATO）に申請します。",
        },
      ],
    },
    ko: {
      title: "호주 출국 시 슈퍼애뉴에이션 환급받는 방법 (DASP)",
      description:
        "호주 워홀 후 DASP로 슈퍼애뉴에이션 환급받기 — 신청 방법, 세율, 수천 달러 놓치지 않는 법.",
      excerpt:
        "고용주는 임금 외에 슈퍼를 추가로 납부해 왔어요 — 출국할 때 되찾을 수 있습니다. 수십억 달러가 청구되지 않은 채 쌓여 있어요. DASP로 내 돈을 찾아가세요.",
      sections: [
        {
          paragraphs: [
            "[슈퍼애뉴에이션(\"슈퍼\")](~/blog/what-is-superannuation)은 고용주가 임금 외에 추가로 납부하는 퇴직 적립금으로, 현재 수입의 12%입니다. 임시 비자 소지자는 호주를 완전히 떠날 때 Departing Australia Superannuation Payment(DASP)를 통해 이를 돌려받을 수 있습니다. 수십억 달러의 슈퍼가 청구되지 않은 채 남아 있으며, 상당 부분이 신청 방법을 몰랐던 워홀러들의 것입니다.",
          ],
        },
        {
          heading: "내 슈퍼는 얼마나 될까",
          paragraphs: [
            "호주에서 임금 소득이 있었다면, 고용주는 당신을 위해 슈퍼 펀드에 적립했을 것입니다. 농장이나 호스피탤리티 업종에서 1년을 일하면 수천 달러가 쌓이기도 합니다. 문제는, 펀드를 지정하지 않고 직장을 옮길 때마다 새 계좌가 만들어진다는 것입니다 — 결국 슈퍼가 여러 계좌에 분산되고 각 계좌마다 수수료가 발생합니다.",
          ],
        },
        {
          heading: "DASP 단계별 신청 방법",
          bullets: [
            "비자가 만료되거나 취소되고 호주를 출국한 상태인지 확인하세요 (DASP는 출국 후에 지급됩니다)",
            "모든 슈퍼 계좌를 찾아보세요 — ATO 온라인 서비스를 통해 잃어버린 슈퍼를 조회할 수 있습니다",
            "각 펀드(또는 ATO)에 온라인으로 DASP 신청서를 제출하세요",
            "본인 확인을 위해 TFN, 여권, 비자 정보를 제공하세요",
          ],
        },
        {
          heading: "DASP에 부과되는 세금",
          paragraphs: [
            "워홀 비자(subclass 417/462) 소지자의 DASP에는 65%의 세율이 적용됩니다. 높게 느껴질 수 있지만, 슈퍼의 35%를 돌려받는 것이 한 푼도 신청하지 않아 0%를 받는 것보다 훨씬 낫습니다. 수천 달러라면 다음 여행에 쓸 진짜 돈이 됩니다.",
          ],
        },
        {
          heading: "슈퍼 관리를 소홀히 하지 마세요",
          paragraphs: [
            "워홀러가 슈퍼를 청구하지 않는 가장 큰 이유는 간단합니다: 예전 펀드 로그인 정보 분실, 이메일 주소 망각, 그리고 여러 계좌에 분산된 슈퍼. 호주에 있는 동안 슈퍼를 통합하고 관리해 두면 출국 후 DASP 신청이 훨씬 수월해집니다.",
          ],
        },
        {
          heading: "Tern이 도와드릴 수 있어요",
          paragraphs: [
            "Tern은 각 고용주가 납부한 슈퍼를 추적하고, 불필요한 새 펀드 개설 전에 미리 알려드립니다. 또한 해외에서도 DASP 신청을 단계별로 안내하여 퇴직 적립금을 호주에 남기고 오는 일이 없도록 합니다.",
          ],
        },
      ],
      faq: [
        {
          q: "워홀 비자 소지자도 슈퍼애뉴에이션을 돌려받을 수 있나요?",
          a: "네. 임시 거주자로서 호주를 출국하고 비자가 종료된 후, Departing Australia Superannuation Payment(DASP)를 통해 슈퍼를 청구할 수 있습니다.",
        },
        {
          q: "DASP 환급금에서 세금이 얼마나 공제되나요?",
          a: "워홀 비자(subclass 417/462) 소지자의 경우 DASP에는 65%의 세율이 적용됩니다. 나머지 35%를 받게 되는데, 이는 아예 신청하지 않는 것보다 훨씬 유리합니다.",
        },
        {
          q: "슈퍼는 언제 신청할 수 있나요?",
          a: "호주를 출국하고 비자가 만료되거나 취소된 후에 신청할 수 있습니다. 여권, 비자, TFN 정보를 준비해 각 슈퍼 펀드(또는 ATO)에 신청하면 됩니다.",
        },
      ],
    },
    "zh-TW": {
      title: "離開澳洲時如何申請退還退休金（DASP）",
      description:
        "持打工度假簽證在澳洲工作過的人，離境後可透過DASP申請退還退休金。本文說明申請流程、稅率，以及如何避免將大筆金錢遺留在澳洲。",
      excerpt:
        "雇主在薪資之外替你提撥了退休金 — 離境時你可以申請領回。數十億澳幣至今無人認領。透過DASP把屬於你的錢拿回來。",
      sections: [
        {
          paragraphs: [
            "[退休金（\"super\"）](~/blog/what-is-superannuation)是雇主在薪資以外額外提撥的退休儲蓄，目前費率為薪資的12%。持臨時簽證者在永久離開澳洲時，可透過「離境澳洲退休金給付」（Departing Australia Superannuation Payment，DASP）申請取回這筆金額。目前有數十億澳幣的退休金尚未被領回，其中大部分屬於不知道可以申請的打工度假者。",
          ],
        },
        {
          heading: "你的退休金有多少",
          paragraphs: [
            "如果你在澳洲有薪資收入，雇主應已替你在退休金基金帳戶中提撥款項。從事農場或餐飲服務業一年，累積下來往往可達數千澳幣。問題在於：每次換工作而沒有指定基金時，就會自動開立一個新帳戶——導致你的退休金分散在多個帳戶，且每個帳戶都要收取管理費。",
          ],
        },
        {
          heading: "逐步申請DASP",
          bullets: [
            "確認你的簽證已到期或被取消，並已離開澳洲（DASP在你出境後才會支付）",
            "找出所有退休金帳戶——ATO的線上服務可協助你查詢遺失的退休金",
            "向每個基金（或透過ATO）在線上提交DASP申請",
            "提供TFN、護照及簽證資料以進行身份驗證",
          ],
        },
        {
          heading: "DASP的稅率",
          paragraphs: [
            "打工度假簽證（subclass 417/462）持有人的DASP適用65%的稅率。聽起來很高，但拿回35%的退休金，遠比完全不申請的0%好得多。幾千澳幣換算下來，仍是你下一趟旅程的一筆實在資金。",
          ],
        },
        {
          heading: "別讓退休金從你眼前溜走",
          paragraphs: [
            "打工度假者從未申請退休金的最大原因其實很簡單：忘記舊基金的登入資訊、遺忘的電子信箱，以及分散在多處的帳戶。趁還在澳洲時整合並追蹤退休金，等到離境後申請DASP就能省去不少麻煩。",
          ],
        },
        {
          heading: "Tern如何協助你",
          paragraphs: [
            "Tern會追蹤每位雇主的退休金提撥狀況，在不必要地開立新基金帳戶前提前警示你，並在你回國後一步步引導你完成DASP申請——讓你不必把退休金遺留在澳洲。",
          ],
        },
      ],
      faq: [
        {
          q: "打工度假者可以申請退還退休金嗎？",
          a: "可以。作為臨時居民，你在離開澳洲且簽證失效後，可透過離境澳洲退休金給付（DASP）申請領回退休金。",
        },
        {
          q: "DASP退款會被扣多少稅？",
          a: "持打工度假簽證（subclass 417/462）的人，DASP適用65%的稅率。你可領回剩餘的35%——仍遠優於完全不申請。",
        },
        {
          q: "什麼時候可以申請退休金？",
          a: "在你離開澳洲且簽證到期或被取消之後。備妥護照、簽證及TFN資料，向各退休金基金（或透過ATO）提出申請即可。",
        },
      ],
    },
    de: {
      title: "Superannuation zurückholen beim Verlassen Australiens (DASP)",
      description:
        "Work and Travel Australien: Mit dem DASP kannst du deine Superannuation zurückfordern. Wie es funktioniert, welche Steuer anfällt und wie du nichts liegen lässt.",
      excerpt:
        "Dein Arbeitgeber hat Super obenauf auf deinen Lohn eingezahlt — und du kannst es dir bei der Ausreise zurückholen. Milliarden Dollar liegen unberührt. So holst du dir deinen Anteil per DASP.",
      sections: [
        {
          paragraphs: [
            "[Superannuation (\"Super\")](~/blog/what-is-superannuation) ist Altersvorsorge, die dein Arbeitgeber zusätzlich zu deinem Lohn einzahlt — aktuell 12 % deines Verdienstes. Als Inhaber eines befristeten Visums kannst du das Geld beim endgültigen Verlassen Australiens über den Departing Australia Superannuation Payment (DASP) zurückfordern. Milliarden von Dollar an Super liegen noch unangetastet — ein Großteil gehört Work-and-Travel-Reisenden, die nicht wussten, dass sie einen Anspruch haben.",
          ],
        },
        {
          heading: "Wie viel Super steht dir zu",
          paragraphs: [
            "Wenn du in Australien Lohn verdient hast, sollte dein Arbeitgeber Super in einen Fonds für dich eingezahlt haben. Ein Jahr auf Farmen und in der Gastronomie kann schnell ein paar tausend Dollar ergeben. Der Haken: Jedes Mal, wenn du den Job wechselst, ohne einen Fonds anzugeben, wird ein neues Konto eröffnet — dein Super verteilt sich auf viele Konten, von denen jedes eigene Gebühren erhebt.",
          ],
        },
        {
          heading: "DASP Schritt für Schritt beantragen",
          bullets: [
            "Sicherstellen, dass dein Visum abgelaufen oder storniert ist und du Australien verlassen hast (DASP wird nach der Ausreise ausgezahlt)",
            "Alle Super-Konten aufspüren — der ATO-Onlinedienst hilft dir, verlorene Super-Guthaben zu finden",
            "Bei jedem Fonds (oder über den ATO) online einen DASP-Antrag stellen",
            "TFN, Reisepass und Visumsdaten zur Identitätsprüfung angeben",
          ],
        },
        {
          heading: "Wie der DASP versteuert wird",
          paragraphs: [
            "Der DASP für Work-and-Travel-Visuminhaber (subclass 417/462) wird mit 65 % besteuert. Das klingt viel, aber 35 % zurückzubekommen ist deutlich besser als 0 % — was du bekommst, wenn du nie einen Antrag stellst. Bei ein paar tausend Dollar ist das trotzdem echtes Geld für deine nächste Reise.",
          ],
        },
        {
          heading: "Behalte deinen Super im Blick",
          paragraphs: [
            "Der häufigste Grund, warum Work-and-Travel-Reisende ihren Super nie zurückfordern, ist simpel: vergessene Zugangsdaten alter Fonds, veraltete E-Mail-Adressen und mehrere verstreute Konten. Wenn du dein Super noch während deines Aufenthalts in Australien zusammenführst und im Blick behältst, läuft der DASP-Antrag nach der Ausreise reibungslos.",
          ],
        },
        {
          heading: "Wie Tern dir hilft",
          paragraphs: [
            "Tern verfolgt, wie viel Super jeder Arbeitgeber einzahlt, warnt dich rechtzeitig, bevor unnötig ein neuer Fonds eröffnet wird, und begleitet dich Schritt für Schritt durch den DASP-Antrag — auch aus dem Ausland. So lässt du deine Altersvorsorge nicht in Australien zurück.",
          ],
        },
      ],
      faq: [
        {
          q: "Können Work-and-Travel-Reisende ihre Superannuation zurückfordern?",
          a: "Ja. Als Inhaber eines befristeten Visums kannst du dein Super über den Departing Australia Superannuation Payment (DASP) zurückfordern, sobald du Australien verlassen hast und dein Visum abgelaufen ist.",
        },
        {
          q: "Wie viel Steuer wird vom DASP einbehalten?",
          a: "Für Inhaber eines Work-and-Travel-Visums (subclass 417/462) beträgt der Steuersatz auf den DASP 65 %. Du erhältst die verbleibenden 35 % — was immer noch weit besser ist, als gar nichts zu beantragen.",
        },
        {
          q: "Wann kann ich meinen Super beantragen?",
          a: "Nachdem du Australien verlassen hast und dein Visum abgelaufen oder storniert wurde. Du stellst den Antrag bei jedem Super-Fonds (oder über den ATO) mit Reisepass, Visum und TFN.",
        },
      ],
    },
    fr: {
      title: "Récupérer sa superannuation en quittant l'Australie (DASP)",
      description:
        "En PVT Australie, tu peux récupérer ta superannuation via le DASP. Comment ça marche, le taux d'imposition, et comment ne pas laisser des milliers de dollars derrière toi.",
      excerpt:
        "Ton employeur a versé de la super en plus de ton salaire — et tu peux la récupérer en partant. Des milliards restent non réclamés. Voici comment obtenir ta part via le DASP.",
      sections: [
        {
          paragraphs: [
            "[La superannuation (\"super\")](~/blog/what-is-superannuation) est une épargne-retraite que ton employeur verse en plus de ton salaire — actuellement 12 % de tes revenus. En tant que titulaire d'un visa temporaire, tu peux la récupérer lorsque tu quittes définitivement l'Australie, via le Departing Australia Superannuation Payment (DASP). Des milliards de dollars de super restent non réclamés — une grande partie appartient à des pvtistes qui ne savaient pas qu'ils pouvaient en faire la demande.",
          ],
        },
        {
          heading: "Combien de super te revient",
          paragraphs: [
            "Si tu as travaillé en Australie, ton employeur aurait dû verser de la super dans un fonds à ton nom. Entre les vendanges, les fermes et l'hôtellerie-restauration, ça peut facilement représenter plusieurs milliers de dollars sur un an. Le problème : chaque fois que tu changes d'employeur sans désigner un fonds, un nouveau compte est créé — ta super se retrouve éparpillée entre plusieurs comptes, chacun facturant ses propres frais de gestion.",
          ],
        },
        {
          heading: "Faire sa demande de DASP étape par étape",
          bullets: [
            "Vérifier que ton visa est expiré ou annulé et que tu as quitté l'Australie (le DASP est versé après ton départ)",
            "Retrouver tous tes comptes super — les services en ligne de l'ATO t'aident à localiser la super égarée",
            "Soumettre une demande de DASP en ligne auprès de chaque fonds (ou via l'ATO)",
            "Fournir ton TFN, ton passeport et les informations de ton visa pour la vérification d'identité",
          ],
        },
        {
          heading: "La fiscalité du DASP",
          paragraphs: [
            "Le DASP pour les titulaires d'un visa vacances-travail (subclass 417/462) est imposé à 65 %. Ça paraît élevé, mais récupérer 35 % de ta super reste bien mieux que 0 % — ce que tu obtiens si tu ne fais jamais la demande. Sur quelques milliers de dollars, c'est quand même un vrai budget pour ton prochain voyage.",
          ],
        },
        {
          heading: "Ne perds pas ta super de vue",
          paragraphs: [
            "La raison principale pour laquelle les pvtistes ne récupèrent jamais leur super est simple : identifiants d'anciens fonds oubliés, adresses e-mail périmées et comptes éparpillés. Regrouper et suivre ta super pendant que tu es encore en Australie rend la demande de DASP indolore au moment de partir.",
          ],
        },
        {
          heading: "Comment Tern t'aide",
          paragraphs: [
            "Tern suit la super versée par chaque employeur, t'alerte avant qu'un nouveau fonds inutile soit ouvert, et t'accompagne étape par étape dans ta demande de DASP depuis l'étranger — pour que tu ne laisses pas ton épargne-retraite en Australie.",
          ],
        },
      ],
      faq: [
        {
          q: "Les titulaires d'un visa vacances-travail peuvent-ils récupérer leur superannuation ?",
          a: "Oui. En tant que résident temporaire, tu peux récupérer ta super via le Departing Australia Superannuation Payment (DASP) une fois que tu as quitté l'Australie et que ton visa a cessé d'être valide.",
        },
        {
          q: "Quel taux d'imposition s'applique au remboursement DASP ?",
          a: "Pour les titulaires d'un visa vacances-travail (subclass 417/462), le DASP est imposé à 65 %. Tu reçois les 35 % restants — ce qui reste bien mieux que de ne rien demander.",
        },
        {
          q: "Quand puis-je demander ma super ?",
          a: "Après avoir quitté l'Australie et une fois ton visa expiré ou annulé. Tu soumets ta demande à chaque fonds de super (ou via l'ATO) avec ton passeport, ton visa et ton TFN.",
        },
      ],
    },
    it: {
      title: "Come recuperare la superannuation lasciando l'Australia (DASP)",
      description:
        "Con il working holiday visa puoi recuperare la tua superannuation australiana tramite il DASP. Come funziona, l'aliquota fiscale e come non lasciare migliaia di dollari indietro.",
      excerpt:
        "Il tuo datore di lavoro ha versato super in aggiunta al tuo stipendio — e puoi recuperarla quando parti. Miliardi di dollari restano non reclamati. Ecco come ottenerla tramite il DASP.",
      sections: [
        {
          paragraphs: [
            "[La superannuation (\"super\")](~/blog/what-is-superannuation) è un fondo pensionistico che il tuo datore di lavoro versa in aggiunta al tuo stipendio — attualmente il 12% dei tuoi guadagni. Come titolare di un visto temporaneo puoi recuperarla quando lasci definitivamente l'Australia, tramite il Departing Australia Superannuation Payment (DASP). Miliardi di dollari di super restano non reclamati, gran parte dei quali appartengono a chi era in working holiday e non sapeva di poterli richiedere.",
          ],
        },
        {
          heading: "Quanto super ti spetta",
          paragraphs: [
            "Se hai guadagnato uno stipendio in Australia, il tuo datore di lavoro avrebbe dovuto versare contributi super in un fondo a tuo nome. Tra lavoro in fattoria e nel settore della ristorazione, in un anno possono accumularsi facilmente qualche migliaio di dollari. Il problema: ogni volta che cambi lavoro senza indicare un fondo, viene aperto un nuovo conto — la tua super finisce dispersa tra più conti, ognuno con le proprie commissioni.",
          ],
        },
        {
          heading: "Come richiedere il DASP passo dopo passo",
          bullets: [
            "Assicurati che il tuo visto sia scaduto o annullato e di aver lasciato l'Australia (il DASP viene pagato dopo la partenza)",
            "Trova tutti i tuoi conti super — i servizi online dell'ATO ti aiutano a rintracciare la super dispersa",
            "Invia una domanda di DASP online a ogni fondo (o tramite l'ATO)",
            "Fornisci il tuo TFN, il passaporto e i dati del visto per la verifica dell'identità",
          ],
        },
        {
          heading: "Come viene tassato il DASP",
          paragraphs: [
            "Il DASP per i titolari di working holiday visa (subclass 417/462) è tassato al 65%. Sembra tanto, ma ricevere il 35% della tua super è molto meglio dello 0% — che è quello che ottieni se non fai mai richiesta. Su qualche migliaio di dollari, è comunque denaro reale per il tuo prossimo viaggio.",
          ],
        },
        {
          heading: "Non perdere di vista la tua super",
          paragraphs: [
            "Il motivo principale per cui chi è in working holiday non recupera mai la propria super è semplice: credenziali di vecchi fondi dimenticate, indirizzi e-mail non più attivi e conti sparsi ovunque. Consolidare e tenere traccia della tua super mentre sei ancora in Australia rende la richiesta del DASP molto più semplice una volta partito.",
          ],
        },
        {
          heading: "Come ti aiuta Tern",
          paragraphs: [
            "Tern tiene traccia della super versata da ogni datore di lavoro, ti avvisa prima che venga aperto inutilmente un nuovo fondo e ti guida passo dopo passo nella richiesta del DASP dall'estero — così non lasci il tuo fondo pensionistico in Australia.",
          ],
        },
      ],
      faq: [
        {
          q: "I titolari di working holiday visa possono recuperare la superannuation?",
          a: "Sì. Come residente temporaneo, puoi richiedere la tua super tramite il Departing Australia Superannuation Payment (DASP) una volta lasciata l'Australia e dopo che il tuo visto è cessato.",
        },
        {
          q: "Quante tasse vengono trattenute dal rimborso DASP?",
          a: "Per i titolari di working holiday visa (subclass 417/462), il DASP è tassato al 65%. Ricevi il restante 35% — che è comunque molto meglio che non richiedere nulla.",
        },
        {
          q: "Quando posso richiedere la mia super?",
          a: "Dopo aver lasciato l'Australia e una volta che il tuo visto è scaduto o è stato annullato. Presenti la domanda a ogni fondo super (o tramite l'ATO) con passaporto, visto e TFN.",
        },
      ],
    },
  },
};
