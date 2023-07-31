import prices from '../data/prices.json';
import "./style.module.scss";

export default function Price() {
    return (
        <div className="price_wrapper">
            {prices.map((item, index) => (
                <div className={"price" + (item.isSelected ? " selected" : "")} key={index}>
                    <div className={"price_title" + (item.bgcolor ? ` ${item.bgcolor}` : "")}>{item.title}</div>
                    <div className={"price_price" + (item.bgcolor ? ` light_${item.bgcolor}` : "")}>
                        <p className='price_currency'>руб.</p>
                        <p className='price_number'>{item.price}</p>
                        <p className='price_month'>/мес.</p>
                    </div>
                    <div className="price_speed">до {item.speed} Мбит/сек.</div>
                    <div className="price_traffic">Обьем включенного траффика не ограничен</div>
                </div>
            ))
            }
        </div>
    );
}
