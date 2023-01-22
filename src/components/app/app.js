import AppHeader from "../appHeader/appHeader";
import RandomChar from "../randomChar/randomChar";
import CharList from "../сharList/charList";
import CharInfo from "../charInfo/charInfo";

import './app.scss';

import vision from "../../recources/img/vision.png";

const App = () => {
    return (
        <div className="app">
            <AppHeader/>

            <main>
                <RandomChar/>

                <div className="char__content">
                    <CharList/>
                    <CharInfo/>

                    <img className="bg-decoration" src={vision} alt="vision"/>
                </div>
            </main>
        </div>
    );
};

export default App;