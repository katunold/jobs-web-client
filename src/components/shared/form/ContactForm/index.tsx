import React from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import { ResponsePrompt } from '../index';
import LoadingOverlay from '../../LoadingOverlay';
import mq from '../../../../utils/mq';

const Container = styled.div`
  min-height: 380px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const Middle = styled.div`
  margin: 0;
  display: flex;
  background-color: ${(props: any): string => props.theme.colors.white};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4em 3.5em;
  border-radius: 5px;
  position: relative;
  border: 1px solid ${(props: any): string => props.theme.colors.border};
  svg {
    margin: 20px 0;
  }
  form {
    width: 100%;
  }
  ${mq.tablet`
    padding: 70px;
    max-width: 500px;
  `}
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-flow: column;
  border: 0;
  margin: 0;
  padding: 0;

  input,
  textarea {
    margin-bottom: 1em;
    border: none;
    ouline: none;
    border-bottom: 1px solid
      ${(props: any): string => props.theme.colors.blue};
    padding: 0 2em 0.4em 0;
    width: 100%;
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }

  textarea {
    min-height: 170px;
    padding: 0em 2em 0em 0em;
    border: none;
    border-bottom: 1px solid
      ${(props: any): string => props.theme.colors.blue};
  }
`;

interface FormError {
  type: 'error' | 'success';
  message: string;
}

interface Props {
  initialValues: any;
  success?: boolean;
  loading: boolean;
  successMessage?: () => JSX.Element;
  validationSchema: any;
  handleSubmit: (values: any) => void;
  formError: FormError;
  children: React.ReactNode;
  support?: () => JSX.Element;
}

const ContactForm: React.FC<Props> = props => {
  const {
    success,
    loading,
    formError,
    initialValues,
    validationSchema,
    handleSubmit,
    children,
    successMessage,
    support
  } = props;
  return (
    <Container>
      {success ? (
        successMessage && successMessage()
      ) : (
        <Fieldset>
          <Middle>
            {formError.message !== '' && <ResponsePrompt prompt={formError} />}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {(props: any): any => {
                return (
                  <>
                    {loading && <LoadingOverlay />}
                    <Form>{children}</Form>
                  </>
                );
              }}
            </Formik>
            {support && support()}
          </Middle>
        </Fieldset>
      )}
    </Container>
  );
};

export { ContactForm };
