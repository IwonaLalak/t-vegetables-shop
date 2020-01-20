import React, {Component} from 'react';
import './styles/_imports.css';
import getVegetables from "./_database/db";
import HeaderComponent from "./components/LayoutComponents/HeaderComponent";
import WrapperComponent from "./components/LayoutComponents/WrapperComponent";
import FooterComponent from "./components/LayoutComponents/FooterComponent";

class App extends Component {

    componentDidMount() {

        console.table(getVegetables)

    }

    render() {
        return (
            <div className="App">
                <HeaderComponent/>
                <WrapperComponent>

                    <div>
                        aaaa
                    </div>
                </WrapperComponent>
                <FooterComponent/>
            </div>
        );
    }
}

export default App;