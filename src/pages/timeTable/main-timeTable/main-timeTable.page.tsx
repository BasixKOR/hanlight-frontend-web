import TimeTableContainer from 'container/timeTable/main-timeTable';
import * as React from 'react';
import styled from 'styled-components';

const Template = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 33.375rem;
`;

const MainTimeTablePage: React.FC = () => {
  return (
    <Template>
      <TimeTableContainer />
    </Template>
  );
};

export default MainTimeTablePage;