function Numpad() {
    var mc = ["MC", "MR", "M+", "M-", "MS", "Mv"];
    var symbols = ["%", "CE", "C", "Back", "1/x", "x^2", "2/-x", ":", "7", "8", "9",
    "X", "4" , "5", "6", "-", "1", "2", "3", "+", "+/-", "0", ".", "="];

    return (
      <>
        <div className="container-fluid d-flex justify-content-between">
          {
            mc.map((value, index) => {
              return (
                <button className="btn btn-lg border border-light bg-light" key={"mc-" + value}>{value}</button>
              );
            })
          }
        </div>
        <div className="Numpad container-fluid">
        {symbols.map((value, index) => {
          if (value === "=") {
            return (
              <button className="numpad-button btn btn-primary border border-light mx-1" key={"cal-" + value}>{value}</button>
            );
          }
          return (
            <button className="numpad-button border border-light mx-1" key={"cal-" + value}>{value}</button>
            );
          })
        }
        </div>
      </>
    );
    // return (
    //   <div className="Numpad container-fluid">
    //     <button className="numpad-button border border-light">%</button>
    //   </div>
    // );
  }
  
export default Numpad;
  