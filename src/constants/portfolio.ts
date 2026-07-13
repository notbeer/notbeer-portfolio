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
        demo: 'https://react-wordle-abir.netlify.app'
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
    },
    {
        title: 'Advanced Discord Bot',
        category: 'package library',
        description: 'An Advanced Discord Bot with cool features and games',
        github: 'https://github.com/notbeer/advanced-discord-bot'
    },
    {
        title: 'React TicTacToe',
        category: 'reactjs',
        description: 'Simple TicTacToe game made with Reactjs. Ability to play multiplayer or with an AI!',
        github: 'https://github.com/notbeer/react-tictactoe',
        demo: 'https://tictactoe-reactjs86.netlify.app'
    },
    {
        title: 'Advanced Millisecond Conversion',
        category: 'package',
        description: 'Yet another NPM package to handle millisecond conversion to human readable time format...',
        github: 'https://github.com/notbeer/advanced-ms',
        npm: 'https://www.npmjs.com/package/advanced-ms'
    },
    {
        title: 'Amtrix',
        category: 'reactjs ui/ux',
        description: 'An Anime streaming website with a beautiful design and responsivenes',
        demo: 'https://amtrix-client.vercel.app'
    },
    {
        title: 'Cheetah Article',
        category: 'reactjs',
        description: 'A fun little website I wrote about Cheetahs during highschool...',
        demo: 'https://cheetah-article.netlify.app'
    },
];

const portfolioExtendIndex: Array<number> = [0, 3, 4, 7, 8];

export {
    portfolio,
    portfolioExtendIndex
};