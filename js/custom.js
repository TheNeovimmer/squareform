/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Init Header
3. Menu
4. Staggered Blink Text
5. Lenis
6. Rellax
7. Moving Letters
8. Brands Slider
9. Magnet Button
10. Init Stats
11. Init Counter
12. Pixelate
13. Services
14. Progress Bars
15. Testimonials Slider
16. Init Accordion
17. Reveal Animation
18. Contact Form
19. Loader
20. Sticky Work
21. Sticky Tools
22. Sticky Tools Scale
23. Pricing Scaling
24. Marquee
25. Preview


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	let stickyTriggerWork;
	let rellax;
	let statsTrigger = [];
	let stickyTriggerTools = [];
	let p1, p2, p3;

	initHeader();
	initMenu();
	staggeredBlinkText();
	initLenis();
	initRellax();
	movingLetters();
	initBrandsSlider();
	initMagnetButton();
	initStats();
	initCounter();
	initPixelate();
	initServices();
	initPBars();
	initTestimonialsSlider();
	initAccordion();
	initReveal();
	initForm();
	initLoader();
	initStickyWork();
	initStickyTools();
	initStickyToolsScale();
	initPricing();
	initMarquee();
	initPreview();

	document.addEventListener("DOMContentLoaded", initMarquee);
	gsap.registerPlugin(ScrollTrigger);

	$(window).on('resize', function()
	{
		initHeader();
		ScrollTrigger.refresh();
		initRellax();
		initStickyWork();
		initStickyTools();
		initStickyToolsScale();
		initPreview();
	});

	$(document).on('scroll', function()
	{
		initHeader();
	});

	$(document).on('load', function()
	{
		initHeader();
	});

	/* 

	2. Init Header

	*/

	function initHeader()
	{
		const header = document.getElementById("header");
		if($(window).scrollTop() > 99)
		{
			header.classList.add('hidden');
		}
		else
		{
			header.classList.remove('hidden');
		}
		if($(window).scrollTop() > 180)
		{
			header.classList.add('scrolled');
		}
		else
		{
			header.classList.remove('scrolled');
		}
	}

	/* 

	3. Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			let hamburger = $('.hamburger');
			let menu = $('.menu');
			let menu_links = $('.menu_link');

			$('html').on('click', function()
			{
				menu.removeClass('active');
				hamburger.removeClass('active');
			});

			hamburger.on('click', function(event)
			{
				event.stopPropagation();
				menu.toggleClass('active');
				hamburger.toggleClass('active');
			});
			
			menu.on('click', function(event)
			{
				event.stopPropagation();
			});

			menu_links.on('click', function(event)
			{
				menu.toggleClass('active');
				hamburger.toggleClass('active');
			});
		}
	}

	/* 

	4. Staggered Blink Text

	*/

	function staggeredBlinkText()
	{
		let blinkTextMenuLinks = document.querySelectorAll(".blink-text");
		blinkTextMenuLinks.forEach((link) =>
		{
			// Split text into all characters (spaces included)
			let letters = [...link.textContent]; 
			link.textContent = "";

			letters.forEach((letter, i) =>
			{
				// If it's a space, just add a plain text node
				if (letter === " ")
				{
					link.append(document.createTextNode(" "));
					return;
				}

				// Same animation structure as your original code
				let span = document.createElement("span");
				let delay = (i + 1) / 40;

				if (i % 2 === 0) delay -= 0.1;
				else delay += 0.05;

				let letterOut = document.createElement("span");
				letterOut.textContent = letter;
				letterOut.style.transitionDelay = `${delay}s`;
				letterOut.classList.add("out");

				let letterIn = document.createElement("span");
				letterIn.textContent = letter;
				letterIn.style.transitionDelay = `${delay}s`;
				letterIn.classList.add("in");

				span.append(letterOut, letterIn);
				link.append(span);
			});
		});
	}

	/* 

	5. Lenis

	*/

	function initLenis()
	{
		const lenis = new Lenis(
		{
			autoRaf: true,
			lerp: 0.07,
			syncTouch: false
		});
	}

	/* 

	6. Rellax

	*/

	function initRellax()
	{
		if(rellax)
		{
			rellax.destroy();
		}
		let breakpoint = 768;
		if(window.innerWidth >= breakpoint)
		{
			rellax = new Rellax('.rellax');
		}
	}

	/* 

	7. Moving Letters

	*/

	function movingLetters()
	{
		const targets = document.querySelectorAll('.ml');
		if (!targets.length) return;

		// split text into letters + words
		targets.forEach(target =>
		{
			const words = target.textContent.trim().split(' ');
			target.innerHTML = words
			.map(word =>
			{
				const letters = word.split('')
				.map(letter => `<span class="letter">${letter}</span>`)
				.join('');
				return `<span class="word">${letters}</span>`;
			})
			.join('<span class="space">&nbsp;</span>');
		});

		// single IntersectionObserver for all
		const observer = new IntersectionObserver((entries, obs) =>
		{
			entries.forEach(entry =>
			{
				if (entry.isIntersecting)
				{
					animateLetters(entry.target);
					obs.unobserve(entry.target);
				}
			});
		}, { threshold: 0.5 }); // trigger once 50% visible

		targets.forEach(target => observer.observe(target));

		// GSAP animation
		function animateLetters(target)
		{
			const letters = target.querySelectorAll('.letter');

			gsap.set(letters,
			{
				opacity: 0,
				x: 40,
				willChange: 'transform, opacity'
			});

			// Staggered animation using GSAP (very GPU-friendly)
			gsap.to(letters,
			{
				x: 0,
				opacity: 1,
				ease: 'power2.out',
				duration: 0.8,
				stagger:
				{
					each: 0.03,
					from: 'start'
				}
			});
		}
	}

	/* 

	8. Brands Slider

	*/

	function initBrandsSlider()
	{
		if($('.brands_slider'))
		{
			let brands_slider = $('.brands_slider');
			brands_slider.owlCarousel(
			{
				items: 6,
				loop: true,
				margin: 8,
				nav: false,
				dots: false,
				autoplay: true,
				responsive:
				{
					0:
					{
						items: 1
					},
					320:
					{
						items: 2
					},
					500:
					{
						items: 3
					},
					769:
					{
						items: 4
					},
					992:
					{
						items: 5
					},
					1200:
					{
						items: 6
					}
				}
			});
		}
	}

	/* 

	9. Magnet Button

	*/

	function initMagnetButton()
	{
		const breakpoint = 768;
		
		$('.play-btn-container').mouseleave(function(e)
		{
			if(window.innerWidth >= breakpoint)
			{
				TweenMax.to(this, 0.3, {height: 400, width: 400});
				TweenMax.to('.play-btn', 0.3,{scale:1, x: 0, y: 0});
			}	
		});

		$('.play-btn-container').mouseenter(function(e)
		{
			if(window.innerWidth >= breakpoint)
			{
				TweenMax.to(this, 0.3, {height: 200, width: 200});
				TweenMax.to('.play-btn', 0.3,{scale:1.3});
			}
		});

		$('.play-btn-container').mousemove(function(e)
		{
			callParallax(e);
		});

		function callParallax(e)
		{
			if(window.innerWidth >= breakpoint)
			{
				parallaxIt(e, '.play-btn', 80);
			}
		}

		function parallaxIt(e, target, movement)
		{
			if(window.innerWidth >= breakpoint)
			{
				var $this = $('.play-btn-container');
				var relX = e.pageX - $this.offset().left;
				var relY = e.pageY - $this.offset().top;
			
				TweenMax.to(target, 0.3,
				{
					x: (relX - $this.width()/2) / $this.width() * movement,
					y: (relY - $this.height()/2) / $this.height() * movement,
					ease: Power2.easeOut
				});
			}	
		}
	}

	/* 

	10. Init Stats

	*/

	function initStats()
	{
		const breakpoint = 1380;

		if(window.innerWidth >= breakpoint)
		{
			const stats = gsap.utils.toArray('.stats_item');

			statsTrigger = ScrollTrigger.batch(stats,
			{
				start: "100px bottom",
				end: "100px top",
				once: true,
				onEnter: batch => {
					gsap.from(batch, 
					{
						duration: 0.6,
						opacity: 0,
						scale: 0.5,
						top: 50, 
						stagger: 0.15
					});
				}
			});
		}	
	}

	/* 

	11. Init Counter

	*/

	function initCounter()
	{
		let counters = document.querySelectorAll('.counter > span:first-child');

		counters.forEach(counter =>
		{
			gsap.from(counter, 
			{
				textContent: 0,
				duration: 3,
				scrollTrigger:
				{
					trigger: counter,
					start: "100px bottom",
					end: "100px top",
					toggleActions: "play none none false", 
					markers: false
				},
				ease: "power1.in",
				snap: { textContent: 1}
			});
		});
	}

	/* 

	12. Pixelate

	*/

	function initPixelate()
	{
		const articles = document.querySelectorAll('.work_item');

		articles.forEach(article =>
		{
			const figure     = article.querySelector('figure');
			const originalImg = figure.querySelector('img');
			if (!originalImg) return;

			let pix = null;
			let canvas = null;
			let currentAmount = 0;
			let lastUpdate = 0;
			const throttleDelay = 80;
			const exponent = 3;
			const minPixelation = 0.2;

			function createPixelate()
			{
				// Clean up previous
				if (canvas && canvas.parentNode) canvas.remove();
				pix = null;
				canvas = null;

				// Put image back
				if (!figure.contains(originalImg))
				{
					figure.appendChild(originalImg);
				}

				// Create instance
				pix = new Pixelate(originalImg, { amount: 0 });

				// Wait until everything is really ready
				const ensureReady = () =>
				{
					canvas = figure.querySelector('canvas');
					if
					(
						canvas &&
						originalImg.naturalWidth > 0 &&
						article.clientWidth > 0
					)
					{
						// NOW it's 100% safe
						canvas.style.position = 'absolute';
						canvas.style.inset = '0';
						canvas.style.width = '100%';
						canvas.style.height = '100%';
						canvas.style.objectFit = 'cover';
						canvas.style.pointerEvents = 'none';

						figure.style.position = 'relative';
						figure.style.overflow = 'hidden';

						pix.setWidth(article.clientWidth);
						pix.render();

						if (currentAmount > 0)
						{
							pix.setAmount(currentAmount).render();
						}
					}
					else
					{
						// Try again on next frame – this loop always resolves in < 50 ms
						requestAnimationFrame(ensureReady);
					}
				};

				requestAnimationFrame(ensureReady);
			}
			
			function calculatePixelation(e)
			{
				if (!canvas) return minPixelation;
				const rect = canvas.getBoundingClientRect();
				const centerX = rect.left + rect.width / 2;
				const centerY = rect.top + rect.height / 2;
				const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);
				const maxDistance = Math.hypot(rect.width / 2, rect.height / 2);
				const normalized = Math.min(distance / maxDistance, 1);
				const eased = 0.97 - Math.pow(normalized, exponent);
				return Math.max(eased, minPixelation);
			}

			const onEnter = () =>
			{
				currentAmount = minPixelation;
				if (pix) pix.setAmount(currentAmount).render();
			};
			const onMove = e =>
			{
				if (performance.now() - lastUpdate < throttleDelay) return;
				lastUpdate = performance.now();
				const amount = calculatePixelation(e);
				if (Math.abs(amount - currentAmount) > 0.01) {
					currentAmount = amount;
					if (pix) pix.setAmount(amount).render();
				}
			};
			const onLeave = () =>
			{
				currentAmount = 0;
				if (pix) pix.setAmount(0).render();
			};

			// Resize → recreate
			let resizeTimer;
			const handleResize = () =>
			{
				clearTimeout(resizeTimer);
				resizeTimer = setTimeout(createPixelate, 100);
			};
			window.addEventListener('resize', handleResize);
			new ResizeObserver(handleResize).observe(article);

			const start = () =>
			{
				// If image is already loaded and laid out → go immediately
				if (
					originalImg.complete &&
					originalImg.naturalWidth > 0 &&
					article.clientWidth > 0
				)
				{
					createPixelate();
				}
				else
				{
					// Otherwise wait for everything to be ready
					const waitAndStart = () =>
					{
						if(
							originalImg.naturalWidth > 0 &&
							article.clientWidth > 0
						)
						{
							createPixelate();
						}
						else
						{
							requestAnimationFrame(waitAndStart);
						}
					};
					requestAnimationFrame(waitAndStart);
				}
			};

			// Kick off
			if (document.readyState === 'complete')
			{
				start();
			}
			else
			{
				window.addEventListener('load', start);
			}

			// Mouse events on the container
			article.addEventListener('mouseenter', onEnter);
			article.addEventListener('mousemove', onMove);
			article.addEventListener('mouseleave', onLeave);
		});
	}

	/* 

	13. Services

	*/

	function initServices()
	{
		const services = document.querySelectorAll('.services_item');
		const pics = document.querySelectorAll('.service_image');

		services.forEach(service =>
		{
			service.addEventListener('mouseenter', function(e)
			{
				i = $(this).index();
				$('.services_item').removeClass('active');
				this.classList.toggle('active');

				$('.service_image').removeClass('front');
				pics[i].classList.add('front');
			});
		});
	}

	/* 

	14. Progress Bars

	*/

	function initPBars()
	{
		let pbars = document.querySelectorAll('.tools_bar > div');

		pbars.forEach(pbar =>
		{
			let pbar_width = pbar.getAttribute('data-pbar') + "%";
			gsap.to(pbar, 
			{
				duration: 1.5,
				width: pbar_width,
				scrollTrigger:
				{
					trigger: pbar,
					start: "100px bottom",
					end: "100px top",
					toggleActions: "play none none reverse", 
					markers: false
				},
				ease: "power1.in"
			});
		});
	}

	/* 

	15. Testimonials Slider

	*/

	function initTestimonialsSlider()
	{
		if($('.testimonials_slider'))
		{
			let slider = $('.testimonials_slider');
			let prev = $('#slider_nav_prev');
			let next = $('#slider_nav_next');

			slider.owlCarousel(
			{
				items: 3,
				loop: true,
				autoplay: true,
				nav: false,
				dots: false,
				margin: 8,
				responsive:
				{
					0:
					{
						items: 1
					},
					992:
					{
						items: 2
					},
					1400:
					{
						items: 3
					}
				}
			});

			prev.on('click', () =>
			{
				slider.trigger('prev.owl.carousel');
			});
			next.on('click', () =>
			{
				slider.trigger('next.owl.carousel');
			});
		}
	}

	/* 

	16. Init Accordion

	*/

    function initAccordion()
    {
		if($('#faq_accordion'))
		{
			const acc = $('#faq_accordion');
			acc.accordionjs(
			{
				closeAble: true,
				slideSpeed  : 200
			});
		}	
    }

	/* 

	17. Reveal Animation

	*/

	function initReveal()
	{
		let reveal = $('.reveal');
		reveal.each((ind, ele_1)=>
		{
			gsap.to(ele_1, 
			{
				scrollTrigger:
				{
					trigger: ele_1,
					start: "100px bottom",
					end: "100px top",
					toggleActions: "play none none none", 
					markers: false
				},
				duration: 0.7,
				opacity: 1
			});
		});
	}

	/* 

	18. Contact Form

	*/

	function initForm()
	{
		document.querySelector("#contact_form").addEventListener("submit", function (e)
		{
			e.preventDefault();
			document.querySelector(".form-status").textContent = "Message sent successfully!";
			document.querySelector(".form-status").classList.add("visible");
		});
	}

	/* 

	19. Loader

	*/

	function initLoader()
	{
		const loader = document.getElementById("loader");
		const body = document.querySelector("body");
		body.classList.add("preload-active");
		setTimeout(() =>
		{
			loader.classList.remove("active");
			body.classList.remove("preload-active");
		}, 1200);
	}

	/* 

	20. Sticky Work

	*/

	function initStickyWork()
	{
		if (stickyTriggerWork) stickyTriggerWork.kill();

		if (window.innerWidth > 991)
		{
			let sticky = $('.sticky');
			let h = "+=" + ($('.work_container').innerHeight() - $('.sticky_content').innerHeight());

			stickyTriggerWork = ScrollTrigger.create({
				trigger: sticky,
				start: "top 10%",
				end: h,
				pin: true
			});
		}	
	}

	/* 

	21. Sticky Tools

	*/

	function initStickyTools()
	{
		stickyTriggerTools.forEach(t => t.kill());
  		stickyTriggerTools = [];

		let sticky_tools = $('.sticky_tools');

		sticky_tools.each(function()
		{
			let tools_container = $('.tools_container');
			let container_height = tools_container.innerHeight();
			let sticky_item = $(this);
			let h = container_height - sticky_item.position().top - sticky_item.innerHeight();
			h = "+=" + h;
			const trigger = ScrollTrigger.create({
				trigger: sticky_item,
				start: "top 10%",
				end: h,
				pin: true
			});

			stickyTriggerTools.push(trigger);
		});	
	}

	/* 

	22. Sticky Tools Scale

	*/

	function initStickyToolsScale()
	{
		ScrollTrigger.getAll().forEach(st =>
		{
			if (st.vars.id === "sticky-scale") st.kill();
		});

		const stickyItems = gsap.utils.toArray(".sticky_tools");

		stickyItems.forEach((item, i) =>
		{

			gsap.to(item,
			{
				scale: 0.85,
				opacity: 0.8,
				transformOrigin: "center center",
				ease: "none",
				scrollTrigger:
				{
					id: "sticky-scale",
					trigger: item,
					start: "top 10%", // adjust when scale begins
					end: "bottom top",   // adjust how long the transition lasts
					scrub: true,
				}
			});
		});
	}

	/* 

	23. Pricing Scaling

	*/

	function initPricing()
	{
		ScrollTrigger.getAll().forEach(st =>
		{
			if(st.vars.id === "scale") st.kill();
		});

		const pricingScaleItems = gsap.utils.toArray(".scale-up");

		pricingScaleItems.forEach((item, i) =>
		{
			gsap.from(item,
			{
				scale: 0.85,
				opacity: 0.5,
				transformOrigin: "center center",
				ease: "none",
				scrollTrigger:
				{
					id: "scale",
					trigger: item,
					start: "top bottom",
					end: "top center",
					scrub: true
				}
			});
		});
		
	}

	/* 

	24. Marquee

	*/

	function initMarquee()
	{
		const marquees = document.querySelectorAll(".marquee_container_inner");

		marquees.forEach(container => {
			const content = container.querySelector(".marquee");
			if (!content) return;

			// Duplicate content so it loops seamlessly
			content.innerHTML += content.innerHTML;

			// Base looping animation
			const tl = gsap.to(content, {
			xPercent: -50,
			duration: 30,
			ease: "none",
			repeat: -1
			});

			// Optional scroll-based speed control (smooth like Rayo)
			const clamp = gsap.utils.clamp(1, 6);
			const speedCtrl = gsap.to(tl, { duration: 1.5, timeScale: 1, paused: true });

			ScrollTrigger.create({
			start: 0,
			end: "max",
			onUpdate: self => {
				tl.timeScale(clamp(Math.abs(self.getVelocity() / 200)));
				speedCtrl.invalidate().restart();
			}
			});
		});
	}

	/* 

	25. Preview

	*/

	function initPreview()
	{
		if(p1) p1.kill();
		if(p2) p2.kill();
		if(p3) p3.kill();
		const preview = document.querySelector(".preview_container_inner");
		const preview_col_1 = document.querySelector(".preview_container_inner > div:first-child");
		const preview_col_2 = document.querySelector(".preview_container_inner > div:nth-child(2)");
		const preview_col_3 = document.querySelector(".preview_container_inner > div:nth-child(3)");
		if (!preview) return;


		// Scaling from 1.3 to 1
		gsap.fromTo(
			preview,
			{
				scale: 1.5
			},
			{
				scale: 1,
				ease: "none",
				scrollTrigger:
				{
					trigger: ".preview_container_inner",
					start: "top bottom",
					end: "bottom top",
					scrub: true,
				},
			}
		);

		// Parallax Col 1
		p1 = gsap.fromTo(
			preview_col_1,
			{
				yPercent: -20,
			},
			{
				yPercent: 20,
				ease: "none",
				scrollTrigger:
				{
					trigger: ".preview_container_inner",
					start: "top bottom",
					end: "bottom top",
					scrub: true,
					invalidateOnRefresh: true
				},
			}
		);

		// Parallax Col 2
		p2 = gsap.fromTo(
			preview_col_2,
			{
				yPercent: -40,
			},
			{
				yPercent: 40,
				ease: "none",
				scrollTrigger:
				{
					trigger: ".preview_container_inner",
					start: "top bottom",
					end: "bottom top",
					scrub: true,
					invalidateOnRefresh: true
				},
			}
		);

		// Parallax Col 3
		p3 = gsap.fromTo(
			preview_col_3,
			{
				yPercent: -20,
			},
			{
				yPercent: 20,
				ease: "none",
				scrollTrigger:
				{
					trigger: ".preview_container_inner",
					start: "top bottom",
					end: "bottom top",
					scrub: true,
					invalidateOnRefresh: true
				},
			}
		);
	}

});