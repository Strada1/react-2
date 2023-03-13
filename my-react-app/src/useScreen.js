import { useState, useEffect } from 'react';

const isDesktop = 'desktop';
const isMobile = 'mobile device';

const maxMobilScreenWidth = 1000;
const defaultValue = 0;

function useScreen() {
    const [width, useWidth] = useState(defaultValue);

    useEffect(() => {
        useWidth(window.innerWidth);
    }, [width]);

    if (width < maxMobilScreenWidth) {
        return { width, isMobile };
    }

    return { width, isDesktop };
}

export default useScreen;
