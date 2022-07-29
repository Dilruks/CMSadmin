import "./Main.css";

// import Chart from "../charts/Chart";

const Main = () => {
  return (
    <main>
      <div className="main__container">
             <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card">
              <p className="text-primary-p">Dashboard</p>
              <span className="font-bold text-title">8</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card">
              <p className="text-primary-p">Users</p>
              <span className="font-bold text-title">7</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card">
              <p className="text-primary-p">Reports</p>
              <span className="font-bold text-title">3</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card">
              <p className="text-primary-p">Help & Support</p>
              <span className="font-bold text-title">5</span>
            </div>
            
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
     <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>System</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            {/* <Chart /> */}
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Quick Shortcuts</h1>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Members</h1>
              </div>

              <div className="card2">
                <h1>All Package</h1>
              </div>

              <div className="card3">
                <h1>Users</h1>
                <p></p>
              </div>

              <div className="card4">
                <h1>Help</h1>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;
