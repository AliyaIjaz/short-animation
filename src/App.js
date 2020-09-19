import React, {useEffect} from 'react';
import useWebAnimation from '@wellyshen/use-web-animations';
import './App.css';
import Fish from './Assets/fish1.gif';
import Ray from './Assets/ray.gif';
import Starfish from './Assets/starfish.gif';
import Seahorse from './Assets/seahorse.gif';
import Diver1 from './Assets/scubadiver1.gif';
import Diver2 from './Assets/scubadiver2.gif';



function App() {


  var animation1 = [
    { transform: 'translateX(-100%)' },
    { transform: 'translateX(800%)' }
  ];

  var animation2 = [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-600%)' }
  ];

  var movementTime = {
    duration: 12000,
    iterations: Infinity
  };

  var diverMovementTime = {
    duration: 12000,
    iterations: Infinity
  };

  const fishMove= useWebAnimation({
    keyframes: animation1,
    timing:movementTime,
  });

  const diver1Move= useWebAnimation({
    keyframes: animation1,
    timing:diverMovementTime,
  });

  const diver2Move= useWebAnimation({
    keyframes: animation2,
    timing:diverMovementTime,
  });

  const rayMove= useWebAnimation({
    keyframes: animation2,
    timing:movementTime,
  });

  const seahorseMove= useWebAnimation({
    keyframes: [
      { transform: 'translateY(300%)' },
      { transform: 'translateY(-900%)' }
    ],
    timing:{
      delay: 3000,
      duration: 15000,
      iterations: Infinity
    },
  });

    

  useEffect(()=>{

    const diverMove1 = diver1Move.getAnimation();
    const diverMove2 = diver2Move.getAnimation();

    function adjustSpeed() {
      if (diverMove1.playbackRate > 1.2) {
        diverMove1.playbackRate = diverMove1.playbackRate / 2 ;
        diverMove2.playbackRate = diverMove2.playbackRate / 2 ;
      }
    } 
    adjustSpeed();

    setInterval(function () {
      if (diverMove1.playbackRate > 1) {
        diverMove1.playbackRate *= .9;
        diverMove2.playbackRate *= .9;
      }  
    }, 3000);

    var goFaster = function () {
      diverMove1.playbackRate *= 1.1;
      diverMove2.playbackRate *= 1.1;
    }

    document.addEventListener("click", goFaster);
    document.addEventListener("touchstart", goFaster);

  },[diver1Move,diver2Move]
  );

  return (
    <div className="wrapper">
      <div className="bg"></div>
      <div id="fish">
        <img ref={fishMove.ref} src={Fish} height={150} width={200} alt="Fish"></img>
      </div>
      <div id="ray">
        <img ref={rayMove.ref} src={Ray} height={200} width={300} alt="Ray"></img>
      </div>
      <div id="starfish">
        <img src={Starfish} width={200} height={200} alt="Star fish"></img>
      </div>
      <div id="seahorse">
      <img ref={seahorseMove.ref} src={Seahorse} width={200} height={200} alt="Sea horse"></img>
      </div>
      <div id="diver1">
        <img ref={diver1Move.ref} src={Diver1} width={300} height={200} alt="Scuba diver"></img>
      </div>
      <div id="diver2">
      <img ref={diver2Move.ref} src={Diver2} width={300} height={300} alt="Scuba diver"></img>
      </div>
    </div>
  );
}

export default App;
