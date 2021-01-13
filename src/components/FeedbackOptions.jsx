import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../redux/statistics-actions';
import Section from './Section';

export default function FeedbackOptions() {
  const options = useSelector(state => state.statistics);
  const names = Object.keys(options);
  const dispatch = useDispatch();

  const onClickBtn = type => dispatch(increment(type));

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
