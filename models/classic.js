import { HTTP } from '../utils/http.js'

    class ClassicModel extends HTTP {
      getLatest(sCallback) {
        console.log(sCallback)
        this.request({
          url: 'classic/latest',
          success: (res) => {
            // 如果不用箭头函数，this将指代不正确
            sCallback(res)
          }
        })
      }
    }

    export { ClassicModel }
