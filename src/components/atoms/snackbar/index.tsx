import { Snackbar as MaterialSnackbar } from '@material-ui/core';
import styled from 'styled-components';
import { Icon } from '../access-icon';
import { colors } from '../../../const/colors';
import { theme } from '../../../theme';

export const Snackbar = styled(MaterialSnackbar)`
  ${Icon} {
    font-size: 20px;
  }
  .severity {
    width: 40px;
    height: 50px;
    border-radius: 15px;
    background-color: ${colors.errorRed};
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(3.75)}px;
  }
`;
