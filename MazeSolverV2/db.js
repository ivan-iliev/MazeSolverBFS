
/* In progress :)
function sendMaze(){
    
}

function loadMazes(){
    $(document).ready(function(){
        var rootRef = firebase.database().ref().child("Mazes");
        rootRef.on("child_added", snap => {
            $("#myTable").append(); 
        }); 
    })
}
*/