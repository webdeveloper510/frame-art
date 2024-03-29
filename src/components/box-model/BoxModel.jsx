import React,{ useEffect } from 'react';
import './box-model.scss';
import Testing from '../../Test';
import UserContext from '../context/UserContext';
const BoxModel = () => {
 
  return (
    <div className="canvas"  camera={{ fov: 50, near: 0.1, far: 10, position: [0, 0, 0] }}
    style={{ height: '90vh' ,background:"#3d3d3d" }} id='prod-image'>
      <Testing />
          <script src="../node_modules/dat.gui/build/dat.gui.min.js" defer></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r72/three.min.js" defer></script>
      {/* <input type="file" name="" id="img-path" /> */}
    </div>
  )

};

export default BoxModel;