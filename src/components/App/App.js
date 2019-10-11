import React from "react";
import "./App.css";
import { BusinessList } from "../BusinessList/BusinessList";
import { SearchBar } from "../SearchBar/SearchBar";
import { Yelp } from "../../util/Yelp";
import { Router, Route } from "react-router-dom"

import {createBrowserHistory} from "history";
import {TargetPlaceMap} from "../Map/TargetPlaceMap";


export const history = createBrowserHistory();

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    Yelp.searchYelp(term, location, sortBy).then(businesses => {
      this.setState({ businesses: businesses });
    });
  }

  render() {

    return (
      <div className="App">
        <h1>ravenous</h1>
        <Router history={history}>

        <Route path="/" exact={true} >
        <SearchBar search={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
        </Route>
            <Route path="/target-map" exact={true} render={props=> <TargetPlaceMap {...props}
                                                                                   googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                                                                                   loadingElement={<div style={{ height: `100%` }} />}
                                                                                   containerElement={<div style={{ height: `400px` }} />}
                                                                                   mapElement={<div style={{ height: `100%` }} />}/>}/>
        </Router>
      </div>

    );
  }
}
