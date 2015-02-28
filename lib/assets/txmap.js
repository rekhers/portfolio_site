


//Width and height
var w = 600;
var h = 500;
var data;

function quantize(d) {
  return "q" + Math.min(8, ~~(data[d.id] * 9 / 12)) + "-9";
}


var projection = d3.geo.albers()
.scale(2000)
.translate([900, 300]);

//Define path generator
var path = d3.geo.path()
.projection(projection);

console.log('ello ello');

 

//Create SVG element
var svg = d3.select("#texas-map")
			.append("svg")
			.attr("width", w)
			.attr("height", h);		


		var counties = svg.append("g")
		    .attr("id", "counties")
		    .attr("class", "Blues");

//Load in GeoJSON data
			
			
			
d3.json("tx_counties.geojson", function(json){
	

	//Bind data and create one path per GeoJSON feature
	svg.selectAll("path")
	   .data(json.features)
	   .enter()
	   .append("path")				
   		.attr("class", "county")
	    .attr("d", path)
		

		.on("mouseover", function(d){
				d3.select("#tooltip")
				.style("left", (d3.event.pageX) + "px")     
             	.style("top", (d3.event.pageY - 90) + "px")
				.select("#city-label")	
				.html("<strong>" + d.properties.COUNTY + "</strong>")
			d3.select("#tooltip").classed("hidden", false);					  
				 })
		 
			.on("mouseout", function() {
			d3.select("#tooltip").classed("hidden", true);
								
				  })
				  
			.on("click", function(d){
				d3.select(this)
				.style("fill", "purple")
			})
		
		});
		
		


	