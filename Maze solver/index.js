let template = document.getElementById('app');
let animations = document.getElementById('animations');

const matrix = [
    [1, 1, 1, 1, 0, 0, 1, 0, 1, 1],
    [1, 0, 0, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  ];
  
var start = [2, 1];
var end = [7, 8];
function bfs(position, end) {
  var queue = [];

  matrix[position[0]][position[1]] = 3;

  
  queue.push([position]);

  while (queue.length > 0) {
    var path = queue.shift();
    var pos = path[path.length-1];
    var direction = [
      [pos[0] + 1, pos[1]],
      [pos[0], pos[1] + 1],
      [pos[0] - 1, pos[1]],
      [pos[0], pos[1] - 1]
    ];

    for (var i = 0; i < direction.length; i++) {
      if (direction[i][0] == end[0] && direction[i][1] == end[1]) {
        return path.concat([end]); 
      }
      
      if (direction[i][0] < 0 || direction[i][0] >= matrix[0].length 
          || direction[i][1] < 0 || direction[i][1] >= matrix[0].length 
          || matrix[direction[i][0]][direction[i][1]] != 0) { 
        continue;
      }

      matrix[direction[i][0]][direction[i][1]] = 2;
      queue.push(path.concat([direction[i]])); 
    }
    
  }
  


}

var path = bfs(start, end); 
console.log(JSON.stringify(path));


let size = 50;

let height = matrix.length;
let width = matrix[0].length;

let canvas = document.createElementNS('http://www.w3.org/2000/svg' , 'svg');
canvas.setAttribute('width' , width*size);
canvas.setAttribute('height' , height*size);


let appendElement = (canvas , node ,matrix) => {
    if(matrix[node.y][node.x] === 1){
        let blockRef = document.createElementNS('http://www.w3.org/2000/svg' , 'rect');
        blockRef.setAttribute('height' ,size.toString());
        blockRef.setAttribute('width' ,size.toString());
        blockRef.setAttribute('x' ,node.x*size);
        blockRef.setAttribute('y' ,node.y*size);
        blockRef.setAttribute('fill' ,'red');
        canvas.appendChild(blockRef);
    }

    if(matrix[node.y][node.x] === 0){
        let blockRef = document.createElementNS('http://www.w3.org/2000/svg' , 'rect');
        blockRef.setAttribute('height' ,size.toString());
        blockRef.setAttribute('width' ,size.toString());
        blockRef.setAttribute('x' ,node.x*size);
        blockRef.setAttribute('y' ,node.y*size);
        blockRef.setAttribute('fill' ,'gray');
        canvas.appendChild(blockRef);
        
    }

    if(matrix[node.y][node.x] === 2){
        let blockRef = document.createElementNS('http://www.w3.org/2000/svg' , 'rect');
        blockRef.setAttribute('height' ,size.toString());
        blockRef.setAttribute('width' ,size.toString());
        blockRef.setAttribute('x' ,node.x*size);
        blockRef.setAttribute('y' ,node.y*size);
        blockRef.setAttribute('fill' ,'grey');
        canvas.appendChild(blockRef);
    }

    if(matrix[node.y][node.x] === 3){
      let blockRef = document.createElementNS('http://www.w3.org/2000/svg' , 'rect');
      blockRef.setAttribute('height' ,size.toString());
      blockRef.setAttribute('width' ,size.toString());
      blockRef.setAttribute('x' ,node.x*size);
      blockRef.setAttribute('y' ,node.y*size);
      blockRef.setAttribute('fill' ,'green');
      canvas.appendChild(blockRef);
  }

    if(matrix[node.y][node.x] === path[path.length-1]){
      let blockRe1 = document.createElementNS('http://www.w3.org/2000/svg' , 'rect');
      blockRef.setAttribute('height' ,size.toString());
      blockRef.setAttribute('width' ,size.toString());
      blockRef.setAttribute('x' ,node.x*size);
      blockRef.setAttribute('y' ,node.y*size);
      blockRef.setAttribute('fill' ,'purple');
      canvas.appendChild(blockRef);
  }
    
}

matrix.map((row, y, arr)=>{
    row .map((col, x) =>{
        appendElement(canvas , {x,y} ,matrix);
    })  
})


template.appendChild(canvas);

