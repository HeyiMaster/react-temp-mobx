import ioContext from '../../utils/io-context'

ioContext.create('home', {
  getContent: {
    url: 'topics',
    method: 'GET',
  },
  getTopicDetail: {
    url: 'topic/:id',
    method: 'GET',
  },
})
export default ioContext.api.home
