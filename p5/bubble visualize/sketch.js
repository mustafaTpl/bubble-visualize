lines = [];

function setup() {
  createCanvas(200, 200);
  for (let index = 0; index < width; index++) {
    lines.push(index);
    //console.log(lines[index]);
  }
  for (let index = 0; index < lines.length; index++) {
    lines[index] = random(height) | 0;
    //console.log(lines[index]);
  }
}

function draw() {
  background(0);
  for (let index = 0; index < lines.length; index++) {
    stroke(255)
    line(index, height, index, height - lines[index]);  
  }
  var i = -1

  if (i <= lines.length) {
    i++
    for (let j = 0, index = 0; j < lines.length-i-1; j++, index++) {
      let a = lines[j]
      let b = lines[j+1]

      if (a > b) {    
        let temp = lines[j];
        lines[j] = lines[j+1];
        lines[j+1] = temp;
        //console.log(lines);
      }
    }
  }
}
