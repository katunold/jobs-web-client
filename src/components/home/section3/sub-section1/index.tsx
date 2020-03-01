import React from "react";
import styled from "styled-components";
import mq from "../../../../utils/mq";
import { ReactComponent as Screen } from "../../../../assets/svg/public/screen-1.svg";
import { ReactComponent as ComprehensiveCoverage } from "../../../../assets/svg/home/comprehensive-coverage.svg";
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
const ComprehensiveCoverageIcon = styled(ComprehensiveCoverage)`
  width: 85%;
  height: 40vh;
`;
interface Section1Props {
  section: number;
  title: string;
  description: string;
  icon: string
};
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
