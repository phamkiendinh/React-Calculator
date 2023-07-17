function Header() {
  return (
    <div className="Header">
      <div className="mx-2 mt-2 d-flex container-fluid">
        <div className="symbols w-50">
          <i className="fa fa-calculator" style={{ color: "red"}} id="cal-symbol"></i>
          <span className="text fw-bold">Calculator</span>
        </div>

        <div className="options w-50 overflow-hidden d-flex justify-content-end">
          <button className="btn btn-sm btn-warning border-1 border-black mx-1">
            <i className="fa fa-window-minimize m-auto p-auto"></i>
          </button>
          <button className="btn btn-sm btn-primary border-1 border-black mx-1">
            <i className="fa fa-window-maximize m-auto p-auto"></i>
          </button>
          <button className="btn btn-sm btn-danger border-1 border-black mx-1">
            <i className="fa fa-window-close m-auto p-auto"></i>
          </button>
        </div>
      </div>

      <div className="container-fluid mt-2">
        <button className="btn btn-sm border-1 border-black mx-1">
          <i className="fa fa-bars m-auto p-auto"></i>
        </button>
        <span className="text fw-bold fs-5">Standard</span>
        <button className="btn btn-sm border-1 border-black mx-5">
          <i className="fa fa-expand m-auto p-auto"></i>
        </button>
        <button className="btn btn-success border-1 border-black float-end">
          <i className="bi bi-arrow-counterclockwise"></i>
        </button>
      </div>
    </div>
  );
}

export default Header;
