import React, {useReducer} from 'react';
import './App.css';
import Img from 'react-image';
import Logo from './images/logo.png';
import { FaUser,FaCalendarAlt,FaCamera,FaEnvelope,FaMapMarkerAlt,FaUserPlus,
          FaFacebookSquare,FaWhatsappSquare,FaUsers,FaSearch } from 'react-icons/fa';
import Login from './Login';

import {DateRangeInput} from '@datepicker-react/styled'

const initialState = {
  startDate: null,
  endDate: null,
  focusedInput: null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'focusChange':
      return {...state, focusedInput: action.payload}
    case 'dateChange':
      return action.payload
    default:
      throw new Error()
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return ( 
      <header className="App-header">
        <div className="HeaderBar">
          <img className="ui-header" src={Logo}></img>    
          <button className = "ui-header-icon HeaderBar " id="siteHeaderFotos">
            <h2 className= "ui-header-icon HeaderBar" >
              <FaCamera />
                <span className = "ui-header-icon-name HeaderBar ui-header-icon">
                  Fotos
                </span>
            </h2>
          </button> 
          <button className = "ui-header-icon HeaderBar " id="siteHeaderEmail">
            <h3 className= "ui-header-icon HeaderBar">
              <FaEnvelope />
                <span className = "ui-header-icon-name HeaderBar ui-header-icon">
                  E-mail
                </span>
            </h3>
          </button>
          <button  className = "ui-header-icon HeaderBar" id="siteHeaderLogin">
            <h4 className= "ui-header-icon HeaderBar">
              <FaUser />
                <span className = "ui-header-icon-name HeaderBar ui-header-icon">
                  Login
                </span>
            </h4>
          </button>    
          <button  className = "ui-header-icon HeaderBar" id="siteHeaderLogin">
            <h5 className= "ui-header-icon HeaderBar">
              <FaUserPlus />
                <span className = "ui-header-icon-name HeaderBar ui-header-icon">
                  Cadastro
                </span>
            </h5>
          </button>   
        </div>
        <div className="locacao">
            <div className=" locacao ">
              <h1>
              <DateRangeInput 
              className="checkIn"
                  onDatesChange={data => dispatch({type: 'dateChange', payload: data})}
                  onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
                  startDate={state.startDate} // Date or null
                  endDate={state.endDate} // Date or null
                  focusedInput={state.focusedInput} // START_DATE, END_DATE or null
               />
              </h1>
            </div>
            <div className="locacao consulta ">
              <h2 className="dataLocacao ui-pesquisa-icon">
                <FaUsers/>
                  <span className="dataLocacao ">Quantidade de pessoas</span>
              </h2>
            </div>
            <div className="locacao consulta ">
              <h3 className="dataLocacao ui-pesquisa-icon" >
                <FaSearch/>
                  <span className="dataLocacao ">Consultar</span>
              </h3>
            </div>
        </div>
    
      </header> 
  );
}

export default App;
