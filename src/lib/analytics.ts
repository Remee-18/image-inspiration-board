type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window { dataLayer: unknown[]; gtag?: Gtag; __gaLoaded?: string }
}

export function initAnalytics(id: string) {
  if (typeof window === "undefined" || window.__gaLoaded) return;
  window.__gaLoaded = id;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("set", "developer_id.dZjgwMW", true);
  window.gtag("js", new Date());
  window.gtag("config", id, { send_page_view: false });
}

export function trackPageView(path: string) {
  window.gtag?.("event", "page_view", { page_path: path, page_location: window.location.href, page_title: document.title });
}
