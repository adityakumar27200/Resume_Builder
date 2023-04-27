export default function Main() {
  return (
    <div className="bottomCard bg-white" >
      <div className="leftCard">
        <div className="contacts">
          <h1>Contacts</h1>
          <div className="singleContact">
            <img src="favicon.ico" width="25" height="25"></img>
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
        <h1>Education</h1>
        {/* <div className="rightGrid" >
          <h2 className="dateRange">18 june 2022 - 13 june 2023 </h2>
          <div className="commonComponents1">
            <p>main deatails</p>
            <a href="http://localhost:3000">link text</a>
          </div>
        </div> */}
        <div class="d-flex bd-highlight">
  <div class="p-2 w-100 bd-highlight">Flex item</div>
  <div class="p-2 flex-shrink-1 bd-highlight">Flex item</div>
</div>
      </div>
    </div>
  );
}
