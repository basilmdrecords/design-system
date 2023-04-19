import type { ComponentStory } from '@storybook/react';
import H3 from './H3';

export const Template: ComponentStory<typeof H3> = (args) => <H3 {...args} />;

export const args = {
    children: 'Heading Three'
}