import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectShipping } from "redux/selectors";
import { addNewQuery } from "../../redux/historySlice";
import { fetchShipping } from "redux/operations";

import css from './ShippingSearchForm.module.css';

export const ShippingSearchForm = () => {
    const [trackingNum, setTrackingNum] = useState("");
    const { info: { number } } = useSelector(selectShipping);
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
                placeholder="Введіть номер ТТН"
                className={css.input}
                onChange={handleInputChange}
                value={trackingNum !== "" ? trackingNum : number}
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