import type { ComponentStory } from '@storybook/react';
import Tooltip from './Tooltip';
import Button from '../Button/Button';

const ButtonC = () => <Button>Button 1</Button>

export const Template: ComponentStory<typeof Tooltip> = (args) => (
    <div style={{width: 1000}}>
        <ButtonC />
        <Tooltip {...args} />
        <ButtonC />
    </div>
);

export const args = {
    children: (
        <Button>Button with tooltip</Button>
    ),
    info: 'this is tooltip of the button has a long text in it',
}