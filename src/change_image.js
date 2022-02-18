const canvas1 = (p)=>{
  p.setup = () => {
    p.createCanvas(100, 100);
    p.background(0);
  };

  p.draw = () => {
    p.fill(200);
    p.stroke(0);
    p.rect(20, 20, 20, 20);
  };
}

const change_img = ()=>{
  console.log("hrer")
  new p5(canvas1,"canvas1")
}