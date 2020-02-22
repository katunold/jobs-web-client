import React from "react";
import styled from "styled-components";
import mq from "../../../utils/mq";

export const Content = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 3rem 1rem;

  ${mq.tablet`padding: 4rem 2rem;`}
`;
