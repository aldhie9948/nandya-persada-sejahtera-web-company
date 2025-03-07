import { base } from "$app/paths";
import _ from "lodash";
import type { Product } from "$lib/types.js";

export const load = (ev) => {
	const products: Product[] = [
		{
			name: "Cable Tray C - Type",
			image: base.concat("/products/cable-tray-c-type.webp"),
			alt: "cable-tray-c-type",
			description: "",
		},
		{
			name: "Cable Tray Joining Set",
			image: base.concat("/products/cable-tray-c-joining-set.webp"),
			alt: "cable-tray-c-joining-set",
			description: "",
		},
		{
			name: "Cable Duct",
			image: base.concat("/products/cable-duct.webp"),
			alt: "cable-duct",
			description: "",
		},
		{
			name: "Cable Ladder W - Type",
			image: base.concat("/products/cable-ladder-w-type.webp"),
			alt: "cable-ladder-w-type",
			description: "",
		},
		{
			name: "Cable Tray Cover",
			image: base.concat("/products/cable-tray-cover.webp"),
			alt: "cable-tray-cover",
			description: "",
		},
	];

	return {
		products: _.take(products, 5),
	};
};
