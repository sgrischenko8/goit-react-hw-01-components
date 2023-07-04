import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import { getRandomHexColor, getItemWidth } from '../../utils';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(el => (
          <li
            className={styles.item}
            key={el.id}
            style={{
              backgroundColor: getRandomHexColor(),
              width: getItemWidth(stats),
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
  ).isRequired,
};

export default Statistics;
