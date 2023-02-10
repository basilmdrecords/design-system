import type { ComponentStory } from '@storybook/react';
import Button from './Button';

export const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const args = {
    children: 'Click Me!',
    type: 'primary'
}