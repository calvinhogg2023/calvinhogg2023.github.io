const overlay = document.getElementById("overlay");

window.addEventListener('load', () => {
	document.body.style.opacity = '1';
});

history.scrollRestoration = 'auto';





var element1 = document.getElementById("projectBackground");
var element2 = document.getElementById("projectContent");

$('.modal').on('show.bs.modal', function (e) {
	element1.classList.add("modal-greyscale");
	element2.classList.add("modal-greyscale");
})

$('.modal').on('hide.bs.modal', function (e) {
	element1.classList.remove("modal-greyscale");
	element2.classList.remove("modal-greyscale");
})






const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 96;
const currentFrame = index => (
  `preview2/${index.toString().padStart(4, '0')}.jpg`
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
