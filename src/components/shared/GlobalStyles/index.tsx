import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  a {
    text-decoration: none;
    color: ${(props): string => props.theme.colors.copy};

    &:hover {
        color: ${(props): string => props.theme.colors.primary};
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  button {
    background-color: transparent;
  }
`;

export default GlobalStyles;
