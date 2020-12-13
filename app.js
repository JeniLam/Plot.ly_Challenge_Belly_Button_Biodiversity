// Step 1 - Use the D3 library to read in samples.json. Day 3 activity 6
// need python -m http.server to load in data locally
// http://localhost:8000/index.html

d3.json('data/samples.json').then((samples)) => {
    console.log(samples);
 
};
// Once data is loaded will need to create variable for loaded data

// then add data to drop down so user can dynamically adjust the charts Day 2 activity 7

// initialize the page with default charts Day 2 Activity 8,9
// function init() 




// Step 2 - Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// Use sample_values as the values for the bar chart
// Use otu_ids as labels for the bar chart
// Use otu_labels as the hovertext for the chart




// Step 3 - Create a bubble chart that displays each sample.
// Use otu_ids for the x values.
// Use sample_values for the y values.
// Use sample_values for the marker size.
// Use otu_ids for the marker colors.
// Use otu_labels for the text values



// Step 4 - Dispaly the sample metadata, ie, individuals demographic information




// Step 5 - Display each key-value pair from the metada JSON object somewhere on the page.




// Step 6 - Update all the plots any time a new sample is selected.