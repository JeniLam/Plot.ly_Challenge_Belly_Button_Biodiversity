// Use the D3 library to read in samples.json. and use to build bar plot
// need python -m http.server to load in data locally
// http://localhost:8000/index.html


d3.json('samples.json').then((data) => {
    console.log(data);
    // samples= {id: "940", otu_ids: Array(80), sample_values: Array(80), otu_labels: Array(80)}
    var samples = data.samples;
    console.log(samples);

    var sampleValues = samples.filter(item => item.id === "940")[0].sample_values;
    console.log("Sample Values", sampleValues);

    var top10samples = sampleValues.slice(0, 10).reverse();
    console.log("Bar Chart Values", top10samples);

    var labels = samples.filter(item => item.id === "940")[0].otu_ids;
    console.log("OTU-IDS", labels);

    var top10Labels = labels.slice(0, 10).reverse();
    console.log("OTU Labels", top10Labels);

    var hover = samples.filter(item => item.id === "940")[0].otu_labels;
    console.log("Hover Text", hover);

    var top10Hover = hover.slice(0, 10).reverse();
    console.log("Top 10 Hover Text", top10Hover);

    // build chart
    var trace1 = {
        type: "bar",
        orientation: "h",
        x: top10samples,
        y: top10Labels,
    };

    var data = [trace1];

    var layout = {
        xaxis: {title: "Sample Values"},
        yaxis: {title: "out-ids"}
    };

    Plotly.newPlot("bar", data, layout);




    // use d3 to add test subject ID to drop down (need to loop through using forEach to get all in)
    var names = data.names;
    // https://alignedleft.com/tutorials/d3/binding-data/
    names.forEach((name) => {
        d3.select("#selDataset").append("option").text(name);
    });
});