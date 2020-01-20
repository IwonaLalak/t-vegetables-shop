import React, {Component} from 'react';
import './styles/_imports.css';
import getVegetables from "./_database/db";
import HeaderComponent from "./components/LayoutComponents/HeaderComponent";

class App extends Component {

    componentDidMount() {

        console.table(getVegetables)

    }

    render() {
        return (
            <div className="App">
                <HeaderComponent/>
            </div>
        );
    }
}

export default App;