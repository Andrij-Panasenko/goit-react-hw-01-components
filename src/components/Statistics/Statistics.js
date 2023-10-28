import data from './data.json'
import { StatisticsSection, StatTitle, StatList, ListItem, StatLabel } from './Statistics.styled';

export const Statistics = (props) => {
  return (
    <StatisticsSection>
      <StatTitle>{props.title}</StatTitle>

      <StatList>
        {data.map(item => {
          return (
            <ListItem key={item.id}>
              <StatLabel>{item.label}</StatLabel>
              <span>{item.percentage}%</span>
            </ListItem>
          )
        })}
      </StatList>
    </StatisticsSection>
  )
};


