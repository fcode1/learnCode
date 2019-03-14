import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import ActivitiesNav from '../../components/activitesNav/activitesNav'
import Recommended from './recommended/Recommended';
import All from './all/All';
import Articles from './articles/Articles';
import Pins from './pins/Pins';

import './style.css'
class Activities extends Component {

  render () {
    return (
      <div>
        <ActivitiesNav></ActivitiesNav>
        <div className="acContent">
          <Switch>
              <Route path="/activities/recommended" component={ Recommended }></Route>
              <Route path="/activities/all" component={ All }></Route>
              <Route path="/activities/articles" component={ Articles }></Route>
              <Route path="/activities/pins" component={ Pins }></Route>
              <Redirect to="/activities/recommended"></Redirect>
          </Switch>
        </div>
      </div>
    )
  }

}

export default Activities;