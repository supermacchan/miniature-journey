import { useSelector } from 'react-redux';
import { selectShipping } from 'redux/selectors';
import css from './ShippingInfo.module.css';

export const ShippingInfo = () => {
    const { status, sender, recipient } = useSelector(selectShipping);

    return (
        <>
        
        { !status && <div className={css.emptyInfo}></div> }

        { status && 
            <div className={css.info}>
                <h2 className={css.status}>Статус доставки: {status}</h2>
                <p className={css.details}>Відправлено: {sender}</p>
                <p className={css.details}>Отримано: {recipient}</p>
            </div>         
        }

        </>
    )
}