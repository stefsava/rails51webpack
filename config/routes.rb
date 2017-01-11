# frozen_string_literal: true
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#welcome'
  namespace :api do
    resources :posts
  end
  # get '*path', to: 'application#welcome'
end
