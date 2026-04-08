"use client";

export default function ComparisonToggle({ enabled, onToggle }) {
  return (
    <button
      type="button"
      className={enabled ? "secondary-button active-toggle" : "secondary-button"}
      onClick={onToggle}
    >
      {enabled ? "Comparison On" : "Comparison Off"}
    </button>
  );
}
