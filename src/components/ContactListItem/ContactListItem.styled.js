import styled from 'styled-components';

export const DeleteBtn = styled.button`
  margin-left: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px;
  cursor: pointer;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  border-radius: ${p => p.theme.radii.btn};
  border: ${p => p.theme.borders.normal};
  transition: ${p => p.theme.transitions.normal};
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
  }
`;
export const ListItem = styled.li`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
