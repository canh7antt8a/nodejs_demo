//https://viblo.asia/p/xay-dung-full-stack-web-apps-voi-mevn-stack-phan-22-Eb85oBqml2G
import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://localhost:8989`
  })
}
