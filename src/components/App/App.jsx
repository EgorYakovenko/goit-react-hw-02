import { useState, useEffect } from 'react';

import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

function App() {
  const [count, setCount] = useState(() => {
    const savedFeedback = localStorage.getItem('quantityFeedback');
    return savedFeedback !== null
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('quantityFeedback', JSON.stringify(count));
  }, [count]);

  const updateFeedback = feedbackType => {
    setCount({
      ...count,
      [feedbackType]: count[feedbackType] + 1,
    });
  };

  const resetCount = () => {
    setCount({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = count.good + count.neutral + count.bad;
  const totalPositive = Math.round(
    ((count.good + count.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        count={count}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetCount={resetCount}
      />

      {totalFeedback > 0 ? (
        <Feedback
          count={count}
          totalFeedback={totalFeedback}
          totalPositive={totalPositive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
