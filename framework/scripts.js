// const renderImage2 = {
// 	1:'assets/preview/0001.png',
// 	2:'assets/preview/0002.png',
// 	3:'assets/preview/0003.png',
// 	4:'assets/preview/0004.png',
// 	5:'assets/preview/0005.png',
// 	6:'assets/preview/0006.png',
// 	7:'assets/preview/0007.png',
// 	8:'assets/preview/0008.png',
// 	9:'assets/preview/0009.png',
// 	10:'assets/preview/0010.png',
// 	11:'assets/preview/0011.png',
// 	12:'assets/preview/0012.png',
// 	13:'assets/preview/0013.png',
// 	14:'assets/preview/0014.png',
// 	15:'assets/preview/0015.png',
// 	16:'assets/preview/0016.png',
// 	17:'assets/preview/0017.png',
// 	18:'assets/preview/0018.png',
// 	19:'assets/preview/0019.png',
// 	20:'assets/preview/0020.png',
// 	21:'assets/preview/0021.png',
// 	22:'assets/preview/0022.png',
// 	23:'assets/preview/0023.png',
// 	24:'assets/preview/0024.png',
// }

// const step = 20;
//
// function trackScrollPosition() {
// 	const y = window.scrollY;
// 	const label = Math.min(Math.floor(y/20) + 1, 20);
// 	const imageToUse = renderImage2[label];
// 	$('.renderImage').css('background-image',`url('${imageToUse}')`);
// }
//
// $(document).ready(()=>{
// 	$(window).scroll(()=>{
// 		trackScrollPosition();
// 	})
// })


// window.addEventListener('scroll', () => {
//   const scrollTop = html.scrollTop;
//   const maxScrollTop = html.scrollHeight - window.innerHeight;
//   const scrollFraction = scrollTop / maxScrollTop;
//   const frameIndex = Math.min(
//     frameCount - 1,
//     Math.floor(scrollFraction * frameCount)
//   );
// });

const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 24;
const currentFrame = index => (
  `preview/${index.toString().padStart(4, '0')}.png`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width=500;
canvas.height=600;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()
