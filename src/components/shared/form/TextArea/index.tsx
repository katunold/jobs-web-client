import React from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Field, useField } from 'formik';
import Error from '../Error';

const Container = styled(Field)`
  min-height: 150px;
  width: 100%;
  padding: 1em;
  border: 1px solid ${(props: any): string => props.theme.colors.border};
  background-color: ${(props: any): string =>
    props.theme.colors.lightAzureRadianceOne};
  margin-bottom: 1em;
  border-radius: 2px;
  outline: none;
  resize: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props: any): string => props.theme.colors.darkGrey};
  }
  :-ms-input-placeholder {
    color: ${(props: any): string => props.theme.colors.darkGrey};
  }
  ${(props: any): FlattenSimpleInterpolation =>
    props.stroked &&
    css`
      padding: 0 2em 0 0;
      border: none;
      border-bottom: 1px solid white;
      background-color: transparent;
      ::placeholder,
      ::-webkit-input-placeholder {
        color: ${props.theme.colors.darkGrey};
      }
      :-ms-input-placeholder {
        color: ${props.theme.colors.darkGrey};
      }
      :-webkit-autofill,
      :-webkit-autofill:hover,
      :-webkit-autofill:focus,
      :-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px #24395b inset !important;
      }
      :-webkit-autofill {
        -webkit-text-fill-color: ${props.theme.colors.darkGrey} !important;
      }
    `}
`;

const TextArea: React.FC<any> = (props: any) => {
  const { name, placeholder, disabled } = props;
  const [field, meta] = useField(props);

  return (
    <>
      <Container
        name={name}
        forwardedAs="textarea"
        placeholder={placeholder}
        disabled={disabled}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </>
  );
};

export default TextArea;
