export interface ApartmentSpec {
  label: string
  value: string
}

export interface ApartmentPhoto {
  src: string
  alt: string
}

export interface Apartment {
  slug: string
  estate: 'kastanjegarden' | 'sjostorp'
  name: string
  city: string
  description: string
  descriptionFull?: string
  specs: ApartmentSpec[]
  features: ApartmentSpec[]
  photos: ApartmentPhoto[]
  coverPhoto: string
  mapSrc: string
  visible: boolean // whether shown in listing
}

export const apartments: Apartment[] = [
  // ─── KASTANJEGÅRDEN ───────────────────────────────────────────────
  {
    slug: 'apt-b',
    estate: 'kastanjegarden',
    name: 'Kastanjegården B',
    city: 'Staffanstorp',
    description:
      'Välplanerad och ljus lägenhet med social planlösning. Perfekt som förstaboende eller för den som söker ett bekvämt boende nära Malmö.',
    specs: [
      { label: 'Hyra', value: '—' },
      { label: 'Antal rum', value: '—' },
      { label: 'Storlek', value: '—' },
      { label: 'Inflyttningsdatum', value: '—' },
      { label: 'Boendetyp', value: 'Hyresrätt' },
    ],
    features: [
      { label: 'Våning', value: '—' },
      { label: 'Balkong/uteplats', value: '—' },
      { label: 'Hiss', value: '—' },
    ],
    photos: Array.from({ length: 18 }, (_, i) => {
      const n = i + 1
      const ext = n >= 14 && n <= 17 ? 'JPG' : 'jpg'
      return {
        src: `/images/kastanjegarden/apt-B/${n}.${ext}`,
        alt: `Kastanjegården B foto ${n}`,
      }
    }),
    coverPhoto: '/images/kastanjegarden/apt-B/1.jpg',
    mapSrc:
      'https://www.google.com/maps?q=55.632032,13.136998&output=embed&t=k',
    visible: true,
  },
  {
    slug: 'apt-c',
    estate: 'kastanjegarden',
    name: 'Kastanjegården C',
    city: 'Staffanstorp',
    description:
      'Välplanerad och ljus lägenhet med social planlösning. Perfekt som förstaboende eller för den som söker ett bekvämt boende i Staffanstorp.',
    specs: [
      { label: 'Hyra', value: '—' },
      { label: 'Antal rum', value: '—' },
      { label: 'Storlek', value: '—' },
      { label: 'Inflyttningsdatum', value: '—' },
      { label: 'Boendetyp', value: 'Hyresrätt' },
    ],
    features: [
      { label: 'Våning', value: '—' },
      { label: 'Balkong/uteplats', value: '—' },
      { label: 'Hiss', value: '—' },
    ],
    photos: [{ src: '/images/kastanjegarden/apt-C/1.JPG', alt: 'Kastanjegården C foto 1' }],
    coverPhoto: '/images/kastanjegarden/apt-C/1.JPG',
    mapSrc:
      'https://www.google.com/maps?q=55.632032,13.136998&output=embed&t=k',
    visible: false,
  },
  {
    slug: 'apt-d',
    estate: 'kastanjegarden',
    name: 'Kastanjegården D',
    city: 'Staffanstorp',
    description:
      'Välplanerad och ljus lägenhet med social planlösning. Perfekt som förstaboende eller för den som söker ett bekvämt boende i Staffanstorp.',
    specs: [
      { label: 'Hyra', value: '—' },
      { label: 'Antal rum', value: '—' },
      { label: 'Storlek', value: '—' },
      { label: 'Inflyttningsdatum', value: '—' },
      { label: 'Boendetyp', value: 'Hyresrätt' },
    ],
    features: [
      { label: 'Våning', value: '—' },
      { label: 'Balkong/uteplats', value: '—' },
      { label: 'Hiss', value: '—' },
    ],
    photos: Array.from({ length: 6 }, (_, i) => ({
      src: `/images/kastanjegarden/apt-D/${i + 1}.jpg`,
      alt: `Kastanjegården D foto ${i + 1}`,
    })),
    coverPhoto: '/images/kastanjegarden/apt-D/1.jpg',
    mapSrc:
      'https://www.google.com/maps?q=55.632032,13.136998&output=embed&t=k',
    visible: false,
  },
  {
    slug: 'apt-e',
    estate: 'kastanjegarden',
    name: 'Kastanjegården E',
    city: 'Staffanstorp',
    description:
      'Välplanerad och ljus lägenhet med social planlösning. Perfekt som förstaboende eller för den som söker ett bekvämt boende i Staffanstorp.',
    specs: [
      { label: 'Hyra', value: '—' },
      { label: 'Antal rum', value: '—' },
      { label: 'Storlek', value: '—' },
      { label: 'Inflyttningsdatum', value: '—' },
      { label: 'Boendetyp', value: 'Hyresrätt' },
    ],
    features: [
      { label: 'Våning', value: '—' },
      { label: 'Balkong/uteplats', value: '—' },
      { label: 'Hiss', value: '—' },
    ],
    photos: Array.from({ length: 6 }, (_, i) => ({
      src: `/images/kastanjegarden/apt-E/${i + 1}.jpg`,
      alt: `Kastanjegården E foto ${i + 1}`,
    })),
    coverPhoto: '/images/kastanjegarden/apt-E/1.jpg',
    mapSrc:
      'https://www.google.com/maps?q=55.632032,13.136998&output=embed&t=k',
    visible: false,
  },
  {
    slug: 'apt-f',
    estate: 'kastanjegarden',
    name: 'Kastanjegården F',
    city: 'Staffanstorp',
    description:
      'Ateljévåning med milsvid utsikt – 7 min till Malmö. Högst upp i en ombyggd loge, omgiven av gula rapsfält och böljande sädesfält, finns denna unika ateljélägenhet. Över 4 meters takhöjd, öppen planlösning och genomgående ljus skapar rymd och atmosfär. De 100-åriga ekstockarna från logens tid löper genom lägenheten och ger karaktär och historia.',
    descriptionFull: `Trots det lantliga läget är du i Malmö på 7 min och Lund på 10 min med bil. Burlövs tågstation, köpcentrum och handel finns inom några kilometer, och havet når du med cykel.

Fiber är indraget och parkering med elbilsladdare finns. Boendet är rök- och djurfri.

Vi söker: 40+ utan barn (gården har maskiner och hästar), med stabil ekonomi och utan betalningsanmärkningar. Inkomst från arbete, pension eller eget företag. Deposition: 2 månader.

Ansökan: Skriv ett personligt brev om dig och din livssituation. Vi väljer hyresgäst efter helhetsbedömning.`,
    specs: [
      { label: 'Hyra', value: '10 890 kr/mån' },
      { label: 'Antal rum', value: '2,5' },
      { label: 'Storlek', value: '78 m²' },
      { label: 'Inflyttningsdatum', value: 'Omgående' },
      { label: 'Boendetyp', value: 'Hyresrätt' },
    ],
    features: [
      { label: 'Våning', value: '2 och 3' },
      { label: 'Balkong/uteplats', value: 'Gemensam uteplats' },
      { label: 'Hiss', value: 'Nej' },
    ],
    photos: [
      { src: '/images/kastanjegarden/apt-F/0.jpg', alt: 'Kastanjegården F foto 0' },
      { src: '/images/kastanjegarden/apt-F/1.jpg', alt: 'Kastanjegården F foto 1' },
      { src: '/images/kastanjegarden/apt-F/2.jpg', alt: 'Kastanjegården F foto 2' },
      { src: '/images/kastanjegarden/apt-F/3.jpg', alt: 'Kastanjegården F foto 3' },
      { src: '/images/kastanjegarden/apt-F/4.jpg', alt: 'Kastanjegården F foto 4' },
      { src: '/images/kastanjegarden/apt-F/5.jpg', alt: 'Kastanjegården F foto 5' },
      { src: '/images/kastanjegarden/apt-F/6.jpg', alt: 'Kastanjegården F foto 6' },
      { src: '/images/kastanjegarden/apt-F/7.jpg', alt: 'Kastanjegården F foto 7' },
      { src: '/images/kastanjegarden/apt-F/8.JPG', alt: 'Kastanjegården F foto 8' },
      { src: '/images/kastanjegarden/apt-F/9.JPG', alt: 'Kastanjegården F foto 9' },
      { src: '/images/kastanjegarden/apt-F/10.png', alt: 'Kastanjegården F foto 10' },
    ],
    coverPhoto: '/images/kastanjegarden/apt-F/1.jpg',
    mapSrc:
      'https://www.google.com/maps?q=55.632032,13.136998&output=embed&t=k',
    visible: true,
  },
  {
    slug: 'apt-g',
    estate: 'kastanjegarden',
    name: 'Kastanjegården G',
    city: 'Staffanstorp',
    description:
      'Välplanerad och ljus lägenhet med social planlösning. Perfekt som förstaboende eller för den som söker ett bekvämt boende i Staffanstorp.',
    specs: [
      { label: 'Hyra', value: '—' },
      { label: 'Antal rum', value: '—' },
      { label: 'Storlek', value: '—' },
      { label: 'Inflyttningsdatum', value: '—' },
      { label: 'Boendetyp', value: 'Hyresrätt' },
    ],
    features: [
      { label: 'Våning', value: '—' },
      { label: 'Balkong/uteplats', value: '—' },
      { label: 'Hiss', value: '—' },
    ],
    photos: [{ src: '/images/kastanjegarden/apt-G/1.jpg', alt: 'Kastanjegården G foto 1' }],
    coverPhoto: '/images/kastanjegarden/apt-G/1.jpg',
    mapSrc:
      'https://www.google.com/maps?q=55.632032,13.136998&output=embed&t=k',
    visible: false,
  },

  // ─── SJÖSTORP ─────────────────────────────────────────────────────
  {
    slug: 'apt-a',
    estate: 'sjostorp',
    name: 'Sjöstorp 401 A',
    city: 'Lund',
    description:
      'Välkommen till "Villa Sjöstorp", en trevlig & rymlig Villa/Gård strax utanför Lund.',
    descriptionFull: `Bara tre minuter från Lund ligger denna välskötta villa/gård på 210 kvm. I naturskön omgivning, med härlig utsikt på flera mil över det skånska slättlandskapet. Det här är verkligen "på landet" men ändå så nära pulsen att det inte känns som ett hinder för en trevlig kväll på stan. Perfekt bostad för er som vill ha nära och enkelt att ta er till både Lund & Malmö. Enkel pendling till Lund med bussen som går var 15:e minut. En belyst cykelväg finns med som tar dig in till de östra delarna av Lund.

Fastigheten har en stor privat och insynsskyddad tomt på 230 kvm, med både uteplats och ett vinterbonat uterum. Som hyresgäst finns även nyttjanderätt till en utomhuspool 4×8 meter med stort trädäck i söderläge.

Villan bjuder på en stor bottenvåning som är på ca 150 kvm med kök, wc, vardagsrum och två sovrum/kontor. Stora öppna och luftiga ytor som inbjuder till umgänge. Det finns ett stort och helt nytt badrum på bottenvåningen med både tvättmaskin & torktumlare.

På ovanvåningen som är en delvis inredd vind på ca 60 kvm finns det två större rum och ett mindre som alla kan användas till sovrum/hobbyrum/kontor. Här finns även mycket bra och stora förvaringsutrymmen.

Uppvärmning i villan sker med en helt ny jordvärmepump från NIBE, vilket ger mycket låga driftskostnader. Fastigheten har fiber indraget, där hyresgästen själv tecknar önskad tjänst.

I hyran ingår vatten/avlopp/sopor samt fastighetsförsäkring & 2 parkeringsplatser. Vi tar 2 månads­hyror i deposition.

Viktigt är att man som hyresgäst vet att boendet är fritt från djur.`,
    specs: [
      { label: 'Hyra', value: '19 500 kr/mån' },
      { label: 'Antal rum', value: '7' },
      { label: 'Storlek', value: '210 kvm' },
      { label: 'Inflyttningsdatum', value: '2026-02-01' },
      { label: 'Boendetyp', value: 'Hyresrätt' },
    ],
    features: [
      { label: 'Våning', value: '2 plan' },
      {
        label: 'Balkong/uteplats',
        value: 'Gemensam uteplats med utomhuspool samt privat trädgård',
      },
      { label: 'Hiss', value: 'Nej' },
    ],
    photos: [
      { src: '/images/sjostorp/apt-A/1.jpg', alt: 'Sjöstorp A foto 1' },
      { src: '/images/sjostorp/apt-A/2.jpg', alt: 'Sjöstorp A foto 2' },
      { src: '/images/sjostorp/apt-A/3.jpg', alt: 'Sjöstorp A foto 3' },
      { src: '/images/sjostorp/apt-A/4.jpg', alt: 'Sjöstorp A foto 4' },
      { src: '/images/sjostorp/apt-A/5.png', alt: 'Sjöstorp A foto 5' },
      { src: '/images/sjostorp/apt-A/7.jpg', alt: 'Sjöstorp A foto 7' },
      { src: '/images/sjostorp/apt-A/8.jpg', alt: 'Sjöstorp A foto 8' },
      { src: '/images/sjostorp/apt-A/9.jpg', alt: 'Sjöstorp A foto 9' },
      { src: '/images/sjostorp/apt-A/10.jpg', alt: 'Sjöstorp A foto 10' },
      { src: '/images/sjostorp/apt-A/11.png', alt: 'Sjöstorp A foto 11' },
      { src: '/images/sjostorp/apt-A/12.jpg', alt: 'Sjöstorp A foto 12' },
      { src: '/images/sjostorp/apt-A/13.jpg', alt: 'Sjöstorp A foto 13' },
      { src: '/images/sjostorp/apt-A/14.jpg', alt: 'Sjöstorp A foto 14' },
      { src: '/images/sjostorp/apt-A/15.jpg', alt: 'Sjöstorp A foto 15' },
      { src: '/images/sjostorp/apt-A/16.png', alt: 'Sjöstorp A foto 16' },
      { src: '/images/sjostorp/apt-A/17.jpg', alt: 'Sjöstorp A foto 17' },
      { src: '/images/sjostorp/apt-A/18.jpg', alt: 'Sjöstorp A foto 18' },
      { src: '/images/sjostorp/apt-A/19.jpg', alt: 'Sjöstorp A foto 19' },
      { src: '/images/sjostorp/apt-A/20.png', alt: 'Sjöstorp A foto 20' },
      { src: '/images/sjostorp/apt-A/21.png', alt: 'Sjöstorp A foto 21' },
    ],
    coverPhoto: '/images/sjostorp/apt-A/1.jpg',
    mapSrc:
      'https://www.google.com/maps?q=55.680206,13.293794&output=embed&t=k',
    visible: true,
  },
  {
    slug: 'apt-b',
    estate: 'sjostorp',
    name: 'Sjöstorp B',
    city: 'Lund',
    description:
      'Välplanerad och ljus lägenhet med social planlösning. Perfekt som förstaboende eller för den som söker ett bekvämt boende i Lund.',
    specs: [
      { label: 'Hyra', value: '—' },
      { label: 'Antal rum', value: '—' },
      { label: 'Storlek', value: '—' },
      { label: 'Inflyttningsdatum', value: '—' },
      { label: 'Boendetyp', value: 'Hyresrätt' },
    ],
    features: [
      { label: 'Våning', value: '—' },
      { label: 'Balkong/uteplats', value: '—' },
      { label: 'Hiss', value: '—' },
    ],
    photos: [
      { src: '/images/sjostorp/apt-B/1.JPEG', alt: 'Sjöstorp B foto 1' },
      { src: '/images/sjostorp/apt-B/2.JPEG', alt: 'Sjöstorp B foto 2' },
    ],
    coverPhoto: '/images/sjostorp/apt-B/1.JPEG',
    mapSrc:
      'https://www.google.com/maps?q=55.680206,13.293794&output=embed&t=k',
    visible: false,
  },
  {
    slug: 'apt-c',
    estate: 'sjostorp',
    name: 'Sjöstorp C',
    city: 'Lund',
    description:
      'Välplanerad och ljus lägenhet med social planlösning. Perfekt som förstaboende eller för den som söker ett bekvämt boende i Lund.',
    specs: [
      { label: 'Hyra', value: '—' },
      { label: 'Antal rum', value: '—' },
      { label: 'Storlek', value: '—' },
      { label: 'Inflyttningsdatum', value: '—' },
      { label: 'Boendetyp', value: 'Hyresrätt' },
    ],
    features: [
      { label: 'Våning', value: '—' },
      { label: 'Balkong/uteplats', value: '—' },
      { label: 'Hiss', value: '—' },
    ],
    photos: [],
    coverPhoto: '/images/sjostorp/cover.jpg',
    mapSrc:
      'https://www.google.com/maps?q=55.680206,13.293794&output=embed&t=k',
    visible: false,
  },
  {
    slug: 'apt-d',
    estate: 'sjostorp',
    name: 'Sjöstorp D',
    city: 'Lund',
    description:
      'Välplanerad och ljus lägenhet med social planlösning. Perfekt som förstaboende eller för den som söker ett bekvämt boende i Lund.',
    specs: [
      { label: 'Hyra', value: '—' },
      { label: 'Antal rum', value: '—' },
      { label: 'Storlek', value: '—' },
      { label: 'Inflyttningsdatum', value: '—' },
      { label: 'Boendetyp', value: 'Hyresrätt' },
    ],
    features: [
      { label: 'Våning', value: '—' },
      { label: 'Balkong/uteplats', value: '—' },
      { label: 'Hiss', value: '—' },
    ],
    photos: [{ src: '/images/sjostorp/apt-D/1.jpg', alt: 'Sjöstorp D foto 1' }],
    coverPhoto: '/images/sjostorp/apt-D/1.jpg',
    mapSrc:
      'https://www.google.com/maps?q=55.680206,13.293794&output=embed&t=k',
    visible: false,
  },
  {
    slug: 'apt-e',
    estate: 'sjostorp',
    name: 'Sjöstorp E',
    city: 'Lund',
    description:
      'Välplanerad och ljus lägenhet med social planlösning. Perfekt som förstaboende eller för den som söker ett bekvämt boende i Lund.',
    specs: [
      { label: 'Hyra', value: '—' },
      { label: 'Antal rum', value: '—' },
      { label: 'Storlek', value: '—' },
      { label: 'Inflyttningsdatum', value: '—' },
      { label: 'Boendetyp', value: 'Hyresrätt' },
    ],
    features: [
      { label: 'Våning', value: '—' },
      { label: 'Balkong/uteplats', value: '—' },
      { label: 'Hiss', value: '—' },
    ],
    photos: [],
    coverPhoto: '/images/sjostorp/cover.jpg',
    mapSrc:
      'https://www.google.com/maps?q=55.680206,13.293794&output=embed&t=k',
    visible: false,
  },
  {
    slug: 'apt-f',
    estate: 'sjostorp',
    name: 'Sjöstorp F',
    city: 'Lund',
    description:
      'Välplanerad och ljus lägenhet med social planlösning. Perfekt som förstaboende eller för den som söker ett bekvämt boende i Lund.',
    specs: [
      { label: 'Hyra', value: '—' },
      { label: 'Antal rum', value: '—' },
      { label: 'Storlek', value: '—' },
      { label: 'Inflyttningsdatum', value: '—' },
      { label: 'Boendetyp', value: 'Hyresrätt' },
    ],
    features: [
      { label: 'Våning', value: '—' },
      { label: 'Balkong/uteplats', value: '—' },
      { label: 'Hiss', value: '—' },
    ],
    photos: [{ src: '/images/sjostorp/apt-F/1.jpg', alt: 'Sjöstorp F foto 1' }],
    coverPhoto: '/images/sjostorp/apt-F/1.jpg',
    mapSrc:
      'https://www.google.com/maps?q=55.680206,13.293794&output=embed&t=k',
    visible: false,
  },
  {
    slug: 'apt-g',
    estate: 'sjostorp',
    name: 'Sjöstorp G',
    city: 'Lund',
    description:
      'Välplanerad och ljus lägenhet med social planlösning. Perfekt som förstaboende eller för den som söker ett bekvämt boende i Lund.',
    specs: [
      { label: 'Hyra', value: '—' },
      { label: 'Antal rum', value: '—' },
      { label: 'Storlek', value: '—' },
      { label: 'Inflyttningsdatum', value: '—' },
      { label: 'Boendetyp', value: 'Hyresrätt' },
    ],
    features: [
      { label: 'Våning', value: '—' },
      { label: 'Balkong/uteplats', value: '—' },
      { label: 'Hiss', value: '—' },
    ],
    photos: [],
    coverPhoto: '/images/sjostorp/cover.jpg',
    mapSrc:
      'https://www.google.com/maps?q=55.680206,13.293794&output=embed&t=k',
    visible: false,
  },
]

export function getApartment(estate: string, slug: string): Apartment | undefined {
  return apartments.find((a) => a.estate === estate && a.slug === slug)
}

export function getEstateApartments(estate: string): Apartment[] {
  return apartments.filter((a) => a.estate === estate)
}
