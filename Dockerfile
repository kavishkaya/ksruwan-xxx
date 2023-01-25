FROM node:latest
RUN git clone https://github.com/kavishkaya/ksruwan-xxx /root/queendianamd
WORKDIR /root/queendianamd
RUN git clone https://github.com/kavishkaya/upload
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit
CMD ["node", "fuckyou.js"]
