function MathJax() {
  if (!(this instanceof MathJax)) {
    return new MathJax()
  }
}

MathJax.prototype = {
  async load() {
    if (this.loaded && window.MathJax) {
      return true
    }
    const script = document.createElement('script')

    await new Promise((resolve) => {
      const ready = async () => {
        window.MathJax.startup.defaultReady()
        await window.MathJax.startup.promise
        this.loaded = true
        resolve(this)
      }

      // eslint-disable-next-line no-multi-assign
      window.MathJax = {
        tex: {
          inlineMath: [
            ['$', '$'],
            ['\\(', '\\)']
          ]
        },
        loader: { load: ['input/tex', 'output/chtml'] },
        startup: { ready },
        chtml: {
          scale: 1
          // 缩放比例
        },
        options: {
          skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'a'], // 避开某些标签
          ignoreHtmlClass: 'tex2jax_ignore',
          processHtmlClass: 'tex2jax_process'
        }
      }
      script.src = '/mathjax/tex-chtml.js'
      document.body.appendChild(script)
    })

    return this
  },

  async render(nodes = []) {
    let elements = nodes
    if (elements && !Array.isArray(elements)) {
      elements = [elements]
    }
    if (!this.loaded) {
      await this.load()
    }
    await window.MathJax.typesetClear()
    await window.MathJax.typesetPromise()
  }
}

const mathjax = new MathJax()

export default mathjax
