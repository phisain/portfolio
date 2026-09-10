import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { HomePage } from "./pages/HomePage";

test.describe("Home page", () => {
  test("renders its primary content and metadata", async ({ page }) => {
    const homePage = new HomePage(page);
    const response = await homePage.goto();

    expect(response?.ok()).toBe(true);
    await expect(page).toHaveTitle("Astro Basics");
    await expect(homePage.main).toBeVisible();
    await expect(homePage.heading).toContainText("To get started");

    const hasHorizontalOverflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);
  });

  test("exposes the expected external navigation", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    await expect(homePage.astroHomepageLink).toHaveAttribute(
      "href",
      "https://astro.build",
    );
    await expect(homePage.documentationLink).toHaveAttribute(
      "href",
      "https://docs.astro.build",
    );
    await expect(homePage.discordLink).toHaveAttribute(
      "href",
      "https://astro.build/chat",
    );
    await expect(homePage.newsLink).toHaveAttribute(
      "href",
      "https://astro.build/blog/astro-7/",
    );
  });

  test("loads without browser errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("pageerror", (error) => errors.push(error.message));

    await new HomePage(page).goto();

    expect(errors).toEqual([]);
  });

  test("has no automatically detectable WCAG A or AA violations", async ({
    page,
  }) => {
    await new HomePage(page).goto();

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(results.violations).toEqual([]);
  });
});
