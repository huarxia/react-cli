
build_local() {
	echo "building"
	mvn clean package -DskipTests -Plocal
	gen_output
}

build_dev() {
	echo "building"
	npm install
	npm run build
}

build_prod() {
	echo "building"
	mvn clean package -DskipTests -Pprod
	gen_output
}


deploy_prod() {
	for host in $HOSTS
	do
		echo ">>>>>>start deploy to $host.<<<<<<<"
		ssh $host "sudo systemctl stop cemarose_frog-system-provider  cemarose_frog-api"
		echo "stopped $host finished"
		scp output/* $host:/data/www/frog
		ssh $host "sudo systemctl start cemarose_frog-system-provider;sleep 5;sudo systemctl start  cemarose_frog-api"
		echo "deploy $host finished"
	done
}

deploy_dev() {
	tar -zcvf build.tar.gz build
    ssh php-dev-env "mkdir -p /data/www/FRONTEND/wechat-fe"
    scp build.tar.gz php-dev-env:/data/www/FRONTEND/wechat-fe
    ssh php-dev-env "cd /data/www/FRONTEND/wechat-fe && tar -zxvf build.tar.gz && rm -rf build.tar.gz"
    rm -rf build.tar.gz
}

do_prod() {
	build_prod
	deploy_prod
}

do_dev() {
	build_dev
	deploy_dev
}

do_local() {
	build_local
}

echo "Usage: " $(basename $0) "prod|dev|local"

eval do_$1
