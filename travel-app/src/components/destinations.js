import React from 'react'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'



const destinations = () => {
    return (
        <>
          <section className="grid">

              <h3>we are currently in 38 countries!</h3>


              <div className="grid-items">
                  <div>
                      <img src={image2}  alt="" />
                      <h4>Fly to Aruba</h4>
                      <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." </p>
                  </div>
              </div>
          </section>

                  <div>
                      <img src ={image3} alt="" />
                      <h4>Experience Maldives</h4>
                      <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." </p>
                  </div>


                  <div>
                      <img src ={image4} alt="" />
                      <h4>Savour Hawaii</h4>
                      <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." </p>
                  </div>




        </>
    )
}

export default destinations
