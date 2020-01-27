import React, {Component} from 'react';
import './__styles/_imports.css';
import HeaderComponent from "./shared/LayoutComponents/HeaderComponent";
import WrapperComponent from "./shared/LayoutComponents/WrapperComponent";
import FooterComponent from "./shared/LayoutComponents/FooterComponent";
import HomeView from "./views/HomeView/HomeView";
import BasketView from "./views/BasketView/BasketView";
import ManageView from "./views/ManageView/ManageView";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

class App extends Component {

    componentDidMount() {

    }



    render() {
        return (
            <div className="App">
                <Router>
                    <HeaderComponent/>
                    <WrapperComponent>
                        <Switch>
                            <Route exact path={'/'} render={(props) => <HomeView {...props} />}/>
                            <Route exact path={'/basket'} render={(props) => <BasketView {...props} />}/>
                            <Route exact path={'/manage'} render={(props) => <ManageView {...props} />}/>
                            <Redirect to={'/'}/>
                        </Switch>
                    </WrapperComponent>
                    <FooterComponent/>
                </Router>
            </div>
        );
    }
}

export default App;