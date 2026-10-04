import ts from "typescript";

export function extractReturn(source: string): string | null {
    const file = ts.createSourceFile(
        "example.tsx",
        source,
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TSX
    );

    let result: string | null = null;

    function visit(node: ts.Node) {
        if (result !== null) return;

        if (ts.isReturnStatement(node) && node.expression) {
            result = source.slice(
                node.expression.getStart(file),
                node.expression.getEnd()
            ).trim();

            return;
        }

        ts.forEachChild(node, visit);
    }

    visit(file);

    return result;
}