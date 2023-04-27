# nodejs-dummy

## Install git
```
sudo apt-get install git
```

## Install node
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash && . ~/.nvm/nvm.sh && nvm install --lts
```

## Allow listening on port 80
```
sudo apt-get install libcap2-bin && sudo setcap cap_net_bind_service=+ep `readlink -f \`which node\``
```

## Clone and start app
```
git clone https://github.com/nkukarl/nodejs-dummy.git && cd nodejs-dummy/ && npm install && nodemon index.js
```
