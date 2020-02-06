/* eslint-disable @typescript-eslint/camelcase */
import { Machine, assign } from 'xstate';
import api from '../../../http/api';

const requiredFieldsHaveInput = (data: any): boolean => {
  const requiredFields = [
    'name',
    'email_address',
    'message',
    'company_name',
    'job_title',
    'country'
  ];
  return !requiredFields.some(field => data[field] === '');
};

const getValidationErrors = (data: { [key: string]: string }): any => {
  const requiredFields = [
    'name',
    'email_address',
    'message',
    'company_name',
    'job_title',
    'country'
  ];

  const errorText: { [key: string]: string } = {
    name: 'Name is required.',
    email_address: 'Email address is required.',
    message: 'Message is required',
    company_name: 'Company name is required.',
    job_title: 'Job Title is required.',
    country: 'Country is required'
  };
  const errors: { [key: string]: string } = {};

  for (const field in data) {
    if (data[field] === '' && requiredFields.includes(field)) {
      errors[field] = errorText[field];
    }
  }

  return errors;
};

const machine = Machine({
  initial: 'idle',
  context: {
    errors: {}
  },
  states: {
    idle: {
      on: {
        SUBMIT: [
          {
            target: 'loading',
            cond: (ctx: any, event: any): any =>
              requiredFieldsHaveInput(event.data)
          },
          {
            target: 'error',
            actions: assign({
              errors: (ctx: any, event: any) => getValidationErrors(event.data)
            })
          }
        ]
      }
    },
    loading: {
      invoke: {
        id: 'submitForm',
        src: async (_: any, event: any): Promise<any> => {
          // eslint-disable-next-line no-undef
          const contactResponse = await api.postContactSalesPublic(
            event.data.name,
            event.data.email_address,
            event.data.message,
            event.data.company_name,
            event.data.job_title,
            event.data.country
          );
          if (
            contactResponse.data.error ||
            contactResponse.data.status === 'failure'
          ) {
            const authError = {
              data: {
                message:
                  'There was an error sending your request. Please try again later'
              }
            };
            return Promise.reject(
              contactResponse.data.error ? authError : contactResponse.data
            );
          }
          return contactResponse;
        },
        onDone: {
          target: 'success'
        },
        onError: {
          target: 'error',
          actions: assign({
            errors: (ctx: any, event: any) => event.data
          })
        }
      }
    },
    error: {
      on: {
        SUBMIT: [
          {
            target: 'loading',
            cond: (ctx: any, event: any): any =>
              requiredFieldsHaveInput(event.data)
          },
          {
            target: 'error',
            actions: assign({
              errors: (ctx: any, event: any): any =>
                getValidationErrors(event.data)
            })
          }
        ]
      }
    },
    success: {
      type: 'final'
    }
  }
});

export default machine;
