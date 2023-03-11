import { useState } from "react";
import { useDispatch } from "react-redux";
// useSelector
// import { selectShipping } from "redux/selectors";
import { addNewQuery } from "../../redux/historySlice";
import { fetchShipping } from "redux/operations";

import css from './ShippingSearchForm.module.css';

export const ShippingSearchForm = () => {
    const [trackingNum, setTrackingNum] = useState("");
    // const { info: { number } } = useSelector(selectShipping);
    const dispatch = useDispatch();

    const handleInputChange = event => {
        const { value } = event.currentTarget;
        setTrackingNum(value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        dispatch(fetchShipping(trackingNum));
        dispatch(addNewQuery(trackingNum));
        setTrackingNum("");
    }

    return (
        <form className={css.form} onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="query"
                pattern="^(5|2)([0-9]{13})$"
                required
                title="Номер відправлення має складатися з 14 цифр та починатися з 2 або 5"
                placeholder="Введіть номер ТТН"
                className={css.input}
                onChange={handleInputChange}
                value={trackingNum}
            />
            <button 
                type="submit"
                className={css.button}
            >
                Перевірити статус
            </button>
        </form>
    )
}