import { useSelector } from 'react-redux';
import Section from './Section';
import Notification from './Notification';

export default function Statistics() {
  const statistics = useSelector(state => state.statistics);
  const store = Object.assign({}, statistics);

  const calcTotal = () =>
    Object.values(statistics).reduce((total, value) => total + value, 0);

  store.total = calcTotal();

  const percentage = () => {
    return store.total > 0
      ? Math.round((store.good / store.total) * 100)
      : null;
  };

  store.percentage = percentage();

  const names = Object.keys(store);

  return (
    <Section title={'Statistics'}>
      {store.total > 0 ? (
        <>
          <ul>
            {names.map(name => (
              <li key={name}>
                {name}: {store[name]}
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
