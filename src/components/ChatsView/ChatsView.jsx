import React, {useState} from 'react';
import styled from 'styled-components';

import ChatsNav from '../ChatsNav/ChatsNav';
import './ChatsView.css';

const ChatsView = (props) =>{
    return(
        <div className='Chats'>
            <ChatsNav/>
            <div class="Onechat">
                <div class="chatContainer">
                    <div className="fotoMenssage">
                        <img class="fotoOtro" src="./src/image/fotoPerfil2.jpg" alt="Foto de Perfil de Otro" />
                    </div>
                    <div class="chatText">
                        <div class="nameContact">
                            <strong>Daniel de psicología</strong>  
                        </div>
                        <div class="menssage">
                            <p>Hola oye, vimos tu exposición...</p>
                        </div>
                    </div>
                    <div class="date">
                        <div class="hours">
                            <p>01:58 PM</p>
                        </div>
                        <div class="numMenssage">
                            <div class="numContainer">
                                <p class="num">4</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class='line'></div>
            </div>
        </div>
        
    )
}

export default ChatsView; 