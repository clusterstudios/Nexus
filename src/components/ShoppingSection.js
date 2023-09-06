import React from 'react';
import carImage1 from '../images/cars/01.jpg'; // Import the actual image for car 1
import carImage2 from '../images/cars/02.jpg'; // Import the actual image for car 2
import carImage3 from '../images/cars/03.jpg'; // Import the actual image for car 2
import carImage4 from '../images/cars/04.jpg'; // Import the actual image for car 2
import carImage5 from '../images/cars/05.jpg'; // Import the actual image for car 1
import carImage6 from '../images/cars/06.jpg'; // Import the actual image for car 2
import carImage7 from '../images/cars/07.jpg'; // Import the actual image for car 2
import carImage8 from '../images/cars/08.jpg'; // Import the actual image for car 2
import carImage9 from '../images/cars/09.jpg'; // Import the actual image for car 2


function ShoppingSection() {
  return (
    <section className="shopping-section">
      <div className="vehicle-placeholder">
        <img src={carImage1} alt="Car 1" className="vehicle-image" />
        <h3>Ferrari</h3>
        <p>Features and description.</p>
        <button className="availability-btn">Check Availability</button>
      </div>
      
      <div className="vehicle-placeholder">
        <img src={carImage2} alt="Car 2" className="vehicle-image" />
        <h3>Bentley</h3>
        <p>Features and description.</p>
        <button className="availability-btn">Check Availability</button>
      </div>
      <div className="vehicle-placeholder">
        <img src={carImage3} alt="Car 3" className="vehicle-image" />
        <h3>BMW M5</h3>
        <p>Features and description.</p>
        <button className="availability-btn">Check Availability</button>
      </div>
      <div className="vehicle-placeholder">
        <img src={carImage4} alt="Car 3" className="vehicle-image" />
        <h3>Mercedes Benz C63 Black</h3>
        <p>Features and description.</p>
        <button className="availability-btn">Check Availability</button>
      </div>
      <div className="vehicle-placeholder">
        <img src={carImage5} alt="Car 2" className="vehicle-image" />
        <h3>Mercedes G-Wagon</h3>
        <p>Features and description.</p>
        <button className="availability-btn">Check Availability</button>
      </div>
      <div className="vehicle-placeholder">
        <img src={carImage6} alt="Car 3" className="vehicle-image" />
        <h3>Lamboorghini</h3>
        <p>Features and description.</p>
        <button className="availability-btn">Check Availability</button>
      </div>
      <div className="vehicle-placeholder">
        <img src={carImage7} alt="Car 3" className="vehicle-image" />
        <h3>Porsche GT3</h3>
        <p>Features and description.</p>
        <button className="availability-btn">Check Availability</button>
      </div>
      <div className="vehicle-placeholder">
        <img src={carImage8} alt="Car 3" className="vehicle-image" />
        <h3>Range Rover</h3>
        <p>Features and description.</p>
        <button className="availability-btn">Check Availability</button>
      </div>
      <div className="vehicle-placeholder">
        <img src={carImage9} alt="Car 3" className="vehicle-image" />
        <h3>Audi R8</h3>
        <p>Features and description.</p>
        <button className="availability-btn">Check Availability</button>
      </div>
      
      
      {/* Repeat for other cars */}
    </section>
  );
}

export default ShoppingSection;
