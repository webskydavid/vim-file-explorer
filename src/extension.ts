// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const view = vscode.window.createTreeView("vim-file-explorer", {
    treeDataProvider: {
      getTreeItem: function (
        element: unknown
      ): vscode.TreeItem | Thenable<vscode.TreeItem> {
        throw new Error("Function not implemented.");
      },
      getChildren: function (
        element?: unknown
      ): vscode.ProviderResult<unknown[]> {
        throw new Error("Function not implemented.");
      },
    },
    showCollapseAll: false,
  });

  context.subscriptions.push(view);

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "vim-file-explorer.helloWorld",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage(
        "Hello World from Vim File explorer!"
      );
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
