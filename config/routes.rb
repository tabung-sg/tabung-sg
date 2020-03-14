Rails.application.routes.draw do
  devise_for :admin_users, path: 'admin_users'
  devise_for :users, path: 'users'

  root 'landing_page#index'
  resource 'mosques', only: [:index, :show]
end
