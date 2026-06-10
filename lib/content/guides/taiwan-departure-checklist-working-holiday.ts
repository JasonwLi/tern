import type { Article } from "../types";

export const article: Article = {
  slug: "taiwan-departure-checklist-working-holiday",
  kind: "guide",
  date: "2026-06-09",
  emoji: "🏮",
  accent: "bg-coral-300",
  readMinutes: 7,
  related: ["bank-account-working-holiday-australia", "superannuation-refund-dasp"],
  sources: [
    {
      label: "衛生福利部中央健康保險署 — 出國停保制度廢止說明",
      url: "https://www.nhi.gov.tw/Content_List.aspx?n=5707E1E7708F47F9&topn=5FE8C9FEAE863B46",
    },
    {
      label: "中央社 CNA — 健保12/23起廢止停復保，長年旅外QA一次看（2024）",
      url: "https://www.cna.com.tw/news/ahel/202411220372.aspx",
    },
    {
      label: "勞動部 — 長期在國外居住工作不可繼續職業工會加保",
      url: "https://www.mol.gov.tw/1607/1632/1640/20650/post",
    },
    {
      label: "勞動部勞工保險局 — 國民年金：長期居住國外是否仍須參加",
      url: "https://www.bli.gov.tw/0104699.html",
    },
  ],
  i18n: {
    "zh-TW": {
      title: "打工度假出發前：健保、勞保、戶籍懶人包",
      description:
        "去澳洲、紐西蘭、加拿大打工度假前，一定要處理的台灣行政事項——健保新制、勞保退保、戶籍、銀行全攻略。",
      excerpt:
        "簽證下來了，機票買好了，但台灣這邊的事情辦好了嗎？出發前搞定健保、勞保、戶籍和銀行設定，到了當地才不會手忙腳亂。",
      sections: [
        {
          paragraphs: [
            "打工度假簽證核下來的那一刻超爽，但接下來有一串台灣這邊的行政事項要處理。很多人到了澳洲、紐西蘭或加拿大才發現健保沒搞清楚、網銀沒開通，或者薪水匯不進來。這篇懶人包整理了出發前最容易漏掉的幾個關鍵步驟，讓你帶著安心出門。",
          ],
        },
        {
          heading: "健保：停保制度已廢止，出國前要確認這件事",
          paragraphs: [
            "這是近年最大的變化，也是最多人搞錯的一件事：健保「停復保」制度已於 2024 年 12 月 23 日正式廢止。",
            "以前出國 6 個月以上可以申請停保、暫停繳保費；新制上路後，只要你在台灣有戶籍，就必須持續繳納健保保費，不論你人在哪裡。",
            "換句話說，打工度假期間你仍是健保被保險人，保費照繳（若是依附眷屬，由投保的家人繼續繳；若是地區人口，由健保署開單）。出國前建議設定自動轉帳，避免保費欠繳。",
            "唯一讓健保終止的方式是辦理戶籍遷出，這通常發生在出國滿 2 年之後（見下一段說明）。如果你的打工度假簽證只有 1 至 2 年，大多數人選擇保留戶籍、繼續繳費，回國後馬上恢復使用。",
            "⚠️ 由於健保法規仍有個案差異，以最新官方規定為準，建議出發前致電健保署（0800-030-598）再次確認你的投保類別與繳費方式。",
          ],
        },
        {
          heading: "勞保與勞退：離職就退保，但年資和個人帳戶不會消失",
          paragraphs: [
            "打工度假通常是辭職後出發，離職的同時雇主就會幫你辦理勞保退保，這是正常程序，不需要你另外處理。",
            "幾個重要觀念值得記下來：",
          ],
          bullets: [
            "勞保年資不會歸零：你過去累積的勞保年資會保留，等你回台灣重新就業並加保，年資繼續往後累積。",
            "勞退個人專戶不受影響：雇主幫你提撥的 6% 勞退金存在你的個人帳戶，屬於你的財產，出國期間繼續滋生收益，不會被動到。",
            "出國後不得以職業工會繼續掛保：這是很多人不知道的眉角。勞保法規定，長期在國外工作或居住者不可以為了延續年資而透過職業工會繼續加保；若被勞保局查到，年資不計且保費不退。",
          ],
        },
        {
          heading: "國民年金：離開勞保後，你可能需要加保",
          paragraphs: [
            "離職退出勞保之後，如果你是 25 歲以上、未加入農保、也沒有其他職業身分的台灣公民，理論上就成為國民年金的強制加保對象——即使你即將出國。",
            "實務上，打工度假的短暫期間（1 至 2 年），許多人選擇依規定繳納國民年金保費（金額比勞保低許多），保留年金年資；也有人辦理戶籍遷出後自動退出（見下方戶籍段落）。出發前可致電勞保局（02-2396-1266）確認你的狀況。",
          ],
        },
        {
          heading: "戶籍：出國超過 2 年會怎樣？",
          paragraphs: [
            "依移民署規定，持有中華民國戶籍的國民若出境超過 2 年，戶籍所在地戶政事務所會主動辦理「戶籍遷出」登記。",
            "戶籍遷出的連鎖效應：",
          ],
          bullets: [
            "健保自動退保：戶籍遷出當日起即不再是健保被保險人，也無需再繳保費。",
            "國民年金退保：戶籍遷出者同步退出國民年金。",
            "選舉投票資格暫停：戶籍遷出後不得在台灣投票，直到回台灣重設戶籍。",
            "回台復保規則：若在遷出起 2 年內恢復戶籍，健保即日起生效；若超過 4 年才回台設籍，需等待 6 個月才能再參加健保。",
          ],
        },
        {
          paragraphs: [
            "對於 1 至 2 年的打工度假者來說，通常不會觸及 2 年門檻，不必擔心被強制遷出；但如果你打算在海外待超過 2 年或延簽，出發前就要規劃好。",
          ],
        },
        {
          heading: "銀行與換匯：出發前設定好這幾件事",
          paragraphs: [
            "這一塊出了問題，往往是最頭痛的。建議在離台前處理好以下幾件事：",
          ],
          bullets: [
            "開通網路銀行與行動銀行 App：確認帳號密碼都記得住，OTP 的手機號碼是你帶出國的號碼。",
            "確認非約定轉帳額度：台灣的網銀對「非約定帳號」的單日轉帳金額有上限（通常為 1 萬至 3 萬元），出國前可到臨櫃調高，或預先將常用帳號加入約定名單。",
            "開通海外提款功能：信用卡和金融卡的「海外預借現金」與「國際提款」功能，有些預設是關閉的，要打電話或上網開通。",
            "換匯時機：如果目的地是澳洲，出發前可換少量澳幣作為剛到的生活費，但大額換匯不必在台灣處理——透過 Tern 或類似的外匯 App，以接近銀行間即時匯率儲值通常比台灣銀行牌告匯率划算。",
            "開立外幣帳戶（選配）：部分銀行的外幣活存帳戶可以定期接收海外匯款，如果你預計有大筆薪資要匯回台灣，值得提前開好。",
          ],
        },
        {
          heading: "Tern 能幫你什麼",
          paragraphs: [
            "上面說的台灣行政事項要出發前搞定，但到了當地的第一步是有個可以收薪水的帳戶。Tern 是專為打工度假族打造的金融 App，讓你在出發前就能完成開戶——不需要澳洲地址，只要護照和打工度假簽證。",
            "開好帳戶之後，你可以直接從台灣的銀行帳戶，以接近即時匯率儲值到 Tern 帳戶，省下傳統銀行的換匯手續費。到了當地用 Tern 卡提款，ATM 手續費也不必額外煩惱。",
            "Tern 目前仍在預覽開放階段，如果你計劃近期出發，可以先登記候補，搶先取得帳戶資格。",
          ],
        },
      ],
      faq: [
        {
          q: "出國打工度假期間，健保保費還是要繳嗎？",
          a: "是的。自 2024 年 12 月 23 日停復保制度廢止後，只要你在台灣保有戶籍，不論人在哪裡都須繳納健保保費。建議出發前設定自動轉帳，避免欠費影響回台後的就醫權益。唯一的例外是辦理戶籍遷出（通常出國 2 年後才會發生）。",
        },
        {
          q: "離職後，我的勞保年資和勞退會消失嗎？",
          a: "不會。勞保年資在退保後依舊保留，回台再就業加保後繼續累計。勞退個人專戶的金額屬於你個人的財產，出國期間仍持續滋生收益，不受任何影響。",
        },
        {
          q: "打工度假要帶哪張金融卡出去比較划算？",
          a: "建議帶一張有開通海外提款功能、且手續費較低的卡（部分純網路銀行的卡海外免手續費）。另外可考慮使用 Tern 這類為打工度假族設計的 App，以接近即時匯率在台灣儲值，到當地提款或消費，減少傳統換匯和 ATM 手續費的損耗。",
        },
      ],
    },
    en: {
      title: "Taiwan departure checklist for working holiday makers",
      description:
        "Before you fly to Australia, New Zealand, or Canada on a working holiday — here's what to sort on the Taiwan side: health insurance, labour insurance, household registration, and banking.",
      excerpt:
        "Visa approved, flights booked — but is the Taiwan admin done? Sorting health insurance, labour insurance, household registration, and banking before you leave means one less headache once you land.",
      sections: [
        {
          paragraphs: [
            "The moment your working holiday visa is approved, the countdown begins. But while most people are busy researching hostels and checking flight prices, the Taiwan-side admin quietly piles up. Miss a step and you could face unpaid insurance premiums, frozen bank transfers, or a salary that can't reach you. This guide covers the key items to tick off before you board.",
          ],
        },
        {
          heading: "National Health Insurance (NHI): the suspension system no longer exists",
          paragraphs: [
            "This is the most important recent change to know: Taiwan's NHI suspension and reinstatement system (停復保制度) was formally abolished on 23 December 2024.",
            "Previously, anyone abroad for 6 months or more could apply to suspend their NHI coverage and stop paying premiums. Under the new rule, if you retain household registration (戶籍) in Taiwan, you must continue paying premiums regardless of where you live.",
            "In practice, for a working holiday of 1–2 years most people keep their household registration, set up automatic premium payments before they leave, and return to full NHI coverage the moment they're back. Premiums are modest — roughly NT$800–1,200 per month for most dependents or district-enrolled individuals — and keeping coverage means there's no waiting period on your return.",
            "The only way for NHI coverage to end while you're abroad is if your household registration is cancelled after 2+ years away (see the section on household registration below).",
            "⚠️ Rules can vary by enrolment category. Confirm your specific situation with the NHI Administration before you leave (toll-free 0800-030-598).",
          ],
        },
        {
          heading: "Labour Insurance (勞保) and Labour Pension (勞退): resign, de-enrol, but lose nothing",
          paragraphs: [
            "When you resign before your working holiday, your employer handles your labour insurance de-enrolment automatically. There's nothing extra you need to do.",
            "A few things worth understanding:",
          ],
          bullets: [
            "Labour insurance seniority (年資) is preserved: your accumulated years of coverage are saved and continue accumulating the next time you join a labour insurance scheme in Taiwan.",
            "Your individual labour pension account is untouched: the 6% employer contributions in your personal Labour Pension account belong to you. The balance earns returns while you're away.",
            "Do not maintain coverage through an occupational union abroad: trying to keep labour insurance active via an occupational union while working or living long-term overseas is not permitted. The Bureau of Labor Insurance can retroactively cancel such coverage, and paid premiums are not refunded.",
          ],
        },
        {
          heading: "National Pension Insurance (國民年金): check if it applies to you",
          paragraphs: [
            "Once you leave labour insurance (upon resignation), Taiwanese citizens aged 25 or over who are not enrolled in agricultural insurance and have no other qualifying employment become subject to National Pension Insurance — even if they are about to go abroad.",
            "For a 1–2 year working holiday, most people simply continue paying the relatively low monthly National Pension premium (around NT$1,000/month), preserving their pension credits. Others de-enrol by transferring their household registration out (see below). Contact the Bureau of Labor Insurance (02-2396-1266) before departure to confirm your position.",
          ],
        },
        {
          heading: "Household registration (戶籍): what happens after 2 years abroad",
          paragraphs: [
            "Under Taiwan's Household Registration Act, if you remain abroad continuously for 2 years without returning, the local household administration office will process an overseas household de-registration (戶籍遷出) on your behalf.",
            "The knock-on effects of de-registration:",
          ],
          bullets: [
            "NHI coverage automatically ends from the de-registration date — and so do premium obligations.",
            "National Pension Insurance also terminates upon de-registration.",
            "Voting rights are suspended until you re-register your household on return.",
            "Reinstatement timeline: if you re-register within 2 years of de-registration, NHI coverage resumes immediately. If you return more than 4 years after de-registration, you must wait 6 months from re-registration before NHI kicks in again.",
          ],
        },
        {
          paragraphs: [
            "Most 1–2 year working holiday makers will not hit the 2-year threshold. But if you plan to extend your stay beyond 2 years — for example by securing a second-year or third-year visa — factor this in before you leave.",
          ],
        },
        {
          heading: "Banking and foreign exchange: set this up before you fly",
          paragraphs: [
            "Banking issues are the most common source of frustration in the first week abroad. Handle these before departure:",
          ],
          bullets: [
            "Activate online and mobile banking: make sure you can log in from overseas and that your OTP SMS number is the SIM card you're taking.",
            "Check your non-designated transfer limit: Taiwanese online banking caps transfers to non-saved accounts at roughly NT$10,000–30,000 per day by default. Raise the limit at a branch, or add your key overseas accounts to the saved list before you leave.",
            "Enable international ATM withdrawals: some debit and credit cards have overseas cash withdrawal disabled by default. Activate it via your bank's app or a quick phone call.",
            "Exchange strategy: carry a small amount of local currency for the first few days, but large-scale conversion is usually cheaper through a real-exchange-rate app like Tern than through the spread at a Taiwanese bank counter.",
            "Consider opening a foreign-currency savings account: if you plan to wire wages back to Taiwan, having a USD or AUD account ready in advance simplifies the process.",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "All the Taiwan admin above needs to be sorted before you leave — but once you land, the first practical step is having a local account that can receive your wages. Tern is a financial app built specifically for working holiday makers: open an account before you depart with just your passport and working holiday visa, no Australian address required.",
            "Once your account is open, you can top it up from your Taiwanese bank account at the real mid-market exchange rate — no wide bank spreads. Use your Tern card for ATM withdrawals and everyday spending without worrying about overseas transaction fees.",
            "Tern is currently in early access. If you're heading off soon, register your interest to get account access ahead of your departure date.",
          ],
        },
      ],
      faq: [
        {
          q: "Do I still need to pay NHI premiums while I'm on a working holiday abroad?",
          a: "Yes — if you keep your household registration in Taiwan. The old suspension system was abolished in December 2024. Set up automatic premium payments before you leave so you don't fall into arrears. Your NHI coverage remains active, and you can use it the moment you're back in Taiwan with no waiting period.",
        },
        {
          q: "What happens to my labour insurance seniority and pension when I resign?",
          a: "Neither is lost. Your labour insurance seniority is frozen in place and resumes accumulating when you re-enter the scheme after returning to work in Taiwan. Your personal labour pension account balance is your property and continues earning returns while you're away.",
        },
        {
          q: "What's the smartest way to handle money for a working holiday?",
          a: "Raise your online banking transfer limits and activate international ATM access before you leave. For ongoing transfers, an app that converts at the real exchange rate (like Tern) typically saves far more than the mid-rate markup on traditional bank remittances. Aim to have your destination-country account set up before you depart so your first payday isn't delayed.",
        },
      ],
    },
  },
};
