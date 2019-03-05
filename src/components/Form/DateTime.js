/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import moment from 'moment';
import { Button } from 'components/Form';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Root = styled.div`
  label: DateTime;
  border-radius: 5px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
  background-color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 25rem;
  animation-name: ${fadeIn};
  animation-duration: 100ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
`;

const MonthSelector = styled.div`
  label: MonthSelector;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DaysLabel = styled.div`
  label: DayLabel;
  display: table-cell;
  text-align: center;
  color: gray;
  font-size: 1rem;
  padding: 0.5rem;
`;
const DaysSelector = styled.div``;

const Day = styled.div`
  label: Day;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  width: 5rem;
  height: 3rem;
  background-color: ${({ isSelected }) => isSelected && 'blue'};
  cursor: pointer;
`;

const Week = styled.div`
  label: Week;
  display: table-row;
`;
const NavigateButton = styled(Button)`
  label: NavigateButton;
  display: block;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 150ms ease;
  height: 4rem;
  padding: 0 2rem;
  outline: none;
  &:hover {
    background-color: white;
  }
`;

const Footer = styled.footer``;

const DeleteButton = styled(Button)``;

const Row = styled.div`
  display: table-row;
`;
const actualDate = ({ day, year, month }) => `${year}/${month}/${day}`;

const renderCalendar = ({ year, month }) => {
  const format = 'YYYY/MM/DD';
  const daysInMonth = 31;

  let calendar = { row1: [], row2: [], row3: [], row4: [], row5: [], row6: [] };
  let rowNumber = 1;
  for (let i = 0; i < daysInMonth; i += 1) {
    const dateTofind = actualDate({ year, month: month + 1, day: i + 1 });
    const dayDate = moment(dateTofind, format).date();
    const dayCode = moment(dateTofind, format).day();

    if (dayCode === 0) {
      calendar = {
        ...calendar,
        [`row${rowNumber}`]: [
          ...calendar[`row${rowNumber}`],
          !isNaN(dayDate) && dayDate,
        ],
      };
      rowNumber += 1;
    } else {
      calendar = {
        ...calendar,
        [`row${rowNumber}`]: [
          ...calendar[`row${rowNumber}`],
          !isNaN(dayDate) && dayDate,
        ],
      };
    }
  }
  if (calendar.row1.length < 7 && calendar.row2.length > 0) {
    const diff = 7 - calendar.row1.length;
    for (let i = 0; i < diff; i += 1) {
      calendar.row1 = [false, ...calendar.row1];
    }
  }
  if (calendar.row5.length < 7) {
    const diff = 7 - calendar.row5.length;
    for (let i = 0; i < diff; i += 1) {
      calendar.row5 = [...calendar.row5, false];
    }
  }
  if (calendar.row6.length < 7) {
    const diff = 7 - calendar.row6.length;
    for (let i = 0; i < diff; i += 1) {
      calendar.row6 = [...calendar.row6, false];
    }
  }
  return calendar;
};

const DateTime = ({ onSelect, selectedDate, handleOpen, ...rest }) => {
  const format = 'YYYY/MM/DD';
  const [selectedYear, handleYear] = useState(
    (selectedDate && selectedDate.year()) || moment().year(),
  );
  const [selectedMonth, handleMonth] = useState(
    (selectedDate && selectedDate.month()) || moment().month(),
  );

  useEffect(() => {
    if (selectedMonth > 11) {
      handleMonth(0);
      handleYear(selectedYear + 1);
    } else if (selectedMonth < 0) {
      handleMonth(11);
      handleYear(selectedYear - 1);
    }
  });

  return (
    <Root>
      <MonthSelector>
        <NavigateButton
          type="button"
          onClick={() => handleMonth(selectedMonth - 1)}
        >
          {'<'}
        </NavigateButton>
        <span>
          {`${moment()
            .month(selectedMonth)
            .format('MMMM')}`}
        </span>
        <NavigateButton
          type="button"
          onClick={() => handleMonth(selectedMonth + 1)}
        >
          {'>'}
        </NavigateButton>
      </MonthSelector>
      <DaysSelector>
        <Row>
          {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((letter, index) => (
            <DaysLabel key={index}>{letter}</DaysLabel>
          ))}
        </Row>
        {Object.values(
          renderCalendar({
            year: selectedYear,
            month: selectedMonth,
          }),
        ).map((row, index) => {
          return (
            <>
              {row.length > 0 && (
                <Week key={index}>
                  {row.map((day, idx) => {
                    const date = moment(
                      actualDate({
                        year: moment()
                          .year(selectedYear)
                          .format('YYYY'),
                        month: moment()
                          .month(selectedMonth)
                          .format('MM'),
                        day,
                      }),
                      format,
                    );
                    return (
                      <Day
                        key={idx}
                        onClick={() => {
                          handleOpen();
                          onSelect(date);
                        }}
                        isSelected={
                          selectedDate && day
                            ? date.format(format) ===
                              selectedDate.format(format)
                            : date.format(format) === moment().format(format)
                        }
                      >
                        {day}
                      </Day>
                    );
                  })}
                </Week>
              )}
            </>
          );
        })}
      </DaysSelector>
      <Footer>
        <DeleteButton onClick={() => onSelect()}>Delete</DeleteButton>
      </Footer>
    </Root>
  );
};

DateTime.propTypes = {};

export default DateTime;
