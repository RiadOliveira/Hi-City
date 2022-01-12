import React, { useEffect, useState } from 'react';
import { DayPeriod, getDayPeriod } from 'utils/getDayPeriod';
import api from 'services/api';
import { Container, Image, Message } from 'styles';
import getMessage from 'utils/getMessage';
import { useTransition } from 'react-spring';
import { apiKey, searchEngineId } from './credentials/google-search';
import offlineImages from './utils/offlineImages.json';

const App: React.FC = () => {
  const [dayPeriod, setDayPeriod] = useState<DayPeriod>(
    getDayPeriod(new Date()),
  );
  const [offlineMode, setOfflineMode] = useState<undefined | boolean>(
    undefined,
  );

  const [backgroundImage, setBackgroundImage] = useState('');

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
    // eslint-disable-next-line no-alert
    setOfflineMode(window.confirm('Gostaria de utilizar o modo offline?'));
  }, []);

  useEffect(() => {
    if (offlineMode !== undefined) {
      if (offlineMode) {
        setBackgroundImage(offlineImages[dayPeriod]);
      } else {
        api
          .get(
            `?key=${apiKey}&searchType=image&num=1&imgSize=huge&cx=${searchEngineId}&q=City ${dayPeriod}`,
          )
          .then(
            response =>
              response.data.items[0].link &&
              setBackgroundImage(response.data.items[0].link),
          );
      }
    }
  }, [dayPeriod, offlineMode]);

  useEffect(() => {
    setInterval(() => {
      const actualPeriod = getDayPeriod(new Date());

      if (actualPeriod !== dayPeriod) {
        setDayPeriod(actualPeriod);
      }
    }, 60000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return backgroundImage ? (
    <Container period={dayPeriod}>
      <Message>{getMessage(dayPeriod)}!</Message>

      {backgroundTransition(
        (style, item) =>
          item && <Image style={style} src={item} alt={`City ${dayPeriod}`} />,
      )}
    </Container>
  ) : (
    <></>
  );
};

export default App;
