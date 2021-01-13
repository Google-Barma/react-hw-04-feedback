import { connect } from 'react-redux';
import Section from './Section';
import Notification from './Notification';

function Statistics(statistics) {
  const names = Object.keys(statistics).filter(item => item !== 'dispatch');

  return (
    <Section title={'Statistics'}>
      {statistics.total > 0 ? (
        <>
          <ul>
            {names.map(name => (
              <li key={name}>
                {name}: {statistics[name]}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </Section>
  );
}

const culcTotal = state =>
  Object.values(state.statistics).reduce((total, value) => total + value, 0);

const percentage = (state, total) =>
  total > 0 ? Math.round((state.statistics.good / total) * 100) : null;

const mapStateToProps = state => ({
  good: state.statistics.good,
  neutral: state.statistics.neutral,
  bad: state.statistics.bad,
  total: culcTotal(state),
  percentage: percentage(state, culcTotal(state)),
});

export default connect(mapStateToProps)(Statistics);
