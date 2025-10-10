import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils/scaling';

const CustomBackArrowSvg = (props: SvgProps) => (
  <Svg
    width={props.width || wp(40)}
    height={props.width || hp(41)}
    fill="none"
    viewBox="0 0 40 41"
    {...props}
  >
    <Path
      fill={props.fill || COLORS.Primary}
      d="m14.937 10.836 2.351 2.422-5.45 5.56 22.675.023-.003 3.417-22.613-.023 5.358 5.518-2.362 2.41-9.406-9.687z"
    />
  </Svg>
);

export default CustomBackArrowSvg;
