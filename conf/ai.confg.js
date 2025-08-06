
<script src="https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.10/libs/cn/index.js"></script>
<script>
  new CozeWebSDK.WebChatClient({
    config: {
      bot_id: '7422197593221939254',
    },
    componentProps: {
      title: 'Coze',
    },
    auth: {
      type: 'token',
      token: 'pat_********',
      onRefreshToken: function () {
        return 'pat_********'
      }
    }
  });
</script>
