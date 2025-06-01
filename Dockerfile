# Dockerfile for Nginx (example)
FROM nginx:alpine

# 删除默认的 Nginx 站点配置
RUN rm /etc/nginx/conf.d/next.conf

# 将你项目中的 Nginx 站点配置复制到镜像中
COPY ./nginx/conf.d/my-next-app.conf /etc/nginx/conf.d/next.conf
# 或者复制整个 conf.d 目录 (如果里面有多个文件)
# COPY ./nginx/conf.d/ /etc/nginx/conf.d/

# (可选) 如果你有自定义的 nginx.conf 主文件
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]