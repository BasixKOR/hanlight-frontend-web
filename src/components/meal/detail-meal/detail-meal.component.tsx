import * as React from 'react';

import MealItemComponent from 'components/meal/mealItem';
import { DetailMealMethod, DetailMealProps } from 'container/meal/detail-meal';
import moment from 'moment';
import { MealItem } from 'store';
import styled from 'styled-components';

const Meal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'yg-jalnan';
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 81rem;
  width: 90%;
  min-height: 100%;
`;

const Title = styled.div`
  max-width: 81rem;
  width: 90%;
  font-size: 2.5rem;
  margin-bottom: 3.7rem;
  margin-top: 2.5rem;
`;

const MealWeekWrapper = styled.div`
  height: 22rem;
  margin-bottom: 5rem;
`;

const MealWeekString = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1.275rem;
`;

const MealWeekItems = styled.div<{ listLength: number }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* width: calc(100% - ${({ listLength }) => ((5 - listLength) * 16.6)}% - ${({ listLength }) => (5 - listLength) * 4.2}%); */
  width: calc(100% - ${({ listLength }) => ((5 - listLength) * 20.8)}%);
`;

const days = ['일', '월', '화', '수', '목', '금', '토'];
const weeksString = ['첫', '두', '세', '네', '다섯'];

export default class DetailMealComponent extends React.Component<
  DetailMealProps & DetailMealMethod
> {
  public state: { meals: MealItem[] } = {
    meals: [],
  };

  public componentDidMount() {
    const { getMeal } = this.props;

    getMeal({
      accessToken: this.props.accessToken,
      sort: 'month',
      month: moment().get('month') + 1,
    });
  }

  public componentDidUpdate(prevProps: DetailMealProps & DetailMealMethod) {
    const { getMealMonthStatus, mealMonthList } = this.props;

    if (
      prevProps.getMealMonthStatus === 'pending' &&
      getMealMonthStatus === 'success'
    ) {
      this.setState((state: { meals: MealItem[] }) => ({
        meals: state.meals.concat(mealMonthList),
      }));
    }
  }

  public render() {
    const { meals } = this.state;
    const { getMealMonthStatus } = this.props;

    const MealList: [
      JSX.Element[],
      JSX.Element[],
      JSX.Element[],
      JSX.Element[],
      JSX.Element[]
    ] = [[], [], [], [], []];

    if (getMealMonthStatus === 'success') {
      Array(
        moment()
          .endOf('month')
          .get('date'),
      )
        .fill(null)
        .forEach((_, i) => {
          const date = i + 1;

          const mealMoment = moment({
            date,
          });
          const weekend =
            mealMoment.get('day') === 0 || mealMoment.get('day') === 6;
          if (!weekend) {
            const mealIndex = meals.findIndex(meal => meal.date === date);
            const dateString = mealMoment.format('MM월 DD일');
            const todayBool = moment().get('date') === mealMoment.get('date');
            const day = days[mealMoment.get('d')];
            const week = Math.ceil(date / 7) - 1;
            const weekLength =
              mealMoment.get('week') - week * 7 < 5
                ? mealMoment.get('week') - week * 7
                : 5;
            console.log(mealMoment.get('month'));
            console.log(mealMoment.get('week'));
            console.log(mealMoment.get('d'));
            console.log(moment().endOf('month'));
            console.log(moment().endOf('month').get('date'));
            console.log(moment().endOf('week'));
            console.log(moment().endOf('week').get('date'));
            if (mealIndex > 0) {
              MealList[week].push(
                <MealItemComponent
                  key={date}
                  type="detail"
                  item={meals[mealIndex].detail.split(',')}
                  date={dateString}
                  today={todayBool}
                  day={day}
                  listLength={weekLength}
                />,
              );
            } else {
              MealList[week].push(
                <MealItemComponent
                  key={date}
                  type="detail"
                  item={'급식정보가\n없습니다'}
                  date={dateString}
                  today={todayBool}
                  day={day}
                  listLength={weekLength}
                />,
              );
            }
          }
        });
    }

    return (
      <>
        {getMealMonthStatus === 'success' ? (
          <Meal>
            <Wrapper>
              <Title>급식 정보</Title>
              {MealList.map((_, i) => {
                if (MealList[i].length) {
                  return (
                    <MealWeekWrapper key={i}>
                      <MealWeekString>
                        {moment().get('month') + 1}월 {weeksString[i]} 번째 주
                      </MealWeekString>
                      <MealWeekItems listLength={MealList[i].length}>
                        {MealList[i]}
                      </MealWeekItems>
                    </MealWeekWrapper>
                  );
                }
                return <></>;
              })}
            </Wrapper>
          </Meal>
        ) : (
          <Meal style={{ height: '100%' }} />
        )}
      </>
    );
  }
}
