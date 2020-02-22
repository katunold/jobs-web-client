import React from 'react';
import styled from 'styled-components';
import BlueActionButton from "../../../shared/Buttons/BlueActionButton";
const Wrapper = styled.div`
  width: auto;
  display: flex; 
`;
const Input = styled.input`
  width: 20vw;
  min-width: 160px;
  height: 5vh;
  display: in-line;
  border-radius: 0px 5px 5px 5px;
  border: 1px solid ${(props: any): string => props.theme.colors.border};
  margin-bottom: 1em;
  margin-right: 1vw;
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
const RequestPlan: React.FC = () => {
    return(
        <Wrapper>
            <Input placeholder="Enter your email address"/>
            <BlueActionButton>Request Pilot</BlueActionButton>
        </Wrapper>
    );
};
export default RequestPlan;
