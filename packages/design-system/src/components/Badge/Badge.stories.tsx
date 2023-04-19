import type { ComponentStory } from '@storybook/react';
import Badge from './Badge';


export const badgeChildComponent = {
  height: 24,
  width: 36,
  backgroundColor: 'cyan',
  borderRadius: 6,
}

export const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args} id='test-badge'>
    <div style={badgeChildComponent} />
  </Badge>
);

export const args = {
  badgeContent: '8'
}