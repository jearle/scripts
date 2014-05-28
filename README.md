# My Helper Scripts

These are scripts that I've been writing over the years to help automate my development process.

## web-project

### Bash

A simple web project.

To execute the command run the following:

```bash
web-project ./path/to/directory
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