<!--
Copyright (C) 2020,2021  CismonX <admin@cismon.net>

Copying and distribution of this file, with or without modification, are
permitted in any medium without royalty, provided the copyright notice and
this notice are preserved. This file is offered as-is, without any warranty.
-->

# License Notice

## Other project files

Project files listed below cannot carry a license notice by themselves, due to
file format restrictions.

```text
assets/texinfo.png
language-configuration.json
package.json
package-lock.json
tsconfig.json
```

They should be treated as if they each contains the following text:

```text
Copyright (C) 2020,2021  CismonX <admin@cismon.net>

Copying and distribution of this file, with or without modification, are
permitted in any medium without royalty, provided the copyright notice and
this notice are preserved. This file is offered as-is, without any warranty.
```

## Files from other projects

Source code from the projects listed below are **not** part of vscode-texinfo,
and they are not included in the codebase. However, when building the project,
they are downloaded, compiled, and packaged into a single binary file alongside
with vscode-texinfo.

| Project | Copyright Holder | License |
| -       | -      | -       |
| [Fast HTML Parser](https://github.com/taoqf/node-html-parser) | Tao Qiufeng | [MIT](https://github.com/taoqf/node-html-parser/blob/main/LICENSE) |
| [Texinfo syntax highlighting](https://github.com/Alhadis/language-texinfo) | John Gardner | [ISC](https://github.com/Alhadis/language-texinfo/blob/master/LICENSE.md) |

The following projects are required during runtime of vscode-texinfo, but as a
separate program.

| Project | Copyright Holder | License |
| -       | -                | -       |
| [Visual Studio Code](https://github.com/microsoft/vscode) | Microsoft Corporation | [MIT](https://github.com/microsoft/vscode/blob/main/LICENSE.txt) |
| [GNU Texinfo](https://www.gnu.org/software/texinfo) | Free Software Foundation | [GPL-v3](https://git.savannah.gnu.org/cgit/texinfo.git/tree/COPYING)-or-later |