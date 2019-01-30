#!/bin/bash
DEBUG=ics221-mb:* npm start
browser-sync start --proxy localhost:3000 --reload-delay 2000 --files
