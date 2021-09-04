/* jscpd:ignore-start */
import { Typography } from '.';
import { muiTheme } from 'storybook-addon-material-ui';
import { theme } from '../../../theme';
import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
/* jscpd:ignore-end */

export default {
  title: 'Typography',
  component: Typography,
  // important to include theme
  decorators: [muiTheme([theme]), withKnobs],
  parameters: {
    notes: `
      
    `,
  },
};

export const BasicTypography = () => (
  <>
    <Typography variant="h1" children={text('H1 text', '1 Level Title')} />
    <Typography variant="h2" children={text('H2 text', '2 Level Title')} />
    <Typography variant="h3" children={text('H3 text', '3 Level Title')} />
    <Typography variant="h4" children={text('H4 text', '4 Level Title')} />
    <Typography variant="h5" children={text('H5 text', '5 Level Title')} />
    <Typography variant="h6" children={text('H6 text', '6 Level Title')} />
    <Typography
      variant="subtitle1"
      children={text('subtitle1 text', '1 Level subtitle')}
    />
    <Typography
      variant="subtitle2"
      children={text('subtitle2 text', '2 Level subtitle')}
    />
    <Typography
      variant="body1"
      children={text('Body1 text', '1 Level Body Text')}
    />
    <Typography
      variant="body2"
      children={text('Body2 text', '2 Level Body Text')}
    />
    <Typography
      variant="caption"
      children={text('Caption text', 'Caption text')}
    />
  </>
);
