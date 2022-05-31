import PropType from "prop-type";
import "./Statistics.css";

export default function Statistics({title, stats}) {
    
    return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}

            <ul className="stat-list">{
                stats.map(item => (
                    <li className="item" key = {item.id}>
                        <span className="label">{item.label }</span>
                        <span className="percentage">{item.percentage}%</span>
                    </li>
                ))
            }
            </ul>
        </section>
    )
}

Statistics.PropType = {
    id: PropType.number,
    label: PropType.string,
    percentage: PropType.number,
    title: PropType.string
}