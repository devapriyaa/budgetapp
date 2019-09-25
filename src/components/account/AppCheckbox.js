import React from 'react'
import styled from 'styled-components'

const color = {
    black:{
        light: '#404040',
        dark: '#000000'
    },
    white: {
        white: '#ffffff',
        halfwhite: '#EDF5E1'
    },
    blue: {
        dark: '#0dbd93',
        light: '#19FFC8'
    },
    darkgreen: {
        dark: '#05386B',
        light: '#379683'
    }
  }

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
    padding-right: 7px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: ${color.blue.dark};
  stroke-width: 3px;
`
//hide the original checkbox but do all background work.
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
`;  

//custom checkbox for good look , no background work.
const StyledCheckbox = styled.div`
    display: inline-block; 
    width: 20px;
    height: 20px;
    transition: all 200ms;
    border-color: ${color.white.halfwhite};
    border: solid 1px;
    background: ${props => props.checked ? color.white.halfwhite : 'none' };
    ${HiddenCheckbox}:hover + & {
        box-shadow: 0 0 0 3px ${color.white.halfwhite} inset;
      }
    ${Icon}{
        visibility: ${props => props.checked ? 'visible' : 'hidden'};
    }
    `;

const AppCheckbox = ({ className, status, ...props }) => (
    <CheckboxContainer>
        <HiddenCheckbox checked={status} {...props}/>
        <StyledCheckbox checked={status} {...props}>
            <Icon viewBox="0 0 20 20">
                <polyline points="18,3 8,16 3,10" />
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer>
)

export default AppCheckbox
