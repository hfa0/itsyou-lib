import Icon from '../components/base/Icon';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Test/Icon',
    component: Icon,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        name: "Eye"
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { name: "Eye" },
};
export default meta;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
    args: {
        name: 'Upload'
    },
};
export const Secondary = {
    args: {
        label: 'Button',
    },
};
export const Large = {
    args: {
        size: 'large',
        label: 'Button',
    },
};
export const Small = {
    args: {
        size: 'small',
        label: 'Button',
    },
};
