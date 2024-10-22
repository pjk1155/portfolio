
import * as THREE from 'three';
import {GLTFLoader} from "gltf";
import {OrbitControls} from "orbit";

window.addEventListener('load',function(){
init()
})

async function init(){


// 1. 렌더러
const canvas = document.querySelector('#canvas')

const renderer = new THREE.WebGLRenderer({
    antialias:true,
    alpha:true,
    canvas
})

const wid = window.innerWidth * 0.9
const hei = window.innerHeight * 0.8

    renderer.setSize(wid, hei)
    
    renderer.outputEncoding = THREE.sRGBEncoding;


// 2. scene
const scene = new THREE.Scene();

// 3. 카메라
const camera = new THREE.PerspectiveCamera( 75, wid/ hei,  1, 500 );
camera.position.set(-4,3,3)
const controls = new OrbitControls( camera, renderer.domElement );
controls.enableZoom = false
controls.autoRotate = true

const progressBar = document.querySelector( '#progress-bar' );

const progressBarContainer = document.querySelector( '#progress-bar-container' );

const loadingManager = new THREE.LoadingManager();
//LoadingManager() : THREE.js에서 제공되는 태그

loadingManager.onProgress = ( url, loaded, total ) => {
  progressBar.value = ( loaded / total ) * 100; //현재진행률
};

loadingManager.onLoad = () => {
  //loadingManager가 모두 load 되면( = : 대입연산자 )
  progressBarContainer.style.display = 'none';
};



// 4. 오브젝트
const gltfLoader = new GLTFLoader(loadingManager);
const gltf = await gltfLoader.loadAsync('./gltf/scene.gltf')
const canon = gltf.scene

canon.traverse(object => {
    if (object.isMesh){
    }
})

scene.add(canon)

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
scene.add( directionalLight );

const light = new THREE.DirectionalLight( 0xFFFFFF );
scene.add( light );
light.position.set(0,5,0)
const light2 = new THREE.DirectionalLight( 0xFFFFFF );
scene.add( light2 );
light2.position.set(0,-5,0)
const light3 = new THREE.DirectionalLight( 0xFFFFFF );
scene.add( light3 );
light.position.set(-5,0,-5)

const geometry = new THREE.CircleGeometry( 4, 32 ); 
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } ); 

// 5. 반응형 코드
render();

  function render() {
    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(render);
  }

  function handleResize() {
    camera.aspect = wid/ hei ;
    
    camera.updateProjectionMatrix();
    
    renderer.setSize(wid/ hei );

    renderer.render(scene, camera);
  }

  window.addEventListener('resize', handleResize);
}

$(document).ready(function(){
  $(window).resize(function(){
      document.location.reload()
    })

  let wt = $(window).width();
  if(wt > 1200){
   pc()
  }else{
   mo()
  }
  function pc(){
    gsap.from('.row1', 3,{
      autoAlpha:0, x:100, duration:2,
      scrollTrigger:{
          trigger:'.row1',
          start:'top 70%',
          end:'top 50%',
          scrub:true,
      }
    })
    
    gsap.from('.row2', 3,{
      autoAlpha:0, x:-100, duration:2,
      scrollTrigger:{
          trigger:'.row2',
          start:'top 70%',
          end:'top 50%',
          scrub:true,
      }
    })
    
    gsap.from('.row3', 3,{
      autoAlpha:0, x:100, duration:2,
      scrollTrigger:{
          trigger:'.row3',
          start:'top 70%',
          end:'top 50%',
          scrub:true,
      }
    })
    gsap.from('.row4', 3,{
      autoAlpha:0, x:-100, duration:2,
      scrollTrigger:{
          trigger:'.row4',
          start:'top 70%',
          end:'top 50%',
          scrub:true,
      }
    })
    gsap.from('.row5', 3,{
      autoAlpha:0, x:100, duration:2,
      scrollTrigger:{
          trigger:'.row5',
          start:'top 70%',
          end:'top 50%',
          scrub:true,
      }
    })
    gsap.from('.row6', 3,{
      autoAlpha:0, x:-100, duration:2,
      scrollTrigger:{
          trigger:'.row6',
          start:'top 70%',
          end:'top 50%',
          scrub:true,
      }
    })
    
  }
  function mo(){
    $('.ham').on('click',function(){
      $(this).parent().siblings('.menu').slideToggle()//css('right',0)
    })
    gsap.from('.row1', 3,{
      autoAlpha:0, y:100, duration:2,
      scrollTrigger:{
          trigger:'.row1',
          start:'top 70%',
          end:'top 50%',
          scrub:true,
      }
    })
    
    gsap.from('.row2', 3,{
      autoAlpha:0, y:100, duration:2,
      scrollTrigger:{
          trigger:'.row2',
          start:'top 70%',
          end:'top 50%',
          scrub:true,
      }
    })
    
    gsap.from('.row3', 3,{
      autoAlpha:0, y:100, duration:2,
      scrollTrigger:{
          trigger:'.row3',
          start:'top 70%',
          end:'top 50%',
          scrub:true,
      }
    })
    gsap.from('.row4', 3,{
      autoAlpha:0, y:100, duration:2,
      scrollTrigger:{
          trigger:'.row4',
          start:'top 70%',
          end:'top 50%',
          scrub:true,
      }
    })
    gsap.from('.row5', 3,{
      autoAlpha:0, y:100, duration:2,
      scrollTrigger:{
          trigger:'.row5',
          start:'top 70%',
          end:'top 50%',
          scrub:true,
      }
    })
    gsap.from('.row6', 3,{
      autoAlpha:0, y:100, duration:2,
      scrollTrigger:{
          trigger:'.row6',
          start:'top 70%',
          end:'top 50%',
          scrub:true,
      }
    })
  }
})