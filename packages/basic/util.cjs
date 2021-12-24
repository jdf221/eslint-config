module.exports.configFileOverride = function (
  options,
  fileTypes = ["js", "ts"]
) {
  options = Object.assign(
    {
      files: [
        "./*.config.{ext}",
        "**/.eslintrc.{ext}",
        "**/postcss.config.{ext}",
        "**/tailwind.config.{ext}",
        "**/windi.config.{ext}",
      ],
    },
    options
  );

  options.files = options.files.flatMap((fileGlob) => {
    return fileTypes.map((fileType) => {
      return fileGlob.replaceAll("{ext}", fileType);
    });
  });

  return options;
};

module.exports.ansiInverseText = function (string) {
  return "\033[7m" + string +"\033[m";
};
