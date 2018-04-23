import Menhera from "menhera";
import CLI from "menhera-cli";
import * as commands from "./commands";
import * as messages from "./messages";

export default new Menhera({
  _mount: {
    cli: [CLI]
  },
  CLI: {
    messages,
    commands,
    config: {
      version: "0.0.1"
    }
  }
});
