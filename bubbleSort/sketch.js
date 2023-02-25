let size = 1000;
let nums = [];
let EXIT = false;
let limit = 0;
let last = size - limit - 2;
let counter = 0;

function createNums() {
  for (let i = 0; i < size; i++) {
    nums.push(floor(random(height)));
  }
}

function show(wid) {
  for (let i = 0; i < nums.length; i++) {
    rect(wid * i, height - nums[i], wid, height);
  }
}

function swap(nums, i, j) {
  temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function sorting() {
  for (let i = 0; i < nums.length - limit; i++) {
    if (nums[i] > nums[i + 1]) {
      swap(nums, i, i + 1);
    } else if (i == last) {
      last--;
      limit++;
    } else {
      if (limit == size - 1) {
        fill(0, 255, 0);
        EXIT = true;
      } else {
        fill(0, 0, 255);
      }
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createNums();
}

function draw() {
  noStroke();

  background(220);
  if (!EXIT) {
    sorting();
    counter++;
    if (counter % 60 == 0) {
      //console.log((limit * 100) / (size - 1));
    }
  } else {
    //console.log(limit);
  }
  show(width / size);
}
