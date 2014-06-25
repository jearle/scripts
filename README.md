# My Helper Scripts

These are scripts that I've been writing over the years to help automate my development process.

## simple-web-project

### Bash

This command creates a simple web project scaffold.

To execute the command run the following:

```bash
simple-web-project ./path/to/dir
```

It creates a simple structure with the following tree:

```
.
├── css
│   └── main.css
├── img
├── index.html
├── js
│   └── main.js
└── serve
```

The serve file is the following mod python command:

```python
python -m SimpleHTTPServer
```

The command takes an optional port number. For example:

```bash
./serve 8989
```

## node-project

### Bash

This command creates a simple node project scaffold, complete with mocha tests, and the chai testing library.

To run the command execute the following:

```bash
node-project ./path/to/dir
```

The above command will generate the following:

```
.
├── index.js
├── lib
│   └── test-file.js
├── node_modules
├── package.json
└── test
    └── lib
        └── test-file.js
```