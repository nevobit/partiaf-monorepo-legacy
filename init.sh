#!/usr/bin/env bash

echo "Installing real-vision-monorepo"

if ! [ -x "$(command -v pnpm)" ]; then
  npm install -g pnpm
fi

if ! [ -x "$(command -v rush)" ]; then
  pnpm install -g @microsoft/rush
fi

if ! [ -x "$(command -v vite)" ]; then
  pnpm install -g vite
fi


echo "Will now install dependencies and link monorepo packages..."
sleep 1

rush update
echo -e "\n\n🎉 Success initializing monorepo!\n\n"
echo -e "To view available commands run:\n\n"
exit 0