// Step 1 - Use the D3 library to read in samples.json. Day 3 activity 6
// need python -m http.server to load in data locally
// http://localhost:8000/index.html
// get data and console.log it
d3.json('samples.json').then((samples => console.log(samples)));
// above would look like below if not in arrow function
//  function(samples) {
//      console.log(samples)
//  };
// Once data is loaded will need to create variable for loaded data done is above as sample




// initialize the page with default charts Day 2 Activity 8,9 - use subject 940 to populate
// then add data to drop down so user can dynamically adjust the charts Day 2 activity 7  
// use selDataset for id
function init(){
    var selector = d3.select("selDataset");
        //Grab values from samples.json 
        d3.json("samples.json").then((sample) => {
            var sampleIDNames = sample.names;
            console.log("IDs ", sampleIDNames);
            sampleIDNames.forEach((entry) => {
                selector.append("option").text(entry).property("value");
            })
            //build chart with first id name
            buildPlot(sampleIDNames[0]);
        });
    };

init();

// Step 2 - Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// Use sample_values as the values for the bar chart
// Use otu_ids as labels for the bar chart
// Use otu_labels as the hovertext for the chart




// Step 3 - Create a bubble chart that displays each sample.
// https://plotly.com/javascript/bubble-charts/#hover-text-on-bubble-charts
// Use otu_ids for the x values.
// Use sample_values for the y values.
// Use sample_values for the marker size.
// Use otu_ids for the marker colors.
// Use otu_labels for the text values



// Step 4 - Dispaly the sample metadata, ie, individuals demographic information




// Step 5 - Display each key-value pair from the metada JSON object somewhere on the page. day 2 activtity 9 for restyle/relayout




// Step 6 - Update all the plots any time a new sample is selected. Day 2 Activity 9 - restyle

// Bonus: guage: https://plotly.com/javascript/gauge-charts/