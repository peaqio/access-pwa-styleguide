import styled from 'styled-components';
import { IStyledComponents } from '../../../interfaces/styled';
import React from 'react';
import { colors } from '../../../const/colors';

export const CircleIcon = styled(
  (props: { status: string } & IStyledComponents) => {
    return <div className={props.className} />;
  },
)`
  && {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${(props) =>
      props.status === 'enabled'
        ? colors.greenTeal
        : props.status === 'disabled'
        ? colors.darkRed
        : colors.greys[14]};
  }
`;
