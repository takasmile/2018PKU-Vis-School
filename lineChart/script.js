var svg = d3.select("svg"),
  margin = { top: 20, right: 20, bottom: 30, left: 50 },
  width = +svg.attr("width") - margin.left - margin.right,
  height = +svg.attr("height") - margin.top - margin.bottom,
  g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var parseTime = d3.time.format("%d-%b-%y").parse

var x = d3.time.scale()
  .rangeRound([0, width]);

var y = d3.scale.linear()
  .rangeRound([height, 0]);

var xAxis = d3.svg.axis()
  .scale(x)
  .orient("bottom");

var yAxis = d3.svg.axis()
  .scale(y)
  .orient("left");

var line = d3.svg.line()
  .x(function (d) { return x(d.date); })
  .y(function (d) { return y(d.close); })

d3.csv("./data.csv", function (error, data) {
  if (error) throw error;

  x.domain(d3.extent(data, function (d) { return d.date; }));
  y.domain(d3.extent(data, function (d) { return d.close; }));

  g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .select(".domain")
    .remove();

  g.append("g")
    .call(yAxis)
    .append("text")
    .attr("fill", "#000")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "0.71em")
    .attr("text-anchor", "end")
    .text("Price ($)");

  g.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", 1.5)
    .attr("d", line);
});
