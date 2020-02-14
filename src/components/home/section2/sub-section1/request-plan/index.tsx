import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: auto;
  margin-top: 4vh;
  display: flex; 
`;

const Input = styled.input`
  width: 20vw;
  height: 4vh;
  display: in-line;
  border-radius: 5px;
  border: 1px solid ${(props: any): string => props.theme.colors.border};
  margin-bottom: 1em;
  padding: 0 1em;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props: any): string => props.theme.colors.darkGrey};
  }
  :-ms-input-placeholder {
    color: ${(props: any): string => props.theme.colors.darkGrey};
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px
      ${(props: any): string => props.theme.colors.lightAzureRadianceOne} inset !important;
  }
  :-internal-autofill-selected {
    background-color: ${(props: any): string =>
    props.theme.colors.lightAzureRadianceOne};
  }
  :focus {
    background-color: ${(props: any): string =>
    props.theme.colors.linkWater};
  }
  :-moz-autofill,
  :-moz-autofill:hover,
  :-moz-autofill:focus,
  :-moz-autofill:active {
    -moz-box-shadow: 0 0 0 30px
      ${(props: any): string => props.theme.colors.lightAzureRadianceOne} inset !important;
  }
  background-color: ${(props: any): string =>
    props.theme.colors.white};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props: any): string => props.theme.colors.white};
  background-color: ${(props: any): string =>
    props.theme.colors.primary} !important;
  font-weight: 700;
  // padding: 0.9em 1.5em;
  border-radius: 2px;
  border: 0.09rem solid ${(props: any): string => props.theme.colors.primary};
  height: 4vh;
  margin-left: 1vw;
  font-size: 0.9em;
  min-width: 180px;
  width: 2vw;
  text-align: center;
  &:hover {
    background-color: ${(props: any): string => props.theme.colors.primary};
    color: white;
    opacity: 0.5;
    cursor: pointer;
  }
`;

const RequestPlan: React.FC = () => {
    return(
      <Wrapper>
          <Input placeholder="Enter your email address"/>
          <Button>Submit</Button>
      </Wrapper>
    );
};

export default RequestPlan;
