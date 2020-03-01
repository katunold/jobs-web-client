import React from 'react';
import styled from 'styled-components';
import mq from "../../../../utils/mq";
import { ReactComponent as CustomizableKeywords } from "../../../../assets/svg/home/customizable-keywords.svg";
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
const CustomizableKeywordsIcon = styled(CustomizableKeywords)`
  width: 85%;
  height: 40vh;
`;
const SubSection2: React.FC = () => (
    <Container>
        <Content>
            <Main2>
                <ImageSection>
                    <CustomizableKeywordsIcon />
                </ImageSection>
                <TextBox>
                    <h1>#2</h1>
                    <h4>Customizable Keywords & Data Feeds</h4>
                    <p>
                        Search and filter across the entire text of job postings, using the keywords, titles
                        skills, certifications, sector and company sizing data points that matter most to your growth
                    </p>
                </TextBox>
            </Main2>
        </Content>
    </Container>
);
export default SubSection2;
