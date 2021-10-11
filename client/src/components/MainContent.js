import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function MainContent() {
  return (
    <div className="itemCard">
      <img src="https://t1.daumcdn.net/cfile/blog/1440AD344D06487323" alt="목업용 이미지"/>
      <h3 className="itemCardTitle">붕어붕어 빙수</h3>
      여름에는 시원한 붕어팥빙수!
    </div>
  )
};

export default MainContent;