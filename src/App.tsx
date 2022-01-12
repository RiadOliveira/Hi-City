import React, { useEffect, useState } from 'react';
import { DayPeriod, getDayPeriod } from 'utils/getDayPeriod';
import api from 'services/api';
import { apiKey, searchEngineId } from './credentials/google-search';

const App: React.FC = () => {
  const [dayPeriod, setDayPeriod] = useState<DayPeriod>(
    getDayPeriod(new Date()),
  );

  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
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
    setInterval(() => {
      const actualPeriod = getDayPeriod(new Date());

      if (actualPeriod !== dayPeriod) {
        setDayPeriod(actualPeriod);
      }
    }, 60000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <img src={backgroundImage} alt={`City ${dayPeriod}`} />;
};

export default App;
