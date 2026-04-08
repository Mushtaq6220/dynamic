export default function ProgressBar({ value = 0, label }) {
  return (
    <div className="progress-wrap">
      <div className="progress-top">
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
