import * as React from 'react';

import { numberWithComma } from 'lib/functions';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import {
  festivalActions,
  festivalReducerActions,
  FSReciptModel,
  PayItemType,
} from 'store';
import styled from 'styled-components';

const { useState, useEffect } = React;

const Wrapper = styled.section`
  width: 100%;

  border-radius: 0.375rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #3c3c3c;

  font-family: 'Spoqa Han Sans';

  margin-bottom: 0.5rem;

  position: relative;
`;

const InnerBox = styled.article`
  width: 100%;
  min-height: 3.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-family: inherit;
    font-size: 1rem;

    margin: 0 0.5rem 0 0;

    display: flex;
    align-items: center;

    p {
      font-family: inherit;
      font-size: 1rem;
      font-weight: bold;

      margin: 0;
    }
  }
`;

const Red = styled.p`
  color: #ff476c;
`;

const BoothTitle = styled.h1<{ toggle: boolean }>`
  font-family: inherit;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;

  width: ${({ toggle }) => (toggle ? 'calc(100% - 4rem)' : '60%')};

  margin: 0 0 0 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    font-family: inherit;
    font-size: 0.875rem;
    color: #b1b1b1;

    font-weight: normal;

    margin: 0;
  }
`;

const BoothPlusBtn = styled.span<{ toggle: boolean }>`
  width: 1rem;
  height: 1rem;

  position: relative;

  margin-left: 0.625rem;

  border-radius: 1.25rem;

  cursor: pointer;

  &::before {
    ${({ toggle }) => (toggle ? '' : 'transform: rotate(90deg);')}
  }

  &::before,
  &::after {
    height: 2px;
    width: 1rem;

    position: absolute;
    top: 50%;

    content: ' ';

    background-color: #707070;
  }
`;

const DetailWrapper = styled.article`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #3c3c3c;

  margin-top: 0.5rem;

  position: relative;
`;

const ContentWrapper = styled.section`
  width: 90.24%;

  display: flex;
  flex-direction: column;

  font-family: 'Spoqa Han Sans';
  font-size: 0.875rem;

  margin-top: 0.5rem;

  article {
    width: 100%;

    display: flex;
    justify-content: space-between;

    font-family: inherit;
    font-size: inherit;
    font-weight: normal;

    margin-bottom: 5px;

    h1 {
      margin: 0;
      width: 40%;

      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      color: rgba(255, 255, 255, 0.87);
    }

    h2 {
      margin: 0;
      width: 25%;

      text-align: right;

      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      color: #ff4755;
    }

    h3 {
      margin: 0;
      width: 10%;

      text-align: right;

      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

const ContentSeperator = styled.hr`
  width: 95%;

  margin: 7.5px 0 12.5px 0;

  border: none;
  border-bottom: 1px solid #ffffff;
`;

const PriceWrapper = styled.section`
  width: 90.24%;

  display: flex;
  flex-direction: column;
  align-items: center;

  article {
    width: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-bottom: 0.625rem;

    h1 {
      font-family: 'Spoqa Han Sans';
      font-size: 0.875rem;
      font-weight: normal;
      color: #e6e6e6;

      margin: 0;

      display: flex;

      p {
        margin: 0;

        width: 3.625rem;

        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;

        display: flex;
        justify-content: flex-end;

        margin-left: 0.5rem;
      }
    }
  }
`;

const TotalPrice = styled.p`
  color: #ff4755;
`;

const RemainPrice = styled.p`
  color: #6488ff;
`;

const BtnWrapper = styled.div<{ used: boolean }>`
  width: 100%;
  height: 2.25rem;

  border-bottom-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ used }) => used && 'background-color: #373737;'}

  button {
    width: 50%;
    height: 100%;

    font-family: inherit;
    font-size: 1rem;
    font-weight: bold;
    color: #ffffff;

    border: none;
    outline: none;
  }

  h1 {
    font-family: inherit;
    font-size: 1rem;
    font-weight: bold;
    color: #808080;

    margin: 0;
  }
