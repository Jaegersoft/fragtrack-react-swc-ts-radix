# FRAGTrack Dashboard
## Context
This project contains is a modern refresh of the existing analytics and monitoring dashboard for the Orica FRAGTrack product, designed to provide insights into fragmentation data with improved performance and user experience.

## Prerequisites
Ensure you have the following installed before starting:
fds
- [Node.js v20](https://nodejs.org/en/) for the runtime environment.
- A code editor. We recommend [Visual Studio Code](https://code.visualstudio.com/download) for its extensive support and integrations.
- Essential Visual Studio Code Extensions for an enhanced development experience:
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for static code analysis.
  - [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for automatic code formatting.
  - [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) for faster coding with snippets.
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) for Tailwind CSS class name completion.
  - [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) for real-time Jest test results in your IDE.
  - [Playwright Test for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) to simplify working with Playwright tests.
  - [Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) This extension helps you to fill in commit message according to Conventional Commits.


## Getting Started
1. Navigate to the root of the project directory.
2. Open a terminal window in Visual Studio Code (Shortcut: `Ctrl` + `` ` ``).
3. Install the project dependencies by running: ```pnpm install```.
4. Start the application with: ```pnpm run dev```
5. Access the application in your browser at [http://localhost:5173/](http://localhost:5173/).


## Code Style Guidelines
For information on project coding standards, see the [Code Style Guidelines](CODESTYLE.md).

## Technology Stack
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- **Vite**: A modern frontend build tool that significantly improves the development experience.
- **SWC**: A super-fast compiler written in Rust; used in this project as a TypeScript / JavaScript compiler.
- **MUI (Material UI)** An open-source React component library that implements Google's Material Design.
- **Prettier**: An opinionated code formatter that ensures code consistency.
- **ESLint**: A static code analysis tool for identifying problematic patterns in JavaScript code.
- **typeroute**: A type-safe routing library for TypeScript projects.
- **Preact signals**: A state management library leveraging the signals pattern for React.
- **Plotly**: A graphing library for making interactive, publication-quality graphs online.
- **React Query**: A library for fetching, caching, and updating asynchronous data in React.
- **pnpm**: A fast and disk space efficient package manager.

## Testing Strategy
The project testing approach should balance quality with efficiency, using Jest for unit tests and Playwright for e2e tests. This strategy ensures reliability and user experience integrity across the Orica FragTrack Dashboard.

### Unit Tests

- **Focus**: Concentrate on key business logic within services.
- **Execution**: Run with `pnpm run test:unit`.
- **Purpose**: Validate critical functionalities and isolate code units for robustness.

### End-to-End Tests

- **Focus**: Target high-risk functionalities and critical user paths.
- **Execution**: Run with `pnpm run test:e2e`.
- **Purpose**: Ensure overall application integrity and catch regressions, simulating real user interactions.

### Approach

We adopt a pragmatic testing methodology, focusing on crucial areas for maximum impact. This dual-layered testing ensures core logic accuracy and overall application functionality, maintaining development velocity and release confidence.

## TODO
- Services example
- Code must pass a Snyk CVE scan and Snyk code scan
- Use knip as package script
- Add ref to code style guide, getting started, etc/
