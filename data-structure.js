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

// 06_[Graph] adjacency matrix 구현

// directed graph (방향 그래프)
// unweighted (비가중치)
// adjacency matrix (인접 행렬)
// 이해를 돕기 위해 기존 배열의 인덱스를 정점으로 사용합니다 (0, 1, 2, ... --> 정점)
class GraphWithAdjacencyMatrix {
  //graph의 constructor를 구현합니다.
  constructor() {
    this.matrix = [];
  }
  //vertex를 추가합니다.
  addVertex() {
    const currentLength = this.matrix.length;
    for (let i = 0; i < currentLength; i++) {
      this.matrix[i].push(0);
    }
    this.matrix.push(new Array(currentLength + 1).fill(0));
  }
  //vertex를 탐색합니다.
  //this.matrix에 vertex가 존재한다면 true를 리턴하고, 반대의 경우라면 false를 리턴합니다.
  contains(vertex) {
    return !!this.matrix[vertex];
  }
  //vertex와 vertex를 이어주는 edge를 추가합니다.
  addEdge(from, to) {
    const currentLength = this.matrix.length - 1;
    // 두 가지 인자 중, 어느 하나라도 undefined라면, 리턴합니다.
    if (from === undefined || to === undefined) {
      console.log("2개의 인자가 있어야 합니다.");
      return;
    }
    // from vertex와 to vertex가 전체 그래프의 범위를 벗어난다면, 리턴합니다.
    if (
      from > currentLength ||
      to > currentLength ||
      from < 0 ||
      to < 0
    ) {
      console.log("범위가 매트릭스 밖에 있습니다.");
      return;
    }
    // this.matrix[from][to]의 값을 1로 바꿔줘서 edge로 연결이 되어 있음을 표시합니다.
    this.matrix[from][to] = 1;
  }
  // from vertex와 to vertex 사이에 edge를 가지고 있는지 여부를 판단합니다.
  hasEdge(from, to) {
    return !!this.matrix[from][to];
  }
  // from vertex와 to vertex 사이에 관련이 없다면, edge를 제거 합니다.
  removeEdge(from, to) {
    const currentLength = this.matrix.length - 1;
    // 두 가지 인자 중, 어느 하나라도 undefined라면, 리턴합니다.
    if (from === undefined || to === undefined) {
      console.log("2개의 인자가 있어야 합니다.");
      return;
    }
    // from vertex와 to vertex가 전체 그래프의 범위를 벗어난다면, 리턴합니다.
    if (
      from > currentLength ||
      to > currentLength ||
      from < 0 ||
      to < 0
    ) {
      console.log("범위가 매트릭스 밖에 있습니다.");
      return;
    }
    // this.matrix[from][to]의 값을 0으로 바꿔줘서 관련이 없음을 표시합니다.
    this.matrix[from][to] = 0;
  }
}

// 07_[Binary Search Tree] 구현
class BinarySearchTree {
  //BST의 constructor를 구현합니다.
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // tree에 value를 추가합니다.
  insert(value) {
    // 인자의 value가 this.value보다 작을 경우, 왼쪽 노드에서 진행합니다.
    if (value < this.value) {
      // this.left에 아무것도 없을 경우, 새로운 자식 노드를 추가합니다.
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      }
      // this.left의 자식 노드가 있을 경우, 자식 노드에서 insert 재귀를 사용합니다.
      else {
        this.left.insert(value);
      }
    }
    // 인자의 value가 this.value보다 클 경우, 오른쪽 노드에서 진행합니다.
    else if (value > this.value) {
      // this.right에 아무것도 없을 경우, 새로운 자식 노드를 추가합니다.
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      }
      // this.left의 자식 노드가 있을 경우, 자식 노드에서 insert 재귀를 사용합니다.
      else {
        this.right.insert(value);
      }
    } else {
      // 이미 value값을 포함하고 있습니다.
    }
  }
  // tree의 value값을 탐색합니다.
  contains(value) {
    // 찾는 value값이 노드의 value와 일치한다면, true를 리턴합니다.
    if (value === this.value) {
      return true;
    }
    // 찾는 value값이 노드의 value 보다 작다면, 왼쪽에서 contains의 재귀를 진행합니다.
    if (value < this.value) {
      return !!(this.left && this.left.contains(value));
    }
    // 찾는 value값이 노드의 value 보다 크다면, 오른쪽에서 contains의 재귀를 진행합니다.
    if (value > this.value) {
      return !!(this.right && this.right.contains(value));
    }
  }
  //tree를 전위 순회 합니다.
  preorder(callback) {
    callback(this.value);
    if (this.left) {
      this.left.preorder(callback);
    }
    if (this.right) {
      this.right.preorder(callback);
    }
  }
  // tree를 중위 순회 합니다
  inorder(callback) {
    if (this.left) {
      this.left.inorder(callback);
    }
    callback(this.value);
    if (this.right) {
      this.right.inorder(callback);
    }
  }
  //tree를 후위 순회 합니다
  postorder(callback) {
    if (this.left) {
      this.left.postorder(callback);
    }
    if (this.right) {
      this.right.postorder(callback);
    }
    callback(this.value);
  }
}

