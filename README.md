# Easy Insert Numbers

An extension that automatically inserts sequential numbers in multi-cursor editing mode. This is inspired by the [Insert Numbers](https://marketplace.visualstudio.com/items?itemName=Asuka.insertnumbers) extension.

## Features

- Insert sequential numbers in multi-cursor editing mode.

## Usage

1. Select the text you want to replace with numbers.
2. Press `Ctrl+Shift+P` to open the command palette.
3. Type `Insert Numbers` and select the command.
4. Enter the starting number and then hit `Enter`.

There is also a default keybindings for `Insert Numbers` command:

- Windows: `ctrl+alt+n`
- Linux/macOS: `cmd+alt+n`

## Extension Settings

This extension contributes the following settings:

- `insert-numbers.start`: The starting number for the sequence. Default is `1`.
- `insert-numbers.minimumIntegerDigits`: The minimum number of integer digits. Default is `1`.
- `insert-numbers.useGrouping`: Whether to use grouping separators. Default is `false`.

Example settings:

```json
{
  "insert-numbers.start": 1,
  "insert-numbers.minimumIntegerDigits": 1,
  "insert-numbers.useGrouping": false,
}
```

## Known Issues

N/A

## For more information

- Blog: [The Will Will Web](https://blog.miniasp.com/)
- Facebook: [Will 保哥的技術交流中心](https://www.facebook.com/will.fans/)

**Enjoy!**
