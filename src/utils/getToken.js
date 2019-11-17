const getToken = () => {
  let tokens = window.location.href.split("?")
  if (tokens.length === 2) {
    if (tokens[1].indexOf('/theme') !== -1) { // 换肤
      const theme = decodeURIComponent(tokens[1].split('/theme')[1])
      tokens[1] = tokens[1].split('/theme')[0]
      localStorage.setItem('portal_theme', theme)
    } else {
      localStorage.removeItem('portal_theme')
    }
    const search = tokens[1]
    if (search.indexOf("token") !== -1) {
      const querys = search.split("&")
      let ind = 0
      if (querys.length > 1) {
        querys.forEach((item, index) => {
          if (item.indexOf("token") !== -1) {
            let token=querys[index].split("=")[1]
            localStorage.setItem('token', token)
            ind = index
          }
        })
        querys.splice(ind, 1)
        window.location.replace("approval/index")
      } else {
        //只有 token
        let token = search.split("=")[1]
        localStorage.setItem('token', token)
        window.location.replace("/approval/index")
      }
    }
  }
}
export default getToken