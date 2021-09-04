/* jscpd:ignore-start */
import { Loader } from '.';
import { muiTheme } from 'storybook-addon-material-ui';
import { theme } from '../../../theme';
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
/* jscpd:ignore-end */

export default {
  title: 'BasicCircularProgress',
  component: Loader,
  // important to include theme
  decorators: [muiTheme([theme]), withKnobs],
  parameters: {
    notes: `
      
    `,
  },
};

export const BasicCircularProgress = () => <Loader />;
