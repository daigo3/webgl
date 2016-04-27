'use strict';

// 頂点シェーダ
const VSHADER_SOURCE = `
void main() {
  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
  gl_PointSize = 10.0;
}`;

// フラグメントシェーダ
const FSHADER_SOURCE = `
void main() {
  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}`;

function main() {
  const canvas = document.getElementById('webgl');
  let gl = getWebGLContext(canvas);

  if(!gl) {
    console.log('fail');
    return;
  }

  // シェーダの初期化
  if(!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('fail to initialize shaders');
    return;
  }

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // 描画
  gl.drawArrays(gl.POINTS, 0, 1);
}

main();