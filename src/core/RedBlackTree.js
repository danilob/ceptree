import { BinarySearchTree, Compare, defaultCompare } from './BinarySearchTree'
import { Node } from './Node'

const Colors = {
    BLACK: 2,
    RED: 1
};


export default class RedBlackNode extends Node {
    constructor(key) {
        super(key)
        this.color = Colors.RED;
        this.parent = null;
    }
    isRed() {
        return this.color === Colors.RED;
    }
}

export class RedBlackTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn)
        this.root = null;
    }

    rotationLL(node) {
        const tmp = node.left;
        node.left = tmp.right;
        if (tmp.right && tmp.right.key) {
            tmp.right.parent = node;
        }
        tmp.parent = node.parent;
        if (!node.parent) {
            this.root = tmp;
        } else {
            if (node === node.parent.left) {
                node.parent.left = tmp;
            } else {
                node.parent.right = tmp;
            }
        }
        tmp.right = node;
        node.parent = tmp;
    }
    rotationRR(node) {
        const tmp = node.right;
        node.right = tmp.left;
        if (tmp.left && tmp.left.key) {
            tmp.left.parent = node;
        }
        tmp.parent = node.parent;
        if (!node.parent) {
            this.root = tmp;
        } else {
            if (node === node.parent.left) {
                node.parent.left = tmp;
            } else {
                node.parent.right = tmp;
            }
        }
        tmp.left = node;
        node.parent = tmp;
    }
    insert(key) {
        if (this.root == null) {
            this.root = new RedBlackNode(key);
            this.root.color = Colors.BLACK;
            return this.root;
        } else {
            const newNode = this.insertNode(this.root, key);
            this.fixTreeProperties(newNode);
            return newNode;
        }
    }
    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new RedBlackNode(key);
                node.left.parent = node;
                return node.left;
            } else {
                return this.insertNode(node.left, key);
            }

        } else if (node.right == null) {
            node.right = new RedBlackNode(key);
            node.right.parent = node;
            return node.right;
        } else {
            return this.insertNode(node.right, key);
        }
    }

    fixTreeProperties(node) {
        // verify if tree is balanced
        while (node && node.parent && node.parent.isRed() &&
            node.color !== Colors.BLACK) {
            let parent = node.parent;
            const grandParent = parent.parent;
            //caso A: o pai é o filho da esquerda
            if (grandParent && grandParent.left === parent) {
                const uncle = grandParent.right;
                //caso 1A: o tio do nó também é vermelho - basta recolorir
                if (uncle && uncle.isRed()) {
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grandParent;
                } else {
                    //caso 2A: o nó é o filho à direita - rotação à esquerda
                    if (node === parent.right) {
                        this.rotationRR(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    //caso 3A: o nó é o filho à esquerda - rotação à direita
                    this.rotationLL(grandParent);
                    parent.color = Colors.BLACK;
                    grandParent.color = Colors.RED;
                    node = parent;


                }
            } else { //caso B: o pai é o filho à direita
                const uncle = grandParent.left;
                //caso 1B: o tio é vermelho - basta recolorir
                if (uncle && uncle.isRed()) {
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grandParent;
                } else {
                    //caso 2B: o nó é o filho à esquerda - rotação à direita
                    if (node === parent.left) {
                        this.rotationLL(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    //caso 3B: o nó é o filho à direita - rotação à esquerda
                    this.rotationRR(grandParent);
                    parent.color = Colors.BLACK;
                    grandParent.color = Colors.RED;
                    node = parent;

                }
            }
        }
        this.root.color = Colors.BLACK;
    }

}