`;

const AcceptBtn = styled.button`
  background-color: #6488ff;

  border-bottom-left-radius: 0.375rem;
`;

const RefundBtn = styled.button`
  background-color: #373737;

  border-bottom-right-radius: 0.375rem;
`;

export const ChargeItemWrapper = styled.section`
  width: 100%;
  min-height: 3.5rem;

  border-radius: 0.375rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #3c3c3c;

  font-family: 'Spoqa Han Sans';

  margin-bottom: 0.5rem;

  h1 {
    font-family: inherit;
    font-size: 1rem;
    font-weight: bold;
    color: #ffffff;

    margin: 0 0 0 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      font-family: inherit;
      font-size: 0.875rem;
      color: #b1b1b1;

      font-weight: normal;

      margin: 0;
    }
  }

  h2 {
    font-family: inherit;
    font-size: 1rem;

    margin: 0 0.5rem 0 0;

    display: flex;
    align-items: center;

    p {
      font-family: inherit;
      font-size: 1rem;
      font-weight: bold;

      margin: 0;
    }
  }
`;

const Blue = styled.p`
  color: #6488ff;
`;

export interface ReceiptItemProps {
  title: string;
  time: string;
  result: number;
  items: PayItemType[];
}

const ReceiptItemComponent: React.FC<FSReciptModel & { userMoney: number }> = ({
  pk,
  shop_name,
  moneyAfter,
  moneyBefore,
  price,
  confirm,
  cancel,
  receiptItem,
  createdAt,
}) => {
  const dispatch: Dispatch<festivalReducerActions> = useDispatch();

  const { toggleModal } = festivalActions;

  const [toggle, setToggle] = useState<boolean>(false);

  const itemList =
    receiptItem.length !== 0
      ? receiptItem.map((item, i) => (
          <article key={i}>
            <h1>{item.name}</h1>
            <h3>{item.count}</h3>
            <h2>{numberWithComma(item.totalPrice)}원</h2>
          </article>
        ))
      : [];

  return (
    <Wrapper>
      <InnerBox onClick={() => setToggle(!toggle)}>
        <BoothTitle toggle={toggle}>
          <span>{shop_name}</span>
          <p>{moment(createdAt).format('H : mm : ss')}</p>
        </BoothTitle>
        <h2>
          {!toggle && (
            <Red>- {numberWithComma(moneyBefore - moneyAfter)}원</Red>
          )}
          <BoothPlusBtn toggle={toggle} onClick={() => setToggle(!toggle)} />
        </h2>
      </InnerBox>
      {toggle && (
        <DetailWrapper>
          <ContentWrapper>{itemList}</ContentWrapper>
          <ContentSeperator />
          <PriceWrapper>
            <article>
              <h1>
                총{' '}
                <TotalPrice>
                  {numberWithComma(moneyBefore - moneyAfter)}원
                </TotalPrice>
              </h1>
            </article>
            <article>
              <h1>
                구매 후 잔액
                <RemainPrice>{numberWithComma(moneyAfter)}원</RemainPrice>
              </h1>
            </article>
          </PriceWrapper>
          <BtnWrapper used={confirm || cancel}>
            {confirm ? (
              <h1>사용 완료</h1>
            ) : cancel ? (
              <h1>환불 완료</h1>
            ) : (
              <>
                <AcceptBtn
                  onClick={() =>
                    dispatch(
                      toggleModal({
                        status: true,
                        data: {
                          type: 'use',
                          content: '',
                          receiptItem: pk,
                        },
                      }),
                    )
                  }
                >
                  구매 확인
                </AcceptBtn>
                <RefundBtn
                  onClick={() =>
                    // dispatch(
                    //   toggleModal({
                    //     status: true,
                    //     data: {
                    //       type: 'refund',
                    //       content: '',
                    //       receiptItem: pk,
                    //     },
                    //   }),
                    // )
                    alert('점검 중 입니다.')
                  }
                >
                  환불
                </RefundBtn>
              </>
            )}
          </BtnWrapper>
        </DetailWrapper>
      )}
    </Wrapper>
  );
};

export default ReceiptItemComponent;