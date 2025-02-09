export function App() {
  const app = document.createElement('div');
  app.textContent = 'Hello World!';

  const img = document.createElement('img');
  img.src = 'img.png';
  app.appendChild(img);

  return app;
}
