function getDiscWidths(discs) {
    function isStepSafe(step, n, width, output) {
        if (n == 0)
            return output;

        let newWidth = width - step;

        if (newWidth < 1) {
            return false;
        }
        else
            output.push((Math.round(newWidth * 100) / 100).toFixed(2));

        return isStepSafe(step, n - 1, newWidth, output);
    }

    for (let step = 10; step >= 1; step = step - 0.1) {
        let discWidths = [33.33];
        let res = isStepSafe(step, discs - 1, 33.33, discWidths);
        if (res)
            return res
    }

}



let discCountA = 0
let discCountB = 0
let discCountC = 0

let topA = -1
let topB = -1
let topC = -1

let intervalX = 3
let intervalY = 10

let n = 3

function init() {
    
    console.log('INIT');
    let discWidths = getDiscWidths(n)
    console.log(discWidths)
    discWidths.forEach(discWidth => {
        let disc = document.createElement('div')
        disc.classList.add('disc')
        disc.classList.add('on-tower-a')
        disc.style.width = `${discWidth}%`
        let margin_left = (33.33 - discWidth) / 2
        disc.setAttribute('data-margin_left', margin_left)
        disc.setAttribute('data-index', discCountA)
        disc.style.left = `${margin_left}%`
        disc.style.bottom = `${discCountA * 30}px`;
        discCountA++
        document.querySelector('.play-box')
            .appendChild(disc)
    })

    topA = n - 1
}

// A to B

function moveToTopA() {
    return new Promise(res=>{
        let element = document.querySelector(`.on-tower-a[data-index="${topA}"]`)
        let currentTop = parseFloat(element.offsetTop);
        let targetTop = 0;
        let intervalTime = intervalY; 
    
        let intervalId = setInterval(() => {
            currentTop -= 10;
            if (currentTop <= targetTop) {
                clearInterval(intervalId);
                res()
            }
            element.style.top = currentTop + 'px';
    
        }, intervalTime);
    })
}
function moveA2B() {

    return new Promise(res=>{
        let element = document.querySelector(`.on-tower-a[data-index="${topA}"]`)

        let currentLeft = 33.33/2 - parseFloat(element.style.width.replace('%', '') / 2);
        let targetLeft = 33.33 + parseFloat(element.dataset.margin_left)
        let intervalTime = intervalX; 
    
        let intervalId = setInterval(() => {
            if (currentLeft >= targetLeft) {
                clearInterval(intervalId);
                res()
            }
    
            currentLeft += 0.08;
            element.style.left = currentLeft + '%'; 
        }, intervalTime);
    })
}

function moveToBottomA2B() {
    return new Promise((resolve) => {
    let top_el = document.querySelector(`.on-tower-a[data-index="${topA}"]`);
    top_el.style.top = null
    let currentBottom = 470;
    let targetBottom = discCountB * 30;
    let intervalTime = intervalY;
  
      let intervalId = setInterval(() => {
        currentBottom -= 10;
        if (currentBottom <= targetBottom) {
          clearInterval(intervalId);
          resolve(top_el);
        }
        top_el.style.bottom = `${currentBottom}px`;
      }, intervalTime);
    });
  }
  

async function A2B() {
   return new Promise(async res=>{
    await moveToTopA()
    await moveA2B()
    let x = await moveToBottomA2B()
    x.setAttribute('data-index', topB + 1)
    x.classList.remove('on-tower-a')
    x.classList.add('on-tower-b')

    discCountA--
    discCountB++
    topA--
    topB++

    res()
   })
}


// A to C



function moveA2C() {
    return new Promise(res=>{
        let element = document.querySelector(`.on-tower-a[data-index="${topA}"]`);
  
    let currentLeft = 33.33 / 2 - parseFloat(element.style.width.replace('%', '') / 2);
    let targetLeft = 66.66 + parseFloat(element.dataset.margin_left);
    let intervalTime = intervalX;
  
    let intervalId = setInterval(() => {
      if (currentLeft >= targetLeft) {
        clearInterval(intervalId);
        res();
      }
  
      currentLeft += 0.08;
      element.style.left = currentLeft + '%';
    }, intervalTime);
    })
  }

  function moveToBottomA2C() {
    return new Promise((resolve) => {
      let top_el = document.querySelector(`.on-tower-a[data-index="${topA}"]`);
      top_el.style.top = null;
      let currentBottom = 470;
      let targetBottom = discCountC * 30;
      let intervalTime = intervalY;

  
      let intervalId = setInterval(() => {
        currentBottom -= 10;
        if (currentBottom <= targetBottom) {
          clearInterval(intervalId);
          resolve(top_el);
        }
        top_el.style.bottom = `${currentBottom}px`;
      }, intervalTime);
    });
  }
  
async function A2C() {
  return new Promise(async res=>{
    await moveToTopA()
    await moveA2C()
    let x = await moveToBottomA2C()
    x.setAttribute('data-index', topC + 1)
    x.classList.remove('on-tower-a')
    x.classList.add('on-tower-c')

    discCountA--
    discCountC++
    topA--
    topC++
    res()
  })
    
}


