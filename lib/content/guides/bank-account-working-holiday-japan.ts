import type { Article } from "../types";

export const article: Article = {
  slug: "bank-account-working-holiday-japan",
  kind: "guide",
  emoji: "🇯🇵",
  accent: "bg-coral-300",
  readMinutes: 7,
  sources: [
    {
      label: "Japan Post Bank — English information",
      url: "https://www.jp-bank.japanpost.jp/en_index.html",
    },
    {
      label: "Ministry of Foreign Affairs of Japan — Working Holiday Programmes",
      url: "https://www.mofa.go.jp/j_info/visit/w_holiday/index.html",
    },
  ],
  i18n: {
    en: {
      title: "Opening a bank account in Japan on a working holiday visa",
      description:
        "Everything WHV holders need to know about banking in Japan — the 6-month rule, Japan Post Bank, residence cards, address registration, hanko, and getting your salary paid by bank transfer.",
      excerpt:
        "No Japanese bank account means no salary — and most banks won't talk to you for the first six months. Here's how to get sorted from day one.",
      sections: [
        {
          paragraphs: [
            "Banking in Japan is one of the steepest practical hurdles on a working holiday visa. Almost every employer pays salaries by bank transfer, so without an account you simply cannot get paid. The catch: most Japanese banks enforce a 6-month residency requirement before they'll open an account for a foreigner. Add a largely Japanese-language application process and the occasional demand for a personal seal, and it's easy to feel stuck. Knowing the right order of steps — and the one bank that bends the rules for new arrivals — makes all the difference.",
          ],
        },
        {
          heading: "What you need before any bank will talk to you",
          paragraphs: [
            "Two documents are non-negotiable regardless of which bank you approach. First, your residence card (在留カード, zairyū kādo), which is issued at the airport immigration desk when you enter Japan on a long-stay visa. Second, a registered address — you must visit your local city or ward office (市区町村役所) and complete jūmin-tōroku (住民登録), the resident registration process. Banks will not accept a hotel or hostel address; you need a real residential address on record with the municipality.",
            "The resident registration process is free and usually takes under an hour. Bring your passport and residence card. Once registered, you receive a resident registration certificate (住民票, jūminhyō) — some banks ask for this as supplementary address proof. Getting this done within the first week of arrival is essential; without it, no bank account can be opened.",
          ],
          bullets: [
            "Residence card (在留カード) — issued at the airport; carry it at all times",
            "Registered address (住民登録) — register at your local city or ward office within 14 days of moving in",
            "Resident registration certificate (住民票) — obtain a copy to bring to the bank",
            "Passport — required by all banks alongside the residence card",
            "Phone number — a Japanese SIM or a number where you can be reached; required for account setup",
          ],
        },
        {
          heading: "Japan Post Bank: the realistic first account",
          paragraphs: [
            "Japan Post Bank (ゆうちょ銀行, Yūcho Ginkō) is the standard recommendation for working holiday visa holders because it is known to accept shorter-residency customers and has English-language support materials on its website. Post offices are found even in small towns, and the ATM network is one of the most extensive in the country — convenient for cash withdrawals anywhere in Japan.",
            "To open a Yūcho account, visit any post office with banking services (郵便局), bring your residence card, passport, and registered address details, and fill in the application forms. Staff at larger post offices in cities sometimes have basic English ability, but bringing a printed copy of your address in Japanese script is strongly recommended. The account typically opens the same day or within a week, and you receive a cash card (キャッシュカード) for ATM use plus a bank book (通帳).",
          ],
          bullets: [
            "Japan Post Bank (ゆうちょ銀行) — most WHV-friendly major bank; accepts shorter-residency applicants",
            "Bring residence card, passport, and registered address details",
            "Application forms are in Japanese — prepare your address written in Japanese beforehand",
            "Larger post offices in major cities are more experienced with foreign applicants",
            "You receive a cash card and a passbook; internet banking can be set up separately",
          ],
        },
        {
          heading: "The 6-month rule and the language barrier",
          paragraphs: [
            "Most major Japanese banks — including Mitsubishi UFJ (MUFG), Sumitomo Mitsui (SMBC), and Mizuho — have an informal policy of requiring at least 6 months of residence in Japan before opening an account for a non-permanent resident. This is not always printed in official policy, but it is widely applied in practice and reported consistently by working holiday makers. If you are turned away, it is usually for this reason rather than anything about your visa type.",
            "The language barrier is the other major hurdle. Application forms at almost all Japanese banks are in Japanese only. Some branches in major cities have multilingual staff, but this is not guaranteed. A hanko (判子 or 印鑑), the personal seal used in place of a signature in Japan, is requested by some banks — though many now accept a handwritten signature instead. If you plan to stay long-term, having a simple hanko made (available cheaply at 100-yen shops or stationery stores) can smooth many administrative processes beyond just banking.",
          ],
          bullets: [
            "6-month residency rule — applied by most major banks (MUFG, SMBC, Mizuho); Japan Post Bank is the main exception",
            "Forms are almost entirely in Japanese — use a translation app or ask a Japanese-speaking contact for help",
            "Hanko (判子) — some banks still require a personal seal; signatures are increasingly accepted",
            "Simple hanko can be made at 100-yen shops (百円ショップ) for a few hundred yen",
            "If turned away, try a different branch or wait until you have 3–6 months of residence documented",
          ],
        },
        {
          heading: "Getting your salary paid",
          paragraphs: [
            "In Japan, virtually all employers pay salaries by bank transfer (振込, furikomi) directly to your bank account. Cash wages are rare and largely limited to very informal or day-labour situations. This means that without a Japanese bank account, you cannot receive your salary — it is not a matter of convenience but a practical requirement before you can start most jobs.",
            "When you give your employer your bank details, you will typically need to provide the bank name, branch name, account type (普通預金, futsu yokin — ordinary savings account), account number, and the name on the account exactly as it appears at the bank. Make sure the name matches your residence card exactly to avoid transfer errors. Credit cards are generally not available to working holiday visa holders, so your bank account and cash card will be your primary financial tools throughout your stay.",
          ],
          bullets: [
            "Salary is almost always paid by bank transfer (振込) — a Japanese account is mandatory, not optional",
            "Provide your employer: bank name, branch name, account type (普通預金), account number, and account holder name",
            "Name on account must match your residence card exactly",
            "Credit cards are generally unavailable to WHV holders — plan to rely on your debit/cash card",
            "Set up internet banking early so you can check transfers and manage your account online",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Tern lets you open an account before you even board the plane to Japan — all you need is your passport and working holiday visa approval. When you land and head to the post office or ward office, your Tern account details are already in your pocket, ready to share with your employer from day one. Top up from your home currency at the real mid-market rate, swap currencies at a flat fee, and use your card at Japanese ATMs with no withdrawal fees. No waiting six months, no Japanese-language forms, no hanko required.",
          ],
        },
      ],
      faq: [
        {
          q: "Can foreigners open a bank account in Japan on a working holiday visa?",
          a: "Yes, but options are limited in the first few months. Most major Japanese banks apply an informal 6-month residency requirement, which catches most working holiday visa holders off guard. Japan Post Bank (ゆうちょ銀行) is the standard first option because it is more accepting of shorter-residency applicants. You will still need a residence card and a registered address before any bank will process your application.",
        },
        {
          q: "Do I need a hanko to open a bank account in Japan?",
          a: "Not always. Many banks, including Japan Post Bank, now accept a handwritten signature in place of a personal seal. However, some branches — particularly outside major cities — may still ask for a hanko. If you plan to be in Japan for several months, having a simple hanko made is inexpensive (a few hundred yen at a 100-yen shop) and useful for a range of administrative tasks beyond banking. Check with your specific branch before your visit.",
        },
        {
          q: "What happens if I can't open a Japanese bank account straight away?",
          a: "If you are turned away by major banks due to the 6-month rule, Japan Post Bank remains your best bet. In the meantime, a multi-currency account like Tern lets you receive money, make payments, and manage your finances without a Japanese bank account. Once you have 3–6 months of residence documented, you can approach MUFG, SMBC, or Mizuho again and open an account with a fuller range of services.",
        },
      ],
    },
    es: {
      title: "Cómo abrir una cuenta bancaria en Japón con visa de working holiday",
      description:
        "Todo lo que necesitás saber sobre el sistema bancario en Japón con visa ワーホリ — la regla de los 6 meses, Japan Post Bank, tarjeta de residencia, registro domiciliario, hanko y cómo cobrar el sueldo.",
      excerpt:
        "Sin cuenta bancaria en Japón no podés cobrar — y la mayoría de los bancos no te atienden los primeros seis meses. Así te organizás desde el primer día.",
      sections: [
        {
          paragraphs: [
            "Abrir una cuenta bancaria es uno de los mayores desafíos prácticos al llegar a Japón con una visa de working holiday. Casi todos los empleadores pagan los sueldos por transferencia bancaria, así que sin una cuenta directamente no podés cobrar. El problema: la mayoría de los bancos japoneses exigen al menos 6 meses de residencia antes de abrirte una cuenta. Sumate los formularios casi siempre en japonés y, en algunos casos, la exigencia del sello personal, y es fácil sentirse perdido. Conocer el orden correcto de los pasos — y el banco que tiene más flexibilidad para los recién llegados — cambia todo.",
          ],
        },
        {
          heading: "Lo que necesitás antes de hablar con cualquier banco",
          paragraphs: [
            "Dos documentos son indispensables sin importar a qué banco vayas. Primero, tu tarjeta de residencia (在留カード, zairyū kādo), que te entregan en el control migratorio del aeropuerto cuando entrás a Japón con visa de larga estadía. Segundo, un domicilio registrado: tenés que ir a la oficina municipal o de barrio (市区町村役所) y completar el jūmin-tōroku (住民登録), el trámite de empadronamiento. Los bancos no aceptan hoteles u hostels; necesitás una dirección residencial registrada en el municipio.",
            "El trámite de empadronamiento es gratuito y suele tardar menos de una hora. Llevá tu pasaporte y la tarjeta de residencia. Una vez registrado, recibís un certificado de residencia (住民票, jūminhyō) — algunos bancos lo piden como comprobante adicional de domicilio. Hacer este trámite durante la primera semana de llegada es clave; sin él, ningún banco puede abrirte una cuenta.",
          ],
          bullets: [
            "Tarjeta de residencia (在留カード) — la entrega migración en el aeropuerto; llevala siempre con vos",
            "Domicilio registrado (住民登録) — registrate en la oficina municipal dentro de los 14 días de mudarte",
            "Certificado de residencia (住民票) — sacá una copia para llevar al banco",
            "Pasaporte — lo exigen todos los bancos junto con la tarjeta de residencia",
            "Número de teléfono — una SIM japonesa o un número de contacto; lo necesitás para abrir la cuenta",
          ],
        },
        {
          heading: "Japan Post Bank: la primera cuenta realista",
          paragraphs: [
            "Japan Post Bank (ゆうちょ銀行, Yūcho Ginkō) es la recomendación estándar para los titulares de visa de working holiday porque acepta solicitantes con menos tiempo de residencia y tiene materiales de apoyo en inglés en su sitio web. Hay sucursales de correos en incluso en pueblos chicos, y la red de cajeros automáticos es una de las más extensas del país.",
            "Para abrir una cuenta en Yūcho, visitá cualquier correo con servicios bancarios (郵便局), llevá tu tarjeta de residencia, pasaporte y datos de tu domicilio registrado, y completá los formularios de solicitud. El personal de los correos más grandes en ciudades a veces tiene conocimientos básicos de inglés, pero se recomienda llevar una copia impresa de tu dirección en japonés. La cuenta generalmente se abre el mismo día o en el plazo de una semana, y recibís una tarjeta de cajero (キャッシュカード) y una libreta bancaria (通帳).",
          ],
          bullets: [
            "Japan Post Bank (ゆうちょ銀行) — el banco más flexible para titulares de visa de working holiday",
            "Llevá tarjeta de residencia, pasaporte y datos del domicilio registrado",
            "Los formularios están en japonés — preparate con tu dirección escrita en japonés",
            "Las sucursales grandes en ciudades tienen más experiencia con solicitantes extranjeros",
            "Recibís tarjeta de cajero y libreta; el banco en línea se configura por separado",
          ],
        },
        {
          heading: "La regla de los 6 meses y la barrera del idioma",
          paragraphs: [
            "La mayoría de los grandes bancos japoneses — entre ellos Mitsubishi UFJ (MUFG), Sumitomo Mitsui (SMBC) y Mizuho — aplican de manera informal un requisito de al menos 6 meses de residencia en Japón antes de abrir una cuenta a un residente no permanente. No siempre está escrito en la política oficial, pero se aplica ampliamente en la práctica. Si te rechazan, casi siempre es por esta razón y no por el tipo de visa.",
            "La barrera del idioma es el otro gran obstáculo. Los formularios en casi todos los bancos japoneses están únicamente en japonés. Algunas sucursales en grandes ciudades tienen personal multilingüe, pero no está garantizado. El hanko (判子 o 印鑑), el sello personal usado en lugar de la firma en Japón, lo exigen algunos bancos, aunque muchos ya aceptan una firma manuscrita. Si planeás quedarte un tiempo, hacerte un hanko simple (se consigue barato en tiendas de 100 yenes) puede simplificar muchos trámites más allá del banco.",
          ],
          bullets: [
            "Regla de los 6 meses — la aplican la mayoría de los grandes bancos; Japan Post Bank es la principal excepción",
            "Formularios casi totalmente en japonés — usá una app de traducción o pedile ayuda a alguien que hable japonés",
            "Hanko (判子) — algunos bancos todavía lo exigen; la firma manuscrita se acepta cada vez más",
            "Un hanko simple se hace en tiendas de 100 yenes (百円ショップ) por unos pocos cientos de yenes",
            "Si te rechazan, probá una sucursal diferente o esperá a tener 3 a 6 meses de residencia documentada",
          ],
        },
        {
          heading: "Cómo cobrar tu sueldo",
          paragraphs: [
            "En Japón, prácticamente todos los empleadores pagan los sueldos por transferencia bancaria (振込, furikomi) directamente a tu cuenta. El pago en efectivo es raro y se limita a situaciones muy informales o de trabajo por día. Esto significa que sin una cuenta bancaria japonesa no podés cobrar — no es una cuestión de comodidad, sino un requisito práctico antes de empezar la mayoría de los trabajos.",
            "Cuando le das tus datos bancarios al empleador, generalmente tenés que proporcionar el nombre del banco, el nombre de la sucursal, el tipo de cuenta (普通預金, futsu yokin — cuenta de ahorro ordinaria), el número de cuenta y el nombre en la cuenta exactamente como aparece en el banco. Asegurate de que el nombre coincida exactamente con tu tarjeta de residencia para evitar errores en las transferencias. Las tarjetas de crédito generalmente no están disponibles para los titulares de visa de working holiday, así que tu cuenta bancaria y tarjeta de cajero serán tus principales herramientas financieras.",
          ],
          bullets: [
            "El sueldo casi siempre se paga por transferencia (振込) — la cuenta japonesa es obligatoria, no opcional",
            "Proporcioná al empleador: nombre del banco, nombre de la sucursal, tipo de cuenta (普通預金), número de cuenta y nombre del titular",
            "El nombre en la cuenta debe coincidir exactamente con tu tarjeta de residencia",
            "Las tarjetas de crédito generalmente no están disponibles para titulares de visa de working holiday",
            "Configurá el banco en línea cuanto antes para controlar tus transferencias y gestionar la cuenta online",
          ],
        },
        {
          heading: "Cómo te ayuda Tern",
          paragraphs: [
            "Tern te permite abrir una cuenta antes de subir al avión rumbo a Japón — solo necesitás tu pasaporte y la aprobación de la visa de working holiday. Cuando llegás y vas al correo o a la oficina municipal, los datos de tu cuenta Tern ya están en tu bolsillo, listos para dárselos al empleador desde el primer día. Recargás desde tu moneda local al tipo de cambio real, cambiás divisas con una tarifa fija y usás tu tarjeta en cajeros automáticos en Japón sin comisiones de extracción. Sin esperar seis meses, sin formularios en japonés, sin hanko.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Los extranjeros pueden abrir una cuenta bancaria en Japón con visa de working holiday?",
          a: "Sí, pero las opciones son limitadas los primeros meses. La mayoría de los grandes bancos japoneses aplican un requisito informal de 6 meses de residencia, lo que toma por sorpresa a la mayoría de los titulares de visa de working holiday. Japan Post Bank (ゆうちょ銀行) es la primera opción estándar porque acepta solicitantes con menos tiempo de residencia. De todas formas, necesitás tarjeta de residencia y domicilio registrado antes de que cualquier banco procese tu solicitud.",
        },
        {
          q: "¿Necesito un hanko para abrir una cuenta bancaria en Japón?",
          a: "No siempre. Muchos bancos, incluido Japan Post Bank, ya aceptan una firma manuscrita en lugar del sello personal. Sin embargo, algunas sucursales — especialmente fuera de las grandes ciudades — pueden seguir pidiéndolo. Si vas a estar varios meses en Japón, hacerte un hanko simple es barato (unos pocos cientos de yenes en una tienda de 100 yenes) y útil para varios trámites más allá del banco. Consultá con la sucursal específica antes de ir.",
        },
        {
          q: "¿Qué hago si no puedo abrir una cuenta bancaria japonesa de inmediato?",
          a: "Si los grandes bancos te rechazan por la regla de los 6 meses, Japan Post Bank sigue siendo tu mejor opción. Mientras tanto, una cuenta multimoneda como Tern te permite recibir dinero, hacer pagos y gestionar tus finanzas sin necesidad de una cuenta bancaria japonesa. Una vez que tenés entre 3 y 6 meses de residencia documentada, podés volver a MUFG, SMBC o Mizuho y abrir una cuenta con una gama más completa de servicios.",
        },
      ],
    },
    ja: {
      title: "ワーホリビザで日本の銀行口座を開設する方法",
      description:
        "ワーホリ保有者のための日本の銀行口座完全ガイド — 6ヶ月ルール、ゆうちょ銀行、在留カード、住民登録、判子、給与振込の受け取り方まで徹底解説。",
      excerpt:
        "日本の銀行口座がなければ給与を受け取れません。多くの銀行が最初の6ヶ月は口座開設を断ります。初日から動ける方法を解説します。",
      sections: [
        {
          paragraphs: [
            "ワーキングホリデービザで日本に来たとき、最初にぶつかる実務的な壁が銀行口座の開設です。ほぼすべての雇用主が給与を銀行振込で支払うため、口座がなければそもそも給与を受け取れません。問題は、多くの日本の銀行が外国人の口座開設に6ヶ月以上の居住実績を求めていること。さらに、ほぼ日本語のみの申込書類、場合によっては判子の要求も重なります。手続きの正しい順番と、新規入国者に柔軟に対応してくれる銀行を知っておくことが、スムーズなスタートの鍵です。",
          ],
        },
        {
          heading: "どの銀行でも必要な書類を先に揃える",
          paragraphs: [
            "どの銀行に行くにしても、2つの書類は絶対に必要です。ひとつは在留カード（ざいりゅうカード）で、長期ビザで入国した際に空港の出入国審査で交付されます。もうひとつは住民登録済みの住所です。住まいが決まったら、最寄りの市区町村役所に行き、住民登録（じゅうみんとうろく）の手続きを行ってください。ホテルやホステルの住所は認められません。自治体に登録された正式な居住地が必要です。",
            "住民登録の手続きは無料で、通常1時間以内に完了します。パスポートと在留カードを持参してください。登録後に住民票（じゅうみんひょう）が発行されます。銀行によっては補足の住所証明として提出を求めることがあります。到着後1週間以内に済ませるのが理想です。これがなければ、どの銀行も口座開設を受け付けてくれません。",
          ],
          bullets: [
            "在留カード — 空港で交付される；常に携帯すること",
            "住民登録（住民登録） — 入居から14日以内に市区町村役所で手続きを行う",
            "住民票 — 銀行へ持参するためのコピーを取得しておく",
            "パスポート — 在留カードとともに全銀行で必要",
            "電話番号 — 日本のSIMまたは連絡可能な番号；口座開設時に必要",
          ],
        },
        {
          heading: "ゆうちょ銀行：現実的な最初の口座",
          paragraphs: [
            "ゆうちょ銀行（Japan Post Bank）は、ワーキングホリデービザ保有者に最も適した銀行として広く知られています。居住期間が短い申込者にも対応しており、英語のサポート資料もウェブサイトで公開されています。郵便局は小さな町にもあり、ATMネットワークは日本国内で最大級の規模を誇ります。",
            "ゆうちょ銀行の口座を開設するには、銀行業務を取り扱う郵便局（ゆうびんきょく）に行き、在留カード・パスポート・住民登録済みの住所を持参して申込書に記入します。大都市の大きな郵便局では基本的な英語が通じる場合もありますが、日本語で住所を書いたメモを準備しておくと安心です。口座は当日または1週間以内に開設され、ATM用のキャッシュカードと通帳が発行されます。",
          ],
          bullets: [
            "ゆうちょ銀行 — ワーホリに最も優しい大手銀行；居住期間が短い申込者にも対応",
            "在留カード、パスポート、住民登録済みの住所を持参する",
            "申込書は日本語 — 事前に日本語で住所を書いたメモを用意しておく",
            "大都市の大きな郵便局は外国人申込者への対応に慣れている",
            "キャッシュカードと通帳が発行され、ネットバンキングは別途設定が必要",
          ],
        },
        {
          heading: "6ヶ月ルールと言語の壁",
          paragraphs: [
            "三菱UFJ（MUFG）、三井住友（SMBC）、みずほといった日本の主要銀行のほとんどは、非永住外国人の口座開設に際し、非公式ながら「日本在住6ヶ月以上」を求める慣行があります。公式方針として明記されているわけではありませんが、実際には広く適用されており、ワーホリ参加者からの報告でも一貫しています。断られる場合、多くはビザの種類ではなくこのルールが理由です。",
            "もうひとつの大きな壁が言語です。ほぼすべての日本の銀行の申込書類は日本語のみです。大都市の支店には多言語対応スタッフがいる場合もありますが、保証はありません。判子（はんこ／印鑑）、つまり日本で署名の代わりに使う個人の印鑑を求める銀行もありますが、最近は手書きのサインを認める銀行も増えています。長期滞在を予定しているなら、100円ショップや文房具店で数百円で作れるシンプルな判子を用意しておくと、銀行以外の様々な手続きでも役立ちます。",
          ],
          bullets: [
            "6ヶ月ルール — 主要銀行の多くが適用；ゆうちょ銀行が主な例外",
            "書類はほぼ日本語のみ — 翻訳アプリを活用するか、日本語が分かる人に協力を求める",
            "判子（はんこ） — まだ求める銀行もある；手書きサインが認められるケースも増加",
            "シンプルな判子は100円ショップ（百円ショップ）で数百円で作成可能",
            "断られた場合は別の支店を試すか、3〜6ヶ月分の居住実績が揃ってから再申請する",
          ],
        },
        {
          heading: "給与を受け取るために",
          paragraphs: [
            "日本では、ほぼすべての雇用主が給与を銀行振込（ふりこみ）で支払います。現金払いはまれで、非常にカジュアルな仕事や日雇い労働に限られます。つまり、日本の銀行口座がなければ給与を受け取れないのは利便性の問題ではなく、ほとんどの職場で働き始めるための実質的な必須条件です。",
            "雇用主に銀行口座情報を伝える際は、銀行名・支店名・口座種別（普通預金）・口座番号・口座名義人名を正確に提供する必要があります。口座名義は在留カードの表記と完全に一致させてください。振込エラーを防ぐためです。ワーキングホリデービザ保有者はクレジットカードを作ることがほぼできないため、銀行口座とキャッシュカードが滞在中の主な金融ツールになります。",
          ],
          bullets: [
            "給与はほぼ必ず銀行振込（振込） — 日本の口座は必須。選択肢ではない",
            "雇用主に伝える情報：銀行名、支店名、口座種別（普通預金）、口座番号、口座名義人名",
            "口座名義は在留カードの表記と完全に一致させること",
            "クレジットカードはワーホリビザ保有者にはほぼ作れない — デビット／キャッシュカードが主役になる",
            "振込確認や口座管理のため、早めにネットバンキングを設定しておく",
          ],
        },
        {
          heading: "Ternができること",
          paragraphs: [
            "Ternなら、日本行きの飛行機に乗る前から口座を開設できます。必要なのはパスポートとワーホリビザの承認だけです。日本に到着して郵便局や役所に向かうときには、すでにTernの口座情報が手元にあり、初日から雇用主にすぐ渡せます。本国通貨からミッドマーケットレートでトップアップでき、通貨両替は一律手数料、日本のATMでの引き出しも手数料なし。6ヶ月待ちも、日本語の書類も、判子も必要ありません。",
          ],
        },
      ],
      faq: [
        {
          q: "ワーホリビザで日本の銀行口座は開設できますか？",
          a: "はい、ただし最初の数ヶ月は選択肢が限られます。ほとんどの主要銀行は非公式ながら6ヶ月の居住実績を求めており、多くのワーホリ参加者が驚かされます。居住期間が短い申込者にも対応するゆうちょ銀行が最初の口座としての定番です。それでも、どの銀行でも在留カードと住民登録済みの住所は申請前に必要です。",
        },
        {
          q: "日本で銀行口座を開設するのに判子は必要ですか？",
          a: "必ずしも必要ではありません。ゆうちょ銀行を含む多くの銀行では、個人のスタンプの代わりに手書きのサインを認めています。ただし、大都市以外の支店では依然として判子を求めることがあります。数ヶ月以上日本に滞在する予定があれば、シンプルな判子を作っておくのはおすすめです（100円ショップで数百円程度）。銀行以外の様々な手続きでも活用できます。訪問前に対象の支店に確認しておくと安心です。",
        },
        {
          q: "すぐに日本の銀行口座を開設できなかった場合はどうすればいいですか？",
          a: "6ヶ月ルールを理由に大手銀行に断られた場合は、ゆうちょ銀行が引き続き最善の選択肢です。それまでの間、Ternのようなマルチカレンシー口座を使えば、日本の銀行口座がなくてもお金の受け取り・支払い・資金管理が可能です。3〜6ヶ月の居住実績が揃ったら、MUFG・SMBC・みずほに再度申請し、より充実したサービスの口座を開設することができます。",
        },
      ],
    },
    ko: {
      title: "워홀 비자로 일본 은행 계좌 개설하는 방법",
      description:
        "워홀 비자 소지자를 위한 일본 은행 완벽 가이드 — 6개월 규칙, Japan Post Bank, 재류카드, 주소 등록, 도장(한코), 급여 이체 받는 방법까지.",
      excerpt:
        "일본 은행 계좌가 없으면 급여를 받을 수 없습니다. 대부분의 은행은 처음 6개월간 계좌 개설을 거부합니다. 첫날부터 준비하는 방법을 알아보세요.",
      sections: [
        {
          paragraphs: [
            "일본 워킹홀리데이 비자로 생활할 때 가장 먼저 부딪히는 실질적인 장벽이 바로 은행 계좌 개설입니다. 거의 모든 고용주가 급여를 은행 이체로 지급하므로 계좌가 없으면 급여를 받을 수 없습니다. 문제는 대부분의 일본 은행이 외국인 계좌 개설 시 6개월 이상의 거주 실적을 요구한다는 점입니다. 여기에 거의 일본어로만 된 신청 서류와 경우에 따라 도장(한코) 요구까지 더해집니다. 올바른 순서와 신규 입국자에게 유연한 은행을 알아두면 훨씬 수월하게 시작할 수 있습니다.",
          ],
        },
        {
          heading: "어떤 은행에서든 필요한 서류 먼저 준비하기",
          paragraphs: [
            "어느 은행을 방문하든 두 가지 서류는 필수입니다. 첫째, 재류카드(在留カード, 자이류 카도)로 장기 비자로 입국할 때 공항 출입국 심사에서 발급됩니다. 둘째, 등록된 주소입니다. 거주지가 정해지면 관할 시·구·읍·면 사무소(市区町村役所)를 방문해 주민등록(住民登録, 주민토우로쿠) 절차를 밟아야 합니다. 호텔이나 호스텔 주소는 인정되지 않으며 지자체에 등록된 실제 거주지 주소가 필요합니다.",
            "주민등록 절차는 무료이며 보통 1시간 이내에 완료됩니다. 여권과 재류카드를 지참하세요. 등록 후 주민표(住民票, 주민효)가 발급되며 일부 은행에서는 추가 주소 증명 서류로 요청하기도 합니다. 도착 후 1주일 이내에 처리하는 것이 가장 좋습니다. 이 절차 없이는 어떤 은행도 계좌 개설 신청을 받아주지 않습니다.",
          ],
          bullets: [
            "재류카드(在留カード) — 공항에서 발급; 항상 소지할 것",
            "주민등록(住民登録) — 입주 후 14일 이내에 시·구·읍·면 사무소에서 처리",
            "주민표(住民票) — 은행에 지참할 사본 발급받기",
            "여권 — 재류카드와 함께 모든 은행에서 필요",
            "전화번호 — 일본 SIM 또는 연락 가능한 번호; 계좌 개설 시 필요",
          ],
        },
        {
          heading: "Japan Post Bank: 현실적인 첫 번째 계좌",
          paragraphs: [
            "Japan Post Bank(ゆうちょ銀行, 유초 긴코)는 워킹홀리데이 비자 소지자에게 가장 적합한 은행으로 널리 알려져 있습니다. 거주 기간이 짧은 신청자도 받아주며, 영문 안내 자료도 공식 웹사이트에 제공됩니다. 우체국은 소도시에도 있으며, ATM 네트워크는 일본에서 가장 광범위한 수준입니다.",
            "유초 계좌를 개설하려면 은행 업무를 취급하는 우체국(郵便局)을 방문해 재류카드, 여권, 등록된 주소 정보를 지참하고 신청서를 작성하면 됩니다. 대도시의 큰 우체국에는 기본적인 영어가 가능한 직원이 있는 경우도 있지만, 일본어로 적은 주소 메모를 준비해 가는 것이 좋습니다. 계좌는 당일 또는 1주일 이내에 개설되며, ATM용 현금 카드(キャッシュカード)와 통장(通帳)이 발급됩니다.",
          ],
          bullets: [
            "Japan Post Bank(ゆうちょ銀行) — 워홀 비자 소지자에게 가장 친화적인 주요 은행",
            "재류카드, 여권, 등록된 주소 정보 지참",
            "신청서는 일본어로만 작성 — 일본어로 적은 주소 메모를 미리 준비",
            "대도시 대형 우체국은 외국인 신청자 대응에 익숙함",
            "현금 카드와 통장이 발급되며, 인터넷 뱅킹은 별도 설정 필요",
          ],
        },
        {
          heading: "6개월 규칙과 언어 장벽",
          paragraphs: [
            "미쓰비시UFJ(MUFG), 스미토모미쓰이(SMBC), 미즈호 등 일본 주요 은행 대부분은 비영주 외국인의 계좌 개설 시 비공식적으로 '일본 거주 6개월 이상'을 요구하는 관행이 있습니다. 공식 정책에 명시된 것은 아니지만 실제로 광범위하게 적용되며, 워킹홀리데이 참가자들의 경험에서 일관되게 보고됩니다. 거절당하는 경우 대부분 비자 종류가 아닌 이 규칙 때문입니다.",
            "또 다른 큰 장벽은 언어입니다. 일본 거의 모든 은행의 신청 서류는 일본어로만 작성되어 있습니다. 대도시 지점에는 다국어 직원이 있는 경우도 있지만 보장되지 않습니다. 도장(판코, 判子 또는 印鑑) — 일본에서 서명 대신 사용하는 개인 도장 — 을 요구하는 은행도 있지만, 최근에는 자필 서명을 인정하는 곳도 늘고 있습니다. 장기 체류를 계획하고 있다면 100엔숍이나 문구점에서 저렴하게 만들 수 있는 간단한 도장을 준비해두면 은행 외에도 다양한 행정 절차에서 도움이 됩니다.",
          ],
          bullets: [
            "6개월 규칙 — 주요 은행 대부분에서 적용; Japan Post Bank가 주요 예외",
            "서류는 거의 일본어로만 작성 — 번역 앱 활용 또는 일본어 가능한 지인에게 도움 요청",
            "한코(判子) — 일부 은행에서는 여전히 요구; 자필 서명도 점차 인정되는 추세",
            "간단한 도장은 100엔숍(百円ショップ)에서 수백 엔으로 제작 가능",
            "거절당하면 다른 지점을 시도하거나 거주 실적이 3~6개월 쌓인 후 재신청",
          ],
        },
        {
          heading: "급여 받기",
          paragraphs: [
            "일본에서는 거의 모든 고용주가 급여를 은행 이체(振込, 후리코미)로 지급합니다. 현금 급여는 매우 드물며 비공식적이거나 일용직 상황에만 해당됩니다. 즉, 일본 은행 계좌 없이는 급여를 받을 수 없으며 이는 편의의 문제가 아니라 대부분의 일자리를 시작하기 전에 반드시 갖춰야 할 실질적인 조건입니다.",
            "고용주에게 계좌 정보를 제공할 때는 은행명, 지점명, 계좌 종류(普通預金, 보통예금), 계좌번호, 계좌 명의인을 정확하게 제공해야 합니다. 이체 오류를 방지하기 위해 계좌 명의는 재류카드와 정확히 일치해야 합니다. 워킹홀리데이 비자 소지자는 신용카드를 만들기가 매우 어렵기 때문에 은행 계좌와 현금 카드가 체류 기간 동안 주요 금융 수단이 됩니다.",
          ],
          bullets: [
            "급여는 거의 항상 은행 이체(振込) — 일본 계좌는 필수, 선택이 아님",
            "고용주에게 제공할 정보: 은행명, 지점명, 계좌 종류(普通預金), 계좌번호, 계좌 명의인",
            "계좌 명의는 재류카드와 정확히 일치해야 함",
            "신용카드는 워홀 비자 소지자에게 사실상 불가 — 직불/현금 카드가 주요 수단",
            "이체 확인과 계좌 관리를 위해 인터넷 뱅킹을 일찍 설정해 두기",
          ],
        },
        {
          heading: "Tern이 도와드립니다",
          paragraphs: [
            "Tern을 이용하면 일본행 비행기에 오르기 전에 이미 계좌를 개설할 수 있습니다. 여권과 워킹홀리데이 비자 승인만 있으면 됩니다. 일본에 도착해 우체국이나 구청에 갈 때 Tern 계좌 정보가 이미 준비되어 있어 첫날부터 바로 고용주에게 전달할 수 있습니다. 본국 통화에서 실제 환율로 충전하고, 환전은 정액 수수료로, 일본 ATM 출금은 수수료 없이 이용 가능합니다. 6개월 대기도, 일본어 서류도, 도장도 필요 없습니다.",
          ],
        },
      ],
      faq: [
        {
          q: "워홀 비자로 일본 은행 계좌를 개설할 수 있나요?",
          a: "네, 가능합니다. 단 처음 몇 달은 선택지가 제한됩니다. 대부분의 주요 일본 은행은 비공식적으로 6개월 거주 요건을 적용하고 있어 많은 워킹홀리데이 참가자들이 당황하게 됩니다. 거주 기간이 짧은 신청자도 받아주는 Japan Post Bank(ゆうちょ銀行)가 첫 번째 계좌로 가장 많이 추천됩니다. 어느 은행이든 신청 전에 재류카드와 주민등록 완료된 주소는 반드시 필요합니다.",
        },
        {
          q: "일본에서 은행 계좌를 개설하려면 도장(한코)이 필요한가요?",
          a: "반드시 그런 것은 아닙니다. Japan Post Bank를 포함한 많은 은행에서 개인 도장 대신 자필 서명을 인정합니다. 다만 대도시 외 지점에서는 여전히 도장을 요구하는 경우가 있습니다. 수개월 이상 일본에 체류할 예정이라면 간단한 도장을 만들어두는 것이 좋습니다(100엔숍에서 수백 엔 수준). 은행 외에도 다양한 행정 절차에 유용합니다. 방문 전에 해당 지점에 미리 확인해 보세요.",
        },
        {
          q: "일본 은행 계좌를 바로 개설하지 못하면 어떻게 해야 하나요?",
          a: "6개월 규칙으로 주요 은행에서 거절당한 경우 Japan Post Bank가 여전히 최선의 선택입니다. 그 동안 Tern과 같은 다중 통화 계좌를 이용하면 일본 은행 계좌 없이도 입금, 결제, 재정 관리가 가능합니다. 거주 실적이 3~6개월 쌓이면 MUFG, SMBC, 미즈호에 다시 신청해 더 다양한 서비스를 갖춘 계좌를 개설할 수 있습니다.",
        },
      ],
    },
    "zh-TW": {
      title: "持打工度假簽證在日本開設銀行帳戶的方法",
      description:
        "打工度假簽證持有者的日本銀行完整指南 — 六個月規定、郵政銀行、在留卡、住民登錄、印鑑，以及如何透過銀行轉帳領取薪資。",
      excerpt:
        "沒有日本銀行帳戶就無法領薪水——大多數銀行在最初六個月內不受理開戶申請。這裡告訴你如何從第一天就做好準備。",
      sections: [
        {
          paragraphs: [
            "持打工度假簽證來到日本，開設銀行帳戶是最先碰到的實務難關。幾乎所有雇主都以銀行轉帳支薪，沒有帳戶就無法收到薪資。問題在於：多數日本銀行要求外國人在日本居住滿六個月才受理開戶。加上幾乎全是日文的申請表，有時還要求備有印鑑，讓人不知從何下手。了解正確的辦理順序，以及哪家銀行對新抵達者最為彈性，是順利開始打工度假生活的關鍵。",
          ],
        },
        {
          heading: "無論去哪家銀行，都必須先備齊的文件",
          paragraphs: [
            "無論前往哪家銀行，有兩份文件是絕對必要的。第一是在留卡（ざいりゅうカード），在持長期簽證入境日本時，機場出入境審查處會當場核發。第二是已登記的住址——確定居所後，必須前往當地市區町村役所辦理住民登錄（じゅうみんとうろく）。銀行不接受飯店或青年旅館的地址，必須是在行政機關正式登記的居住地址。",
            "住民登錄手續免費，通常在一小時內即可完成。攜帶護照和在留卡前往即可。登錄後會核發住民票（じゅうみんひょう），部分銀行會要求提供作為補充地址證明。最好在抵達後一週內完成這項手續，否則任何銀行都不會受理開戶申請。",
          ],
          bullets: [
            "在留卡（在留カード）— 於機場核發；須隨身攜帶",
            "住民登錄 — 入住後14天內前往市區町村役所辦理",
            "住民票 — 事先取得一份影本備用",
            "護照 — 所有銀行皆需與在留卡一同出示",
            "電話號碼 — 日本 SIM 卡或可聯絡的號碼；開戶時必填",
          ],
        },
        {
          heading: "郵政銀行：最現實的第一個帳戶",
          paragraphs: [
            "Japan Post Bank（ゆうちょ銀行，郵儲銀行）是打工度假簽證持有者的首選，因為它以接受居住時間較短的申請者著稱，官網也提供英文說明資料。日本各地，甚至小城鎮都設有郵局，ATM 網絡也是全日本最廣泛的之一，在各地提款都很方便。",
            "前往任何有提供銀行業務的郵局（郵便局），攜帶在留卡、護照及已登記的住址資料，填寫申請表即可辦理開戶。大城市的大型郵局有時有具備基礎英語能力的工作人員，但強烈建議事先備妥一份以日文書寫的住址紙條。帳戶通常當天或在一週內即可開設，並會核發 ATM 提款卡（キャッシュカード）及存摺（通帳）。",
          ],
          bullets: [
            "Japan Post Bank（ゆうちょ銀行）— 對打工度假最友善的主要銀行，接受居住時間較短的申請者",
            "攜帶在留卡、護照及已登記的住址資料",
            "申請表全為日文 — 事先備妥日文書寫的住址紙條",
            "大城市的大型郵局較有接待外籍申請者的經驗",
            "核發提款卡及存摺；網路銀行需另行設定",
          ],
        },
        {
          heading: "六個月規定與語言障礙",
          paragraphs: [
            "日本多數主要銀行，包括三菱UFJ（MUFG）、三井住友（SMBC）及瑞穗，對非永久居留外國人開戶時，非正式地要求在日本居住至少六個月。這項要求並未明載於官方政策，但在實際操作中被廣泛執行，打工度假者的反映也相當一致。若被拒絕，通常是這個原因，而非簽證類型的問題。",
            "另一大障礙是語言。幾乎所有日本銀行的申請表都僅有日文版本。大城市部分分行有多語言服務人員，但無法保證。印鑑（はんこ／印鑑），即日本代替簽名使用的個人印章，部分銀行仍會要求，但越來越多銀行已接受手寫簽名。若計畫長期居留，準備一枚簡單的印鑑（可在百元商店或文具店以少許費用刻製）將有助於簡化銀行以外的各項行政手續。",
          ],
          bullets: [
            "六個月規定 — 多數主要銀行皆採用；郵政銀行為主要例外",
            "表格幾乎全為日文 — 善用翻譯 App，或請熟悉日語的朋友協助",
            "印鑑（はんこ）— 部分銀行仍要求；手寫簽名越來越普遍被接受",
            "簡單的印鑑可在百元商店（百円ショップ）以數百日圓刻製",
            "若被拒絕，可嘗試其他分行，或等居住實績滿三至六個月後再重新申請",
          ],
        },
        {
          heading: "如何領取薪資",
          paragraphs: [
            "在日本，幾乎所有雇主都以銀行轉帳（振込，ふりこみ）支薪，直接匯入你的銀行帳戶。現金支薪非常罕見，僅見於極為非正式或日雇勞動的情況。這意味著沒有日本銀行帳戶就無法領到薪資——這不是便利性問題，而是開始大多數工作前必須具備的實際條件。",
            "向雇主提供帳戶資料時，通常需要提供銀行名稱、分行名稱、帳戶類型（普通預金，普通存款帳戶）、帳號，以及與銀行登記完全一致的帳戶名義人姓名。帳戶名義必須與在留卡上的姓名完全相符，以避免轉帳錯誤。打工度假簽證持有者通常無法申辦信用卡，因此銀行帳戶和提款卡將是你在日本期間的主要金融工具。",
          ],
          bullets: [
            "薪資幾乎一律以銀行轉帳（振込）支付 — 日本帳戶是必要條件，非便利選項",
            "需提供雇主的資訊：銀行名稱、分行名稱、帳戶類型（普通預金）、帳號及帳戶名義人",
            "帳戶名義必須與在留卡上的姓名完全一致",
            "打工度假簽證持有者通常無法申辦信用卡 — 提款卡是主要支付工具",
            "儘早設定網路銀行，以便確認轉帳入帳並線上管理帳戶",
          ],
        },
        {
          heading: "Tern 如何協助你",
          paragraphs: [
            "Tern 讓你在登機前往日本之前就能開設帳戶——只需護照和打工度假簽證批准即可。抵達日本、前往郵局或區公所時，Tern 的帳戶資料已在手邊，第一天就能直接交給雇主。從本國貨幣以真實匯率充值，貨幣兌換收取固定費用，在日本 ATM 提款也完全免手續費。無需等候六個月、無需填寫日文表格、也不需要印鑑。",
          ],
        },
      ],
      faq: [
        {
          q: "外國人可以持打工度假簽證在日本開設銀行帳戶嗎？",
          a: "可以，但最初幾個月的選擇較為有限。多數日本主要銀行非正式地要求居住滿六個月，令許多打工度假者措手不及。Japan Post Bank（ゆうちょ銀行）是最常見的第一個帳戶選擇，因為它對居住時間較短的申請者更為彈性。無論前往哪家銀行，在提出申請前都必須備妥在留卡和已登記的住址。",
        },
        {
          q: "在日本開設銀行帳戶需要印鑑嗎？",
          a: "不一定。包括 Japan Post Bank 在內的許多銀行現已接受手寫簽名代替個人印章。不過，大城市以外的部分分行可能仍會要求印鑑。若計畫在日本待上數個月，刻一枚簡單的印鑑相當划算（百元商店即可，費用僅需數百日圓），在銀行以外的各種行政手續上也很實用。建議事先向要前往的分行確認。",
        },
        {
          q: "如果無法立即在日本開設銀行帳戶該怎麼辦？",
          a: "若因六個月規定被主要銀行拒絕，Japan Post Bank 仍是最佳選擇。在此期間，使用 Tern 這類多幣別帳戶，即使沒有日本銀行帳戶也能收款、付款及管理財務。等居住實績滿三至六個月後，即可再次前往 MUFG、SMBC 或瑞穗申請開設服務更完整的帳戶。",
        },
      ],
    },
  },
};
