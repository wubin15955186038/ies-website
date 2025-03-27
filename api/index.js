export default ($axios) => {
  return {
    // 获取当前所有平台最新版本
    getLatestClientVersion: () => {
      return $axios({
        method: 'get',
        url: '/clientVersion/latests',
        baseURL: process.env.tikuURL
      })
    },
    // 获取题库查询选项
    getQueryOptions: () => {
      return $axios({
        method: 'get',
        url: '/question/queryOptions',
        baseURL: process.env.tikuURL
      })
    },
    // 分页查询题目列表
    getQuestionList: (form, pageNum, pageSize = 10) => {
      const { subjectId, levelId, examId } = form
      return $axios({
        method: 'post',
        url: '/question/query',
        baseURL: process.env.tikuURL,
        data: {
          params: {
            subjectId,
            programId: levelId,
            examBoardId: examId
          },
          start: (pageNum - 1) * pageSize,
          limit: pageSize
        }
      })
    },
    // 按ID获取题目详情
    getQuestionDetail: (id) => {
      return $axios({
        method: 'get',
        url: `/question/get/${id}`,
        baseURL: process.env.tikuURL
      })
    },
    // 按题目ID获取相关题目
    getRelatedQuestions: (id) => {
      return $axios({
        method: 'get',
        url: `/question/related/${id}`,
        baseURL: process.env.tikuURL
      })
    },

    // 根据栏目编码查询文章详情
    getByColumnCode: (params) => $axios.get('/teaching/pc/article/getByColumnCode/' + params),

    // 发送邮件
    sendEmail: (data) => $axios({ url: '/teaching/pc/email/send', method: 'post', params: data }),

    // 城市列表
    citys: (params) => $axios.get('/teaching/pc/article/citys/' + params),

    // 职位职能列表
    positions: (params) => $axios.get('/teaching/pc/article/positions/' + params),

    // 根据文章ID查询文章详情
    getEssayById: (params) => $axios.get('/teaching/pc/article/get/' + params),

    // 根据栏目ID或栏目编码获取文章分页列表
    getEssayPage: (data) => $axios({ url: '/teaching/pc/article/page', method: 'get', params: data }),

    // 根据栏目ID或栏目编码获取文章列表
    getEssaylist: (data) => $axios({ url: '/teaching/pc/article/list', method: 'get', params: data }),

    // 网站首页banner
    getbannerTops: (data) => $axios({ url: '/teaching/pc/banner/tops', method: 'get', params: data }),

    // 获取最新app版本信息
    latestVersions: (data) => $axios({ url: '/teaching/pc/app/latestVersions', method: 'get', params: data }),
    // 获取分享内容
    gptShareGetById: (id) => $axios({ url: `/teaching/gpt/share/get/${id}`, method: 'get' }),
    // 获取题目详情
    getShareAnalysis: (id) => $axios({ url: `/teaching/question/get/${id}`, method: 'get' })
  }
}
