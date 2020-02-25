import React from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { useField } from 'formik';
import Error from '../Error';

const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 2px;
  border: 1px solid
    ${(props: any): string => props.theme.colors.lightGray};
  margin-bottom: 1em;
  padding: 0 1em;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props: any): string => props.theme.colors.waterLooTwo};
  }
  :-ms-input-placeholder {
    color: ${(props: any): string => props.theme.colors.waterLooTwo};
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px
      ${(props: any): string => props.theme.colors.lighterBlue} inset !important;
  }
  :-internal-autofill-selected {
    background-color: ${(props: any): string =>
    props.theme.colors.lighterBlue};
  }
  :focus {
    background-color: ${(props: any): string =>
    props.theme.colors.lighterBlue};
  }
  :-moz-autofill,
  :-moz-autofill:hover,
  :-moz-autofill:focus,
  :-moz-autofill:active {
    -moz-box-shadow: 0 0 0 30px
      ${(props: any): string => props.theme.colors.lighterBlue} inset !important;
  }
  background-color: ${(props: any): string =>
    props.theme.colors.lighterBlue};
  ${(props: any): FlattenSimpleInterpolation =>
    props.stroked &&
    css`
      color: ${props.theme.colors.white};
      height: inherit;
      padding: 0.6em 0;
      border: none;
      ouline: none;
      border-radius: 0;
      border-bottom: 1px solid white;
      width: 100%;
      background-color: transparent;
      &:focus {
        outline: none;
      }
      ::placeholder,
      ::-webkit-input-placeholder {
        color: ${props.theme.colors.white};
      }
      :-ms-input-placeholder {
        color: ${props.theme.colors.white};
      }
      :-webkit-autofill,
      :-webkit-autofill:hover,
      :-webkit-autofill:focus,
      :-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px ${props.theme.colors.deepBlue}
          inset !important;
      }
      :-webkit-autofill {
        -webkit-text-fill-color: ${props.theme.colors.white} !important;
      }
    `}
`;

const InputField: React.FC<any> = (props: any) => {
    const [field, meta] = useField(props);

    return (
        <>
            <Input {...field} {...props} error={meta.touched && meta.error} />
            {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
        </>
    );
};

export default InputField;
