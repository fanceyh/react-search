import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as servicesAction from "../actions/servicesAction";
import Services from "../components/servicelist/services";
import  {selectDate}  from "../actions/dateAction";
class App extends Component {
    render(){
        const {action,services ,errorMessage ,date ,selectDate} = this.props;
        return (<div >
                    <Services action = {action} date={date} selectDate = {selectDate} services = {services} errorMessage = {errorMessage}/>
                </div>)
    }
}

const mapStateToProps = (state)=> ({
    services:state.services,
    date:state.date.date,
    errorMessage:state.errorMessage
})
const mapDispatchToProps = (dispatch)=> ({
    action:bindActionCreators(servicesAction.loadServices, dispatch),
    selectDate:function(date, dateString){
       // console.log(dateString);
        bindActionCreators(selectDate, dispatch)(dateString);
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(App);