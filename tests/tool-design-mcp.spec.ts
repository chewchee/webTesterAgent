import { test, expect } from '@playwright/test';

test('Tool Design & MCP Integration navigation', async ({ page }) => {
  await page.goto('https://claudecertificationguide.com/learn');

  await page.getByText('Tool design & MCP integration', { exact: false }).click();
  await page.getByText('Tool Interface Design', { exact: false }).click();

  await expect(page).toHaveURL(/2-tool-design-mcp\/2-1-tool-schema-design/);
});
