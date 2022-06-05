import { mergeArray } from '../utils/utils';

export interface contentTyping {
    content: string,
    skill: string
}

const frontend: Array<contentTyping> = [
    {
        content: 'HTML',
        skill: 'Experienced'
    },
    {
        content: 'Pug',
        skill: 'Experienced'
    },
    {
        content: 'HTML5 Boilerplate',
        skill: 'Experienced'
    },
    {
        content: 'CSS',
        skill: 'Intermediate'
    },
    {
        content: 'NPM',
        skill: 'Experienced'
    },
    {
        content: 'NodeJS',
        skill: 'Experienced'
    },
    {
        content: 'Javascript',
        skill: 'Experienced'
    },
    {
        content: 'Typescript',
        skill: 'Experienced'
    }
];
const backend: Array<contentTyping> = [
    {
        content: 'NodeJS',
        skill: 'Experienced'
    },
    {
        content: 'Javascript',
        skill: 'Experienced'
    },
    {
        content: 'Typescript',
        skill: 'Experienced'
    },
    {
        content: 'Python',
        skill: 'Experienced'
    },
    {
        content: 'PHP',
        skill: 'Intermediate'
    },
    {
        content: 'Golang',
        skill: 'Experienced'
    },
    {
        content: 'MongoDB',
        skill: 'Experienced'
    },
    {
        content: 'MySQL',
        skill: 'Beginner'
    }
];
const librariesNframeworks: Array<contentTyping> = [
    {
        content: 'SCSS',
        skill: 'Intermediate'
    },
    {
        content: 'Bootstrap',
        skill: 'Experienced'
    },
    {
        content: 'JQuery',
        skill: 'Intermediate'
    },
    {
        content: 'Three.js',
        skill: 'Intermediate'
    },
    {
        content: 'React',
        skill: 'Experienced'
    },
    {
        content: 'Express',
        skill: 'Experienced'
    },
    {
        content: 'Vue',
        skill: 'Intermediate'
    },
    {
        content: 'Discord.js',
        skill: 'Experienced'
    },
    {
        content: 'PyTorch',
        skill: 'Intermediate'
    },
    {
        content: 'TensorFlow',
        skill: 'Intermediate'
    }
];
const softwareNtools: Array<contentTyping> = [
    {
        content: 'Git',
        skill: 'Intermediate'
    },
    {
        content: 'Github',
        skill: 'Experienced'
    },
    {
        content: 'Netlify',
        skill: 'Experienced'
    },
    {
        content: 'Heroku',
        skill: 'Experienced'
    },
    {
        content: 'Postman',
        skill: 'Experienced'
    },
    {
        content: 'Bash',
        skill: 'Intermediate'
    },
    {
        content: 'Shell',
        skill: 'Intermediate'
    },
    {
        content: 'RegExp',
        skill: 'Experienced'
    },
    {
        content: 'Visual Studio Code',
        skill: 'Experienced'
    },
    {
        content: 'Visual Studio',
        skill: 'Beginner'
    }
];

const allSkills = mergeArray(
    frontend.map(v => v.content),
    backend.map(v => v.content),
    librariesNframeworks.map(v => v.content),
    softwareNtools.map(v => v.content)
);

export {
    frontend,
    backend,
    librariesNframeworks,
    softwareNtools,
    allSkills
};
