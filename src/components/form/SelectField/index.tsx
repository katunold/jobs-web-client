import React from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { useField } from 'formik';
import Error from '../Error';

const Select = styled.select`
  width: 100%;
  height: 50px;
  border-radius: 2px;
  border: 1px solid ${(props: any): string => props.theme.colors.border}};
  border-bottom: 1px solid
    ${(props: any): any => (props.error ? `red` : props.theme.colors.border)};
  margin-bottom: 1em;
  padding: 0 1em;
  background-color: ${(props: any): string =>
    props.theme.colors.lightAzureRadianceOne};

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  background-image: url(https://d1uyme8f6ss6qi.cloudfront.net/image/form/select-arrows.png);
  background-position: calc(100% - 16px) 50%;
  background-repeat: no-repeat;
  background-size: 8px 20px;
  ${(props: any): FlattenSimpleInterpolation =>
    props.stroked &&
    css`
      color: ${props.theme.colors.white};
      height: inherit;
      // margin: 15px 0 0 0;
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
        -webkit-box-shadow: 0 0 0 30px #24395b inset !important;
      }
      :-webkit-autofill {
        -webkit-text-fill-color: ${props.theme.colors.white} !important;
      }
    `}
`;

const SelectField: React.FC<any> = ({ options, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Select {...field} {...props} error={meta.touched && meta.error}>
        <option value="" disabled>
          {props.placeholder}
        </option>

        {options.map((option: any, i: number) => {
          return (
            <option
              value={option}
              key={`country-${i}`}
              disabled={option.includes('----')}
            >
              {option}
            </option>
          );
        })}
      </Select>

      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </>
  );
};

export default SelectField;
