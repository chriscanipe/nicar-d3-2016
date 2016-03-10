
### Intro to D3 with a simple Scatterplot!

In this exercise, we'll build an animated scatterplot showing win totals vs team payrolls for every team in Major League Baseball between 2012 and 2015. The data comes from baseball-reference.com.

For the sake of cramming this all into a 1-hour tutorial, we've combined the data into a single CSV file, which can be found here: `data/mlb.csv`.


#### Starting a simple server

In order to serve static files like our JavaScript files, CSS stylesheets and CSV data files so our browser can use them to build our page, we're going to start up a local server.

1. Open up a command prompt. 

In Windows, click `Start` and search for `Command prompt`.

On a Mac, click `Terminal` under `Applications` > `Utilities`.

2. Navigate to the directory where you downloaded and unzipped this repository. You'll use the command `cd <folder name>` to navigate the directory tree one folder at a time. (Helpful hint `cd ..` takes you back up the directory tree one folder.)

3. To start your simple server enter the command `python -m SimpleHTTPServer`. (If you happen to have Python 3 installed, the command is now `python -m http.server`)

Good to go.



