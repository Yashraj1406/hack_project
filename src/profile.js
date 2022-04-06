import React from 'react'
import Navbar2 from './navbar2.js'
// import Content from './Content.js'
import TimeSeries from './TimeSeries.js'
import Performance from './Performance.js'
// import Sentiments from './Sentiments.js'
// import Footer from './Footer.js'
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { CircularProgressbar, buildStyles, ChangingProgressProvider } from 'react-circular-progressbar';
import Fundamental from './fundamental.js'
import CompanyLogo from './CompanyLogo.js'
import './profile.css'

function Profile() {
  const percentage = 80;

  return (
       <div className="Profile">
          <Navbar2 />
          <div className="data">
          <div className="CompanyLogo">
            <CompanyLogo />
          </div>
          <div className="TimeSeries">
            <TimeSeries />
          </div>
          <div className="performance">
            <Performance />
          </div>
          <div className="fundamental">
            <Fundamental />
          </div>
          <div className="twitter_embedding">
            <h2>Trending Tweets</h2>
            <div className="tweets">
              <div className="embed">
              <TwitterTweetEmbed
                onLoad={function noRefCheck(){}}
                placeholder={<div style={{backgroundColor: 'red', color: 'white', margin: 10, padding: 10}}>Hello I am custom placeholder</div>}
                tweetId="1083592734038929408"
              />
              </div>
              <div className="sentiment">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      rotation: 0.25,

                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: 'butt',

                      // Text size
                      textSize: '16px',

                      // How long animation takes to go from one percentage to another, in seconds
                      pathTransitionDuration: 3,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                      textColor: '#f88',
                      trailColor: '#d6d6d6',
                      backgroundColor: '#3e98c7',
                    })}
                  />;
                {/* <Sentiments /> */}
              </div>
              </div>
          </div>
          <div className="footer">
              {/* <Footer /> */}
          </div>
          </div>
       </div>
  )
}

export default Profile

// {Content.map((item) => {
//   return (<>
//   <h1>{item.name}</h1>
//   <p>{item.content}</p>
//   <p>{item.finance}</p>
//   <p>{item.chart_data}</p>
//   </>)
// })}


              {/* <div className="left-content">
                <div className="centerContent">
                  <div className="selfCenter spaceBetween">
                    <TwitterTweetEmbed
                      onLoad={function noRefCheck(){}}
                      placeholder={<div style={{backgroundColor: 'red', color: 'white', margin: 10, padding: 10}}>Hello I am custom placeholder</div>}
                      tweetId="1083592734038929408"
                    />
                  </div>
                </div>
              </div>ᐧ */}



{/* <ChangingProgressProvider values={[0, 20, 80]}>
        {value => (
          <CircularProgressbar
            value={value}
            text={`${value}%`}
            circleRatio={0.75}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              strokeLinecap: "butt",
              trailColor: "#eee"
            })}
          />
        )}
      </ChangingProgressProvider> */}