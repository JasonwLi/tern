import type { Locale } from "@/lib/i18n/config";

export interface ContentUi {
  guidesNav: string;
  blogNav: string;
  guidesTitle: string;
  guidesIntro: string;
  blogTitle: string;
  blogIntro: string;
  readMore: string;
  minRead: string; // contains {n}
  backToGuides: string;
  backToBlog: string;
  related: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  home: string;
  sourcesTitle: string;
  disclaimer: string;
}

export const contentUi: Record<Locale, ContentUi> = {
  en: {
    guidesNav: "Guides",
    blogNav: "Blog",
    guidesTitle: "Working holiday guides",
    guidesIntro: "Practical, no-nonsense guides to money, tax and visas on your working holiday.",
    blogTitle: "The Tern blog",
    blogIntro: "Tips and deep-dives on making your money go further on a working holiday.",
    readMore: "Read more",
    minRead: "{n} min read",
    backToGuides: "All guides",
    backToBlog: "All posts",
    related: "Keep reading",
    ctaTitle: "Get sorted before you land",
    ctaText: "Tern is the neobank built for working holiday life — join the waitlist.",
    ctaButton: "Join the waitlist",
    home: "Home",
    sourcesTitle: "Sources",
    disclaimer: "This guide is general information, not financial or migration advice. Rules and figures change — always check the official sources above.",
  },
  es: {
    guidesNav: "Guías",
    blogNav: "Blog",
    guidesTitle: "Guías para working holiday",
    guidesIntro: "Guías prácticas y al grano sobre dinero, impuestos y visas en tu working holiday.",
    blogTitle: "El blog de Tern",
    blogIntro: "Consejos y análisis para aprovechar mejor tu dinero en el working holiday.",
    readMore: "Leer más",
    minRead: "{n} min de lectura",
    backToGuides: "Todas las guías",
    backToBlog: "Todas las entradas",
    related: "Sigue leyendo",
    ctaTitle: "Llega con todo resuelto",
    ctaText: "Tern es el neobanco hecho para la vida working holiday — únete a la lista de espera.",
    ctaButton: "Únete a la lista de espera",
    home: "Inicio",
    sourcesTitle: "Fuentes",
    disclaimer: "Esta guía es información general, no asesoramiento financiero ni migratorio. Las normas y cifras cambian — consulta siempre las fuentes oficiales indicadas arriba.",
  },
  ja: {
    guidesNav: "ガイド",
    blogNav: "ブログ",
    guidesTitle: "ワーホリ ガイド",
    guidesIntro: "ワーホリのお金・税金・ビザについての実用的なガイド。",
    blogTitle: "Tern ブログ",
    blogIntro: "ワーホリでお金を賢く使うためのヒントと詳しい解説。",
    readMore: "続きを読む",
    minRead: "約{n}分で読めます",
    backToGuides: "すべてのガイド",
    backToBlog: "すべての記事",
    related: "あわせて読みたい",
    ctaTitle: "出発前に、お金の準備を",
    ctaText: "Ternはワーホリのために作られたネオバンク。ウェイトリストに登録しよう。",
    ctaButton: "ウェイトリストに登録",
    home: "ホーム",
    sourcesTitle: "出典",
    disclaimer: "このガイドは一般的な情報提供を目的としており、財務・移住に関するアドバイスではありません。制度や数値は変更されることがあります。必ず上記の公式情報源をご確認ください。",
  },
  ko: {
    guidesNav: "가이드",
    blogNav: "블로그",
    guidesTitle: "워홀 가이드",
    guidesIntro: "워홀의 돈, 세금, 비자에 대한 실용적인 가이드.",
    blogTitle: "Tern 블로그",
    blogIntro: "워홀에서 돈을 더 똑똑하게 쓰는 팁과 심층 가이드.",
    readMore: "더 보기",
    minRead: "{n}분 분량",
    backToGuides: "전체 가이드",
    backToBlog: "전체 글",
    related: "이어 읽기",
    ctaTitle: "출발 전에 준비 끝내기",
    ctaText: "Tern은 워홀을 위해 만든 네오뱅크예요. 웨이팅리스트에 등록하세요.",
    ctaButton: "웨이팅리스트 등록",
    home: "홈",
    sourcesTitle: "출처",
    disclaimer: "이 가이드는 일반적인 정보 제공을 목적으로 하며, 금융 또는 이민 관련 전문 조언이 아닙니다. 규정과 수치는 변경될 수 있으니 반드시 위의 공식 출처를 확인하세요.",
  },
  "zh-TW": {
    guidesNav: "指南",
    blogNav: "部落格",
    guidesTitle: "打工度假指南",
    guidesIntro: "關於打工度假金錢、稅務與簽證的實用指南。",
    blogTitle: "Tern 部落格",
    blogIntro: "讓你的打工度假預算花得更聰明的技巧與深度文章。",
    readMore: "閱讀更多",
    minRead: "閱讀時間約 {n} 分鐘",
    backToGuides: "所有指南",
    backToBlog: "所有文章",
    related: "繼續閱讀",
    ctaTitle: "出發前先搞定錢的事",
    ctaText: "Tern 是為打工度假打造的數位銀行，立即加入候補名單。",
    ctaButton: "加入候補名單",
    home: "首頁",
    sourcesTitle: "資料來源",
    disclaimer: "本指南僅供一般資訊參考，不構成財務或移民建議。相關規定與數據可能隨時變更，請務必查閱上方的官方來源。",
  },
};
