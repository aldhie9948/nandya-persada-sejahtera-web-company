import { base } from '$app/paths';

export const ssr = true;

export function load(ev) {
	const { pathname } = ev.url;
	const navItems = [
		{ label: 'Beranda', href: base + '/' },
		{ label: 'Tentang Kami', href: base + '/tentang-kami/' },
		{ label: 'Produk', href: base + '/produk/' },
		{ label: 'Kontak Kami', href: base + '/kontak-kami/' }
	];

	return { navItems, pathname };
}
