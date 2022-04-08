import React, {useEffect} from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { CircularProgressbar, buildStyles, ChangingProgressProvider } from 'react-circular-progressbar';
import './tweet.css'

function Tweet(props) {

  useEffect(() => {
    console.log("Tweet")
  },[])
  
  return (
        <div className="tweets" >
            <div className="embed" >
              <TwitterTweetEmbed
                id={props.tweet_id}
                onLoad={function noRefCheck(){}}
                placeholder={<div style={{backgroundColor: 'red', color: 'white', margin: 10, padding: 10}}>Please wait loading tweet.....</div>}
                tweetId={props.tweet_id}
              />
            </div>
            <div className="sentiment" style={{height: '100px'}}>
                <CircularProgressbar
                    value={props.sent}
                    text={`${props.sent}%`}
                    styles={{height: '10px'}}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      rotation: 1,

                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: 'round',

                      // Text size
                      textSize: '18px',

                      // How long animation takes to go from one percentage to another, in seconds
                      pathTransitionDuration: 3,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: `rgba(62, 152, 199, ${props.sent / 100})`,
                      textColor: '#f88',
                      trailColor: '#d6d6d6',
                      backgroundColor: '#3e98c7',
                    })}
                />
            </div>
        </div>
  )
                }

export default Tweet