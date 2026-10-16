# Security policy

## Reporting a vulnerability

Please **do not open a public issue** for a security problem.

Report it privately instead, through GitHub:
**[Report a vulnerability](https://github.com/dhanoliya-ji/ROUTE-OPTIMIZATION-SYSTEM/security/advisories/new)**
(the *Security* tab → *Report a vulnerability*).

Useful things to include:

- what an attacker could do, and what they would need first
- steps or a request that reproduces it
- the commit or deployment you tested against

You will get an acknowledgement within a few days. This is a personal
project maintained in spare time, so a fix may take longer, but every
report is read and you will be kept informed.

## Supported versions

Only the latest commit on `master` is supported. Fixes are not backported.

## What already guards this repository

- **CodeQL** scans the code on every push and pull request.
- **Trivy** scans the Docker images weekly and whenever an image changes.
- **Dependabot** opens pull requests for vulnerable dependencies.
- **Secret scanning** with push protection blocks committed credentials.
- **OpenSSF Scorecard** grades the repository's security practices weekly.
