import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contactsList, onDelete }) => {
  return (
    <ul className={css.list}>
      {contactsList.map(contact => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