// 08_[Binary Tree] 이진트리 후위순회(postorder)

// 1. 재귀적 풀이법
const postOrderTraversal = (root) => {
	// 출력결과를 저장하기 위한 result 배열을 하나 만들어 줍니다.
  let result = [];
    
	// 트리를 재귀적으로 순회하기 위한 재귀함수를 생성합니다.
  const dfs = (node) => {
		// 재귀의 기저조건으로 방문한 노드가 빈 노드일 경우에 해당 재귀를 종료시킨 후 상위로 올려줍니다.
    if (node === null) return;

		// 트리를 후위 순회하는 것이기 때문에 node를 root로 보았을 때,
		// node 기준으로 왼편 -> 오른편 -> 해당 node 순으로 방문합니다.
    dfs(node.left);
    dfs(node.right);

    result.push(node.val);
  }

	// 순회 시작을 위해 최초 받은 root노드를 매개변수로 넣어 재귀함수를 실행시켜 주니다.
  dfs(root);

	// 재귀가 모두 끝난 이후 결과를 반환해 줍니다.
  return result;
};




// 2. 반복문적 풀이법
// const postOrderTraversal = (root) => {
//   const stack = [];
//   const result = [];

//   if (root === null) return result;

//   stack.push(root);

//   while (stack.length) {
//     const node = stack.pop();

// 		// 후위순회는 root노드의 값이 항상 가장 마지막에 방문되어야 하고, 그 말은 즉 출력결과에 뒷 편에 위치해야 하므로
// 		// 매번 root노드의 값을 출력결과의 맨 앞 부분에 넣어주게 되면 반복문을 돌면서 해당 값이 뒤로 밀리면서 출력결과의 뒷 편에 위치하게 된다.
//     result.unshift(node.val);

// 		// 후위순회이기 때문에 방문순서는 left -> right -> root이지만, 윗 줄의 코드에서 매번 root노드의 값을 출력결과 배열의 맨 앞에 넣어주면서 해당 값을 뒤로 밀어내고 있기 때문에
// 		// 다음 방문을 위한 node의 자식을 stack에 담을 때는 기존 순서대로 left -> right순으로 담아주면 된다.
//     node.left && stack.push(node.left);
//     node.right && stack.push(node.right);
//   }

//   return result;
// };

// 09_[Binary Tree] 이진트리 레벨순회(levelorder)

const levelOrderTraversal = (root) => {
  // 최종 출력결과를 반환하기 위한 배열을 만들어 줍니다.
  const result = [];

  // 만약 최초에 들어온 root노드 자체가 null값이라면 빈 배열을 반환하고 로직을 끝냅니다.
  if (!root) return result;

  // BFS를 위한 Queue를 만들어 주고, BFS시작을 위해 최초값인 root노드를 큐에 넣어줍니다.
  const queue = [];
  queue.push(root);

  // queue에 값이 더 이상 존재하지 않을 때까지 루프를 돌며 로직을 진행시킵니다.
  while (queue.length > 0) {
      // 트리의 각 레벨별로 값을 묶어줘야 하기 때문에 각 레벨을 위한 내부 배열을 선언합니다.
      const subResult = [];
      // 해당 레벨에 존재하는 노드의 수 만큼 for 루프를 돌기 위해서 미리 큐의 사이즈를 변수에 저장합니다.
      const size = queue.length;

      // 해당 레벨에 존재하는 노드의 수만큼 for 루프를 돌면서 내부 배열(subResult)에 값을 추가해 갑니다.
      for (let i = 0; i < size; ++i) {
          // queue에서 맨 앞(head)값을 꺼내서 노드로 저장하고
          const node = queue.shift();
          // 해당 노드의 값을 subResult 배열에 넣어줍니다.
          subResult.push(node.val);


          // 다음 레벨을 순회하기 위해 해당 노드에 왼쪽이나 오른쪽 자식이 있으면 큐에 삽입해 줍니다.
          node.left && queue.push(node.left);
          node.right && queue.push(node.right);
      }

      // 위의 for루프에서 해당 레벨에 해당하는 subResult 배열을 완성시킨 후 최종 반환배열인 result에 해당 subResult를 추가해 줍니다.
      result.push(subResult);
  }

  // 최종 반환배열인 result를 반환하고 로직을 끝내줍니다.
  return result;
};

