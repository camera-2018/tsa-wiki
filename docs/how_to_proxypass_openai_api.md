---
layout: page
---

# 反代 openai api
### 创建
创建一个vercel.json
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

> 可以装vercel-cli也可以不装，直接上传这个文件到vercel


装：
使用npm i -g vercel以安装Vercel CLI。
`vercel login`
`vercel -A vercel.json --prod`
之后就上传到了vercel，然后就可以用了

去vercel绑定你的域名
例如
`chat.typescriptactions.xyz`


去cf解析你的域名
| TYPE  | NAME | CONTENT                    | PROXYSTATUS | TTL  |
| ----- | ---- | -------------------------- | ----------- | ---- |
| CNAME | chat | cname-china.vercel-dns.com | DNS only    | Auto |


### 使用
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