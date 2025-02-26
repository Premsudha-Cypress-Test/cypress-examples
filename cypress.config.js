const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);

      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === "chrome" || browser.name === "edge") {
          launchOptions.args.push(
            "--disable-password-manager-reauthentication",
            "--disable-save-password-bubble",
            "--disable-password-generation",
            "--disable-password-leak-detection",
            "--disable-password-separated-signin-flow"
          );
        }
        return launchOptions;
      });
    },
  },
});
