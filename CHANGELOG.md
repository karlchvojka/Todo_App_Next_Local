# Changelog
All notable changes to the ReactJS template will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## Known Issues:
### Uncaught (in promise) Error:
#### Desc:
This is a known browser console error. This is caused by some browser extentions especially on chrome. Not by the app.

#### Status
Known bug. [Details](https://github.com/mozilla/webextension-polyfill/issues/384)

### Google Font Import Bug
#### Desc:
Found that there was a console warning being triggered while in dev mode pertaining to layout.css

#### Status
Bug is known by Vercel, and is in active [discussion](https://github.com/vercel/next.js/discussions/49607).

Will keep an eye on the discussion if/when a patch is released.

#### Current Fix:
Suggested fix as per the discussion:
- Added "preload" param to Inter variable declaration
- Seemed to clear it up, will check on this in future.

## [0.2.0] 
## 2023-09-23 Base functionality

### changed
  - ~/src/app/page.tsx
    - Added docuementation to handleClickOpen and handleClickClose functions
    - Added documentation to Home function
    - Added DayJS default setters.

  - ~/src/app/layout.tsx
    - Added documentation to the metadata function, and RootLayout function.

  - ~/src/app/_components/modules/Header/Header.tsx
    - Cleaned up some code standards.

  - ~/src/app/_lib/utils/dateFormat.tsx
    - Added proper documentation throughout.

  - ~/src/app/_lib/_hooks/getLocalStorage.tsx
    - Fixed small bug where app brakes when starting for the first time and or when the localStorage doesnt contain an todoList key.

  - ~/src/app/_componets/elements/TodoItem/TodoItem.tsx
    - Removed unneeded Dayjs stuff.

  - ~/src/app/_components/modules/AddTaskDialog.tsx
    - Removed unneeded Dayjs stuff
    - Cleaned up code standards on line #5

  - ~/src/app/_components/modules/EditTaskDialog.tsx
    - Removed unneeded Dayjs stuff
    - Cleaned up code standards on line #5

## [0.1.0]
## 2023-07-11 Cleanup Cont.

### Added
- ~/src/app/_lib/_types/formTypes.tsx
  - Exporting out the Form Types from local

- ~/src/app/_lib/_utils/dateFormat.tsx
  - Extracted common date functions to helper functions

### Changed
- ~/tsconfig.json
  - Added routes for the ~/src/app/_lib/_types, and /utils folders

- ~/src/app/page.tsx
  - Code cleanup

- ~/src/app/globals.css
  - Reordered CSS variables alphabetically.

- ~/src/app/_lib/_hooks/pushLocalStorage.tsx
  - Added Hook Documentation

- ~/src/app/_components/modules/TodoList/TodoList.tsx
  - Removed unneeded imports
  - Aphabatised params/args

- ~/src/app/_components/modules/Header/Header.tsx
  - Added/organized comments for imports

- ~/src/app/_components/modules/EditTaskDialog/EditTaskDialog.tsx
  - Removed unneeded imports
  - Cleaned up documentation comments
  - Alphabetising params/args

- ~/src/app/_components/modules/AddTaskDialog/AddTaskDialog.tsx
  - Removed unneeded imports
  - Cleaned up documentation comments
  - Alphabetising params/args

- ~/src/app/_components/elements/TodoItem/
  - Removed unneeded imports
  - Cleaned up documentation comments
  - Alphabetising params/args
  - Added Method Documentations

## 2023-07-10 Cleanup

### Added
### Changed
- tsconfig.json:
  - Cleand up organizing of config params.
  - Alphabetalized all items.
- tailwind.config.js
  - Cleand up organizing of config params.
  - Alphabetalized all items.

## 2023-07-06
### Added
- CRUD hooks and local storage
  - IMP HandleTextOnChange
    - Saves text changes from fields into state
  - IMP handleDataChange
    - Saves the new date to state
    - Got all TS errors figured out.
  - IMP Submit functionality
    - Takes current state, creates new todo list, pushes to local storage.
  - IMP Delete todo functionality.
  
## 2023-06-19
### Added
- lib and hooks folders.
- CRUD hooks using localStorage
  - getLocalStorage
    - Allows getting data from localStorage


## 2023-06-11

### Added
- Added Add Task Form Dialog
- Added path aliases:
  - Modules
  - Elements
- Added Todo List Component
- Added Todo Item Component

### Changed
- Edited Page component to include test data, and new components

### Removed
- Test component

## 2023-06-07

### Added
- Installed NextJS
- Installed Material UI
- Added homepage layout
- Added Header


### Changed

### Removed
