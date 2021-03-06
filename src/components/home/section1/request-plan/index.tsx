import React from 'react';
import styled from 'styled-components';
import BlueActionButton from "../../../shared/Buttons/BlueActionButton";
import {Link} from "react-router-dom";
import RequestPilot from "../../../shared/public/Navigation/RequestPilot";
const Wrapper = styled.div`
  width: auto;
  display: flex; 
`;

const RequestPlan: React.FC = () => {
    return(
        <Wrapper>
            <RequestPilot inverted={false} large={false}/>
        </Wrapper>
    );
};
export default RequestPlan;
