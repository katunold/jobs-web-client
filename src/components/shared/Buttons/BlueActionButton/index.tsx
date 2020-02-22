import styled from 'styled-components';
const BlueActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props: any): string => props.theme.colors.white};
  background-color: ${(props: any): string =>
    props.theme.colors.primary} !important;
  font-weight: 700;
  border-radius: 0px 5px 5px 5px;
  border: 0.09rem solid ${(props: any): string => props.theme.colors.primary};
  height: 5vh;
  font-size: 0.9em;
  min-width: 120px;
  width: 1vw;
  text-align: center;
  &:hover {
    background-color: ${(props: any): string => props.theme.colors.primary};
    color: white;
    opacity: 0.5;
    cursor: pointer;
  }
`;
export default BlueActionButton;
