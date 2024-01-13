import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px;
`
export const Title = styled.h2`
    line-height: 1.3;
`
export const ColorPickerOption = styled.button`
    display: inline-block;
    width: 40px;
    height: 40px;
    margin: 8px;
    background-color: ${({bgc})=>bgc};
    border: ${(props)=> props.idx === props.currentIdx ? '2px solid black' : 'none'}   
`