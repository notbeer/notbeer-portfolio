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
        description: '7+ people'
    },
    {
        icon: 'bxs-folder-open',
        title: 'Projects',
        description: '30+ Completed'
    },
    {
        icon: 'bx-award',
        title: 'Experience',
        description: '2+ Years'
    }
];
const interests: Array<interestsTypings> = [
    {
        icon: 'bxs-music',
        title: 'Music'
    },
    {
        icon: 'bxs-basketball',
        title: 'Basketball'
    },
    {
        icon: 'bxs-pizza',
        title: 'Foodie'
    },
    {
        icon: 'bxs-trophy',
        title: 'Games'
    }
];

export {
    info,
    interests
};