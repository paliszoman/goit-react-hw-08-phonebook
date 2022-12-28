import css from './Contact.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Button } from 'react-bootstrap';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <span className={css.contact}>
        {contact.name}: {contact.number}
        <Button
          type="button"
          className={css.btn}
          variant="outline-danger"
          onClick={handleDelete}
        >
          x
        </Button>
      </span>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
