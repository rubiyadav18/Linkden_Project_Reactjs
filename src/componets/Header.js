import React from 'react'
function Header(){
    return (<div className="header">
    <div className="header__left">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png"
        alt="" />
      <div className="header__search p-3">
        <i className="material-icons"> </i>
        <i className="fas fa-search"> </i> 
        <input  className="m-4 p-4" type="text" placeholder="Search"/>
      </div>
    </div>
    <div className="header__right">
        <div className="headerOption">
          <i  id="home _icons" className="fas fa-home"></i>
          <h3>Home</h3>
        </div>

        <div className="headerOption">
          <i  id="network" className="fas fa-network-wired"></i>
          <h3>My Network</h3>
        </div>

        <div className="headerOption">
          <i className="fas fa-laptop-code"></i>
          <h3>Jobs</h3>
        </div>

        <div className="headerOption">
          <i className="fas fa-inbox"></i>
          <h3>Messaging</h3>
        </div>

        <div className="headerOption">
          <i className="far fa-bell"></i>
          <h3>Notifications</h3>
        </div> 
      </div>
  </div>

)
        
}
export default Header
