import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: ${p => p.theme.sizes.wrapper}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.xm};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const FilterField = styled.input`
  height: 25px;
  margin-top: ${p => p.theme.space[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  outline: none;
  border-radius: ${p => p.theme.radii.btn};
  border: ${p => p.theme.borders.normal};
  &:focus {
    box-shadow: ${p => p.theme.shadows.hover};
  }
`;
