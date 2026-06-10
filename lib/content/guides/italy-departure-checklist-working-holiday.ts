import type { Article } from "../types";

export const article: Article = {
  slug: "italy-departure-checklist-working-holiday",
  kind: "guide",
  date: "2026-06-09",
  emoji: "🛵",
  accent: "bg-coral-300",
  readMinutes: 7,
  sources: [
    {
      label: "Ministero degli Affari Esteri — Anagrafe degli Italiani Residenti all'Estero (AIRE)",
      url: "https://www.esteri.it/en/servizi-opportunita/italiani-all-estero/aire_0/",
    },
    {
      label: "Consolato Generale d'Italia a Madrid — Chi si deve iscrivere all'AIRE e chi no",
      url: "https://consmadrid.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-italiano/anagrafe-degli-italiani-residenti-allestero-aire/chi-si-deve-iscrivere-alla-i-r-e-e-chi-no-e-obbligatorio/",
    },
    {
      label: "Agenzia delle Entrate — Regole generali per persone fisiche: residenza fiscale",
      url: "https://www.agenziaentrate.gov.it/portale/regole-generali-per-persone-fisiche1",
    },
  ],
  related: [
    "bank-account-working-holiday-australia",
    "superannuation-refund-dasp",
  ],
  i18n: {
    it: {
      title: "Partire per il working holiday: la checklist Italia",
      description:
        "AIRE, tessera sanitaria, residenza fiscale, SPID, conto corrente: tutto quello che devi sistemare in Italia prima di partire per il tuo working holiday in Australia, Canada o Nuova Zelanda.",
      excerpt:
        "AIRE obbligatoria? Cosa succede alla tua ASL? Come funzionano le tasse nell'anno della partenza? La guida pratica per mettere in ordine la burocrazia italiana prima di imbarcarti.",
      sections: [
        {
          paragraphs: [
            "Hai il visto, il biglietto aereo e il conto in banca. Manca ancora la parte meno glamour: sistemare la burocrazia italiana prima di partire. Per un working holiday di un anno o più in Australia, Canada o Nuova Zelanda, le scelte che fai nelle settimane prima della partenza — su AIRE, assistenza sanitaria, fisco, SPID e conto corrente — possono farti risparmiare tempo, denaro e grattacapi al rientro. Questa guida ti accompagna passo dopo passo. Dove le regole dipendono dalla tua situazione personale, lo diciamo chiaramente: per le scelte più delicate (soprattutto quelle fiscali), valuta una consulenza.",
          ],
        },
        {
          heading: "AIRE: obbligo, pro, contro e il trade-off per chi parte un anno",
          paragraphs: [
            "L'AIRE — Anagrafe degli Italiani Residenti all'Estero — è il registro in cui devono iscriversi i cittadini italiani che trasferiscono la propria residenza fuori dall'Italia per più di dodici mesi consecutivi. L'iscrizione va richiesta entro 90 giorni dall'espatrio, presso il consolato italiano della città in cui ti stabilisci. Dal 1° gennaio 2024 la mancata iscrizione comporta sanzioni amministrative da 200 a 1.000 euro per ogni anno di inadempienza, fino a un massimo di cinque anni.",
            "I lavoratori stagionali e chi soggiorna all'estero per meno di 12 mesi non rientrano nell'obbligo. Il working holiday standard dura esattamente 12 mesi: molti WHVers lo trattano come soggiorno temporaneo e non si iscrivono. Il confine è sottile e le autorità fanno riferimento all'intenzione di trasferire la residenza, non solo alla durata del visto. Se estendi il soggiorno — cosa frequente in Australia con il secondo o terzo anno di visto — l'obbligo scatta con più certezza.",
            "Iscriversi all'AIRE apre la strada alla residenza fiscale estera (con conseguente non tassabilità in Italia dei redditi prodotti all'estero, una volta soddisfatti i requisiti), permette di votare alle elezioni italiane per corrispondenza e garantisce pieno accesso ai servizi consolari. Dall'altro lato, comporta la cancellazione dal Servizio Sanitario Nazionale: la tua ASL cessa di coprire le spese sanitarie ordinarie e perdi la tessera sanitaria in corso di validità per le prestazioni programmate in Italia (resta l'urgenza, con limiti). Per chi parte un anno secco e punta a rientrare, molti scelgono di non iscriversi e di gestire le conseguenze come soggiorno temporaneo — ma esposti alle sanzioni se l'assenza supera i 12 mesi e viene contestata.",
          ],
          bullets: [
            "Scadenza: entro 90 giorni dalla data di trasferimento all'estero",
            "Dove: consolato italiano competente per la città di destinazione (non all'ASL o al Comune prima della partenza)",
            "Sanzione per omissione: da 200 a 1.000 euro per anno, in vigore dal 1° gennaio 2024",
            "Durata minima che fa scattare l'obbligo: più di 12 mesi consecutivi di residenza all'estero",
            "Lavoratori stagionali e soggiorni sotto i 12 mesi: esclusi dall'obbligo",
          ],
        },
        {
          heading: "Sanità: cosa succede con e senza AIRE",
          paragraphs: [
            "Se ti iscrivi all'AIRE, vieni cancellato dal Servizio Sanitario Nazionale. Questo significa che la tua tessera sanitaria non è più valida per le prestazioni ordinarie in Italia (visite specialistiche, ricoveri programmati, medico di base). Rimangono le prestazioni urgenti — pronto soccorso — per un massimo di 90 giorni all'anno, anche senza tessera sanitaria, presentando un'autocertificazione o un certificato di iscrizione all'AIRE presso l'ASL.",
            "Se non ti iscrivi all'AIRE, mantieni formalmente la residenza italiana e quindi la copertura SSN in Italia. All'estero, però, il SSN non copre nulla in nessun caso: sia che tu sia iscritto all'AIRE sia che non lo sia, dovrai stipulare una polizza assicurativa privata per la durata del working holiday. Molti visti working holiday non la rendono obbligatoria, ma è fortemente consigliata — una settimana di ricovero in Australia può costare decine di migliaia di dollari senza copertura. Valuta polizze che includano rimpatrio medico e copertura per il lavoro manuale, spesso richiesto nei farm job.",
          ],
          bullets: [
            "Con AIRE: SSN cancellato, urgenze coperte 90 giorni/anno in Italia, tessera sanitaria non valida per prestazioni ordinarie",
            "Senza AIRE: SSN formalmente attivo in Italia, ma nessuna copertura all'estero in ogni caso",
            "In entrambi i casi: assicurazione privata obbligatoria (o fortemente consigliata) per il periodo all'estero",
            "Prima di partire: usa le ultime settimane di copertura SSN per visite, dentista, occhiali e qualsiasi esame in sospeso",
          ],
        },
        {
          heading: "Residenza fiscale e tasse: l'anno della partenza",
          paragraphs: [
            "La residenza fiscale italiana si determina in base all'articolo 2 del TUIR (D.Lgs. 209/2023): sei fiscalmente residente in Italia se, per la maggior parte del periodo d'imposta (più di 183 giorni, 184 nei bisestili), hai la tua residenza anagrafica, il domicilio o la presenza fisica in Italia. L'iscrizione all'AIRE è un elemento rilevante ma non automaticamente sufficiente: anche chi si iscrive all'AIRE può restare fiscalmente residente in Italia se mantiene la propria casa familiare, il centro degli affari o la vita affettiva nel paese.",
            "Nell'anno della partenza, la situazione è quasi sempre mista: hai vissuto in Italia per una parte dell'anno e all'estero per l'altra. Se parti dopo il 2 luglio (o il 3 luglio nei bisestili), hai trascorso più di 183 giorni in Italia nell'anno solare e resti fiscalmente residente italiano per quell'anno — dichiari in Italia tutti i redditi ovunque prodotti. Se parti prima di quella data e ti iscrivi all'AIRE nel corso dell'anno, il quadro diventa più complesso e dipende anche da dove si trovano il tuo domicilio e il centro dei tuoi interessi. In ogni caso, per l'anno di partenza è opportuno presentare la dichiarazione dei redditi in Italia (almeno per i redditi prodotti nel periodo di residenza). Il consiglio è di consultare un commercialista o CAF prima della partenza.",
            "Dal secondo anno in poi — se sei iscritto all'AIRE, non hai più residenza né domicilio in Italia per la maggior parte dell'anno e non hai redditi di fonte italiana — in linea di principio non sei più soggetto a tassazione italiana sui redditi esteri. Questo è uno dei principali vantaggi pratici dell'iscrizione all'AIRE per chi si ferma più anni.",
          ],
          bullets: [
            "Regola dei 183 giorni: se sei in Italia per più della metà dell'anno solare, resti fiscalmente residente italiano per quell'anno",
            "Anno di partenza: quasi sempre dovrai presentare la dichiarazione dei redditi in Italia almeno per il periodo di residenza",
            "AIRE da sola non basta: serve anche l'assenza di residenza e domicilio effettivi in Italia per la maggior parte dell'anno",
            "Redditi di fonte italiana (immobili in affitto, lavoro svolto in Italia): tassabili in Italia anche da non residente",
            "Per la situazione personale: consulta un CAF o un commercialista prima della partenza",
          ],
        },
        {
          heading: "SPID e CIE: tienili attivi, ti serviranno",
          paragraphs: [
            "SPID e CIE (Carta d'Identità Elettronica) sono la tua identità digitale verso la pubblica amministrazione italiana. All'estero ti serviranno per accedere ai servizi consolari online (prenotare appuntamenti, rinnovare documenti), all'INPS, all'Agenzia delle Entrate e a decine di altri portali. Lo SPID è legato alla cittadinanza italiana, non alla residenza: puoi tenerlo e usarlo anche se sei iscritto all'AIRE. I principali provider (Poste Italiane, Aruba, InfoCert, Intesa, Namirial) permettono il rinnovo e la gestione da remoto.",
            "Prima di partire: verifica che il tuo SPID sia attivo e che le credenziali funzionino. Controlla anche la scadenza della tua CIE e del passaporto. Se la CIE è vicina alla scadenza, rinnovala prima di partire — all'estero il rinnovo passa dal consolato e richiede più tempo. Dal 2026, i servizi consolari online richiedono obbligatoriamente SPID, CIE o CNS per l'accesso.",
          ],
          bullets: [
            "SPID: mantienilo attivo, aggiorna numero di telefono e email prima della partenza",
            "CIE: verifica la scadenza; rinnovo all'estero tramite consolato (tempi più lunghi)",
            "Passaporto: deve essere valido per tutta la durata del visto — meglio avere almeno 6 mesi di validità residua",
            "Dal 2026: SPID/CIE obbligatori per i servizi consolari online — senza, non puoi accedere ai portali dal consolato",
          ],
        },
        {
          heading: "Conto corrente italiano: tenerlo aperto o chiuderlo?",
          paragraphs: [
            "La raccomandazione generale è di tenere aperto almeno un conto corrente italiano. Ti servirà per ricevere eventuali rimborsi fiscali (IRPEF, superbonus, rimborsi INPS), pagare tasse o contributi residui, gestire utenze o contratti ancora attivi in Italia, e ricevere trasferimenti dall'estero.",
            "Se ti iscrivi all'AIRE, la tua banca italiana deve essere informata del cambio di status a non residente. Le condizioni variano: alcune banche applicano commissioni diverse ai non residenti, altre richiedono di convertire il conto o lo chiudono. Verifica le condizioni specifiche della tua banca prima di partire. L'imposta di bollo annuale sul conto corrente (34,20 euro per le persone fisiche) si applica se la giacenza media supera i 5.000 euro, indipendentemente dalla residenza: non c'è esenzione automatica per i non residenti AIRE.",
            "Prima della partenza: chiudi o sospendi le utenze che non ti servono più (gas, luce, abbonamenti), comunica il cambio di indirizzo per la corrispondenza bancaria e imposta una domiciliazione o un delegato per eventuali comunicazioni importanti. Se hai un affitto, gestisci la disdetta con i termini contrattualmente previsti.",
          ],
          bullets: [
            "Tieni aperto almeno un conto italiano: serve per rimborsi fiscali, INPS e pagamenti residui",
            "Informa la banca del trasferimento all'estero se ti iscrivi all'AIRE — le condizioni possono cambiare",
            "Imposta di bollo: 34,20 euro/anno se la giacenza media supera 5.000 euro (vale anche per i non residenti)",
            "Chiudi o sospendi utenze, abbonamenti e contratti non necessari prima di partire",
            "Disdetta affitto: rispetta i termini di preavviso previsti dal contratto",
          ],
        },
        {
          heading: "Come ti aiuta Tern",
          paragraphs: [
            "Tern è un conto multi-valuta pensato per chi parte per un working holiday — puoi aprirlo dallo smartphone prima ancora di imbarcarti, con passaporto e visto working holiday approvato (siamo in pre-lancio: puoi già registrarti). Una volta a destinazione, hai subito un IBAN locale da comunicare al datore di lavoro, senza aspettare le settimane necessarie per aprire un conto in loco. I bonifici dall'Italia al conto Tern avvengono al tasso mid-market, senza margini nascosti sul cambio. Non ci sono commissioni sui prelievi agli ATM all'estero. Tern non sostituisce il tuo conto italiano — che ti conviene tenere aperto come spiegato sopra — ma si affianca a esso come strumento principale per gestire le spese quotidiane nel paese di destinazione.",
          ],
        },
      ],
      faq: [
        {
          q: "Se parto per un solo anno, devo iscrivermi all'AIRE?",
          a: "Tecnicamente, l'obbligo scatta per chi trasferisce la residenza all'estero per più di 12 mesi. Un working holiday standard dura esattamente 12 mesi, quindi molti partono senza iscriversi trattandolo come soggiorno temporaneo. Il rischio è che, se il soggiorno si prolunga o se le autorità contestano che la residenza sia stata effettivamente trasferita, le sanzioni (da 200 a 1.000 euro per anno, dal 2024) possono applicarsi. Se prevedi di fermarti più di un anno — ad esempio con il secondo anno di visto in Australia — l'iscrizione all'AIRE è quasi certamente obbligatoria. In caso di dubbio, consulta il consolato competente.",
        },
        {
          q: "Devo fare la dichiarazione dei redditi in Italia anche se lavoro in Australia?",
          a: "Nell'anno della partenza, quasi sempre sì: se sei stato in Italia per più di 183 giorni nell'anno solare, resti fiscalmente residente italiano per quell'intero anno e devi dichiarare in Italia tutti i redditi ovunque prodotti. Dal secondo anno, se sei iscritto all'AIRE e non hai più residenza né domicilio effettivi in Italia, in linea di principio non sei soggetto a tassazione italiana sui redditi esteri. Attenzione però: i redditi di fonte italiana (immobile in affitto, lavoro svolto in Italia) restano tassabili in Italia anche da non residente. La situazione dipende molto dal momento della partenza e da dove si trovano i tuoi interessi: consulta un CAF o un commercialista per l'anno di transizione.",
        },
        {
          q: "Se mi iscrivo all'AIRE, perdo completamente la tessera sanitaria?",
          a: "Non completamente, ma quasi. L'iscrizione all'AIRE comporta la cancellazione dal Servizio Sanitario Nazionale per le prestazioni ordinarie: perdi il medico di base, le visite specialistiche con ticket e i ricoveri programmati. Resta la copertura per le prestazioni urgenti (pronto soccorso) in Italia per un massimo di 90 giorni l'anno. All'estero, in ogni caso — sia che tu sia iscritto all'AIRE sia che non lo sia — il SSN non copre nulla: devi stipulare una polizza assicurativa privata per il periodo all'estero. Prima di partire, è consigliabile usare le ultime settimane di copertura SSN per visite già programmate.",
        },
      ],
    },
    en: {
      title: "Italy admin checklist before your working holiday",
      description:
        "AIRE registration, health coverage, tax residency, SPID digital identity, and your Italian bank account — what to sort out before you leave for Australia, Canada or New Zealand.",
      excerpt:
        "A working holiday of a year or more means sorting out Italy-side paperwork first. AIRE, health insurance, tax residency, SPID, and your bank account all need attention before you fly.",
      sections: [
        {
          paragraphs: [
            "You have the visa, the flights, and the excitement. What is less glamorous — but genuinely important — is sorting out the Italian bureaucracy before you leave. For a working holiday of a year or more in Australia, Canada, or New Zealand, the choices you make in the weeks before departure about AIRE registration, health coverage, taxes, digital identity, and your bank account can save real money and prevent headaches when you return. This guide walks through each area in plain terms. Where rules depend on personal circumstances — especially on the tax side — we flag it clearly: for the most consequential decisions, it is worth a quick consultation with an accountant (commercialista) or a CAF centre.",
          ],
        },
        {
          heading: "AIRE: the obligation, the trade-offs, and the one-year grey zone",
          paragraphs: [
            "AIRE — Anagrafe degli Italiani Residenti all'Estero — is the official registry of Italian citizens living abroad. You are required to register with the Italian consulate in your destination city within 90 days of establishing residence abroad, if you intend to live outside Italy for more than 12 consecutive months. Since 1 January 2024, failing to register within that window carries an administrative fine of between 200 and 1,000 euros per year of non-registration, up to a maximum of five years.",
            "Seasonal workers and short-term stays of under 12 months are exempt. A standard working holiday visa lasts exactly 12 months, which creates a genuine grey zone: many WHVers treat the trip as a temporary stay and do not register, which is technically defensible for a single-year trip. The obligation is framed around the intention to transfer residence, not just the visa duration. If you extend — common in Australia through a second or third year visa — the obligation becomes much clearer. Registering with AIRE gives you access to consular services, the right to vote in Italian elections from abroad, and — once you also satisfy the tax-residency conditions — exemption from Italian income tax on earnings made abroad. The downside is losing ordinary Italian NHS (SSN) coverage.",
          ],
          bullets: [
            "Deadline: within 90 days of establishing residence abroad",
            "Where: the Italian consulate in your destination city (not the comune or ASL before departure)",
            "Fine for non-registration: 200–1,000 euros per year, enforceable from 1 January 2024",
            "Threshold: more than 12 consecutive months abroad triggers the obligation",
            "Seasonal workers and sub-12-month stays: exempt",
          ],
        },
        {
          heading: "Health coverage: what changes with and without AIRE",
          paragraphs: [
            "Registering with AIRE removes you from the Italian National Health Service (SSN). Your tessera sanitaria (health card) is no longer valid for routine care in Italy — no GP, no specialist visits with co-pay, no planned hospital admissions. Emergency care at Italian public hospitals remains available for up to 90 days per year, even without a valid card, by presenting a self-declaration or your AIRE certificate at the local ASL.",
            "If you do not register with AIRE, you formally retain Italian residency and NHS coverage in Italy. This does not help you abroad: regardless of AIRE status, the Italian NHS does not cover any treatment outside Italy. In both cases, you need private travel or working holiday insurance for the duration of your trip. Some working holiday visas do not legally require health insurance, but going uninsured is a significant risk — a week in an Australian hospital without coverage can cost tens of thousands of dollars. Look for a policy that covers manual work (often required for farm jobs) and medical repatriation. Before you leave, use any remaining weeks of SSN coverage to catch up on dental work, specialist visits, glasses, or any tests you have been putting off.",
          ],
          bullets: [
            "With AIRE: SSN coverage ends for routine care; emergency cover stays (90 days per year in Italy)",
            "Without AIRE: SSN formally active in Italy, but no coverage abroad in either case",
            "Private insurance: essential for your working holiday regardless of AIRE status",
            "Before departure: use remaining NHS coverage for dental, specialist, and any deferred appointments",
          ],
        },
        {
          heading: "Tax residency and the departure year",
          paragraphs: [
            "Italian tax residency is governed by Article 2 of the TUIR (as updated by Legislative Decree 209/2023). You are tax-resident in Italy if, for the majority of the tax year — more than 183 days (184 in a leap year) — you have your registered residence, your domicile, or your physical presence in Italy. AIRE registration is a relevant factor but is not automatically sufficient on its own: even AIRE registrants can remain Italian tax residents if they keep their family home, the centre of their professional and personal life, or their effective domicile in Italy.",
            "In the year of departure, the situation is almost always mixed. If you leave after 2 July (3 July in a leap year), you will have spent more than 183 days in Italy in the calendar year and remain Italian tax-resident for that entire year — meaning you must declare all worldwide income in Italy. If you leave before that date and also register with AIRE, the picture depends further on where your domicile and centre of interests lie. In most cases, you will still need to file an Italian tax return for the year of departure, at least covering the period of Italian residency. From the second full year abroad — if you are AIRE-registered and have no effective residence or domicile in Italy for the majority of the year — you are in principle no longer taxed in Italy on foreign-source income. That said, Italian-source income (rental income, work physically performed in Italy) remains taxable in Italy even as a non-resident. For the transition year, a consultation with a commercialista or CAF is well worth the time.",
          ],
          bullets: [
            "183-day rule: if you are in Italy for more than half the calendar year, you remain Italian tax-resident for that year",
            "Year of departure: an Italian tax return is almost always needed for at least the period of Italian residency",
            "AIRE alone is not enough: you also need to have no effective residence or domicile in Italy for the majority of the year",
            "Italian-source income (rental property, work done in Italy): taxable in Italy even as a non-resident",
            "Get advice: consult a commercialista or CAF before you leave, especially for the transition year",
          ],
        },
        {
          heading: "SPID and CIE: keep them working before you board",
          paragraphs: [
            "SPID (Italy's digital identity system) and the CIE (electronic identity card) are your gateways to Italian public administration from abroad. You will need them to book appointments at the consulate, access INPS, the Agenzia delle Entrate, and dozens of other government portals. SPID is tied to Italian citizenship, not residency — you can keep and use it even after registering with AIRE. The main providers (Poste Italiane, Aruba, InfoCert, Intesa, Namirial) support remote renewal and account management.",
            "Before you leave: log in to confirm your SPID credentials work and that your registered phone number and email address are up to date — these are used for two-factor authentication. Check the expiry date on your CIE and passport. If either is expiring within the next couple of years, renewing before departure is strongly advisable: renewals from abroad go through the consulate and can take considerably longer. From 2026, SPID, CIE, or CNS are mandatory for accessing Italian consular services online.",
          ],
          bullets: [
            "SPID: test your credentials before departure and update your phone number and email",
            "CIE: check expiry — renewal abroad via consulate takes longer than at the comune",
            "Passport: must be valid for the full duration of your visa; aim for at least 6 months of remaining validity",
            "From 2026: SPID/CIE mandatory for online consular services",
          ],
        },
        {
          heading: "Your Italian bank account: keep it open",
          paragraphs: [
            "The general recommendation is to keep at least one Italian bank account open. You will likely need it to receive tax refunds (IRPEF), pay any residual taxes or social contributions, manage any Italian contracts that remain active, and receive transfers from abroad.",
            "If you register with AIRE, you must inform your Italian bank of your change to non-resident status. Conditions vary by institution: some banks charge different fees to non-residents, others require converting the account type or may close it. Check your bank's specific terms before you leave. The annual imposta di bollo (stamp duty) on Italian current accounts — 34.20 euros per year for individuals — applies when the average balance exceeds 5,000 euros, regardless of residency status. There is no automatic exemption for AIRE-registered non-residents.",
            "Before departure: close or suspend utilities (gas, electricity, streaming services, gym memberships) you will no longer need. Update your mailing address for bank correspondence, or set up a trusted family member to handle important post. If you are renting, give notice in accordance with the contractual terms — typically three to six months depending on the lease.",
          ],
          bullets: [
            "Keep at least one Italian account open: needed for tax refunds, INPS, and residual payments",
            "Inform your bank if you register with AIRE — account conditions may change",
            "Imposta di bollo: 34.20 euros per year when average balance exceeds 5,000 euros (applies to non-residents too)",
            "Close or suspend utilities, subscriptions, and unnecessary contracts before leaving",
            "Rental notice: check the contractual notice period — typically 3–6 months",
          ],
        },
        {
          heading: "How Tern helps",
          paragraphs: [
            "Tern is a multi-currency account built for working holiday travellers — you can open it from your phone before you board, with just your passport and working holiday visa approval (we are pre-launch, but registration is open now). You arrive with local account details already in hand, so you can give an employer your bank information from day one rather than waiting weeks for a local account to open. Top-ups from Italy go through at the mid-market rate with no hidden exchange margin. There are no ATM withdrawal fees abroad. Tern is designed to sit alongside your Italian account — which we recommend keeping open for the reasons above — as your primary account for everyday spending and payroll at your destination.",
          ],
        },
      ],
      faq: [
        {
          q: "Do I have to register with AIRE for a one-year working holiday?",
          a: "Strictly speaking, the obligation applies when you transfer your residence abroad for more than 12 consecutive months. A standard working holiday visa runs for exactly 12 months, so many travellers treat it as a temporary stay and do not register — which is technically defensible for a single-year trip. The risk is that if your stay extends, or if the authorities take the view that you genuinely transferred your residence, fines of 200–1,000 euros per year (enforceable since January 2024) can apply. If you plan to stay for a second or third year — common in Australia — registration becomes clearly obligatory. When in doubt, contact the competent Italian consulate in your destination city.",
        },
        {
          q: "Do I need to file an Italian tax return if I work in Australia?",
          a: "In the year of departure, almost certainly yes: if you spent more than 183 days in Italy in the calendar year, you remain Italian tax-resident for that year and must declare all worldwide income in Italy. From the second full year abroad, if you are AIRE-registered and have no effective residence or domicile in Italy for the majority of the year, you are in principle no longer taxed in Italy on foreign earnings. Italian-source income — such as rental income from a property you own in Italy — remains taxable in Italy regardless. The transition year is the most complex: a quick session with a commercialista or CAF before you leave is well worth it.",
        },
        {
          q: "If I register with AIRE, do I lose my Italian health card completely?",
          a: "Not completely, but significantly. AIRE registration cancels your ordinary SSN coverage in Italy: you lose your GP, specialist visits, and planned hospital care. Emergency care at Italian public hospitals remains available for up to 90 days per year. Abroad — regardless of AIRE status — the Italian NHS covers nothing at all. You need private travel or working holiday insurance for the full duration of your trip. Before you leave, it is worth using any remaining weeks of SSN coverage to take care of dental work, specialist visits, and any appointments you have been deferring.",
        },
      ],
    },
  },
};
