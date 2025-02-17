import 'bootswatch/dist/slate/bootstrap.min.css';
import React from 'react';
import logo from '../images/logo.png';
import { Router, Route, Link } from 'react-router-dom';
import { useChessPlayerState} from "../ServerHooks"

export function Header() {
  const {gameState,thisUser,makeMove,queueForGame} = useChessPlayerState(console.log);

  return (
    <nav className="navbar navbar-inverse p-3">
      <div className="container-fluid header-container">
        <div className="navbar-header">
          <a className="navbar-brand site-logo" href="#">
            <img src={logo} className="img-responsive"></img>
          </a>
        </div>

        <ul className="nav navbar-nav navbar-right d-inline-block">
          <li className="navbar-text navbar-right d-inline-block">
            {thisUser?.username}   |
          </li>

          <li className="active d-inline-block">
            <a className="btn btn-outline-light btn-logout d-inline-block" href="/users/logout">Logout</a>
          </li>

        </ul>
      </div>
    </nav>

  );
}
