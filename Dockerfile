FROM buildkite/puppeteer:latest

RUN apt update
RUN apt-get install -y git
RUN git clone https://github.com/mu-fazil-vk/whatsapp-bot /root/whatsapp-bot
WORKDIR /root/whatsapp-bot/
RUN npm install supervisor -g
RUN apt install -y libgbm-dev

RUN npm install
CMD ["npm", "start"]
