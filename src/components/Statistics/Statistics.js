import data from '../../data/data.json';

const Statistics = ({ id, label, percenage } = data[0]) => {
  return (
    <section class="statistics">
      <h2 class="title">{data[0].id}</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">{data[0].label}</span>
          <span class="percentage">{data[0].percenage}%</span>
        </li>
        <li class="item">
          <span class="label">{data[1].label}</span>
          <span class="percentage">{data[1].percenage}%</span>
        </li>
        <li class="item">
          <span class="label">{data[2].label}</span>
          <span class="percentage">{data[2].percenage}%</span>
        </li>
        <li class="item">
          <span class="label">{data[3].label}</span>
          <span class="percentage">{data[3].percenage}%</span>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
