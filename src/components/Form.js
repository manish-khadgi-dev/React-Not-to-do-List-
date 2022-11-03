import React from "react";

export const Form = () => {
  return (
    <div>
      <form>
        <div className="row mt-3 g-2">
          <div className="col-md-6">
            <input
              name="task"
              type="text"
              className="form-control"
              placeholder="Task Name"
              required
            />
          </div>

          <div className="col-md-3">
            <input
              name="hr"
              type="number"
              className="form-control"
              min="1"
              placeholder="Hours Spent"
              required
            />
          </div>

          <div className="col-md-3 d-grid gap-2">
            <button className="btn btn-primary">
              <i className="fa-regular fa-plus"></i> Add new Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
