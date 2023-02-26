import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/images/Amazon.svg';
import main from '../assets/images/dev.svg';

import Wrapper from '../assets/wrappers/Homepage';

const Homepage = () => {
    return(
        <Wrapper>
        <nav>
            <img alt="Site logo" src={logo} />
        </nav>
        <div>
            <h1>Homepage</h1>
            <Link to='/products'>GO TO OUR PRODUCTS</Link>
            <img alt="My main" src={main} />
        </div>
        </Wrapper>
    )
}

export default Homepage;