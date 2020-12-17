// Step 1 - Use the D3 library to read in samples.json. Day 3 activity 6
// need python -m http.server to load in data locally
// http://localhost:8000/index.html
// get data and console.log it - use data variable throughout the code. 
d3.json('samples.json').then((data => {
    console.log(data);

    var data = data;
    // use d3 to add test subject ID to drop down (need to loop through using forEach to get all in)
    var names = data.names;
    // https://alignedleft.com/tutorials/d3/binding-data/
    names.forEach((name) => {
		d3.select("#selDataset").append("option").text(name);
    })
    
}));