import React from 'react';
import styled from 'styled-components';
import mq from "../../../../utils/mq";
import { ReactComponent as Screen } from "../../../../assets/svg/public/screen-2.svg";
import { Content, Main2, TextBox } from "../../shared/steps";
const Container = styled.section`
  margin: 0 !important;
  position: relative;
  width: 100%;
  background-color: ${(props): any => props.theme.colors.white};
  color: ${(props): any => props.theme.colors.blue};
  };
`;
const ImageSection = styled.div`
  display: flex;
  justify-content: flex-start;
  ${mq.mobile`
    justify-content: center;
  `}
  ${mq.mobileBig`
    justify-content: flex-start;
  `}
`;
const ScreenIcon = styled(Screen)`
  width: 85%;
  height: 40vh;
`;
const SubSection2: React.FC = () => (
    <Container>
        <Content>
            <Main2>
                <ImageSection>
                    <ScreenIcon />
                </ImageSection>
                <TextBox>
                    <h1>#2</h1>
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <p>
                        The best thing that can happen to you is Blossom mangement et, porttitor at sem.
                        Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus
                        nibh. Praesent sapien massa, convallis a pellentesque nec, egestas
                        non nisi.
                    </p>
                </TextBox>
            </Main2>
        </Content>
    </Container>
);
export default SubSection2;
