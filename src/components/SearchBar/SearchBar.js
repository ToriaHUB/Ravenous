import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component{

      renderSortByOptions(){
        return Object.keys(this.sortByOptions).map((sortByOption)=>{
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)}
                       onClick={this.handleSortByChange.bind(this,sortByOptionValue)}> {sortByOption} </li>;
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
            this.handleTermChange = this.handleTermChange.bind(this);
            this.handleLocationChange = this.handleLocationChange.bind(this);
            this.handleSearch = this.handleSearch.bind(this);
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
    handleTermChange(event){
this.setState({
    term: event.target.value
})
    }
    handleLocationChange(event){
     this.setState({
    location: event.target.value
     })
    }
    handleSearch(event){
          event.preventDefault();
          this.props.search(this.state.term,this.state.location,this.state.sortBy);
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
                      <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                      <input placeholder="Where?" onChange={this.handleLocationChange}/>
                  </div>
                  <div className="SearchBar-submit">
                      <a href='/' onClick={this.handleSearch}>Let's Go</a>
                  </div>
              </div>
          );
     }
 }