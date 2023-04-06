# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is an extension of javascript that allows the merger of html tags to be utilized within the Javascript enviorment.  Javascript logic can be called within html tags that that will give interactive with the webpage.  React will take an export from one element to render data on the browser.  This element is call the Parent element and will live within you App.js file.  The data being exported must be witin the return statement. If more than one html tag is being used, or components are being called they must be nested with in React Fragments.

Researched answer: JSX component represents HTML tag syntax but is not HTML you can put several components together to make a more complex HTML page. JSX, also isn’t a legitimate JS code, it must be compiled into JS with a tool like Babel.  Taking aspects of the Html gives the ability for presentation with html and logic execution with Javascript.

2. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: Yet Another Resource Negotiator.  In Test Driven Developement, having the ability to verify code entries to legacy code is needed to mitigate conflict of data when merging to the main body of a product.  Yarn are a collection of files or dependencies needed to run testing software to troubleshoot and strech test code being developed. There are many dependencies needed, so the a package manager is needed to compile all of the data. ~ not sure what files are modifed, lets find out!

Researched answer: Yarn is a package manager for Node. Yarn writes its dependencies to a file named package. json when calling yarn in the terminal. Package.json sits in the root folder of your project, and stores the dependencies files into the node_modules folder. It is commonly used when code is checked out for a project for testing or revising. Another reason to pull dependencies is when another developer has added dependencies to the project.

3. What is a React component?

Your answer: React Components are ways to compartmentalize features that are added to a appication.  This allows additional features to be created, tested, and deployed without disrupting the main body of the application.  Since App.js can be the only component deployed to React, you can refrence the components using a component call nested within the return statement.

Researched answer: Instead of building the whole UI under one single file like HTML. A component is used to divides the UI into smaller pieces. The two types of components are functional and class. 

4. What is the difference between state values and props in React?

Your answer: When variables are expected to change or the intent is for the variable held to be changed, State value are used to update the render on the React App.  State value is like a place holder for data to be rendered.  Setter state function is used to update the render. The value of the data is not actually changing, only the representation of data is changed on the UI.  Props are away to pass data from a parent element (App.js) to a child element (component files)  the use of props is an effective way to access data and extract and reuse on other components reducing repetition of having to write simmilar code for diffrent components.

Researched answer: State is store property values that belong to a componen,  when the state of an object changes React re-renders the component. Props stand for properties, they are used for passing data from one component to another. The flow of data moving from parent to child is called uni-directional flow.

5. What is the DOM?

Your answer: The Document Object Model is the interaction and structure of web documents

Researched answer: The DOM is the representation of objects, structure and content of documents that interface with the browser. The DOM represents the document as nodes and objects so programming languages can interface with the web page.

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: A division acts as a container to groups sections of html together.  Its a way to orgininize similar content within the body.  ~ I dont know what a span is, lets find out!

Researched answer: Div tags are used for block level orginization.  A block element is a page element that has a width of the page and each element is on its own line.  Span tags are used for inline orginization, it does not start a new line, only takes up as much space on the page as its content.  Often uses is to add or target line items for CSS

## Looking Ahead: Terms for Next Week

1. Object-oriented programming:  OOP is a computer programming model that structures software design as data or objects instead of functions and logic.  The structing of software this way makes it easy to access large, complex programs that are often updated or maintained.

2. Ruby: Ruby is interpreted, object-oriented programming language.  Ruby snippits and dependencies are called gems, and are accessable from github.  The language is said to have one of the fastest streamline development flow, but the application's runspeed weighed down by database connections.  Also the efficentcies of how the code reads affects the processing of the application.

3. Implicit return: Implicit returns is whena function returns a value without the return keyword used. some examples of this.  In Javascript if the curly braces are omited the return is considered implicit. In Ruby the final staement inside a method is considered an implicit return.

4. Ruby blocks: Ruby blocks are chunks of code, they can have names assigned to them and the code blocks are nested within a pair of curly braces.  The block is always invoked by a function with the corresponding name. To invoke a block you need to use a yield statement.

5. Ruby hashes: Hashes are a collection of key value pairs. It is simmilar to arrays in which there is an index.  The indexing is done with object type key and not number index. The keyword .new is used to create a hash.
