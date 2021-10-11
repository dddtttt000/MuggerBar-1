import React, { useState } from "react";

function Footer() {
  return (
    <footer>
      <div className="ft-wrap">
        <div className="ft-bloc">
          <div className="ft-logo"></div>
          <div className="ft-text">First Recipe Since 2021</div>
          <a href="#" className="ft-contact">
            Contact
          </a>
          <div className="ct-img">
            <i class="fab fa-github"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
