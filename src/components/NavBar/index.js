import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends Component {
  _handleNavLink = e => {
    e.preventDefault();
    this.props.history.push(e.currentTarget.getAttribute('href'));
  }
  render() {
    return (
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Thinkful</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem onClick={this._handleNavLink} href="/login">Login</NavItem>
            <NavItem onClick={this._handleNavLink} href="/signup">Signup</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
