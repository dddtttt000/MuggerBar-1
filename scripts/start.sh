#!/bin/bash
cd /home/ubuntu/MuggerBar/server
authbind --deep pm2 start index.js
