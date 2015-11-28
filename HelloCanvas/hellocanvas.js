'use strict';

(() => {
  let gl = WebGLUtils.setupWebGL(document.getElementById('webgl'));

  if(!gl) {
    console.log('WebGLコンテキスト取得失敗');
    return false;
  }

  // 描画領域をクリアするのに使う色を指定する
  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  // 描画領域をクリア（塗りつぶす）する
  // COLOR_BUFFER_BITは3DCGの描画領域であるカラーバッファを指す
  // カラーバッファに描画された内容がCanvasに表示される仕組み
  gl.clear(gl.COLOR_BUFFER_BIT);
})();