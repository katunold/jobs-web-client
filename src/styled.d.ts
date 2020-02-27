// https://github.com/styled-components/styled-components-website/issues/392
import 'styled-components';

interface Colors {
  primary: string;
  secondary: string;
  background: string;
  secondaryBlue: string;
  copy: string;
  darkGrey: string;
  white: string;
  border: string;
  copyright: string;
  lightBlueBackgroundColor: string;
  comet: string;
  linkWater: string;
  waterLoo: string;
  waterLooTwo: string;
  ghost: string;
  mystic: string;
  ghostTwo: string;
  cometTwo: string;
  catSkillWhite: string;
  catSkillWhiteTwo: string;
  hitGray: string;
  alabaster: string;
  shuttleGray: string;
  shuttleGrayTwo: string;
  silverChalice: string;
  regentGray: string;
  blackPearl: string;
  jordyBlue: string;
  linkWaterTwo: string;
  oldBrick: string;
  matisse: string;
  black: string;
  blue: string;
  blackTwo: string;
  blackThree: string;
  lightBlue: string;
  lightAzureRadianceOne: string;
  lightAzureRadianceTwo: string;
  whiteTwo: string;
  blueTwo: string;
  red: string;
  fiord: string;
  linkWater2: string;
  prussianBlue: string;
  tyrianPurple: string;
  hanPurple: string;
  aluminium: string;
  backgroundGrey: string;
  arcadia: string;
  whiteSmoke: string;
  ghostThree: string;
  lightGray: string;
  lighterBlue: string;
  deepBlue: string;
  text: object;
  linkWater3: string;
  blue1: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
  }
}
