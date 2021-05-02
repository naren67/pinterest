import axios from 'axios'

export default axios.create({
          baseURL:'https://api.unsplash.com/',
          headers:{
                    Authorization: 'Client-ID Xf_TzJtGMvwxH7N9Zt7f26ki0JgJtwyA9f1f4kdHHTg'
          }
})