import { connect } from 'react-redux';
import Section from './Section';
import Notification from './Notification';

function Statistics(statistic) {
  const names = Object.keys(statistic).filter(item => item !== 'dispatch');

  return (
    <Section title={'Statistics'}>
      {statistic.total > 0 ? (
        <>
          <ul>
            {names.map(name => (
              <li key={name}>
                {name}: {statistic[name]}
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

export default connect(mapStateToProps, null)(Statistics);
