# README

This README would document whatever steps are necessary to get the
application up and running.

* Suggest from:
  * http://www.christopherbloom.com/2015/04/26/setting-up-a-rails-5-app-from-edge/
  * https://github.com/rails/webpacker

0. create folder

  ```sh
  $ mkdir test-rails-51
  $ cd test-rails-51
  ```
0. create Gemfile

  ```ruby
  source "https://rubygems.org"
  ruby '2.3.1'
  gem 'rails', :git => 'https://github.com/rails/rails.git'
  gem 'rack', :git => 'https://github.com/rack/rack.git'
  gem 'arel', :git => 'https://github.com/rails/arel.git'
  ```
0. run bundle

  ```sh
  $ bundle
  ```
0. create rails application

  ```sh
  $ bundle exec rails new . --webpack --dev --force
  ```
0. run rails and webpack-watcher

  ```sh
  $ rails s
  ```
  in another console

  ```sh
  $ ./bin/webpack-watcher
  ```
  you can see at http://localhost:3000 the rails welcome page

  ```sh
  Ruby on Rails (image)
  Yay! You’re on Rails!
  Welcome (image)
  Rails version: 5.1.0.alpha
  Ruby version: 2.3.1 (x86_64-darwin16)
  ```

0. initialize git

  ```sh
  $ git init
  $ git add .
  $ git commit -m "initial commit"
  ```
0. add react with webpacker

  ```sh
  $ rails webpacker:install:react
  ```

0. add redux and react-redux

  ```sh
  $ bin/yarn add redux
  $ bin/yarn add react-redux
  ```

### Initializing from the repo

When you download from git, you need this extra step:

  ```sh
  $ bin/yarn
  ```
