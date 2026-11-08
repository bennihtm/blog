export {};

const diagrams = Array.from(document.querySelectorAll<HTMLElement>("pre.mermaid"));
if (diagrams.length) {
	const sources = new Map(diagrams.map((node) => [node, node.textContent ?? ""]));
	let renderId = 0;

	async function renderDiagrams() {
		try {
			const { PeleError, render } = await import("pele");
			await document.fonts?.ready;
			for (const [node, source] of sources) {
				try {
					const { svg } = render(source, {
						idPrefix: `pele-diagram-${renderId++}-`,
						fontFamily: "Inter Variable, sans-serif",
					});
					node.innerHTML = svg;
					node.dataset.rendered = "true";
					const diagram = node.querySelector("svg");
					if (diagram?.viewBox?.baseVal?.width) {
						diagram.style.minWidth = `${Math.min(diagram.viewBox.baseVal.width * 0.7, 560)}px`;
					}
				} catch (error) {
					if (error instanceof PeleError) {
						console.error("Could not render Pele diagram", error.message);
					} else {
						console.error("Could not render Pele diagram", error);
					}
				}
			}
		} catch (error) {
			console.error("Could not load Pele", error);
		}
	}

	renderDiagrams();
}
