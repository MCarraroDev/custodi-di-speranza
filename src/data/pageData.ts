import canto_uno from '../assets/I(Edited).webp';
import canto_nove from '../assets/IX(Edited).webp';
import canto_cinque from '../assets/V(Edited).webp';
import canto_sedici from '../assets/XVI(Edited).webp'
import foto_scuola_pavoni from '../assets/scuola.webp'

export interface PageData {
    title: string;
    subtitle: string;
    imageUrl: string;
    imageAlt: string;
    imageCredits: string;
}

export const pages: Record<string, PageData> = {
    home: {
        title: 'CUSTODI DI SPERANZA',
        subtitle: 'L\'Istituto Pavoni <i>"puro e disposto a salire a le stelle"</i>',
        imageUrl: canto_uno,
        imageAlt: 'Raffigurazione di Gabriele Dell\'Otto',
        imageCredits: 'Illustrazioni di Gabriele Dell\'Otto'
    },
    project: {
        title: 'Il Progetto',
        subtitle: 'La speranza si impara camminando, guardando, lasciandosi toccare dalla Bellezza',
        imageUrl: canto_nove,
        imageAlt: 'Raffigurazione di Gabriele Dell\'Otto',
        imageCredits: 'Illustrazioni di Gabriele Dell\'Otto'
    },
    sponsor: {
        title: 'Sostieni il Progetto',
        subtitle: 'Diventa parte della nostra storia e accendi <b>Speranza</b>',
        imageUrl: canto_cinque,
        imageAlt: 'Raffigurazione di Gabriele Dell\'Otto',
        imageCredits: 'Illustrazioni di Gabriele Dell\'Otto'
    },
    press: {
        title: 'Dicono di Noi',
        subtitle: 'Rassegna stampa, recensioni e testimonianze sul nostro progetto',
        imageUrl: canto_sedici,
        imageAlt: 'Raffigurazione di Gabriele Dell\'Otto',
        imageCredits: 'Illustrazioni di Gabriele Dell\'Otto'
    },
    location: {
        title: 'Dove Siamo',
        subtitle: 'Vieni a trovarci: la nostra sede e le indicazioni per raggiungerci',
        imageUrl: foto_scuola_pavoni,
        imageAlt: 'Foto della scuola dall\'alto',
        imageCredits: 'Foto della scuola dall\'alto'
    },
};
