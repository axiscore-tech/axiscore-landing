# AXIS CORE — Project Summary
*Documento di riepilogo per continuità tra chat*

---

## Il Progetto

**Brand:** AXIS CORE — Bio-Recovery Technologies
**Prodotto:** Cuscino per trazione cervicale in schiuma poliuretanica avanzata
- Variante standard: doppio lato (15° e 25°)
- Variante premium: riscaldamento in grafene via USB (38–42°C)
**Certificazioni:** CE / RoHS
**Canale di vendita:** Amazon Italia + Pan-Europeo
**Sito:** https://axiscore.tech
**Email:** info@axiscore.tech

---

## Brand Identity

**Palette colori:**
- Nero profondo: #07070D
- Nero secondario: #0D0D18
- Blu elettrico: #00AAFF
- Oro titanio: #C9A84C
- Grigio acciaio: #8A9BB0
- Bianco ghiaccio: #F0F4F8

**Font sito:** Rajdhani (titoli) + Space Mono (dati tecnici) + Inter (corpo)
**Tagline:** ALIGN. RESTORE. OPTIMIZE.
**Concept logo:** Vertebra cervicale + X + microchip — simbolo della fusione tra biologia e tecnologia
**File logo:**
- `logo-dark.svg` — su sfondo scuro (sito)
- `logo-light.svg` — su sfondo chiaro (stampa)
- `logo-icon.svg` — solo simbolo (packaging, app, QR)
- `favicon.svg` — icona browser
- `logo-email.png` — logo per email (400x100px, bg #0D0D18)

---

## Infrastruttura Tecnica

### Dominio
- **Registrar:** Aruba
- **DNS/CDN:** Cloudflare (nameserver: nico.ns.cloudflare.com, venus.ns.cloudflare.com)
- **DNSSEC:** Disattivo

### Hosting
- **Piattaforma:** Cloudflare Pages
- **Repository:** https://github.com/axiscore-tech/axiscore-landing
- **Branch produzione:** main
- **Deploy:** automatico ad ogni commit su main
- **URL Pages:** axiscore-landing.pages.dev
- **URL custom:** axiscore.tech

### Backend Form
- **Servizio:** Cloudflare Worker
- **Nome worker:** axiscore-warranty
- **URL tecnico:** axiscore-warranty.white-wave-af86.workers.dev
- **URL custom:** warranty.axiscore.tech
- **Variabile ambiente:** BREVO_API_KEY (secret, nessuna scadenza)
- **Funzione:** riceve POST dal form garanzia → salva contatto su Brevo lista #2 → invia email di benvenuto

### Email Marketing
- **Piattaforma:** Brevo (account: info@axiscore.tech)
- **Piano:** Free (300 email/giorno)
- **Mittente verificato:** Axiscore <info@axiscore.tech>
- **DKIM:** ✅ axiscore.tech
- **DMARC:** ✅ configurato
- **Lista principale:** Axis Core - Waitlist (#2)

---

## Sequenza Email Nurturing

**Automazione:** "AXIS CORE — Sequenza Nurturing" (attiva)
**Trigger:** Contatto aggiunto alla lista Axis Core - Waitlist #2

| # | Timing | Oggetto IT | Tag |
|---|---|---|---|
| Email 1 | Immediata | ✓ Garanzia AXIS CORE attivata — Benvenuto | (Worker) |
| Email 2 | Giorno 3 | AXIS CORE // Il tuo primo errore da evitare | nurturing3gg |
| Email 3 | Giorno 7 | AXIS CORE // 7 giorni. Come stai? | nurturing7gg |
| Email 4 | Giorno 14 | AXIS CORE // [ANTEPRIMA] I video stanno arrivando | nurturing14gg |
| Email 5 | Giorno 30 | AXIS CORE // Un favore (se te lo sei meritato) | nurturing30gg |

⚠️ **DA FARE:** Email 5 contiene placeholder Amazon `https://www.amazon.it` nel CTA "LASCIA LA TUA RECENSIONE →". Aggiornare con URL prodotto reale al lancio.

⚠️ **DA FARE:** Creare versioni EN di tutte le email (in corso).

---

## Landing Page — Struttura

**File:** index.html (repository GitHub)
**Design:** Mobile-first, responsive (mobile/tablet/desktop)
**Lingua:** Bilingue IT/EN con switcher in tempo reale

### Sezioni:
1. **Hero** — Hook emozionale, certificazioni, 2 CTA
2. **Guida rapida** — Lato A (15°) vs Lato B (25°), specifiche cliniche C4-C7
3. **Routine 8 minuti** — Timer interattivo 3 step + box "video in arrivo" con raccolta email
4. **Garanzia estesa** — Form registrazione prodotto → Worker → Brevo

### Features tecniche:
- Scroll reveal animations
- Tab interattivi sezione 2 (mobile) / dual card (desktop)
- Form con validazione client-side
- Chiamata al Worker `warranty.axiscore.tech`
- Meta tags SEO e Open Graph

---

## Produzione Video (DA FARE)

**Strumento consigliato:** HeyGen (piano ~$29/mese)
**Concept:** Avatar coach AXIS CORE, bilingue IT/EN

**Video da produrre:**
1. **Video 1** (60 sec) — Unboxing e primo utilizzo
2. **Video 2** (8 min) — Routine guidata completa
3. **Video 3** (90 sec) — Errori comuni da evitare

**Script già pronti:** nelle sezioni della landing page
**Da fare in chat dedicata:** registrazione avatar, voice over, editing, upload

---

## Account e Credenziali (NON condividere)

| Servizio | Account | Note |
|---|---|---|
| Aruba | 730867@aruba.it | Registrar dominio |
| Cloudflare | info@axiscore.tech | DNS + Pages + Worker |
| GitHub | axiscore-tech | Repository: axiscore-landing |
| Brevo | info@axiscore.tech | Email marketing |
| HeyGen | da creare | Video AI |
| Amazon Seller | da creare | Vendita prodotto |

---

## Prossimi Step

### Immediati
- [ ] Traduzione email EN su Brevo (in corso)
- [ ] Foto prodotto brandizzato (attesa prototipi)
- [ ] Definizione colori packaging e prodotto

### Breve termine
- [ ] Produzione video HeyGen (chat dedicata)
- [ ] Setup Amazon Seller Central (chat dedicata)
- [ ] Google Search Console + Cloudflare Analytics (chat dedicata)

### Al lancio
- [ ] Aggiornare link Amazon nell'Email 5 Brevo
- [ ] Aggiungere video reali nella sezione 3 landing page
- [ ] Campagna PPC Amazon

---

*Documento generato il 02/06/2026 — aggiornare ad ogni sessione*