// B to A

function moveToTopB() {
    return new Promise((resolve) => {
      let element = document.querySelector(`.on-tower-b[data-index="${topB}"]`);
      let currentTop = parseFloat(element.offsetTop);
      let targetTop = 0;
      let intervalTime = intervalY;
  
      let intervalId = setInterval(() => {
        currentTop -= 10;
        if (currentTop <= targetTop) {
          clearInterval(intervalId);
          resolve();
        }
        element.style.top = currentTop + 'px';
      }, intervalTime);
    });
  }
  

  async function moveB2A() {
    return new Promise((resolve) => {
      let element = document.querySelector(`.on-tower-b[data-index="${topB}"]`);
      let currentLeft = 33.33 + 33.33 / 2 - parseFloat(element.style.width.replace('%', '')) / 2;
      let targetLeft = 0 + parseFloat(element.dataset.margin_left);
      let intervalTime = intervalX;
  
      let intervalId = setInterval(() => {
        if (currentLeft <= targetLeft) {
          clearInterval(intervalId);
          resolve();
        }
  
        currentLeft -= 0.08;
        element.style.left = currentLeft + '%';
      }, intervalTime);
    });
  }
  

  async function moveToBottomB2A() {
    return new Promise((resolve) => {
      let top_el = document.querySelector(`.on-tower-b[data-index="${topB}"]`);
      top_el.style.top = null;
      let currentBottom = 470;
      console.log('bottom offset ', currentBottom);
      let targetBottom = discCountA * 30;
      let intervalTime = intervalY;
  
      let intervalId = setInterval(() => {
        currentBottom -= 10;    
        if (currentBottom <= targetBottom) {
          clearInterval(intervalId);
          resolve(top_el);
        }

        console.log('setting bottom');
        top_el.style.bottom = `${currentBottom}px`;
      }, intervalTime);
    });
  }
  

async function B2A() {

  return new Promise(async res=>{
    await moveToTopB()
    await moveB2A()
    let x = await moveToBottomB2A()
    x.setAttribute('data-index', topA + 1)
    x.classList.remove('on-tower-b')
    x.classList.add('on-tower-a')

    discCountB--
    discCountA++
    topB--
    topA++
    res()
    })
    
}


// B to C


async function moveToTopB() {
    return new Promise((resolve) => {
      let element = document.querySelector(`.on-tower-b[data-index="${topB}"]`);
      let currentTop = parseFloat(element.offsetTop);
      let targetTop = 0;
      let intervalTime = intervalY;
  
      let intervalId = setInterval(() => {
        currentTop -= 10;
        if (currentTop <= targetTop) {
          clearInterval(intervalId);
          resolve();
        }
        element.style.top = currentTop + 'px';
      }, intervalTime);
    });
  }
  
  async function moveB2C() {
    return new Promise((resolve) => {
      let element = document.querySelector(`.on-tower-b[data-index="${topB}"]`);
      let currentLeft = 33.33 + parseFloat(element.dataset.margin_left);
      let targetLeft = 66.66 + parseFloat(element.dataset.margin_left);
      let intervalTime = intervalX;
  
      let intervalId = setInterval(() => {
        if (currentLeft >= targetLeft) {
          clearInterval(intervalId);
          resolve();
        }
  
        currentLeft += 0.08;
        element.style.left = currentLeft + '%';
      }, intervalTime);
    });
  }
  
  async function moveToBottomB2C() {
    return new Promise((resolve) => {
      let top_el = document.querySelector(`.on-tower-b[data-index="${topB}"]`);
      top_el.style.top = null;
      let currentBottom = 470;
      let targetBottom = discCountC * 30;
      let intervalTime = intervalY;
  
      let intervalId = setInterval(() => {
        currentBottom -= 10;
        if (currentBottom <= targetBottom) {
          clearInterval(intervalId);
          resolve(top_el);
        }
        top_el.style.bottom = `${currentBottom}px`;
      }, intervalTime);
    });
  }
  
  async function B2C() {
    return new Promise(async res=>{
      await moveToTopB();
      await moveB2C();
      let x = await moveToBottomB2C();
      x.setAttribute('data-index', topC + 1);
      x.classList.remove('on-tower-b');
      x.classList.add('on-tower-c');
    
      discCountB--;
      discCountC++;
      topB--;
      topC++;
      res()
      })

  }
  
/// C to A

