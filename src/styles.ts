import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import { DayPeriod } from 'types/DayPeriod';
import { IMAGES_DATA } from 'constants/imagesData';

interface Main {
  period: DayPeriod;
}

export const Container = styled.main<Main>`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ period }) => css`
    ${IMAGES_DATA[period].gradient}
  `}
`;

export const Title = styled.h2`
  position: absolute;
  right: 10px;
  top: -5px;

  z-index: 1;

  font-family: sans-serif;
  color: #fafafa;
  opacity: 0.7;
`;

export const Message = styled.h1`
  color: #fff;
  font-size: 72px;

  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
  margin-inline: 8px;

  z-index: 1;
  font-family: sans-serif;
  animation: 1.2s enterMessage;

  @keyframes enterMessage {
    0% {
      opacity: 0;
      transform: scale(0.7);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const Image = styled(animated.img)`
  position: absolute;

  width: 100%;
  height: 100%;
  object-fit: cover;
`;
