import React from "react";
import "./BusinessList.css";
import { Business } from "../Business/Business";

/**
 * A BusinessList component that simulates a list of single businesses
 */
export class BusinessList extends React.Component {
    render() {
    const businesses = this.props.businesses || [] ;
    return (
      <div className="BusinessList">
        {businesses.map(business => {
          return <Business business={business} key={business.id} />;
        })}
      </div>

    );
  }
}
