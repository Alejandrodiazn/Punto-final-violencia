import React, {useState} from 'react';
import styled from 'styled-components';
import './ChatsNav.css';

export default function ChatsNav (props){
    return(
        <div class="base">
            <div class="name">
                <strong>Wunsup</strong>
            </div>
            <div>
                <img class="foto" src="./src/image/fotoPerfil1.jpg" alt="Foto de Perfil de TI" />
            </div>
        </div>
    )
}