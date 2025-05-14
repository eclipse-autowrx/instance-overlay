# Copyright (c) 2025 Robert Bosch GmbH.
# 
# This program and the accompanying materials are made available under the
# terms of the MIT License which is available at
# https://opensource.org/licenses/MIT.
#
# SPDX-License-Identifier: MIT

cp -r ./etas/* ./autowrx
cd ./autowrx
npm install --force
npm run build
cp -r ./dist ../dist-etas
cd ..