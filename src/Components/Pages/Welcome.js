import logo from "../../images/logo.png";
import home01A from "../../images/home01A.png";
import home01B from "../../images/home01B.png";
const Welcome = (props) => {
  return (
    <div className="block">
      <div className="welcomeContainer row ">
        <div className="welcomeLeftContainer col-12 col-sm-6  ">
          <div className="row welcomeLeftRow">
            <div className="col "></div>
            <div className="col-8 col-sm-7 row">
              <div className="welcomeHeaderContainer">
                <h4>WE WORK WITH YOU</h4>
                <h4>FOR YOU</h4>
                <h4>WHEN YOU CAN</h4>
                <h6 className="textRight">Remote, Flexible</h6>
                <h5 className="textRight">100%</h5>
              </div>
              <div className="welcomeLogoContainer">
                <img className="welcomeLogo" src={logo} />
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
        <div
          className="welcomeRightContainer col-12 col-sm-6 "
          style={{ backgroundImage: `url(${home01A})` }}
        >
          <div className="welcomeTriContainer">
            <img className="welcomeTriImg" src={home01B} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
