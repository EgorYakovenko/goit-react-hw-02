import css from './Feedback.module.css';

export default function Feedback({
  totalFeedback,
  totalPositive,
  count: { good, neutral, bad },
}) {
  return (
    <div className={css.container}>
      <ul className={css.feedBackList}>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Nautral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {totalFeedback}</p>
        </li>
        <li
          className={totalPositive > 50 ? css.positiveGreen : css.positiveRed}
        >
          <p>Positive: {totalPositive}%</p>
        </li>
      </ul>
    </div>
  );
}
