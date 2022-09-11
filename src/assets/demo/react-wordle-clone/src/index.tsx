import './app.scss';

import Toaster from './components/toaster/toaster';
import Board from './components/board/board';
import Keyboard from './components/keyboard/keyboard';

export default function ReactWordleClone() {
    return (
        <div className='wrapper'>
            <div id="Game">
                <Toaster/>
                <Board/>
                <Keyboard/>
            </div>
        </div>
    );
};