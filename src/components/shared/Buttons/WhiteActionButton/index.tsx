import styled from 'styled-components';
import mq from '../../../../utils/mq';

const WhiteActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props: any): string => props.theme.colors.primary} !important;
  font-weight: 700 !important;
  padding: 0.9em 1.5em !important;
  border-radius: 2px;
  border: 0.09rem solid ${(props: any): string => props.theme.colors.primary} !important;
  height: 48px;
  font-size: 0.9em;
  min-width: 180px;
  width: 100%;
  text-align: center;
  margin: 0 1em 0 0;
  background-color: transparent !important;
  &:hover {
    background-color: ${(props: any): string =>
      props.theme.colors.primary} !important;
    color: white !important;
    cursor: pointer;
    border: 0 !important;
  }

  ${mq.laptop`
    width: inherit;
    padding: 0.75em 1.5em;
  `};
`;

export default WhiteActionButton;
