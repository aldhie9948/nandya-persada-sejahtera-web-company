import { base } from "$app/paths";
import type { Product } from "$lib/types.js";

export const load = (ev) => {
	const products: Product[] = [
		{
			name: "Kabel Tray",
			image: base.concat("/products/cable-tray-type-u.webp"),
			alt: "cable-tray-type-u",
			type: ["Type C", "Type U"],
		},
		{
			name: "Kabel Ladder",
			image: base.concat("/products/cable-ladder-type-u.webp"),
			alt: "cable-tray-type-u",
			type: ["Type U", "Type W", "Heavy Duty", "Allumunium"],
		},
		{
			name: "Accessories",
			image: base.concat("/products/cable-tray-covers.webp"),
			alt: "cable-tray-type-u",
			type: ["Cover", "Bracket", "Separator"],
		},
	];

	return {
		products,
	};
};
