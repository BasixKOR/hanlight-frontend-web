import * as React from 'react';

import TimerComponent from 'components/timer';
import { Device } from 'lib/styles';
import styled from 'styled-components';

const Template = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 7rem;
`;

const Wrapper = styled.div`
  max-width: 81rem;
  width: 90%;
  height: 17.2rem;
  display: flex;
  justify-content: space-between;

  @media ${Device.tablet} {
    flex-direction: column;
  }
`;
const TimerPage: React.FC = () => {
  return (
    <Template>
      <Wrapper>
        <TimerComponent />
      </Wrapper>
    </Template>
  );
};

export default TimerPage;
