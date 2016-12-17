// @flow

export type PullRequest = {
  number: number,
  url: string,
  title: string,
  repo: string,
}

export type Issue = {
  number: number,
  html_url: string,
  title: string,
  repository: {
    name: string,
  },
  pull_request?: {},
}

export type IssuesResponse = {
  header: {
    link?: string
  },
  body: Issue[]
}

export type User = {
  slackHandle: string,
  githubHandle: string,
  githubToken: string,
}

export type BotKitAttachment = {
  title: string,
  title_link: string,
}