import React from "react";

function WelcomeModal() {
  return (
    <div className="modal-back">
      <div className="welcome-wrap">
        <div className="modal-x">
          <i class="fas fa-times-circle"></i>
        </div>
        <div className="welcome-img"></div>
        <div className="welcome-text">가입이 완료되었습니다.</div>
        <button className="welcome-btn">확인</button>
      </div>
    </div>
  );
}

export default WelcomeModal;
