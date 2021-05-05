export default [
    {
        props: [
            {
                name: '<code>src</code>',
                description: 'The image url you want to display. You can use webp extension here. Do not forget to specify a fallback for browsers that do not support this format yet.',
                type: 'String',
                values: '—',
                default: '—'
            },
            {
                name: '<code>alt</code>',
                description: 'The image alternate text, if it cannot be displayed.',
                type: 'String',
                values: '—',
                default: '—'
            },
            {
                name: '<code>size</code>',
                description: 'Size of avatar in <code>px</code>.',
                type: 'Number',
                values: '—',
                default: '<code>128</code>'
            },
            {
                name: '<code>username</code>',
                description: 'A string to derive initials from.',
                type: 'String',
                values: '—',
                default: '—'
            },
            {
                name: '<code>src-fallback</code>',
                description: 'The image url you want to display if the image specified using <code>src</code> fails to load.',
                type: 'String',
                values: '—',
                default: '—'
            },
            {
                name: '<code>icon-fallback</code>',
                description: 'The icon name you want to display if the image specified using <code>src</code> fails to load or no <code>username</code> is set.',
                type: 'String',
                values: '—',
                default: '<code>account</code>'
            },
            {
                name: '<code>rounded</code>',
                description: 'Rounded image.',
                type: 'Boolean',
                values: '—',
                default: '<code>false</code>'
            },
        ],
        events: [
            {
                name: '<code>error</code>',
                description: 'Triggers when the image fails to load.',
                parameters: '<code>event: Event</code>, <code>src: String</code>'
            },
        ],
    }
]
