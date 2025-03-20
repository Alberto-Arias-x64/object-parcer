const rawObject = {
  "name": "John Doe",
  "age": 30,
  "email": "johndoe@example.com",
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "zip": "12345"
  },
  "preferences": {
    "newsletter": true,
    "notifications": ["email", "sms"]
  }
};

function escapeSpecialChars(object) {
  return JSON.stringify(object)
    .replace(/\\/g, "\\\\") // Escape backslashes
    .replace(/"/g, '\\"') // Escape double quotes
    .replace(/\n/g, "\\n") // Escape new lines
    .replace(/\r/g, "\\r") // Escape carriage returns
    .replace(/\t/g, "\\t"); // Escape tabs
}

console.log(escapeSpecialChars(rawObject));