import type { Article } from "../types";

export const article: Article = {
  slug: "japan-departure-checklist-working-holiday",
  kind: "guide",
  date: "2026-06-08",
  emoji: "🎌",
  accent: "bg-sky-300",
  readMinutes: 7,
  sources: [
    {
      label: "日本年金機構 — 海外への転出／海外からの転入",
      url: "https://www.nenkin.go.jp/service/scenebetsu/kaigai.html",
    },
    {
      label: "日本年金機構 — 国民年金の任意加入の手続き（在外任意加入）",
      url: "https://www.nenkin.go.jp/service/kokunen/kanyu/20140627-02.html",
    },
    {
      label: "日本年金機構 — 合算対象期間（受給資格期間）",
      url: "https://www.nenkin.go.jp/service/jukyu/seido/roureinenkin/jukyu-yoken/20140421-05.html",
    },
  ],
  related: [
    "bank-account-working-holiday-australia",
    "how-much-money-working-holiday-australia",
  ],
  i18n: {
    ja: {
      title: "ワーホリ出発前の日本の手続き：年金・健保・住民税",
      description:
        "海外転出届、国民年金の任意加入・カラ期間、国民健康保険の脱退、住民税の1月1日ルール、銀行・証券の非居住者対応を出発前に整理する完全ガイド。",
      excerpt:
        "1年以上のワーホリなら「住民票を抜く」判断が節約につながります。年金・健保・住民税・銀行の手続きを出発前にまとめて把握しましょう。",
      sections: [
        {
          paragraphs: [
            "オーストラリア・ニュージーランド・カナダなどへのワーキングホリデーを控えた日本人にとって、渡航準備は航空券やビザだけではありません。年金・健康保険・住民税・銀行口座——日本国内の行政手続きを出発前に整理しておかないと、帰国後に思わぬ請求が届いたり、海外から送金手段を失ったりするリスクがあります。このガイドでは、1年以上のワーホリを前提に、損しないための手続きの順序と選択肢を整理します。自治体によって細部が異なる場合がありますので、最終確認は居住市区町村の窓口で行ってください。",
          ],
        },
        {
          heading: "海外転出届：出すべきか、どのタイミングで",
          paragraphs: [
            "海外転出届とは、1年以上海外に居住する予定がある場合に市区町村役所へ提出する届出です。出国14日前から出国当日まで窓口で受け付けており、郵送対応している自治体もあります。届出を出すと住民票が「除票」となり、法律上「非居住者」の扱いになります。",
            "1年未満の短期滞在であれば提出しないケースが多いですが、1年以上のワーホリでは提出するメリットのほうが大きいことが一般的です。主な効果は次のとおりです。国民健康保険の脱退（保険料の支払い義務がなくなる）、国民年金の強制加入から外れる（任意加入へ移行）、翌年以降の住民税の課税ゼロ化（後述）。なお、マイナンバーカードは海外転出後も有効期間中は手元に持てますが、転出届提出時に券面変更の手続きが必要になります。",
          ],
          bullets: [
            "提出できる期間：出国14日前〜出国当日（市区町村によっては郵送可）",
            "必要書類：本人確認書類（マイナンバーカードまたはパスポート）、届出書（窓口で取得可）",
            "代理人による提出も可能（委任状が必要）",
            "転出後に帰国したら14日以内に転入届（住民登録の再登録）が必要",
          ],
        },
        {
          heading: "国民年金：払う？払わない？カラ期間の活用",
          paragraphs: [
            "海外転出届を提出すると、国民年金の「第1号被保険者」から外れます。海外在住中は保険料の支払い義務がなくなり、未払いによるペナルティもありません。ただし、将来受け取る年金額に影響が出ます。選択肢は2つです。",
            "①任意加入（在外任意加入制度）：20歳以上65歳未満の日本国籍者が対象で、転出届提出時に市区町村の国民年金担当窓口（または年金事務所）で手続きできます。2026年度の保険料は月額17,920円です。支払いは国内の「国内協力者」（親族など）に代わりに行ってもらうか、日本の銀行口座からの口座振替が基本です。将来の老齢基礎年金の受給額を満額に近づけたい方、納付期間が40年に届かない方には有効な選択肢です。",
            "②任意加入しない（カラ期間として活用）：海外在住期間は「合算対象期間（カラ期間）」として老齢基礎年金の受給資格に必要な10年のカウントには含まれます。ただし、年金の受給「額」には反映されません。つまり月約1.8万円の出費を抑えつつ、受給資格の年数だけは積み上げることができます。たとえば日本で5年加入実績がある人が5年以上海外に住んだ場合、合算で10年に達し受給資格が生まれます。受給額を重視するなら任意加入、まず受給資格を確保したいなら任意加入なしも合理的な判断です。",
          ],
          bullets: [
            "任意加入の手続き先：出発前は居住市区町村の国民年金窓口または年金事務所",
            "任意加入の月額保険料：2026年度は月17,920円（毎年度見直しあり）",
            "支払い方法：国内協力者（家族など）による口座振替が基本",
            "カラ期間：受給資格（10年）のカウントには含まれるが、受給額には反映されない",
            "厚生年金加入中（会社員）の場合は任意加入の対象外",
          ],
        },
        {
          heading: "国民健康保険：転出届で脱退、渡航後の代替手段を確保",
          paragraphs: [
            "海外転出届を提出した時点で国民健康保険（国保）の資格を喪失します。日本国内での医療費は全額自己負担になるため、転出前に受診を済ませておくのが得策です。出発前に保険証を返却する手続きが必要な市区町村もあります。",
            "海外では国保は使えないため、ワーホリ中の医療費をカバーする手段を別途用意する必要があります。多くのワーホリビザでは現地での民間旅行・就労保険への加入が推奨（または義務）されています。保険が不十分なまま現地で入院・手術が必要になると、数百万円単位の請求が発生することがあります。渡航前に保険内容をよく確認しましょう。なお、海外在住中に日本国内で家族が治療を受ける場合は、家族自身の加入状況が適用されるため、自分の脱退が家族の保険に影響することはありません。",
          ],
          bullets: [
            "海外転出届の提出と同時に国民健康保険の資格喪失",
            "出発前に保険証を市区町村窓口へ返却（自治体によって手続きが異なる）",
            "ワーホリ中は現地の旅行保険・就労保険を必ず確保する",
            "帰国後・転入届提出後は国保に再加入（または職場の健康保険に加入）が必要",
          ],
        },
        {
          heading: "住民税：「1月1日ルール」と出発タイミングの判断",
          paragraphs: [
            "住民税は「その年の1月1日時点に住民登録がある市区町村」が翌年6月から1年分を課税する仕組みです。つまり、1月2日以降に海外転出届を提出して出国しても、その年の住民税は全額課税されます。2025年1月1日に日本に住民票があった方は、2025年度（2024年の所得に対する分）の住民税を支払う義務があります。",
            "翌年以降の住民税をゼロにしたい場合は、12月31日以前に海外転出届を提出・出国するのが最もシンプルな方法です。1月1日時点で住民票がなければ、その年度の住民税は課税されません。出発前に未納の住民税がある場合は完納してから出国するか、国内に「納税管理人」を設定して代理で支払ってもらう必要があります。納税管理人の届出は市区町村役所で行います。費用は任意ですが、信頼できる家族や知人に依頼するケースが一般的です。",
          ],
          bullets: [
            "1月1日ルール：1月1日時点の住民票の有無で当年度の課税が決まる",
            "12月31日以前に転出届を出して出国すると翌年度の住民税が非課税になる",
            "未払い住民税がある場合は納税管理人（家族など）を設定して対応",
            "住民税の支払いは分割（特別徴収の場合は一括清算が必要なことも）になる場合がある",
          ],
        },
        {
          heading: "銀行・証券口座：非居住者になっても使える体制を作る",
          paragraphs: [
            "海外転出届を提出すると「非居住者」となり、日本の多くの銀行では規約上、口座の利用継続に制限がかかります。ネット銀行の多くは非居住者の利用を原則禁止しており、知らずに使い続けると口座が凍結されることがあります。渡航前に各金融機関の規定を確認するのが重要です。",
            "メガバンク（三菱UFJ・三井住友・みずほ）は非居住者向けの取扱いが整備されているケースが多く、事前に銀行窓口で「非居住者」として手続きを行うことで口座を維持できる場合があります。証券口座は金融商品取引法の観点から非居住者が国内株式を取引することに制限があり、多くの証券会社で取引停止または口座解約が求められます。出発前に証券会社の規定を確認し、必要に応じてポジションを整理しておきましょう。実用的な対策としては、国内での受け取り・送金用に家族名義の口座を活用したり、海外からでも使えるマルチカレンシー口座をバックアップとして準備することが挙げられます。",
          ],
          bullets: [
            "ネット銀行の多くは非居住者の利用不可（口座凍結リスクあり）— 出発前に各行に確認を",
            "メガバンクは事前手続きで非居住者口座として継続利用できる場合が多い",
            "証券口座：多くの証券会社で非居住者は新規取引不可・解約を求められる",
            "国内での資金受け取りや税金支払いのために家族に口座管理を依頼する選択肢",
            "海外⇄日本の送金手段（バックアップ）を出発前に確保しておく",
          ],
        },
        {
          heading: "Ternができること",
          paragraphs: [
            "Ternは、日本出発前にスマートフォンから口座を開設できるマルチカレンシーアカウントです（ローンチ前のプレ登録受付中）。パスポートとワーホリビザの承認があれば、現地到着前から口座番号を取得できます。日本円から現地通貨への両替はミッドマーケットレート（銀行の中間レート）を使い、隠れた為替マージンはありません。現地ATMでの引き出し手数料もかかりません。日本の銀行規約を気にせず、海外からでも資金移動できるバックアップ手段としても活用できます。渡航費の工面から現地の生活費管理まで、ワーホリの出費を透明にサポートします。",
          ],
        },
      ],
      faq: [
        {
          q: "ワーホリに行く前に海外転出届は必ず出さなければいけませんか？",
          a: "法律上の義務ではありませんが、1年以上のワーホリであれば提出を検討する価値があります。届出を出すことで国民健康保険の保険料支払いがなくなり、翌年以降の住民税も非課税になります。国民年金は任意加入へ移行し、払うかどうかを自分で選択できます。短期（1年未満）の場合は、日本に住民票を残したままにするほうがシンプルなケースもあります。",
        },
        {
          q: "年金は払わずに行っても、将来受け取れますか？",
          a: "海外在住期間は「合算対象期間（カラ期間）」として老齢基礎年金の受給資格に必要な10年にカウントされます。ただし、カラ期間は受給資格の年数を満たすためにのみ使われ、実際の受給額には反映されません。年金額を増やしたい場合は、在外任意加入制度で保険料を払い続ける選択肢があります（2026年度は月17,920円）。",
        },
        {
          q: "出発前に一番やってはいけないミスは何ですか？",
          a: "住民税と銀行口座の見落としが特に多いトラブルです。住民税は1月1日時点の住民票で翌年に課税されるため、1月1日以降に出国した年の分は全額払う必要があります。未払いのまま出国し、帰国後に延滞金込みで請求が来るケースがあります。また、ネット銀行を非居住者のまま使い続けると突然口座が凍結されることがあるため、出発前に各金融機関の規定を確認しておくことを強くすすめます。",
        },
      ],
    },
    en: {
      title: "Japan admin checklist before your working holiday: pension, health insurance, and tax",
      description:
        "What Japanese residents need to do before a working holiday — deregistering, national pension options, health insurance, resident tax timing, and keeping a bank account while abroad.",
      excerpt:
        "A working holiday of a year or more means sorting out Japan-side paperwork first. Pension, health insurance, resident tax, and bank accounts all need attention before you fly.",
      sections: [
        {
          paragraphs: [
            "For Japanese residents heading to Australia, New Zealand, Canada, or another working holiday destination, preparation goes well beyond booking flights and getting a visa. National pension, health insurance, resident tax, and Japanese bank accounts all have rules that change the moment you become a non-resident. Getting the sequence right before you leave can save real money and prevent awkward situations — an unexpected tax bill when you return, or a frozen bank account while you're thousands of kilometres away. This guide focuses on trips of one year or longer. Rules can vary slightly by municipality, so confirm the details with your local city or ward office before departure.",
          ],
        },
        {
          heading: "Kaigai tenshutsu-todoke: the moving-abroad notification",
          paragraphs: [
            "The 海外転出届 (kaigai tenshutsu-todoke) is a notification filed at your local city or ward office when you plan to live abroad for a year or more. You can submit it from 14 days before your departure date up to and including the day you leave; some municipalities also accept it by post. Once filed, your resident registration (住民票) is removed and you become a legal non-resident.",
            "For a short trip under a year, many people skip this step. For a working holiday of 12 months or longer, filing is usually worthwhile: national health insurance contributions stop, national pension contributions become voluntary rather than mandatory, and future resident tax drops to zero (details below). Your My Number card (マイナンバーカード) remains valid through its expiry date, but you will need to complete a face-update procedure at the office when you file.",
          ],
          bullets: [
            "When to file: from 14 days before departure up to departure day (postal submission available in some municipalities)",
            "Bring: a photo ID such as your My Number card or passport, plus the notification form (available at the counter)",
            "A representative can file on your behalf with a power of attorney (委任状)",
            "On return: re-register your address (転入届) within 14 days of moving back in",
          ],
        },
        {
          heading: "National pension: pay voluntarily, or use the kara-kikan credit?",
          paragraphs: [
            "Filing the moving-abroad notification removes you from mandatory national pension (国民年金) enrollment. You will not be penalised for not paying while overseas. However, the choice you make now affects your future pension amount. There are two paths.",
            "Option 1 — voluntary enrollment (在外任意加入): Japanese nationals aged 20–64 who are not in an employer pension scheme can continue contributing voluntarily. Enroll at the national pension counter of your city office or at the Japan Pension Service office before you leave. The 2026 fiscal year premium is ¥17,920 per month (reviewed annually). Payments are made through a domestic representative — typically a family member — via bank transfer from a Japanese account. This option makes sense if you want to reach the full 40-year contribution period or increase your eventual monthly benefit.",
            "Option 2 — use the kara-kikan credit (合算対象期間): Periods spent living abroad without voluntary enrollment count as 合算対象期間 (also called カラ期間, literally 'empty periods'). These periods count toward the 10-year eligibility threshold needed to receive any old-age pension at all, but they do not add to your monthly benefit amount. So if you have five years of contributions in Japan already and spend five or more years abroad, you will meet the 10-year eligibility threshold without paying a yen while away. If your priority is simply qualifying for a pension rather than maximising the amount, not enrolling is a rational choice.",
          ],
          bullets: [
            "Where to enroll: national pension counter at your city office or Japan Pension Service office, before departure",
            "Monthly premium: ¥17,920 in FY2026 (revised each fiscal year)",
            "Payment method: bank transfer via a domestic representative (family member or other contact in Japan)",
            "Kara-kikan: counts toward the 10-year eligibility threshold but does not increase your eventual benefit amount",
            "Employees in a company pension (厚生年金) are not eligible for voluntary enrollment",
          ],
        },
        {
          heading: "National health insurance: coverage ends on departure",
          paragraphs: [
            "Filing the moving-abroad notification terminates your national health insurance (国民健康保険) membership immediately. You will need to return your insurance card (保険証) to the municipal office — the exact procedure varies by municipality. Any medical appointments you have been putting off are best handled before you file.",
            "Japan's national health insurance does not cover treatment abroad. For your working holiday, you will need to arrange separate travel or working holiday insurance. Many destination countries strongly recommend or require health coverage as a condition of the visa. Going without adequate insurance and needing hospital treatment abroad can result in bills of several hundred thousand yen or more. Review your coverage carefully before leaving. Your own withdrawal from national health insurance has no effect on family members who remain in Japan — their coverage continues under their own enrollment.",
          ],
          bullets: [
            "National health insurance ends when your moving-abroad notification is processed",
            "Return your insurance card to the municipal office (procedures vary by municipality)",
            "Arrange working holiday / travel insurance before departure — do not leave this gap",
            "On return: re-enroll in national health insurance (or join an employer scheme) after re-registering your address",
          ],
        },
        {
          heading: "Resident tax: the January 1st rule matters",
          paragraphs: [
            "Resident tax (住民税) in Japan is assessed based on who has a registered address on January 1st of each year. If you are in Japan — even with a one-way ticket booked for January 2nd — you owe that year's full resident tax, calculated on the previous year's income and billed from June onwards. Leaving in March does not reduce the amount.",
            "If you want to avoid resident tax for the following year, the simplest approach is to file your moving-abroad notification and leave on or before December 31st. With no resident registration on January 1st, no assessment is raised for that year. If you have unpaid resident tax when you leave, you must either pay it in full before departure or appoint a tax agent (納税管理人) — typically a family member — to handle payments on your behalf. The appointment form is submitted to your municipal office. Failure to appoint an agent and leaving outstanding tax can result in late payment penalties.",
          ],
          bullets: [
            "January 1st rule: resident tax for the year is determined by whether you have a registered address on January 1st",
            "Leaving on or before December 31st means no resident tax assessment for the following year",
            "Outstanding tax: pay in full before leaving, or appoint a tax agent (納税管理人) to handle it",
            "Tax may be collected in instalments — if on employer withholding, check whether a lump-sum clearance is required",
          ],
        },
        {
          heading: "Bank and investment accounts: planning for non-resident status",
          paragraphs: [
            "Becoming a non-resident changes your relationship with Japanese financial institutions. Most online banks explicitly prohibit use by non-residents; continuing to use the account without disclosure can result in sudden freezing. Check each institution's terms before you leave.",
            "The major city banks (Mitsubishi UFJ, Sumitomo Mitsui, Mizuho) generally have a non-resident handling process: visit a branch before departure, inform them you are moving abroad, and they can reclassify the account. Investment accounts are a separate issue — securities law restricts non-residents from trading Japanese stocks, and most brokerages will ask you to stop trading or close the account. Deal with any positions you want to liquidate before you leave. For practical ongoing needs — receiving tax refunds, paying resident tax through an agent, or accepting transfers from abroad — it is common to ask a family member to manage a Japanese account on your behalf. Having a backup international transfer method is important.",
          ],
          bullets: [
            "Online banks mostly prohibit non-resident use — check terms and act before departure to avoid account freezes",
            "Major city banks can often reclassify accounts for non-residents with an in-branch procedure beforehand",
            "Investment accounts: most brokerages require you to stop trading or close the account once you become a non-resident",
            "Family account management: a common solution for receiving domestic transfers and paying taxes while abroad",
            "Arrange a backup international transfer method before leaving Japan",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Tern is a multi-currency account you can open from your phone before you board the flight — passport and working holiday visa approval are all you need (pre-launch registration is open now). Your account details are ready before you land, so you can share them with an employer from day one without waiting for a local bank account. Top up from Japanese yen at the mid-market rate with no hidden exchange margin, and use your card at overseas ATMs with no withdrawal fees. As Japan-side bank account access gets complicated for non-residents, Tern gives you a straightforward backup for moving money between Japan and your destination country.",
          ],
        },
      ],
      faq: [
        {
          q: "Do I have to file the moving-abroad notification before a working holiday?",
          a: "It is not legally required, but for a working holiday of a year or more it is generally worth doing. Filing stops national health insurance contributions, removes the obligation to pay resident tax in future years, and moves national pension to a voluntary basis. For shorter stays under a year, many people keep their resident registration in place — the right choice depends on your timeline and financial situation.",
        },
        {
          q: "If I don't pay pension while I'm away, will I still be able to receive a pension later?",
          a: "Time spent living abroad without voluntary pension enrollment is counted as 合算対象期間 (kara-kikan, or credited period). This counts toward the 10-year threshold required to qualify for any old-age pension at all, but it does not increase the monthly amount you eventually receive. If you already have several years of contributions in Japan and spend years abroad, you may well meet the 10-year eligibility threshold through a combination of paid periods and kara-kikan. To increase your actual benefit amount, voluntary enrollment (¥17,920 per month in FY2026) is the only option while overseas.",
        },
        {
          q: "What is the single most common admin mistake before departure?",
          a: "Overlooking the resident tax timing and leaving Japanese bank accounts in an unmanaged state are the two most frequent problems. On tax: if you leave after January 1st, you owe that year's full resident tax — leaving without paying it and returning to late-payment surcharges is avoidable with a little planning. On banking: online bank accounts left active after you become a non-resident can be frozen without warning, cutting off access to funds at the worst possible moment. Checking the terms of every financial account before departure is strongly recommended.",
        },
      ],
    },
  },
};
