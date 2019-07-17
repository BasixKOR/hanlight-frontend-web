import * as React from 'react';

import AcceptPageComponent from 'components/hanseithon/main/acceptPage';
import styled from 'styled-components';

const Template = styled.div`
  width: 100%;
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
`;

const AcceptPage: React.FC = () => {
  return (
    <Template>
      <AcceptPageComponent />
    </Template>
  );
};

export default AcceptPage;