// 10_[Graph] 인접 행렬 길찾기

function getDirections(matrix, from, to) {

  // queue를 간단하게 생성하고, 첫 시작점으로 from을 할당합니다.
  const queue = [from];
  const enqueue = (n) => queue.push(n);
  const dequeue = (n) => queue.shift();

  // 방문했다는 것을 표시하기 위해 1차원 행렬을 생성합니다.
  const isVisited = new Array(matrix.length).fill(false);

  // 첫 정점 방문 여부를 표시합니다.
  isVisited[from] = true

  // queue(방문할 곳)의 사이즈가 0이 될 때까지 반복합니다.
  while (queue.length > 0) {

    // queue에서 정점을 하나 빼서 now에 할당합니다.
    const now = dequeue();

    // 목적지인지 검사하고, 목적지라면 true를 반환합니다.
    if (now === to) return true;

    // 해당 정점의 간선들을 확인합니다.
    for (let next = 0; next < matrix[now].length; next++) {
      // 만약, 간선이 있고 방문하지 않았다면
      if (matrix[now][next] && !isVisited[next]){
        // queue에 next를 넣습니다. (다음 정점으로 가기 위해)
        enqueue(next);
        // 해당 정점을 방문했다는 것을 표시합니다.
        isVisited[next] = true
      }
    }
    
  }

  // 길이 없다면 false를 반환합니다.
  return false;
}
// ------------------------------------------------------
// 11_[DFS / BFS] 연결된 정점들

function connectedVertices(edges) {

	// 최대 버텍스를 찾습니다.
	const maxVertex = edges.reduce((a, c) => {
		const bigger = Math.max(...c);
		if (bigger > a) return bigger;
		return a;
	}, 0);

	// 이 레퍼런스는 인접 리스트로 만듭니다. (행렬도 가능합니다. 행렬로 작성해 보세요.)
	const adjList = {};

  // 인접 리스트에 최대 버텍스 크기만큼 반복해 버텍스를 만들어 줍니다.
	for (let i = 0; i <= maxVertex; i++) {
		adjList[i] = [];
	}

  // edges를 순회하며, (무향 그래프이므로 쌍방으로) 간선을 연결해 줍니다.
	// 이렇게 adjList 그래프가 완성되었습니다.
	for (let i = 0; i < edges.length; i++) {
		adjList[edges[i][0]].push(edges[i][1]);
		adjList[edges[i][1]].push(edges[i][0]);
	}

  // 방문한 버텍스를 담을 객체를 선언합니다.
	const visited = {};
	// 컴포넌트가 몇 개인지 카운트할 변수를 선언합니다.
	let count = 0;

  // 그래프에 있는 버텍스를 전부 순회합니다.
	for (let vertex = 0; vertex <= maxVertex; vertex++) {

		// 만약 i 번째 버텍스를 방문하지 않았다면 bfs로 해당 버텍스와, 버텍스와 연결된(간선) 모든 버텍스를 방문합니다.
		// BFS로 갈 수 있는 모든 정점들을 방문하며 visited에 담기 때문에, 방문한 버텍스는 visited에 들어 있어서 bfs를 돌지 않습니다.
		// 이렇게 컴포넌트를 확인합니다.
		if (!visited[vertex]) {
			// 그래프와 버텍스, 방문했는지 확인할 visited를 변수에 담습니다.
			bfs(adjList, vertex, visited);

			// 카운트를 셉니다.
			count++;
		}
	}

  // 카운트를 반환합니다.
	return count;
}


