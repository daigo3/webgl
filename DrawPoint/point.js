'use strict';

// 頂点シェーダ

var VSHADER_SOURCE = '\nvoid main() {\n  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n  gl_PointSize = 10.0;\n}';

// フラグメントシェーダ
var FSHADER_SOURCE = '\nvoid main() {\n  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n}';

function main() {
  var canvas = document.getElementById('webgl');
  var gl = getWebGLContext(canvas);

  if (!gl) {
    console.log('fail');
    return;
  }

  // シェーダの初期化
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('fail to initialize shaders');
    return;
  }

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // 描画
  gl.drawArrays(gl.POINTS, 0, 1);
}

main();
