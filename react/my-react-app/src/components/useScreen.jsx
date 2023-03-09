import { useEffect, useState } from "react";

	
const useScreen = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize(event){
            setWidth(event.target.innerWidth)
        }
        window.addEventListener('resize', handleResize);
    }, [width])


    return{
        width,
        isMobile: width <= 500,
        isDesktop: width >= 501,
        
    }
}
export default useScreen