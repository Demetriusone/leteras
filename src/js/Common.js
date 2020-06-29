import objectFitImages from 'object-fit-images';
import objectFitVideos from 'object-fit-videos';
import { $scrolledElements, $body, Resp, detectIE } from './_helpers';




export class Common {
  constructor() {
    this.init();
  }

  init() {
    objectFitImages();
    objectFitVideos();
    this.screenScroll();
    this.expandText();
    this.addClassIE();
  }

  addClassIE() {
    if (detectIE()) $body.addClass('is-ie');
  }

  screenScroll() {
    const $btn = $('.screen__descr-btn');

    $btn.on('click', function () {
      const offsetTop = Resp.isDesk ? 70 : 60;
      $scrolledElements.animate({
        scrollTop: $('#pass').offset().top - offsetTop
      }, 2000);
      return false;
    });
  }

  expandText() {
    const $btn = $('.js-expand-btn');

    $btn.each(function (i, $btn) {
      $($btn).on('click', (e) => {
        const $this = $(e.currentTarget);
        $this.parent().prev().slideDown();
        $this.parent().addClass('hidden');
      });
    });
  }
}

export default new Common();

window.addEventListener('scroll', () => {
  let commonScroll = window.scrollY;
  console.log(commonScroll)
  document.querySelectorAll('.section').forEach((el,i) => {
    if(el.offsetTop - document.querySelector('.nav').clientHeight <= commonScroll) {
      document.querySelectorAll('.nav__menu a').forEach((el) => {
        if(el.classList.contains('active')) {
          el.classList.remove('active');
        }
      });
      document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active')
    }
   })
})



// window.addEventListener('scroll', () => {
// 	let scrollDistance = window.scrollY;

// 	if (window.innerWidth > 768) {
// 		document.querySelectorAll('.section').forEach((el, i) => {
// 			if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
// 				document.querySelectorAll('.nav a').forEach((el) => {
// 					if (el.classList.contains('active')) {
// 						el.classList.remove('active');
// 					}
// 				});

// 				document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
// 			}
// 		});
// 	}
// });

