<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/github_username/repo">
    <img src="deno_logo/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">REST API in Deno</h3>

  <p align="center">
    A REST API for User database developed using new <a href="https://deno.land/">Deno</a> language with mongodb integration. <br />
    Made By <a href="https://smithgajjar.me">Smith Gajjar</a>
    <br />
    <br />
    <a href="https://deno.land/manual"><strong>Explore the docs »</strong></a>
    <br />
    ·
    <a href="https://github.com/smithg09/Deno_REST_API/issues/new?title=Bug%20Report">Report Bug</a>
    ·
    <a href="https://github.com/smithg09/Deno_REST_API/issues/new?title=Feature%20Request">Request Feature</a>

<p align="center">

<a href="https://github.com/smithg09/Deno_REST_API/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square" alt="LICENSE">
</a>

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/smithg09/Deno_REST_API/issues)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
</p>

  </p>
</p>


<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)


<!-- ABOUT THE PROJECT -->
## About The Project

A REST API Client for User database developed using new <a href="https://deno.land/">Deno</a> language with mongodb integration.
It uses 3rd party libraries like <a href="https://deno.land/x/oak">oak</a> for router and server configurations. <a href="https://deno.land/x/mongo">deno_mongo</a> used for mongodb configuration.  

### Built With

* [Deno](https://deno.land/)
* [Typescript](https://www.typescriptlang.org/)
* [deno_mongo](https://deno.land/x/mongo)
* [oak](https://deno.land/x/oak)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/smithg09/Deno_REST_API
```
2. Deno installation
```sh
    # Using PowerShell ( Windows )
    iwr https://deno.land/x/install/install.ps1 -useb | iex

    #Using Shell (macOS, Linux):
    curl -fsSL https://deno.land/x/install/install.sh | sh
```
_View more installation options [here](https://deno.land/#installation)_

3. MongoDB installation 

Download MongoDB Compass [here](https://www.mongodb.com/download-center/compass) 
Or Download MongoDB Community Server [here](https://www.mongodb.com/download-center/community) 

<!-- USAGE EXAMPLES -->
### Usage

To run this application you need set some flags due to security concerns built into Deno bydefault.  

#### `start app`
```sh
deno run --allow-env --allow-write --allow-read --allow-plugin --allow-net --unstable index.ts
```
This will start the local server on PORT 4000. Port can be changed from `config/environment.ts` file.

#### `reload plugins app`
```
deno run --allow-env --reload --allow-write --allow-read --allow-plugin --allow-net --unstable index.ts
```

_For more examples, please refer to the [Documentation](https://deno.land/std/examples)_



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Smith Gajjar - [@linkedin_handle](https://www.linkedin.com/in/smith-gajjar-5a27716b/) - smith.gajjar@gmail.com

Website Link: [smithgajjar.me](https://smithgajjar.me/)