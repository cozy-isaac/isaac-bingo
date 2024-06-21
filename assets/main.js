$(document).ready(function() {
    
    writeSquares();
    
    $("#squares-list-print-setting").click(function() {
       $("#squares-list").toggleClass("hide-print"); 
    });
    
});

function clearBingoSquares() {
    $( ".bingo-square" ).removeClass( "highlight" );
    $(".btn.clear-highlighting").removeClass("btn--red");
}

function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function writeSquares() {
    
    var squares = $("li").toArray();

    var shuffledArray = shuffleArray(squares);


    document.getElementById('bingo-card-squares').innerHTML = '';

    for(var i=0;i<25;i++) {
        var message;

        message ='<div class="bingo-square bingo-square-'+ i +'"><div class="bingo-square-content"><div class="table"><div class="table-cell">';
        //free space
        if (i==12) {
            message +=  freeSpaceEmoji + 'FREE<br />SPACE';
        }
        else {
            message +=  i + shuffledArray.[i].innerHTML;
        }

        message += '</div></div></div></div>';



        document.getElementById('bingo-card-squares').innerHTML += message;
        
        $(".btn.clear-highlighting").removeClass("btn--red");

    }

    document.getElementById('bingo-card-squares').innerHTML += '<div class=".clear"></div>';
    
    $( ".bingo-square" ).click(function() {
        $( this ).toggleClass( "highlight" );
        $(".btn.clear-highlighting").addClass("btn--red");
        
        if ( !$(".bingo-square.highlight").length ) {
            $(".btn.clear-highlighting").removeClass("btn--red");
        }
    });
}


