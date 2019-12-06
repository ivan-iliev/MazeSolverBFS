/*      Includes    */


$(document).ready(function() {
    var gg = new GridGenerator("parent_div",50,50);
    gg.createGrid();

    function addTableCellListners()
    {
        $("td").on("mousedown mouseover touchstart touchcancel", function (e) {

            if (e.buttons == 1 || e.buttons == 3 || e.touches != null)
            {
                e.preventDefault();
                $(this).css({
                    backgroundColor: gg.getColor()
                });
                console.log(pointerEventToXY(e)); // will return obj ..kind of {x:20,y:40}
                // $(this).unbind();
                if(gg.isStart())
                {
                    $(this).unbind();
                    gg.startingPoint =  $(this) ;
                    gg.removeStart();
                } 
                if(gg.isEnd())
                {
                    $(this).unbind();
                    gg.endingPoint =  $(this) ;
                    gg.removeEnd();
                }
            }
            
        });
        
    }

    addTableCellListners();



    $(".menu-button").on("click", function (e) {
        switch (this.id)
        {
            case 'clear_button': 
            gg.clearGrid();
            addTableCellListners();
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