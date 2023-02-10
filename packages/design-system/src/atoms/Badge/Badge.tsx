import React from 'react';
import styled from './Badge.module.scss';
import { BadgeProps, BadgeSize, BadgeColor, BadgePosition } from './Badge.interface';

function Badge({ info, size = BadgeSize.Medium, color = BadgeColor.Blue, position = BadgePosition.Relative, ...props }: BadgeProps) {
  
  return (
    <div
      className={ `${styled.badge} ${styled[size]} ${styled[color]} ${styled[position]}` }
      {...props}
    >
      {info}
    </div>
  );
};

export default Badge;