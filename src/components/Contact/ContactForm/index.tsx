/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { useMachine } from '@xstate/react';
import machine from './machine';
import SuccessfulSubmission from '../../SuccessfulSubmission';
import { InputField, TextArea, SelectField } from '../../form';
import { selectOptions } from '../../Countries';
import * as yup from 'yup';
import { trackClick } from '../../../utils/analyticsTracker';
import { ContactForm } from '../../form/ContactForm';
import { BlueActionButton } from '../../Buttons';

interface FormValues {
  name: string;
  email_address: string;
  message: string;
  company_name: string;
  job_title: string;
  country: string;
}

const initialValues: FormValues = {
  name: '',
  email_address: '',
  message: '',
  company_name: '',
  job_title: '',
  country: ''
};

const validationSchema = yup.object({
  name: yup
    .string()
    .max(256, 'Name must be 256 characters or less')
    .required('Name is required'),
  email_address: yup
    .string()
    .email('Invalid email address')
    .required('Email address is required'),
  message: yup
    .string()
    .required('Please describe your issue so we can be most helpful.'),
  company_name: yup
    .string()
    .max(256, 'Name must be 256 characters or less')
    .required('Company name is required'),
  job_title: yup
    .string()
    .max(256, 'Job title must be 256 characters or less')
    .required('Job title is required'),
  country: yup.string().required('Country is required')
});
const Contact: React.FC = () => {
  const [current, send] = useMachine(machine);
  const errors: any = current.context.errors;

  const handleSubmit = (values: FormValues): any => {
    send({ type: 'SUBMIT', data: { ...values } });
  };

  return (
    <ContactForm
      success={current.matches('success')}
      loading={current.matches('loading')}
      formError={{ type: 'error', message: errors.data }}
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={handleSubmit}
      successMessage={(): JSX.Element => <SuccessfulSubmission />}
    >
      <InputField type="text" name="name" placeholder="Name" />
      <InputField
        type="text"
        name="email_address"
        placeholder="Email address"
      />
      <TextArea name="message" placeholder="How can we help?" stroked />
      <InputField type="text" name="company_name" placeholder="Company Name" />
      <InputField type="text" name="job_title" placeholder="Job Title" />
      <SelectField
        name="country"
        options={selectOptions}
        placeholder="Country"
      />
      <BlueActionButton
        disabled={current.matches('loading')}
        onClick={trackClick}
      >
        Schedule a meeting
      </BlueActionButton>
    </ContactForm>
  );
};

export default Contact;
