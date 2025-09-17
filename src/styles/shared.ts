import { css } from 'styled-components';

// Stili base per i bottoni
export const buttonStyles = css`
  display: inline-block;
  padding: 12px 25px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.light};
  background-color: ${({ theme }) => theme.colors.background.dark};
  border: 1px solid transparent; // Bordo base
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;
