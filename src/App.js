import React from "react";
import Weather from "./pages/Weather/Weather";
import {Header} from "./shared/components";
import styles from "./pages/Weather/Weather.module.css";
import useFlashScreen from "./useFlashScreen";

const App = () => {
    const showFlashScreen = useFlashScreen();

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
