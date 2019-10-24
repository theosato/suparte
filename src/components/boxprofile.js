import React from 'react';
import boxProfile from './boxprofile.svg'
const BoxProfile = ({titulo, subtitulo}) => (
    <div className="BoxProfile">
      <img src={boxProfile} />
      <div className="Titulo">{ titulo }</div>
      <div className="Subtitulo">{ subtitulo }</div>
    </div>
  )
export {BoxProfile}
