import React from 'react';
import './Success.css';
import {ContinuarComprando} from './components/ContinuarComprando';
import {Sucesso} from './components/Sucesso';
import {Sacolas} from './components/Sacolas';
import {Obrigado} from './components/Obrigado';
import { BottomApp } from '../bottomApp/BottomApp';

function Success() {
  return <div className="conteiner">
  <Sacolas/>
  <Sucesso/>
  <Obrigado/>
  <ContinuarComprando/>
  <BottomApp/>
</div>
}

export default Success;
