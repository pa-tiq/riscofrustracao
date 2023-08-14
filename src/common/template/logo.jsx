import React from 'react' 

export default function Logo({logoName}){
    return (
        <div className="logo">
            {
                {
                    'regius': <img src={require('../../imgs/logo_regius.png')}/>,   //regius
                    'wedan': <img src={require('../../imgs/wedan.jpg')}/>,          //wti
                    'prevsan': <img src={require('../../imgs/logo_prevsan.png')}/>, //previsan
                    'risco': <img src={require('../../imgs/logo_risco.png')}/>      //risco
                }[logoName]
        }
        </div>
    );
}