# 反代 openai api
### 创建
创建一个文件夹 新建一个 vercel.json
```json
{
  "version": 2,
  "routes": [
    {
      "src": "/(.*)",
      "dest": "https://api.openai.com"
    }
  ]
}
```

> 可以装 vercel-cli 也可以不装，也可以直接上传这个文件到 vercel


装的话：
使用 npm i -g vercel 以安装 Vercel CLI 。

`vercel login`

`vercel -A vercel.json --prod`

然后去 vercel 绑定你的域名

例如

`chat.typescriptactions.xyz`


去cf或者哪解析你的域名 cname 写这个中国的 vercel 负载均衡 服务器

| TYPE  | NAME | CONTENT                    | PROXYSTATUS | TTL  |
| ----- | ---- | -------------------------- | ----------- | ---- |
| CNAME | chat | cname-china.vercel-dns.com | DNS only    | Auto |

然后为了避免 cf 出现什么重定向问题 可以在左边 SSL/TLS 设置里把加密模式改为 `完全`

### 使用

注意 `$OPENAI_API_KEY` 替换为你自己的 apikey
```bash
curl https://chat.typescriptactions.xyz/v1/chat/completions -H "Content-Type: application/json" -H "Authorization: Bearer $OPENAI_API_KEY" -d '{"model": "gpt-3.5-turbo","messages": [{"role": "user", "content": "Hello!"}]}'
```

输出
```json
{
  "id":"chatcmpl-6zq76k7ZUw1RvQQdauiwC9NBBLh19fw",
  "object":"chat.completion",
  "created":1680196352,
  "model":"gpt-3.5-turbo-0301",
  "usage":{
    "prompt_tokens":10,
    "completion_tokens":9,
    "total_tokens":19
    },
  "choices":[
    {
      "message":{
        "role":"assistant",
        "content":"Hello, how can I assist you today"
      },
      "finish_reason":"stop",
      "index":0
    }
  ]
}
```
