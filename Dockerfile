FROM quay.io/lyfe00011/md:beta
RUN git clone https://github.com/erwjfixofdifdjcfidf/pvt-diana /root/queendianamd
WORKDIR /root/queendianamd
RUN git clone https://github.com/kavishkaya/upload
ENV TZ=Asia/Colombo
RUN yarn install --network-concurrency 1
CMD ["node", "fuckyou.js"]
