
import './App.css'

function App() {

  return (
    <>
    {/* ============= navber starts ==================*/}
      <nav id='navber'>
        <div className="container">
          <div className="main_nav">
            <div className="navp1">
              <img src="src/assets/logo.png" alt="logo" />
            </div>
            <div className="navp2">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="navp3">
              <ul>
                <li><a href="#">Login</a></li>
                <li><a href="#">Book Scooter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    {/* ============= navber ends ==================*/}

    {/* ============= Body part starts =============*/}
    <section id='bodypart'>
      <div className="container">
        <div className="body">
          <div className="body_text">
            <h2>Fair price ride</h2>
              <img src="src/assets/ciecle.png" alt="circle" />
            <h1>Rent our <span>Scooter</span></h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. </p>
            <div className="buttons">
              <div className="btnbox">
                <ul>
                  <li><a href="#">Location</a></li>
                    <div class="line"></div>
                  <li><a href="#">Pickup Date</a></li>
                    <div class="line"></div>   
                  <li><a href="#">Kilometers</a></li>
                    <div class="line"></div>
                  <li><a href="#">Book Scooter</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="body_pic">
            <img src="src/assets/bike.png" alt="bike" />
          </div>
        </div>
      </div>
    </section>
    <div className="leaf">
      <div className="left_leaf">
        <img src="src/assets/left.png" alt="leaf" />
      </div>
      <div className="right_leaf">
        <img src="src/assets/right.png" alt="leaf" />
      </div>
    </div>
    </>
  )
}

export default App
