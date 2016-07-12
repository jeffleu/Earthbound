var battle = () => {
  d3.select('.battle').html('');

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
        .attr('x', 700)
        .attr('y', 550)
        .attr('height', 200)
        .attr('width', 200)
        .attr('xlink:href', '../img/ness-battle.png');
    }
  };

  var initialize = () => {
    nessBattle.place();
  };

  initialize();
};

var switchToBattle = function() {
  window.location = '#/battle';
  setTimeout(function() {
    battle();
  }, 100)
};
