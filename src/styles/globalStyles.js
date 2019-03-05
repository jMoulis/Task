import { css } from '@emotion/core';
import RobotoRegular from 'assets/fonts/Roboto-Regular.ttf';
import RobotoItalic from 'assets/fonts/Roboto-Italic.ttf';
import RobotoLight from 'assets/fonts/Roboto-Light.ttf';
import RobotoLightItalic from 'assets/fonts/Roboto-LightItalic.ttf';
import RobotoBold from 'assets/fonts/Roboto-Bold.ttf';
import RobotoBoldItalic from 'assets/fonts/Roboto-BoldItalic.ttf';

export default css`
  @font-face {
    font-family: 'roboto';
    src: url('${RobotoRegular}') format('truetype');
  }
  @font-face {
    font-family: 'roboto-italic';
    src: url('${RobotoItalic}') format('truetype');
    font-style: italic;
  }
  @font-face {
    font-family: 'roboto-bold';
    src: url('${RobotoBold}') format('truetype');
    font-weight: bold;
  }
  @font-face {
    font-family: 'roboto-bold-italic';
    src: url('${RobotoBoldItalic}') format('truetype');
    font-weight: bold;
    font-style: italic;
  }
  @font-face {
    font-family: 'roboto-italic';
    src: url('${RobotoItalic}') format('truetype');
    font-style: italic;
  }
  @font-face {
    font-family: 'roboto-light';
    src: url('${RobotoLight}') format('truetype');
    font-weight: normal;
  }
  @font-face {
    font-family: 'roboto-light-italic';
    src: url('${RobotoLightItalic}') format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: 'roboto', sans-serif;
  }
  html {
    font-size: 62.5%;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    font-size: 1.5rem;
    height: inherit;
  }
  #root {
    height: inherit;
  }
  #portal {
    position: absolute;
    top: 0;
  }
  .ql-editor .ql-size-huge {
    font-size: 10rem;
  }
  .ql-font-roboto {
    font-family: 'roboto', sans-serif;
    font-weight: 400;
  }
  .ql-font-baloo {
    font-family: 'Baloo Thambi', cursive;
  }
  .ql-font span[data-label='roboto']::before {
    font-family: 'roboto';
  }
  .ql-font span[data-label='Baloo']::before {
    font-family: 'Baloo Thambi';
  }
`;
