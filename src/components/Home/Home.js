import React, {Component} from 'react';
import NavHeader from './NavHeader';
import Topcharts from './Topcharts';
import Topinfo from './Topinfo';
import SocialMediaTrafic from './SMTrafic';
import MostVisitedPages from './MVP';
import Invoices from './invoices';
import Feeds from './feeds';
import Footer from './footer';


class Home extends Component {
  render() {
    return(
      <div id='Home'>
        <NavHeader />
        <div className='page-body'>
            <div className='container-xl'>
                <div className='row row-deck row-cards'>
                <Topcharts />
                </div>
            
        <Topinfo />
        <Feeds />
        <SocialMediaTrafic />
        <MostVisitedPages />
        <Invoices />
            </div>
        </div> 
        
        <Footer />
      </div> //End of Home div
    )
  }
}



export default Home;

