(function() {
  var boardDimensions = {
    height: 750,
    width: 1550
  };

  var board = d3.select('.main').append('svg')
    .attr('class', 'map')
    .attr('width', boardDimensions.width)
    .attr('height', boardDimensions.height)
    .style('background-image', 'url("client/img/onett.jpg")');

  var ness = {
    place: () => {
      board.selectAll('.ness').data([{x: 0, y: 0}])
        .enter() 
        .append('image')
        .attr('class', 'ness')
        .attr('x', 807)
        .attr('y', 225)
        .attr('height', 30)
        .attr('width', 30)
        .attr('xlink:href', 'client/img/ness-walking.gif')
        .on('mouseover', function() {
          board.selectAll('.ness')
            .attr('xlink:href', 'client/img/ness-peace.png');
        })
        .on('mouseout', function() {
          board.selectAll('.ness')
            .attr('xlink:href', 'client/img/ness-walking.gif');
        })
        .on('click', function() {
          console.log(d3.select(this).attr('x') - 10);
        });
    },
    move: {
      left: function() {
        board.selectAll('.ness')
          .attr('x', board.selectAll('.ness').attr('x') - 5);
      },
      up: function() {
        board.selectAll('.ness')
          .attr('y', board.selectAll('.ness').attr('y') - 5);
      },
      right: function() {
        board.selectAll('.ness')
          .attr('x', board.selectAll('.ness').attr('x') + 5);
      },
      down: function() {
        board.selectAll('.ness')
          .attr('y', board.selectAll('.ness').attr('y') + 5);
      }
    }
  };

  // Move Ness
  d3.select('body')
    .on('keydown', function() {
      if (d3.event.keyCode === 37) {
        ness.move.left();
      } else if (d3.event.keyCode === 38) {
        ness.move.up();
      } else if (d3.event.keyCode === 39) {
        ness.move.right();
      } else if (d3.event.keyCode === 40) {
        ness.moveown();
      }
    });

  var runawayFive = {
    place: function() {
      board.selectAll('.runawayFive').data([{x: 0, y: 0}])
        .enter() 
        .append('image')
        .attr('class', 'runawayFive')
        .attr('x', 270)
        .attr('y', 225)
        .attr('height', 80)
        .attr('width', 80)
        .attr('xlink:href', 'client/img/runaway5.png');
    },
    move: function() {
      board.selectAll('.runawayFive')
        .transition().duration(14000)
        .attr('x', 1900)
        .attr('y', 225);
    }
  };

  var initialize = function() {
    ness.place();
    runawayFive.place();
    runawayFive.move();
  };

  initialize();
})();