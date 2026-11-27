import "./popup.css";

export function Popup({ isOpen, isClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="popup-backdrop" onClick={isClose}>
      <section
        className="popup"
        role="dialog"
        aria-modal="true"
        aria-label="Product dialog"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="popup-close"
          type="button"
          aria-label="Close dialog"
          onClick={isClose}
        >
          &times;
        </button>
        {children}
      </section>
    </div>
  );
}
