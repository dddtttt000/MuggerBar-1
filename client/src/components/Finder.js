import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Finder() {
  return(
    <div>
      <input type="file" />
      <input type="submit" value="첨부하기" />
    </div>
  )
};

export default Finder;