## 使用示例

### 在asyncData中使用
````
async asyncData({ $indexApi }) {
    const res = await $api.getData()
    // code something
},

````

### 在methods中使用
```
export default {
	methods: {
        async getData() {
            await this.$api.getData()
            // code something
        }
    }		
}
