import React from 'react';
import {withRouter} from "react-router-dom";
import {Breadcrumb} from "react-bootstrap";

const Breadcrumbs = ({location}) =>
    (
        <Breadcrumb>
            <Breadcrumb.Item href={'/'}>
                HOME
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                {location.pathname.substr(1,location.pathname.length).toUpperCase()}
            </Breadcrumb.Item>
        </Breadcrumb>
    )


export default withRouter(props => <Breadcrumbs {...props} />);