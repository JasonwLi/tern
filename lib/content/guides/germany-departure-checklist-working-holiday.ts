import type { Article } from "../types";

export const article: Article = {
  slug: "germany-departure-checklist-working-holiday",
  kind: "guide",
  date: "2026-06-09",
  emoji: "🥨",
  accent: "bg-lime-300",
  readMinutes: 7,
  sources: [
    {
      label: "Deutsche Rentenversicherung — Freiwillige Versicherung im Ausland (FAQs)",
      url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Allgemeine-Informationen/Wissenswertes-zur-Rente/FAQs/International/Freiw_Beitraege.html",
    },
    {
      label: "Deutsche Rentenversicherung — Arbeiten im Ausland",
      url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Ausland/Arbeiten-im-Ausland/arbeiten_im_ausland_detailseite.html",
    },
    {
      label: "Techniker Krankenkasse — Anwartschaft bei längerem Auslandsaufenthalt beantragen",
      url: "https://www.tk.de/techniker/versicherung/tk-leistungen/ausland/anwartschaft-bei-auslandsaufenthalt-beantragen-2024506",
    },
  ],
  related: [
    "bank-account-working-holiday-australia",
    "working-holiday-tax-refund-australia",
  ],
  i18n: {
    de: {
      title: "Abmeldung & Co: Behördenkram vor Work and Travel",
      description:
        "Abmeldung beim Einwohnermeldeamt, Krankenversicherung mit Anwartschaft, Rentenversicherung, Steuerpflicht im Wegzugsjahr und Bankkonten — der Deutschland-Behörden-Guide vor Work and Travel Australien, Kanada oder Neuseeland.",
      excerpt:
        "Wer für ein Jahr ins Ausland geht, muss mehr regeln als Flug und Visum. Von der Abmeldung über Kranken- und Rentenversicherung bis zu Steuern und Bankkonten — hier steht, was du vor dem Abflug erledigen solltest.",
      sections: [
        {
          paragraphs: [
            "Work and Travel in Australien, Kanada oder Neuseeland ist mehr als ein verlängerter Urlaub — aus bürokratischer Sicht verlässt du Deutschland als Einwohnerin oder Einwohner und kehrst als Rückkehrer zurück. Wer das Jahr im Ausland ohne Vorbereitung antritt, riskiert laufende Beiträge, die niemand mehr zahlt, eingefrorene Bankkonten oder eine Steuerrechnung bei der Heimkehr. Dieser Guide erklärt die fünf wichtigsten Baustellen in der richtigen Reihenfolge. Die genauen Regelungen unterscheiden sich je nach Krankenkasse und Wohnsitzgemeinde — letzte Sicherheit bringt immer das direkte Gespräch mit der zuständigen Stelle.",
          ],
        },
        {
          heading: "Abmeldung beim Einwohnermeldeamt: Ja oder Nein?",
          paragraphs: [
            "Die Abmeldung beim Einwohnermeldeamt ist der Ausgangspunkt für fast alles, was danach kommt. Gibst du deine Wohnung vollständig auf und ziehst ins Ausland, bist du nach dem Bundesmeldegesetz zur Abmeldung verpflichtet — das gilt auch für Work and Travel. Die Abmeldung kann frühestens eine Woche vor dem Auszug erfolgen und muss spätestens zwei Wochen nach dem Auszug beim Amt sein.",
            "Mit der Abmeldung wirst du offiziell zum Nichtansässigen. Das hat weitreichende Folgen: Die gesetzliche Krankenversicherung endet (dazu gleich mehr), die Pflicht zur gesetzlichen Rentenversicherung entfällt, du sparst ab dem nächsten Jahr die Grundsteuer auf dein Einwohnermeldeamts-Konto — und du bist GEZ-beitragsfrei. Wer dagegen nur vorübergehend bei Eltern oder Freunden abgemeldet bleibt, ohne die Wohnung aufzugeben, riskiert melderechtliche Konsequenzen. Behalte in jedem Fall dein Ausweisdokument aktuell und prüfe, ob ein Reisepass noch lange genug gültig ist.",
          ],
          bullets: [
            "Abmeldung frühestens 1 Woche vor Auszug, spätestens 2 Wochen danach",
            "Mitbringen: Personalausweis oder Reisepass, ausgefüllter Abmeldeschein (oft online vorausfüllbar)",
            "Rückkehr: Ummeldung (Anmeldung) innerhalb von 14 Tagen nach Einzug in eine neue Wohnung",
            "Tipp: Abmeldebestätigung aufbewahren — Krankenkasse und Finanzamt benötigen sie als Nachweis",
          ],
        },
        {
          heading: "Krankenversicherung: Mitgliedschaft endet — Anwartschaft sichert die Rückkehr",
          paragraphs: [
            "Mit der Abmeldung erlischt deine Mitgliedschaft in der gesetzlichen Krankenversicherung (GKV). Das klingt erst einmal gut — keine Beiträge mehr —, hat aber einen Haken: Wer länger als 12 Monate weg ist, verliert unter Umständen das Recht auf freie Kassenwahl bei der Rückkehr und muss möglicherweise Wartezeiten in Kauf nehmen. Die meisten Krankenkassen bieten daher eine sogenannte Anwartschaftsversicherung an.",
            "Die Anwartschaft ist kein aktiver Versicherungsschutz — du hast im Ausland keinen Anspruch auf Leistungen der deutschen Kasse —, sondern eine Art Platzhalter: Sie sichert dein Recht, nach der Rückkehr nahtlos wieder aufgenommen zu werden, ohne erneute Gesundheitsprüfung und ohne Wartezeit. Der Beitrag ist niedrig; bei der TK beträgt er für 2026 beispielsweise ca. 23–28 Euro pro Monat (je nach Elterneigenschaft). Ob deine Kasse eine Anwartschaft anbietet und unter welchen Bedingungen, variiert — ruf am besten direkt dort an. Wichtig: Die Anwartschaft ersetzt keine Reise- und Arbeitsversicherung für Australien. Zwischen Deutschland und Australien besteht kein Sozialversicherungsabkommen, Medicare gilt nicht für Working-Holiday-Inhaber — du brauchst zwingend eine private Auslands-Kranken- und Arbeitgeberversicherung.",
          ],
          bullets: [
            "GKV-Mitgliedschaft endet mit der Abmeldung vom Einwohnermeldeamt",
            "Anwartschaftsversicherung sichert das Rückkehrrecht — kein aktiver Schutz im Ausland",
            "TK-Beitrag 2026 ca. 23–28 €/Monat; andere Kassen können abweichen",
            "Anwartschaft vor Abreise bei deiner Kasse beantragen — nicht rückwirkend möglich",
            "Zusätzlich zwingend: private Reise- und Arbeitskrankenversicherung für das Zielland",
          ],
        },
        {
          heading: "Rentenversicherung: Pause einlegen oder freiwillig weiterzahlen?",
          paragraphs: [
            "Ohne deutschen Wohnsitz und ohne inländisches Arbeitsverhältnis bist du nicht mehr pflichtversichert in der gesetzlichen Rentenversicherung. Deine Beiträge ruhen einfach — es gibt keine Strafe für das Aussetzen. Trotzdem lohnt es sich, die Auswirkungen zu verstehen.",
            "Auslandszeiten ohne Beiträge zählen nicht als Beitragsjahre und erhöhen deine spätere Rente nicht. Sie können aber unter bestimmten Voraussetzungen als sogenannte Anrechnungszeiten oder im Rahmen von Abkommen berücksichtigt werden. Wer seine Rente langfristig nicht schmälern möchte, kann freiwillige Beiträge zahlen. Das ist für Deutsche mit gewöhnlichem Aufenthalt im Ausland ausdrücklich möglich. 2026 liegt der Mindestbeitrag bei 112,16 Euro pro Monat, der Höchstbeitrag bei 1.571,70 Euro — du kannst frei wählen, wie viel du einzahlst. Die Zahlung läuft über ein deutsches Konto oder eine Vertrauensperson in Deutschland. Einen Antrag stellst du bei der Deutschen Rentenversicherung Bund.",
          ],
          bullets: [
            "Rentenversicherungspflicht endet ohne inländischen Wohnsitz und ohne deutsches Arbeitsverhältnis",
            "Freiwillige Beiträge möglich: 112,16 – 1.571,70 €/Monat (Stand 2026, jährliche Anpassung)",
            "Antrag bei der Deutschen Rentenversicherung Bund stellen — vor der Abreise klären",
            "Auslandsjahre ohne Beiträge schmälern die spätere Rente, gefährden aber die Grundberechtigung erst bei sehr kurzer Vorversicherungszeit",
          ],
        },
        {
          heading: "Steuern: Wegzugsjahr, Steuererklärung und beschränkte Steuerpflicht",
          paragraphs: [
            "Im Jahr des Wegzugs bist du bis zum tatsächlichen Auszug aus Deutschland unbeschränkt steuerpflichtig — für diesen Zeitraum musst du eine reguläre Einkommensteuererklärung abgeben. Deine australischen, kanadischen oder neuseeländischen Einkünfte aus dem Rest des Jahres fließen dabei über den sogenannten Progressionsvorbehalt ein: Sie erhöhen den Steuersatz, der auf das deutsche Einkommen angewendet wird, auch wenn sie selbst nicht besteuert werden. Im Folgejahr bist du in Deutschland in der Regel gar nicht mehr steuerpflichtig — vorausgesetzt, du hast wirklich keinen Wohnsitz und keinen gewöhnlichen Aufenthalt mehr im Inland.",
            "Hast du nach dem Wegzug noch Einkünfte aus Deutschland — zum Beispiel aus Vermietung, einer Abfindung oder Kapitalerträgen aus deutschen Quellen —, greift die beschränkte Steuerpflicht: Du zahlst nur auf diese inländischen Einkünfte deutsche Steuer. Australien, Kanada und Neuseeland gelten steuerrechtlich nicht als Niedrigsteuerländer, sodass die verschärfte erweiterte beschränkte Steuerpflicht (§ 2 AStG) in der Regel nicht zur Anwendung kommt. Wer im Wegzugsjahr noch Kapitalanlagen in Deutschland hält, sollte prüfen, ob laufende Erträge oder Veräußerungsgewinne nachzuversteuern sind.",
          ],
          bullets: [
            "Wegzugsjahr: Einkommensteuererklärung für den Zeitraum bis zur Abmeldung abgeben",
            "Ausländische Einkünfte unterliegen dem Progressionsvorbehalt im Wegzugsjahr",
            "Ab dem Folgejahr keine Steuerpflicht, wenn kein Wohnsitz und kein gewöhnlicher Aufenthalt in Deutschland",
            "Beschränkte Steuerpflicht gilt weiterhin für inländische Einkünfte (Miete, Zinsen, Dividenden aus Deutschland)",
            "Steuertermine im Blick behalten — ggf. Steuerberater oder Lohnsteuerhilfeverein vor Abreise konsultieren",
          ],
        },
        {
          heading: "Bankkonten, Depots und SCHUFA",
          paragraphs: [
            "Mit der Abmeldung wirst du aus Sicht der meisten deutschen Banken zum Nichtansässigen — und das kann Konsequenzen für dein Konto haben. Viele deutsche Neobanken (N26, DKB, ING) schränken die Kontonutzung für Kunden ohne deutschen Wohnsitz ein oder kündigen das Konto ganz. Informiere dich vor der Abreise bei deiner Bank, wie sie mit der Abmeldung umgeht, und kläre, ob eine Nichtansässigen-Vereinbarung möglich ist.",
            "Traditionelle Filialbanken sind hier oft flexibler — ein Gespräch mit der Filiale vor Ort kann das Konto retten. Das ist wichtig, weil du das Girokonto für Überweisungen aus dem Ausland, mögliche Steuerrückerstattungen und das Einziehen laufender Kosten in Deutschland brauchst. Depots bei Brokern sind ein eigenes Kapitel: Viele Anbieter sperren den Handel mit deutschen oder europäischen Wertpapieren für Nichtansässige aus regulatorischen Gründen. Liquidiere oder übertrage Positionen rechtzeitig vor der Abreise. Was die SCHUFA betrifft: Bestehende Einträge bleiben erhalten, auch wenn du abgemeldet bist. Ein ruhend geführtes Konto ohne Aktivität schadet deiner SCHUFA-Score langfristig nicht, solange keine Negativeinträge entstehen.",
          ],
          bullets: [
            "Viele Neobanken erlauben die Kontonutzung nur bei deutschem Wohnsitz — vor Abreise klären",
            "Filialbank: persönliches Gespräch über Nichtansässigen-Status führen und Ergebnis schriftlich festhalten",
            "Depot: Handel mit deutschen Wertpapieren für Nichtansässige oft eingeschränkt — Positionen vorher klären",
            "SCHUFA-Score bleibt im Ausland bestehen; kein aktiver Schaden durch ruhende Konten ohne Negativeinträge",
            "Girokonto möglichst offen halten für Rücküberweisungen, Steuererstattungen und laufende Lastschriften",
          ],
        },
        {
          heading: "Kindergeld und BAföG: Ansprüche rechtzeitig melden",
          paragraphs: [
            "Kindergeld wird für Work and Travel in der Regel nicht gezahlt. Work and Travel gilt nach Auffassung der Familienkasse als gewöhnlicher Auslandsaufenthalt, nicht als Berufsausbildung — der Anspruch entfällt damit. Du bist verpflichtet, die Familienkasse über den Auslandsaufenthalt zu informieren. Wer Kindergeld weiterbezieht, obwohl kein Anspruch mehr besteht, riskiert eine Rückforderung und im schlimmsten Fall ein Steuerstrafverfahren. Ausnahme: Wenn ein nennenswerter Teil des Aufenthalts aus einem anerkannten Sprachkurs besteht, kann ein Anspruch teilweise bestehen bleiben — das klärt die Familienkasse im Einzelfall. BAföG läuft mit der Abmeldung aus Deutschland grundsätzlich aus, wenn kein inländisches Studium mehr aktiv ist. Informiere das zuständige Amt rechtzeitig.",
          ],
          bullets: [
            "Kindergeld für Work and Travel in der Regel nicht anspruchsberechtigt",
            "Familienkasse vor Abreise informieren — Weiterzahlung ohne Anspruch ist rechtswidrig",
            "Sprachkurs-Anteil kann in Ausnahmefällen einen Teilanspruch begründen — Einzelfallprüfung",
            "BAföG-Amt informieren, wenn das Studium pausiert oder aufgegeben wird",
          ],
        },
        {
          heading: "Wie Tern hilft",
          paragraphs: [
            "Tern ist ein Multiwährungs-Konto, das du noch vor dem Abflug vom Smartphone aus eröffnest — du brauchst nur Reisepass und Working-Holiday-Visum (Tern befindet sich im Pre-Launch, Registrierungen sind offen). Deine Kontonummer in Australien, Kanada oder Neuseeland steht bereit, bevor du landest. Aufladen aus Deutschland geht zum Mittelkurs ohne versteckte Umrechnungsaufschläge, und am Geldautomaten vor Ort fallen keine Gebühren an. Gerade weil das deutsche Girokonto durch die Abmeldung komplizierter werden kann, ist Tern der unkomplizierte Weg, dein Geld zwischen beiden Ländern zu bewegen.",
          ],
        },
      ],
      faq: [
        {
          q: "Muss ich mich für Work and Travel zwingend in Deutschland abmelden?",
          a: "Wenn du deine Wohnung aufgibst und ins Ausland ziehst, bist du nach dem Bundesmeldegesetz zur Abmeldung verpflichtet. Wer die Abmeldung unterlässt, obwohl er tatsächlich ausgezogen ist, begeht eine Ordnungswidrigkeit. Die Abmeldung hat außerdem konkrete finanzielle Vorteile: Die GKV-Beitragspflicht endet, die Rentenversicherung wird freiwillig, und du bist ab dem Folgejahr in der Regel nicht mehr einkommensteuerpflichtig. Wer dagegen nur vorübergehend bei den Eltern einzieht und dort tatsächlich gemeldet bleibt, muss sich nicht abmelden — aber dann laufen auch alle Beitragspflichten weiter.",
        },
        {
          q: "Was ist der Unterschied zwischen Anwartschaftsversicherung und normaler Krankenversicherung im Ausland?",
          a: "Die Anwartschaftsversicherung bietet keinen aktiven Versicherungsschutz — du kannst damit keine Arztrechnungen aus Australien einreichen. Sie sichert stattdessen dein Rückkehrrecht: Nach der Rückkehr wirst du ohne Wartezeit und ohne erneute Gesundheitsprüfung wieder Vollmitglied bei deiner deutschen Kasse. Für die medizinische Versorgung im Ausland brauchst du zwingend eine separate private Reise- und Auslandskrankenversicherung. Zwischen Deutschland und Australien gibt es kein Sozialversicherungsabkommen, der australische Medicare-Schutz gilt nicht für Inhaber eines Working-Holiday-Visums.",
        },
        {
          q: "Welche drei Fehler passieren vor Work and Travel am häufigsten?",
          a: "Erstens: die Familienkasse vergessen — Kindergeld läuft ohne Meldung still weiter, obwohl der Anspruch entfällt, und die Rückforderung kommt oft erst nach der Heimkehr. Zweitens: das Neobank-Konto nicht prüfen — viele Anbieter kündigen das Konto, sobald kein deutscher Wohnsitz mehr hinterlegt ist, was mitten im Auslandsaufenthalt zum Problem wird. Drittens: die Steuererklärung für das Wegzugsjahr vergessen — sie ist Pflicht und muss auch aus dem Ausland eingereicht werden, wenn du im betreffenden Kalenderjahr noch in Deutschland Einkünfte hattest.",
        },
      ],
    },
    en: {
      title: "Germany admin checklist before your working holiday",
      description:
        "Deregistration, statutory health insurance options, pension contributions, taxes in your departure year, and bank accounts — what Germans need to sort before leaving for a working holiday in Australia, Canada, or New Zealand.",
      excerpt:
        "Leaving Germany for a year abroad means more than booking flights. Deregistration triggers consequences for health insurance, pension, taxes, and your bank account — here is what to do before you fly.",
      sections: [
        {
          paragraphs: [
            "A working holiday in Australia, Canada, or New Zealand looks simple on paper — visa, flight, off you go. From a German administrative standpoint, you are leaving as a registered resident and returning as someone who needs to re-register. Skipping the paperwork can mean contributions that keep running with no one home to benefit from them, a frozen bank account while you are on the other side of the world, or a tax bill waiting at the door when you return. This guide walks through the five key areas in the right order. Exact rules vary by health insurer and municipality, so use this as a map and confirm the details directly with the relevant office.",
          ],
        },
        {
          heading: "Deregistering (Abmeldung): when and why",
          paragraphs: [
            "Registering your departure at the Einwohnermeldeamt (residents' registration office) is the trigger for almost everything that follows. If you give up your home in Germany and move abroad, you are legally required to deregister under the Bundesmeldegesetz — this applies to working holidays too. You can file the Abmeldung as early as one week before moving out, and no later than two weeks after. You lose your German resident status and are treated as a non-resident for tax and insurance purposes from that point.",
            "The practical benefits are significant: statutory health insurance contributions stop, pension insurance becomes voluntary rather than mandatory, and you will no longer owe income tax in Germany from the following year — provided you truly have no address or habitual residence in Germany. The Rundfunkbeitrag (broadcasting levy) also ends. Keep the deregistration confirmation — both your health insurer and the tax office will ask for it as proof.",
          ],
          bullets: [
            "File the Abmeldung at your local Einwohnermeldeamt: at the earliest 1 week before moving out, at the latest 2 weeks after",
            "Bring: valid passport or Personalausweis, completed Abmeldeschein (often available to fill in online beforehand)",
            "On return: register your new address (Anmeldung) within 14 days of moving in",
            "Keep the confirmation slip — health insurer and tax office both need it",
          ],
        },
        {
          heading: "Health insurance: membership ends — the Anwartschaft keeps your return rights",
          paragraphs: [
            "Deregistering terminates your statutory health insurance (gesetzliche Krankenversicherung, GKV) membership. No more contributions — but there is a catch: after an absence of more than twelve months, you may lose the right to freely choose your insurer on return and could face waiting periods for certain benefits. Most statutory insurers therefore offer an Anwartschaftsversicherung.",
            "The Anwartschaft is not active insurance coverage — you cannot claim German health insurance benefits while abroad — but a kind of placeholder: it preserves your right to re-enrol seamlessly when you return, with no health screening and no waiting period. Contributions are low; at the TK, for example, the 2026 rate is roughly €23–28 per month depending on whether you have children. Whether your insurer offers an Anwartschaft and on what terms varies, so call them directly. Critical point: the Anwartschaft is not a substitute for travel and work health insurance for Australia. There is no social security agreement between Germany and Australia, and Medicare does not cover Working Holiday visa holders — you must arrange separate private health and work cover for your destination.",
          ],
          bullets: [
            "GKV membership ends when deregistration is processed",
            "Anwartschaftsversicherung preserves return rights — it provides no active cover abroad",
            "TK 2026 rate: approx. €23–28/month; other insurers may differ",
            "Apply for the Anwartschaft before departure — it cannot be taken out retrospectively",
            "Separately essential: private travel and health insurance for your destination country",
          ],
        },
        {
          heading: "Pension insurance: pause or keep contributing voluntarily?",
          paragraphs: [
            "Without a German address and without a German employment contract, you are no longer subject to mandatory pension insurance contributions. Your contributions simply pause — there is no penalty for stopping. It is worth understanding what that means for your retirement, though.",
            "Years abroad without contributions do not count as contribution years and do not increase your eventual pension. They may count under specific bilateral agreements, but Australia, Canada, and New Zealand each have limited or no pension-totalisation agreements with Germany for working holiday stays. If you want to avoid reducing your future pension, you can make voluntary contributions. This is explicitly available for German citizens with habitual residence abroad. In 2026 the minimum is €112.16 per month and the maximum is €1,571.70 — you choose the amount freely. Payments run through a German bank account or a contact person in Germany. Apply at Deutsche Rentenversicherung Bund before you leave.",
          ],
          bullets: [
            "Mandatory pension contributions pause when you have no German address and no German employment",
            "Voluntary contributions possible: €112.16–€1,571.70/month in 2026 (adjusted annually)",
            "Apply at Deutsche Rentenversicherung Bund — sort this before departure",
            "Contribution gaps reduce your eventual monthly pension but rarely threaten basic eligibility for short working holidays",
          ],
        },
        {
          heading: "Taxes: departure year, your final return, and limited liability",
          paragraphs: [
            "In the year you leave, you remain fully tax-resident in Germany until the day you actually move out. You must file an income tax return for that period. Your Australian, Canadian, or New Zealand earnings for the rest of the calendar year are subject to the Progressionsvorbehalt (progression clause): they do not get taxed in Germany, but they push up the rate applied to your German income for the same year. From the following year, Germany generally has no claim on your income — as long as you truly have no address or habitual residence there.",
            "If you continue to receive German-source income after leaving — rental income, certain capital gains, dividends from German companies — you fall under beschränkte Steuerpflicht (limited tax liability) and owe German tax on those items only. Australia, Canada, and New Zealand are not classified as low-tax jurisdictions, so the extended limited tax liability rules (§ 2 AStG) normally do not apply to working holiday travellers. If you hold German investment accounts, check whether ongoing income or planned disposals need to be reported before departure.",
          ],
          bullets: [
            "Departure year: file an income tax return for the period up to deregistration",
            "Foreign earnings in the departure year fall under the Progressionsvorbehalt",
            "From the following year, no German tax liability if you have no address or habitual presence in Germany",
            "Limited tax liability (beschränkte Steuerpflicht) continues for German-source income such as rent or dividends",
            "Consider consulting a tax adviser or Lohnsteuerhilfeverein before departure",
          ],
        },
        {
          heading: "Bank accounts, investment portfolios, and SCHUFA",
          paragraphs: [
            "Deregistering makes you a non-resident in the eyes of German banks — and that can affect your accounts. Many German neobanks (N26, DKB, ING) restrict or close accounts when the registered address is no longer in Germany. Check with your bank before you leave and ask whether a non-resident arrangement is possible.",
            "Traditional branch banks are often more flexible — a conversation at your local branch can keep the account open. Maintaining a German Girokonto matters: you will need it for transfers from abroad, possible tax refunds, and standing orders for ongoing German expenses. Investment accounts are a separate issue: many brokers restrict non-residents from trading German or European securities for regulatory reasons. Resolve any positions you want to keep or liquidate before departure. As for SCHUFA: your credit file stays intact while you are abroad. A dormant account with no activity does no damage to your score, as long as no negative entries arise.",
          ],
          bullets: [
            "Many neobanks only allow accounts for German residents — check terms before departure",
            "Branch bank: have the non-resident conversation in person and get the outcome in writing",
            "Investment account: trading restrictions for non-residents are common — settle positions in advance",
            "SCHUFA score is unaffected by a dormant account with no negative entries",
            "Keep the Girokonto open if possible for refunds, transfers, and standing orders",
          ],
        },
        {
          heading: "Kindergeld and BAföG: notify the relevant offices",
          paragraphs: [
            "Kindergeld (child benefit) is generally not paid during a working holiday. The Familienkasse (family benefit office) does not consider working holidays to be vocational training, so the entitlement lapses. You are required to inform the Familienkasse before you go. Continuing to receive Kindergeld you are no longer entitled to is a legal offence and typically triggers a repayment demand — sometimes with a tax penalty added. Exception: if a significant portion of the stay involves a formally recognised language course, a partial entitlement may apply; the Familienkasse decides case by case. If you are receiving BAföG (student finance) and your studies are paused or discontinued, inform the relevant office promptly — payments stop when studies are interrupted.",
          ],
          bullets: [
            "Kindergeld: working holiday does not qualify as vocational training — entitlement lapses",
            "Notify the Familienkasse before departure — continued payments without entitlement are unlawful",
            "Language course component may support a partial entitlement — seek individual clarification",
            "BAföG office: notify as soon as studies pause or end",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Tern is a multi-currency account you open from your phone before you board — all you need is your passport and Working Holiday visa approval (Tern is pre-launch; sign-ups are open now). Your account details for Australia, Canada, or New Zealand are ready before you land. Top up from euros at the mid-market rate with no hidden exchange margin, and withdraw from ATMs abroad with no fees. At a time when your German bank account may become more complicated to use from abroad, Tern gives you a straightforward way to move money between Germany and your destination.",
          ],
        },
      ],
      faq: [
        {
          q: "Do I have to deregister in Germany before a working holiday?",
          a: "If you are giving up your home in Germany and moving abroad, the Bundesmeldegesetz requires you to deregister. Failing to do so when you have genuinely moved out is an administrative offence. Deregistering also brings financial benefits: statutory health insurance contributions stop, pension contributions become voluntary, and German income tax liability generally ends from the following year. If you are staying temporarily registered at your parents' address because you are genuinely living there before departure, and they remain your registered address, the obligation differs — but contributions continue to run in full.",
        },
        {
          q: "What is the difference between an Anwartschaftsversicherung and regular health insurance abroad?",
          a: "The Anwartschaftsversicherung does not provide active medical cover — you cannot use it to claim for treatment in Australia. What it does is secure your right to re-enrol in your German statutory insurer when you return, without waiting periods and without any health assessment. For actual medical cover abroad, you need a separate private travel and work health insurance policy. There is no social security agreement between Germany and Australia, and the Australian Medicare system does not apply to Working Holiday visa holders.",
        },
        {
          q: "What are the three most common admin mistakes before a working holiday?",
          a: "First, forgetting to notify the Familienkasse — Kindergeld payments quietly continue even though entitlement has lapsed, and the repayment demand often lands after your return. Second, not checking the neobank terms — many providers close or freeze accounts once the German address is removed, which becomes a serious problem mid-trip. Third, overlooking the income tax return for the departure year — it is mandatory even if you are already abroad, and German-source income from that calendar year must still be declared.",
        },
      ],
    },
  },
};
