import {useEffect, useState} from "react";

const useFlashScreen = () => {
    const [showFlashScreen, setFlashScreen] = useState(true);

    useEffect(() => {
        // intentionally added delay to show flash screen for a second
        setTimeout(() => {
            setFlashScreen(false);
            document.getElementById("flash-screen").style.display = "none";
        }, 1000)
    }, []);

    return showFlashScreen;
}

export default useFlashScreen;
