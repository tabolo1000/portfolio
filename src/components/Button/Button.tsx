import React from 'react';
import icon from '../../assets/images/icon/svg/Frame.svg'
import sprite from '../../assets/images/icon/sprite/sprite.svg'
import s from './Button.module.css'


type ButtonProps = {
    style?: React.CSSProperties;
    iconId: string
}


export const Button1 = ({style, iconId}:ButtonProps) => {
    return (
        <div>
        <button  style={{...style, width: '200px', height: '200px'}}>
            {/* <img src="/src/images/svg/Frame.svg" alt=""/>*/}
            {/* работает только в html*/}
            <img src={icon} alt=""/>
            {/* второй способ работает для реакт,
             но интерактива ждать не стоит */}

        </button>

            <button className={s.btn} style={{...style, width: '200px', height: '200px'}}>
                <svg width="200" height="200" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={`${sprite}#${iconId}`}/>
                </svg>
            </button>
        </div>
    );
};

