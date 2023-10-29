import { StatisticsSection, StatTitle, StatList, ListItem, StatLabel } from './Statistics.styled';

export const Statistics = ( {stats, title}) => {
  return (
    <StatisticsSection>
      {title ? <StatTitle>{title}</StatTitle> : null}
      <StatList>
        {stats.map(stat => {
          return (
            <ListItem key={stat.id}>
              <StatLabel>{stat.label}</StatLabel>
              <span>{stat.percentage}%</span>
            </ListItem>
          )
        })}
      </StatList>
    </StatisticsSection>
  )
};