window.addEventListener('pageshow',function(e){
    console.time("VideoBg load");
    var mask = document.querySelector('.mask');
    mask.innerHTML = `
    <video id='Video-bg' autoplay loop muted 
        style=' min-width: 100%; 
                min-height: 100%; 
                height: auto; 
                width: 100%; 
                z-index: 1; 
                position: absolute ;
                top: -224px; 
                left: 0;'>
        <source src='https://lumi.mihoyo.com/medias/bgvideo.13edb8ad.mp4' type='video/mp4'  />
    </video>
    `;
    console.timeEnd("VideoBg load");
});