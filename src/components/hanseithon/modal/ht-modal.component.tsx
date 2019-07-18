import * as React from 'react';

import { HTModalProps } from 'container/hanseithon/modal';
import { useInputs } from 'lib/hooks';
import { Device } from 'lib/styles';
import JoinSuccessSvg from 'lib/svg/join-team-success.svg';
import styled from 'styled-components';

const { useState } = React;

const JoinTeamBox = styled.div`
  width: 27.5rem;
  height: 19.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.2);

  border-radius: 0.5rem;

  @media ${Device.tabletL} {
    width: 18.875rem;
    height: 17.625rem;
  }
`;

const JoinTeamWrapper = styled.div`
  width: 90%;
  height: 85.4%;

  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  font-family: 'Noto Sans KR';

  div {
    font-family: inherit;
    font-size: 1.25rem;
    font-weight: bold;
  }

  span {
    font-family: inherit;
    font-size: 0.875rem;
  }
`;

const JoinTeamForm = styled.form`
  width: 100%;

  font-family: 'Noto Sans KR';

  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;

    font-family: inherit;
    font-size: 1rem;
    font-weight: bold;
  }

  input {
    border: none;
    border-top: solid 1px #e9e9e9;
    border-bottom: solid 1px #e9e9e9;

    height: 1.9375rem;

    font-family: inherit;
    font-size: 0.875rem;

    background-color: #ffffff;

    @media ${Device.tabletL} {
      height: 1.6875rem;
    }
  }

  span {
    font-size: 0.8125rem;
    color: #ff0000;
    font-family: 'Open Sans';
    font-weight: normal;
  }

  button {
    width: 7.5rem;
    height: 2rem;

    align-self: flex-end;

    font-family: 'Open Sans';
    font-size: 0.8125rem;

    background-color: #000000;

    color: #ffffff;

    border-radius: 1rem;

    /* margin-top: 3.25rem; */
    margin-top: 1.875rem;

    @media ${Device.tabletL} {
      width: 5rem;
      height: 1.75rem;

      margin-top: 1.25rem;

      font-size: 11px;
      font-weight: bold;
    }
  }
`;

const JoinJobLabel = styled.label``;

const JoinKeyLabel = styled.label`
  height: 5rem;

  margin-top: 1.25rem;

  @media ${Device.tabletL} {
    height: 4.375rem;

    margin-top: 1.575rem;
  }
`;

const JoinTeamModal: React.FC = () => {
  const [keyValidation, setKeyValidation] = useState<boolean>(true);

  return (
    <JoinTeamBox>
      <JoinTeamWrapper>
        <TitleWrapper>
          <div>쉬어가는 한세톤 : 休</div>
          <span>팀 참가</span>
        </TitleWrapper>
        <JoinTeamForm style={{ marginTop: '1.125rem' }}>
          <JoinJobLabel>
            직군
            <input
              type="text"
              placeholder="ex) 백엔드 개발자 , 프론트 개발자 , 디자이너 , 기획자"
            />
          </JoinJobLabel>
          <JoinKeyLabel>
            참가 키
            <input type="text" placeholder="ex) FFFFFFFFF" />
            {!keyValidation && <span>올바르지 않은 참가 키 입니다.</span>}
          </JoinKeyLabel>
          <button>참가</button>
        </JoinTeamForm>
      </JoinTeamWrapper>
    </JoinTeamBox>
  );
};

