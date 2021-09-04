/* jscpd:ignore-start */
import { Snackbar } from '.';
import { muiTheme } from 'storybook-addon-material-ui';
import { theme } from '../../../theme';
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Icon } from '../access-icon';
/* jscpd:ignore-end */

export default {
  title: 'Snackbar',
  component: Snackbar,
  // important to include theme
  decorators: [muiTheme([theme]), withKnobs],
  parameters: {
    notes: `
      
    `,
  },
};

export const BasicSnackbar = () => (
  <Snackbar
    open={true}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    autoHideDuration={6000}
    message={
      <React.Fragment>
        <div className="severity">
          <Icon icon="exclamation-1" />
        </div>
        Please check your internet connection
      </React.Fragment>
    }
  />
);
