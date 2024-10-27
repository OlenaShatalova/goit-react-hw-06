import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice.js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { contactsSchema } from '../../util/formHelper';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (formValue, formActions) => {
    formValue.id = nanoid();
    dispatch(addContact(formValue));
    formActions.resetForm();
  };

  return (
    <Formik
      initialValues={{ id: '', name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={contactsSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <Field
            type="text"
            name="name"
            id="name"
            placeholder="Harry Potter"
          ></Field>
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
        <label className={css.label}>
          <span>Number</span>
          <Field type="text" name="number" placeholder="+380xxxxxxxx"></Field>
          <ErrorMessage name="number" component="span" className={css.error} />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
