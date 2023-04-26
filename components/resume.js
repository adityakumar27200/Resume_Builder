export default function Resume() {
  return (
    <>
      <div className="container">
        <div className="resumeContainer">
          <div className="topCard">
            <h1 className="name">Nischal Gupta</h1>
            <h1 className="role">Developer</h1>
            <p className="brief">
              Transforming complex problems into elegant software solutions,
              powered by cutting-edge technology and unparalleled creativity
            </p>
          </div>
          <div className="bottomCard">
            <div className="leftCard">

              <div className="contacts">
                <h1>Contacts</h1>
                <div className="singleContact">
                  <img src="favicon.ico"  width="25" height="25"></img>
                  <p>Favicon.Icon</p>
                </div>
              </div>

              <div className="skills">
                <h1>Skills</h1>
                <div className="singleSkills">
                  <h2>skills :</h2>
                  <p>Favicon.Icon</p>
                </div>
              </div>


            </div>
            <div className="rightCard">
              <div width='100%'>
                <h1>Education</h1>
                <div className="commonComponents">
                  <div className="commonComponents0">
                    <h2>18 june 2022 - 13 june 2023 </h2>
                  </div>
                  <div className="commonComponents1">
                    <div><p>main deatails</p>
                    <ul>
                      <li>Co dd  gthfe efurf hyr fui igrffb  gugb c ffee</li>
                      <li>Tea</li>
                      <li>Milk</li>
                    </ul></div>
                    <a href="http://localhost:3000" >link text</a>
                    
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
