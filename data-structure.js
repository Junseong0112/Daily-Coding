// 01_[Stack] 구현

class Stack {
  // stack constructor를 생성합니다.
  constructor() {
    this.storage = {};
    this.top = -1;
  }
  // stack의 사이즈를 구합니다.
  // this.top은 스택이 쌓일 때마다 하나씩 증가하기 때문에 top으로부터 size를 구할 수 있습니다.
  // this.top은 스택에 새롭게 추가될 요소의 인덱스를 나타냅니다. 빈 스택을 표현하는 -1부터 1씩 증감하며 표현하며 전체 요소의 개수를 추정할 수 있습니다
  size() {
    return this.top + 1;
  }
  // stack에 element를 추가합니다.
  // 현재 추가하는 element의 인덱스인 this.top을 키로, 요소를 값으로 하여 storage에 할당합니다.
  push(element) {
    this.top += 1;
    this.storage[this.top] = element;
  }
  // 만약 size가 0보다 작거나 같다면 이는 비어있는 스택을 의미하므로 아무 일도 일어나지 않습니다.
  // stack에서 현재 stack의 최상단에 있는 element를 변수에 저장합니다.
  // storage에서 해당 element를 제거합니다.
  // 하나를 제거했으니 방금 제거한 element의 인덱스를 나타내는 top 또한 감소시켜 업데이트 해줍니다.
  // 최상단에 있던 element가 저장된 변수 result를 반환합니다.
  pop() {
    if (this.size() <= 0) {
      return;
    }
    const result = this.storage[this.top];
    delete this.storage[this.top];
    this.top -= 1;
    return result;
  }
}

// 2. 02_[Queue] 구현

class Queue {
  //가장 앞에 있는 요소를 front,
  //가장 뒤에 있는 요소를 rear 라고 했을 때
  //queue constructor 생성
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }
  // queue의 사이즈를 구합니다.
  // queue는 추가될 때, rear의 값이 커지고 삭제 될 때, front가 변경이 때문에, 각 값을 알아야 size를 구할 수 있습니다.
  size() {
    return this.rear - this.front;
  }
  // queue에 element를 추가합니다.
  // 새롭게 추가될 요소의 인덱스를 나타내는 this.rear를 키로, 요소를 값으로 하여 storage에 할당합니다. this.rear은 다음 인덱스를 가리키게 하여 새로운 요소에 대비합니다.
  enqueue(element) {
    this.storage[this.rear] = element;
    this.rear += 1;
  }
  // queue에서 element를 제거 한 뒤 해당 element를 반환합니다.
  // 만약 size가 0이라면 아무 일도 일어나지 않습니다.
  // this.front+1로 가장 앞에 있는 요소를 다시 설정한 후 변수에 저장하고, 큐에서 삭제합니다.
  dequeue() {
    if (this.size() === 0) {
      return;
    }
    const result = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;
    return result;
  }
}

// 03_[Stack] 유효한 괄호쌍 문제

const isValid = (str) => {
  // 최초 입력값이 빈 값이라면 유효하지 않은 괄호쌍으로 간주한다.
  if (str.length === 0) return false;

  // 스택이란 변수에 괄호를 저장한다
  const stack = []

  for(let i of str){
    // 열린 괄호인 경우
    if(i === '(' || i === '{' || i === '['){
      // 변수에 괄호를 추가한다.
      stack.push(i)
    }else{
      // 스택이 비어있는데 닫힌 괄호가 들어온 경우
      if(stack.length === 0){
        // false를 반환한다.
        return false
      }
      // 변수의 가장 뒤에 있는 괄호를 꺼내기 위해 변수를 지정함.
      const top = stack.pop();
      // 닫힌 괄호와 변수에 가장 뒤에있는 괄호가 쌍이 맞는지 확인함
      if(
        (i === ')' && top !== '(') ||
        (i === '}' && top !== '{') ||
        (i === ']' && top !== '[')
      ){
        // 쌍이 맞지 않으면 false
        return false
      }
    }
  }
// 모든 괄호가 확인한 후에도 변수가 비어있는지 확인하여 true or false를 반환한다.
  return stack.length === 0;
}

// 04_[Queue] 박스 포장

function paveBox(boxes) {
  let answer = [];
  
  // boxes 배열이 0보다 클 때까지 반복합니다.
  while(boxes.length > 0){
      let finishIndex = boxes.findIndex(fn => boxes[0] < fn);
      
      if(finishIndex === -1){
          // 만약 찾지 못했다면 answer에 boxes 배열의 길이를 넣은 후, boxes 내부의 요소를 전부 삭제합니다.
          answer.push(boxes.length);
          boxes.splice(0, boxes.length);

      } else {
          // 만약 찾았다면, 해당 인덱스를 answer에 넣고, boxes에서 그만큼 제외합니다.
          answer.push(finishIndex);
          boxes.splice(0, finishIndex);
      }
  }

  // 결과물을 반환합니다.
  return Math.max(...answer);
}

// 05_[Tree] 구현

class Tree {
  constructor(value) {
		// constructor로 만든 객체는 트리의 Node가 됩니다.
    this.value = value;
    this.children = [];
  }

	// 트리의 삽입 메서드를 만듭니다.
  insertNode(value) {
		// 값이 어떤 이름으로 만들어지고 어느 위치에 붙는지 떠올리는 것이 중요합니다.
		// TODO: 트리에 붙게 될 childNode를 만들고, children에 넣어야 합니다.
    const childNode = new Tree(value);
    this.children.push(childNode);
  }

	// 트리 안에 해당 값이 포함되어 있는지 확인하는 메서드를 만듭니다.
  contains(value) {
		// TODO: 값이 포함되어 있다면 true를 반환하세요. 
    if (this.value === value) {
      return true;
    }
		// TODO: 값을 찾을 때까지 children 배열을 순회하며 childNode를 탐색하세요.
    for (let i = 0; i < this.children.length; i += 1) {
      const childNode = this.children[i];
      if (childNode.contains(value)) {
        return true;
      }
    }
		// 전부 탐색했음에도 불구하고 찾지 못했다면 false를 반환합니다.
    return false;
  }
}
