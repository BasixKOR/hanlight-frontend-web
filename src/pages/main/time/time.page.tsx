import * as React from 'react';
import styled from 'styled-components';
import EndTimeComponent from 'components/main/time/endTime';
import LunchTimeComponent from 'components/main/time/lunchTime';

const Template = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const TimeComponent: React.FC = () => {
  return (
    <Template>
      <LunchTimeComponent />
      <EndTimeComponent />
    </Template>
  );
};

export default TimeComponent;