import React, { useState } from "react";

function Footer() {
  return (
    <footer>
      <div className="ft-wrap">
        <div className="ft-bloc">
          {/* <div className="ft-logo"></div> -- footer 로고에도 메인페이지 링크 걸었습니다.*/}
          <a className="ft-logo" href="/">
            <div className="ft-logo"></div>
          </a>

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
