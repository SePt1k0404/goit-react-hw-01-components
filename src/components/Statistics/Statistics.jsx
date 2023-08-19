import { StatisticsWrapper, StatsList, StatsListItem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <>
        <StatisticsWrapper className="statistics">
        {title && (<h2 className="title">Upload stats</h2>)}
        <StatsList className="stat-list">
        {stats.map(el => <StatsListItem key={el.id} className="item">
    <span className="label">{el.label}</span>
    <span className="percentage">{el.percentage}%</span>
        </StatsListItem>)}   
  </StatsList>
</StatisticsWrapper>
        </>
    );
}
