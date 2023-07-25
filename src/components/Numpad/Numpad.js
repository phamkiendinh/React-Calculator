function Numpad({props}) {
    var mc = ["MC", "MR", "M+", "M-", "MS", "Mv"];
    var symbols = ["%", "CE", "C", "Back", "1/x", "x^2", "2/-x", "/", "7", "8", "9",
    "X", "4" , "5", "6", "-", "1", "2", "3", "+", "+/-", "0", ".", "="];
    var operation = ["/", "-", "+", "X"];
    var numpad = ["1", "2", "3", "4","5","6","7","8","9","0"];

    function handleClick(value) {
      if (value === "=") {
        if (props.operator !== '' && (props.left !== 0 || props.right !== 0)) {
          switch (props.operator) {
            case "+":
              props.setScreenState(props.left + props.right);
              props.setLeft(props.left + props.right);
              break;
              case "-":
              props.setScreenState(props.left - props.right);
              props.setLeft(props.left - props.right);
              break;
            case "X":
              props.setScreenState(props.left * props.right);
              props.setLeft(props.left * props.right);
              break;
              case "/":
                props.setScreenState(props.left / props.right);
                props.setLeft(props.left / props.right);
                break;
            default:
              break;
          }
          props.setResult(props.left + " " + props.operator + " " + props.right + " =");
          props.setOperator('');
          props.setRight(0);
        }
      }
      else {
        if (operation.indexOf(value) !== -1) {
          props.setOperator(value);
          if (props.left !== 0) {
            props.setResult(props.left + " " + value);
          }
          return;
        }

        if (numpad.indexOf(value) !== -1) {
          value = parseInt(value);
          if (props.left !== 0) {
            props.setRight(value);
            props.setResult(props.left + " " + props.operator + " " + value);
          }
          else {
            props.setLeft(value);
          }
          props.setScreenState(value);
        }

      }

    }

    return (
      <>
        <div className="container-fluid d-flex justify-content-between">
          {
            mc.map((value, index) => {
              return (
                <button className="btn btn-lg border border-light bg-light" key={value} onClick={() => handleClick(value)}>{value}</button>
              );
            })
          }
        </div>

        <div className="Numpad container-fluid">
        {symbols.map((value, index) => {
          if (value === "=") {
            return (
              <button className="numpad-button btn btn-primary border border-light mx-1" key={value} onClick={() => handleClick(value)}>{value}</button>
            );
          }
          return (
            <button className="numpad-button border border-light mx-1" key={value} onClick={() => handleClick(value)}>{value}</button>
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
  