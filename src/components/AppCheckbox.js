import React from 'react'
import styled from 'styled-components'
import color from '../env/colors';

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: ${color.blue.dark};
  stroke-width: 3px;
`
//hide the original checkbox but do all background work.
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    top: 0;
    right: 0;
  position: absolute;
  opacity: 0;
`;

//custom checkbox for good look , no background work.
const StyledCheckbox = styled.div`
    top:0;
    right: 0;
    width: 20px;
    height: 20px;
    transition: all 200ms;
    border: solid 2px ${color.grey.dark_grey};
    background: ${props => props.checked ? color.grey.dark_grey : 'none'};
    ${HiddenCheckbox}:hover + & {
        box-shadow: 0 0 0 3px ${color.grey.dark_grey} inset;
      }
    ${Icon}{
        visibility: ${props => props.checked ? 'visible' : 'hidden'};
    }
    `;

const AppCheckbox = (props) => (

    <CheckboxContainer>
        <HiddenCheckbox checked={props.checked} {...props} />
        <StyledCheckbox checked={props.checked} {...props}>
            <Icon viewBox="0 0 20 20">
                <polyline points="18,3 8,16 3,10" />
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer>

)

export default AppCheckbox
