import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';
import { IStyledComponents } from '../../../interfaces/styled';
import React from 'react';

export const Loader = styled((props: IStyledComponents) => {
  return (
    <div className={props.className}>
      <CircularProgress
        variant="determinate"
        value={100}
        size={25}
        thickness={4}
        color="secondary"
        className="top"
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink={true}
        size={25}
        thickness={4}
        className="bottom"
      />
    </div>
  );
})`
  position: relative;
  .bottom {
    position: absolute;
    left: 0;
  }
`;
