#!/usr/bin/env bash

#cd  $PWD/frontend
#npm install -E
npm run production
scp -rp -o ConnectTimeout=10 -P22022 public/*  thyago@rendamonitorada.com.br:/home/thyago/projetos/simulador/prevsan/public
