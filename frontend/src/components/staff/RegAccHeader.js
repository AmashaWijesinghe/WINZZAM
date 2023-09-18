import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { BsBell } from 'react-icons/bs';
import profile from '../../assets/profile.png';
import './Staff_Header.css';
import styled from 'styled-components';

const HeaderView = styled.div`
	 height: 100px;
`;
const Cards = styled.h1`
	 position: relative;
     right: 23rem;

`;
const RegAccHeader = () => {
  return (
    <HeaderView className=' d-flex align-items-center justify-content-between'>
    <div className="right">
        <h1 className='name fw-medium d-inline-flex px-3'>Tuition Masters </h1>
    </div>
    <Cards className="mx-auto pb-5 mt-5 text-start ">
      <h1 className='fw-medium text-light bg-info py-4 px-2  rounded-4'>115 Tuition Masters</h1>
    </Cards>
    <div className="left d-flex px-3">
        <div className="notification px-1 d-flex align-items-center justify-content-center">
            <BsBell></BsBell>
        </div>
        <div className="ecprofile d-flex align-items-center justify-content-center flex-row">
          <div className="profile-photo px-1 m-2">
            <img src={profile} alt="" style={{ height: "50px", width: "50px" }} />
          </div>
          <div className="info d-flex align-items-center justify-content-center">
            <div className="name fw-medium">
                <small className='role'></small>
                <p className='text-info'></p>
                
            </div>
           
            

          </div>
        </div>
    </div>
</HeaderView>
  )
}

export default RegAccHeader