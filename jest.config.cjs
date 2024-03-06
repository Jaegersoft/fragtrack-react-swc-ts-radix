var esmModules = ["@preact", "@preact/signals-react"];

module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true
          },
          transform: {
            react: {
              runtime: "automatic"
            }
          }
        }
      }
    ]
  },
  testPathIgnorePatterns: ["/e2e/"], //Run end to end tests with playwright test runner
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: [`node_modules/(?!(?:.pnpm/)?(${esmModules.join("|")}))`]
};
