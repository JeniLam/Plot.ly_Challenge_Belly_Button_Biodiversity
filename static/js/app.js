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

    var top10samples = sampleValues.slice(0,10).reverse();
    console.log(top10samples);

    var labels = top10samples.filter(item => item.id === "940")[0].otu_ids;
    console.log("OTU-IDS", labels);

    var hover = top10samples.filter(item => item.id === "940")[0].otu_labels;
    console.log("Hover Text", hover);


});