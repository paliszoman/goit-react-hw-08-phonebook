import { Spinner } from 'react-bootstrap';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <Spinner />
    </div>
  );
};
