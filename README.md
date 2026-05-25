# TypeScript Course

A comprehensive TypeScript learning resource designed to take you from fundamentals to advanced patterns.

## 📚 Overview

This course covers TypeScript essentials including type systems, object-oriented programming, functional programming patterns, and real-world application development. Whether you're new to TypeScript or looking to deepen your expertise, this repository provides practical examples and hands-on exercises.

## 🎯 Learning Objectives

- Master TypeScript fundamentals and type annotations
- Understand advanced type system features (generics, unions, intersections, mapped types)
- Learn object-oriented and functional programming patterns in TypeScript
- Build scalable applications with proper architecture
- Implement testing and debugging strategies
- Work with popular TypeScript frameworks and libraries

## 📋 Prerequisites

- Basic JavaScript knowledge
- Node.js (v14+) and npm installed
- A code editor (VS Code recommended)
- Familiarity with command-line terminals

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ts-course

# Install dependencies
npm install
```

### Running Examples

```bash
# Compile TypeScript
npm run build

# Run a specific example
npm start

# Run tests
npm test

# Watch mode for development
npm run dev
```

## 📂 Project Structure

```
ts-course/
├── src/
│   ├── basics/          # TypeScript fundamentals
│   ├── types/           # Advanced type system concepts
│   ├── oop/             # Object-oriented programming patterns
│   ├── fp/              # Functional programming patterns
│   ├── exercises/       # Hands-on exercises
│   └── examples/        # Real-world examples
├── tests/               # Test files
├── docs/                # Additional documentation
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project dependencies
└── README.md            # This file
```

## 💡 Key Topics

### Fundamentals

- Type annotations and inference
- Basic types (primitives, arrays, objects)
- Functions and arrow functions
- Interfaces and type aliases
- Enums and unions

### Advanced Types

- Generics and type constraints
- Union and intersection types
- Mapped types and utility types
- Conditional types
- Template literal types
- Decorators

### Object-Oriented Programming

- Classes and inheritance
- Access modifiers and encapsulation
- Abstract classes and interfaces
- Design patterns (Singleton, Factory, Observer)

### Functional Programming

- Higher-order functions
- Pure functions and immutability
- Function composition
- Currying and partial application
- Functional data structures

### Testing & Best Practices

- Unit testing with Jest
- Type-safe testing patterns
- Error handling strategies
- Code organization and modularity

## 📖 Usage Examples

### Basic Type Annotation

```typescript
// Variables with type annotations
const name: string = "TypeScript";
const count: number = 42;
const active: boolean = true;

// Function with types
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

### Interfaces and Types

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean;
}

type Role = "admin" | "user" | "guest";

class UserAccount implements User {
  id: number;
  name: string;
  email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
```

### Generics

```typescript
function identity<T>(arg: T): T {
  return arg;
}

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}
```

## 🧪 Testing

This project uses Jest for unit testing. Run tests with:

```bash
npm test

# Run tests in watch mode
npm test -- --watch

# Generate coverage report
npm test -- --coverage
```

## 🔧 Configuration

### TypeScript Configuration (`tsconfig.json`)

Key compiler options:

- `target`: ES2020 - JavaScript version to compile to
- `module`: commonjs - Module system
- `strict`: true - Enable all strict type-checking options
- `resolveJsonModule`: true - Allow importing JSON files
- `esModuleInterop`: true - Compatibility with CommonJS modules

## 📚 Resources

- [Official TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) - Type definitions repository

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Author

Created as an educational resource for TypeScript learners.

## ❓ FAQ

**Q: Do I need prior TypeScript experience?**
A: No, this course starts from the basics. Basic JavaScript knowledge is recommended.

**Q: How long does the course take?**
A: It depends on your pace. Self-paced learning allows you to progress at your own speed.

**Q: Can I use this for teaching?**
A: Yes! This material is designed to be educational and shareable.

**Q: Where do I submit exercises?**
A: Check the exercises directory for submission guidelines.

## 📞 Support

For questions or issues:

- Open an issue on GitHub
- Check existing documentation in the `docs/` folder
- Review examples in the `src/examples/` directory

---

Happy learning! 🚀
