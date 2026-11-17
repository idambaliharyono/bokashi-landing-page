const FOLDER = 'produk';
const BASE = 'https://img.bokashiindonesia.com';
export const WIDTH = [400, 800, 1600] as const;

export type Width = (typeof WIDTH)[number] | 1200;

export const img = (name: string, w: Width = 800, q = 80): string =>
	`${BASE}/cdn-cgi/image/width=${w},quality=${q},format=auto/${FOLDER}/${name}`;

export const imgSet = (name: string): string =>
	WIDTH.map((w) => `${img(name, w)} ${w}w`).join(', ');
