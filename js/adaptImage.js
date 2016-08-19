function adaptImage(image, width, height) {
    // 作業場所としてのCanvasを作成
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    var workspace = new createjs.Stage(canvas);
    var bitmap = new createjs.Bitmap(image);

console.log("width = "+width);
console.log("height = "+height);
console.log("image.width = "+image.width);
console.log("image.height = "+image.height);

    // フィットさせたいコンテナ（？）と、画像の「横長ぐあい」を計算
    var aspectRatio = width / height;
    var imageAspectRatio = image.width / image.height;
    if (imageAspectRatio < aspectRatio) {
        // コンテナの方が、より横長
        // だから、幅をフィットさせる。画像の上下にはみ出す部分を落とすことになる
        var scale = width / image.width;
    } else {
        // 画像の方が、より横長
        // だから、高さをフィットさせる。画像の左右にはみ出す部分を落とすことになる
        var scale = height / image.height;
    }
    bitmap.scaleX = bitmap.scaleY = scale;

    // デフォルトでは、画像は左上を合わせて、右下部分がトリミングされるので、
    // 位置をずらして「作業場所Canvas」と中心を揃えるように移動させる
    bitmap.x = (canvas.width - bitmap.scaleX * image.width) / 2;
    bitmap.y = (canvas.height - bitmap.scaleY * image.height) / 2;

    // 作業場所Canvasに実際にレンダリングする
    workspace.addChild(bitmap);
    workspace.update();

    // 画像を作って返す
    //var adaptedImage = new Image();
    //adaptedImage.src = canvas.toDataURL();
    return  canvas.toDataURL();
}