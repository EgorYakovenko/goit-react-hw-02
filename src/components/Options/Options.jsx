import css from './Options.module.css';

export default function Options({ updateFeedback, totalFeedback, resetCount }) {
  return (
    <div className={css.container}>
      <button className={css.bottonGood} onClick={() => updateFeedback('good')}>
        Good
      </button>
      <button
        className={css.bottonHautral}
        onClick={() => updateFeedback('neutral')}
      >
        Nautral
      </button>
      <button className={css.bottonBad} onClick={() => updateFeedback('bad')}>
        Bad
      </button>
      {totalFeedback !== 0 && <button onClick={resetCount}>Reset</button>}
    </div>
  );
}
