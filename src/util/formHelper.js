import * as Yup from 'yup';

export const phoneNumbRegret =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

export const contactsSchema = Yup.object({
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
