<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>TMDB MOVIE EXPLORER</h1>
<h3>◦ HTTPStatus Exception: 404</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat-square&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat-square&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/SzybkiRito/tmdb-movie-explorer?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/SzybkiRito/tmdb-movie-explorer?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/SzybkiRito/tmdb-movie-explorer?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/SzybkiRito/tmdb-movie-explorer?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents

- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📂 repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
  - [🔧 Installation](#-installation)
  - [🤖 Running tmdb-movie-explorer](#-running-tmdb-movie-explorer)
  - [🧪 Tests](#-tests)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 📍 Overview

TMDB Movie Explorer is a straightforward and user-friendly website developed using React. This project was undertaken as a means to learn and master the basics of React. The core functionality of the website revolves around fetching movie data from the [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started). Visitors to the site are presented with a single-page interface where they can browse various movies. Each movie listing provides a general overview, including essential details and ratings. This format makes it easy for users to quickly find and assess movies of interest.

---

## 📂 Repository Structure

```sh
└── tmdb-movie-explorer/
    ├── package-lock.json
    ├── package.json
    ├── public/
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    └── src/
        ├── api/
        │   ├── API_UTILS.js
        │   └── TMDB_API.js
        ├── components/
        │   ├── actor_card/
        │   ├── app/
        │   ├── header/
        │   ├── iconButton/
        │   ├── movie/
        │   ├── movie_list/
        │   ├── movieRating/
        │   ├── navigation/
        │   └── popup/
        ├── index.css
        ├── index.js
        ├── reportWebVitals.js
        └── setupTests.js

```

---

## 🚀 Getting Started

### 🔧 Installation

1. Clone the tmdb-movie-explorer repository:

```sh
git clone https://github.com/SzybkiRito/tmdb-movie-explorer
```

2. Change to the project directory:

```sh
cd tmdb-movie-explorer
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running tmdb-movie-explorer

```sh
npm start
```

### 🧪 Tests

```sh
npm test
```

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/SzybkiRito/tmdb-movie-explorer/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/SzybkiRito/tmdb-movie-explorer/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/SzybkiRito/tmdb-movie-explorer/issues)**: Submit bugs found or log feature requests for SZYBKIRITO.

#### _Contributing Guidelines_

<details closed>
<summary>Click to expand</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone <your-forked-repo-url>
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear and concise message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

**MIT LICENSE**

Copyright (c) 2012-2023 Scott Chacon and others

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---