// bfs solution
function bfs(adjList, vertex, visited) {

	// bfs는 가장 가까운 정점부터 탐색하기 때문에 queue를 사용합니다.
	// queue에 vertex를 담습니다.
	const queue = [vertex];
	// 해당 버텍스를 방문했기 때문에 visited에 담아 주고, 방문했다는 표시인 true를 할당합니다.
	visited[vertex] = true;

  // queue의 길이가 0일 때까지 순환합니다.
	while (queue.length > 0) {

		// cur 변수에 정점을 할당합니다.
		// queue는 선입선출이기 때문에 shift 메소드를 사용하여 버텍스를 가져옵니다.
		const cur = queue.shift();

		// 그래프의 cur 정점에 있는 간선들을 전부 순회합니다.
		for (let i = 0; i < adjList[cur].length; i++) {

			// 만약, 해당 버텍스를 방문하지 않았다면 queue에 삽입합니다.
			// 방문했다는 표시로 visited에 해당 버텍스를 삽입하고 true를 할당합니다.
			if (!visited[adjList[cur][i]]) {
				queue.push(adjList[cur][i]);
				visited[adjList[cur][i]] = true;
			}

			// queue에 다음으로 방문할 버텍스가 있기 때문에 while은 멈추지 않습니다.
			// 만약, queue가 비어 있다면 더 이상 갈 곳이 없는 것이기 때문에 bfs 함수를 종료하고 카운트를 셉니다.
		}
	}
}

// dfs solution
// bfs 함수 대신 dfs를 사용해도 결과는 같습니다.
function dfs(adjList, vertex, visited) {
	// 해당 버텍스에 방문했다는 표시로 visited key에 vertex를 담고 값에 true를 할당합니다.
	visited[vertex] = true;

	// 해당 버텍스의 모든 간선들을 전부 순회합니다.
	for (let i = 0; i < adjList[vertex].length; i++) {

		// 만약 i번째 간선과 이어진 버텍스를 방문하지 않았다면
		if (!visited[adjList[vertex][i]]) {
			// dfs를 호출해(재귀) 방문합니다.
			dfs(adjList, adjList[vertex][i], visited);
		}
		// 모든 방문이 종료되면 다음 버텍스를 확인합니다.
		// 재귀가 종료되면(한 정점에서 이어진 모든 간선들을 확인했다면) dfs 함수를 종료하고 카운트를 셉니다. 
	}
}


// matrix
// function connectedVertices(edges) {
//   // 행렬을 기준으로 하겠습니다.

//   // 제일 큰 버텍스 찾기.
//   const max = Math.max(...edges.flat());

//   // 버텍스 찾았다면? 행렬 만들기
//   const matrix = new Array(max + 1).fill(0).map(e => new Array(max + 1).fill(0));

//   //엣지 넣기 ㅎㅎ
//   edges.forEach(e => {
//     matrix[e[0]][e[1]] = 1;
//     matrix[e[1]][e[0]] = 1;
//   })

//   // 탐색에 가장 중요한 건? 두 번 방문하지 않는다.
//   let visited = new Array(matrix.length).fill(false);

//   // 카운트
//   let count = 0;

//   // 버텍스를 하나씩 순회하면서 연결된 정점이 있는지 확인한다!!
//   for(let i = 0; i < matrix.length; i++) {
//     if(visited[i] === false) {
//       bfs(matrix, i, visited);
//       count++;
//     }
//   }

//   // 카운트를 반환합니다.
// 	return count;
// }


// // bfs solution
// function bfs(matrix, v, visited) {
//   // 큐에 시작점 넣고
//   let Q = [v];
//   // 방문했다고 표시
//   visited[v] = true;
//   // 큐에 모든 게 없어질 ㄸㅐ까지 반복합니다.

//   while(Q.length !== 0) {
//     // 큐에서 하나 뺍니다.
//     let current = Q.pop();
//     // 현재 정점 확인합니다.
//     for(let i = 0; i < matrix[current].length; i++) {
//       // 정점 순회하면서?
//       if(visited[i] !== true && matrix[current][i] === 1) {
//         // 큐에 i를 넣자
//         Q.unshift(i);
//         // 방문했다고 표현하자
//         visited[i] = true;
//       }
//     }
//   }
// }

// // dfs solution
// // bfs 함수 대신 dfs를 사용해도 결과는 같습니다.
// function dfs(matrix, vertex, visited) {
// 	// 해당 버텍스에 방문 표시
// 	visited[vertex] = true;

// 	// 해당 버텍스의 모든 간선들을 전부 순회합니다.
// 	for (let i = 0; i < matrix[vertex].length; i++) {

// 		// 만약 i번째 간선과 이어진 버텍스를 방문하지 않았다면
// 		if(visited[i] !== true && matrix[vertex][i] === 1){
// 			// dfs를 호출해(재귀) 방문합니다.
// 			dfs(matrix, i, visited);
// 		}
// 		// 모든 방문이 종료되면 다음 버텍스를 확인합니다.
// 		// 재귀가 종료되면(한 정점에서 이어진 모든 간선들을 확인했다면) dfs 함수를 종료하고 카운트를 셉니다. 
// 	}
// }