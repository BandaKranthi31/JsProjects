
const JAVA = {
    name : "Java",
    speciality : "Oop",
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghAg4uv07RTuHI8lB-A2v1YptxNRRLZ9xEg&s',
     info :'Java is an object-oriented, class-based programming language. It is designed to be platform-independent, using the principle of "write once, run anywhere." Java code is compiled into bytecode, which is then run on the Java Virtual Machine (JVM).',
    link : 'https://dev.java/learn/'
}

const JS = {
    name : "JavaScript",
    speciality : "Event Driven",
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTEhm8ZAgRNf_Kr6AE8SE5PwKwRUkQh44sg&s',
    info :'JavaScript is a versatile, high-level programming language mainly used for web development. It enables dynamic content on webpages by running in the browser, but can also be used on the server-side (Node.js). JS supports event-driven, functional, and imperative programming styles.',
    link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
}

const C = {
    name : 'C',
    speciality:'Multi - Paradigm',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6uGiVrgFgwrxVhhFCAOPbwOl7rIcl3nYnsg&s',
    info :'C is a general-purpose, procedural programming language. It provides low-level access to memory and is highly efficient, making it ideal for system programming. C has influenced many modern languages and is known for its simplicity and portability.',
    link:'https://devdocs.io/c/'
}

const PYTHON = {
    name : 'Python',
    speciality:'reflective',
    img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/121px-Python-logo-notext.svg.png',
   info: 'Python is an interpreted, high-level, general-purpose programming language. It emphasizes readability and simplicity, making it popular for web development, data analysis, artificial intelligence, and more.',
    link: 'https://www.python.org/'
}

const CPP = {
    name: "C++",
    speciality: "Object-Oriented, System Programming",
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
    info: 'C++ is a powerful, high-performance language often used for system software, game development, and applications that require high performance. It supports object-oriented, procedural, and generic programming paradigms.',
    link: 'https://en.cppreference.com/w/cpp'
};

const CSHARP = {
    name: "C#",
    speciality: "Object-Oriented, .NET Framework",
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgngNtdqjqeLvzKK1QlkMMDONwXWBJ8D3Dlw&s',
    info: 'C# is a modern, object-oriented programming language developed by Microsoft. It is primarily used for developing Windows applications and is the main language for the .NET framework.',
    link: 'https://learn.microsoft.com/en-us/dotnet/csharp/'
};

const RUST = {
    name: "Rust",
    speciality: "Systems Programming, Safety",
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqnPUC3b9cif4hvg9GtzuuDeGoKPzYqFkj8Q&s',
    info: 'Rust is a systems programming language focused on safety, performance, and concurrency. It is designed to help developers avoid common programming bugs while providing low-level memory control.',
    link: 'https://www.rust-lang.org/'
};

const TAILWIND = {
    name: "Tailwind CSS",
    speciality: "Utility-First CSS Framework",
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Tailwind_CSS_Logo.svg',
    info: 'Tailwind CSS is a utility-first CSS framework that provides low-level, customizable design utilities. It allows developers to create unique designs without writing custom CSS.',
    link: 'https://tailwindcss.com/'
};

const HTML = {
    name: "HTML",
    speciality: "Markup Language for Web Pages",
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/HTML5_logo_with_text.svg/800px-HTML5_logo_with_text.svg.png',
    info: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages. It structures web content using elements like headings, paragraphs, and links.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
};

const CSS = {
    name: "CSS",
    speciality: "Cascading Style Sheets",
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
    info: 'CSS (Cascading Style Sheets) is used to style and layout web pages, such as setting fonts, colors, and spacing. It is a cornerstone technology alongside HTML and JavaScript.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
};



let Langs = [JAVA, JS, C, PYTHON, CPP, CSHARP, RUST, TAILWIND, HTML, CSS];


export default Langs;