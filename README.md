# tdd_in_typescript

[![codecov](https://codecov.io/gh/stybe/tdd_in_typescript/branch/master/graph/badge.svg?token=BKXYB5S792)](https://codecov.io/gh/stybe/tdd_in_typescript)

## Introduction
Test Driven Development (TDD) is a programming practice that instructs developers to write new code only if an automated test has failed.

## Steps
1. Write a test, run the tests. You will see that your test is failing.
2. Write code for that test, once you see your test has passed. Keep on repeating step 1.

## Benifits
In TDD, you only write code that is required just to make the test pass. You don't push extra code.
It is very productive in nature when working in a team. Also, team need not to have entire context of the codebase if tests are there.
If tests are there, if changing one line of code affects another part code code, your code will break, hence you will come to know and room for error is minimal.

## TODO
 - [x] Introduce Jest.
 - [x] Introduce pre-commit hook.
 - [x] Introduce pre-push hook.
 - [x] Introduce linter.
 - [ ] Fullfill prod conditions in pre-push hooks.
 - [ ] Keep adding items.
