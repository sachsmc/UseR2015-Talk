
var margin = {top: 75, right: 50, bottom: 200, left: 50},
    width = 960 - margin.left - margin.right,
    height = 350 - margin.bottom - margin.top;

var x = d3.scale.linear()
    .domain([0, 100])
    .range([0, width]);

var brush = d3.svg.brush()
    .x(x)
    .extent([0, 0])
    .on("brush", brushed);

var svg = d3.select("#approaches-to-interactive-graphs").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


	ticklook = function(d){
		if(d < 25){
			return "data";
		} else if(d < 50){
			return "analysis";
		} else if(d < 75){
			return "rendering";
		} else {
			return "interactivity";
		}
		
	}

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (height+20) + ")")
    .call(d3.svg.axis()
      .scale(x)
      .orient("bottom")
	  .tickValues([15, 40, 60, 85])
      .tickFormat(function(d) { return ticklook(d); })
      .tickSize(0)
      .tickPadding(12))
  .select(".domain")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "halo");

svg.append("svg:image").attr("transform", "translate(" + (width-50) + ", -50)")
   .attr('width', 50)
   .attr('height', 50)
	.attr("xlink:href","js.png");

svg.append("svg:image").attr("transform", "translate(0, -50)")
   .attr('width', 50)
   .attr('height', 50)
	.attr("xlink:href","Rlogo.png");

var slider = svg.append("g")
    .attr("class", "slider")
    .call(brush);

slider.selectAll(".extent,.resize")
    .remove();

slider.select(".background")
    .attr("height", height);

var handle = slider.append("circle")
    .attr("class", "handle")
    .attr("transform", "translate(0," + (height+20) + ")")
    .attr("r", 9);

slider
    .call(brush.event).transition() // gratuitous intro!
    .duration(750)
    .call(brush.extent([70, 70]))
    .call(brush.event);


var Rrect = svg.append("rect").attr("class", "rrect")
	.attr("width", width/2)
		.attr("height", height).attr("fill", "#2A6AB1");
	
var Jsrect = svg.append("rect").attr("class", "jsrect").attr("width", width/2)
	.attr("transform", "translate(" + width/2 + ", 0)")
		.attr("height", height).attr("fill", "#F0DB4F");

svg.append("")

function brushed() {
  var value = brush.extent()[0];

  if (d3.event.sourceEvent) { // not a programmatic event
    value = x.invert(d3.mouse(this)[0]);
    brush.extent([value, value]);
  }

  d3.select(".rrect").attr("width", x(value));
  d3.select(".jsrect").attr("width", width - x(value))
  	.attr("transform", "translate(" + x(value) + ", 0)");
  handle.attr("cx", x(value));

  if (value < 60){
	  d3.select("#second").transition(50).attr("opacity", 0);
	  d3.select("#third").transition(50).attr("opacity", 0);
	  d3.select("#first").transition(150).attr("opacity", 1);
  } else if (value >= 60 & value < 80){
	  d3.select("#second").transition(150).attr("opacity", 1);
	  d3.select("#third").transition(50).attr("opacity", 0);
	  d3.select("#first").transition(50).attr("opacity", 0);
  } else if (value >= 80) {
	  d3.select("#second").transition(50).attr("opacity", 0);
	  d3.select("#third").transition(150).attr("opacity", 1);
	  d3.select("#first").transition(50).attr("opacity", 0);
  }
  
}