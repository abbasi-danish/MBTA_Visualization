// Immediately Invoked Function Expression to limit access to our 
// variables and prevent 
((() => {

  // Load the data from a json file (you can make these using
  // JSON.stringify(YOUR_OBJECT), just remove the surrounding "")
  d3.json("data/data.json", (data) => {

    // General event type for selections, used by d3-dispatch
    // https://github.com/d3/d3-dispatch
    const dispatchString = "selectionUpdated";

    // Create a line chart given x and y attributes, labels, offsets; 
    // a dispatcher (d3-dispatch) for selection events; 
    // a div id selector to put our svg in; and the data to use.
    // let mbtaLine = linechart()
      // .xLabel("YEAR")
      // .yLabel("POVERTY RATE")
      // ("#linechart", data);

    // let mbtaMap = nodelinkmap()
    //   ("#nodelinkmap", data);

    //   let mbtaBar = barchart()
    //   ("#barchart", data);
  });

})());