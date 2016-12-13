# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
* suggest from:
	* http://www.christopherbloom.com/2015/04/26/setting-up-a-rails-5-app-from-edge/
	* https://github.com/rails/webpacker

0. create folder

	```
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

	```
	$ bundle
	```
0. create rails application

	```
	$ bundle exec rails new . --webpack --dev --force
	```
0. run rails

	```
	$ rails s
	```
	you can see at http://localhost:3000 the rails welcome page

	```
	Ruby on Rails (image)
	Yay! You’re on Rails!
	Welcome (image)
	Rails version: 5.1.0.alpha
	Ruby version: 2.3.1 (x86_64-darwin16)
	```
0. adopt git

	```
	$ git init
	$ git add .
	$ git commit -m "initial commit"
	```
