import React, {Fragment} from "react";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import Children from "./children";
import * as Actions from "./store/actions";
import store from "./store/index";
import "./index.less";

class App extends React.Component{
     constructor(props){
         super(props);
         this.state = {
            age: "23"
         }
     }

    changeAge=()=>{
         this.setState({
             age: 'angetbam'
         })
    };

    changeName=()=>{
        // this.props.getName(["大门"])
        const {dispatch} = this.props;
        console.log(this.props);
        bindActionCreators(Actions,this.props.dispatch).getName(["大门"])
        // dispatch(Actions.getName(["我是隐形"]))
    }

    startSaga=()=>{
        const {dispatch} = this.props;
        dispatch(Actions.getOk())
    }

    getError=()=>{
        const {dispatch} = this.props;
        dispatch(Actions.getError());
    }

     render(){
         return(
            <Fragment>
                <h1 onClick={this.changeAge}>react hello {this.props.appName}</h1>
                <p onClick={this.changeName}>改变名称</p>
                <Children age={this.state.age}/>
                <div onClick={this.startSaga}>sagas</div>
                <div onClick={this.getError}>Error</div>
            </Fragment>
         )
     }
}

const mapDispatchToProps = (dispatch)=>{
    console.log(bindActionCreators(Actions,dispatch.getName))
    return bindActionCreators(Actions,dispatch)
}

const wrappedApp = connect((state)=>{
    // console.log("*****",state);
    return {
        appName: state.name
    }
}
)(App)
export default wrappedApp
