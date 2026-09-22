# Dev documentation

If you are a developer, this is your entry point.

## Files and folders

This project contains the following files and folders

| path              | description                                           |
| ------------------| ----------------------------------------------------- |
| .github/          | Contains Github Actions (CI)                          |
| dist/             | Contains the Exported / bundled code __*__            |
| doc/              | This folder, contains dev documentation               |
| src/              | Contains the source code                              |
| .gitignore        | Files never to commit                                 |
| hacs.json         | HACS configuration                                    |
| LICENCE           | Licence file of the repository                        |
| package-lock.json | All NPM dependencies installed, never modify manually |
| package.json      | List all dependencies and bundle config               |
| README.md         | Entry repository description & instructions           |
| tsconfig.json     | Typescript Configuration                              |

> __*__ Do not modify `dist/` sources directly, it may be overwritten, modify sources in `src/`

## Introduction

[Parcel](https://parceljs.org/) is used as
bundler (what basically creates `dist/` from `src/`)

It is coded in typescript for type awareness instead of vanilla Javascript.
But the goal is not to bloat the code, but to keep it simple and clean.

# What's next

See [source code documentation](../src/README.md)
