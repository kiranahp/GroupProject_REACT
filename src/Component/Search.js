import React, { Component } from "react";
import '../css/component.css'
import { Link } from 'react-router-dom';

class Search extends Component {
  render() {
    return (
      <div>
        <form onSubmit={e => { e.preventDefault(); }} className="form-search">
          <input
            type="search"
            placeholder="Search"
            name="search"
            onChange={this.props.doSearch}
          />
          <i class="fa fa-search"></i>
        </form>
      </div>
    );
  }
}

export default Search;