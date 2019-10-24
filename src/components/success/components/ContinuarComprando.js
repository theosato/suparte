import React from 'react';
import continuarComprando from './ContinuarComprando.svg';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

const ContinuarComprando = () => (
    <div className="ContinuarComprando">
      <Link to="/">      
        <img src={continuarComprando} />
      </Link>
    </div>
  )
export {ContinuarComprando}