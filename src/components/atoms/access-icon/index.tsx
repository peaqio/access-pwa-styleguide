import { IStyledComponents } from '../../../interfaces/styled';
import styled from 'styled-components';
import React from 'react';
import { colors } from '../../../const/colors';

export const Icon = styled((props: IStyledComponents & { icon: string }) => (
  <i className={props.className + ' icon-' + props.icon} />
))`
  color: ${colors.white};
`;
