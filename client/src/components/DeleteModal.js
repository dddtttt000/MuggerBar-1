import React from "react";

function DeleteModal({ showModalHandler, handleDelete }) {
  return (
    <div>
      <div className="modal-back">
        <div className="modal-wrap">
          <div className="modal-x" onClick={showModalHandler}>
            <i class="fas fa-times-circle"></i>
          </div>
          <div className="modal-text">삭제 하시겠습니까?</div>
          <div className="">
            <button className="modal-btn-y" onClick={handleDelete}>
              네, 삭제합니다.
            </button>
            <button className="modal-btn-c" onClick={showModalHandler}>
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
