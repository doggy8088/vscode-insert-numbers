// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "insert-numbers" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('insert-numbers.insertNumbers', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World from Insert Numbers!');

		// Get settings
		const config = vscode.workspace.getConfiguration('insert-numbers');

		let start = +(config.get('start') ?? 1);
		let minimumIntegerDigits = +(config.get('minimumIntegerDigits') ?? 1);
		let useGrouping = <boolean>config.get('useGrouping') ?? false;

		// Get active text editor
		const editor = vscode.window.activeTextEditor!;

		// Replace selected text with numbers
		editor.edit(editBuilder => {
			editor.selections.forEach(selection => {
				var num = (start++).toLocaleString('en-US', {
					minimumIntegerDigits: minimumIntegerDigits,
					useGrouping: useGrouping
				});
				editBuilder.replace(selection, num);
			});
		});

	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
