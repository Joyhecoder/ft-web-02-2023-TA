import React from 'react';
import './styles.css';
import stamp from './stamp2.png';

const Envelope = ({senderName, senderAddress, senderCity, name, address, city}) => {
  return (
    <>
      <div className="envelope m-3">
          <div className="envelope-to">
              <div>
                <b>{senderName}</b> <br />
                {senderAddress} <br />  
                {senderCity}
              </div>

              <span className="imgCont">
                <img src={stamp} alt="" />
              </span>
          </div>

          <div className="envelope-from">
            <span>
                <b>{name}</b> <br />
                {address} <br />  
                {city}
            </span>
          </div>
      </div>
    </>
  )
}

export default Envelope
