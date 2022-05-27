<template>
  <span class="code-copy-btn" @click="copyToClipboard">{{ buttonText }}</span>
</template>

<script>
export default {
  data() {
    return {
      buttonText: copyButtonText
    }
  },
  methods: {
    copyToClipboard(el) {
      this.setClipboard(this.code, this.setText);
    },
    setClipboard(code, cb) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(code).then(
          cb,
          () => {}
        )
      } else {
        let copyelement = document.createElement('textarea')
        document.body.appendChild(copyelement)
        copyelement.value = code
        copyelement.select()
        document.execCommand('Copy')
        copyelement.remove()
        cb()
      }
    },
    setText() {
      this.buttonText = copiedButtonText

      setTimeout(() => {
        this.buttonText = copyButtonText
      }, 1000);
    }
  }
}
</script>

<style scoped>
.code-copy-btn {
  position: absolute;
  top: 4px;
  right: 8px;
  opacity: 0.75;
  cursor: pointer;
  font-size: 12px;
  color: #a2ffd5;
}

.code-copy-btn:hover {
  opacity: 1;
}
</style>