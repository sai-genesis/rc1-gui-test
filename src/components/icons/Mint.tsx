import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as MintIcon } from './images/mint.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={MintIcon} viewBox="0 0 150 58" {...props} />;
}
