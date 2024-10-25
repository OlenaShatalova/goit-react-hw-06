import { FaUser, FaPhoneAlt } from 'react-icons/fa';

import css from './Contact.module.css';

const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <>
      <div className={css.data}>
        <p>
          <FaUser />
          {name}
        </p>
        <p>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button
        type="button"
        className={css.btn_delete}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
