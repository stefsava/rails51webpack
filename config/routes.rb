# frozen_string_literal: true
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: 'json' } do
    resources :posts

    namespace :v1 do
      namespace :core do
        post 'authenticate', to: 'authentication#authenticate'
        resources :users, :portals
      end
      namespace :water do
        resources :fontains
      end
      namespace :blog do
        resources :posts
      end
    end
  end

  root 'application#welcome' # mi piacerebbe + #spa
  get '*path', to: 'application#welcome'
end
