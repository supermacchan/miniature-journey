import { useSelector } from 'react-redux';
import { selectHistory } from 'redux/selectors';
import { nanoid } from 'nanoid'
import css from './SearchHistory.module.css';

export const SearchHistory = () => {
    const history = useSelector(selectHistory);

    return (
        <div className={css.history}>
            <h2 className={css.title}>Історія</h2>
            <ul className={css.list}>
                {history.map(item => <li className={css.item} key={nanoid()}>{item}</li>)}
            </ul>
        </div>
    )
}