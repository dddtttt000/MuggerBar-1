#!/bin/bash
cd /home/ubuntu/MuggerBar/server

export DATABASE_USER=$(aws ssm get-parameters --region us-east-2 --names DATABASE_USER --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PASSWORD=$(aws ssm get-parameters --region us-east-2 --names DATABASE_PASSWORD --query Parameters[0].Value | sed 's/"//g')
export DATABASE_DATABASE=$(aws ssm get-parameters --region us-east-2 --names DATABASE_PORT --query Parameters[0].Value | sed 's/"//g')
export DATABASE_HOST=$(aws ssm get-parameters --region us-east-2 --names DATABASE_HOST --query Parameters[0].Value | sed 's/"//g')

authbind --deep pm2 start index.js
