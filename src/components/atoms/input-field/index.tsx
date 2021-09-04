import { TextField as MaterialTextField } from '@material-ui/core';
import styled from 'styled-components';

export const TextField = styled(MaterialTextField)`
  .Mui-error ::placeholder {
    opacity: 1 !important;
  }
`;
