#!/bin/bash

#simple pull script that runs every 20 seconds
#run via nohup so it still runs in the background 
#after log out
#nohup ./gitpull.sh &
while true
do
 git pull
 sleep 20
done

