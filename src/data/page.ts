import { type CollectionEntry, getCollection, getEntry } from "astro:content";

/** Fetch all pages from the content collection. */
export async function getAllPages(): Promise<CollectionEntry<"page">[]> {
	return await getCollection("page");
}

/** Fetch a single page by its id/slug. */
export async function getPageBySlug(slug: string): Promise<CollectionEntry<"page"> | undefined> {
	return await getEntry("page", slug);
}
