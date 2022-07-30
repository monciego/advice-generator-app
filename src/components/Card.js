import React from 'react';
import {
  Advice,
  AdviceNumber,
  ButtonGenerator,
  ButtonImage,
  Divider,
  StyledCard,
} from '../styles/Card.styled';
import btnImage from '../image/icon-dice.svg';
import dividerImage from '../image/pattern-divider.svg';

const Card = ({ advice, getAdvice, id }) => {
  return (
    <StyledCard>
      <AdviceNumber>Advice #{id}</AdviceNumber>
      <Advice>🙶{advice}🙷</Advice>
      <ButtonGenerator onClick={getAdvice}>
        <ButtonImage src={btnImage} alt='roll a dice' />
      </ButtonGenerator>
      <Divider src={dividerImage} />
    </StyledCard>
  );
};

export default Card;
