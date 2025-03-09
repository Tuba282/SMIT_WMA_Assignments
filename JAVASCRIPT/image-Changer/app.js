var wallpapers = [
    "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3YxMTI2LWQtMDAzNGUuanBn.jpg",
    "https://wallpapers.com/images/hd/aesthetic-panda-don-t-touch-phone-zavedbw1kp5a5zcv.jpg",
    "https://i.pinimg.com/736x/4e/9e/a8/4e9ea839c62bd77e5a093e78bafa9e65.jpg",
    "https://i.pinimg.com/736x/dd/97/59/dd975904e7238a3ace8638d1e3e2deab.jpg",
    "https://i.pinimg.com/736x/2b/de/40/2bde40714f9084e3ae5ce546ebd07e7a.jpg",
    "https://e0.pxfuel.com/wallpapers/124/369/desktop-wallpaper-naruto-iphone-cute-chibi-naruto.jpg",
    "https://img2.wallspic.com/previews/5/6/3/6/2/126365/126365-anime-art-mouth-cartoon-red-360x780.jpg",
    "https://i.pinimg.com/736x/03/3d/3c/033d3c141f51e8a0452693c8237b920d.jpg",
    "https://w0.peakpx.com/wallpaper/168/616/HD-wallpaper-dragon-ball-z-kakarot-game-poster.jpg",
    "https://wallpapercave.com/wp/wp7228266.jpg",
    "https://i.pinimg.com/236x/31/13/5b/31135beaed82ffbb94c2bb399258adfc.jpg",
    "https://i.pinimg.com/736x/7b/87/26/7b87264d0a9c90c98eee17b9f647f7a8.jpg",
    "https://i.pinimg.com/564x/b3/8e/09/b38e09ecf83ab0740281cb01013f7cbb.jpg",
    "https://e0.pxfuel.com/wallpapers/834/854/desktop-wallpaper-girls-japan-anime-for-iphone-android-phone-swag-anime-girl-thumbnail.jpg",
    "https://i.pinimg.com/736x/d4/4d/5b/d44d5bf50622d3af3968eae694a66cbf.jpg",
    "https://i.pinimg.com/736x/42/93/a2/4293a2e1775ac7adafeb0a75e3038af0.jpg",
    "https://i.pinimg.com/originals/39/13/58/391358d7d3413f946811eea3de6b6ddf.jpg",
    "https://wallpapers.com/images/hd/cute-olaf-zeb7c0d05i27kaj6.jpg",
    "https://i.redd.it/zxfrwb9xs5651.jpg",
    "https://i.pinimg.com/736x/aa/a8/ed/aaa8ed60904b404171b69731bc5dee49.jpg",
    "https://w0.peakpx.com/wallpaper/356/280/HD-wallpaper-aesthetic-study-notes.jpg",
    "https://i.pinimg.com/736x/aa/0b/c7/aa0bc7601622c46dcc2e9032d9ee29a4.jpg",
    "https://i.pinimg.com/736x/de/cc/b3/deccb3c138486db956533a2bbd42d8ef.jpg",
]
var colors = ["#9C826B", '#3F443E', "#434E51", "#281818", "#A39094", "#F7A736", "#501A30", '#FF470B', '#5E4630', '#79A448', "#8B8064", "#5A5955", "#D9AD88", "#978E8F", "#9CC661", "#F0A6A3", "#32586F", "#D27F61", "#6E4955", "#473F34", "#925F66", "#8E5C45", "#BF9C7E"
]

var phone = document.querySelector(".phone")

function generateRandomNum() {
    return Math.floor(Math.random() * wallpapers.length);
}

phone.addEventListener('click', function () {
    var randomWallpaper = generateRandomNum();

    document.querySelector(".phone").style.backgroundImage = `url(${wallpapers[randomWallpaper]})`;

    document.body.style.backgroundColor = colors[randomWallpaper]



});