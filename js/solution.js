
/* Set the margins and widths as global variables to be referenced as needed */
var margin = {top: 20, right: 60, bottom: 30, left: 100},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

/* Set the x scale as "linear" (as opposed to time or ordinal) */
/* And apply it to the available space we've reserved */
/* The range is a pixel value => the amount of space we'll use for our x axis */
var x = d3.scale.linear()
    .range([0, width]);

/* Do the same with the y scale, mapped to the available height */
var y = d3.scale.linear()
    .range([height, 0]);

/* Axis are automated in D3, so you don't have to draw and place numbers and hash marks */
/* We all the svg.axis() function and pass the scales as arguments. */
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

/* Tick format allows us to control how the tick labels appear 
/* Handy for units like currencies and percentages */
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(function(d) {
      return "$"+d/1000000+"M";
    });


/* This is where we draw our svg canvas. SVG is a markup element, so we just append it to our target div */
/* In this case, it's a div called .chart */
/* We use the margins and transforms to draw a smaller canvas inside of the target div and to center it appropriately */
var svg = d3.select(".chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

/* This is an ajax call to load our csv-formatted data */
d3.csv("data/mlb.csv", function(error, data) {

  /* Since we're using csv, all values are automatically strings. */
  /* So we loop through the data and cast our charting values as numbers */
  /* D3 lets us do that with `+` signs. */
  data.forEach(function(d) {
    d.Wins = +d["Wins"];
    d.Pay = +d["Est. Payroll"];
  });

  /* We want to assign domains to our x and y scales. */
  /* Domains are the lowest and highest possible values in the data set. */
  /* We find these values by checking a nested property from each object in the array using `d3.extent()` */
  x.domain(d3.extent(data, function(d) { return d.Wins; })).nice();
  y.domain(d3.extent(data, function(d) { return d.Pay; })).nice();



  //Draw the axis for the charts.
  chartInit();

  //Draw the datapoints in a separate function.
  //We separate this in case we need to update the data
  //Without redrawing the axis.
  chartUpdate(data);



});


function chartInit() {

    //Append the x axis to the chart.
  svg.append("g")
      .attr("class", "x axis")
      // Translate is an SVG property that helps us move the X axis below the chart.
      .attr("transform", "translate(0," + height + ")") 
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", width) // width represents the farthest point right on our chart
      .attr("y", -6)
      .style("text-anchor", "end") // Anchoring the text to the end lets us flow it left from that end point.
      .text("Wins");

  //Append the y axis to the chart.
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)") // Rotate is another SVG property.
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Payroll")

      
}




function chartUpdate(data) {

  // d3.nest lets us break our data into 4 separate years.
  // We're basically reorganizing 120 rows (30 MLB teams x 4 years)
  // Into 4 arrays of 30 teams, with "Year" as the object key.
  var nestedData = d3.nest()
    .key(function(d) { return d.Year; })
    .map(data);

  //Now we can target a single year of the data.
  var currYearData = nestedData["2015"];




  // This is where the magic happens, where we actually create elements on the page
  // using our data. Let's break it down.
  
  // SELECT 
  // First we select the elements we're going to create.
  // That may sound a little weird since these elements don't exist yet,
  // but just hang with it.
  svg.selectAll(".dot")
  // JOIN 
  // Now we join our data to those elements. This creates a one-to-one relationship
  // between each data point and element that represents it, in this case a dot!
      .data(currYearData)
  // ENTER 
  // This is where d3 is amazing. It knows to check the page, and if there are more data points
  // than elements representing them, it adds them to the page.
    .enter().append("circle")
      // Here on out, we're just adding properties to the elements we just created.
      .attr("class", "dot")
      .attr("r", 3.5)
      .attr("cx", function(d) { return x(d.Wins); })
      .attr("cy", function(d) { return y(d.Pay); })
      .style("fill", "#999");

  svg.selectAll(".name")
      .data(currYearData)
    .enter().append("text")
      .attr("class", "name")
      .attr("x", function(d) { return x(d.Wins) + 5; })
      .attr("y", function(d) { return y(d.Pay); })
      .text(function(d) {
        return d.Tm;
      })
}



