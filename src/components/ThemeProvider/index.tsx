import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#0091f2',
    secondary: '#FEBA02',
    background: '#F2F6FA',
    secondaryBlue: '#3C35F7',
    copy: '#1D212B',
    darkGrey: '#8C9195',
    white: '#FFFFFF',
    border: 'rgba(0, 0, 0, 0.1)',
    copyright: '#777777',
    lightBlueBackgroundColor: 'rgba(0, 145, 242, 0.1)',
    comet: '#52596a',
    linkWater: '#ececfb',
    waterLoo: '#818795',
    waterLooTwo: '#818896',
    ghost: '#c7cad4',
    mystic: '#e2e5ef',
    ghostTwo: '#c5c9d3',
    cometTwo: '#51596c',
    catSkillWhite: '#f5f7fa',
    catSkillWhiteTwo: '#EFF1F7',
    hitGray: '#adb5bd',
    alabaster: '#f8f8f8',
    shuttleGray: '#656c7e',
    shuttleGrayTwo: '#5b5e61',
    silverChalice: '#afafaf',
    regentGray: '#949ba0',
    blackPearl: '#061b27',
    jordyBlue: '#91c3f4',
    linkWaterTwo: '#e9f2f8',
    oldBrick: '#8b1b1b',
    matisse: '#256eac',
    black: '#000000',
    blue: '#0000FF',
    blackTwo: 'rgba(0, 0, 0, 0.5)',
    blackThree: 'rgba(0, 0, 0, 0.6)',
    lightBlue: 'rgba(60, 53, 247, 0.1)',
    lightAzureRadianceOne: 'rgba(0, 145, 242, 0.04)',
    lightAzureRadianceTwo: 'rgba(0, 145, 242, 0.2)',
    whiteTwo: 'rgba(255, 255, 255, 0.5)',
    blueTwo: 'rgba(0, 145, 242, 1)',
    red: '#ff0000',
    fiord: '#52596a',
    linkWater2: '#c5c9d3',
    prussianBlue: 'rgba(0, 145, 242, 0.1)',
    tyrianPurple: 'rgba(60, 53, 247, 0.1)',
    hanPurple: '#3C35F7',
    aluminium: 'rgb(140, 145, 149)',
    backgroundGrey: '#24395B',
    arcadia: '#3c35f7',
    whiteSmoke: '#ebe9e9',
    ghostThree: 'rgba(197, 201, 211, 0.70)'
  }
};

const Theme: React.FC = ({ children }: { children?: any }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
