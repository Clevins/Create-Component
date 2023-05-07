const fs = require("fs");
import { describe, it, expect, test, jest } from "@jest/globals";

import { createFile } from "./../lib/utils";

describe("Create File", () => {
  it("Should Create File ", () => {
    const FilePath = "testFolder/Test.txt";
    const FileContent = "Hello Worlds!";

    createFile(FilePath, FileContent);

    expect(fs.existsSync(FilePath)).toBeTruthy();
  });

  it("Should Throw Error beciuse of invalid file path", () => {
    expect(() => {
      const FilePath = "";
      const FileContent = "Hello Worlds!";
      createFile(FilePath, FileContent);
    }).toThrow();
  });
});
