#!/bin/bash
cd /home/ubuntu/MuggerBar/server

export DATABASE_USERNAME=$(aws ssm get-parameters --region us-east-2 --names DATABASE_USERNAME --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PASSWORD=$(aws ssm get-parameters --region us-east-2 --names DATABASE_PASSWORD --query Parameters[0].Value | sed 's/"//g')
export DATABASE_DATABASE=$(aws ssm get-parameters --region us-east-2 --names DATABASE_DATABASE --query Parameters[0].Value | sed 's/"//g')
export DATABASE_HOST=$(aws ssm get-parameters --region us-east-2 --names DATABASE_HOST --query Parameters[0].Value | sed 's/"//g')

authbind --deep pm2 start index.js
