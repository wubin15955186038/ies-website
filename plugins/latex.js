import placeholderImage from '../assets/imgs/image_placeholder.png'
import mathjax from './mathjax'
import { removeUnusedTags } from './helper'

function wrapImagePlaceholder(html) {
  return html.replace('<img', `<img onerror="this.src='${placeholderImage}'" `)
}

async function renderLatex(el, binding) {
  const style = window.getComputedStyle(el)
  const { display } = style

  // eslint-disable-next-line
  el.style.display = 'none'
  // eslint-disable-next-line
  el.innerHTML = wrapImagePlaceholder(removeUnusedTags(binding.value))

  await mathjax.render(el)

  // eslint-disable-next-line
  el.style.display = display == 'none' ? 'block' : display
}

export default {
  async update(el, binding) {
    if (binding.value === binding.oldValue) {
      return
    }
    await renderLatex(el, binding)
  },
  inserted: renderLatex
}
