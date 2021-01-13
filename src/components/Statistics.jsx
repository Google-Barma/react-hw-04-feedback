import { connect } from 'react-redux';
import Section from './Section';
import Notification from './Notification';

function Statistics({ state, total, percentage }) {
  const names = Object.keys(state);

  return (
    <Section title={'Statistics'}>
      {total > 0 ? (
        <>
          <ul>
            {names.map(name => (
              <li key={name}>
                {name}: {state[name]}
              </li>
            ))}
          </ul>
          <ul>
            <li>total: {total}</li>
            <li>percentage: {percentage}</li>
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
  state: state.statistics,
  total: culcTotal(state),
  percentage: percentage(state, culcTotal(state)),
});

export default connect(mapStateToProps)(Statistics);
