import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.data}>
        <p>
          <FaUser className={css.myIcon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.myIcon} />
          {number}
        </p>
      </div>
      <button
        type="button"
        className={css.btn_delete}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
