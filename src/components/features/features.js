import React from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../../actions'
import Feature from "./feature";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import withServiceContext from "../hoc/withServiceContext";
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';


 const Features= (state) =>{
     const {data} = state;
    return (
        <section className="features">
            <div className="container">
                <div className="row text-center column">
                    <h2 className="white">OUR FEATURES</h2>
                    <p className="yellow-line">Little things make us best in town</p>
                </div>
                <div className="row justify">
                    {
                        data.map((data)=>{
                            return(
                                <React.Fragment key={data.id}> <Feature data={data}/></React.Fragment>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

class FeaturesContainer extends React.Component {
    componentDidMount() {
        this.props.fetchData()
    };

    render() {

        const {data, loading, error} = this.props;
        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <ErrorIndicator/>
        }
        return (
            <section className="features">
                <StyleRoot className="container">
                    <div className="row text-center column">
                        <h2 className="white">OUR FEATURES</h2>
                        <p className="yellow-line">Little things make us best in town</p>
                    </div>
                    <Coverflow
                        autoplay={false}
                        displayQuantityOfSide={2}
                        navigation
                        infiniteScroll
                        enableHeading
                        media={{
                            '@media (max-width: 900px)': {
                                width: '100%',
                                height: '300px'
                            },
                            '@media (min-width: 900px)': {
                                width: '100%',
                                height: '650px'
                            }
                        }}
                    >
                        {
                            data.map((data) => {
                                return (
                                    <React.Fragment key={data.id}> <Feature data={data}/></React.Fragment>
                                )
                            })
                        }
                    </Coverflow>
                </StyleRoot>
            </section>
        )
    }
}
const mapStateToProps = ({DataList: {data, loading, error}}) => {
    return {data, loading, error}
};

const mapDispatchToProps = (dispatch, {Service}) => {
    return {
        fetchData: fetchData(Service, dispatch)
    }
};
export default withServiceContext()(
    connect(mapStateToProps, mapDispatchToProps)(FeaturesContainer));
