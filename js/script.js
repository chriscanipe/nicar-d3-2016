
/* SET UP GLOBALS */
/* Define global variables for width, height and margins */
/* Define x and y axis and their paremeters */
/* Create the SVG space on the page. */








/* GET THE DATA */
/* Load the data from `data/mlb.csv` */
/* Make sure our numerical values are stored as numbers */
/* Set the domain of each scale (x & y) to the highest and lowest possible values */
/* Call separate functions to set up the chart and to update it */

/* This is an ajax call to load our csv-formatted data */
d3.csv("data/mlb.csv", function(error, data) {

  console.log("Hello, data:");
  console.log(data);

});




/* DRAW THE PARTS OF THE CHART THAT DON'T CHANGE */
/* The x and y axis are static elements in that they dont change with new data */
/* So we draw them first */

function chartInit() {}





/* DRAW THE DATA POINTS ONTO THE CHART */
/* We'll draw a circle for each team in the dataset along with the 3-letter abbr for team name */

function chartUpdate() {}














