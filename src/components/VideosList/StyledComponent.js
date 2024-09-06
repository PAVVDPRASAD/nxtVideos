import styled from 'styled-components'

export const VideoTitle = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  font-family: 'Roboto';
  font-size: 14px;
`
export const VideoText = styled.p`
  color: #606060;
  font-family: 'Roboto';
  font-size: 12px;
  margin-right: 10px;
  flex-wrap: wrap;
`
