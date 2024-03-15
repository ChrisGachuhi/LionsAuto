import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export const Partners = () => {
  const [ countState, setCountState] = useState(false)
  return (
    <div className="Partners">
      <div className="partner">
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/04/Tata-Motors-Logo_02.png?fit=82%2C82&ssl=1"
          alt=""
        />
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/04/Tata-Motors-Logo_02.png?fit=82%2C82&ssl=1"
          alt=""
        />
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/04/Tata-Motors-Logo_02.png?fit=82%2C82&ssl=1"
          alt=""
        />
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/04/Tata-Motors-Logo_02.png?fit=82%2C82&ssl=1"
          alt=""
        />
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/04/Tata-Motors-Logo_02.png?fit=82%2C82&ssl=1"
          alt=""
        />
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/04/Tata-Motors-Logo_02.png?fit=82%2C82&ssl=1"
          alt=""
        />
      </div>

        <ScrollTrigger onEnter={()=>setCountState(true)} onExit={()=>setCountState(false)}>
      <div className="stats">
        <p className="stat">
          <span>{
            countState &&
            <CountUp
            start={0}
            end={18}
            duration={4}
            ></CountUp>}
            
            +</span>
          <span>Language</span>
        </p>

        <p className="stat">
          <span>
          {
            countState &&
            <CountUp
            start={0}
            end={502}
            duration={4}
            ></CountUp>}+</span>
          <span>Partners</span>
        </p>

        <p className="stat">
          <span>
          {
            countState &&
            <CountUp
            start={0}
            end={13}
            duration={4}
            ></CountUp>}+</span>
          <span>Years</span>
        </p>

        <p className="stat">
          <span>{
            countState &&
            <CountUp
            start={0}
            end={703}
            duration={4}
            ></CountUp>}+</span>
          <span>Devices</span>
        </p>

        <p className="stat">
          <span>
          {
            countState &&
            <CountUp
            start={0}
            end={114}
            duration={4}
            ></CountUp>}+</span>
          <span>Countries</span>
        </p>

        <p className="stat">
          <span>
          {
            countState &&
            <CountUp
            start={0}
            end={50}
            duration={4}
            ></CountUp>}+</span>
          <span>Developers</span>
        </p>
      </div>
        </ScrollTrigger>
    </div>
  )
};
