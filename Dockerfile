FROM quay.io/souravkl11/raganork:multidevice
RUN git clone https://github.com/erwjfixofdifdjcfidf/pvt-diana /root/queendianamd
WORKDIR /root/queendianamd
RUN git clone https://github.com/kavishkaya/upload
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit
CMD ["node", "fuckyou.js"]
