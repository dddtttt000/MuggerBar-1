import React, { useState } from "react";

function Withdrawal({ showModalHandler }) {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="modal-back">
      <div className="modal-wrap">
        <div className="modal-x" onClick={showModalHandler}>
          <i class="fas fa-times-circle"></i>
        </div>
        <div className="modal-text">탈퇴하시겠습니까?</div>
        <div className="">
          <button className="modal-btn-y">네, 탈퇴합니다.</button>
          <button className="modal-btn-c" onClick={showModalHandler}>
            취소
          </button>
        </div>
        <div className="modal-info">
          회원 탈퇴 시 모든 개인정보는 삭제됩니다.
        </div>
      </div>
    </div>
  );
}

export default Withdrawal;
