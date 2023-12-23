import styled from 'styled-components';
const getBgc = ({type, theme})=>{
  console.log(theme);
  switch (type) {
    case 'error':
      return theme.color.error;
    case 'warning':
        return theme.color.orange;
    case 'success':
          return theme.color.green;      
    default:
      return theme.color.grey;
  }

}
export const StyledAlert = styled.p`
    line-height: 1.5;
    padding: 10px 20px;
    background-color: ${getBgc};
`