(function () {
    async function loadComponent(placeholder) {
        const source = placeholder.getAttribute("data-component");

        if (!source) {
            return;
        }

        const response = await fetch(source);

        if (!response.ok) {
            throw new Error(`Unable to load component: ${source}`);
        }

        placeholder.outerHTML = await response.text();
    }

    async function loadComponents() {
        const placeholders = Array.from(document.querySelectorAll("[data-component]"));
        await Promise.all(placeholders.map(loadComponent));
        document.dispatchEvent(new Event("components:loaded"));
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", loadComponents);
    } else {
        loadComponents();
    }
})();
