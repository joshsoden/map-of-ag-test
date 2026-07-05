# Map of Agriculture Interview Test

This repository provides a full stack interview test covering Angular and Laravel. Details can be found below
under [The Exercise](#exercise)

The project is intended to give us a better understanding of your abilities with these technologies, and
your approaches to completing the activities outlined.

Whilst the project is tailored to those with existing experience with both technologies, it should still be approachable
to those who have experience with similar tech stacks.

---

## Background

### The Project

The project is based on a simple "student grading system", with some activities outlined further below.

This project contains the following sub-directories and associated projects:

- `/app/`
    - An Angular (v19) Application
    - It provide a wireframe angular project with routing and (component) page ready
      to list students
- `/api/`
    - A Laravel (v12) Web API
    - It provides an API endpoint able to serve student details

Each of the above is stubbed out and provides some basic functionality.

Some technologies that we use have been deliberately left out to make this as accessible as possible. We have also aimed
to leave as much of the code as it might be found "out of the box" when stubbing new applications.

### Assumptions

You should be able to complete this test on your choice of machine, a summary of system requirements
are [noted below](#system-requirements).

It's assumed applicants will have pre-existing experience working with Angular and Laravel. Therefore we assume you
should be able to get both applications running locally.

However, some guidance is provided within the respective `/api/README.md` and `/app/README.md` so please review these
and checkout the [useful links](#useful-links) below for more information.

### System Requirements

In order to complete this test you will need the following tools:

- A code editor (e.g. PHPStorm, Visual Studio Code)
- Terminal to run shell commands
- For the API, either
    - (recommended) use of [Docker Desktop](https://www.docker.com/products/docker-desktop/) to make use
      of [Laravel Sail](https://laravel.com/docs/12.x/sail); OR
    - locally installed and configured `php (8.2+)`, `mysql` & `composer`; OR
    - use of one of the other laravel local development environments (
      e.g. [Herd](https://herd.laravel.com/))
- For the Angular web app
    - `npm` to run `npm ng serve`
    - and we recommend `npx` so you do not require a global install of the angular-cli project

---

## Exercise

### Your Details

Please enter/replace your details below.

| What        | Value                 |
|-------------|-----------------------|
| Name        | Joshua Soden          |
| Email       | joshsoden@hotmail.com |
| Date        | 2026-07-05            |
| Start Time  | 15:35                 |
| Finish Time | 17:34 (non-extras!)   |

### Instructions

We ask that you spend no more than two hours to complete this exercise.

Before you begin, please take a copy of this repository, that you can share with us via your preferred source control
platform (e.g. BitBucket, GitHub).

> Please ensure that you update your details, and record your start and finish time above within this README.md file.
>
> As you complete each item in the list below, please ensure that you mark it off by changing the `[]` to a `[x]`.
>
> Please ensure you add a commit after each step is completed.

**Frontend Activities**

- [x] The `StudentsComponent` should display a list of students in the table provided.
      Wire up the `StudentsService` and populate the table. You may notice the data
      doesn't display as expected — investigate and fix any issues.
- [x] Add a column to display grades with colour coding:
    - Green: grade > 80%
    - Orange: grade between 50% and 80%
    - Red: grade < 50%
    - **Verify your colour logic works correctly with the actual API data.**

**Backend Interaction**

- [x] Connect the frontend to the API at `http://127.0.0.1:8000/api/students/`.
      If the connection doesn't work out of the box, diagnose and resolve the issue.
- [x] Allow a student to be selected from the list to display their full details
      (id, email, etc.) Ensure all fields display correctly.

**Extras for if you have time:**

- [ ] Update the API to support searching of students; allowing partial matches on first_name OR last_name
- [ ] Add a search component to the app, above the table, allowing the students to be filtered using the new search
  capability

**Submission Requirements**

- [ ] Note any bugs you found and how you resolved them in this README
- [ ] (optional) provide a brief screen recording (1-2 min) showing the working application

---

### Useful Links

- [Angular Local Dev Environment Setup Guide](https://angular.dev/tools/cli/setup-local)
- [Laravel Getting Started Guide](https://laravel.com/docs/12.x/installation)
- [Laravel Sail Guide](https://laravel.com/docs/12.x/sail)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [PHP Composer Getting Started Guide](https://getcomposer.org/doc/00-intro.md)


## Bugs found
- JSON data set to object key so couldn't iterate w/ observer
- PHP/TS model mismatch so TS couldn't map properties