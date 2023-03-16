import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TestPageGetParam from './TestPageGetParam';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'pages/TestPageGetParam',
    component: TestPageGetParam,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof TestPageGetParam>;

const Template: ComponentStory<typeof TestPageGetParam> = () => (
    <TestPageGetParam />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
