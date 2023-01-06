let FirstSection = document.getElementById('FirstSection')
let SecondSection = document.getElementById('SecondSection')
let ThirdSection = document.getElementById('ThirdSection')

let FirstHead = document.getElementById('FirstHead')
let SecondHead = document.getElementById('SecondHead')
let ThirdHead = document.getElementById('ThirdHead')

let Firstimg = document.getElementById('Firstimg')
let Secondimg = document.getElementById('Secondimg')
let Thirdimg = document.getElementById('Thirdimg')

FirstSection.classList.add('default');
SecondSection.classList.add('default');
ThirdSection.classList.add('default');

FirstHead.classList.add('defaultfont');
SecondHead.classList.add('defaultfont');
ThirdHead.classList.add('defaultfont');

Firstimg.classList.add('defaultimg');
Secondimg.classList.add('defaultimg');
Thirdimg.classList.add('defaultimg');

FirstSection.onclick = () => {
  FirstSection.classList.toggle('effect-1');

  FirstSection.classList.toggle('default');
  SecondSection.classList.toggle('default');
  ThirdSection.classList.toggle('default');


  SecondHead.classList.toggle('defaultfont');
  ThirdHead.classList.toggle('defaultfont');
  Secondimg.classList.toggle('defaultimg');
  Thirdimg.classList.toggle('defaultimg');

  SecondSection.classList.toggle('effect-2');
  ThirdSection.classList.toggle('effect-2');

  FirstHead.classList.toggle('font');
  SecondHead.classList.remove('font');
  ThirdHead.classList.remove('font');

  SecondHead.classList.toggle('effect-3');
  ThirdHead.classList.toggle('effect-3');

  Secondimg.classList.toggle('effect-4');
  Thirdimg.classList.toggle('effect-4');
}

SecondSection.onclick = () => {
  SecondSection.classList.toggle('effect-1');

  SecondSection.classList.toggle('default');
  FirstSection.classList.toggle('default');
  ThirdSection.classList.toggle('default');

  FirstHead.classList.toggle('defaultfont');
  ThirdHead.classList.toggle('defaultfont');

  Firstimg.classList.toggle('defaultimg');
  Thirdimg.classList.toggle('defaultimg');

  FirstSection.classList.toggle('effect-2');
  ThirdSection.classList.toggle('effect-2');

  FirstHead.classList.remove('font');
  SecondHead.classList.toggle('font');
  ThirdHead.classList.remove('font');

  FirstHead.classList.toggle('effect-3');
  ThirdHead.classList.toggle('effect-3');

  Firstimg.classList.toggle('effect-4');
  Thirdimg.classList.toggle('effect-4');
}

ThirdSection.onclick = () => {
  ThirdSection.classList.toggle('effect-1');

  ThirdSection.classList.toggle('default');
  FirstSection.classList.toggle('default');
  SecondSection.classList.toggle('default');

  FirstHead.classList.toggle('defaultfont');
  SecondHead.classList.toggle('defaultfont');

  Firstimg.classList.toggle('defaultimg');
  Secondimg.classList.toggle('defaultimg');

  FirstSection.classList.toggle('effect-2');
  SecondSection.classList.toggle('effect-2');

  FirstHead.classList.remove('font');
  SecondHead.classList.remove('font');
  ThirdHead.classList.toggle('font');

  FirstHead.classList.toggle('effect-3');
  SecondHead.classList.toggle('effect-3');

  Firstimg.classList.toggle('effect-4');
  Secondimg.classList.toggle('effect-4');
}