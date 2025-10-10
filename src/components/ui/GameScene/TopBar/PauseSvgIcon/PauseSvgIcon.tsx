import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const PauseSvgIcon = (props: SvgProps) => (
  <Svg
    width={props.width || 41}
    height={props.width || 41}
    fill="none"
    viewBox="0 0 40 41"
    {...props}
  >
    <Path
      fill={props.fill || COLORS.Primary}
      d="M29.513 9.345a1.89 1.89 0 0 1 1.237 1.774v18.76c0 .792-.495 1.501-1.237 1.775a6.32 6.32 0 0 1-4.36 0 1.9 1.9 0 0 1-1.236-1.774V11.121c0-.792.495-1.501 1.236-1.776a6.32 6.32 0 0 1 4.36 0m-13.667 0a1.89 1.89 0 0 1 1.237 1.774v18.76c0 .792-.495 1.501-1.236 1.775a6.32 6.32 0 0 1-4.36 0 1.9 1.9 0 0 1-1.237-1.774V11.121c0-.792.495-1.501 1.237-1.776a6.32 6.32 0 0 1 4.36 0"
    ></Path>
  </Svg>
);

export default PauseSvgIcon;
