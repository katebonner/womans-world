import "./topbar.scss"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className= "wrapper">
        <div className="left">
          <a href="#intro" className="logo">Womens World</a>
      <ul>
          <li>
              <a href="#intro">Home</a>
          </li>
          <li>
              <a href="#portfolio"> Mental Health</a>
          </li>
          <li>
              <a href="#works"> Cardio and Strength</a>
          </li>
          <li>
              <a href="#contact"> Yoga</a>
          </li>
      </ul>
          <div className="itemContainer">

          </div>
        </div>
        <h1> </h1>
        <div className="right"></div>
  
      </div>
    </div>
  )
}
