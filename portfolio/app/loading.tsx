export default function Loading() {
  return (
    <main
      className="portfolio-loading"
      aria-label="Loading the ALBATROS portfolio"
      aria-live="polite"
    >
      <div className="loading-mark">
        HE<span>✦</span>
      </div>
      <p>Opening the visual archive</p>
      <div className="loading-line">
        <span />
      </div>
    </main>
  );
}
