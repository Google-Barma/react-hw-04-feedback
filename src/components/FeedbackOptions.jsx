import { connect } from 'react-redux';
import {
  goodAction,
  neutralAction,
  badAction,
} from '../redux/statistics-actions';
import Section from './Section';

function FeedbackOptions({ onClickGood, onClickNeutral, onClickBad }) {
  return (
    <Section title={'Please leave feedback'}>
      <button type="button" onClick={() => onClickGood(1)}>
        good
      </button>
      <button type="button" onClick={() => onClickNeutral(1)}>
        neutral
      </button>
      <button type="button" onClick={() => onClickBad(1)}>
        bad
      </button>
    </Section>
  );
}

const mapStateToProps = state => ({
  options: state.statistics,
});

const mapDispatchToProps = dispatch => ({
  onClickGood: step => dispatch(goodAction(step)),
  onClickNeutral: step => dispatch(neutralAction(step)),
  onClickBad: step => dispatch(badAction(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackOptions);
