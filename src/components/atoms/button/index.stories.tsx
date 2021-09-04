import { Button } from '.';
import { muiTheme } from 'storybook-addon-material-ui';
import { theme } from '../../../theme';
import React from 'react';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import { ButtonGroup } from '@material-ui/core';

export default {
  title: 'Button',
  component: Button,
  // important to include theme
  decorators: [muiTheme([theme]), withKnobs],
  parameters: {
    notes: `
      
    `,
  },
};

const ButtonText = 'Button Text';

export const PrimaryButton = () => (
  <Button
    variant="contained"
    focusRipple={true}
    disabled={boolean('Disabled', false)}
    children={text(ButtonText, 'Primary Button')}
  />
);

export const DisabledButton = () => (
  <Button
    variant="contained"
    focusRipple={true}
    disabled={boolean('Disabled', true)}
    children={text(ButtonText, 'Disabled Button')}
  />
);

export const SmallButton = () => (
  <Button
    variant="contained"
    size="small"
    focusRipple={true}
    disabled={boolean('Disabled', false)}
    children={text(ButtonText, 'Small Button')}
  />
);

export const TextButton = () => (
  <Button
    variant="text"
    focusRipple={true}
    disabled={boolean('Disabled', false)}
    children={text(ButtonText, 'Text Button')}
  />
);
