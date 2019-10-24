import React from 'react';
import './Success.css';
import {ContinuarComprando} from './components/ContinuarComprando';
import {Toolbar} from './components/Toolbar';
import {Sucesso} from './components/Sucesso';
import {Sacolas} from './components/Sacolas';
import {Obrigado} from './components/Obrigado';

function Success() {
  return <div className="conteiner">
  <Toolbar/>
  <Sacolas/>
  <Sucesso/>
  <Obrigado/>
  <ContinuarComprando/>
</div>
}

export default Success;
