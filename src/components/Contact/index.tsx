import React from 'react';
import styled from 'styled-components';
import mq from '../../utils/mq';
import ContactForm from './ContactForm';
import FormWithDescription from '../FormWithDescription';
import RequestDemo from '../../assets/svg/public/request-demo.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  div {
    div {
      > div {
        justify-content: flex-end;
      }
    }
  }
  img {
    width: 220px;
    justify-self: flex-end;
  }
  > div {
    width: 100%;
  }

  ${mq.tablet`justify-content: center;`}
`;

const Contact: React.FC = () => {
  return (
    <Container>
      <FormWithDescription
        image={RequestDemo}
        header="Talk to sales"
        subheader="Speak with one of our representatives."
        description="If you'd like to see a demo or have questions about Blossom please feel
        free to email us at email or fill out this form and we'll get back to
        you shortly."
        form={<ContactForm />}
      />
    </Container>
  );
};

export default Contact;
