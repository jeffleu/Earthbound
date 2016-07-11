(() => {
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
        .attr('xlink:href', 'client/img/ness-walking-down.gif')
        .on('mouseover', () => {
          board.selectAll('.ness')
            .attr('xlink:href', 'client/img/ness-peace.png');
        })
        .on('mouseout', () => {
          board.selectAll('.ness')
            .attr('xlink:href', 'client/img/ness-walking-down.gif');
        })
        .on('click', () => {
          console.log(d3.select(this).attr('x') - 10);
        });
    },

    move: {
      left: () => {
        board.selectAll('.ness')
          .attr('x', +board.selectAll('.ness').attr('x') - 5);
      },
      up: () => {
        board.selectAll('.ness')
          .attr('y', +board.selectAll('.ness').attr('y') - 5);
      },
      right: () => {
        board.selectAll('.ness')
          .attr('x', +board.selectAll('.ness').attr('x') + 5);
      },
      down: () => {
        board.selectAll('.ness')
          .attr('y', +board.selectAll('.ness').attr('y') + 5);
      }
    }
  };

  // Move Ness
  d3.select('body')
    .on('keydown', () => {
      if (d3.event.keyCode === 37) {
        ness.move.left();
      } else if (d3.event.keyCode === 38) {
        ness.move.up();
      } else if (d3.event.keyCode === 39) {
        ness.move.right();
      } else if (d3.event.keyCode === 40) {
        ness.move.down();
      }
    });

  var runawayFive = {
    place: () => {
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
    move: () => {
      board.selectAll('.runawayFive')
        .transition().duration(14000)
        .attr('x', 1900)
        .attr('y', 225);
    }
  };

  var initialize = () => {
    ness.place();
    runawayFive.place();
    runawayFive.move();
  };

  initialize();
})();