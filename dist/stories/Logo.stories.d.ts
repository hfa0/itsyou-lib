import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ size, href }: {
        size?: number;
        href?: string;
    }) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Small: Story;
