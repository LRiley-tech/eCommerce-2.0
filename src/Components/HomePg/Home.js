import React from 'react';
import Nav from '../Nav/Nav';
import HomeBody from '../HomeBody/HomeBody';
import Footer from '../Footer/Footer';

class Home extends React.Component {
    render() {
        return(
            <div>
                <Nav />
                <HomeBody />
                <Footer />
            </div>
        )
    }
}

export default Home;