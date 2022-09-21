import "./portfolio.scss"

export default function portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1> Fitness Goals</h1>
      <ul>
        <li> Weekly schedule </li>
        <li> Work and fitness </li>
        <li> Fall workout outfits</li>
        <li> Yoga </li>
        <li> Pilates </li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/databaee.png" alt=""/>
          <h3>Weekly schedule</h3>
        </div>
        <div className="item">
          <img src="assets/readme.png" alt=""/>
          <h3>Work and fitness</h3>
        </div>
        <div className="item">
          <img src="assets/weatherdash.png" alt=""/>
          <h3>Fall workout outfits</h3>
        </div>
        <div className="item">
          <img src="assets/workdaysched.png" alt=""/>
          <h3>Yoga</h3>
        </div>
        <div className="item">
          <img src="assets/recipegen.png" alt=""/>
          <h3>Pilates</h3>
        </div>
      </div>
    </div>
  )
}
