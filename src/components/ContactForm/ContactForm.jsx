import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

import css from './ContactForm.module.css';

const phoneNumbRegret =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

const ContactsSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .required('Required')
    .matches(
      phoneNumbRegret,
      'Invalid phone number. Phone must be +380XXXXXXXXX'
    ),
});

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (value, actions) => {
    value.id = nanoid();
    onAdd(value);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ id: '', name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={ContactsSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <Field
            type="text"
            name="name"
            id="name"
            placeholder="Potter Harry"
          ></Field>
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
        <label className={css.label}>
          <span>Number</span>
          <Field type="text" name="number" placeholder="+38xxxxxxxxx"></Field>
          <ErrorMessage name="number" component="span" className={css.error} />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
