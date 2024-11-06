FROM mcr.microsoft.com/playwright:v1.48.2-jammy
RUN mkdir -p /home/pwuser/test
ADD . /home/pwuser/test
WORKDIR /home/pwuser/test
RUN npm install