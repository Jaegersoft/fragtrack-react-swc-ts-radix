var esmModules = ["@preact", "@preact/signals-react"];

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  // transformIgnorePatterns: ["!node_modules/"],
  transform: { "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest" },
  transformIgnorePatterns: [`node_modules/(?!(?:.pnpm/)?(${esmModules.join("|")}))`] // moduleNameMapper: {
};
