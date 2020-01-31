import React from "react";
import "./Modal.scss";
export default ({ modalStatus, modalClose }) => {
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
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
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
