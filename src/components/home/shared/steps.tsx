import styled from "styled-components";
import mq from "../../../utils/mq";
export const Container = styled.section`
  position: relative;
  width: 100%;
  background-color: ${(props): any => props.theme.colors.linkWater3};
  color: ${(props): any => props.theme.colors.white};
  };
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 0rem 1rem;
`;
export const Main = styled.main`
  display: flex;
  flex-direction: row;
  width: 1200px;
  padding: 30px 0;
  ${mq.mobile`
    flex-direction: column-reverse;
  `}
  ${mq.mobileBig`
    flex-direction: row;
  `}
`;
export const Main2 = styled.main`
  display: flex;
  flex-direction: row;
  width: 1200px;
  padding: 30px 0;
  ${mq.mobile`
    flex-direction: column;
  `}
  ${mq.mobileBig`
    flex-direction: row;
  `}
`;
export const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  ${mq.mobile`
    flex-direction: column;
    justify-content: center;
    text-align: center;
  `}
  ${mq.mobileBig`
    flex-direction: row;
  `}
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  text-align: left;
  align-items: center;
  height: auto;
  h1 {
    font-weight: 500px;
    margin: 0 0 -20px -20px;
    color: ${(props): any => props.theme.colors.darkGrey};
  }
  h4 {
    font-weight: 500px;
    font-size: 1.5em;
    line-height: 1;
    letter-spacing: 0.1rem;
    color: ${(props): any => props.theme.colors.black};
    margin-top: 0px;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    text-align: left;
    width: 95%;
    margin-bottom: 2em;
    color: ${(props): any => props.theme.colors.black};
  }
  ${mq.mobile`
    width: 100%;
    text-align: center;
  `}
  ${mq.mobileBig`
    width: 50%;
    align-items: start;
  `}
`;
