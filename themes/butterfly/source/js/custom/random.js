hexo.extend.generator.register("random", function (locals) {
    const config = hexo.config.random || {};
    const posts = [];
    for (const post of locals.posts.data) {
      if (post.random !== false) posts.push(post.path);
    }
    return {
      path: config.path || "zhheo/random.js",
      data: `var posts=${JSON.stringify(
        posts
      // )};function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};`,
      // 如果你没有开启pjax用下面的代码
      )};function toRandomPost(){window.open('/'+posts[Math.floor(Math.random() * posts.length)],"_self");};`,
    };
  });