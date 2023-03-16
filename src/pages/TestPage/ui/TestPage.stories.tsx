import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TestPage from './TestPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'pages/TestPage',
    component: TestPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof TestPage>;

const Template: ComponentStory<typeof TestPage> = () => <TestPage />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
