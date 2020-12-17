import { useState } from 'react';

import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = type => {
    switch (type) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const makeStatisticsList = () => {
    const state = { good: good, neutral: neutral, bad: bad };
    return Object.entries(state);
  };

  const total = countTotalFeedback();

  return (
    <>
      <FeedbackOptions
        options={{ good, neutral, bad }}
        onLeaveFeedback={leaveFeedback}
      />
      <Statistics
        stats={makeStatisticsList()}
        total={total}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </>
  );
}
