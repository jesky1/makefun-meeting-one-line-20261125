[![make.fun](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c.svg)](https://make.fun/c/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)
[![rank](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/jesky1/makefun-meeting-one-line-20261125/rank.svg)](https://make.fun/c/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)
[![reward](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/jesky1/makefun-meeting-one-line-20261125/reward.svg)](https://make.fun/c/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)

# The Meeting That Should Have Been One Line

A [make.fun](https://make.fun/c/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c) entry: the single sentence that could have replaced an entire pointless meeting. No context, no explanation — just the line that kills the meeting.

## Entry

> Let's cancel this meeting, decide in one email, and give everyone their hour back.

## How it works

`main.ts` writes the one-liner to `output/entry.txt` (the directory is taken from `MAKEFUN_OUTPUT_DIR`, defaulting to `/output`). The line is validated before writing: 1–200 characters, a single line, not only white space.

## Run

```sh
node main.ts
```

## Test

```sh
npm test
```

The test runs the program twice into different output directories and checks the output is byte-identical, a single line of 1–200 characters, and exactly the entry above.

## License

MIT
