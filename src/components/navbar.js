import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  render(){
    return(


<nav className="navbar navbar-default">
  <div className="container-fluid">

    <div className="navbar-header">
      <Link className="navbar-brand" to="/">Brand</Link>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>

      </ul>
      <form className="navbar-form navbar-left" role="search">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search Performer, Event, City..." />
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>

      </ul>
    </div>
  </div>
</nav>

    )
  }
}