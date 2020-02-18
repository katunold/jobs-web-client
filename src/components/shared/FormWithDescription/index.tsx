import React from 'react';
import styled from 'styled-components';
import mq from '../../../utils/mq';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-self: center;
  margin: 1.5rem;
  ${mq.laptopSmall`
    flex-flow: row;
    margin: 4rem 5rem;
  `}
`;

const Description = styled.div`
  color: ${(props: any): any => props.theme.colors.blackPearl};
  line-height: 1.5;
  padding-bottom: 2em;
  > div {
    display: flex;
  }
  img {
    margin-bottom: -20px;
  }
  h1 {
    margin-top: 0;
    margin-bottom: 1.5rem;
  }
  h3 {
    color: ${(props: any): string => props.theme.colors.primary};
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    max-width: 30em;
    color: ${(props: any): string => props.theme.colors.silverChalice};
  }

  ${mq.tablet`
    border-color: ${(props: any): string => props.theme.colors.linkWaterTwo};
    border-radius: 3px;
    margin-right: 4rem;
  `}
`;

const Form = styled.div`
  position: relative;
  background-color: ${(props: any): any => props.theme.colors.catSkillWhite};
  width: 100%;
  border-radius: 3px;

  ${mq.tablet`
    flex: 3 1 0;
  `}
`;

type FormWithDescriptionProps = {
  image?: any;
  form: any;
  header: string;
  subheader: string;
  description: string;
};

const FormWithDescription = ({
  image,
  form,
  header,
  subheader,
  description
}: FormWithDescriptionProps): any => {
  return (
    <Container>
      <Description>
        <div>
          <img src={image} alt={header} />
        </div>
        <h1>{header}</h1>
        <h3>{subheader}</h3>
        <p>{description}</p>
      </Description>
      <Form>{form}</Form>
    </Container>
  );
};

export default FormWithDescription;
