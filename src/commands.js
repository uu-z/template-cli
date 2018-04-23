export const _ = {
  options: { foo: { alias: "f", desc: "foo" } },
  exec({ _, env, _key }) {
    if (env.NONE_INPUTS) {
      _.$use({ CLI: { help: _key } });
    }
  }
};

export const serve = {
  desc: "run serve on port",
  args: ["port"],
  options: {
    test: {
      alias: "t",
      desc: "t"
    }
  },
  exec({ _, port, _key, env }) {
    if (env.NONE_FULL_ARGS) {
      _.$use({ CLI: { help: _key } });
      return;
    }
    _.$use({ CLI: { Message: { serve: "success" } } });
  }
};
