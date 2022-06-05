import './category.scss';

interface CategoryProps {
    title: string,
    description: string
}

export default function Category(props: CategoryProps) {
    return (
        <div className='category'>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
};