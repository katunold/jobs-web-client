import styled from 'styled-components';
import mq from '../../../../utils/mq';

const BlueActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props: any): string => props.theme.colors.white};
  background-color: ${(props: any): string =>
    props.theme.colors.primary} !important;
  font-weight: 700;
  padding: 0.9em 1.5em;
  border-radius: 2px;
  border: 0.09rem solid ${(props: any): string => props.theme.colors.primary};
  height: 48px;
  margin: 0;
  font-size: 0.9em;
  min-width: 180px;
  width: 100%;
  text-align: center;
  &:hover {
    background-color: ${(props: any): string => props.theme.colors.primary};
    color: white;
    opacity: 0.5;
    cursor: pointer;
  }

  ${mq.laptop`
    width: 100%;
    padding: 0.75em 1.5em;
  `};
`;

export default BlueActionButton;
