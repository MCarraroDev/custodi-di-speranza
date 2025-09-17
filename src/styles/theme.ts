export const theme = {
    colors: {
        background: {
            light: '#f4f4f4', // Sfondo principale chiaro (body)
            dark: '#1a1a1a',  // Sfondo scuro (header, footer)
        },
        text: {
            dark: '#333333',      // Testo scuro (su sfondo chiaro)
            light: '#ffffff',     // Testo chiaro (su sfondo scuro)
            secondary: '#aaa', // Testo secondario (es. copyright)
        },
        // primary: '#f0a500',   // Colore accento (es. titoli, hover)
        primary: '#00913E',
        border: '#333333',      // Bordi e separatori
    },
    fonts: {
        title: '"Playfair Display", serif',
        body: '"Roboto", sans-serif',
    },
    fontSizes: {
        small: '0.9rem',
        medium: '1rem',
        large: '1.5rem',
        xlarge: '2.5rem',
    },
};

export type ThemeType = typeof theme;
