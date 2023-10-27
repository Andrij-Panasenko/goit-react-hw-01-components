import data from './data.json'

export const Statistics = (props) => {
  return (
    <section className="statistics">
      <h2 className="title">{props.title}</h2>

      <ul>
        {data.map(item => {
          return (
            <li className="item" key={item.id}>
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}%</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
};


