// Step 1 - Use the D3 library to read in samples.json. Day 3 activity 6
// need python -m http.server to load in data locally
// http://localhost:8000/index.html
// get data and console.log it
d3.json('samples.json').then((data => console.log(data)));
// above would look like below if not in arrow function
//  function(samples) {
//      console.log(samples)
//  };

// initialize the page with default charts Day 2 Activity 8,9 - use subject 940 to populate
// then add data to drop down so user can dynamically adjust the charts Day 2 activity 7  
// use selDataset for id
function init(){
    var selector = d3.select("selDataset");
        //Grab values from samples.json 
        d3.json("samples.json").then((data) => {
            var sampleIDNames = data.names;
            console.log("IDs ", sampleIDNames);
            sampleIDNames.forEach((sample) => {
                selector.append("option").text(sample).property("value");
            })
            //build chart with first id name
            buildPlot(sampleIDNames[0]);
        });
    };

init();
// still need to get the array into the dropdown and initialize charts with ID 940

//Event listener function #2
function optionChanged(newSample) {
    //recall function inside option change (buildPlot(neewsample))
        buildPlot(newSample);
    };


// Step 2 - Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// Use sample_values as the values for the bar chart
// Use otu_ids as labels for the bar chart
// Use otu_labels as the hovertext for the chart
function buildPlot(sample) {
    d3.json('samples.json').then((data => {
    //Filter function matching the id
        var samples = data.samples 
        var filteredData = samples.filter(sampleID => sampleID.id === samples[0])
        console.log(filteredData);
        //Use sample_values as the values for the bar chart.
        var sample_values = filteredData.sample_values;
        console.log(sample_values);
        //Use otu_ids as the labels for the bar chart.
        var otu_ids = filteredData.otu_ids;
        console.log(otu_ids);
        //Use otu_labels as the hovertext for the chart.
        var otu_labels = filteredData.otu_labels;
        console.log(otu_labels);
        //trace, layout go here *****USE SLICE & REVERSE to display top 10 OTUs
        let trace1 = {
            x: sample_values,
            y: otu_ids,
            text: otu_labels,
            type: 'bar',
            orientation: 'h'
        };
        let layout = {
            xaxis: { title: "Sample Values" },
            yaxis: { title: "OTU IDs" }
        };
        Plotly.newPlot("bar",trace1, layout);
    })); 
};


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