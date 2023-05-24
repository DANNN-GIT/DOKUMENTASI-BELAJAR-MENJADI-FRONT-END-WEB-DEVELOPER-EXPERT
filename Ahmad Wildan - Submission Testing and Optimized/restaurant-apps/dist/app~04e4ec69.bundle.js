(()=>{"use strict";var n,e={756:(n,e,t)=>{t.d(e,{Z:()=>i});var A=t(537),o=t.n(A),r=t(645),a=t.n(r)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Courgette&family=Kaushan+Script&display=swap);"]),a.push([n.id,"@import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css);"]),a.push([n.id,"* {\n  scroll-behavior: smooth;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Montserrat', sans-serif;\n  transition: 0.3s ease-in-out;\n}\nhtml, body { width: 100%; }\nbody { background-color: #141414; }\n#skipToContent {\n  position: absolute;\n  z-index: 200;\n  min-width: 44px;\n  min-height: 44px;\n  border: none;\n  padding: 10px;\n  border-radius: 5px;\n  background-color: gold;\n  transform: translate(0, -44px);\n  text-decoration: none;\n  color: #1b1b1b;\n}\n#skipToContent:focus {\n  transform: translate(0, 0);\n}\n#header {\n  position: fixed;\n  width: 100%;\n  padding: 30px;\n  transition: 0.4s ease-in-out;\n  z-index: 100;\n}\n#header.enable-sticky {\n  background-color: transparent;\n  backdrop-filter: blur(10px);\n  padding: 20px 20px;\n  box-shadow: 0px 0px 10px 0px gold;\n}\n#header .header-brand {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#header .header-brand h1 {\n  font-family: 'Kaushan Script', cursive;\n  color: white;\n  font-size: x-large;\n  transition: 0.2s ease-in-out;\n}\n#header .header-brand h1 span {\n  font-family: 'Kaushan Script', cursive;\n  color: gold;\n}\n#header .header-brand button {\n  text-decoration: none;\n  font-weight: bolder;\n  font-size: x-large;\n  color: white;\n  background-color: transparent;\n  border: none;\n  min-width: 44px;\n  min-height: 44px;\n}\n#header .header-brand button:last-child { color: gold; }\n#header nav#navbar {\n  display: none;\n  padding: 20px 0px;\n  transition: all 0.4s ease-in-out;\n}\n#header nav#navbar ul {\n  display: flex;\n  flex-direction: column;\n  row-gap: 20px;\n}\n#header nav#navbar ul li { list-style: none; }\n#header nav#navbar ul li a {\n  display: flex;\n  justify-content: center ;\n  align-items: center;\n  text-decoration: none;\n  color: white;\n  font-size: 16px;\n  font-weight: 500;\n  transition: 0.3s ease-in-out;\n  min-width: 44px;\n  min-height: 44px;\n}\n#header nav#navbar ul li a:hover {\n  color: gold;\n}\n#main .hero-image {\n  clip-path: polygon(0 0, 100% 0%, 100% 80%, 50% 100%, 0 80%);\n}\n#main .hero-image img {\n  width: 100%;\n  filter: brightness(40%);\n}\n#main .hero-image .hero-content {\n  position: absolute;\n  width: 80%;\n  color: white;\n  text-align: center;\n  top: 22%;\n  left: 50%;\n  transform: translate(-50%, -38%);\n}\n#main .hero-image .hero-content h2 {\n  font-weight: normal;\n  margin-bottom: 1%;\n  font-size: 18px;\n}\n#main .hero-image .hero-content p {\n  display: none;\n}\n#main .hero-image img { width: 100%; }\n#main #main-content {\n  width: 100%;\n  padding-top: 5%;\n}\n#main #main-content h2 {\n  text-align: center;\n  color: white;\n  font-weight: 500;\n  font-size: large;\n}\n#main #main-content hr {\n  width: 20%;\n  margin: 2% auto;\n  border: 1px solid white;\n}\n#main #main-content .restaurant-container {\n  display: flex;\n  flex-direction: column;\n  padding: 0px 4%;\n  margin-top: 4%;\n}\n.restaurant-container .resto-detail {\n  display: flex;\n  flex-direction: column;\n  background-color: #222222;\n  margin-bottom: 6%;\n  box-shadow: 0px 0px 10px 0px goldenrod;\n  color: white;\n}\n.restaurant-container .resto-detail .header-item label {\n  position: absolute;\n  margin-top: 2%;\n  padding: 6px;\n  color: #1b1b1b;\n  font-weight: 700;\n  background-color: gold;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.restaurant-container .resto-detail .header-item img {\n  width: 100%;\n}\n.restaurant-container .resto-detail .content-item {\n  padding: 20px;\n}\n.restaurant-container .resto-detail .content-item h3 {\n  margin-bottom: 1%;\n}\n.restaurant-container .resto-detail .content-item h4 {\n  margin-top: 4%;\n  margin-bottom: 2%;\n}\n.restaurant-container .resto-detail .content-item span {\n  color: crimson;\n}\n.restaurant-container .resto-detail .content-item strong {\n  font-weight: normal;\n}\n.restaurant-container .resto-detail .content-item p {\n  font-size: 16px;\n  line-height: 1.5;\n}\n.restaurant-container .resto-detail .content-item .card-review {\n  box-shadow: 0px 0px 10px 0px goldenrod;\n  padding: 10px;\n  margin-top: 2%;\n  border-radius: 5px;\n  background-color: whitesmoke;\n  color: #141414;\n}\n.restaurant-container .resto-detail .content-item .card-review h4 {\n  margin-top: 0;\n  margin-bottom: 4px;\n  font-size: large;\n}\n.restaurant-container .resto-detail .content-item .card-review em {\n  font-size: small;\n  margin-left: 2px;\n  color: goldenrod;\n  font-weight: bolder;\n}\n.restaurant-container .resto-detail .content-item .card-review p {\n  margin-top: 1%;\n}\n.restaurant-container .resto-item {\n  width: 100%;\n  margin-bottom: 8%;\n  background-color: #222222;\n  border-radius: 8px;\n  overflow: hidden;\n  color: white;\n  cursor: pointer;\n  box-shadow: 0px 0px 10px 0px gold;\n}\n.restaurant-container .resto-item .header-item label {\n  position: absolute;\n  margin-top: 2%;\n  padding: 6px;\n  color: #1b1b1b;\n  font-weight: 700;\n  background-color: gold;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.restaurant-container .resto-item .header-item img {\n  width: 100%;\n}\n.restaurant-container .resto-item .content-item {\n  padding: 20px;\n}\n.restaurant-container .resto-item .content-item h3 {\n  padding-bottom: 10px;\n}\n.restaurant-container .resto-item .content-item strong {\n  color: gold;\n}\n.restaurant-container .resto-item .content-item p {\n  padding-top: 10px;\n  line-height: 1.5;\n  overflow: hidden;\n  height: 180px;\n  text-overflow: ellipsis;\n}\n.restaurant-container .resto-item .content-item button {\n  padding: 8px;\n  border-radius: 5px;\n  background-color: goldenrod;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 600;\n  min-width: 44px;\n  min-height: 44px;\n  border: none;\n  margin-top: 8%;\n  cursor: pointer;\n}\n.restaurant-container .resto-item .content-item button:hover {\n  transform: scale(0.9);\n  box-shadow: 0px 0px 10px 0px goldenrod;\n}\n.like, .unlike {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: goldenrod;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  font-size: 18px;\n  font-weight: bolder;\n  color: white;\n  cursor: pointer;\n}\n#footer {\n  background-color: #1b1b1b;\n  padding: 28px;\n  color: white;\n  text-align: center;\n  font-size: 14px;\n}\n\n@media screen and (min-width: 425px) {\n  #main .hero-image .hero-content {\n    top: 28%;\n    left: 50%;\n    transform: translate(-50%, -38%);\n  }\n  #main .hero-image .hero-content h2 {\n    font-weight: normal;\n    margin-bottom: 1%;\n    font-size: 20px;\n  }\n}\n\n@media screen and (max-width: 580px) {\n  #main #main-content hr {\n    margin-top: 4%;\n    margin-bottom: 6%;\n  }\n}\n\n@media screen and (min-width: 580px) {\n  #header .header-brand h1 {\n    font-size: 38px;\n  }\n  #main .hero-image .hero-content {\n    top: 36%;\n    left: 50%;\n    transform: translate(-50%, -38%);\n  }\n  #main .hero-image .hero-content h2 {\n    font-weight: 600;\n    margin-bottom: 1%;\n    font-size: 30px;\n  }\n  #main .hero-image .hero-content p {\n    display: block;\n    line-height: 1.5;\n  }\n  #main #main-content .restaurant-container {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 4%;\n  }\n  .restaurant-container .resto-item {\n    width: 48%;\n  }\n}\n\n@media screen and (min-width: 780px) {\n  #main .hero-image .hero-content {\n    top: 44%;\n    left: 50%;\n    transform: translate(-50%, -38%);\n  }\n  #main .hero-image .hero-content h2 {\n    font-weight: 600;\n    margin-bottom: 2%;\n    font-size: 34px;\n  }\n  #main .hero-image .hero-content p {\n    font-size: large;\n    line-height: 2;\n  }\n  #main #main-content h2 { font-size: 26px; }\n  #footer {\n    font-size: 16px;\n  }\n  .restaurant-container .resto-detail .content-item h3 {\n    font-size: 38px;\n  }\n  .restaurant-container .resto-detail .content-item h4 {\n    font-size: 20px;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  #header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 40px 100px;\n  }\n  #header.enable-sticky {\n    padding: 10px 80px;\n  }\n  #header .header-brand h1 { font-size: 40px; }\n  #header .header-brand button { display: none; }\n  #header nav#navbar { display: block; }\n  #header nav#navbar ul {\n    flex-direction: row;\n    gap: 40px;\n  }\n  #main .hero-image .hero-content {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -30%);\n  }\n  #main #main-content .restaurant-container {\n    justify-content: space-between;\n  }\n  .restaurant-container .resto-item {\n    width: 30%;\n  }\n}","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AAIA;EACE,uBAAuB;EACvB,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,qCAAqC;EACrC,4BAA4B;AAC9B;AACA,aAAa,WAAW,EAAE;AAC1B,OAAO,yBAAyB,EAAE;AAClC;EACE,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,sBAAsB;EACtB,8BAA8B;EAC9B,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,eAAe;EACf,WAAW;EACX,aAAa;EACb,4BAA4B;EAC5B,YAAY;AACd;AACA;EACE,6BAA6B;EAC7B,2BAA2B;EAC3B,kBAAkB;EAClB,iCAAiC;AACnC;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,sCAAsC;EACtC,YAAY;EACZ,kBAAkB;EAClB,4BAA4B;AAC9B;AACA;EACE,sCAAsC;EACtC,WAAW;AACb;AACA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;AACA,0CAA0C,WAAW,EAAE;AACvD;EACE,aAAa;EACb,iBAAiB;EACjB,gCAAgC;AAClC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;AACf;AACA,2BAA2B,gBAAgB,EAAE;AAC7C;EACE,aAAa;EACb,wBAAwB;EACxB,mBAAmB;EACnB,qBAAqB;EACrB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,4BAA4B;EAC5B,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,WAAW;AACb;AACA;EACE,2DAA2D;AAC7D;AACA;EACE,WAAW;EACX,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;AAClC;AACA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,aAAa;AACf;AACA,wBAAwB,WAAW,EAAE;AACrC;EACE,WAAW;EACX,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,UAAU;EACV,eAAe;EACf,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,cAAc;AAChB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,iBAAiB;EACjB,sCAAsC;EACtC,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,cAAc;EACd,gBAAgB;EAChB,sBAAsB;EACtB,4BAA4B;EAC5B,+BAA+B;AACjC;AACA;EACE,WAAW;AACb;AACA;EACE,aAAa;AACf;AACA;EACE,iBAAiB;AACnB;AACA;EACE,cAAc;EACd,iBAAiB;AACnB;AACA;EACE,cAAc;AAChB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,sCAAsC;EACtC,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,4BAA4B;EAC5B,cAAc;AAChB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,cAAc;AAChB;AACA;EACE,WAAW;EACX,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,iCAAiC;AACnC;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,cAAc;EACd,gBAAgB;EAChB,sBAAsB;EACtB,4BAA4B;EAC5B,+BAA+B;AACjC;AACA;EACE,WAAW;AACb;AACA;EACE,aAAa;AACf;AACA;EACE,oBAAoB;AACtB;AACA;EACE,WAAW;AACb;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,2BAA2B;EAC3B,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,cAAc;EACd,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,sCAAsC;AACxC;AACA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,2BAA2B;EAC3B,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,eAAe;EACf,mBAAmB;EACnB,YAAY;EACZ,eAAe;AACjB;AACA;EACE,yBAAyB;EACzB,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE;IACE,QAAQ;IACR,SAAS;IACT,gCAAgC;EAClC;EACA;IACE,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;EACjB;AACF;;AAEA;EACE;IACE,cAAc;IACd,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,eAAe;EACjB;EACA;IACE,QAAQ;IACR,SAAS;IACT,gCAAgC;EAClC;EACA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;EACjB;EACA;IACE,cAAc;IACd,gBAAgB;EAClB;EACA;IACE,mBAAmB;IACnB,eAAe;IACf,uBAAuB;IACvB,OAAO;EACT;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,QAAQ;IACR,SAAS;IACT,gCAAgC;EAClC;EACA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;EACjB;EACA;IACE,gBAAgB;IAChB,cAAc;EAChB;EACA,yBAAyB,eAAe,EAAE;EAC1C;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;EACrB;EACA;IACE,kBAAkB;EACpB;EACA,2BAA2B,eAAe,EAAE;EAC5C,+BAA+B,aAAa,EAAE;EAC9C,qBAAqB,cAAc,EAAE;EACrC;IACE,mBAAmB;IACnB,SAAS;EACX;EACA;IACE,QAAQ;IACR,SAAS;IACT,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,UAAU;EACZ;AACF",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Kaushan+Script&display=swap');\n@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css');\n\n* {\n  scroll-behavior: smooth;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Montserrat', sans-serif;\n  transition: 0.3s ease-in-out;\n}\nhtml, body { width: 100%; }\nbody { background-color: #141414; }\n#skipToContent {\n  position: absolute;\n  z-index: 200;\n  min-width: 44px;\n  min-height: 44px;\n  border: none;\n  padding: 10px;\n  border-radius: 5px;\n  background-color: gold;\n  transform: translate(0, -44px);\n  text-decoration: none;\n  color: #1b1b1b;\n}\n#skipToContent:focus {\n  transform: translate(0, 0);\n}\n#header {\n  position: fixed;\n  width: 100%;\n  padding: 30px;\n  transition: 0.4s ease-in-out;\n  z-index: 100;\n}\n#header.enable-sticky {\n  background-color: transparent;\n  backdrop-filter: blur(10px);\n  padding: 20px 20px;\n  box-shadow: 0px 0px 10px 0px gold;\n}\n#header .header-brand {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#header .header-brand h1 {\n  font-family: 'Kaushan Script', cursive;\n  color: white;\n  font-size: x-large;\n  transition: 0.2s ease-in-out;\n}\n#header .header-brand h1 span {\n  font-family: 'Kaushan Script', cursive;\n  color: gold;\n}\n#header .header-brand button {\n  text-decoration: none;\n  font-weight: bolder;\n  font-size: x-large;\n  color: white;\n  background-color: transparent;\n  border: none;\n  min-width: 44px;\n  min-height: 44px;\n}\n#header .header-brand button:last-child { color: gold; }\n#header nav#navbar {\n  display: none;\n  padding: 20px 0px;\n  transition: all 0.4s ease-in-out;\n}\n#header nav#navbar ul {\n  display: flex;\n  flex-direction: column;\n  row-gap: 20px;\n}\n#header nav#navbar ul li { list-style: none; }\n#header nav#navbar ul li a {\n  display: flex;\n  justify-content: center ;\n  align-items: center;\n  text-decoration: none;\n  color: white;\n  font-size: 16px;\n  font-weight: 500;\n  transition: 0.3s ease-in-out;\n  min-width: 44px;\n  min-height: 44px;\n}\n#header nav#navbar ul li a:hover {\n  color: gold;\n}\n#main .hero-image {\n  clip-path: polygon(0 0, 100% 0%, 100% 80%, 50% 100%, 0 80%);\n}\n#main .hero-image img {\n  width: 100%;\n  filter: brightness(40%);\n}\n#main .hero-image .hero-content {\n  position: absolute;\n  width: 80%;\n  color: white;\n  text-align: center;\n  top: 22%;\n  left: 50%;\n  transform: translate(-50%, -38%);\n}\n#main .hero-image .hero-content h2 {\n  font-weight: normal;\n  margin-bottom: 1%;\n  font-size: 18px;\n}\n#main .hero-image .hero-content p {\n  display: none;\n}\n#main .hero-image img { width: 100%; }\n#main #main-content {\n  width: 100%;\n  padding-top: 5%;\n}\n#main #main-content h2 {\n  text-align: center;\n  color: white;\n  font-weight: 500;\n  font-size: large;\n}\n#main #main-content hr {\n  width: 20%;\n  margin: 2% auto;\n  border: 1px solid white;\n}\n#main #main-content .restaurant-container {\n  display: flex;\n  flex-direction: column;\n  padding: 0px 4%;\n  margin-top: 4%;\n}\n.restaurant-container .resto-detail {\n  display: flex;\n  flex-direction: column;\n  background-color: #222222;\n  margin-bottom: 6%;\n  box-shadow: 0px 0px 10px 0px goldenrod;\n  color: white;\n}\n.restaurant-container .resto-detail .header-item label {\n  position: absolute;\n  margin-top: 2%;\n  padding: 6px;\n  color: #1b1b1b;\n  font-weight: 700;\n  background-color: gold;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.restaurant-container .resto-detail .header-item img {\n  width: 100%;\n}\n.restaurant-container .resto-detail .content-item {\n  padding: 20px;\n}\n.restaurant-container .resto-detail .content-item h3 {\n  margin-bottom: 1%;\n}\n.restaurant-container .resto-detail .content-item h4 {\n  margin-top: 4%;\n  margin-bottom: 2%;\n}\n.restaurant-container .resto-detail .content-item span {\n  color: crimson;\n}\n.restaurant-container .resto-detail .content-item strong {\n  font-weight: normal;\n}\n.restaurant-container .resto-detail .content-item p {\n  font-size: 16px;\n  line-height: 1.5;\n}\n.restaurant-container .resto-detail .content-item .card-review {\n  box-shadow: 0px 0px 10px 0px goldenrod;\n  padding: 10px;\n  margin-top: 2%;\n  border-radius: 5px;\n  background-color: whitesmoke;\n  color: #141414;\n}\n.restaurant-container .resto-detail .content-item .card-review h4 {\n  margin-top: 0;\n  margin-bottom: 4px;\n  font-size: large;\n}\n.restaurant-container .resto-detail .content-item .card-review em {\n  font-size: small;\n  margin-left: 2px;\n  color: goldenrod;\n  font-weight: bolder;\n}\n.restaurant-container .resto-detail .content-item .card-review p {\n  margin-top: 1%;\n}\n.restaurant-container .resto-item {\n  width: 100%;\n  margin-bottom: 8%;\n  background-color: #222222;\n  border-radius: 8px;\n  overflow: hidden;\n  color: white;\n  cursor: pointer;\n  box-shadow: 0px 0px 10px 0px gold;\n}\n.restaurant-container .resto-item .header-item label {\n  position: absolute;\n  margin-top: 2%;\n  padding: 6px;\n  color: #1b1b1b;\n  font-weight: 700;\n  background-color: gold;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.restaurant-container .resto-item .header-item img {\n  width: 100%;\n}\n.restaurant-container .resto-item .content-item {\n  padding: 20px;\n}\n.restaurant-container .resto-item .content-item h3 {\n  padding-bottom: 10px;\n}\n.restaurant-container .resto-item .content-item strong {\n  color: gold;\n}\n.restaurant-container .resto-item .content-item p {\n  padding-top: 10px;\n  line-height: 1.5;\n  overflow: hidden;\n  height: 180px;\n  text-overflow: ellipsis;\n}\n.restaurant-container .resto-item .content-item button {\n  padding: 8px;\n  border-radius: 5px;\n  background-color: goldenrod;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 600;\n  min-width: 44px;\n  min-height: 44px;\n  border: none;\n  margin-top: 8%;\n  cursor: pointer;\n}\n.restaurant-container .resto-item .content-item button:hover {\n  transform: scale(0.9);\n  box-shadow: 0px 0px 10px 0px goldenrod;\n}\n.like, .unlike {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: goldenrod;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  font-size: 18px;\n  font-weight: bolder;\n  color: white;\n  cursor: pointer;\n}\n#footer {\n  background-color: #1b1b1b;\n  padding: 28px;\n  color: white;\n  text-align: center;\n  font-size: 14px;\n}\n\n@media screen and (min-width: 425px) {\n  #main .hero-image .hero-content {\n    top: 28%;\n    left: 50%;\n    transform: translate(-50%, -38%);\n  }\n  #main .hero-image .hero-content h2 {\n    font-weight: normal;\n    margin-bottom: 1%;\n    font-size: 20px;\n  }\n}\n\n@media screen and (max-width: 580px) {\n  #main #main-content hr {\n    margin-top: 4%;\n    margin-bottom: 6%;\n  }\n}\n\n@media screen and (min-width: 580px) {\n  #header .header-brand h1 {\n    font-size: 38px;\n  }\n  #main .hero-image .hero-content {\n    top: 36%;\n    left: 50%;\n    transform: translate(-50%, -38%);\n  }\n  #main .hero-image .hero-content h2 {\n    font-weight: 600;\n    margin-bottom: 1%;\n    font-size: 30px;\n  }\n  #main .hero-image .hero-content p {\n    display: block;\n    line-height: 1.5;\n  }\n  #main #main-content .restaurant-container {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 4%;\n  }\n  .restaurant-container .resto-item {\n    width: 48%;\n  }\n}\n\n@media screen and (min-width: 780px) {\n  #main .hero-image .hero-content {\n    top: 44%;\n    left: 50%;\n    transform: translate(-50%, -38%);\n  }\n  #main .hero-image .hero-content h2 {\n    font-weight: 600;\n    margin-bottom: 2%;\n    font-size: 34px;\n  }\n  #main .hero-image .hero-content p {\n    font-size: large;\n    line-height: 2;\n  }\n  #main #main-content h2 { font-size: 26px; }\n  #footer {\n    font-size: 16px;\n  }\n  .restaurant-container .resto-detail .content-item h3 {\n    font-size: 38px;\n  }\n  .restaurant-container .resto-detail .content-item h4 {\n    font-size: 20px;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  #header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 40px 100px;\n  }\n  #header.enable-sticky {\n    padding: 10px 80px;\n  }\n  #header .header-brand h1 { font-size: 40px; }\n  #header .header-brand button { display: none; }\n  #header nav#navbar { display: block; }\n  #header nav#navbar ul {\n    flex-direction: row;\n    gap: 40px;\n  }\n  #main .hero-image .hero-content {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -30%);\n  }\n  #main #main-content .restaurant-container {\n    justify-content: space-between;\n  }\n  .restaurant-container .resto-item {\n    width: 30%;\n  }\n}"],sourceRoot:""}]);const i=a},46:(n,e,t)=>{var A=t(379),o=t.n(A),r=t(795),a=t.n(r),i=t(569),s=t.n(i),d=t(565),C=t.n(d),l=t(216),c=t.n(l),p=t(589),m=t.n(p),h=t(756),g={};g.styleTagTransform=m(),g.setAttributes=C(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=c(),o()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals}},t={};function A(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={id:n,exports:{}};return e[n](r,r.exports,A),r.exports}A.m=e,n=[],A.O=(e,t,o,r)=>{if(!t){var a=1/0;for(C=0;C<n.length;C++){for(var[t,o,r]=n[C],i=!0,s=0;s<t.length;s++)(!1&r||a>=r)&&Object.keys(A.O).every((n=>A.O[n](t[s])))?t.splice(s--,1):(i=!1,r<a&&(a=r));if(i){n.splice(C--,1);var d=o();void 0!==d&&(e=d)}}return e}r=r||0;for(var C=n.length;C>0&&n[C-1][2]>r;C--)n[C]=n[C-1];n[C]=[t,o,r]},A.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return A.d(e,{a:e}),e},A.d=(n,e)=>{for(var t in e)A.o(e,t)&&!A.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},A.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n={209:0};A.O.j=e=>0===n[e];var e=(e,t)=>{var o,r,[a,i,s]=t,d=0;if(a.some((e=>0!==n[e]))){for(o in i)A.o(i,o)&&(A.m[o]=i[o]);if(s)var C=s(A)}for(e&&e(t);d<a.length;d++)r=a[d],A.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return A.O(C)},t=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})(),A.nc=void 0;var o=A.O(void 0,[666,29,495,337,268,959,662],(()=>A(253)));o=A.O(o)})();
//# sourceMappingURL=app~04e4ec69.bundle.js.map