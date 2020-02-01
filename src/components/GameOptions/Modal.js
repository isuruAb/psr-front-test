import React from "react";
import "../../assets/styles/scss/GameOptions/Modal.scss";
export default ({ modalStatus, modalClose, modalData }) => {
  return (
    <>
      {modalStatus && (
        <div className="modal_wrapper">
          <div className="modal_container">
            {" "}
            <table>
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {modalData.length > 0 &&
                  modalData.map((data, idx) => {
                    return (
                      <tr key={idx}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.score}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <button onClick={modalClose} className="start_btn">
              Replay
            </button>
          </div>
        </div>
      )}
    </>
  );
};
