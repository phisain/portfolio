import type { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly main: Locator;
  readonly heading: Locator;
  readonly astroHomepageLink: Locator;
  readonly documentationLink: Locator;
  readonly discordLink: Locator;
  readonly newsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.main = page.getByRole("main");
    this.heading = page.getByRole("heading", { level: 1 });
    this.astroHomepageLink = page.getByRole("link", {
      name: "Astro Homepage",
    });
    this.documentationLink = page.getByRole("link", {
      name: "Read our docs",
    });
    this.discordLink = page.getByRole("link", { name: /Join our Discord/ });
    this.newsLink = page.getByRole("link", {
      name: /What's New in Astro 7\.0\?/,
    });
  }

  async goto() {
    return this.page.goto("/");
  }
}
