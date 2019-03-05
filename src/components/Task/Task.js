import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  InputText,
  TextArea,
  Button,
  CheckBox,
  SelectBox,
  SelectOption,
  List,
  ListItem,
} from 'components/Form';
import DateTime from 'components/Form/DateTime';
import { Portal, PortalSelect } from 'components/Portal';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const CalendarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Task = () => {
  const rootRef = useRef(null);
  const [isCalendar, handleDisplayCalendar] = useState(false);
  const [selectedDate, handleSelectDate] = useState(null);
  const [rendered, setRender] = useState(false);
  useEffect(() => {
    if (!rendered) {
      setRender(true);
    }
  });
  return (
    <Form>
      <InputText name="title" placeholder="Saisissez un titre" />
      <TextArea name="description" placeholder="Ajouter des détails" />
      <SelectBox name="category">
        <SelectOption>Mes tâches</SelectOption>
        <SelectOption>Other</SelectOption>
      </SelectBox>
      <CalendarWrapper ref={rootRef}>
        <Portal container={rootRef.current}>
          <PortalSelect
            type="button"
            title={selectedDate && selectedDate.format('ddd. DD MMMM YYYY')}
          >
            <span>
              {(selectedDate && selectedDate.format('ddd. DD MMMM YYYY')) ||
                'Ajouter une date'}
            </span>
          </PortalSelect>

          <DateTime
            selectedDate={selectedDate}
            name="date"
            onSelect={value => {
              handleSelectDate(value);
              handleDisplayCalendar(false);
            }}
          />
        </Portal>
      </CalendarWrapper>

      <Button type="button">Ajouter des tâches secondaires</Button>
      <List>
        <ListItem>
          <CheckBox />
          <InputText placeholder="Saisissez un titre" />
        </ListItem>
      </List>
    </Form>
  );
};

export default Task;
