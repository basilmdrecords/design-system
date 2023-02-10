import type { ComponentStory } from '@storybook/react';
import Badge from './Badge';


export const helperComponentStyle = {
    height: 24,
    width: 36,
    backgroundColor: 'cyan',
    borderRadius: 6,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  }

export const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const args = {
    info: '8'
}