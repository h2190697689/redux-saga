import React, { Component } from "react";

class Children extends Component{
    constructor(props){
        super(props);
        this.state = {
            num: 1
        }
    }

    static getDerivedStateFromProps(props,state){
        // console.log("getDeriveStateFromProps", state);
        return {
            ...props,
            ...state
        };
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        // console.log("getSnapshotBeforeUpdate", prevState);
        return {}
    }

    componentDidUpdate(prevProps,prevState){
        // console.log("componentDidUpdate", prevState);
    }

    componentDidMount(){

    }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    changeNum(){
        // console.log("jfkdsjfkldjskfljdlasf")
        this.setState((state,props)=>{
            return {
                num: state.num + 1
            }
        })
    };


    render(){
        const { num } = this.state;
        const {age} = this.props;
        // console.log("render",this.state);
        return(
            <div className="child-warp" onClick={this.changeNum.bind(this)}>{num}{age}</div>
        )
    }

}

export default Children
