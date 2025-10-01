import { useEffect, useRef } from "react";

export default function TicketTailorWidget() {
  const widgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (widgetRef.current) {
      // Crea lo script
      const script = document.createElement("script");
      script.src = "https://cdn.tickettailor.com/js/widgets/min/widget.js";
      script.async = true;
      script.setAttribute(
        "data-url",
        "https://www.tickettailor.com/all-tickets/ilmiopurgatoriotradate/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true"
      );
      script.setAttribute("data-type", "inline");
      script.setAttribute("data-inline-minimal", "true");
      script.setAttribute("data-inline-show-logo", "false");
      script.setAttribute("data-inline-bg-fill", "false");
      script.setAttribute("data-inline-inherit-ref-from-url-param", "");
      script.setAttribute("data-inline-ref", "website_widget");

      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tt-widget" ref={widgetRef}>
      <div className="tt-widget-fallback">
        <p>
          <a
            href="https://www.tickettailor.com/all-tickets/ilmiopurgatoriotradate/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to buy tickets
          </a>
          <br />
          <small>
            <a
              href="https://www.tickettailor.com?rf=wdg_269831"
              className="tt-widget-powered"
            >
              Sell tickets online with Ticket Tailor
            </a>
          </small>
        </p>
      </div>
    </div>
  );
}
