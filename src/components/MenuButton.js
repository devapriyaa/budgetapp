import React from 'react';
import styled from 'styled-components';
import color from '../env/colors';
import ICONS from '../env/ICONS';
import Icon from '../components/Icon';

export default function MenuButton (props){
     
    return(
      <Icon icon="Delete" color={color.grey.dark_grey} width="50" height="50"/>   
    );
}