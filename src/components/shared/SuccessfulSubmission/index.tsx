/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/svg/home/blossom-logo-blue.svg';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justfify-content: center;
  background-color: ${(props: any): string => props.theme.colors.white};
  padding: 4em 3.5em;
  border-radius: 5px;
  border: 1px solid ${(props: any): string => props.theme.colors.border};
  color: ${(props: any): string => props.theme.colors.black};

  h3 {
    margin: 0.4rem 0 !important;
  }

  p {
    margin: 0;
  }

  img {
    width: 6rem !important;
  }
`;

interface Props {
  message?: string;
}

const SuccessfulSubmission: React.FC<any> = (props: Props) => {
  const default_message = 'Thanks for getting in touch!';
  return (
    <Container>
      <img src={logo} alt="" className="w4" />
      <h3>{props.message ? props.message : default_message}</h3>
      <p>We'll get back to you shortly.</p>
    </Container>
  );
};

export default SuccessfulSubmission;
