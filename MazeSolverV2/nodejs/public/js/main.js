/*      Includes    */


$(document).ready(function() {
    var gg = new GridGenerator("parent_div",100,100);
    gg.createGrid();




    $("td").on("mousedown mouseover", function (e) {
        if (e.buttons == 1 || e.buttons == 3) 
        {
            e.preventDefault();
            $(this).css({
                backgroundColor: gg.getColor()
            });
            console.log(pointerEventToXY(e)); // will return obj ..kind of {x:20,y:40}

            if(gg.isStart())
            {
                gg.startingPoint =  $(this) ;
                gg.removeStart();
            } 
            if(gg.isEnd())
            {
                gg.endingPoint =  $(this) ;
                gg.removeEnd();
            }
        }
    });

    $("button").on("click", function (e) {
        switch (this.id)
        {
            case 'clear_button': gg.clearGrid();
            break;
        
            case 'wall_button': gg.setColor('grey');
            break;
        
            case 'path_button': gg.setColor('');
            break;
        
            case 'start_button': gg.setStart();
            break;
        
            case 'end_button': gg.setEnd();
            break;

            case 'find_path': gg.findOpenPaths();
            break;

            case 'prepare_graph_button': gg.insertAllVerticesAndEdges();
            break;
        
            default:  
                        alert( this.id );
        }
    });
}); 