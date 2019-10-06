import React from 'react';
import './SearchBar.css';


/**
 * A SearchBar component that will be used in the future to search for business
 */

export class SearchBar extends React.Component{

      renderSortByOptions(){
        return Object.keys(this.sortByOptions).map((sortByOption)=>{
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} > {sortByOption} </li>;
        });
     }
     constructor(props){
          super(props);
            this.state={
              term:'',
              location:'',
              sortBy:'best_match',
          };
            this.sortByOptions={
             'Best Match':'best_match',
             'Highest Rated': 'rating',
             'Most Reviewed':'review_count',
            };
      }
    getSortByClass(sortBy){
        if (this.state.sortBy === sortBy){
            return 'active'
        }else{
            return ''
        }
    }
    handleSortByChange(sortBy){
          this.setState({sortBy: sortBy});
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