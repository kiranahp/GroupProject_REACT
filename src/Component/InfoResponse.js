import React, { Component } from 'react';
import '../css/component.css';
import { Link } from 'react-router-dom';
import Search from './Search';

class InfoResponse extends Component {
  render() {
    return (
            <div class="boxResp">
                <h1 class="ribbon">{this.props.konteks.kota} {this.props.konteks.pesan} {this.props.konteks.mood} {this.props.konteks.cuaca}</h1>
                <h2 className="mt-4"> {this.props.konteks.pesan2} {this.props.konteks.kota} {this.props.konteks.mood}</h2>
            <Search doSearch={this.props.doSearch} keyword={this.props.keyword}/>
            </div>
    );
  }
}

export default InfoResponse;