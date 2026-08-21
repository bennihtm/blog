import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
	author: "Benjamin",
	date: {
		locale: "en-US",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	description:
		"Hi, I'm Benni! The three most important things to know about me are that I'm a Christian, I love writing various things and I enjoy spending time in nature. If you wanna know more about me, feel free to browse this site!",
	lang: "en-US",
	ogLocale: "en_US",
	sortPostsByUpdatedDate: false,
	title: "Benni's Blog",
	hideThemeCredit: false,
	profile: {
		name: "Benjamin",
		email: "me@bennihtm.xyz",
		github: "https://github.com/bennihtm",
		mastodon: "https://social.vivaldi.net/@bennihtm",
		avatar: "/avatar.png",
	},
	// Uncomment & fill in to enable Giscus comments on every post.
	// comments: {
	// 	repo: "your-handle/your-repo",
	// 	repoId: "...",
	// 	category: "General",
	// 	categoryId: "...",
	// },
};

export const menuLinks: { path: string; title: string; icon: string; newTab?: boolean }[] = [
	{
		path: "/",
		title: "Home",
		icon: "lucide:house",
	},
	{
		path: "/posts/",
		title: "Posts",
		icon: "lucide:pen",
	},
	{
		path: "/about/",
		title: "About",
		icon: "lucide:circle-user",
	},
	{
		path: "https://notes.bennihtm.xyz",
		title: "Notes",
		icon: "lucide:leaf",
		newTab: true,
	},
	{
		path: "/search/",
		title: "Search",
		icon: "lucide:search",
	},
];

export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeBackground: ({ theme }) => (theme.type === "light" ? "#f0e9d6" : "#1a1715"),
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			editorActiveTabBackground: ({ theme }) => (theme.type === "light" ? "#f0e9d6" : "#1a1715"),
			editorTabBarBackground: ({ theme }) => (theme.type === "light" ? "#ebe3cd" : "#15120e"),
			frameBoxShadowCssValue: "none",
			terminalBackground: ({ theme }) => (theme.type === "light" ? "#f0e9d6" : "#1a1715"),
			terminalTitlebarBackground: ({ theme }) => (theme.type === "light" ? "#ebe3cd" : "#15120e"),
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		return `[data-theme="${theme.name}"]`;
	},
	themes: ["min-dark", "min-light"],
	useThemedScrollbars: false,
};
