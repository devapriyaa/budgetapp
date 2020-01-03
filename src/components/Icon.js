import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import ICONS from '../env/ICONS';

export default function Icon (props) {
    const { icon, color, width, height } = props; 
    return( 
        <svg width = {width}
        height = {height}
        viewBox = {ICONS[icon].viewBox}>
            {ICONS[icon].path.map((value,index) => {
                return <path key={index} d={value} fill={color ? color : "#000000"} />
            })}  
        </svg>
    );
    }
Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
};

Icon.defaultProps = {
    width: 40,
    heigth: 40
};
