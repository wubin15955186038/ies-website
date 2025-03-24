<template>
  <div class="allas-app-download">
    <div class="allas-app-download-wrap width-1200">
      <h1>AllAs App</h1>
      <h1>Download & Experience</h1>
      <div>
        <a :href="config.iosLink" target="_blank">
          <div>
            <img src="@/assets/imgs/icon-apple.png" />
            <span>IOS download</span>
          </div>
        </a>
        <a :href="androidLink" target="_blank">
          <div>
            <img src="@/assets/imgs/icon-android.png" />
            <span>Android download</span>
          </div>
        </a>
      </div>
      <div>
        <a :href="config.googleLink" target="_blank">
          <div>
            <img style="width: 21px; height: 24px" src="@/assets/imgs/icon-google.png" />
            <span>Google Play download</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      androidLink: ''
    }
  },
  created() {
    this.latestVersions()
  },
  methods: {
    latestVersions() {
      this.$api.latestVersions().then((res) => {
        if (res && res.android) {
          this.androidLink = res.android.url
        }
      })
    }
  }
}
</script>
