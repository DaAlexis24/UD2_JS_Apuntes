export function createHeader(title) {
  //outherHTML header
  const headerTemplate = `
      <header class="main-header">
        <img src="./favicon-2.png" width="50" height="50" alt="Logo" />
        <h1 data-id="1">${title}</h1>
      </header>`;
  return headerTemplate;
}
