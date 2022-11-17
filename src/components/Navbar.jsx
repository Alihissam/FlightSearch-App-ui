import React, { useState } from 'react'
import MyApp from './Calendar'

const Navbar = () => {

    const [show, setShow] = useState(true)
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-white border fixed-top">
                <div class="container main-content">
                    <img src="https://flightsearchdirect.com/images/logos/flightsearchdirect.com.png"
                        alt="" className='nav-image' />
                    <button class="navbar-toggler " type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse mian-content" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li class="nav-item">
                                <a class="nav-link" href="#">Flights</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Cars</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Cruises</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Hotels</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div className="img">
                                        <img src="https://flightsearchdirect.com/images/lang_en.png" alt="" className='drop-img' />
                                    </div>
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Espanal</a></li>
                                    <li><a class="dropdown-item" href="#">English</a></li>
                                </ul>
                            </li>
                        </ul>
                        <button className='btn btn-primary' onClick={() => setShow(!show)}>Show date</button>
                        <ul className='icon'>
                            <li className='phone-icon'>
                                <img src="https://cdn-icons-png.flaticon.com/512/126/126341.png" alt="" className='phone' />
                                <p className='number'>+9710502674170</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            {!show && <MyApp />}
        </>
    )
}

export default Navbar
