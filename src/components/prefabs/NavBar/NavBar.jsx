/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendSso } from '../../screens/LoginScreen/actions';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  componentDidMount() {
    const { sendSso } = this.props;
    sendSso();
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">
                Vibbra Store
              </Link>
              <a
                className="navbar-brand pull-right hidden-sm hidden-md hidden-lg"
                href="#open-cart"
              >
                {' '}
                <i className="ion-bag"></i> 7{' '}
              </a>
            </div>

            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="#new/deal">Criar Negociação</a>
                </li>
                <li>
                  <a href="#my/deals">Minhas Negociações</a>
                </li>
                <li>
                  <a href="#my/invites">Meus Convites</a>
                </li>
              </ul>
            </div>
            {/* <!--/.nav-collapse --> */}

            <div className="search hidden-xs" data-style="hidden">
              <div className="input">
                <button type="button">
                  <i className="ion-ios-search"></i>
                </button>

                <input type="text" name="search" placeholder="Type here..." />
              </div>
            </div>
          </div>
          {/* <!--/.container-fluid --> */}
        </nav>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.login.data,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      sendSso,
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
