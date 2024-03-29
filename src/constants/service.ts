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
        title: 'Back-end',
        description: 'I can work with the backend of websites using multitude of languages. I\'m also well versed in managing Database, API, and other backend processes.',
        icon: {
            color: 'var(--yellow)',
            name: 'bxl-javascript'
        }
    },
    {
        title: 'Machine Learning',
        description: 'I am still very inexperienced with Machine Learning, but I\'m able to work with projects in my comfort zone for now. I\'ve been learning to use the libraries like TensorFlow and PyTorch.',
        icon: {
            color: 'var(--green)',
            name: 'bx-code-alt'
        }
    }
];

export { service };