import type { Article } from "../types";

export const article: Article = {
  slug: "korea-departure-checklist-working-holiday",
  kind: "guide",
  date: "2026-06-08",
  emoji: "🪙",
  accent: "bg-lime-300",
  readMinutes: 7,
  related: [
    "bank-account-working-holiday-australia",
    "working-holiday-tax-refund-australia",
  ],
  sources: [
    {
      label: "국민연금공단 — 납부예외 안내",
      url: "https://www.nps.or.kr/pnsinfo/ntpsklg/getOHAF0084M0.do",
    },
    {
      label: "국민건강보험공단 — 장기체류 재외국민 건강보험 적용기준",
      url: "https://www.nhis.or.kr/lm/lmxsrv/law/lawDetail.do?SEQ=41&LAWGROUP=1",
    },
    {
      label: "찾기쉬운 생활법령정보 — 급여정지 또는 납부예외 신청",
      url: "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=699&ccfNo=2&cciNo=6&cnpClsNo=1",
    },
  ],
  i18n: {
    ko: {
      title: "워홀 출국 전 한국에서 꼭 정리할 것들",
      description:
        "국민연금·건강보험 정지, 공동인증서·OTP, 휴대폰 번호 유지까지 — 워홀 출발 전 체크리스트 총정리.",
      excerpt:
        "국민연금 납부예외부터 은행 해외 설정, 휴대폰 번호 유지 이유까지. 워킹홀리데이 출발 전 한국에서 꼭 처리해야 할 항목만 모았습니다.",
      sections: [
        {
          paragraphs: [
            "워킹홀리데이 비자를 받고 출국일만 기다리다 보면 '현지 준비'에만 신경 쓰기 쉬워요. 하지만 한국 쪽을 정리하지 않고 떠나면 매달 빠져나가는 공과금, 인증 오류로 막히는 인터넷뱅킹, 카카오 인증이 안 되는 상황 등 예상치 못한 불편이 생깁니다. 출발 2~4주 전이 가장 적기입니다. 아래 항목을 순서대로 처리해두면 현지에서 훨씬 편안하게 생활할 수 있어요.",
          ],
        },
        {
          heading: "국민연금: 납부예외 신청",
          paragraphs: [
            "장기 해외 체류로 국내 소득이 없는 경우, 국민연금 보험료를 일시 정지(납부예외)할 수 있습니다. 워홀 기간 동안 한국에서 별도 소득이 없다면 대부분 해당됩니다.",
            "납부예외 기간은 가입 기간에서 제외되어 나중에 받을 연금액이 줄어들 수 있습니다. 귀국 후 '추후납부(추납)' 제도를 통해 예외 기간에 해당하는 보험료를 일괄 납부해 가입 기간을 복원할 수 있으니, 장기적으로 연금을 고려하고 있다면 귀국 후 추납을 검토해보세요.",
          ],
          bullets: [
            "신청 방법: '내 곁에 국민연금' 앱, 국민연금공단 홈페이지(nps.or.kr), 전화(1355), 팩스, 지사 방문",
            "필요 서류: 여권 사본 (출국 사실 확인 가능한 것)",
            "신청 시기: 사유 발생일이 속하는 달의 다음 달 15일까지가 원칙이나, 출국 전 미리 신청해두는 것이 편리",
            "귀국 시 자동 해제되며, 귀국 후 추납으로 기간 복원 가능",
          ],
        },
        {
          heading: "건강보험: 보험료 급여정지 신청",
          paragraphs: [
            "3개월 이상 해외 체류가 예정되어 있으면 건강보험 급여정지를 신청해 그 기간 동안 보험료를 면제받을 수 있습니다. 워홀은 통상 1년 이상이므로 대부분 해당됩니다.",
            "출국 전에 공단 지사 방문 또는 팩스·우편으로 신청할 수 있고, 출국 후에는 1577-1000으로 전화해 인적사항을 확인하면 출입국 내역을 전산 조회해 바로 처리해줍니다 — 별도 서류 제출이 필요 없습니다.",
            "2025년 7월 이후부터는 귀국(입국) 시 자동으로 급여정지가 해제되어 입국 다음 날부터 보험료가 다시 부과됩니다. 잠깐 일시 귀국할 경우 주의가 필요하며, 재출국 후 다시 3개월 이상 체류할 예정이라면 재신청이 필요할 수 있습니다.",
          ],
          bullets: [
            "지역가입자: 3개월 이상 국외 체류 시 신청 가능",
            "직장가입자: 업무 외 목적(워홀 포함)은 3개월 이상 기준 적용 — 회사와 사전 확인 권장",
            "일시 귀국 시: 1개월 미만 체류 + 진료 없으면 보험료 미부과; 진료를 받으면 1개월분 부과",
            "문의: 1577-1000 또는 nhis.or.kr",
          ],
        },
        {
          heading: "은행: 해외에서도 막히지 않게",
          paragraphs: [
            "해외에 나가면 공동인증서(구 공인인증서) 또는 금융인증서가 없어서, 또는 OTP가 없어서 인터넷뱅킹을 못 쓰는 상황이 자주 생깁니다. 출발 전에 한 번에 정리해두세요.",
          ],
          bullets: [
            "공동인증서/금융인증서: 유효기간을 확인하고, 만료일이 워홀 기간 안에 오면 미리 갱신. 이동식 저장장치(USB)에 백업해두면 해외에서도 유용",
            "OTP: 실물 OTP 카드 또는 디지털 OTP를 사전 발급. 해외 IP에서 큰 금액을 이체할 때 반드시 필요",
            "비대면 이체 한도: 해외에서 거액을 보낼 일이 생길 수 있으니, 출국 전 인터넷뱅킹 1회·1일 이체 한도를 미리 올려두기",
            "해외 체크카드 결제 설정: 주거래 체크카드의 해외 결제 기능이 활성화돼 있는지 확인. 일부 카드는 앱에서 직접 ON/OFF 가능",
            "해외 송금 수취 계좌 등록: 현지 계좌를 개설한 후 국내 은행 앱에서 해외 송금 수취 계좌로 등록해두면 본인·가족이 한국에서 보낼 때 편리",
            "휴면계좌 방지: 장기 미사용 계좌는 휴면 처리될 수 있으니 출국 전 소액 입출금으로 최근 거래 이력을 남겨두기",
          ],
        },
        {
          heading: "휴대폰 번호: 해지보다 유지가 훨씬 유리",
          paragraphs: [
            "한국 번호를 해지하면 인터넷뱅킹 SMS 인증, 카카오 인증(카카오페이 포함), 각종 관공서 본인확인이 모두 막힙니다. 현지에서 갑자기 공동인증서를 재발급받거나 은행 업무를 처리하려 해도 국내 번호가 없으면 진행이 안 되는 경우가 많아요.",
            "요금 부담이 걱정된다면 '번호 유지(일시 정지)' 서비스를 활용하세요. 이통 3사(SKT·KT·LGU+) 및 알뜰폰 MVNO 대부분이 월 최소 비용으로 번호를 살려두는 장기 정지 옵션을 제공합니다. 해지 후 새 번호를 받는 비용과 불편함을 생각하면 유지가 압도적으로 유리합니다.",
          ],
          bullets: [
            "장기 정지 신청: 통신사 앱 또는 고객센터에서 신청 가능 (통상 최대 3년까지 유지 가능, 통신사마다 상이)",
            "알뜰폰 사용자: 통신사에 따라 정지 조건이 다르므로 출국 전 확인",
            "카카오 인증 미리 설정: 해외에서 카카오 앱은 데이터로 이용 가능하지만, 번호 인증은 국내 번호가 있어야 함",
          ],
        },
        {
          heading: "워홀 자금 준비: 환전과 첫 송금",
          paragraphs: [
            "현지 도착 직후를 위해 소액(한화 약 30~50만 원 상당)은 공항이나 시중 환전소에서 미리 현금으로 환전해 가는 것이 안전합니다. 나머지 목돈은 현지 계좌를 개설한 후 해외 송금으로 보내는 것이 훨씬 유리합니다.",
            "환전 타이밍은 환율에 따라 달라지지만, 환율 우대 혜택이 있는 은행 앱이나 핀테크 서비스를 활용하면 공항 환전보다 수수료를 크게 줄일 수 있어요. 가능하면 출국 며칠 전에 환율 알림을 설정해두고 유리한 시점에 환전하세요.",
          ],
          bullets: [
            "공항 환전: 급할 때 쓰는 최후 수단 — 수수료가 가장 비싼 편",
            "은행 앱 환전 후 현지 ATM 출금: 해외 ATM 수수료가 별도 발생할 수 있으니 사전 확인",
            "현지 계좌로 직접 해외 송금: 수수료가 가장 낮은 방법이지만 계좌 개설 후에 가능",
            "호주 도착 첫날 현금: 100~200 AUD 상당을 미리 준비해두면 SIM 구매, 교통비 등에 유용",
          ],
        },
        {
          heading: "Tern이 도와드릴 수 있는 것",
          paragraphs: [
            "Tern은 워킹홀리데이를 위해 만들어진 금융 서비스입니다. 출국 전 한국에서 현지 계좌를 미리 개설해두면, 도착하자마자 급여 계좌로 활용할 수 있어요. 한국에서 직접 실시간 환율로 충전이 가능하고, 해외 ATM 수수료도 없습니다.",
            "아직 정식 출시 전이지만, 워홀러들이 가장 불편해하는 '첫날 정착' 문제를 없애는 것이 Tern의 목표입니다. 웨이팅 리스트에 등록해두시면 출시 소식을 가장 먼저 받아보실 수 있어요.",
          ],
        },
      ],
      faq: [
        {
          q: "국민연금 납부예외를 신청하지 않으면 해외에서도 보험료가 계속 빠져나가나요?",
          a: "네, 별도 신청을 하지 않으면 계속 부과됩니다. 국내 소득이 없는 해외 체류 기간에는 납부예외를 신청해 보험료를 멈출 수 있어요. '내 곁에 국민연금' 앱이나 nps.or.kr 홈페이지, 전화(1355)로 신청 가능합니다.",
        },
        {
          q: "건강보험 급여정지를 신청하지 않으면 어떻게 되나요?",
          a: "해외 체류 3개월이 지나면 출입국 기록을 바탕으로 자동 정지 처리될 수도 있지만, 미리 신청해두는 것이 훨씬 확실합니다. 출국 후 1577-1000으로 전화하면 출입국 내역을 전산 조회해 바로 처리해줍니다. 귀국(입국) 시에는 2025년 7월부터 자동 해제되어 보험료가 다시 부과되니 참고하세요.",
        },
        {
          q: "한국 휴대폰 번호를 해지하고 현지 번호로만 써도 되지 않나요?",
          a: "금융 서비스 관점에서는 권장하지 않습니다. 공동인증서 재발급, 카카오페이, 대부분의 국내 은행 OTP 인증이 한국 번호를 기반으로 동작합니다. 현지 번호만 있으면 갑작스러운 금융 업무 처리에서 막힐 가능성이 높아요. 월 최소 비용의 번호 유지(장기 정지) 서비스 활용을 강력히 권장합니다.",
        },
      ],
    },
    en: {
      title: "Korea-side admin checklist before your working holiday",
      description:
        "National pension pause, health insurance suspension, banking setup, and phone number — everything to sort in Korea before you fly out for your working holiday.",
      excerpt:
        "From pausing your National Pension to keeping your Korean phone number active, here's the Korea-side admin list working holiday makers often miss before departure.",
      sections: [
        {
          paragraphs: [
            "When your working holiday visa comes through, it's easy to focus entirely on what you need at the destination and forget the loose ends back in Korea. Leaving without sorting your National Pension, health insurance, or banking setup can mean ongoing charges, locked internet banking, or failed authentication when you need it most. The ideal window is two to four weeks before departure — here's what to work through.",
          ],
        },
        {
          heading: "National Pension: apply for a contribution exemption",
          paragraphs: [
            "If you have no domestic income while living abroad, you can apply to pause your National Pension contributions (납부예외). For most working holiday makers who won't be earning a Korean salary during their trip, this applies automatically.",
            "Exempted periods are excluded from your total contribution record, which reduces the pension you will eventually receive. However, Korea's 'retroactive payment' (추납) scheme lets you pay back the missed months after you return and restore those years to your record — worth considering if you plan to draw a pension in later life.",
          ],
          bullets: [
            "How to apply: 'My National Pension' app (내 곁에 국민연금), nps.or.kr website, phone (1355), fax, or branch visit",
            "Required document: copy of your passport showing departure",
            "Timing: officially by the 15th of the month after the exemption reason arises — applying before departure is simplest",
            "The exemption ends automatically when you return to Korea",
          ],
        },
        {
          heading: "Health insurance: suspend your premium",
          paragraphs: [
            "If you plan to be abroad for three months or more, you can apply to suspend your National Health Insurance (급여정지) and stop paying premiums for that period. A working holiday is typically a year or longer, so most people qualify.",
            "You can apply before departure at a local NHIS branch, or after leaving by calling 1577-1000 — the agent will check departure records electronically and process it immediately, no paperwork required.",
            "Since July 2025, returning to Korea automatically lifts the suspension the day after you arrive and premiums resume. If you make a brief visit home and then leave again for more than three months, you will need to reapply.",
          ],
          bullets: [
            "Locally enrolled (지역가입자): eligible after three months abroad",
            "Employer-insured (직장가입자): working holiday trips fall under the three-month rule — confirm with your employer before leaving",
            "Short home visits: no premium charged if you stay under one month and don't use medical services; one month charged if you receive medical treatment",
            "Contact: 1577-1000 or nhis.or.kr",
          ],
        },
        {
          heading: "Banking: set up for overseas use before you fly",
          paragraphs: [
            "Many Korean expats abroad find their internet banking locked because their certificate has expired, their OTP is missing, or a transfer limit is too low. Sort the following before departure.",
          ],
          bullets: [
            "Digital certificate (공동인증서 / 금융인증서): check the expiry date — renew it now if it falls within your working holiday period; back it up to a USB drive",
            "OTP: get a hardware OTP card or activate a digital OTP before you leave; large overseas transfers often require it",
            "Transfer limits: raise your daily and per-transaction internet banking limit so you can move larger sums if needed",
            "Overseas card payments: confirm your debit card has foreign payments enabled — many Korean bank apps have an on/off toggle",
            "Register your destination account: once you open a local account abroad, register it as a recipient in your Korean banking app to make top-ups easy",
            "Prevent dormant account status: make a small transaction on any inactive accounts before departure to keep them active",
          ],
        },
        {
          heading: "Phone number: keep it, don't cancel it",
          paragraphs: [
            "Cancelling your Korean number cuts off SMS authentication for internet banking, KakaoTalk verification (including Kakao Pay), and most government identity checks. If you later need to reissue a certificate or handle banking remotely, a Korean number is often a hard requirement.",
            "All three major carriers (SKT, KT, LGU+) and most MVNOs offer a long-term suspension option that keeps your number alive for a small monthly fee — typically far cheaper than the hassle of re-acquiring a number after your trip.",
          ],
          bullets: [
            "Long-term suspension: apply through your carrier's app or customer service (most allow up to three years; terms vary by carrier)",
            "MVNO users: conditions differ by provider — check before departure",
            "Kakao setup: the Kakao app works on Wi-Fi and data abroad, but number-based authentication still requires a live Korean number",
          ],
        },
        {
          heading: "Money prep: exchanging and sending funds",
          paragraphs: [
            "Bring a small amount of foreign cash — equivalent to roughly KRW 300,000–500,000 — for the first day or two (SIM card, transport, groceries). Exchange this before flying, since airport kiosks charge the highest rates.",
            "For larger sums, wait until you have a local account and transfer from Korea directly. Setting up a rate alert a few days before you leave can help you exchange at a better moment rather than paying whatever rate is on the day.",
          ],
          bullets: [
            "Airport exchange: convenient but expensive — avoid for large amounts",
            "Bank app exchange + overseas ATM withdrawal: check your bank's overseas ATM fee before relying on this",
            "Direct international transfer to your local account: lowest-cost option, available once your local account is open",
            "First-day cash in Australia: 100–200 AUD in cash is useful for a SIM card and transport on arrival",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Tern is a financial service built for working holiday makers. You can open your destination account from Korea before you leave, so you arrive with a real account number ready to hand to your employer on day one. Top up from Korea at the live exchange rate, and use your card overseas with no ATM fees.",
            "Tern is pre-launch — but eliminating first-day settlement friction is exactly the problem we are building to solve. Join the waiting list and we will let you know as soon as we are live.",
          ],
        },
      ],
      faq: [
        {
          q: "Do National Pension contributions keep coming out if I don't apply for an exemption?",
          a: "Yes — contributions continue unless you actively apply for an exemption (납부예외). If you have no Korean income while abroad, you are eligible to pause. Apply through the 'My National Pension' app, nps.or.kr, or by calling 1355.",
        },
        {
          q: "What happens to health insurance if I don't apply for suspension?",
          a: "Premiums will continue to be charged. After three months abroad, the NHIS may automatically suspend based on departure records, but it is more reliable to apply yourself. Calling 1577-1000 after you leave is the quickest route — no documents needed, just your ID details. Note that since July 2025, returning to Korea automatically lifts the suspension and restarts premiums.",
        },
        {
          q: "Can I just cancel my Korean number and use a local SIM?",
          a: "From a purely social standpoint, yes — but not recommended if you need to manage Korean finances remotely. Certificate reissuance, Kakao Pay, and most Korean bank OTP flows require a live Korean phone number. A long-term number suspension costs a small monthly fee and saves a lot of headaches; cancelling and starting again later is far more disruptive.",
        },
      ],
    },
  },
};
