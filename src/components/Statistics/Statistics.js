import data from '../../data/data.json';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import { getRandomHexColor } from '../../utils/getRandomColor';

const Statistics = ({ title }, { id, label, percentage } = data) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {data.map(el => (
          <li
            className={styles.item}
            key={el.id}
            style={{
              backgroundColor: getRandomHexColor(),
              width: getItemWidth(),
            }}
          >
            <span className={styles.label}>{el.label}</span>
            <span className={styles.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function getItemWidth() {
  return `${100 / data.length}%`;
}

export default Statistics;
