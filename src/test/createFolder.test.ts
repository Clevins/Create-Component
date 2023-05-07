const fs = require("fs");
import { describe, it, expect, test, jest } from "@jest/globals";

import { createFolder } from "./../lib/utils";

describe("Create Folder", () => {
  it("Should Create Folder ", () => {
    const folderName = "testFolder";

    createFolder(folderName);

    expect(fs.existsSync(folderName)).toBeTruthy();
  });

  it("Should Create Nested Folder", () => {
    const folderName = "testFolder/test1/test2";

    createFolder(folderName);

    expect(fs.existsSync(folderName)).toBeTruthy();
  });

  // it("Should Throw error due to invalid path", () => {
  //   const folderName = "#test%Folder123$@<>";

  //   // const t = () => {
  //   //     throw new TypeError();
  //   //   };
  //   createFolder(folderName);

  //   console.log(fs.existsSync(folderName));
  //   // expect(fs.existsSync(folderName)).toBeFalsy();

  //   // expect(fs.existsSync(folderName)).toBeTruthy();
  // });
});
