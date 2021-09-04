import { muiTheme } from 'storybook-addon-material-ui';
import { theme } from '../../../theme';
import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Icon } from '.';

export default {
  title: 'Icon',
  component: Icon,
  // important to include theme
  decorators: [muiTheme([theme]), withKnobs],
  parameters: {
    notes: `
      ##### Access PWA Styleguide Icon
    `,
  },
};

export const SimpleIcon = () => (
  <Icon
    icon={select(
      'Type',
      {
        AlertLarge: 'filtericon',
        AlertSmall: 'filtericon',
      },
      'filtericon',
    )}
  />
);
