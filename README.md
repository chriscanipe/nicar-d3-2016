
### Intro to D3 with a simple Scatterplot!

In this exercise, we'll build an animated scatterplot showing win totals vs team payrolls for every team in Major League Baseball in 2015. The data comes from baseball-reference.com.

For the sake of cramming this all into a 1-hour tutorial, we've combined the data into a single CSV file, which can be found here: `data/mlb.csv`.


#### Starting a simple server

In order to serve static files like our JavaScript files, CSS stylesheets and CSV data files so our browser can use them to build our page, we're going to start up a local server.

1. Open up a command prompt. 

In Windows, click `Start` and search for `Command prompt`.

On a Mac, click `Terminal` under `Applications` > `Utilities`.

2. Navigate to the directory where you downloaded and unzipped this repository. You'll use the command `cd <folder name>` to navigate the directory tree one folder at a time. (Helpful hint `cd ..` takes you back up the directory tree one folder.)

3. To start your simple server enter the command `python -m SimpleHTTPServer`. (If you happen to have Python 3 installed, the command is now `python -m http.server`)

Good to go.

#### Things we covered in this session:
1) Using global `width`, `height` and `margin` variables to define our working space.
2) Defining x and y scales to return pixel values for each data point in our set.
3) Defning the `range` (available pixel space) and `domain` (lowest and highest values`) for our scales based on our data.
4) Using the `d3.svg.axis()` method to build super-sexy x and y axes.
5) Drawing svg elements (circles) to the page based on a set of data.

#### EXTRA BONUS CONTENT:
The `js/solution.js` file contains a fully-documented version of the script we built in class plus some extra functionality we didn't quite get to. You can see the fully-functional chart here, and find the full code in the project repo.




