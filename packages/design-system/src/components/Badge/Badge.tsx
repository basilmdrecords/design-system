import React from 'react';
import styled from './Badge.module.scss';
import { BadgeProps, BadgeSize, BadgeColor, BadgePosition } from './Badge.interface';

function Badge({ badgeContent, size = BadgeSize.Medium, color = BadgeColor.Blue, position = BadgePosition.TopRight, children, ...props }: BadgeProps) {
  const info = badgeContent && badgeContent > 99 ? '99+' : badgeContent?.toString() || '';
  return (
    <div className={styled['badge-container']}>
      <div
        className={`${styled.badge} ${styled[color]} ${styled[size]} ${styled[position]}`}
        data-cy='badge-component'
        {...props}
      >
        {info}
      </div>
      {children}
    </div>
  );
};

export default Badge;