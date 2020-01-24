import React from 'react';
import {Image, Spin} from "../../../../_utilities/icons/FontAwesome";

class ImageField extends React.Component {

    state = {
        loading: true,
        error: false,
        hideImg:false,
        prevUrl: this.props.url,
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (!prevState.loading && prevProps.url !== prevState.prevUrl) {
            this.setState({loading: true, error: false,hideImg:false});
        }
    }

    /*static getDerivedStateFromProps(props, state) {

    console.log('derived ', props, state)
        if (props.url !== state.prevUrl) {
            console.log('different')
            return{
                prevUrl: props.url,
                loading:true
            }
        }
        return null
    }*/

    disableLoading = () => {
        this.setState({
            prevUrl: this.props.url
        })
        this.setState({loading: false, error: false,hideImg:false});
    }

    onError = () => {
        this.setState({loading: false, error: true, hideImg:true})
    }

    render() {
        let {url} = this.props;
        let {loading, error, hideImg} = this.state;

        return (<div id={'ImageFormContainer'}>

            {
                url ?
                    <>
                        {
                            error ?
                                <div id={'error-image'}><Image/>
                                    <div>bad path</div>
                                </div>
                                :

                                loading &&
                                <div id={'loading'}><Spin/>
                                    <div>loading...</div>
                                </div>
                        }
                        {
                            !hideImg &&
                            <img onLoad={this.disableLoading} onError={this.onError} src={url} alt={'Vegetable image'}/>
                        }
                    </>
                    :
                    <div id={'no-image'}><Image/>
                        <div>no image</div>
                    </div>
            }
        </div>)
    }
}

export default ImageField;