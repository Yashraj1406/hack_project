import React ,{ useEffect, useState } from 'react'
import Navbar from './navbar.js'
import TimeSeries from './TimeSeries.js'
import Performance from './Performance.js'
import Tweet from './Tweet.js'
import axios from './axios.js'
import { useNavigate } from 'react-router-dom';
// import Sentiments from './Sentiments.js'
// import Footer from './Footer.js'
import Fundamental from './fundamental.js'
import CompanyLogo from './CompanyLogo.js'
import { useStateValue } from "./StateProvider";
import './profile.css'

function Profile() {

  let navigate = useNavigate();
  const [content] = useStateValue();
  const [ {}, dispatch] = useStateValue();
  const tweets = content["tweet_ids"]
  // const id = Object.keys(tweets);
  // const sentiment = Object.values(tweets);
  // const { dates,dates_data } = alpha_vantage;

  useEffect(() => {
    async function fetchData() {

      const request = await axios.get(content["param"]);
        // Add item to basket...
        dispatch({
          type: "SET_DATA",
          content: request.data
        });
      console.log(request.data)
      console.log(content["company_overview"])
      return request;
    }
  
    fetchData()
   .then(() => {navigate("/profile")})
   .catch(() => {navigate("*")})
  
  },[])


  return (
       <div className="Profile">
          <Navbar />
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
            {Object.keys(content["tweet_ids"])?.slice(0,10).map((item) => (
              <Tweet
                id={item}
                tweet_id={item}
                sent={content["tweet_ids"][item]}
              />
            ))}
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