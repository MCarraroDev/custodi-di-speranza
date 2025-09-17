export interface NavLink {
    label: string;
    path: string;
}

export const navLinks: NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'Il Progetto', path: '/progetto' },
    { label: 'Dicono di noi', path: '/dicono-di-noi' },
    { label: 'Sponsorizzazioni', path: '/sponsor' },
    { label: 'Dove Siamo', path: '/dove-siamo' },
];
