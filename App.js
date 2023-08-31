import './App.css';
import TrendingOffers from './TreandingOffers';

function App() {
  return (
    
      <div>
            <nav>
            <div id="head">
                  <img id="bus" src="https://www.redbus.in/bushire/static/webv2/home/logo-rb.svg" alt=""></img>
                  <div id="busticket">
                        
                        <div id="ticket">BUS TICKETS</div>
                  </div>
                  <div id="bikeride">
                        
                        <div id="cabrental">  <b>  rYde</b></div>
                  </div>
                  <div id="trainride">
                        
                        <div id="trainticket">redRail</div>
                  </div>
                  <div id="help"> <span>Manage Booking</span>
                  <svg id="don" xmlns="https://www.redbus.in/bushire/static/mwebv2/header/ic-user-not-logged-in.svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-1 h-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /> </svg>
                  </div>
                  <div id="account"><svg id="person" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /> </svg>
                  <svg id="doen" xmlns="https://www.redbus.in/bushire/static/mwebv2/header/ic-user-not-logged-in.svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        
                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /> </svg>

                  </div>
                        
            </div>
            </nav>
          
           {/* {<TrendingOffers></TrendingOffers>} */}
    </div>


  );
}

export default App;
