import React from "react";
import styled from "styled-components";
import mq from "../../../../utils/mq";
import { ReactComponent as Screen } from "../../../../assets/svg/public/screen-1.svg";
import { Container, Content, Main, TextBox } from "../../shared/steps";
import RequestPilot from "../../../shared/public/Navigation/RequestPilot";
const ImageSection = styled.div`
  display: flex;
  justify-content: flex-end;
  ${mq.mobile`
    justify-content: center;
  `}
  ${mq.mobileBig`
    justify-content: flex-end;
  `}
`;
const ScreenIcon = styled(Screen)`
  width: 85%;
  height: 40vh;
`;
interface Section1Props {
  section: number;
};
const SubSection1: React.FC<Section1Props> = ({ section }: Section1Props) => (
    <Container>
      <Content>
        <Main>
          <TextBox>
            <h1>#{section}</h1>
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus
              nibh. Praesent sapien massa, convallis a pellentesque nec, egestas
              non nisi.
            </p>
            <RequestPilot inverted={false}/>
          </TextBox>
          <ImageSection>
            <ScreenIcon />
          </ImageSection>
        </Main>
      </Content>
    </Container>
);
export default SubSection1;
