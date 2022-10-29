import React from "react";

export const BadList = ({ badList, switchTask }) => {
  return (
    <div className="col-md">
      <h2 className="text-center">Bad List</h2>
      <hr />
      <table className="table table-striped table-hover">
        <tbody id="bad-task">
          {badList.map((item, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{item.task}</td>
                <td>{item.hr}</td>
                <td class="text-end">
                  <button onClick="deleteTask({i})" class="btn btn-danger">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                  <button onClick={() => switchTask(i)} class="btn btn-success">
                    <i class="fa-solid fa-right-long"></i>
                  </button>
                </td>
              </tr>
            );
          })}
          ;
        </tbody>
      </table>
      <div className="text-end fw-bold">
        You could have saved = <span id="totalBadHr">0</span> Hrs
      </div>
    </div>
  );
};
