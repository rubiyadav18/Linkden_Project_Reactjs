import React  from 'react';
import Profile from './Profiles';
import Skills from './Skills';
import Header from './Header'
import Footer  from './Footer'
import Education from './Education'
import Experience from './Experience'

function Home() {
  return (
    <div>
    <Header/>


  <div className="grid-container">


<div className="grid-item"></div>
<div className="center"> <Profile/> </div>
<div className="grid-item"> </div> 


<div className="grid-item"></div>
<div className="center"> <Skills/> </div>
<div className="grid-item"></div>  



<div className="grid-item"> </div>
<div className="center "> <Education/></div>
<div className="grid-item"></div> 

<div className="grid-item"> </div>
<div className="center "> <Experience/> </div>
<div className="grid-item"></div> 


</div>

<Footer/>

</div>  
    

  );
}
export default Home