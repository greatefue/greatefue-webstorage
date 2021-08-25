<h2 align="center">Great Efue Web Storage</h2>

<p align="center">A package that encrypt and save/get and decrypt data on web storage.</p>

<p align="center">
    <a href="https://www.npmjs.com/package/greatefue-webstorage"><img src="https://img.shields.io/npm/v/greatefue-webstorage.svg?style=flat-square" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/package/greatefue-webstorage"><img src="https://img.shields.io/npm/dm/greatefue-webstorage.svg?style=flat-square" alt="NPM Downloads" /></a>
    <img src="https://github.com/greatefue/greatefue-webstorage/workflows/CI/badge.svg" alt="CI" />
    <a href="https://github.com/greatefue/greatefue-webstorage/tree/1.0.4"></a>
    <a href="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fgreatefue%2Fgreatefue-webstorage.svg?type=shield"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fgreatefue%2Fgreatefue-webstorage.svg?type=shield"/></a>
</p>


## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Optional Parameter Table](#complete-usage-table)
4. [Releases](./HISTORY.md)
4. [Author](#author)
6. [License](#license)
7. [Team](#team)
<!-- 13. [Technology Sponsors](#technology-sponsors) -->

## <a name="installation"></a>Installation

```bash
$ yarn add greatefue-webstorage
$ npm i greatefue-webstorage
```

## <a name="usage"></a>Usage

In your .ts or .js file, 


1. import the package

```ts
import { LS_Save, LS_Get } from 'greatefue-webstorage';
```

2. Call the function

```ts or js
LS_Save("key", "data"); //O8tT%PnlxR%M2#dwcuA7Qmzv+sbCk={(-=_!uV@oPHCjX>N{oT@ms+)*(%%^f'I@Dm*(Ym!ER9CpQ3VOGIXV4+G2Ol1iYZj@#$_&
console.log(LS_Get("key")); //data
```

## <a name="complete-usage-table"></a>Complete Usage Table

|**Functions**   | **Return Data type** | **Description**                                          | **Example**                             |
| ------------   |:--------------------:| :------------------------------------------------------- | :-------------------------------------- |
| LS_Save        | void                 | Encrypt and save string value to local storage           | ``` LS_Save("key", "data"); ```         |
| LS_Get         | string               | Get and decrypt string value from local storage          | ``` LS_Get("key") ```                   |
| LS_SaveObject  | void                 | Encrypt and save object value to local storage           | ``` LS_SaveObject("key", {}); ```       |
| LS_GetObject   | object               | Get and decrypt object value from local storage          | ``` LS_GetObject("key") ```             |
| LS_SaveArray   | void                 | Encrypt and save array value to local storage            | ``` LS_SaveArray("key", []); ```        | 
| LS_GetArray    | array                | Get and decrypt array value from local storage           | ``` LS_SaveArray("key") ```             | 
| SS_Save        | void                 | Encrypt and save string value to session storage         | ``` SS_Save("key", "data"); ```         |
| SS_Get         | string               | Get and decrypt string value from session storage        | ``` SS_Get("key") ```                   |
| SS_SaveObject  | void                 | Encrypt and save object value to session storage         | ``` SS_SaveObject("key", {}); ```       |
| SS_GetObject   | object               | Get and decrypt object value from session storage        | ``` SS_GetObject("key") ```             |
| SS_SaveArray   | void                 | Encrypt and save array value to session storage          | ``` SS_SaveArray("key", []); ```        | 
| SS_GetArray    | array                | Get and decrypt array value from session storage         | ``` SS_SaveArray("key") ```             | 



## <a name="author"></a>Author

**Great Efue**

* [GitHub Profile](https://github.com/greatefue)
* [Twitter Profile](https://twitter.com/achillesefue)
* [LinkedIn Profile](https://linkedin.com/in/greatefue)


Please consider supporting me on Patreon.
<a href="https://www.patreon.com/bePatron?u=53060354" data-patreon-widget-type="become-patron-button">Become a Patron of Great Efue!</a>


## <a name="license"></a>License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fgreatefue%2Fgreatefue-webstorage.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fgreatefue%2Fgreatefue-webstorage?ref=badge_large)


## <a name="team"></a>Team

These are folks that keep the project moving and are resources for help.

### Technical Steering Committee (TSC)

The people who manage releases, review feature requests, and meet regularly to ensure GreatEfue-webstorage is properly maintained.

<table>
<tbody>
<tr>
<td align="center" valign="top" width="11%">
<a href="https://github.com/greatefue">
<img src="https://github.com/greatefue.png?s=75" width="75" height="75">
<br />
Great Efue
</a>
</td>
</tr></tbody></table>


### Reviewers

The people who review and implement new features.

<table><tbody><tr><td align="center" valign="top" width="11%">
<a href="https://github.com/greatefue">
<img src="https://github.com/greatefue.png?s=75" width="75" height="75"><br />
Great Efue
</a>
</td></tr></tbody></table>

### Committers

The people who review and fix bugs and help triage issues.

<table><tbody><tr><td align="center" valign="top" width="11%">
<a href="https://github.com/greatefue">
<img src="https://github.com/greatefue.png?s=75" width="75" height="75"><br />
Great Efue
</a>
</td></tr></tbody></table>



<!-- ## <a name="technology-sponsors"></a>Technology Sponsors

The following companies, organizations, and individuals support GreatEfue-webstorage ongoing maintenance and development. [Become a Sponsor](https://opencollective.com/greatefue-webstorage) to get your logo on our README and website. -->

<!-- NOTE: This section is autogenerated. Do not manually edit.-->
<!--sponsorsstart-->
<!-- <h3>Platinum Sponsors</h3>
<p><a href="https://solutions.efuelite.com"><img src="https://solutions.efuelite.com/assets/img/EfueliteSolutions_Logo.png" alt="Efuelite Solutions" width="75" height="75"></a></p> -->

<!--sponsorsend-->
