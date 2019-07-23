import * as React from 'react';

import { Device } from 'lib/styles';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  font-size: 5.125rem;
  font-family: 'Spoqa Han Sans';
  font-weight: bold;
  color: #ffffff;

  margin-bottom: 37.75rem;

  /* @media ${Device.laptop} {
    margin-bottom: 18rem;
  } */

  @media ${Device.mobileL} {
    font-size: 1.5rem;
    margin-bottom: 27.5rem;
  }
`;

const HTTimerComponent: React.FC = () => {
  return <Wrapper>04시 : 15분 : 32초</Wrapper>;
};

export default HTTimerComponent;
