export default function in_order_search(head: BinaryNode<number>): number[] {
    const result: number[] = [];
    function in_order(node: BinaryNode<number> | null): void {
        if (node) {
            in_order(node.left);
            result.push(node.value);
            in_order(node.right);
        }
    }
    in_order(head);
    return result;
}