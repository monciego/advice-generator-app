import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: var(--dark-grayish-blue);
  padding: 2rem 3rem;
  border-radius: 0.75rem;
  position: relative;
  width: 100%;
  max-width: 35rem;
  margin: 0 auto;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  @media (max-width: 760px) {
    max-width: 90%;
    padding: 2rem;
  }
`;

export const AdviceNumber = styled.h3`
  color: var(--neon-green);
  text-transform: uppercase;
  font-size: 0.9rem;
  text-align: center;
  letter-spacing: 3px;

  @media (max-width: 500px) {
    font-size: 0.75em;
  }
`;

export const Advice = styled.h1`
  color: var(--light-cyan);
  padding: 1rem 0;
  text-align: center;
  font-size: 28px;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

export const ButtonGenerator = styled.div`
  position: absolute;
  background-color: var(--neon-green);
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  padding: 0.5rem;
  height: 3.25rem;
  width: 3.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem var(--neon-green),
      0 0 0.8rem var(--neon-green), 0 0 2.5rem var(--neon-green),
      inset 0 0 1.3rem var(--neon-green);
  }
`;

export const ButtonImage = styled.img`
  width: 1.25rem;
`;

export const Divider = styled.img`
  margin: 1rem 0 2rem 0;
  width: 100%;
`;
