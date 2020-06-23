FROM nginx

RUN echo '测试2' > /usr/share/nginx/html/index

ENTRYPOINT ["nginx", "-c"] 
CMD ["/etc/nginx/nginx.conf"] 