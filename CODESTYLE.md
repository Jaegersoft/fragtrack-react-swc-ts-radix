# Code Style Guidelines

This document outlines the coding conventions and best practices for this project. Adhering to these guidelines ensures code quality, maintainability, and consistency throughout the codebase.

## ESLint Configuration

- Adjust ESLint to enforce and auto-fix on save when possible.

## General Guidelines

1. **No workspaces or local packages** - Avoid using workspaces or local packages to keep dependencies clear and manageable.
2. **Minimal explicit use of `any`** - Prefer explicit types or `unknown` over `any`.
3. **Keep types close to consumer** - Define types in the same file as their consumer, unless shared; then place in their own file.
4. **One React component per file** - Ensure maintainability and clarity.
5. **No explicit return type for React components** - Infer types for simplicity.
6. **No circular references** - Prefer file separation for all consumers to access.
7. **No extraneous exports** - Export only what is necessary.
8. **Adhere to SOLID principles** - Follow these principles for object-oriented design and programming.
9. **Service-based development** - Encapsulate business logic in services.
10. **No logic in components** - Use services instead of embedding logic in React components.
11. **Avoid `useEffect`, `useMemo`, and `useCallback`** - Prefer stable service functions and signals.
12. **No `let`** - Prefer `const` and immutability.
13. **No `console`** - Avoid using console logs.
14. **No function expressions** - Use function declarations, except for inline lambdas.
15. **No AIIFE** - Prefer Promise for asynchronous operations.
16. **No IIFE** - Avoid immediately invoked function expressions.
17. **No extraneous props or prop drilling** - Use component composition for prop management.
18. **No “global state”** - Keep state as close to the consumer as possible.
19. **Prefer `async`, `await`** - Use asynchronous syntax for clarity and readability.

## Specific Practices

20. Prefer pure functions everywhere for predictability.
21. Use `readonly` and const assertions for immutability.
22. Avoid optional chaining without nullish coalesce to handle undefined values explicitly.
23. No nested optional chaining. Use valid object states or discriminated unions.
24. Avoid unnecessary `async`. Use return over `return await`, unless catching exceptions.
25. Define types explicitly rather than inline for clarity and reusability.
26. Favor concurrency over serial asynchronicity for performance.
27. Must gracefully handle HTTP status codes like 400, 401, 403, 404, 429, and 500. Use generic error handling for other statuses.

## Project Structure

28. Use a feature-based project structure, utilizing aliases for clean imports.
29. Use relative imports within features and aliased imports between features for clarity.
30. Avoid using errors for control flow to prevent unintended side effects.

## Integration Guidelines

1. **REST API JSON for server data** - No GraphQL.
2. **Maintain state in URL** - Ensure UI states are permalinked.
3. **Use skeletons to reduce Cumulative Layout Shift (CLS)**.
4. **Data Adapter pattern for API responses** - Use libraries like yup or zod for validation.

## Additional Considerations
- Instrument all actions with Application Insights for performance monitoring.
- Ensure code passes Snyk CVE and code scans for security.
- Use `knip` as package script for consistency.
- Site must gracefully degrade for small screens and score 90+ in Lighthouse desktop assessments.
- Commit messages should conform to [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#specification).
