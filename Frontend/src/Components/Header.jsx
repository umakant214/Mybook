import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand fs-2 fw-bold" href="#">
                        My<span className='text-primary'>Book</span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav pt-2 ps-3">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/register">
                                    Register
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/create">
                                    Create
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/view">
                                    View
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
