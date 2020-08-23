import React, {useEffect, useState} from "react";
import Weather from "./pages/Weather/Weather";
import {Header} from "./shared/components";
import styles from "./pages/Weather/Weather.module.css";

const App = () => {
    const [showFlashScreen, setFlashScreen] = useState(true);

    useEffect(() => {
        // intentionally added delay to show flash screen for a second
        setTimeout(() => {
            setFlashScreen(false);
            document.getElementById("flash-screen").style.display = "none";
        }, 1000)
    }, []);

    if (showFlashScreen) {
        return null;
    }

    return (
        <React.Fragment>
            <Header />
            <div className={styles.content}>
                <Weather />
            </div>
        </React.Fragment>
    )
};

export default App;
