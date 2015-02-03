from fabric.api import lcd, local


def deploy(path):
    with lcd(path):
        local('service apache2 stop')'
        local('git clean -f -d')
        local('git pull')
        local('pip install -r requirements.txt')
        local('python manage.py migrate wedinvite')
        local('python manage.py test wedsite')
        local('/my/command/to/restart/webserver')
        local('service apache2 start')
