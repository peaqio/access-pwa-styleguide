import { configure } from '@storybook/react';
import React from 'react';
import Fonts from '../src/components/font-face';
import Icons from '../src/components/icons';
import { addDecorator } from '@storybook/react';

configure(require.context('../src', true, /\.stories\.((t|j)sx?)$/), module);

addDecorator((s) => (
  <>
    <Fonts />
    <Icons />
    {s()}
  </>
));
