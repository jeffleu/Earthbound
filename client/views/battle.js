var battle = () => {
  // d3.select('.main').html('');

  var boardDimensions = {
    height: 750,
    width: 1550
  };

  var board = d3.select('.battle').append('svg')
    .attr('class', 'map')
    .attr('width', boardDimensions.width)
    .attr('height', boardDimensions.height)
    .style('background-image', 'url("../img/battle-bg.jpg")');

  var nessBattle = {
    place: () => {
      board.selectAll('.nessBattle').data([{x: 0, y: 0}])
        .enter() 
        .append('image')
        .attr('class', 'nessBattle')
        .attr('x', 300)
        .attr('y', 225)
        .attr('height', 200)
        .attr('width', 200)
        .attr('xlink:href', 'url("../img/ness-battle.png")');
    }
  };

  // var initialize = () => {

  // };

  // initialize();
};