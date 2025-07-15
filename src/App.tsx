import api from 'services/api';

import React, { useEffect, useState } from 'react';
import { Container, Title, Image, Message } from 'styles';
import { useTransition } from 'react-spring';
import { DayPeriod } from 'types/DayPeriod';
import { getDayPeriod } from 'utils/getDayPeriod';
import { IMAGES_DATA } from 'constants/imagesData';
import { getPeriodMessage } from 'utils/getMessage';
import { apiKey, searchEngineId } from './credentials/google-search';

const App: React.FC = () => {
  const [dayPeriod, setDayPeriod] = useState<DayPeriod>(
    getDayPeriod(new Date()),
  );
  const [backgroundImage, setBackgroundImage] = useState(
    IMAGES_DATA[dayPeriod].defaultLink,
  );

  const backgroundTransition = useTransition(backgroundImage, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 0.6,
    },
    leave: {
      position: 'absolute',
      opacity: 0,
    },
  });

  useEffect(() => {
    if (!apiKey) return;

    api
      .get(
        `?key=${apiKey}&searchType=image&num=1&imgSize=huge&cx=${searchEngineId}&q=City ${dayPeriod}`,
      )
      .then(
        response =>
          response.data.items[0].link &&
          setBackgroundImage(response.data.items[0].link),
      );
  }, [dayPeriod]);

  useEffect(() => {
    setInterval(() => setDayPeriod(getDayPeriod(new Date())), 60000);
  }, []);

  return (
    <Container period={dayPeriod}>
      <Title>Hi-City</Title>
      <Message>{getPeriodMessage(dayPeriod)}</Message>

      {backgroundTransition(
        (style, item) =>
          item && <Image style={style} src={item} alt={`City ${dayPeriod}`} />,
      )}
    </Container>
  );
};

export default App;
