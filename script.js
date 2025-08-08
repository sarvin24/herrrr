const crtLoveTL = () => {
  const move = 1000;
  const easing = "sin.inOut";

  const heart = document.querySelector(".heart");
  const text = document.querySelector(".text");
  const lines = document.querySelectorAll(".line");
  const blop = document.getElementById("blop");

  return new mojs.Timeline().add([
    new mojs.Tween({
      duration: move,
      easing,
      onUpdate: (p) => {
        heart.style.transform = `scale(${1 + p * 0.3})`;
        text.style.opacity = p;
        lines.forEach(line => line.style.opacity = 1 - p);
      },
      onComplete: () => {
        blop.play();
      },
    }),
  ]);
};

window.onload = () => {
  crtLoveTL().play();
};
