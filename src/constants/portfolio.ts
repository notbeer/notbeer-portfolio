interface portfolioTypings {
    category: string,
    title: string,
    description: string,
    github?: string,
    demo?: string,
    npm?: string
}

const portfolio: Array<portfolioTypings> = [
    {
        category: 'ui/ux reactjs',
        title: 'MCBE Realm Hub Website',
        description: 'A website for documentations, portfolios, and etc...',
        github: 'https://github.com/MCBE-Realm-Hub/MCBE-Realm-Hub-Website',
        demo: 'https://github.com/MCBE-Realm-Hub/MCBE-Realm-Hub-Website'
    },
    {
        title: 'React Wordle Clone',
        category: 'reactjs',
        description: 'A simple wordle clone written in ReactJS.',
        github: 'https://github.com/notbeer/react-wordle-clone',
        demo: '/react-wordle-clone'
    },
    {
        title: 'Gametest API Wrapper',
        category: 'library',
        description: 'An API wrapper for Minecraft Bedrock Edition Gametest.',
        github: 'https://github.com/notbeer/gametest-api-wrapper'
    },
    {
        title: 'JSON Obfuscator',
        category: 'package',
        description: 'NPM package to obfuscate JSON files.',
        github: 'https://github.com/notbeer/JSON-Obfuscator',
        npm: 'https://www.npmjs.com/package/json-obfuscator'
    }
];

const portfolioExtendIndex: Array<number> = [0, 3];

export {
    portfolio,
    portfolioExtendIndex
};