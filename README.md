# Object Parser

Object Parser is a lightweight and efficient library designed to parse and manipulate complex object structures in JavaScript. It simplifies handling nested objects, extracting data, and transforming object formats.

## Features

- Parse and traverse deeply nested objects.
- Extract specific data using custom paths.
- Transform objects into desired formats.
- Lightweight and easy to integrate.

## Installation

Install the library using npm:

```bash
npm install object-parser
```

## Usage

Here's a quick example of how to use Object Parser:

```javascript
const ObjectParser = require('object-parser');

const data = {
  user: {
    name: 'John Doe',
    address: {
      city: 'New York',
      zip: '10001'
    }
  }
};

const parser = new ObjectParser(data);
const city = parser.get('user.address.city'); // 'New York'
console.log(city);
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, please open an issue or reach out to the maintainers.