const TeamForm = styled.form`
  width: 100%;

  font-family: 'Noto Sans KR';

  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;

    font-family: inherit;
    font-size: 1rem;
    font-weight: bold;

    margin-top: 1.25rem;

    @media ${Device.tabletL} {
      margin-top: 1.575rem;
    }
  }

  input {
    border: none;
    border-top: solid 1px #e9e9e9;
    border-bottom: solid 1px #e9e9e9;

    height: 1.9375rem;

    font-family: inherit;
    font-size: 0.875rem;

    background-color: #ffffff;

    @media ${Device.tabletL} {
      height: 1.6875rem;
    }
  }

  span {
    font-size: 0.8125rem;
    color: #ff0000;
    font-family: 'Open Sans';
  }

  button {
    width: 7.5rem;
    height: 2rem;

    align-self: flex-end;

    font-family: 'Open Sans';
    font-size: 0.8125rem;

    background-color: #000000;

    color: #ffffff;

    border-radius: 1rem;

    margin-top: 3.25rem;

    @media ${Device.tabletL} {
      width: 5rem;
      height: 1.75rem;

      margin-top: 1.25rem;

      font-size: 11px;
      font-weight: bold;
    }
  }
`;

const CreateTeamBox = styled.div`
  width: 27.5rem;
  height: 21rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.2);

  border-radius: 0.5rem;

  @media ${Device.tabletL} {
    width: 18.875rem;
    height: 21.125rem;
  }
`;

const CreateTeamWrapper = styled.div`
  width: 90%;
  height: 90%;

  display: flex;
  flex-direction: column;
`;

const CreateTeamModal: React.FC = () => {
  return (
    <CreateTeamBox>
      <CreateTeamWrapper>
        <TitleWrapper>
          <div>쉬어가는 한세톤 : 休</div>
          <span>팀 생성</span>
        </TitleWrapper>
        <TeamForm style={{ marginTop: '1rem' }}>
          <label style={{ marginTop: '0' }}>
            신청 부문
            <input type="select" placeholder="생활 부문, 게임 부문" />
          </label>
          <label>
            팀명
            <input type="text" placeholder="팀명" />
          </label>
          <label>
            팀장 직군
            <input type="text" placeholder="직군" />
          </label>
          <button style={{ marginTop: '0.9375rem' }}>생성 시작</button>
        </TeamForm>
      </CreateTeamWrapper>
    </CreateTeamBox>
  );
};

const MatchTeamBox = CreateTeamBox;

const MatchTeamWrapper = CreateTeamWrapper;

const MatchTeamModal: React.FC = () => {
  return (
    <MatchTeamBox>
      <MatchTeamWrapper>
        <TitleWrapper>
          <div>쉬어가는 한세톤 : 休</div>
          <span>팀 매칭</span>
        </TitleWrapper>
        <TeamForm style={{ marginTop: '1rem' }}>
          <label style={{ marginTop: '0' }}>
            신청 부문
            <input type="text" placeholder="생활 부문, 게임 부문" />
          </label>
          <label>
            직군
            <input type="text" placeholder="직군" />
          </label>
          <label>
            자기소개
            <input type="text" placeholder="자기소개" />
          </label>
          <button style={{ marginTop: '0.9375rem' }}>매칭 시작</button>
        </TeamForm>
      </MatchTeamWrapper>
    </MatchTeamBox>
  );
};

const JoinSuccessBox = styled.div`
  width: 27.5rem;
  height: 29rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.2);

  border-radius: 0.5rem;

  @media ${Device.tabletL} {
    width: 18.925rem;
    height: 21.125rem;
  }
`;

const JoinSuccessWrapper = styled.div`
  width: 90%;
  height: 88.15%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${Device.tabletL} {
    height: 90%;
  }
`;

const JoinSuccessImg = styled.img`
  width: 17.625rem;
  margin-top: 2.875rem;

  @media ${Device.tabletL} {
    width: 11.625rem;
    height: 9.1rem;

    margin-top: 2.65rem;
  }
`;

const JoinSuccessText = styled.div`
  font-family: 'Noto Sans KR';
  font-size: 1.25rem;
  font-weight: bold;

  margin-top: 0.25rem;

  @media ${Device.tabletL} {
    font-size: 0.875rem;

    margin-top: 3px;
  }
`;

