export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue: BinaryNode<number>[] = [];
    queue.push(head);
    while (queue.length) {
        const node = queue.shift();
        if (node) {
            if (node.value === needle) {
                return true;
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    return false;   
}