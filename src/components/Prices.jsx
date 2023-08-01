import prices from '../data/prices.json';
import styles from './style.module.scss';

export default function Price() {
    return (
        <div className={styles.price_wrapper}>
            {prices.map((item, index) => (
                <div className={styles.price + (item.isSelected ? `${styles.selected}` : "")} key={index}>
                    <div className={styles.price_title + (item.bgcolor ? ` ${styles[item.bgcolor]}` : "")}>{item.title}</div>
                    <div className={styles.price_price + (item.bgcolor ? ` ${styles['light_' + item.bgcolor]}` : "")}>
                        <p className={styles.price_currency}>руб.</p>
                        <p className={styles.price_number}>{item.price}</p>
                        <p className={styles.price_mont}>/мес.</p>
                    </div>
                    <div className={styles.price_speed}>до {item.speed} Мбит/сек.</div>
                    <div className={styles.price_traffic}>Обьем включенного траффика не ограничен</div>
                </div>
            ))
            }
        </div >
    );
}
