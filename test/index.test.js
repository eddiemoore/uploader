const app = require("../src");
const chai = require("chai");
const expect = chai.expect;
const { version } = require("../package.json");

describe("Uploader Core", () => {
  it("Can return version", () => {
    expect(app.getVersion()).to.equal(version);
  });

  it("Can display header", () => {
    expect(app.generateHeader(app.getVersion())).to.equal(`
     _____          _
    / ____|        | |
   | |     ___   __| | ___  ___ _____   __
   | |    / _ \\ / _\` |/ _ \\/ __/ _ \\ \\ / /
   | |___| (_) | (_| |  __/ (_| (_) \\ V /
    \\_____\\___/ \\__,_|\\___|\\___\\___/ \\_/

  Codecov report uploader 0.1.0`);
  });
});
