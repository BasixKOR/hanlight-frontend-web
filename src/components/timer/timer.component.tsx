import * as React from 'react';

import { Device } from 'lib/styles';
import EndImgSvg from 'lib/svg/end-time-illust.svg';
import LunchImgSvg from 'lib/svg/jumsim-illust.svg';
import moment from 'moment';
import styled from 'styled-components';

const { useState, useEffect } = React;

const Timer = styled.div`
  position: relative;
  width: 43%;
  max-width: 30rem;
  height: 100%;
`;

const Title = styled.span`
  font-size: 1.75rem;
  font-family: 'yg-jalnan';
  margin-left: 1rem;

  @media ${Device.laptop} {
    font-size: 1.5rem;
    display: inline-block;
    margin-top: 5%;
  }
`;

const LeftTimerImg = styled.img`
  position: absolute;
  width: 73%;
  bottom: 1rem;
  left: 0;
`;

const Content = styled.div`
  position: absolute;
  top: 3rem;
  font-family: 'yg-jalnan';
  font-size: 1.69rem;
  color: #000000;
  z-index: 1;

  @media ${Device.laptop} {
    font-size: 1.2rem;
  }
`;

const LeftContent = styled(Content)`
  left: 7.3rem;

  @media ${Device.laptop} {
    top: 5rem;
    left: 6rem;
  }
`;

const RightContent = styled(Content)`
  right: 2.58rem;

  @media ${Device.laptop} {
    top: 5rem;
    right: 0;
  }
`;

const Time = styled.span`
  font-family: 'Spoqa Han Sans';
  font-size: 3.375rem;
  font-weight: bold;
  color: #4470ff;

  @media ${Device.laptop} {
    font-size: 2.75rem;
  }
`;

const EndTimerImg = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

const minute = 60;
const hour = minute * 60;
const day = hour * 24;
const lunch = 12 * hour + 30 * minute;
const home = 16 * hour + 10 * minute;

const TimerComponent: React.FC = () => {
  const [lunchHour, setLunchHour] = useState<string>('00');
  const [lunchMin, setLunchMin] = useState<string>('00');
  const [lunchSec, setLunchSec] = useState<string>('00');
  const [homeHour, setHomeHour] = useState<string>('00');
  const [homeMin, setHomeMin] = useState<string>('00');
  const [homeSec, setHomeSec] = useState<string>('00');

  const formatTwoDigit = (x: number): string => ('0' + x).slice(-2);

  const computeTime = () => {
    const hour = Number(moment().format('H')) * 3600;
    const min = Number(moment().format('m')) * 60;
    const sec = Number(moment().format('s'));

    const sum = hour + min + sec;

    const remainLunchSum = sum >= lunch ? day + lunch - sum : lunch - sum;
    const remainHomeSum = sum >= home ? day + home - sum : home - sum;

    setLunchHour(formatTwoDigit(Math.floor(remainLunchSum / 3600)));
    setLunchMin(formatTwoDigit(Math.floor((remainLunchSum % 3600) / 60)));
    setLunchSec(formatTwoDigit(Math.floor(remainLunchSum % 60)));

    setHomeHour(formatTwoDigit(Math.floor(remainHomeSum / 3600)));
    setHomeMin(formatTwoDigit(Math.floor((remainHomeSum % 3600) / 60)));
    setHomeSec(formatTwoDigit(Math.floor(remainHomeSum % 60)));
  };

  useEffect(() => {
    const interval = setInterval(() => computeTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Timer>
        <Title>점심시간까지 남은시간</Title>
        <LeftTimerImg src={LunchImgSvg} alt="" />
        <LeftContent>
          <Time>{lunchHour}</Time>시&ensp;
          <Time>{lunchMin}</Time>분&ensp;
          <Time>{lunchSec}</Time>초
        </LeftContent>
      </Timer>
      <Timer style={{ width: '45%' }}>
        <Title>종례시간까지 남은시간</Title>
        <EndTimerImg src={EndImgSvg} alt="" />
        <RightContent>
          <Time>{homeHour}</Time>시&ensp;
          <Time>{homeMin}</Time>분&ensp;
          <Time>{homeSec}</Time>초
        </RightContent>
      </Timer>
    </>
  );
};

export default TimerComponent;
