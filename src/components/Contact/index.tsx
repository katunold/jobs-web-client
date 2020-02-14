import React from "react";
import styled from "styled-components";
import mq from "../../utils/mq";
import ContactForm from "./ContactForm";
import FormWithDescription from "../shared/FormWithDescription";
import RequestDemo from "../../assets/svg/public/request-demo.svg";
import Navigation from "../shared/public/Navigation";
import Footer from "../shared/public/Footer";

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

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 64px;
  overflow: hidden;
  width: 100%;
  min-height: 100%;

  ${mq.tablet`margin-top: 75px;`}
`;

const Content = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;

  ${mq.tablet`padding: 4rem 2rem;`}
`;

const Main = styled.main`
  max-width: 1200px;
  width: 100%;
`;

const Contact: React.FC = () => {
  return (
    <Wrapper>
      <Navigation />
      <Content>
        <Main>
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
        </Main>
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default Contact;
