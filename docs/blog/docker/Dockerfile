FROM nginx

RUN echo '测试2' > /usr/share/nginx/html/index

ENTRYPOINT ["nginx", "-c"] 
CMD ["/etc/nginx/nginx.conf"] 
# CMD 在Docker run的时候运行
# RUN 在Docker build时运行

ENV NODE_VERSION 10.19.0

# 设置环境变量，定义后可以通过 $NODE_VERSION 引用。

