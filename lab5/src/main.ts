import './style.css'
import { showMessage } from './new'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="https://w0.peakpx.com/wallpaper/137/542/HD-wallpaper-republic-of-gamers-abstract-logo-republic-of-gamers-asus-computer-games-logo-abstract.jpg" class="logo" alt="Vite logo" />

    <h1>Hello Friends</h1>

    <div class="card">
      <button id="counter" type="button">Go to My Page</button>
    </div>
  </div>
`

document
  .getElementById('counter')
  ?.addEventListener('click', showMessage)
