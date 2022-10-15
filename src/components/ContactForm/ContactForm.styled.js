import styled from 'styled-components';

export const Form = styled.form`
  width: ${p => p.theme.sizes.wrapper}px;
  border: ${p => p.theme.borders.nomrmal};
`;
export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.xm};
  font-weight: ${p => p.theme.fontWeights.normal};
`;
export const FormField = styled.input`
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

export const FormBtn = styled.button`
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px;
  cursor: pointer;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  border-radius: ${p => p.theme.radii.btn};
  border: ${p => p.theme.borders.normal};
  transition: ${p => p.theme.transitions.normal};
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
  }
`;
