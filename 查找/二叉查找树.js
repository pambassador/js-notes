//创建一个类表示二叉树
function BinarySearchTree(){
	var Node = function(key){
		this.key = key,
		this.left = null,
		this.right = null
	}
	var root = null;

	//插入节点
	this.insert = function(key){
		var newNode = new Node(key);
		if(root === null){
			root = newNode;
		} else {
			insetNode(root, newNode);
		}
	}
	var insertNode = funciton(node, newNode){
		if(newNode.key<=node.key){
			if(node.left === null){
				node.left = newNode;
			} else {
				insertNode(node.left, newNode);
			}
		} else {
			if(node.right === null){
				node.right = newNode;
			} else {
				insertNode(node.right, newNode);
			}
		}
	}

	//完成中序遍历
	this.inOrderTraverse = function(){
		inOrderTraverseNode(root);
	}
	var inOrderTraverseNode = function(node){
		if(node!==null){
			inOrderTraverseNode(node.left);
			console.log(node.key);
			inOrderTraverseNode(node.right);
		}
	}

	//完成先序遍历
	this.preOrderTraverse = function(){
		preOrderTraverseNode(root);
	}
	var preOrderTraverseNode = function(node){
		if(node!==null){
			console.log(node.key);
			preOrderTraverseNode(node.left);
			preOrderTraverseNode(node.right);
		}
	}

	//完成后序遍历
	this.postOrderTraverse = function(){
		postOrderTraverseNode(root);
	}
	var postOrderTraverseNode = function(node){
		if(node!==null){
			postOrderTraverseNode(node.left);
			postOrderTraverseNode(node.right);
			console.log(node.key);
		}
	}

	//查找最小值
	this.findMin = funciton(){
		return minNode(root);
	}
	var minNode = function(node){
		if(node){
			while(node && node.left!==null){
				node = node.left;
			}
			return node.key;
		}
		return null;
	}

	//查找最大值
	this.findMax = function(){
		return maxNode(root);
	}
	var maxNode = funciton(node){
		if(node){
			while(node && node.right!==null){
				node = node.right;
			}
			return node.key;
		}
		return null;
	}

	//搜索特定值
	this.search = function(key){
		return searchNode(root, key);
	}
	var searchNode = function(node, key){
		if(node===null){
			return false;
		}
		if(key < node.key){
			return  searchNode(node.left, key);
		} else if(key > node.key){
			return searchNode(node.right, key);
		} else {
			return true;
		}
	}

	//移除节点
	this.remove = function(key){
		removeNode(root, key);
	}	
	var removeNode = function(node, key){
		if(node === null){
			return null;
		}
		if(key < node.key){
			node.left = removeNode(node.left, key);
			return node;
		}  else if(key > node.key){
			node.right = removeNode(node.right, key);
			return node;
		} else {
			//需要移除的是一个叶子节点
			if(node.left === null && node.right === null){
				node = null;
				return node;
			}
			//需要移除的节点包含一个子节点
			if(node.left === null){
				node = node.right;
				return node;
			} else if(node.right === null){
				node = node.left;
				return node;
			}
			//需要移除的节点包含两个子节点
			var aux = findMinNode(node.right);
			node.key = aux.key;
			node.right = removeNode(node.right, aux.key);
			return node;
		}
	}
	var findMinNode = function(node){
		if(node){
			while(node && node.left !== null){
				node = node.left;
			}
			return node;
		}
	}
}