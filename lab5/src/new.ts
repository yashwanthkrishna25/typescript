export function showMessage() {
  const app = document.querySelector<HTMLDivElement>('#app')!

  app.innerHTML = `
    <div>
      <h1>Hello iam Yashwanth</h1>
      <p>This is my  page content</p>
      <button id="back">Go Back</button>
    </div>
  `

  document.getElementById('back')?.addEventListener('click', () => {
    location.reload()
  })
}
