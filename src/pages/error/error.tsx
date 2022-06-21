import './error.scss';
import '../../scss/glitch.scss';

export default function Error() {
    return (
        <section id='ErrorSection'>
            <div className='text-content'>
                <div className="glitch" data-text='404'>404</div>
                <h1>Oops... Page couldn't be found!</h1>
                <p>The page you are looking for may have been removed or does not exist.</p>
            </div>
        </section>
    )
};