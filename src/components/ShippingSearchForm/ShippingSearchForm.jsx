import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewQuery } from "../../redux/historySlice";

import css from './ShippingSearchForm.module.css';

export const ShippingSearchForm = () => {
    const [trackingNum, setTrackingNum] = useState("");
    const dispatch = useDispatch();

    const handleInputChange = event => {
        const { value } = event.currentTarget;
        setTrackingNum(value)
    };

    const handleFormSubmit = event => {
        console.log('shalala');
        event.preventDefault();
        dispatch(addNewQuery(trackingNum));
    }

    return (
        <form className={css.form} onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="query"
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