import React from "react";
import styled from "styled-components";
import mq from "../../../../utils/mq";
import { Container, Content, Main, TextBox } from "../../shared/steps";
import RequestPilot from "../../../shared/public/Navigation/RequestPilot";
const ImageSection = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  ${mq.mobile`
    justify-content: center;
  `}
  ${mq.mobileBig`
    justify-content: flex-end;
  `}
`;

interface Section1Props {
  section: number;
  title: string;
  description: string;
  icon: string
}

const SubSection1: React.FC<Section1Props> = (props: Section1Props) => {
  const { section, title, description, icon: Icon } = props;
    return (<Container>
      <Content>
        <Main>
          <TextBox>
            <h1>#{section}</h1>
            <h4>{title}</h4>
            <p>
              {description}
            </p>
            <RequestPilot inverted={false} large={false}/>
          </TextBox>
          <ImageSection>
            <Icon/>
          </ImageSection>
        </Main>
      </Content>
    </Container>)
};
export default SubSection1;
