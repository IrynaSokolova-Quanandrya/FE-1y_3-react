import { Container, Title, ColorPickerOption } from './ColorPicker.styled';


export const ColorPicker = ({options}) => {
    return (
        <Container>
            <Title>Color Picker</Title>
            {options.map(({label, color})=>(
                <ColorPickerOption key={label} 
                        bgc={color}>
                    <span>{label}</span>
                </ColorPickerOption>
            ))}
        </Container>
    )
}