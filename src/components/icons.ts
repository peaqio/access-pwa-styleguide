import { createGlobalStyle } from 'styled-components';
const fontDirectory = '/static/fonts/';

export default createGlobalStyle`
@font-face {
  font-family: 'fontello';
  src: url('${fontDirectory}fontello.eot?30351331');
  src: url('${fontDirectory}fontello.eot?30351331#iefix') format('embedded-opentype'),
       url('${fontDirectory}fontello.woff2?30351331') format('woff2'),
       url('${fontDirectory}fontello.woff?30351331') format('woff'),
       url('${fontDirectory}fontello.ttf?30351331') format('truetype'),
       url('${fontDirectory}fontello.svg?30351331#fontello') format('svg');
  font-weight: normal;
  font-style: normal;
}
/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */
/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */
/*
@media screen and (-webkit-min-device-pixel-ratio:0) {
  @font-face {
    font-family: 'fontello';
    src: url('${fontDirectory}fontello.svg?30351331#fontello') format('svg');
  }
}
*/
 
 [class^="icon-"]:before, [class*=" icon-"]:before {
  font-family: "fontello";
  font-style: normal;
  font-weight: normal;
  speak: none;
 
  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: .2em;
  text-align: center;
  /* opacity: .8; */
 
  /* For safety - reset parent styles, that can break glyph codes*/
  font-variant: normal;
  text-transform: none;
 
  /* fix buttons height, for twitter bootstrap */
  line-height: 1em;
 
  /* Animation center compensation - margins should be symmetric */
  /* remove if not needed */
  margin-left: .2em;
 
  /* you can be more comfortable with increased icons size */
  /* font-size: 120%; */
 
  /* Font smoothing. That was taken from TWBS */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  /* Uncomment for 3D effect */
  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
}

.icon-checkbox-icon:before { content: '\ue800'; } /* '' */
.icon-close-icon:before { content: '\ue801'; } /* '' */
.icon-copy-icon:before { content: '\ue802'; } /* '' */
.icon-customers-icon:before { content: '\ue803'; } /* '' */
.icon-delete-icon:before { content: '\ue804'; } /* '' */
.icon-drop-down-icon:before { content: '\ue805'; } /* '' */
.icon-edit-icon:before { content: '\ue806'; } /* '' */
.icon-exclamation-icon:before { content: '\ue807'; } /* '' */
.icon-filter-icon:before { content: '\ue808'; } /* '' */
.icon-home-icon:before { content: '\ue809'; } /* '' */
.icon-device-icon:before { content: '\ue80a'; } /* '' */
.icon-help-icon:before { content: '\ue80b'; } /* '' */
.icon-key-icon:before { content: '\ue80c'; } /* '' */
.icon-plus-icon:before { content: '\ue80d'; } /* '' */
.icon-search-icon:before { content: '\ue80e'; } /* '' */
.icon-see-eye-icon:before { content: '\ue80f'; } /* '' */
.icon-user-icon:before { content: '\ue810'; } /* '' */
`;
