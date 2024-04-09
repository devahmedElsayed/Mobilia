import React, { Fragment } from 'react'
import '../../Componant/Herosection/Herosection.css';
import './About.css';
import coch from '../../Componant/Assets/couch.png';
import Choose from '../../Componant/Choose/Choose';
import team1 from '../../Componant/Assets/team1.jpg'
import team2 from '../../Componant/Assets/team2.jpg'
import team3 from '../../Componant/Assets/team3.jpg'
import team4 from '../../Componant/Assets/team4.jpg'
import Test from '../../Componant/Test/Test'
const About = () => {
  return (
    <Fragment>
      <div className='hero '>
        
        <div className='row herotemp '>
            <div className='col-xxl-6  col-xl-6 col-lg-6 col-md-12 col-sm-12 '>
                <h2 style={{fontSize:'60px'}}>About us</h2>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <div>
                    <button className='shop btn-warning'>Shop now</button>
                    <button className='exploar'>Exploar</button>
                </div>
            </div>
            <div className='col-xxl-6  col-xl-6 col-lg-6 col-md-12 col-sm-12 '>
                <img src={coch} alt="" />
            </div>
        </div>
        
    </div>
    <div>
          <Choose/>

    </div>
    <div className='team'>
      <h2 className='teamHead'>Our Team</h2>
      <div className='teamWork'>
      <div className='person_Team'>
        <img src={team1} alt="" />
        <h2>Lawson Arnold</h2>
        <span>CEO, Founder, Atty.</span>
        <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <a href="#">Learn More</a>
      </div>
      <div className='person_Team'>
      <img src={team2} alt="" />
        <h2>Jeremy Walker</h2>
        <span>CEO, Founder, Atty.</span>
        <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <a href="#">Learn More</a>
      </div>
      <div className='person_Team'>
      <img src={team3} alt="" />
        <h2>Patrik White</h2>
        <span>CEO, Founder, Atty.</span>
        <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <a href="#">Learn More</a>
      </div>
      <div className='person_Team'>
      <img src={team4} alt="" />
        <h2>Kathryn Ryan</h2>
        <span>CEO, Founder, Atty.</span>
        <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <a href="#">Learn More</a>
      </div>
      </div>
    </div>
    <div>
      <Test className='teest'/>
    </div>
    </Fragment>
  )
}

export default About