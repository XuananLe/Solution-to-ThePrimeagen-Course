export default function post_order_search(head: BinaryNode<number>): number[] {
    const result: number[] = [];
    function post_order(node: BinaryNode<number> | null): void {
        if (node) {
            post_order(node.left);
            post_order(node.right);
            result.push(node.value);
        }
    }
    post_order(head);
    return result;
}