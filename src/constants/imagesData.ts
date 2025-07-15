import { DayPeriod } from 'types/DayPeriod';

type ImagesData = {
  [key in DayPeriod]: {
    gradient: string;
    defaultLink: string;
  };
};

export const IMAGES_DATA: ImagesData = {
  day: {
    defaultLink:
      'https://handluggageonly.co.uk/wp-content/uploads/2016/02/HandLuggageOnly-26.jpg',
    gradient:
      'background: rgb(255,239,86); background: linear-gradient(90deg, rgba(255,239,86,1) 0%, rgba(222,145,44,1) 35%, rgba(201,55,55,1) 100%);',
  },
  afternoon: {
    defaultLink:
      'https://images.pond5.com/aerial-landscape-jakarta-city-afternoon-footage-090134721_prevstill.jpeg',
    gradient:
      'background: rgb(255,122,86); background: linear-gradient(90deg, rgba(255,122,86,1) 0%, rgba(235,165,73,1) 35%, rgba(31,110,161,1) 100%);',
  },
  evening: {
    defaultLink:
      'https://www.bestcities.net/wp-content/uploads/City-evening-view.jpg',
    gradient:
      'background: rgb(31,110,161); background: linear-gradient(90deg, rgba(31,110,161,1) 0%, rgba(12,73,145,1) 35%, rgba(4,39,82,1) 100%);',
  },
  night: {
    defaultLink:
      'http://www.fubiz.net/wp-content/uploads/2020/12/strangernights.jpg',
    gradient:
      'background: rgb(6,49,102); background: linear-gradient(90deg, rgba(6,49,102,1) 0%, rgba(5,35,73,1) 35%, rgba(0,0,0,1) 100%);',
  },
} as const;
