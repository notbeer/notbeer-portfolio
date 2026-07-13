interface infoTypings {
    icon: string,
    title: string,
    description: string
}
interface interestsTypings {
    icon: string,
    title: string
}

const info: Array<infoTypings> = [
    {
        icon: 'bxs-user',
        title: 'Clients',
        description: '13+ individuals'
    },
    {
        icon: 'bxs-folder-open',
        title: 'Projects',
        description: '30+ Completed'
    },
    {
        icon: 'bx-award',
        title: 'Experience',
        description: '5+ Years'
    }
];
const interests: Array<interestsTypings> = [
    {
        icon: 'bxs-music',
        title: 'Music'
    },
    {
        icon: 'bx-football',
        title: 'Soccer'
    },
    {
        icon: 'bxs-pizza',
        title: 'Foodie'
    }
];

export {
    info,
    interests
};