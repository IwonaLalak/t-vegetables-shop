import React from 'react';
import {withRouter} from "react-router-dom";
import {Breadcrumb} from "react-bootstrap";
import {Home} from "../../_utilities/icons/FontAwesome";

const Breadcrumbs = ({location}) =>
    (
        <Breadcrumb>
            <Breadcrumb.Item href={'/'}>
                <Home/> HOME
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                {location.pathname.substr(1,location.pathname.length).toUpperCase()}
            </Breadcrumb.Item>
        </Breadcrumb>
    )


export default withRouter(props => <Breadcrumbs {...props} />);