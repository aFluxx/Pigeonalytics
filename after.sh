#!/bin/sh

# If you would like to do some extra provisioning you may
# add any commands you wish to this file and they will
# be run after the Homestead machine is provisioned.
#
# If you have user-specific configurations you would like
# to apply, you may also create user-customizations.sh,
# which will be run after this script.

wget https://xdebug.org/files/xdebug-2.9.0.tgz
tar xvzf xdebug-2.9.0.tgz
cd xdebug-2.9.0
phpize
./configure
make
sudo cp modules/xdebug.so /usr/lib/php/20160303/
cd /etc/php/7.4/fpm/conf.d/
sudo service php7.4-fpm restart

if [ ! -f /etc/php/7.4/mods-available/xdebug.ini ]; then
    echo "xdebug.ini not found"
else
    sudo truncate -s 0 /etc/php/7.4/mods-available/xdebug.ini
    sudo sh -c 'echo "zend_extension=xdebug.so" >> /etc/php/7.4/mods-available/xdebug.ini'
    sudo sh -c 'echo "xdebug.remote_enable=1" >> /etc/php/7.4/mods-available/xdebug.ini'
    sudo sh -c 'echo "xdebug.remote_connect_back=1" >> /etc/php/7.4/mods-available/xdebug.ini'
    sudo sh -c 'echo "xdebug.remote_port=9000" >> /etc/php/7.4/mods-available/xdebug.ini'
    sudo sh -c 'echo "xdebug.max_nesting_level=250" >> /etc/php/7.4/mods-available/xdebug.ini'
    sudo sh -c 'echo "xdebug.remote_autostart = 1" >> /etc/php/7.4/mods-available/xdebug.ini'
fi

if [ ! -f "/etc/php/7.4/cli/conf.d/20-xdebug.ini" ]; then
    sudo ln -s /etc/php/7.4/mods-available/xdebug.ini /etc/php/7.4/cli/conf.d/20-xdebug.ini
else
    echo '20-xdebug.ini symlink exists'
fi
sudo service php7.4-fpm restart
php -v
rm -rf ~/xdebug-2.9.0
rm ~/xdebug-2.9.0.tgz
rm ~/package.xml

# Install websockets server
sudo apt install supervisor
cd /etc/supervisor/conf.d

# Create a new websockets configuration file and fill it
sudo touch websockets.conf

sudo sh -c 'echo "[program:websockets]" >> /etc/supervisor/conf.d/websockets.conf'
sudo sh -c 'echo "command=/usr/bin/php /home/vagrant/code/artisan websockets:serve" >> /etc/supervisor/conf.d/websockets.conf'
sudo sh -c 'echo "numprocs=1" >> /etc/supervisor/conf.d/websockets.conf'
sudo sh -c 'echo "autostart=true" >> /etc/supervisor/conf.d/websockets.conf'
sudo sh -c 'echo "autorestart=true" >> /etc/supervisor/conf.d/websockets.conf'
sudo sh -c 'echo "user=vagrant" >> /etc/supervisor/conf.d/websockets.conf'
sudo sh -c 'echo "stderr_logfile=/var/log/supervisor/websockets.err.log" >> /etc/supervisor/conf.d/websockets.conf'
sudo sh -c 'echo "stdout_logfile=/var/log/supervisor/websockets.out.log" >> /etc/supervisor/conf.d/websockets.conf'

sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start websockets

curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
sudo npm install --global --unsafe-perm puppeteer
sudo chmod -R o+rx /usr/lib/node_modules/puppeteer/.local-chromium
