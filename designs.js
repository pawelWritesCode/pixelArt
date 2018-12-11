
function init() {
  $('#sizePicker').submit(function(e) {
    var heightCountNumber;
    var widthCountNumber;
    var gridWidth = $('#input_width').val();
    var gridHeight = $('#input_height').val();
    gridHeight = gridHeight*1;
    gridWidth *= 1;
    e.preventDefault();
    $('#tableContainer').html('<table id="tab"></table>');
    tab = $('#tab');

      tab.append(function () {
        heightCountNumber = 400/(gridHeight);
        widthCountNumber = 400/gridWidth;
        for(var i = 1; i <= gridHeight; i++) {
          tab.append('<tr id="'+ i +'"></tr>');
        }
        for(var j = 1; j<=gridWidth; j++) {
          $('tr').append('<td></td>');
        }
        $('td').css("width", widthCountNumber);
        $('td').css("height", heightCountNumber-1);

        $( "td" ).click(function() {
          var color = $('#colorPicker').val();
          $( this ).css('background-color', color);
        });

        $( "td" ).hover(function() {
          $( this ).toggleClass('active');
        }, function() {
          $(this).toggleClass('active');
        })
      });
    });
  }
