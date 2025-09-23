const modules = import.meta.glob('/src/assets/tgiud/*.{webp,png,jpg,jpeg}', { eager: true });

const tgiudImages: string[] = Object.values(modules).map((m: any) => m.default || m);

export { tgiudImages };
