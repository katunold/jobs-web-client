/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import notFoundSVG from '../../../assets/svg/navigation/404.svg';
import {useTitle} from "../../../utils/hooks";

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 5em;
  background-color: ${(props: any): string => props.theme.colors.primary.white};
  width: 100%;
  max-width: 800px;
  text-align: center;
  border-radius: 5px;

  h3 {
    font-weight: 500;
    max-width: 30em;
  }

  img {
    width: 120px;
    height: 120px;
  }
`;

const NotFound: React.FC = () => {
  useTitle({ title: 'Page Not Found' });
  return (
    <Container>
      <Card>
        <img src={notFoundSVG} alt="" />
        <h2>Page not found</h2>
        <h3>We recommend checking the url to ensure it's spelled right.</h3>
      </Card>
    </Container>
  );
};

export default NotFound;
