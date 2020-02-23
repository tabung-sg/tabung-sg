#!/usr/bin/env bash
[ "$(docker volume ls -q | grep tabungsgpgdata)" = "" ] && docker volume create tabungsgpgdata
docker run --name tabungsgdb -v tabungsgpgdata:/var/lib/postgresql/data -e POSTGRES_PASSWORD=hunter2 -p5432:5432 -d postgres:11.5
