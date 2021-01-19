const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.100);
/*
PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
fov — Camera frustum vertical field of view.
aspect — Camera frustum aspect ratio.
near — Camera frustum near plane.
far — Camera frustum far plane.
*/
const renderer = new THREE.WebGLRenderer();//Web Graphic Library is powerful for 2,3D
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement);
const geometry = new THREE.BoxGeometry(1,1,1);//depth,width,height
const material = new THREE.MeshBasicMaterial( {color:0x0000ff} );//use for color
const cube = new THREE.Mesh(geometry,material);//Mesh for create cube
scene.add(cube);

camera.position.z = 5;

function animate(){
  requestAnimationFrame(animate);

  cube.rotation.x +=0.01;
  cube.rotation.x +=0.01;

  renderer.render(scene,camera);
}
animate();
