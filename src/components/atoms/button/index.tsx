import { Button as MaterialButton } from '@material-ui/core';
import styled from 'styled-components';
import { IStyledComponents } from '../../../interfaces/styled';
import React from 'react';
import { ButtonProps } from '@material-ui/core/Button';

export const Button = styled((props: ButtonProps & IStyledComponents) => {
  return <MaterialButton className={props.className} {...props} />;
})``;
