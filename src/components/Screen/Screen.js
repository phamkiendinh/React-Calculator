function Screen({screen, result}) {
    return (
      <div className="Screen container-fluid bg-danger">
        <h1 className="d-flex justify-content-end" id="result-info">{result.result}</h1>
        <h1 className="d-flex justify-content-end" id="result" defaultValue={""}>{screen.screenState}</h1>
      </div>
    );
  }
  
export default Screen;
  