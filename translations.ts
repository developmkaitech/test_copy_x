
export type Language = 'it' | 'en' | 'de';

export const translations = {
  it: {
    nav: {
      home: 'Home',
      apartments: 'Suites & Villa',
      villa: 'La Villa',
      experience: 'Esperienze',
      gallery: 'Gallery',
      contact: 'Contatti',
      book: 'Prenota ora',
    },
    booking: {
      title: 'Prenota il tuo Soggiorno',
      step1: 'Scegli Soluzione',
      step2: 'Seleziona Date',
      step3: 'I tuoi Dati',
      select_apt: 'Seleziona una soluzione per continuare',
      checkin: 'Check-in',
      checkout: 'Check-out',
      guests: 'Ospiti',
      adults: 'Adulti',
      children: 'Bambini',
      total: 'Totale Stimato',
      price_disclaimer: '*Prezzo indicativo, soggetto a conferma.',
      next: 'Continua',
      back: 'Indietro',
      confirm: 'Invia Richiesta',
      success_title: 'Richiesta Inviata!',
      success_desc: 'Grazie per aver scelto Luminaria Essence. Abbiamo ricevuto la tua richiesta e ti risponderemo via email entro 24 ore per confermare la disponibilità.',
      whatsapp_text: 'Preferisci parlare subito con noi?',
      whatsapp_btn: 'Contattaci su WhatsApp',
      close: 'Chiudi',
      errors: {
        dates: 'Seleziona le date di arrivo e partenza',
        min_stay: 'Soggiorno minimo di 3 notti',
        unavailable: 'Alcune date selezionate non sono disponibili',
        form: 'Compila tutti i campi obbligatori'
      },
      form: {
        name: 'Nome',
        surname: 'Cognome',
        email: 'Email',
        phone: 'Telefono',
        notes: 'Richieste Speciali',
        privacy: 'Accetto la Privacy Policy e il trattamento dei dati',
      }
    },
    hero: {
      location: 'Bardolino, Lago di Garda',
      line1: 'Dove',
      line2: 'La luce del Garda',
      line3: 'Incontra il lusso',
      desc: 'Una Villa e due suites esclusive, un\'esperienza sensoriale unica.',
      cta_book: 'Prenota la Tua Esperienza',
      cta_discover: 'Scopri di più',
    },
    apartments: {
      title_sm: 'Le Nostre Soluzioni',
      title: 'Eleganza Senza Tempo',
      desc: 'Ogni spazio è un capolavoro di design, pensato per garantire il massimo comfort e privacy. Materiali pregiati, luce naturale e tecnologia si fondono in armonia.',
      guests: 'Ospiti',
      rooms: 'Camere',
      bathrooms: 'Bagni',
      gallery: 'Vedi Gallery',
      availability: 'Richiedi Disponibilità',
      services: 'Servizi Esclusivi',
      items: {
        'suite-essence': {
          name: 'Suite Essence Lago',
          desc: 'L\'espressione massima del lusso a Luminaria. Un open space raffinato dove la luce naturale scolpisce gli spazi, arricchito da una terrazza panoramica privata.',
          features: ['Terrazza Panoramica', 'Vasca Idromassaggio', 'Cantina Vini Privata', 'Smart Home Control']
        },
        'suite-lumiere': {
          name: 'Suite Essence Garden',
          desc: 'Un rifugio intimo e accogliente, caratterizzato da toni caldi e materiali naturali. Ideale per coppie alla ricerca di privacy assoluta e romanticismo.',
          features: ['Patio Giardino', 'Doccia Cromoterapica', 'Angolo Lettura', 'Ingresso Indipendente']
        },
        'villa-luminaria': {
          name: 'Villa Luminaria',
          desc: 'Una villa esclusiva di 150m² per 6-8 persone. Tre camere lussuose ciascuna con bagno privato, di cui una con vasca freestanding. Piscina privata e vista lago mozzafiato.',
          features: ['Piscina Privata', 'Vista Lago', 'Vasca Freestanding', 'Giardino Privato']
        }
      }
    },
    villa: {
      label: 'La Villa',
      title: 'Un luogo dove luce, natura ed eleganza si fondono',
      p1: 'Nel cuore di Bardolino, immerso in un’oasi verde di circa 5.000 metri quadrati con oltre 100 ulivi, nasce un esclusivo complesso di lusso per vacanze, a pochi passi dal Lago di Garda. Al centro del progetto si trova la Villa di Lusso Luminaria, con vista lago, piscina privata, giardino privato e tre ampie camere doppie finemente arredate. Il complesso è completato dalla Suite Essence Lago, con terrazza panoramica sul tetto e vista lago, e dalla Suite Essence Garden, con corte interna protetta – entrambe adatte per due/quattro persone. L’intero progetto è dedicato alla luce: l’architettura e la progettazione degli spazi permettono alla luce di fluire consapevolmente in ogni ambiente, creando un’atmosfera unica di apertura e tranquillità.',
      p2: 'Particolare attenzione è stata riservata anche ai nostri ospiti più piccoli. Un’area giochi pensata con cura invita i bambini a scoprire e divertirsi, mentre freccette, ping-pong e calcio balilla offrono momenti di svago e movimento condivisi per ragazzi e adulti. In questo modo, il complesso diventa un luogo in cui tutte le generazioni si sentono a proprio agio. Anche i cani sono i benvenuti, affinché tutta la famiglia possa trascorrere il soggiorno insieme. Alberi da frutto e un giardino di erbe aromatiche sono a disposizione degli ospiti e sottolineano il profondo legame con la natura. Un parcheggio coperto garantisce ulteriore comfort. Questo complesso di lusso è molto più di un semplice luogo di soggiorno: è un rifugio esclusivo per chi cerca qualcosa di speciale, nel cuore di Bardolino e allo stesso tempo immerso in una quiete assoluta, vicino al lago e profondamente connesso alla natura del Lago di Garda.',
      services: {
        wifi: 'Wi-Fi Fibra',
        ac: 'Aria Condizionata',
        parking: 'Parcheggio Riservato',
        garden: 'Giardino Privato',
        kitchen: 'Cucina Attrezzata',
        tv: 'Smart TV & Audio',
        breakfast: 'Colazione in Suite',
        pool: 'Piscina'
      }
    },
    experiences: {
      label: 'Esperienze & Territorio',
      title: 'La Magia del Garda',
      desc: 'Bardolino non è solo una destinazione, è uno stile di vita. Tra vigneti storici, acque cristalline e borghi medievali, ogni giorno è una scoperta.',
      cards: {
        wine: { title: 'Enogastronomia', desc: 'Immergetevi nei sapori del Bardolino DOC e del Chiaretto. Visite esclusive alle cantine locali.' },
        lake: { title: 'Vita di Lago', desc: 'Noleggio barche private, tour al tramonto e sport acquatici per vivere il lago da protagonista.' },
        sport: { title: 'Natura & Sport', desc: 'Chilometri di piste ciclabili panoramiche e sentieri per trekking che si snodano tra gli ulivi.' },
        surroundings: { title: 'Dintorni', desc: 'Dall\'Arena di Verona ai borghi fortificati. La storia e l\'arte sono a portata di mano.' }
      }
    },
    gallery: {
      label: 'Visual Storytelling',
      title: 'L\'Anima di Luminaria',
      desc: 'Uno sguardo ai dettagli che rendono unico il vostro soggiorno.',
      cats: {
        exterior: 'Esterni',
        interior: 'Interni',
        lake_view: 'Vista Lago',
        details: 'Dettagli',
        territory: 'Territorio'
      },
      alts: {
        pool: 'Piscina e relax',
        bed: 'Camera da letto Suite Essence Lago',
        sunset: 'Tramonto sul Garda',
        design: 'Dettagli di design',
        wine: 'Degustazione vini',
        garden: 'Giardino mediterraneo'
      }
    },
    reviews: {
      label: 'Dicono di Noi',
      title: 'Parole dei Nostri Ospiti',
      items: [
        { text: 'Un sogno ad occhi aperti. La Suite Essence Lago è pura poesia architettonica. La privacy è assoluta e la posizione a due passi dal lago è impagabile.' },
        { text: 'Luminaria Essence ridefinisce il concetto di ospitalità. Ogni dettaglio, dal profumo delle lenzuola alla colazione artigianale, è curato con amore.' },
        { text: 'Il soggiorno più rilassante che abbiamo mai avuto in Italia. Il giardino è un\'oasi di tranquillità. Perfezione a Bardolino.' }
      ]
    },
    contact: {
      label: 'Contattaci',
      title: 'Prenota il Tuo Soggiorno',
      desc: 'Siamo a disposizione per creare la vostra esperienza su misura. Compilate il modulo per verificare la disponibilità o per qualsiasi richiesta speciale.',
      address_title: 'Indirizzo',
      phone_title: 'Telefono',
      email_title: 'Email',
      follow: 'Seguici',
      success_title: 'Richiesta Inviata',
      success_desc: 'Grazie per averci contattato. Vi risponderemo al più presto.',
      another_req: 'Invia un\'altra richiesta',
      send_btn: 'Invia Richiesta',
      sending: 'Invio in corso...',
      form: {
        name: 'Nome',
        surname: 'Cognome',
        email: 'Email',
        phone: 'Telefono',
        checkin: 'Check-in',
        checkout: 'Check-out',
        guests: 'Ospiti',
        apartment: 'Soluzione',
        message: 'Messaggio',
        apt_options: {
            both: 'Tutti'
        },
        guest_options: {
            1: '1 Ospite',
            many: 'Ospiti'
        },
        placeholder_msg: 'Richieste speciali o domande...'
      }
    },
    footer: {
      desc: 'Dove la luce incontra il lusso. Un\'esperienza di soggiorno indimenticabile sulle rive del Lago di Garda.',
      nav: 'Navigazione',
      legal: 'Note Legali',
      privacy: 'Privacy Policy',
      cookie: 'Cookie Policy',
      terms: 'Termini e Condizioni',
      sustainability: 'Sostenibilità',
      rights: 'Tutti i diritti riservati.',
      design: 'Designed with elegance in Italy.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      apartments: 'Suites & Villa',
      villa: 'The Villa',
      experience: 'Experiences',
      gallery: 'Gallery',
      contact: 'Contact',
      book: 'Book Now',
    },
    booking: {
      title: 'Book Your Stay',
      step1: 'Choose Solution',
      step2: 'Select Dates',
      step3: 'Your Details',
      select_apt: 'Select a solution to continue',
      checkin: 'Check-in',
      checkout: 'Check-out',
      guests: 'Guests',
      adults: 'Adults',
      children: 'Children',
      total: 'Estimated Total',
      price_disclaimer: '*Indicative price, subject to confirmation.',
      next: 'Continue',
      back: 'Back',
      confirm: 'Send Request',
      success_title: 'Request Sent!',
      success_desc: 'Thank you for choosing Luminaria Essence. We have received your request and will reply via email within 24 hours to confirm availability.',
      whatsapp_text: 'Prefer to speak with us now?',
      whatsapp_btn: 'Contact us on WhatsApp',
      close: 'Close',
      errors: {
        dates: 'Please select arrival and departure dates',
        min_stay: 'Minimum stay of 3 nights',
        unavailable: 'Some selected dates are not available',
        form: 'Please fill in all required fields'
      },
      form: {
        name: 'First Name',
        surname: 'Last Name',
        email: 'Email',
        phone: 'Phone',
        notes: 'Special Requests',
        privacy: 'I accept the Privacy Policy and data processing',
      }
    },
    hero: {
      location: 'Bardolino, Lake Garda',
      line1: 'Where',
      line2: 'Garda Light',
      line3: 'Meets Luxury',
      desc: 'A Villa and two exclusive suites, a unique sensory experience.',
      cta_book: 'Book Your Experience',
      cta_discover: 'Discover more',
    },
    apartments: {
      title_sm: 'Our Accommodations',
      title: 'Timeless Elegance',
      desc: 'Each space is a masterpiece of design, crafted to ensure maximum comfort and privacy. Fine materials, natural light, and technology blend in harmony.',
      guests: 'Guests',
      rooms: 'Rooms',
      bathrooms: 'Baths',
      gallery: 'View Gallery',
      availability: 'Request Availability',
      services: 'Exclusive Services',
      items: {
        'suite-essence': {
          name: 'Suite Essence Lago',
          desc: 'The ultimate expression of luxury at Luminaria. A refined open space where natural light sculpts the areas, enriched by a private panoramic terrace.',
          features: ['Panoramic Terrace', 'Whirlpool Tub', 'Private Wine Cellar', 'Smart Home Control']
        },
        'suite-lumiere': {
          name: 'Suite Essence Garden',
          desc: 'An intimate and cozy retreat, characterized by warm tones and natural materials. Ideal for couples seeking absolute privacy and romance.',
          features: ['Garden Patio', 'Chromotherapy Shower', 'Reading Corner', 'Private Entrance']
        },
        'villa-luminaria': {
          name: 'Villa Luminaria',
          desc: 'An exclusive 150m² villa for 6-8 guests. Three luxurious bedrooms, each with private bathroom, one featuring a freestanding bathtub. Private pool and breathtaking lake view.',
          features: ['Private Pool', 'Lake View', 'Freestanding Bathtub', 'Private Garden']
        }
      }
    },
    villa: {
      label: 'The Villa',
      title: 'A place where light, nature and elegance come together',
      p1: 'In the heart of Bardolino, immersed in a green oasis of about 5,000 square meters with over 100 olive trees, an exclusive luxury holiday complex is born, just a few steps from Lake Garda. At the center of the project is the Luxury Villa Luminaria, with lake view, private pool, private garden, and three large, finely furnished double rooms. The complex is completed by the Suite Essence Lago, with a panoramic roof terrace and lake view, and the Suite Essence Garden, with a protected internal courtyard – both suitable for two to four people. The entire project is dedicated to light: the architecture and design of the spaces allow light to flow consciously into every room, creating a unique atmosphere of openness and tranquility.',
      p2: 'Particular attention has also been paid to our younger guests. A carefully designed play area invites children to discover and have fun, while darts, ping-pong, and table football offer moments of leisure and shared movement for teenagers and adults. In this way, the complex becomes a place where all generations feel at ease. Dogs are also welcome, so that the whole family can spend their stay together. Fruit trees and an herb garden are available to guests, highlighting the deep connection with nature. Covered parking ensures further comfort. This luxury complex is much more than just a place to stay: it is an exclusive refuge for those looking for something special, in the heart of Bardolino and at the same time immersed in absolute quiet, close to the lake and deeply connected to the nature of Lake Garda.',
      services: {
        wifi: 'Fiber Wi-Fi',
        ac: 'Air Conditioning',
        parking: 'Reserved Parking',
        garden: 'Private Garden',
        kitchen: 'Equipped Kitchen',
        tv: 'Smart TV & Audio',
        breakfast: 'In-Suite Breakfast',
        pool: 'Swimming Pool'
      }
    },
    experiences: {
      label: 'Experiences & Territory',
      title: ' The Magic of Garda',
      desc: 'Bardolino is not just a destination, it is a lifestyle. Between historic vineyards, crystal clear waters, and medieval villages, every day is a discovery.',
      cards: {
        wine: { title: 'Food & Wine', desc: 'Immerse yourself in the flavors of Bardolino DOC and Chiaretto. Exclusive visits to local wineries.' },
        lake: { title: 'Lake Life', desc: 'Private boat rentals, sunset tours, and water sports to experience the lake as a protagonist.' },
        sport: { title: 'Natur & Sport', desc: 'Kilometers of panoramic cycle paths and trekking trails winding through olive groves.' },
        surroundings: { title: 'Surroundings', desc: 'From the Verona Arena to fortified villages. History and art are at your fingertips.' }
      }
    },
    gallery: {
      label: 'Visual Storytelling',
      title: 'The Soul of Luminaria',
      desc: 'A glance at the details that make your stay unique.',
      cats: {
        exterior: 'Exterior',
        interior: 'Interior',
        lake_view: 'Lake View',
        details: 'Details',
        territory: 'Territory'
      },
      alts: {
        pool: 'Pool and relax',
        bed: 'Suite Essence Lago Bedroom',
        sunset: 'Sunset on Garda',
        design: 'Design details',
        wine: 'Wine tasting',
        garden: 'Mediterranean garden'
      }
    },
    reviews: {
      label: 'Testimonials',
      title: 'Words from our Guests',
      items: [
        { text: 'A daydream. Suite Essence Lago is pure architectural poetry. Absolute privacy and the location steps from the lake is priceless.' },
        { text: 'Luminaria Essence redefines the concept of hospitality. Every detail, from the scent of the sheets to the artisanal breakfast, is curated with love.' },
        { text: 'The most relaxing stay we have ever had in Italy. The garden is a quiet oasis. Perfection in Bardolino.' }
      ]
    },
    contact: {
      label: 'Contact Us',
      title: 'Book Your Stay',
      desc: 'We are available to create your tailored experience. Fill out the form to check availability or for any special requests.',
      address_title: 'Address',
      phone_title: 'Phone',
      email_title: 'Email',
      follow: 'Follow Us',
      success_title: 'Request Sent',
      success_desc: 'Thank you for contacting us. We will reply as soon as possible.',
      another_req: 'Send another request',
      send_btn: 'Send Request',
      sending: 'Sending...',
      form: {
        name: 'First Name',
        surname: 'Last Name',
        email: 'Email',
        phone: 'Phone',
        checkin: 'Check-in',
        checkout: 'Check-out',
        guests: 'Guests',
        apartment: 'Solution',
        message: 'Message',
        apt_options: {
            both: 'All'
        },
        guest_options: {
            1: '1 Guest',
            many: 'Guests'
        },
        placeholder_msg: 'Special requests or questions...'
      }
    },
    footer: {
      desc: 'Where light meets luxury. An unforgettable stay experience on the shores of Lake Garda.',
      nav: 'Navigation',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      cookie: 'Cookie Policy',
      terms: 'Terms & Conditions',
      sustainability: 'Sustainability',
      rights: 'All rights reserved.',
      design: 'Designed with elegance in Italy.'
    }
  },
  de: {
    nav: {
      home: 'Home',
      apartments: 'Suites & Villa',
      villa: 'Die Villa',
      experience: 'Erlebnisse',
      gallery: 'Galerie',
      contact: 'Kontakt',
      book: 'Buchen Sie Jetzt',
    },
    booking: {
      title: 'Buchen Sie Ihren Aufenthalt',
      step1: 'Lösung Wählen',
      step2: 'Daten Wählen',
      step3: 'Ihre Details',
      select_apt: 'Wählen Sie eine Lösung, um fortzufahren',
      checkin: 'Check-in',
      checkout: 'Check-out',
      guests: 'Gäste',
      adults: 'Erwachsene',
      children: 'Kinder',
      total: 'Geschätzte Gesamtsumme',
      price_disclaimer: '*Richtpreis, vorbehaltlich Bestätigung.',
      next: 'Weiter',
      back: 'Zurück',
      confirm: 'Anfrage Senden',
      success_title: 'Anfrage Gesendet!',
      success_desc: 'Vielen Dank, dass Sie sich für Luminaria Essence entschieden haben. Wir haben Ihre Anfrage erhalten und werden Ihnen innerhalb von 24 Stunden per E-Mail antworten, um die Verfügbarkeit zu bestätigen.',
      whatsapp_text: 'Möchten Sie jetzt mit uns sprechen?',
      whatsapp_btn: 'Kontaktieren Sie uns auf WhatsApp',
      close: 'Schließen',
      errors: {
        dates: 'Bitte wählen Sie An- und Abreisedaten',
        min_stay: 'Mindestaufenthalt von 3 Nächten',
        unavailable: 'Einige ausgewählte Daten sind nicht verfügbar',
        form: 'Bitte füllen Sie alle Pflichtfelder aus'
      },
      form: {
        name: 'Vorname',
        surname: 'Nachname',
        email: 'E-Mail',
        phone: 'Telefon',
        notes: 'Sonderwünsche',
        privacy: 'Ich akzeptiere die Datenschutzbestimmungen',
      }
    },
    hero: {
      location: 'Bardolino, Gardasee',
      line1: 'Wo',
      line2: 'Das Licht des Garda',
      line3: 'Auf Luxus trifft',
      desc: 'Eine Villa und zwei exklusive Suiten, ein einzigartiges sensorisches Erlebnis.',
      cta_book: 'Buchen Sie Ihr Erlebnis',
      cta_discover: 'Mehr erfahren',
    },
    apartments: {
      title_sm: 'Unsere Unterkünfte',
      title: 'Zeitlose Eleganz',
      desc: 'Jeder Raum ist ein Design-Meisterwerk, das maximalen Komfort und Privatsphäre bietet. Edle Materialien, natürliches Licht und Technologie verschmelzen harmonisch.',
      guests: 'Gäste',
      rooms: 'Zimmer',
      bathrooms: 'Bäder',
      gallery: 'Galerie ansehen',
      availability: 'Verfügbarkeit prüfen',
      services: 'Exklusive Services',
      items: {
        'suite-essence': {
          name: 'Suite Essence Lago',
          desc: 'Der ultimative Ausdruck von Luxus bei Luminaria. Ein raffinierter offener Raum, in dem natürliches Licht die Räume formt, bereichert durch eine private Panoramaterrasse.',
          features: ['Panoramaterrasse', 'Whirlpool', 'Privater Weinkeller', 'Smart Home Steuerung']
        },
        'suite-lumiere': {
          name: 'Suite Essence Garden',
          desc: 'Ein intimer und gemütlicher Rückzugsort, geprägt von warmen Tönen und natürlichen Materialien. Ideal für Paare, die absolute Privatsphäre und Romantik suchen.',
          features: ['Gartenpatio', 'Chromotherapie-Dusche', 'Leseecke', 'Eigener Eingang']
        },
        'villa-luminaria': {
          name: 'Villa Luminaria',
          desc: 'Eine exklusive 150m² Villa für 6-8 Personen. Drei luxuriöse Schlafzimmer, jedes mit eigenem Bad, eines mit freistehender Badewanne. Privater Pool und atemberaubender Seeblick.',
          features: ['Privater Pool', 'Seeblick', 'Freistehende Badewanne', 'Privater Garten']
        }
      }
    },
    villa: {
      label: 'Die Villa',
      title: 'Ein Ort, an dem Licht, Natur und Eleganz verschmelzen',
      p1: 'Im Herzen von Bardolino, eingebettet in eine grüne Oase von ca. 5.000 Quadratmetern mit über 100 Olivenbäumen, entsteht ein exklusiver Luxus-Ferienkomplex, nur wenige Schritte vom Gardasee entfernt. Im Mittelpunkt des Projekts steht die Luxusvilla Luminaria, mit Seeblick, privatem Pool, privatem Garten und drei großen, fein eingerichteten Doppelzimmern. Abgerundet wird der Komplex durch die Suite Essence Lago mit Panorama-Dachterrasse und Seeblick sowie die Suite Essence Garden mit geschütztem Innenhof – beide für zwei bis vier Personen geeignet. Das gesamte Projekt ist dem Licht gewidmet: Architektur und Raumgestaltung lassen das Licht bewusst in jeden Raum fließen und schaffen so eine einzigartige Atmosphäre von Offenheit und Ruhe.',
      p2: 'Besonderes Augenmerk wurde auch auf unsere kleinen Gäste gelegt. Ein liebevoll gestalteter Spielbereich lädt Kinder zum Entdecken und Toben ein, während Darts, Tischtennis und Tischfußball Jugendlichen und Erwachsenen Momente der Freizeit und gemeinsamen Bewegung bieten. So wird der Komplex zu einem Ort, an dem sich alle Generationen wohlfühlen. Auch Hunde sind herzlich willkommen, damit die ganze Familie den Aufenthalt gemeinsam verbringen kann. Obstbäume und ein Kräutergarten stehen den Gästen zur Verfügung und unterstreichen die tiefe Verbundenheit mit der Natur. Ein überdachter Parkplatz sorgt für weiteren Komfort. Dieser Luxuskomplex ist weit mehr als nur eine Unterkunft: Er ist ein exklusiver Rückzugsort für alle, die das Besondere suchen, im Herzen von Bardolino und gleichzeitig in absoluter Ruhe, in Seenähe und tief verbunden mit der Natur des Gardasees.',
      services: {
        wifi: 'Glasfaser WLAN',
        ac: 'Klimaanlage',
        parking: 'Reservierter Parkplatz',
        garden: 'Privater Garten',
        kitchen: 'Ausgestattete Küche',
        tv: 'Smart TV & Audio',
        breakfast: 'Frühstück in der Suite',
        pool: 'Schwimmbad'
      }
    },
    experiences: {
      label: 'Erlebnisse & Umgebung',
      title: 'Die Magie des Garda',
      desc: 'Bardolino ist nicht nur ein Reiseziel, es ist ein Lebensstil. Zwischen historischen Weinbergen, kristallklarem Wasser und mittelalterlichen Dörfern ist jeder Tag eine Entdeckung.',
      cards: {
        wine: { title: 'Essen & Wein', desc: 'Tauchen Sie ein in die Aromen von Bardolino DOC und Chiaretto. Exklusive Besuche lokaler Weingüter.' },
        lake: { title: 'Leben am See', desc: 'Privater Bootsverleih, Sonnenuntergangstouren und Wassersport, um den See als Protagonist zu erleben.' },
        sport: { title: 'Natur & Sport', desc: 'Kilometerlange Panorama-Radwege und Trekkingpfade, die sich durch Olivenhaine schlängeln.' },
        surroundings: { title: 'Umgebung', desc: 'Von der Arena von Verona bis zu befestigten Dörfern. Geschichte und Kunst sind zum Greifen nah.' }
      }
    },
    gallery: {
      label: 'Visuelles Storytelling',
      title: 'Die Seele von Luminaria',
      desc: 'Ein Blick auf die Details, die Ihren Aufenthalt einzigartig machen.',
      cats: {
        exterior: 'Außenbereich',
        interior: 'Innenbereich',
        lake_view: 'Seeblick',
        details: 'Details',
        territory: 'Umgebung'
      },
      alts: {
        pool: 'Pool und Entspannung',
        bed: 'Schlafzimmer Suite Essence Lago',
        sunset: 'Sonnenuntergang am Garda',
        design: 'Design-Details',
        wine: 'Weinprobe',
        garden: 'Mediterraner Garten'
      }
    },
    reviews: {
      label: 'Testimonials',
      title: 'Worte unserer Gäste',
      items: [
        { text: 'Ein Tagtraum. Suite Essence Lago is pure architectural poetry. Absolute privacy and the location steps from the lake is priceless.' },
        { text: 'Luminaria Essence definiert das Konzept der Gastfreundschaft neu. Jedes Detail, vom Duft der Bettwäsche bis zum handwerklichen Frühstück, ist mit Liebe kuratiert.' },
        { text: 'Der entspannendste Aufenthalt, den wir je in Italien hatten. Der Garten ist eine ruhige Oase. Perfektion in Bardolino.' }
      ]
    },
    contact: {
      label: 'Kontakt',
      title: 'Buchen Sie Ihren Aufenthalt',
      desc: 'Wir stehen zur Verfügung, um Ihr maßgeschneidertes Erlebnis zu gestalten. Füllen Sie das Formular aus, um die Verfügbarkeit zu prüfen oder für spezielle Anfragen.',
      address_title: 'Adresse',
      phone_title: 'Telefon',
      email_title: 'E-Mail',
      follow: 'Folgen Sie uns',
      success_title: 'Anfrage gesendet',
      success_desc: 'Danke, dass Sie uns kontaktiert haben. Wir werden so schnell wie möglich antworten.',
      another_req: 'Weitere Anfrage senden',
      send_btn: 'Anfrage senden',
      sending: 'Senden...',
      form: {
        name: 'Vorname',
        surname: 'Nachname',
        email: 'E-Mail',
        phone: 'Telefon',
        checkin: 'Check-in',
        checkout: 'Check-out',
        guests: 'Gäste',
        apartment: 'Lösung',
        message: 'Nachricht',
        apt_options: {
            both: 'Beide'
        },
        guest_options: {
            1: '1 Gast',
            many: 'Gäste'
        },
        placeholder_msg: 'Sonderwünsche oder Fragen...'
      }
    },
    footer: {
      desc: 'Wo Licht auf Luxus trifft. Ein unvergessliches Aufenthaltserlebnis am Ufer des Gardasees.',
      nav: 'Navigation',
      legal: 'Rechtliches',
      privacy: 'Datenschutz',
      cookie: 'Cookie-Richtlinie',
      terms: 'AGB',
      sustainability: 'Nachhaltigkeit',
      rights: 'Alle Rechte vorbehalten.',
      design: 'Designed with elegance in Italy.'
    }
  }
};
    