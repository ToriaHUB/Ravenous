import React from 'react';
import './SearchBar.css';
 const sortByOptions={
     'Best Match':'best_match',
     'Highest Rated': 'rating',
     'Most Reviewed':'review_count',
 };

/**
 * A SearchBar component that will be used in the future to search for business
 */

export class SearchBar extends React.Component{
      renderSortByOptions(){
        return Object.keys(sortByOptions).map((sortByOption)=>{
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}> {sortByOption} </li>;
        });
     }


     render(){
          return(
              <div className="SearchBar">
                  <div className="SearchBar-sort-options">
                      <ul>
                          {this.renderSortByOptions()}
                      </ul>
                  </div>
                  <div className="SearchBar-fields">
                      <input placeholder="Search Businesses"/>
                      <input placeholder="Where?"/>
                  </div>
                  <div className="SearchBar-submit">
                      <a href='/'>Let's Go</a>
                  </div>
              </div>
          );
     }
 }