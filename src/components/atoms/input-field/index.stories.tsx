/* jscpd:ignore-start */
import { TextField } from '.';
import { muiTheme } from 'storybook-addon-material-ui';
import { theme } from '../../../theme';
import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { InputBase } from '@material-ui/core';
/* jscpd:ignore-end */

export default {
  title: 'TextField',
  component: TextField,
  // important to include theme
  decorators: [muiTheme([theme]), withKnobs],
  parameters: {
    notes: `
      
    `,
  },
};

export const BasicTextField = () => (
  <>
    <TextField label="Email address" type="email" />
  </>
);
export const FilledTextField = () => (
  <>
    <TextField label="Email address" type="email" variant="filled" />
  </>
);
