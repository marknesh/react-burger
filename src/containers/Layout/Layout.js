import React from 'react';
import Aux from '../Aux.js'

import classes from './Layout.css'

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'

import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import { Component } from 'react';

class Layout extends Component {

    state={

        showSideDrawer:false
    }



    sideDrawerHandler=()=>{
        this.setState({showSideDrawer:false})
    }


    sideDrawerToggleHandler=()=>{

        this.setState((prevState) => { return {showSideDrawer:!prevState.showSideDrawer}})
    }
    render(){

        return(
            <Aux>
            <SideDrawer open={this.state.showSideDrawer}  closed={this.sideDrawerHandler}/>
    <Toolbar drawertoggleclicked={this.sideDrawerToggleHandler} />
    <main className={classes.Content}>{this.props.children}</main>
    </Aux>

        )
    }
 
}

export default Layout