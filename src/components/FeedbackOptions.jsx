import { connect } from 'react-redux';
import { increment } from '../redux/statistics-actions';
import Section from './Section';

function FeedbackOptions({ options, onClickBtn }) {
  const names = Object.keys(options);

  return (
    <Section title={'Please leave feedback'}>
      {names.map((name, idx) => (
        <button
          key={idx}
          type="button"
          onClick={e => onClickBtn(e.target.textContent)}
        >
          {name}
        </button>
      ))}
    </Section>
  );
}

const mapStateToProps = state => ({
  options: state.statistics,
});

const mapDispatchToProps = dispatch => ({
  onClickBtn: type => dispatch(increment(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackOptions);