const JoinSuccessBtn = styled.div`
  width: 8.75rem;
  height: 2.25rem;

  border-radius: 1rem;
  background-color: #000000;

  font-family: 'Open Sans';
  font-weight: bold;
  font-size: 0.8125rem;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2.675rem;

  @media ${Device.tabletL} {
    margin-top: 2.25rem;

    width: 5rem;
    height: 1.75rem;

    font-size: 11px;

    align-self: flex-end;
  }
`;

const JoinSuccessModal: React.FC = () => {
  return (
    <JoinSuccessBox>
      <JoinSuccessWrapper>
        <TitleWrapper>
          <div>쉬어가는 한세톤 : 休</div>
          <span>팀 참가</span>
        </TitleWrapper>
        <JoinSuccessImg src={JoinSuccessSvg} alt="join success" />
        <JoinSuccessText>팀에 참가하였습니다!</JoinSuccessText>
        <JoinSuccessBtn>확인</JoinSuccessBtn>
      </JoinSuccessWrapper>
    </JoinSuccessBox>
  );
};

const CreateSuccessBox = styled.div`
  width: 27.5rem;
  height: 21rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.2);

  border-radius: 0.5rem;

  @media ${Device.tabletL} {
    width: 18.925rem;
    height: 21.125rem;
  }
`;

const CreateSuccessWrapper = styled.div`
  width: 90%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreateSuccessContent = styled.div`
  font-size: 1rem;
  font-family: 'Noto Sans KR';
  font-weight: bold;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3.875rem;

  @media ${Device.tabletL} {
    margin-top: 3.375rem;
    font-size: 0.875rem;
  }

  div {
    font-size: 1.5rem;
    font-family: inherit;
    font-weight: bold;

    margin-top: 1rem;

    @media ${Device.tabletL} {
      font-size: 1.125rem;
    }

    span {
      font-weight: normal;
      font-size: inherit;
      font-family: inherit;
    }
  }

  p {
    font-family: inherit;
    font-size: 0.875rem;
    font-weight: normal;

    margin-top: 1rem;
    margin-bottom: 0;

    text-align: center;

    @media ${Device.tabletL} {
      font-size: 13px;
    }
  }
`;

const CreateSuccessBtn = styled.div`
  width: 7.5rem;
  height: 2rem;

  border-radius: 1.1rem;
  background-color: #000000;

  font-family: 'Open Sans';
  font-weight: bold;
  font-size: 0.8125rem;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;

  margin-top: 1.6875rem;

  @media ${Device.tabletL} {
    margin-top: 2.25rem;

    width: 5rem;
    height: 1.75rem;

    font-size: 11px;

    align-self: flex-end;
  }
`;

const CreateSuccessModal: React.FC = () => {
  return (
    <CreateSuccessBox>
      <CreateSuccessWrapper>
        <TitleWrapper>
          <div>쉬어가는 한세톤 : 休</div>
          <span>팀 생성</span>
        </TitleWrapper>
        <CreateSuccessContent>
          킹우혁님의 팀 생성이 완료 되었습니다
          <div>
            <span>팀 참가 코드 : </span>
            {`dhwi`}
          </div>
          <p>
            팀원이 팀 참가를 선택한 후,
            <br /> 해당 패스워드를 입력하시면
            <br /> 팀에 참가하실 수 있습니다
          </p>
        </CreateSuccessContent>
        <CreateSuccessBtn>확인</CreateSuccessBtn>
      </CreateSuccessWrapper>
    </CreateSuccessBox>
  );
};

const HTModalComponent: React.FC<HTModalProps> = ({ modalType }) => {
  if (modalType === 'create') {
    return <CreateTeamModal />;
  } else if (modalType === 'join') {
    return <JoinTeamModal />;
  } else if (modalType === 'match') {
    return <MatchTeamModal />;
  } else if (modalType === 'join-success') {
    return <JoinSuccessModal />;
  } else if (modalType === 'create-success') {
    return <CreateSuccessModal />;
  } else {
    return <></>;
  }
};

export default HTModalComponent;
