import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array;
	const lowercaseItems = array.map((str) => str.toLowerCase());
	const distinctItems = new Set(lowercaseItems);
	return Array.from(distinctItems);
}

const post = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/post" }),
	schema: ({ image }) =>
		z.object({
			coverImage: z
				.object({
					alt: z.string(),
					src: image(),
				})
				.optional(),
			description: z.string().max(160),
			draft: z.boolean().default(false),
			ogImage: z.string().optional(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			title: z.string().max(120),
			updatedDate: z.coerce.date().optional(),
		}),
});

const page = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/page" }),
	schema: z.object({
		title: z.string().max(120),
		description: z.string().max(160).optional(),
	}),
});

export const collections = { post, page };
