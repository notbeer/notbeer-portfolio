interface serviceTypings {
    title: string,
    description: string,
    icon: {
        color: string,
        name: string
    }
}

const service: Array<serviceTypings> = [
    {
        title: 'Front-end',
        description: 'I can work with the frontend of websites with multitude of languages, libraries and frameworks. I\'m able to create websites friendly to multiple devices.',
        icon: {
            color: 'var(--blue)',
            name: 'bxl-css3'
        }
    },
    {
        title: 'UI/UX',
        description: "I am able to create custom admin panels, analytics dashboards and more with beautiful UI/UX designs.",
        icon: {
            color: 'var(--red)',
            name: 'bx-command'
        }
    },
    {
        title: 'Back-end',
        description: 'I can work with the backend of websites using multitude of languages. I\'m also well versed in managing Database, API, and other backend processes.',
        icon: {
            color: 'var(--yellow)',
            name: 'bxl-javascript'
        }
    },
    {
        title: 'Discord.js',
        description: "I'm able to create Advanced Discord Bots according your preference. Being able to intregate games, moderation, beautifully draws Canvas images and much more.",
        icon: {
            color: 'var(--indigo)',
            name: 'bxl-discord'
        }
    },
    {
        title: 'Machine Learning',
        description: 'I am still very inexperienced with Machine Learning, but I\'m able to work with projects in my comfort zone for now. I\'ve been learning to use the libraries like TensorFlow and PyTorch.',
        icon: {
            color: 'var(--green)',
            name: 'bx-code-alt'
        }
    },
    {
        title: 'Consulting',
        description: "I can help you in learning, debugging or consulting with stuff that I am knowledgeable about.",
        icon: {
            color: 'var(--indigo)',
            name: 'bx-book-open'
        }
    }
];

export { service };