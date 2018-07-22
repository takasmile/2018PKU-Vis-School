let svgWidth = 800;
let svgHeight = 800;

let svg = d3.select('body')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);


d3.csv('data_01.csv', (error, data) => {
  if (error) console.log('error accured!');

  let teamsInYear = [];
  var dataInYear = d3.nest()
    .key(function (d) { return d.years; })
    .entries(data);

  console.log(dataInYear);
  for (let i in dataInYear) {
    let temp = dataInYear[i]
    let tempYearCountry = {};
    tempYearCountry.year = temp.key;
    tempYearCountry.team_a_s = [];
    tempYearCountry.team_b_s = [];
    for (let j in temp.values) {
      let tempj = temp.values[j];
      push_noRepeat(tempYearCountry.team_a_s, tempj.team_a);
      push_noRepeat(tempYearCountry.team_a_s, tempj.team_b);
    }
    teamsInYear.push(tempYearCountry)
  }
})

//无重复地插入数组
function push_noRepeat (array, value) {
  if (!(array.indexOf(value) + 1)) {
    array.push(value);
  }
}

