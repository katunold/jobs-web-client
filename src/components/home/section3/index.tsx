import React from 'react';
import styled from 'styled-components';
import mq from "../../../utils/mq";
import SubSection1 from "./sub-section1";
import SubSection2 from "./sub-section2";
import { ReactComponent as ComprehensiveCoverage } from "../../../assets/svg/home/comprehensive-coverage.svg";
import { ReactComponent as RealTimeData } from "../../../assets/svg/home/real-time-data.svg";
const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  ${mq.tablet`top: 0;`}
`;
const ComprehensiveCoverageIcon = styled(ComprehensiveCoverage)`
  width: 85%;
  height: 40vh;
`;
const RealTimeDataIcon = styled(RealTimeData)`
  width: 85%;
  height: 40vh;
`;
const Section3: React.FC = () => (
    <Wrapper>
        <SubSection1 section={1}
                     title={'Comprehensive Coverage'}
                     description={'We cover all job postings, from Fortune 500s to seed-stage start-ups all over the world'}
                     icon={ComprehensiveCoverageIcon}
        />
        <SubSection2/>
        <SubSection1 section={3}
                     title={'Real Time Data & Enrichment'}
                     description={'Understand customer intent in real-time by with-up-to-the-minute data ' +
                     'delivered to your sales and analytics teams in the formats they need to drive engage with leads and accounts'}
                     icon={RealTimeDataIcon}
        />
    </Wrapper>
);
export default Section3;
