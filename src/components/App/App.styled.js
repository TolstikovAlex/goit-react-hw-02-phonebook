import styled from 'styled-components';

export const FormWrapper = styled.div`
  padding: ${p => p.theme.space[5]}px;
`;

export const FormTitle = styled.h1`
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const FormSubtitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
