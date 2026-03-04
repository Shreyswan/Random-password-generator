import { zxcvbn, ZxcvbnResult, zxcvbnOptions } from "@zxcvbn-ts/core";
import * as commonPackage from "@zxcvbn-ts/language-common";
import * as englishPackage from "@zxcvbn-ts/language-en";

const options = {
  dictionary: {
    ...commonPackage.dictionary,
    ...englishPackage.dictionary,
  },
  graphs: commonPackage.adjacencyGraphs,
};

zxcvbnOptions.setOptions(options);

function CheckStrength(password: string) {
  const result: ZxcvbnResult = zxcvbn(password);
  return result.score;
}

export default CheckStrength;