async function moveToTopC() {
    return new Promise((resolve) => {
      let element = document.querySelector(`.on-tower-c[data-index="${topC}"]`);
      let currentTop = parseFloat(element.offsetTop);
      let targetTop = 0;
      let intervalTime = intervalY;
  
      let intervalId = setInterval(() => {
        currentTop -= 10;
        if (currentTop <= targetTop) {
          clearInterval(intervalId);
          resolve();
        }
        element.style.top = currentTop + 'px';
      }, intervalTime);
    });
  }
  
  async function moveC2A() {
    return new Promise((resolve) => {
      let element = document.querySelector(`.on-tower-c[data-index="${topC}"]`);
      let currentLeft = 66.66 + parseFloat(element.dataset.margin_left);
      let targetLeft = 0 + parseFloat(element.dataset.margin_left);
      let intervalTime = intervalX;
  
      let intervalId = setInterval(() => {
        if (currentLeft <= targetLeft) {
          clearInterval(intervalId);
          resolve();
        }
  
        currentLeft -= 0.08;
        element.style.left = currentLeft + '%';
      }, intervalTime);
    });
  }
  
  async function moveToBottomC2A() {
    return new Promise((resolve) => {
      let top_el = document.querySelector(`.on-tower-c[data-index="${topC}"]`);
      top_el.style.top = null;
      let currentBottom = 470;
      let targetBottom = discCountA * 30;
      let intervalTime = intervalY;
  
      let intervalId = setInterval(() => {
        currentBottom -= 10;
        if (currentBottom <= targetBottom) {
          clearInterval(intervalId);
          resolve(top_el);
        }
        top_el.style.bottom = `${currentBottom}px`;
      }, intervalTime);
    });
  }
  
  async function C2A() {
    return new Promise(async res=>{
      await moveToTopC();
      await moveC2A();
      let x = await moveToBottomC2A();
      x.setAttribute('data-index', topA + 1);
      x.classList.remove('on-tower-c');
      x.classList.add('on-tower-a');
    
      discCountC--;
      discCountA++;
      topC--;
      topA++;
      res()
      })

  }
  
  
  // C to B
  
  async function moveToTopC() {
    return new Promise((resolve) => {
      let element = document.querySelector(`.on-tower-c[data-index="${topC}"]`);
      let currentTop = parseFloat(element.offsetTop);
      let targetTop = 0;
      let intervalTime = intervalY;
  
      let intervalId = setInterval(() => {
        currentTop -= 10;
        if (currentTop <= targetTop) {
          clearInterval(intervalId);
          resolve();
        }
        element.style.top = currentTop + 'px';
      }, intervalTime);
    });
  }
  
  async function moveC2B() {
    return new Promise((resolve) => {
      let element = document.querySelector(`.on-tower-c[data-index="${topC}"]`);
      let currentLeft = 66.66 + parseFloat(element.dataset.margin_left);
      let targetLeft = 33.33 + parseFloat(element.dataset.margin_left);
      let intervalTime = intervalX;
  
      let intervalId = setInterval(() => {
        if (currentLeft <= targetLeft) {
          clearInterval(intervalId);
          resolve();
        }
  
        currentLeft -= 0.08;
        element.style.left = currentLeft + '%';
      }, intervalTime);
    });
  }
  
  async function moveToBottomC2B() {
    return new Promise((resolve) => {
      let top_el = document.querySelector(`.on-tower-c[data-index="${topC}"]`);
      top_el.style.top = null;
      let currentBottom = 470;
      let targetBottom = discCountB * 30;
      let intervalTime = intervalY ;
  
      let intervalId = setInterval(() => {
        currentBottom -= 10;
        console.log('Current btm: ', currentBottom);
        if (currentBottom <= targetBottom) {
          clearInterval(intervalId);
          resolve(top_el);
        }
        top_el.style.bottom = `${currentBottom}px`;
      }, intervalTime);
    });
  }
  
  async function C2B() {
    return new Promise(async res=>{
      await moveToTopC();
      await moveC2B();
      let x = await moveToBottomC2B();
      x.setAttribute('data-index', topB + 1);
      x.classList.remove('on-tower-c');
      x.classList.add('on-tower-b');
    
      discCountC--;
      discCountB++;
      topC--;
      topB++;
      res()
      })
  }
  
  



  function towerOfHanoi(numDiscs, source, auxiliary, destination) {
    const steps = [];
  
    function moveDiscs(numDiscs, source, auxiliary, destination) {
      if (numDiscs === 1) {
        steps.push(`${source}${destination}`);
      } else {
        moveDiscs(numDiscs - 1, source, destination, auxiliary);
        steps.push(`${source}${destination}`);
        moveDiscs(numDiscs - 1, auxiliary, source, destination);
      }
    }
  
    moveDiscs(numDiscs, source, auxiliary, destination);
  
    return steps;
  }
  
  const sourcePeg = 'A';
  const auxiliaryPeg = 'C';
  const destinationPeg = 'B';
  
  const steps = towerOfHanoi(n, sourcePeg, auxiliaryPeg, destinationPeg);
  console.log(steps);



async function runStep(step) {
  switch (step) {
    case 'AB':
      await A2B();
      break;
    case 'AC':
      await A2C();
      break;
    case 'BA':
      await B2A();
      break;
    case 'BC':
      await B2C();
      break;
    case 'CA':
      await C2A();
      break;
    case 'CB':
      await C2B();
      break;
    default:
      console.log('Invalid step');
      break;
  }
}

async function runSteps(steps) {
  for (const step of steps) {
    await runStep(step);
  }
}

function run(){
  runSteps(steps);
}


  
  
  
  
  