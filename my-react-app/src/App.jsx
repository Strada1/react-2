import React from 'react';
import useScreen from './useScreen';

function App() {
    const { width, isDesktop, isMobile } = useScreen();
    return (
        <div>
            <p>This is: {isDesktop ?? isMobile}</p>
            <p>width: {width}</p>
        </div>
    );
}

export default App;
