import { useState } from 'react';
import { Container, Title, ColorPickerOption } from './ColorPicker.styled';
import { useEffect } from 'react';

export const ColorPicker = ({ options }) => {
    const [colorOptionIdx, setColorOptionIdx] = useState(0);
  
    const handleClick = (optionId) => {
    if(optionId === colorOptionIdx){
            return
        }
        setColorOptionIdx(optionId)       
    }
    
   

const label = options[colorOptionIdx].label
    return (
       <Container>
                <Title>Color Picker</Title>
                <span>Обраний колір: {label}</span>
                <br />
                {options.map(({label, color}, idx)=>(
                    <ColorPickerOption 
                            onClick={()=>{handleClick(idx)}}
                            key={label} 
                            bgc={color}
                            idx = {idx}
                            currentIdx={colorOptionIdx}
                            >                    
                    </ColorPickerOption>
                ))}
            </Container>
   )
}




















// export class OldColorPicker extends Component{

//     state={
//         colorOptionIdx: 0
//     }

//     handleClick = (optionId) => {        
//         if(optionId === this.state.colorOptionIdx){
//             return
//         }

//         this.setState({colorOptionIdx: optionId})
//     }
    
//     render(){
//         const {options} = this.props;
//         const {colorOptionIdx}= this.state;
//         const label = options[colorOptionIdx].label
//         return (
//             <Container>
//                 <Title>Color Picker</Title>
//                 <span>Обраний колір: {label}</span>
//                 <br />
//                 {options.map(({label, color}, idx)=>(
//                     <ColorPickerOption 
//                             onClick={()=>{this.handleClick(idx)}}
//                             key={label} 
//                             bgc={color}
//                             idx = {idx}
//                             currentIdx={colorOptionIdx}
//                             >                    
//                     </ColorPickerOption>
//                 ))}
//             </Container>
//         )
//     }
// }

